function aT(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var og = { exports: {} }, $e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N1;
function nT() {
  if (N1) return $e;
  N1 = 1;
  var x = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), Me = Symbol.for("react.consumer"), at = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), J = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function M(g) {
    return g === null || typeof g != "object" ? null : (g = $ && g[$] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, me = Object.assign, ct = {};
  function De(g, B, Z) {
    this.props = g, this.context = B, this.refs = ct, this.updater = Z || le;
  }
  De.prototype.isReactComponent = {}, De.prototype.setState = function(g, B) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, B, "setState");
  }, De.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function He() {
  }
  He.prototype = De.prototype;
  function Tt(g, B, Z) {
    this.props = g, this.context = B, this.refs = ct, this.updater = Z || le;
  }
  var tt = Tt.prototype = new He();
  tt.constructor = Tt, me(tt, De.prototype), tt.isPureReactComponent = !0;
  var Ft = Array.isArray, Ye = { H: null, A: null, T: null, S: null, V: null }, Ot = Object.prototype.hasOwnProperty;
  function We(g, B, Z, I, ue, Ae) {
    return Z = Ae.ref, {
      $$typeof: x,
      type: g,
      key: B,
      ref: Z !== void 0 ? Z : null,
      props: Ae
    };
  }
  function Dt(g, B) {
    return We(
      g.type,
      B,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function re(g) {
    return typeof g == "object" && g !== null && g.$$typeof === x;
  }
  function Mt(g) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Z) {
      return B[Z];
    });
  }
  var be = /\/+/g;
  function ze(g, B) {
    return typeof g == "object" && g !== null && g.key != null ? Mt("" + g.key) : B.toString(36);
  }
  function Ut() {
  }
  function jt(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(Ut, Ut) : (g.status = "pending", g.then(
          function(B) {
            g.status === "pending" && (g.status = "fulfilled", g.value = B);
          },
          function(B) {
            g.status === "pending" && (g.status = "rejected", g.reason = B);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function mt(g, B, Z, I, ue) {
    var Ae = typeof g;
    (Ae === "undefined" || Ae === "boolean") && (g = null);
    var ie = !1;
    if (g === null) ie = !0;
    else
      switch (Ae) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case x:
            case F:
              ie = !0;
              break;
            case oe:
              return ie = g._init, mt(
                ie(g._payload),
                B,
                Z,
                I,
                ue
              );
          }
      }
    if (ie)
      return ue = ue(g), ie = I === "" ? "." + ze(g, 0) : I, Ft(ue) ? (Z = "", ie != null && (Z = ie.replace(be, "$&/") + "/"), mt(ue, B, Z, "", function(Nt) {
        return Nt;
      })) : ue != null && (re(ue) && (ue = Dt(
        ue,
        Z + (ue.key == null || g && g.key === ue.key ? "" : ("" + ue.key).replace(
          be,
          "$&/"
        ) + "/") + ie
      )), B.push(ue)), 1;
    ie = 0;
    var nl = I === "" ? "." : I + ":";
    if (Ft(g))
      for (var Ce = 0; Ce < g.length; Ce++)
        I = g[Ce], Ae = nl + ze(I, Ce), ie += mt(
          I,
          B,
          Z,
          Ae,
          ue
        );
    else if (Ce = M(g), typeof Ce == "function")
      for (g = Ce.call(g), Ce = 0; !(I = g.next()).done; )
        I = I.value, Ae = nl + ze(I, Ce++), ie += mt(
          I,
          B,
          Z,
          Ae,
          ue
        );
    else if (Ae === "object") {
      if (typeof g.then == "function")
        return mt(
          jt(g),
          B,
          Z,
          I,
          ue
        );
      throw B = String(g), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function O(g, B, Z) {
    if (g == null) return g;
    var I = [], ue = 0;
    return mt(g, I, "", "", function(Ae) {
      return B.call(Z, Ae, ue++);
    }), I;
  }
  function W(g) {
    if (g._status === -1) {
      var B = g._result;
      B = B(), B.then(
        function(Z) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Z);
        },
        function(Z) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Z);
        }
      ), g._status === -1 && (g._status = 0, g._result = B);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var P = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function pe() {
  }
  return $e.Children = {
    map: O,
    forEach: function(g, B, Z) {
      O(
        g,
        function() {
          B.apply(this, arguments);
        },
        Z
      );
    },
    count: function(g) {
      var B = 0;
      return O(g, function() {
        B++;
      }), B;
    },
    toArray: function(g) {
      return O(g, function(B) {
        return B;
      }) || [];
    },
    only: function(g) {
      if (!re(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, $e.Component = De, $e.Fragment = ge, $e.Profiler = Ee, $e.PureComponent = Tt, $e.StrictMode = U, $e.Suspense = w, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ye, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return Ye.H.useMemoCache(g);
    }
  }, $e.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, $e.cloneElement = function(g, B, Z) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var I = me({}, g.props), ue = g.key, Ae = void 0;
    if (B != null)
      for (ie in B.ref !== void 0 && (Ae = void 0), B.key !== void 0 && (ue = "" + B.key), B)
        !Ot.call(B, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && B.ref === void 0 || (I[ie] = B[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) I.children = Z;
    else if (1 < ie) {
      for (var nl = Array(ie), Ce = 0; Ce < ie; Ce++)
        nl[Ce] = arguments[Ce + 2];
      I.children = nl;
    }
    return We(g.type, ue, void 0, void 0, Ae, I);
  }, $e.createContext = function(g) {
    return g = {
      $$typeof: at,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: Me,
      _context: g
    }, g;
  }, $e.createElement = function(g, B, Z) {
    var I, ue = {}, Ae = null;
    if (B != null)
      for (I in B.key !== void 0 && (Ae = "" + B.key), B)
        Ot.call(B, I) && I !== "key" && I !== "__self" && I !== "__source" && (ue[I] = B[I]);
    var ie = arguments.length - 2;
    if (ie === 1) ue.children = Z;
    else if (1 < ie) {
      for (var nl = Array(ie), Ce = 0; Ce < ie; Ce++)
        nl[Ce] = arguments[Ce + 2];
      ue.children = nl;
    }
    if (g && g.defaultProps)
      for (I in ie = g.defaultProps, ie)
        ue[I] === void 0 && (ue[I] = ie[I]);
    return We(g, Ae, void 0, void 0, null, ue);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(g) {
    return { $$typeof: yt, render: g };
  }, $e.isValidElement = re, $e.lazy = function(g) {
    return {
      $$typeof: oe,
      _payload: { _status: -1, _result: g },
      _init: W
    };
  }, $e.memo = function(g, B) {
    return {
      $$typeof: J,
      type: g,
      compare: B === void 0 ? null : B
    };
  }, $e.startTransition = function(g) {
    var B = Ye.T, Z = {};
    Ye.T = Z;
    try {
      var I = g(), ue = Ye.S;
      ue !== null && ue(Z, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(pe, P);
    } catch (Ae) {
      P(Ae);
    } finally {
      Ye.T = B;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return Ye.H.useCacheRefresh();
  }, $e.use = function(g) {
    return Ye.H.use(g);
  }, $e.useActionState = function(g, B, Z) {
    return Ye.H.useActionState(g, B, Z);
  }, $e.useCallback = function(g, B) {
    return Ye.H.useCallback(g, B);
  }, $e.useContext = function(g) {
    return Ye.H.useContext(g);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(g, B) {
    return Ye.H.useDeferredValue(g, B);
  }, $e.useEffect = function(g, B, Z) {
    var I = Ye.H;
    if (typeof Z == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return I.useEffect(g, B);
  }, $e.useId = function() {
    return Ye.H.useId();
  }, $e.useImperativeHandle = function(g, B, Z) {
    return Ye.H.useImperativeHandle(g, B, Z);
  }, $e.useInsertionEffect = function(g, B) {
    return Ye.H.useInsertionEffect(g, B);
  }, $e.useLayoutEffect = function(g, B) {
    return Ye.H.useLayoutEffect(g, B);
  }, $e.useMemo = function(g, B) {
    return Ye.H.useMemo(g, B);
  }, $e.useOptimistic = function(g, B) {
    return Ye.H.useOptimistic(g, B);
  }, $e.useReducer = function(g, B, Z) {
    return Ye.H.useReducer(g, B, Z);
  }, $e.useRef = function(g) {
    return Ye.H.useRef(g);
  }, $e.useState = function(g) {
    return Ye.H.useState(g);
  }, $e.useSyncExternalStore = function(g, B, Z) {
    return Ye.H.useSyncExternalStore(
      g,
      B,
      Z
    );
  }, $e.useTransition = function() {
    return Ye.H.useTransition();
  }, $e.version = "19.1.1", $e;
}
var vp = { exports: {} };
vp.exports;
var B1;
function uT() {
  return B1 || (B1 = 1, (function(x, F) {
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "production".NODE_ENV !== "production" && (function() {
      function ge(m, D) {
        Object.defineProperty(Me.prototype, m, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              D[0],
              D[1]
            );
          }
        });
      }
      function U(m) {
        return m === null || typeof m != "object" ? null : (m = An && m[An] || m["@@iterator"], typeof m == "function" ? m : null);
      }
      function Ee(m, D) {
        m = (m = m.constructor) && (m.displayName || m.name) || "ReactClass";
        var te = m + "." + D;
        ji[te] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          D,
          m
        ), ji[te] = !0);
      }
      function Me(m, D, te) {
        this.props = m, this.context = D, this.refs = df, this.updater = te || Rn;
      }
      function at() {
      }
      function yt(m, D, te) {
        this.props = m, this.context = D, this.refs = df, this.updater = te || Rn;
      }
      function w(m) {
        return "" + m;
      }
      function J(m) {
        try {
          w(m);
          var D = !1;
        } catch {
          D = !0;
        }
        if (D) {
          D = console;
          var te = D.error, ne = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return te.call(
            D,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ne
          ), w(m);
        }
      }
      function oe(m) {
        if (m == null) return null;
        if (typeof m == "function")
          return m.$$typeof === Pr ? null : m.displayName || m.name || null;
        if (typeof m == "string") return m;
        switch (m) {
          case g:
            return "Fragment";
          case Z:
            return "Profiler";
          case B:
            return "StrictMode";
          case ie:
            return "Suspense";
          case nl:
            return "SuspenseList";
          case ta:
            return "Activity";
        }
        if (typeof m == "object")
          switch (typeof m.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), m.$$typeof) {
            case pe:
              return "Portal";
            case ue:
              return (m.displayName || "Context") + ".Provider";
            case I:
              return (m._context.displayName || "Context") + ".Consumer";
            case Ae:
              var D = m.render;
              return m = m.displayName, m || (m = D.displayName || D.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
            case Ce:
              return D = m.displayName || null, D !== null ? D : oe(m.type) || "Memo";
            case Nt:
              D = m._payload, m = m._init;
              try {
                return oe(m(D));
              } catch {
              }
          }
        return null;
      }
      function $(m) {
        if (m === g) return "<>";
        if (typeof m == "object" && m !== null && m.$$typeof === Nt)
          return "<...>";
        try {
          var D = oe(m);
          return D ? "<" + D + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function M() {
        var m = Qe.A;
        return m === null ? null : m.getOwner();
      }
      function le() {
        return Error("react-stack-top-frame");
      }
      function me(m) {
        if (On.call(m, "key")) {
          var D = Object.getOwnPropertyDescriptor(m, "key").get;
          if (D && D.isReactWarning) return !1;
        }
        return m.key !== void 0;
      }
      function ct(m, D) {
        function te() {
          mu || (mu = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            D
          ));
        }
        te.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: te,
          configurable: !0
        });
      }
      function De() {
        var m = oe(this.type);
        return hf[m] || (hf[m] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), m = this.props.ref, m !== void 0 ? m : null;
      }
      function He(m, D, te, ne, ye, xe, we, nt) {
        return te = xe.ref, m = {
          $$typeof: P,
          type: m,
          key: D,
          props: xe,
          _owner: ye
        }, (te !== void 0 ? te : null) !== null ? Object.defineProperty(m, "ref", {
          enumerable: !1,
          get: De
        }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(m, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(m, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: we
        }), Object.defineProperty(m, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: nt
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      }
      function Tt(m, D) {
        return D = He(
          m.type,
          D,
          void 0,
          void 0,
          m._owner,
          m.props,
          m._debugStack,
          m._debugTask
        ), m._store && (D._store.validated = m._store.validated), D;
      }
      function tt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === P;
      }
      function Ft(m) {
        var D = { "=": "=0", ":": "=2" };
        return "$" + m.replace(/[=:]/g, function(te) {
          return D[te];
        });
      }
      function Ye(m, D) {
        return typeof m == "object" && m !== null && m.key != null ? (J(m.key), Ft("" + m.key)) : D.toString(36);
      }
      function Ot() {
      }
      function We(m) {
        switch (m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
          default:
            switch (typeof m.status == "string" ? m.then(Ot, Ot) : (m.status = "pending", m.then(
              function(D) {
                m.status === "pending" && (m.status = "fulfilled", m.value = D);
              },
              function(D) {
                m.status === "pending" && (m.status = "rejected", m.reason = D);
              }
            )), m.status) {
              case "fulfilled":
                return m.value;
              case "rejected":
                throw m.reason;
            }
        }
        throw m;
      }
      function Dt(m, D, te, ne, ye) {
        var xe = typeof m;
        (xe === "undefined" || xe === "boolean") && (m = null);
        var we = !1;
        if (m === null) we = !0;
        else
          switch (xe) {
            case "bigint":
            case "string":
            case "number":
              we = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case P:
                case pe:
                  we = !0;
                  break;
                case Nt:
                  return we = m._init, Dt(
                    we(m._payload),
                    D,
                    te,
                    ne,
                    ye
                  );
              }
          }
        if (we) {
          we = m, ye = ye(we);
          var nt = ne === "" ? "." + Ye(we, 0) : ne;
          return ku(ye) ? (te = "", nt != null && (te = nt.replace(Al, "$&/") + "/"), Dt(ye, D, te, "", function(el) {
            return el;
          })) : ye != null && (tt(ye) && (ye.key != null && (we && we.key === ye.key || J(ye.key)), te = Tt(
            ye,
            te + (ye.key == null || we && we.key === ye.key ? "" : ("" + ye.key).replace(
              Al,
              "$&/"
            ) + "/") + nt
          ), ne !== "" && we != null && tt(we) && we.key == null && we._store && !we._store.validated && (te._store.validated = 2), ye = te), D.push(ye)), 1;
        }
        if (we = 0, nt = ne === "" ? "." : ne + ":", ku(m))
          for (var qe = 0; qe < m.length; qe++)
            ne = m[qe], xe = nt + Ye(ne, qe), we += Dt(
              ne,
              D,
              te,
              xe,
              ye
            );
        else if (qe = U(m), typeof qe == "function")
          for (qe === m.entries && (Ba || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ba = !0), m = qe.call(m), qe = 0; !(ne = m.next()).done; )
            ne = ne.value, xe = nt + Ye(ne, qe++), we += Dt(
              ne,
              D,
              te,
              xe,
              ye
            );
        else if (xe === "object") {
          if (typeof m.then == "function")
            return Dt(
              We(m),
              D,
              te,
              ne,
              ye
            );
          throw D = String(m), Error(
            "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return we;
      }
      function re(m, D, te) {
        if (m == null) return m;
        var ne = [], ye = 0;
        return Dt(m, ne, "", "", function(xe) {
          return D.call(te, xe, ye++);
        }), ne;
      }
      function Mt(m) {
        if (m._status === -1) {
          var D = m._result;
          D = D(), D.then(
            function(te) {
              (m._status === 0 || m._status === -1) && (m._status = 1, m._result = te);
            },
            function(te) {
              (m._status === 0 || m._status === -1) && (m._status = 2, m._result = te);
            }
          ), m._status === -1 && (m._status = 0, m._result = D);
        }
        if (m._status === 1)
          return D = m._result, D === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            D
          ), "default" in D || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            D
          ), D.default;
        throw m._result;
      }
      function be() {
        var m = Qe.H;
        return m === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), m;
      }
      function ze() {
      }
      function Ut(m) {
        if ($c === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7);
            $c = (x && x[D]).call(
              x,
              "timers"
            ).setImmediate;
          } catch {
            $c = function(ne) {
              yf === !1 && (yf = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = ne, ye.port2.postMessage(void 0);
            };
          }
        return $c(m);
      }
      function jt(m) {
        return 1 < m.length && typeof AggregateError == "function" ? new AggregateError(m) : m[0];
      }
      function mt(m, D) {
        D !== tn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), tn = D;
      }
      function O(m, D, te) {
        var ne = Qe.actQueue;
        if (ne !== null)
          if (ne.length !== 0)
            try {
              W(ne), Ut(function() {
                return O(m, D, te);
              });
              return;
            } catch (ye) {
              Qe.thrownErrors.push(ye);
            }
          else Qe.actQueue = null;
        0 < Qe.thrownErrors.length ? (ne = jt(Qe.thrownErrors), Qe.thrownErrors.length = 0, te(ne)) : D(m);
      }
      function W(m) {
        if (!Rl) {
          Rl = !0;
          var D = 0;
          try {
            for (; D < m.length; D++) {
              var te = m[D];
              do {
                Qe.didUsePromise = !1;
                var ne = te(!1);
                if (ne !== null) {
                  if (Qe.didUsePromise) {
                    m[D] = te, m.splice(0, D);
                    return;
                  }
                  te = ne;
                } else break;
              } while (!0);
            }
            m.length = 0;
          } catch (ye) {
            m.splice(0, D + 1), Qe.thrownErrors.push(ye);
          } finally {
            Rl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var P = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), ue = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), nl = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), ta = Symbol.for("react.activity"), An = Symbol.iterator, ji = {}, Rn = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(m) {
          Ee(m, "forceUpdate");
        },
        enqueueReplaceState: function(m) {
          Ee(m, "replaceState");
        },
        enqueueSetState: function(m) {
          Ee(m, "setState");
        }
      }, Kc = Object.assign, df = {};
      Object.freeze(df), Me.prototype.isReactComponent = {}, Me.prototype.setState = function(m, D) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, m, D, "setState");
      }, Me.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      var Pt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, hl;
      for (hl in Pt)
        Pt.hasOwnProperty(hl) && ge(hl, Pt[hl]);
      at.prototype = Me.prototype, Pt = yt.prototype = new at(), Pt.constructor = yt, Kc(Pt, Me.prototype), Pt.isPureReactComponent = !0;
      var ku = Array.isArray, Pr = Symbol.for("react.client.reference"), Qe = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, On = Object.prototype.hasOwnProperty, Jc = console.createTask ? console.createTask : function() {
        return null;
      };
      Pt = {
        react_stack_bottom_frame: function(m) {
          return m();
        }
      };
      var mu, es, hf = {}, $u = Pt.react_stack_bottom_frame.bind(
        Pt,
        le
      )(), El = Jc($(le)), Ba = !1, Al = /\/+/g, kc = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var D = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
            error: m
          });
          if (!window.dispatchEvent(D)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", m);
          return;
        }
        console.error(m);
      }, yf = !1, $c = null, tn = 0, la = !1, Rl = !1, ln = typeof queueMicrotask == "function" ? function(m) {
        queueMicrotask(function() {
          return queueMicrotask(m);
        });
      } : Ut;
      Pt = Object.freeze({
        __proto__: null,
        c: function(m) {
          return be().useMemoCache(m);
        }
      }), F.Children = {
        map: re,
        forEach: function(m, D, te) {
          re(
            m,
            function() {
              D.apply(this, arguments);
            },
            te
          );
        },
        count: function(m) {
          var D = 0;
          return re(m, function() {
            D++;
          }), D;
        },
        toArray: function(m) {
          return re(m, function(D) {
            return D;
          }) || [];
        },
        only: function(m) {
          if (!tt(m))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return m;
        }
      }, F.Component = Me, F.Fragment = g, F.Profiler = Z, F.PureComponent = yt, F.StrictMode = B, F.Suspense = ie, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qe, F.__COMPILER_RUNTIME = Pt, F.act = function(m) {
        var D = Qe.actQueue, te = tn;
        tn++;
        var ne = Qe.actQueue = D !== null ? D : [], ye = !1;
        try {
          var xe = m();
        } catch (qe) {
          Qe.thrownErrors.push(qe);
        }
        if (0 < Qe.thrownErrors.length)
          throw mt(D, te), m = jt(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        if (xe !== null && typeof xe == "object" && typeof xe.then == "function") {
          var we = xe;
          return ln(function() {
            ye || la || (la = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(qe, el) {
              ye = !0, we.then(
                function(an) {
                  if (mt(D, te), te === 0) {
                    try {
                      W(ne), Ut(function() {
                        return O(
                          an,
                          qe,
                          el
                        );
                      });
                    } catch (Rh) {
                      Qe.thrownErrors.push(Rh);
                    }
                    if (0 < Qe.thrownErrors.length) {
                      var ts = jt(
                        Qe.thrownErrors
                      );
                      Qe.thrownErrors.length = 0, el(ts);
                    }
                  } else qe(an);
                },
                function(an) {
                  mt(D, te), 0 < Qe.thrownErrors.length && (an = jt(
                    Qe.thrownErrors
                  ), Qe.thrownErrors.length = 0), el(an);
                }
              );
            }
          };
        }
        var nt = xe;
        if (mt(D, te), te === 0 && (W(ne), ne.length !== 0 && ln(function() {
          ye || la || (la = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Qe.actQueue = null), 0 < Qe.thrownErrors.length)
          throw m = jt(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        return {
          then: function(qe, el) {
            ye = !0, te === 0 ? (Qe.actQueue = ne, Ut(function() {
              return O(
                nt,
                qe,
                el
              );
            })) : qe(nt);
          }
        };
      }, F.cache = function(m) {
        return function() {
          return m.apply(null, arguments);
        };
      }, F.captureOwnerStack = function() {
        var m = Qe.getCurrentStack;
        return m === null ? null : m();
      }, F.cloneElement = function(m, D, te) {
        if (m == null)
          throw Error(
            "The argument must be a React element, but you passed " + m + "."
          );
        var ne = Kc({}, m.props), ye = m.key, xe = m._owner;
        if (D != null) {
          var we;
          e: {
            if (On.call(D, "ref") && (we = Object.getOwnPropertyDescriptor(
              D,
              "ref"
            ).get) && we.isReactWarning) {
              we = !1;
              break e;
            }
            we = D.ref !== void 0;
          }
          we && (xe = M()), me(D) && (J(D.key), ye = "" + D.key);
          for (nt in D)
            !On.call(D, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && D.ref === void 0 || (ne[nt] = D[nt]);
        }
        var nt = arguments.length - 2;
        if (nt === 1) ne.children = te;
        else if (1 < nt) {
          we = Array(nt);
          for (var qe = 0; qe < nt; qe++)
            we[qe] = arguments[qe + 2];
          ne.children = we;
        }
        for (ne = He(
          m.type,
          ye,
          void 0,
          void 0,
          xe,
          ne,
          m._debugStack,
          m._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          xe = arguments[ye], tt(xe) && xe._store && (xe._store.validated = 1);
        return ne;
      }, F.createContext = function(m) {
        return m = {
          $$typeof: ue,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, m.Provider = m, m.Consumer = {
          $$typeof: I,
          _context: m
        }, m._currentRenderer = null, m._currentRenderer2 = null, m;
      }, F.createElement = function(m, D, te) {
        for (var ne = 2; ne < arguments.length; ne++) {
          var ye = arguments[ne];
          tt(ye) && ye._store && (ye._store.validated = 1);
        }
        if (ne = {}, ye = null, D != null)
          for (qe in es || !("__self" in D) || "key" in D || (es = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), me(D) && (J(D.key), ye = "" + D.key), D)
            On.call(D, qe) && qe !== "key" && qe !== "__self" && qe !== "__source" && (ne[qe] = D[qe]);
        var xe = arguments.length - 2;
        if (xe === 1) ne.children = te;
        else if (1 < xe) {
          for (var we = Array(xe), nt = 0; nt < xe; nt++)
            we[nt] = arguments[nt + 2];
          Object.freeze && Object.freeze(we), ne.children = we;
        }
        if (m && m.defaultProps)
          for (qe in xe = m.defaultProps, xe)
            ne[qe] === void 0 && (ne[qe] = xe[qe]);
        ye && ct(
          ne,
          typeof m == "function" ? m.displayName || m.name || "Unknown" : m
        );
        var qe = 1e4 > Qe.recentlyCreatedOwnerStacks++;
        return He(
          m,
          ye,
          void 0,
          void 0,
          M(),
          ne,
          qe ? Error("react-stack-top-frame") : $u,
          qe ? Jc($(m)) : El
        );
      }, F.createRef = function() {
        var m = { current: null };
        return Object.seal(m), m;
      }, F.forwardRef = function(m) {
        m != null && m.$$typeof === Ce ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof m != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          m === null ? "null" : typeof m
        ) : m.length !== 0 && m.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), m != null && m.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var D = { $$typeof: Ae, render: m }, te;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ne) {
            te = ne, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ne }), m.displayName = ne);
          }
        }), D;
      }, F.isValidElement = tt, F.lazy = function(m) {
        return {
          $$typeof: Nt,
          _payload: { _status: -1, _result: m },
          _init: Mt
        };
      }, F.memo = function(m, D) {
        m == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          m === null ? "null" : typeof m
        ), D = {
          $$typeof: Ce,
          type: m,
          compare: D === void 0 ? null : D
        };
        var te;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ne) {
            te = ne, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ne }), m.displayName = ne);
          }
        }), D;
      }, F.startTransition = function(m) {
        var D = Qe.T, te = {};
        Qe.T = te, te._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var ne = m(), ye = Qe.S;
          ye !== null && ye(te, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(ze, kc);
        } catch (xe) {
          kc(xe);
        } finally {
          D === null && te._updatedFibers && (m = te._updatedFibers.size, te._updatedFibers.clear(), 10 < m && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Qe.T = D;
        }
      }, F.unstable_useCacheRefresh = function() {
        return be().useCacheRefresh();
      }, F.use = function(m) {
        return be().use(m);
      }, F.useActionState = function(m, D, te) {
        return be().useActionState(
          m,
          D,
          te
        );
      }, F.useCallback = function(m, D) {
        return be().useCallback(m, D);
      }, F.useContext = function(m) {
        var D = be();
        return m.$$typeof === I && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), D.useContext(m);
      }, F.useDebugValue = function(m, D) {
        return be().useDebugValue(m, D);
      }, F.useDeferredValue = function(m, D) {
        return be().useDeferredValue(m, D);
      }, F.useEffect = function(m, D, te) {
        m == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var ne = be();
        if (typeof te == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return ne.useEffect(m, D);
      }, F.useId = function() {
        return be().useId();
      }, F.useImperativeHandle = function(m, D, te) {
        return be().useImperativeHandle(m, D, te);
      }, F.useInsertionEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), be().useInsertionEffect(m, D);
      }, F.useLayoutEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), be().useLayoutEffect(m, D);
      }, F.useMemo = function(m, D) {
        return be().useMemo(m, D);
      }, F.useOptimistic = function(m, D) {
        return be().useOptimistic(m, D);
      }, F.useReducer = function(m, D, te) {
        return be().useReducer(m, D, te);
      }, F.useRef = function(m) {
        return be().useRef(m);
      }, F.useState = function(m) {
        return be().useState(m);
      }, F.useSyncExternalStore = function(m, D, te) {
        return be().useSyncExternalStore(
          m,
          D,
          te
        );
      }, F.useTransition = function() {
        return be().useTransition();
      }, F.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(vp, vp.exports)), vp.exports;
}
var Y1;
function Ah() {
  return Y1 || (Y1 = 1, "production".NODE_ENV === "production" ? og.exports = nT() : og.exports = uT()), og.exports;
}
var iT = Ah();
const $1 = /* @__PURE__ */ aT(iT);
var fg = { exports: {} }, hp = {}, rg = { exports: {} }, x0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function cT() {
  return q1 || (q1 = 1, (function(x) {
    function F(O, W) {
      var P = O.length;
      O.push(W);
      e: for (; 0 < P; ) {
        var pe = P - 1 >>> 1, g = O[pe];
        if (0 < Ee(g, W))
          O[pe] = W, O[P] = g, P = pe;
        else break e;
      }
    }
    function ge(O) {
      return O.length === 0 ? null : O[0];
    }
    function U(O) {
      if (O.length === 0) return null;
      var W = O[0], P = O.pop();
      if (P !== W) {
        O[0] = P;
        e: for (var pe = 0, g = O.length, B = g >>> 1; pe < B; ) {
          var Z = 2 * (pe + 1) - 1, I = O[Z], ue = Z + 1, Ae = O[ue];
          if (0 > Ee(I, P))
            ue < g && 0 > Ee(Ae, I) ? (O[pe] = Ae, O[ue] = P, pe = ue) : (O[pe] = I, O[Z] = P, pe = Z);
          else if (ue < g && 0 > Ee(Ae, P))
            O[pe] = Ae, O[ue] = P, pe = ue;
          else break e;
        }
      }
      return W;
    }
    function Ee(O, W) {
      var P = O.sortIndex - W.sortIndex;
      return P !== 0 ? P : O.id - W.id;
    }
    if (x.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Me = performance;
      x.unstable_now = function() {
        return Me.now();
      };
    } else {
      var at = Date, yt = at.now();
      x.unstable_now = function() {
        return at.now() - yt;
      };
    }
    var w = [], J = [], oe = 1, $ = null, M = 3, le = !1, me = !1, ct = !1, De = !1, He = typeof setTimeout == "function" ? setTimeout : null, Tt = typeof clearTimeout == "function" ? clearTimeout : null, tt = typeof setImmediate < "u" ? setImmediate : null;
    function Ft(O) {
      for (var W = ge(J); W !== null; ) {
        if (W.callback === null) U(J);
        else if (W.startTime <= O)
          U(J), W.sortIndex = W.expirationTime, F(w, W);
        else break;
        W = ge(J);
      }
    }
    function Ye(O) {
      if (ct = !1, Ft(O), !me)
        if (ge(w) !== null)
          me = !0, Ot || (Ot = !0, ze());
        else {
          var W = ge(J);
          W !== null && mt(Ye, W.startTime - O);
        }
    }
    var Ot = !1, We = -1, Dt = 5, re = -1;
    function Mt() {
      return De ? !0 : !(x.unstable_now() - re < Dt);
    }
    function be() {
      if (De = !1, Ot) {
        var O = x.unstable_now();
        re = O;
        var W = !0;
        try {
          e: {
            me = !1, ct && (ct = !1, Tt(We), We = -1), le = !0;
            var P = M;
            try {
              t: {
                for (Ft(O), $ = ge(w); $ !== null && !($.expirationTime > O && Mt()); ) {
                  var pe = $.callback;
                  if (typeof pe == "function") {
                    $.callback = null, M = $.priorityLevel;
                    var g = pe(
                      $.expirationTime <= O
                    );
                    if (O = x.unstable_now(), typeof g == "function") {
                      $.callback = g, Ft(O), W = !0;
                      break t;
                    }
                    $ === ge(w) && U(w), Ft(O);
                  } else U(w);
                  $ = ge(w);
                }
                if ($ !== null) W = !0;
                else {
                  var B = ge(J);
                  B !== null && mt(
                    Ye,
                    B.startTime - O
                  ), W = !1;
                }
              }
              break e;
            } finally {
              $ = null, M = P, le = !1;
            }
            W = void 0;
          }
        } finally {
          W ? ze() : Ot = !1;
        }
      }
    }
    var ze;
    if (typeof tt == "function")
      ze = function() {
        tt(be);
      };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel(), jt = Ut.port2;
      Ut.port1.onmessage = be, ze = function() {
        jt.postMessage(null);
      };
    } else
      ze = function() {
        He(be, 0);
      };
    function mt(O, W) {
      We = He(function() {
        O(x.unstable_now());
      }, W);
    }
    x.unstable_IdlePriority = 5, x.unstable_ImmediatePriority = 1, x.unstable_LowPriority = 4, x.unstable_NormalPriority = 3, x.unstable_Profiling = null, x.unstable_UserBlockingPriority = 2, x.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, x.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Dt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, x.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, x.unstable_next = function(O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = M;
      }
      var P = M;
      M = W;
      try {
        return O();
      } finally {
        M = P;
      }
    }, x.unstable_requestPaint = function() {
      De = !0;
    }, x.unstable_runWithPriority = function(O, W) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var P = M;
      M = O;
      try {
        return W();
      } finally {
        M = P;
      }
    }, x.unstable_scheduleCallback = function(O, W, P) {
      var pe = x.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, O) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = P + g, O = {
        id: oe++,
        callback: W,
        priorityLevel: O,
        startTime: P,
        expirationTime: g,
        sortIndex: -1
      }, P > pe ? (O.sortIndex = P, F(J, O), ge(w) === null && O === ge(J) && (ct ? (Tt(We), We = -1) : ct = !0, mt(Ye, P - pe))) : (O.sortIndex = g, F(w, O), me || le || (me = !0, Ot || (Ot = !0, ze()))), O;
    }, x.unstable_shouldYield = Mt, x.unstable_wrapCallback = function(O) {
      var W = M;
      return function() {
        var P = M;
        M = W;
        try {
          return O.apply(this, arguments);
        } finally {
          M = P;
        }
      };
    };
  })(x0)), x0;
}
var N0 = {}, w1;
function oT() {
  return w1 || (w1 = 1, (function(x) {
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "production".NODE_ENV !== "production" && (function() {
      function F() {
        if (Ye = !1, re) {
          var O = x.unstable_now();
          ze = O;
          var W = !0;
          try {
            e: {
              tt = !1, Ft && (Ft = !1, We(Mt), Mt = -1), Tt = !0;
              var P = He;
              try {
                t: {
                  for (at(O), De = U(le); De !== null && !(De.expirationTime > O && w()); ) {
                    var pe = De.callback;
                    if (typeof pe == "function") {
                      De.callback = null, He = De.priorityLevel;
                      var g = pe(
                        De.expirationTime <= O
                      );
                      if (O = x.unstable_now(), typeof g == "function") {
                        De.callback = g, at(O), W = !0;
                        break t;
                      }
                      De === U(le) && Ee(le), at(O);
                    } else Ee(le);
                    De = U(le);
                  }
                  if (De !== null) W = !0;
                  else {
                    var B = U(me);
                    B !== null && J(
                      yt,
                      B.startTime - O
                    ), W = !1;
                  }
                }
                break e;
              } finally {
                De = null, He = P, Tt = !1;
              }
              W = void 0;
            }
          } finally {
            W ? Ut() : re = !1;
          }
        }
      }
      function ge(O, W) {
        var P = O.length;
        O.push(W);
        e: for (; 0 < P; ) {
          var pe = P - 1 >>> 1, g = O[pe];
          if (0 < Me(g, W))
            O[pe] = W, O[P] = g, P = pe;
          else break e;
        }
      }
      function U(O) {
        return O.length === 0 ? null : O[0];
      }
      function Ee(O) {
        if (O.length === 0) return null;
        var W = O[0], P = O.pop();
        if (P !== W) {
          O[0] = P;
          e: for (var pe = 0, g = O.length, B = g >>> 1; pe < B; ) {
            var Z = 2 * (pe + 1) - 1, I = O[Z], ue = Z + 1, Ae = O[ue];
            if (0 > Me(I, P))
              ue < g && 0 > Me(Ae, I) ? (O[pe] = Ae, O[ue] = P, pe = ue) : (O[pe] = I, O[Z] = P, pe = Z);
            else if (ue < g && 0 > Me(Ae, P))
              O[pe] = Ae, O[ue] = P, pe = ue;
            else break e;
          }
        }
        return W;
      }
      function Me(O, W) {
        var P = O.sortIndex - W.sortIndex;
        return P !== 0 ? P : O.id - W.id;
      }
      function at(O) {
        for (var W = U(me); W !== null; ) {
          if (W.callback === null) Ee(me);
          else if (W.startTime <= O)
            Ee(me), W.sortIndex = W.expirationTime, ge(le, W);
          else break;
          W = U(me);
        }
      }
      function yt(O) {
        if (Ft = !1, at(O), !tt)
          if (U(le) !== null)
            tt = !0, re || (re = !0, Ut());
          else {
            var W = U(me);
            W !== null && J(
              yt,
              W.startTime - O
            );
          }
      }
      function w() {
        return Ye ? !0 : !(x.unstable_now() - ze < be);
      }
      function J(O, W) {
        Mt = Ot(function() {
          O(x.unstable_now());
        }, W);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), x.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var oe = performance;
        x.unstable_now = function() {
          return oe.now();
        };
      } else {
        var $ = Date, M = $.now();
        x.unstable_now = function() {
          return $.now() - M;
        };
      }
      var le = [], me = [], ct = 1, De = null, He = 3, Tt = !1, tt = !1, Ft = !1, Ye = !1, Ot = typeof setTimeout == "function" ? setTimeout : null, We = typeof clearTimeout == "function" ? clearTimeout : null, Dt = typeof setImmediate < "u" ? setImmediate : null, re = !1, Mt = -1, be = 5, ze = -1;
      if (typeof Dt == "function")
        var Ut = function() {
          Dt(F);
        };
      else if (typeof MessageChannel < "u") {
        var jt = new MessageChannel(), mt = jt.port2;
        jt.port1.onmessage = F, Ut = function() {
          mt.postMessage(null);
        };
      } else
        Ut = function() {
          Ot(F, 0);
        };
      x.unstable_IdlePriority = 5, x.unstable_ImmediatePriority = 1, x.unstable_LowPriority = 4, x.unstable_NormalPriority = 3, x.unstable_Profiling = null, x.unstable_UserBlockingPriority = 2, x.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, x.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : be = 0 < O ? Math.floor(1e3 / O) : 5;
      }, x.unstable_getCurrentPriorityLevel = function() {
        return He;
      }, x.unstable_next = function(O) {
        switch (He) {
          case 1:
          case 2:
          case 3:
            var W = 3;
            break;
          default:
            W = He;
        }
        var P = He;
        He = W;
        try {
          return O();
        } finally {
          He = P;
        }
      }, x.unstable_requestPaint = function() {
        Ye = !0;
      }, x.unstable_runWithPriority = function(O, W) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var P = He;
        He = O;
        try {
          return W();
        } finally {
          He = P;
        }
      }, x.unstable_scheduleCallback = function(O, W, P) {
        var pe = x.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, O) {
          case 1:
            var g = -1;
            break;
          case 2:
            g = 250;
            break;
          case 5:
            g = 1073741823;
            break;
          case 4:
            g = 1e4;
            break;
          default:
            g = 5e3;
        }
        return g = P + g, O = {
          id: ct++,
          callback: W,
          priorityLevel: O,
          startTime: P,
          expirationTime: g,
          sortIndex: -1
        }, P > pe ? (O.sortIndex = P, ge(me, O), U(le) === null && O === U(me) && (Ft ? (We(Mt), Mt = -1) : Ft = !0, J(yt, P - pe))) : (O.sortIndex = g, ge(le, O), tt || Tt || (tt = !0, re || (re = !0, Ut()))), O;
      }, x.unstable_shouldYield = w, x.unstable_wrapCallback = function(O) {
        var W = He;
        return function() {
          var P = He;
          He = W;
          try {
            return O.apply(this, arguments);
          } finally {
            He = P;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(N0)), N0;
}
var j1;
function W1() {
  return j1 || (j1 = 1, "production".NODE_ENV === "production" ? rg.exports = cT() : rg.exports = oT()), rg.exports;
}
var sg = { exports: {} }, ga = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function fT() {
  if (G1) return ga;
  G1 = 1;
  var x = Ah();
  function F(w) {
    var J = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      J += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var oe = 2; oe < arguments.length; oe++)
        J += "&args[]=" + encodeURIComponent(arguments[oe]);
    }
    return "Minified React error #" + w + "; visit " + J + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ge() {
  }
  var U = {
    d: {
      f: ge,
      r: function() {
        throw Error(F(522));
      },
      D: ge,
      C: ge,
      L: ge,
      m: ge,
      X: ge,
      S: ge,
      M: ge
    },
    p: 0,
    findDOMNode: null
  }, Ee = Symbol.for("react.portal");
  function Me(w, J, oe) {
    var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ee,
      key: $ == null ? null : "" + $,
      children: w,
      containerInfo: J,
      implementation: oe
    };
  }
  var at = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function yt(w, J) {
    if (w === "font") return "";
    if (typeof J == "string")
      return J === "use-credentials" ? J : "";
  }
  return ga.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, ga.createPortal = function(w, J) {
    var oe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!J || J.nodeType !== 1 && J.nodeType !== 9 && J.nodeType !== 11)
      throw Error(F(299));
    return Me(w, J, null, oe);
  }, ga.flushSync = function(w) {
    var J = at.T, oe = U.p;
    try {
      if (at.T = null, U.p = 2, w) return w();
    } finally {
      at.T = J, U.p = oe, U.d.f();
    }
  }, ga.preconnect = function(w, J) {
    typeof w == "string" && (J ? (J = J.crossOrigin, J = typeof J == "string" ? J === "use-credentials" ? J : "" : void 0) : J = null, U.d.C(w, J));
  }, ga.prefetchDNS = function(w) {
    typeof w == "string" && U.d.D(w);
  }, ga.preinit = function(w, J) {
    if (typeof w == "string" && J && typeof J.as == "string") {
      var oe = J.as, $ = yt(oe, J.crossOrigin), M = typeof J.integrity == "string" ? J.integrity : void 0, le = typeof J.fetchPriority == "string" ? J.fetchPriority : void 0;
      oe === "style" ? U.d.S(
        w,
        typeof J.precedence == "string" ? J.precedence : void 0,
        {
          crossOrigin: $,
          integrity: M,
          fetchPriority: le
        }
      ) : oe === "script" && U.d.X(w, {
        crossOrigin: $,
        integrity: M,
        fetchPriority: le,
        nonce: typeof J.nonce == "string" ? J.nonce : void 0
      });
    }
  }, ga.preinitModule = function(w, J) {
    if (typeof w == "string")
      if (typeof J == "object" && J !== null) {
        if (J.as == null || J.as === "script") {
          var oe = yt(
            J.as,
            J.crossOrigin
          );
          U.d.M(w, {
            crossOrigin: oe,
            integrity: typeof J.integrity == "string" ? J.integrity : void 0,
            nonce: typeof J.nonce == "string" ? J.nonce : void 0
          });
        }
      } else J == null && U.d.M(w);
  }, ga.preload = function(w, J) {
    if (typeof w == "string" && typeof J == "object" && J !== null && typeof J.as == "string") {
      var oe = J.as, $ = yt(oe, J.crossOrigin);
      U.d.L(w, oe, {
        crossOrigin: $,
        integrity: typeof J.integrity == "string" ? J.integrity : void 0,
        nonce: typeof J.nonce == "string" ? J.nonce : void 0,
        type: typeof J.type == "string" ? J.type : void 0,
        fetchPriority: typeof J.fetchPriority == "string" ? J.fetchPriority : void 0,
        referrerPolicy: typeof J.referrerPolicy == "string" ? J.referrerPolicy : void 0,
        imageSrcSet: typeof J.imageSrcSet == "string" ? J.imageSrcSet : void 0,
        imageSizes: typeof J.imageSizes == "string" ? J.imageSizes : void 0,
        media: typeof J.media == "string" ? J.media : void 0
      });
    }
  }, ga.preloadModule = function(w, J) {
    if (typeof w == "string")
      if (J) {
        var oe = yt(J.as, J.crossOrigin);
        U.d.m(w, {
          as: typeof J.as == "string" && J.as !== "script" ? J.as : void 0,
          crossOrigin: oe,
          integrity: typeof J.integrity == "string" ? J.integrity : void 0
        });
      } else U.d.m(w);
  }, ga.requestFormReset = function(w) {
    U.d.r(w);
  }, ga.unstable_batchedUpdates = function(w, J) {
    return w(J);
  }, ga.useFormState = function(w, J, oe) {
    return at.H.useFormState(w, J, oe);
  }, ga.useFormStatus = function() {
    return at.H.useHostTransitionStatus();
  }, ga.version = "19.1.1", ga;
}
var ba = {}, L1;
function rT() {
  if (L1) return ba;
  L1 = 1;
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return "production".NODE_ENV !== "production" && (function() {
    function x() {
    }
    function F($) {
      return "" + $;
    }
    function ge($, M, le) {
      var me = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        F(me);
        var ct = !1;
      } catch {
        ct = !0;
      }
      return ct && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && me[Symbol.toStringTag] || me.constructor.name || "Object"
      ), F(me)), {
        $$typeof: J,
        key: me == null ? null : "" + me,
        children: $,
        containerInfo: M,
        implementation: le
      };
    }
    function U($, M) {
      if ($ === "font") return "";
      if (typeof M == "string")
        return M === "use-credentials" ? M : "";
    }
    function Ee($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : 'something with type "' + typeof $ + '"';
    }
    function Me($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : typeof $ == "string" ? JSON.stringify($) : typeof $ == "number" ? "`" + $ + "`" : 'something with type "' + typeof $ + '"';
    }
    function at() {
      var $ = oe.H;
      return $ === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), $;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yt = Ah(), w = {
      d: {
        f: x,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x
      },
      p: 0,
      findDOMNode: null
    }, J = Symbol.for("react.portal"), oe = yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ba.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ba.createPortal = function($, M) {
      var le = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return ge($, M, null, le);
    }, ba.flushSync = function($) {
      var M = oe.T, le = w.p;
      try {
        if (oe.T = null, w.p = 2, $)
          return $();
      } finally {
        oe.T = M, w.p = le, w.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ba.preconnect = function($, M) {
      typeof $ == "string" && $ ? M != null && typeof M != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Me(M)
      ) : M != null && typeof M.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Ee(M.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ee($)
      ), typeof $ == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, w.d.C($, M));
    }, ba.prefetchDNS = function($) {
      if (typeof $ != "string" || !$)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Ee($)
        );
      else if (1 < arguments.length) {
        var M = arguments[1];
        typeof M == "object" && M.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Me(M)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Me(M)
        );
      }
      typeof $ == "string" && w.d.D($);
    }, ba.preinit = function($, M) {
      if (typeof $ == "string" && $ ? M == null || typeof M != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Me(M)
      ) : M.as !== "style" && M.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Me(M.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ee($)
      ), typeof $ == "string" && M && typeof M.as == "string") {
        var le = M.as, me = U(le, M.crossOrigin), ct = typeof M.integrity == "string" ? M.integrity : void 0, De = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
        le === "style" ? w.d.S(
          $,
          typeof M.precedence == "string" ? M.precedence : void 0,
          {
            crossOrigin: me,
            integrity: ct,
            fetchPriority: De
          }
        ) : le === "script" && w.d.X($, {
          crossOrigin: me,
          integrity: ct,
          fetchPriority: De,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0
        });
      }
    }, ba.preinitModule = function($, M) {
      var le = "";
      if (typeof $ == "string" && $ || (le += " The `href` argument encountered was " + Ee($) + "."), M !== void 0 && typeof M != "object" ? le += " The `options` argument encountered was " + Ee(M) + "." : M && "as" in M && M.as !== "script" && (le += " The `as` option encountered was " + Me(M.as) + "."), le)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          le
        );
      else
        switch (le = M && typeof M.as == "string" ? M.as : "script", le) {
          case "script":
            break;
          default:
            le = Me(le), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              le,
              $
            );
        }
      typeof $ == "string" && (typeof M == "object" && M !== null ? (M.as == null || M.as === "script") && (le = U(
        M.as,
        M.crossOrigin
      ), w.d.M($, {
        crossOrigin: le,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0
      })) : M == null && w.d.M($));
    }, ba.preload = function($, M) {
      var le = "";
      if (typeof $ == "string" && $ || (le += " The `href` argument encountered was " + Ee($) + "."), M == null || typeof M != "object" ? le += " The `options` argument encountered was " + Ee(M) + "." : typeof M.as == "string" && M.as || (le += " The `as` option encountered was " + Ee(M.as) + "."), le && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        le
      ), typeof $ == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
        le = M.as;
        var me = U(
          le,
          M.crossOrigin
        );
        w.d.L($, le, {
          crossOrigin: me,
          integrity: typeof M.integrity == "string" ? M.integrity : void 0,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0,
          type: typeof M.type == "string" ? M.type : void 0,
          fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
          referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
          imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
          imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
          media: typeof M.media == "string" ? M.media : void 0
        });
      }
    }, ba.preloadModule = function($, M) {
      var le = "";
      typeof $ == "string" && $ || (le += " The `href` argument encountered was " + Ee($) + "."), M !== void 0 && typeof M != "object" ? le += " The `options` argument encountered was " + Ee(M) + "." : M && "as" in M && typeof M.as != "string" && (le += " The `as` option encountered was " + Ee(M.as) + "."), le && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        le
      ), typeof $ == "string" && (M ? (le = U(
        M.as,
        M.crossOrigin
      ), w.d.m($, {
        as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
        crossOrigin: le,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0
      })) : w.d.m($));
    }, ba.requestFormReset = function($) {
      w.d.r($);
    }, ba.unstable_batchedUpdates = function($, M) {
      return $(M);
    }, ba.useFormState = function($, M, le) {
      return at().useFormState($, M, le);
    }, ba.useFormStatus = function() {
      return at().useHostTransitionStatus();
    }, ba.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), ba;
}
var V1;
function F1() {
  if (V1) return sg.exports;
  V1 = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ("production".NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (F) {
        console.error(F);
      }
    }
  }
  return "production".NODE_ENV === "production" ? (x(), sg.exports = fT()) : sg.exports = rT(), sg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function sT() {
  if (X1) return hp;
  X1 = 1;
  var x = W1(), F = Ah(), ge = F1();
  function U(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ee(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Me(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function at(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function yt(l) {
    if (Me(l) !== l)
      throw Error(U(188));
  }
  function w(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Me(l), n === null) throw Error(U(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return yt(r), l;
          if (s === c) return yt(r), n;
          s = s.sibling;
        }
        throw Error(U(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var y = !1, p = r.child; p; ) {
          if (p === u) {
            y = !0, u = r, c = s;
            break;
          }
          if (p === c) {
            y = !0, c = r, u = s;
            break;
          }
          p = p.sibling;
        }
        if (!y) {
          for (p = s.child; p; ) {
            if (p === u) {
              y = !0, u = s, c = r;
              break;
            }
            if (p === c) {
              y = !0, c = s, u = r;
              break;
            }
            p = p.sibling;
          }
          if (!y) throw Error(U(189));
        }
      }
      if (u.alternate !== c) throw Error(U(190));
    }
    if (u.tag !== 3) throw Error(U(188));
    return u.stateNode.current === u ? l : n;
  }
  function J(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = J(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var oe = Object.assign, $ = Symbol.for("react.element"), M = Symbol.for("react.transitional.element"), le = Symbol.for("react.portal"), me = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), De = Symbol.for("react.profiler"), He = Symbol.for("react.provider"), Tt = Symbol.for("react.consumer"), tt = Symbol.for("react.context"), Ft = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), We = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), Mt = Symbol.for("react.memo_cache_sentinel"), be = Symbol.iterator;
  function ze(l) {
    return l === null || typeof l != "object" ? null : (l = be && l[be] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ut = Symbol.for("react.client.reference");
  function jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ut ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case me:
        return "Fragment";
      case De:
        return "Profiler";
      case ct:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case Ot:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case le:
          return "Portal";
        case tt:
          return (l.displayName || "Context") + ".Provider";
        case Tt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ft:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case We:
          return n = l.displayName || null, n !== null ? n : jt(l.type) || "Memo";
        case Dt:
          n = l._payload, l = l._init;
          try {
            return jt(l(n));
          } catch {
          }
      }
    return null;
  }
  var mt = Array.isArray, O = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], g = -1;
  function B(l) {
    return { current: l };
  }
  function Z(l) {
    0 > g || (l.current = pe[g], pe[g] = null, g--);
  }
  function I(l, n) {
    g++, pe[g] = l.current, l.current = n;
  }
  var ue = B(null), Ae = B(null), ie = B(null), nl = B(null);
  function Ce(l, n) {
    switch (I(ie, n), I(Ae, l), I(ue, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? qu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = qu(n), l = Lo(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Z(ue), I(ue, l);
  }
  function Nt() {
    Z(ue), Z(Ae), Z(ie);
  }
  function ta(l) {
    l.memoizedState !== null && I(nl, l);
    var n = ue.current, u = Lo(n, l.type);
    n !== u && (I(Ae, l), I(ue, u));
  }
  function An(l) {
    Ae.current === l && (Z(ue), Z(Ae)), nl.current === l && (Z(nl), pa._currentValue = P);
  }
  var ji = Object.prototype.hasOwnProperty, Rn = x.unstable_scheduleCallback, Kc = x.unstable_cancelCallback, df = x.unstable_shouldYield, Pt = x.unstable_requestPaint, hl = x.unstable_now, ku = x.unstable_getCurrentPriorityLevel, Pr = x.unstable_ImmediatePriority, Qe = x.unstable_UserBlockingPriority, On = x.unstable_NormalPriority, Jc = x.unstable_LowPriority, mu = x.unstable_IdlePriority, es = x.log, hf = x.unstable_setDisableYieldValue, $u = null, El = null;
  function Ba(l) {
    if (typeof es == "function" && hf(l), El && typeof El.setStrictMode == "function")
      try {
        El.setStrictMode($u, l);
      } catch {
      }
  }
  var Al = Math.clz32 ? Math.clz32 : $c, kc = Math.log, yf = Math.LN2;
  function $c(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (kc(l) / yf | 0) | 0;
  }
  var tn = 256, la = 4194304;
  function Rl(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ln(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~s, c !== 0 ? r = Rl(c) : (y &= p, y !== 0 ? r = Rl(y) : u || (u = p & ~l, u !== 0 && (r = Rl(u))))) : (p = c & ~s, p !== 0 ? r = Rl(p) : y !== 0 ? r = Rl(y) : u || (u = c & ~l, u !== 0 && (r = Rl(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function m(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function D(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function te() {
    var l = tn;
    return tn <<= 1, (tn & 4194048) === 0 && (tn = 256), l;
  }
  function ne() {
    var l = la;
    return la <<= 1, (la & 62914560) === 0 && (la = 4194304), l;
  }
  function ye(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function xe(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function we(l, n, u, c, r, s) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, C = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var Q = 31 - Al(u), k = 1 << Q;
      p[Q] = 0, S[Q] = -1;
      var N = C[Q];
      if (N !== null)
        for (C[Q] = null, Q = 0; Q < N.length; Q++) {
          var q = N[Q];
          q !== null && (q.lane &= -536870913);
        }
      u &= ~k;
    }
    c !== 0 && nt(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(y & ~n));
  }
  function nt(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Al(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function qe(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Al(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function el(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function an(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ts() {
    var l = W.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Mm(l.type));
  }
  function Rh(l, n) {
    var u = W.p;
    try {
      return W.p = l, n();
    } finally {
      W.p = u;
    }
  }
  var ul = Math.random().toString(36).slice(2), yl = "__reactFiber$" + ul, Zl = "__reactProps$" + ul, Wc = "__reactContainer$" + ul, ls = "__reactEvents$" + ul, gp = "__reactListeners$" + ul, as = "__reactHandles$" + ul, bp = "__reactResources$" + ul, se = "__reactMarker$" + ul;
  function mf(l) {
    delete l[yl], delete l[Zl], delete l[ls], delete l[gp], delete l[as];
  }
  function Ol(l) {
    var n = l[yl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Wc] || u[yl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Hl(l); l !== null; ) {
            if (u = l[yl]) return u;
            l = Hl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Gi(l) {
    if (l = l[yl] || l[Wc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function pf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(U(33));
  }
  function pu(l) {
    var n = l[bp];
    return n || (n = l[bp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function il(l) {
    l[se] = !0;
  }
  var vf = /* @__PURE__ */ new Set(), Sa = {};
  function Wu(l, n) {
    Fu(l, n), Fu(l + "Capture", n);
  }
  function Fu(l, n) {
    for (Sa[l] = n, l = 0; l < n.length; l++)
      vf.add(n[l]);
  }
  var Sp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ns = {}, Oh = {};
  function Tp(l) {
    return ji.call(Oh, l) ? !0 : ji.call(ns, l) ? !1 : Sp.test(l) ? Oh[l] = !0 : (ns[l] = !0, !1);
  }
  function vu(l, n, u) {
    if (Tp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function gf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Dn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var us, Dh;
  function Li(l) {
    if (us === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        us = n && n[1] || "", Dh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + us + l + Dh;
  }
  var Kl = !1;
  function Iu(l, n) {
    if (!l || Kl) return "";
    Kl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (q) {
                  var N = q;
                }
                Reflect.construct(l, [], k);
              } else {
                try {
                  k.call();
                } catch (q) {
                  N = q;
                }
                l.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                N = q;
              }
              (k = l()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (q) {
            if (q && N && typeof q.stack == "string")
              return [q.stack, N.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), y = s[0], p = s[1];
      if (y && p) {
        var S = y.split(`
`), C = p.split(`
`);
        for (r = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < C.length && !C[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === S.length || r === C.length)
          for (c = S.length - 1, r = C.length - 1; 1 <= c && 0 <= r && S[c] !== C[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (S[c] !== C[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || S[c] !== C[r]) {
                  var Q = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Kl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Li(u) : "";
  }
  function Vi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Li(l.type);
      case 16:
        return Li("Lazy");
      case 13:
        return Li("Suspense");
      case 19:
        return Li("SuspenseList");
      case 0:
      case 15:
        return Iu(l.type, !1);
      case 11:
        return Iu(l.type.render, !1);
      case 1:
        return Iu(l.type, !0);
      case 31:
        return Li("Activity");
      default:
        return "";
    }
  }
  function zh(l) {
    try {
      var n = "";
      do
        n += Vi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ql(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Mh(l) {
    var n = bf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var r = u.get, s = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(y) {
          c = "" + y, s.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Pu(l) {
    l._valueTracker || (l._valueTracker = Mh(l));
  }
  function Xi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = bf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Fc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var pg = /[\n"\\]/g;
  function Ya(l) {
    return l.replace(
      pg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function is(l, n, u, c, r, s, y, p) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + ql(n)) : l.value !== "" + ql(n) && (l.value = "" + ql(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? Sf(l, y, ql(n)) : u != null ? Sf(l, y, ql(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + ql(p) : l.removeAttribute("name");
  }
  function cs(l, n, u, c, r, s, y, p) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null))
        return;
      u = u != null ? "" + ql(u) : "", n = n != null ? "" + ql(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function Sf(l, n, u) {
    n === "number" && Fc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ql(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Uh(l, n, u) {
    if (n != null && (n = "" + ql(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + ql(u) : "";
  }
  function _h(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(U(92));
        if (mt(c)) {
          if (1 < c.length) throw Error(U(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = ql(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Ic(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Ep = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function os(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Ep.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Tf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(U(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && os(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && os(l, s, n[s]);
  }
  function Zi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ap = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ef(l) {
    return Ap.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ki = null;
  function fs(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Pc = null, eo = null;
  function Rp(l) {
    var n = Gi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Zl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (is(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ya(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[Zl] || null;
                if (!r) throw Error(U(90));
                is(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Xi(c);
          }
          break e;
        case "textarea":
          Uh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Qi(l, !!u.multiple, n, !1);
      }
    }
  }
  var Ch = !1;
  function to(l, n, u) {
    if (Ch) return l(n, u);
    Ch = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Ch = !1, (Pc !== null || eo !== null) && (Rc(), Pc && (n = Pc, l = eo, eo = Pc = null, Rp(n), l)))
        for (n = 0; n < l.length; n++) Rp(l[n]);
    }
  }
  function Ji(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Zl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        U(231, n, typeof u)
      );
    return u;
  }
  var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rs = !1;
  if (zn)
    try {
      var gu = {};
      Object.defineProperty(gu, "passive", {
        get: function() {
          rs = !0;
        }
      }), window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
    } catch {
      rs = !1;
    }
  var bu = null, lo = null, ki = null;
  function Hh() {
    if (ki) return ki;
    var l, n = lo, u = n.length, c, r = "value" in bu ? bu.value : bu.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === r[s - c]; c++) ;
    return ki = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Dl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ss() {
    return !0;
  }
  function ds() {
    return !1;
  }
  function Jl(l) {
    function n(u, c, r, s, y) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = y, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(s) : s[p]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ss : ds, this.isPropagationStopped = ds, this;
    }
    return oe(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ss);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ss);
      },
      persist: function() {
      },
      isPersistent: ss
    }), n;
  }
  var ei = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, hs = Jl(ei), Af = oe({}, ei, { view: 0, detail: 0 }), Op = Jl(Af), xh, ys, Rf, $i = oe({}, Af, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Rf && (Rf && l.type === "mousemove" ? (xh = l.screenX - Rf.screenX, ys = l.screenY - Rf.screenY) : ys = xh = 0, Rf = l), xh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ys;
    }
  }), Nh = Jl($i), Dp = oe({}, $i, { dataTransfer: 0 }), zp = Jl(Dp), gg = oe({}, Af, { relatedTarget: 0 }), Bh = Jl(gg), bg = oe({}, ei, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sg = Jl(bg), Tg = oe({}, ei, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Of = Jl(Tg), Mp = oe({}, ei, { data: 0 }), Yh = Jl(Mp), Up = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _p = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Cp(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = qh[l]) ? !!n[l] : !1;
  }
  function Su() {
    return Cp;
  }
  var Wi = oe({}, Af, {
    key: function(l) {
      if (l.key) {
        var n = Up[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Dl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? _p[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function(l) {
      return l.type === "keypress" ? Dl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Dl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), nn = Jl(Wi), Ta = oe({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Df = Jl(Ta), ms = oe({}, Af, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su
  }), wh = Jl(ms), aa = oe({}, ei, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hp = Jl(aa), ps = oe({}, $i, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = Jl(ps), jh = oe({}, ei, {
    newState: 0,
    oldState: 0
  }), xp = Jl(jh), Np = [9, 13, 27, 32], zf = zn && "CompositionEvent" in window, Mf = null;
  zn && "documentMode" in document && (Mf = document.documentMode);
  var Gh = zn && "TextEvent" in window && !Mf, Mn = zn && (!zf || Mf && 8 < Mf && 11 >= Mf), Lh = " ", vs = !1;
  function Uf(l, n) {
    switch (l) {
      case "keyup":
        return Np.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ti(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var li = !1;
  function Vh(l, n) {
    switch (l) {
      case "compositionend":
        return ti(n);
      case "keypress":
        return n.which !== 32 ? null : (vs = !0, Lh);
      case "textInput":
        return l = n.data, l === Lh && vs ? null : l;
      default:
        return null;
    }
  }
  function Ii(l, n) {
    if (li)
      return l === "compositionend" || !zf && Uf(l, n) ? (l = Hh(), ki = lo = bu = null, li = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Mn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Bp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function gs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Bp[l.type] : n === "textarea";
  }
  function bs(l, n, u, c) {
    Pc ? eo ? eo.push(c) : eo = [c] : Pc = c, n = Go(n, "onChange"), 0 < n.length && (u = new hs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var un = null, cn = null;
  function Xh(l) {
    Mc(l, 0);
  }
  function Un(l) {
    var n = pf(l);
    if (Xi(n)) return l;
  }
  function Qh(l, n) {
    if (l === "change") return n;
  }
  var Zh = !1;
  if (zn) {
    var Pi;
    if (zn) {
      var ec = "oninput" in document;
      if (!ec) {
        var Kh = document.createElement("div");
        Kh.setAttribute("oninput", "return;"), ec = typeof Kh.oninput == "function";
      }
      Pi = ec;
    } else Pi = !1;
    Zh = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function ao() {
    un && (un.detachEvent("onpropertychange", Jh), cn = un = null);
  }
  function Jh(l) {
    if (l.propertyName === "value" && Un(cn)) {
      var n = [];
      bs(
        n,
        cn,
        l,
        fs(l)
      ), to(Xh, n);
    }
  }
  function Ss(l, n, u) {
    l === "focusin" ? (ao(), un = n, cn = u, un.attachEvent("onpropertychange", Jh)) : l === "focusout" && ao();
  }
  function ai(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Un(cn);
  }
  function Tu(l, n) {
    if (l === "click") return Un(n);
  }
  function kh(l, n) {
    if (l === "input" || l === "change")
      return Un(n);
  }
  function $h(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var zl = typeof Object.is == "function" ? Object.is : $h;
  function ni(l, n) {
    if (zl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!ji.call(n, r) || !zl(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function ui(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ct(l, n) {
    var u = ui(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ui(u);
    }
  }
  function _f(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? _f(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Wh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Fc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Fc(l.document);
    }
    return n;
  }
  function Cf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var tc = zn && "documentMode" in document && 11 >= document.documentMode, _n = null, on = null, ii = null, lc = !1;
  function Ts(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    lc || _n == null || _n !== Fc(c) || (c = _n, "selectionStart" in c && Cf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ii && ni(ii, c) || (ii = c, c = Go(on, "onSelect"), 0 < c.length && (n = new hs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = _n)));
  }
  function Eu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var ac = {
    animationend: Eu("Animation", "AnimationEnd"),
    animationiteration: Eu("Animation", "AnimationIteration"),
    animationstart: Eu("Animation", "AnimationStart"),
    transitionrun: Eu("Transition", "TransitionRun"),
    transitionstart: Eu("Transition", "TransitionStart"),
    transitioncancel: Eu("Transition", "TransitionCancel"),
    transitionend: Eu("Transition", "TransitionEnd")
  }, qa = {}, fn = {};
  zn && (fn = document.createElement("div").style, "AnimationEvent" in window || (delete ac.animationend.animation, delete ac.animationiteration.animation, delete ac.animationstart.animation), "TransitionEvent" in window || delete ac.transitionend.transition);
  function Cn(l) {
    if (qa[l]) return qa[l];
    if (!ac[l]) return l;
    var n = ac[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in fn)
        return qa[l] = n[u];
    return l;
  }
  var Yp = Cn("animationend"), Fh = Cn("animationiteration"), qp = Cn("animationstart"), Ih = Cn("transitionrun"), Es = Cn("transitionstart"), wp = Cn("transitioncancel"), Ph = Cn("transitionend"), ey = /* @__PURE__ */ new Map(), no = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  no.push("scrollEnd");
  function wa(l, n) {
    ey.set(l, n), Wu(n, [l]);
  }
  var ty = /* @__PURE__ */ new WeakMap();
  function Ea(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ty.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: zh(n)
      }, ty.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: zh(n)
    };
  }
  var na = [], ci = 0, Hn = 0;
  function rn() {
    for (var l = ci, n = Hn = ci = 0; n < l; ) {
      var u = na[n];
      na[n++] = null;
      var c = na[n];
      na[n++] = null;
      var r = na[n];
      na[n++] = null;
      var s = na[n];
      if (na[n++] = null, c !== null && r !== null) {
        var y = c.pending;
        y === null ? r.next = r : (r.next = y.next, y.next = r), c.pending = r;
      }
      s !== 0 && io(u, r, s);
    }
  }
  function oi(l, n, u, c) {
    na[ci++] = l, na[ci++] = n, na[ci++] = u, na[ci++] = c, Hn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function uo(l, n, u, c) {
    return oi(l, n, u, c), Hf(l);
  }
  function xn(l, n) {
    return oi(l, null, null, n), Hf(l);
  }
  function io(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Al(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Hf(l) {
    if (50 < No)
      throw No = 0, tm = null, Error(U(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var co = {};
  function jp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ua(l, n, u, c) {
    return new jp(l, n, u, c);
  }
  function xf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function sn(l, n) {
    var u = l.alternate;
    return u === null ? (u = ua(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ke(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function ee(l, n, u, c, r, s) {
    var y = 0;
    if (c = l, typeof l == "function") xf(l) && (y = 1);
    else if (typeof l == "string")
      y = bv(
        l,
        u,
        ue.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case re:
          return l = ua(31, u, n, r), l.elementType = re, l.lanes = s, l;
        case me:
          return ja(u.children, r, s, n);
        case ct:
          y = 8, r |= 24;
          break;
        case De:
          return l = ua(12, u, n, r | 2), l.elementType = De, l.lanes = s, l;
        case Ye:
          return l = ua(13, u, n, r), l.elementType = Ye, l.lanes = s, l;
        case Ot:
          return l = ua(19, u, n, r), l.elementType = Ot, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case He:
              case tt:
                y = 10;
                break e;
              case Tt:
                y = 9;
                break e;
              case Ft:
                y = 11;
                break e;
              case We:
                y = 14;
                break e;
              case Dt:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            U(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ua(y, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ja(l, n, u, c) {
    return l = ua(7, l, c, n), l.lanes = u, l;
  }
  function oo(l, n, u) {
    return l = ua(6, l, null, n), l.lanes = u, l;
  }
  function Gt(l, n, u) {
    return n = ua(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var fi = [], ri = 0, Nf = null, fo = 0, Ga = [], ia = 0, Au = null, dn = 1, Xt = "";
  function ut(l, n) {
    fi[ri++] = fo, fi[ri++] = Nf, Nf = l, fo = n;
  }
  function As(l, n, u) {
    Ga[ia++] = dn, Ga[ia++] = Xt, Ga[ia++] = Au, Au = l;
    var c = dn;
    l = Xt;
    var r = 32 - Al(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Al(n) + r;
    if (30 < s) {
      var y = r - r % 5;
      s = (c & (1 << y) - 1).toString(32), c >>= y, r -= y, dn = 1 << 32 - Al(n) + r | u << r | c, Xt = s + l;
    } else
      dn = 1 << s | u << r | c, Xt = l;
  }
  function nc(l) {
    l.return !== null && (ut(l, 1), As(l, 1, 0));
  }
  function Nn(l) {
    for (; l === Nf; )
      Nf = fi[--ri], fi[ri] = null, fo = fi[--ri], fi[ri] = null;
    for (; l === Au; )
      Au = Ga[--ia], Ga[ia] = null, Xt = Ga[--ia], Ga[ia] = null, dn = Ga[--ia], Ga[ia] = null;
  }
  var It = null, rt = null, ft = !1, La = null, Va = !1, uc = Error(U(519));
  function Ru(l) {
    var n = Error(U(418, ""));
    throw ho(Ea(n, l)), uc;
  }
  function Bf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[yl] = l, n[Zl] = c, u) {
      case "dialog":
        Ge("cancel", n), Ge("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ge("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Sr.length; u++)
          Ge(Sr[u], n);
        break;
      case "source":
        Ge("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ge("error", n), Ge("load", n);
        break;
      case "details":
        Ge("toggle", n);
        break;
      case "input":
        Ge("invalid", n), cs(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Pu(n);
        break;
      case "select":
        Ge("invalid", n);
        break;
      case "textarea":
        Ge("invalid", n), _h(n, c.value, c.defaultValue, c.children), Pu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || mm(n.textContent, u) ? (c.popover != null && (Ge("beforetoggle", n), Ge("toggle", n)), c.onScroll != null && Ge("scroll", n), c.onScrollEnd != null && Ge("scrollend", n), c.onClick != null && (n.onclick = xd), n = !0) : n = !1, n || Ru(l);
  }
  function ly(l) {
    for (It = l.return; It; )
      switch (It.tag) {
        case 5:
        case 13:
          Va = !1;
          return;
        case 27:
        case 3:
          Va = !0;
          return;
        default:
          It = It.return;
      }
  }
  function ro(l) {
    if (l !== It) return !1;
    if (!ft) return ly(l), ft = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || eu(l.type, l.memoizedProps)), u = !u), u && rt && Ru(l), ly(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                rt = gn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        rt = null;
      }
    } else
      n === 27 ? (n = rt, Mi(l.type) ? (l = Ui, Ui = null, rt = l) : rt = n) : rt = It ? gn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function so() {
    rt = It = null, ft = !1;
  }
  function ay() {
    var l = La;
    return l !== null && (da === null ? da = l : da.push.apply(
      da,
      l
    ), La = null), l;
  }
  function ho(l) {
    La === null ? La = [l] : La.push(l);
  }
  var Yf = B(null), Ou = null, hn = null;
  function Du(l, n, u) {
    I(Yf, n._currentValue), n._currentValue = u;
  }
  function Bn(l) {
    l._currentValue = Yf.current, Z(Yf);
  }
  function Rs(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ny(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var y = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var p = s;
          s = r;
          for (var S = 0; S < n.length; S++)
            if (p.context === n[S]) {
              s.lanes |= u, p = s.alternate, p !== null && (p.lanes |= u), Rs(
                s.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          s = p.next;
        }
      } else if (r.tag === 18) {
        if (y = r.return, y === null) throw Error(U(341));
        y.lanes |= u, s = y.alternate, s !== null && (s.lanes |= u), Rs(y, u, l), y = null;
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (r = y.sibling, r !== null) {
            r.return = y.return, y = r;
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function yo(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(U(387));
        if (y = y.memoizedProps, y !== null) {
          var p = r.type;
          zl(r.pendingProps.value, y.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (r === nl.current) {
        if (y = r.alternate, y === null) throw Error(U(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(pa) : l = [pa]);
      }
      r = r.return;
    }
    l !== null && ny(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function qf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!zl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function si(l) {
    Ou = l, hn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ml(l) {
    return uy(Ou, l);
  }
  function wf(l, n) {
    return Ou === null && si(l), uy(l, n);
  }
  function uy(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, hn === null) {
      if (l === null) throw Error(U(308));
      hn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else hn = hn.next = n;
    return u;
  }
  var mo = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Os = x.unstable_scheduleCallback, Gp = x.unstable_NormalPriority, cl = {
    $$typeof: tt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function po() {
    return {
      controller: new mo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yn(l) {
    l.refCount--, l.refCount === 0 && Os(Gp, function() {
      l.controller.abort();
    });
  }
  var di = null, jf = 0, Xa = 0, ol = null;
  function Ds(l, n) {
    if (di === null) {
      var u = di = [];
      jf = 0, Xa = zc(), ol = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return jf++, n.then(zs, zs), n;
  }
  function zs() {
    if (--jf === 0 && di !== null) {
      ol !== null && (ol.status = "fulfilled");
      var l = di;
      di = null, Xa = 0, ol = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Lp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Ms = O.S;
  O.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Ds(l, n), Ms !== null && Ms(l, n);
  };
  var qn = B(null);
  function Gf() {
    var l = qn.current;
    return l !== null ? l : zt.pooledCache;
  }
  function ic(l, n) {
    n === null ? I(qn, qn.current) : I(qn, n.pool);
  }
  function Us() {
    var l = Gf();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var hi = Error(U(460)), _s = Error(U(474)), Lf = Error(U(542)), Cs = { then: function() {
  } };
  function Hs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Vf() {
  }
  function iy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Vf, Vf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, oy(l), l;
      default:
        if (typeof n.status == "string") n.then(Vf, Vf);
        else {
          if (l = zt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(U(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, oy(l), l;
        }
        throw cc = n, hi;
    }
  }
  var cc = null;
  function cy() {
    if (cc === null) throw Error(U(459));
    var l = cc;
    return cc = null, l;
  }
  function oy(l) {
    if (l === hi || l === Lf)
      throw Error(U(483));
  }
  var wn = !1;
  function xs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ns(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ca(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (vt & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Hf(l), io(l, null, u), n;
    }
    return oi(l, c, n, u), Hf(l);
  }
  function oc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, qe(l, u);
    }
  }
  function fy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = y : s = s.next = y, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var ry = !1;
  function vo() {
    if (ry) {
      var l = ol;
      if (l !== null) throw l;
    }
  }
  function zu(l, n, u, c) {
    ry = !1;
    var r = l.updateQueue;
    wn = !1;
    var s = r.firstBaseUpdate, y = r.lastBaseUpdate, p = r.shared.pending;
    if (p !== null) {
      r.shared.pending = null;
      var S = p, C = S.next;
      S.next = null, y === null ? s = C : y.next = C, y = S;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, p = Q.lastBaseUpdate, p !== y && (p === null ? Q.firstBaseUpdate = C : p.next = C, Q.lastBaseUpdate = S));
    }
    if (s !== null) {
      var k = r.baseState;
      y = 0, Q = C = S = null, p = s;
      do {
        var N = p.lane & -536870913, q = N !== p.lane;
        if (q ? (Pe & N) === N : (c & N) === N) {
          N !== 0 && N === Xa && (ry = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = l, Te = p;
            N = n;
            var dt = u;
            switch (Te.tag) {
              case 1:
                if (Se = Te.payload, typeof Se == "function") {
                  k = Se.call(dt, k, N);
                  break e;
                }
                k = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Te.payload, N = typeof Se == "function" ? Se.call(dt, k, N) : Se, N == null) break e;
                k = oe({}, k, N);
                break e;
              case 2:
                wn = !0;
            }
          }
          N = p.callback, N !== null && (l.flags |= 64, q && (l.flags |= 8192), q = r.callbacks, q === null ? r.callbacks = [N] : q.push(N));
        } else
          q = {
            lane: N,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, Q === null ? (C = Q = q, S = k) : Q = Q.next = q, y |= N;
        if (p = p.next, p === null) {
          if (p = r.shared.pending, p === null)
            break;
          q = p, p = q.next, q.next = null, r.lastBaseUpdate = q, r.shared.pending = null;
        }
      } while (!0);
      Q === null && (S = k), r.baseState = S, r.firstBaseUpdate = C, r.lastBaseUpdate = Q, s === null && (r.shared.lanes = 0), Nu |= y, l.lanes = y, l.memoizedState = k;
    }
  }
  function Bs(l, n) {
    if (typeof l != "function")
      throw Error(U(191, l));
    l.call(n);
  }
  function Xf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Bs(u[l], n);
  }
  var fc = B(null), Qf = B(0);
  function pl(l, n) {
    l = xu, I(Qf, l), I(fc, n), xu = l | n.baseLanes;
  }
  function go() {
    I(Qf, xu), I(fc, fc.current);
  }
  function bo() {
    xu = Qf.current, Z(fc), Z(Qf);
  }
  var Qa = 0, je = null, pt = null, Lt = null, Zf = !1, Aa = !1, yi = !1, yn = 0, Ra = 0, Mu = null, sy = 0;
  function Vt() {
    throw Error(U(321));
  }
  function Ys(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!zl(l[u], n[u])) return !1;
    return !0;
  }
  function qs(l, n, u, c, r, s) {
    return Qa = s, je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Dy : zy, yi = !1, s = u(c, r), yi = !1, Aa && (s = dy(
      n,
      u,
      c,
      r
    )), mi(l), s;
  }
  function mi(l) {
    O.H = ed;
    var n = pt !== null && pt.next !== null;
    if (Qa = 0, Lt = pt = je = null, Zf = !1, Ra = 0, Mu = null, n) throw Error(U(300));
    l === null || fl || (l = l.dependencies, l !== null && qf(l) && (fl = !0));
  }
  function dy(l, n, u, c) {
    je = l;
    var r = 0;
    do {
      if (Aa && (Mu = null), Ra = 0, Aa = !1, 25 <= r) throw Error(U(301));
      if (r += 1, Lt = pt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      O.H = Uu, s = n(u, c);
    } while (Aa);
    return s;
  }
  function Vp() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Jf(n) : n, l = l.useState()[0], (pt !== null ? pt.memoizedState : null) !== l && (je.flags |= 1024), n;
  }
  function ws() {
    var l = yn !== 0;
    return yn = 0, l;
  }
  function So(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function js(l) {
    if (Zf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zf = !1;
    }
    Qa = 0, Lt = pt = je = null, Aa = !1, Ra = yn = 0, Mu = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? je.memoizedState = Lt = l : Lt = Lt.next = l, Lt;
  }
  function Qt() {
    if (pt === null) {
      var l = je.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = pt.next;
    var n = Lt === null ? je.memoizedState : Lt.next;
    if (n !== null)
      Lt = n, pt = l;
    else {
      if (l === null)
        throw je.alternate === null ? Error(U(467)) : Error(U(310));
      pt = l, l = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Lt === null ? je.memoizedState = Lt = l : Lt = Lt.next = l;
    }
    return Lt;
  }
  function Kf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Jf(l) {
    var n = Ra;
    return Ra += 1, Mu === null && (Mu = []), l = iy(Mu, l, n), n = je, (Lt === null ? n.memoizedState : Lt.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Dy : zy), l;
  }
  function tl(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Jf(l);
      if (l.$$typeof === tt) return ml(l);
    }
    throw Error(U(438, String(l)));
  }
  function Gs(l) {
    var n = null, u = je.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = je.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Kf(), je.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Mt;
    return n.index++, u;
  }
  function Gn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function kf(l) {
    var n = Qt();
    return Ls(n, pt, l);
  }
  function Ls(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(U(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var y = r.next;
        r.next = s.next, s.next = y;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var p = y = null, S = null, C = n, Q = !1;
      do {
        var k = C.lane & -536870913;
        if (k !== C.lane ? (Pe & k) === k : (Qa & k) === k) {
          var N = C.revertLane;
          if (N === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), k === Xa && (Q = !0);
          else if ((Qa & N) === N) {
            C = C.next, N === Xa && (Q = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (p = S = k, y = s) : S = S.next = k, je.lanes |= N, Nu |= N;
          k = C.action, yi && u(s, k), s = C.hasEagerState ? C.eagerState : u(s, k);
        } else
          N = {
            lane: k,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (p = S = N, y = s) : S = S.next = N, je.lanes |= k, Nu |= k;
        C = C.next;
      } while (C !== null && C !== n);
      if (S === null ? y = s : S.next = p, !zl(s, l.memoizedState) && (fl = !0, Q && (u = ol, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = y, l.baseQueue = S, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Vs(l) {
    var n = Qt(), u = n.queue;
    if (u === null) throw Error(U(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var y = r = r.next;
      do
        s = l(s, y.action), y = y.next;
      while (y !== r);
      zl(s, n.memoizedState) || (fl = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function $f(l, n, u) {
    var c = je, r = Qt(), s = ft;
    if (s) {
      if (u === void 0) throw Error(U(407));
      u = u();
    } else u = n();
    var y = !zl(
      (pt || r).memoizedState,
      u
    );
    y && (r.memoizedState = u, fl = !0), r = r.queue;
    var p = yy.bind(null, c, r, l);
    if (Et(2048, 8, p, [l]), r.getSnapshot !== n || y || Lt !== null && Lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, oa(
        9,
        If(),
        hy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), zt === null) throw Error(U(349));
      s || (Qa & 124) !== 0 || Xs(c, n, u);
    }
    return u;
  }
  function Xs(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = je.updateQueue, n === null ? (n = Kf(), je.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function hy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, my(n) && Qs(l);
  }
  function yy(l, n, u) {
    return u(function() {
      my(n) && Qs(l);
    });
  }
  function my(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !zl(l, u);
    } catch {
      return !0;
    }
  }
  function Qs(l) {
    var n = xn(l, 2);
    n !== null && za(n, l, 2);
  }
  function Wf(l) {
    var n = wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), yi) {
        Ba(!0);
        try {
          u();
        } finally {
          Ba(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: l
    }, n;
  }
  function Zs(l, n, u, c) {
    return l.baseState = u, Ls(
      l,
      pt,
      typeof c == "function" ? c : Gn
    );
  }
  function Xp(l, n, u, c, r) {
    if (hc(l)) throw Error(U(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          s.listeners.push(y);
        }
      };
      O.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, Ks(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function Ks(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = O.T, y = {};
      O.T = y;
      try {
        var p = u(r, c), S = O.S;
        S !== null && S(y, p), Ff(l, n, p);
      } catch (C) {
        ks(l, n, C);
      } finally {
        O.T = s;
      }
    } else
      try {
        s = u(r, c), Ff(l, n, s);
      } catch (C) {
        ks(l, n, C);
      }
  }
  function Ff(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Js(l, n, c);
      },
      function(c) {
        return ks(l, n, c);
      }
    ) : Js(l, n, u);
  }
  function Js(l, n, u) {
    n.status = "fulfilled", n.value = u, py(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Ks(l, u)));
  }
  function ks(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, py(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function py(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function $s(l, n) {
    return n;
  }
  function vy(l, n) {
    if (ft) {
      var u = zt.formState;
      if (u !== null) {
        e: {
          var c = je;
          if (ft) {
            if (rt) {
              t: {
                for (var r = rt, s = Va; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = gn(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                rt = gn(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            Ru(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = wl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: n
    }, u.queue = c, u = Ry.bind(
      null,
      je,
      c
    ), c.dispatch = u, c = Wf(!1), s = tr.bind(
      null,
      je,
      !1,
      c.queue
    ), c = wl(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = Xp.bind(
      null,
      je,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ln(l) {
    var n = Qt();
    return Ws(n, pt, l);
  }
  function Ws(l, n, u) {
    if (n = Ls(
      l,
      n,
      $s
    )[0], l = kf(Gn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Jf(n);
      } catch (y) {
        throw y === hi ? Lf : y;
      }
    else c = n;
    n = Qt();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (je.flags |= 2048, oa(
      9,
      If(),
      Eg.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function Eg(l, n) {
    l.action = n;
  }
  function Fs(l) {
    var n = Qt(), u = pt;
    if (u !== null)
      return Ws(n, u, l);
    Qt(), n = n.memoizedState, u = Qt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function oa(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = je.updateQueue, n === null && (n = Kf(), je.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function If() {
    return { destroy: void 0, resource: void 0 };
  }
  function Pf() {
    return Qt().memoizedState;
  }
  function pi(l, n, u, c) {
    var r = wl();
    c = c === void 0 ? null : c, je.flags |= l, r.memoizedState = oa(
      1 | n,
      If(),
      u,
      c
    );
  }
  function Et(l, n, u, c) {
    var r = Qt();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    pt !== null && c !== null && Ys(c, pt.memoizedState.deps) ? r.memoizedState = oa(n, s, u, c) : (je.flags |= l, r.memoizedState = oa(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Qp(l, n) {
    pi(8390656, 8, l, n);
  }
  function Zp(l, n) {
    Et(2048, 8, l, n);
  }
  function gy(l, n) {
    return Et(4, 2, l, n);
  }
  function mn(l, n) {
    return Et(4, 4, l, n);
  }
  function by(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Is(l, n, u) {
    u = u != null ? u.concat([l]) : null, Et(4, 4, by.bind(null, n, l), u);
  }
  function rc() {
  }
  function sc(l, n) {
    var u = Qt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ys(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Sy(l, n) {
    var u = Qt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ys(n, c[1]))
      return c[0];
    if (c = l(), yi) {
      Ba(!0);
      try {
        l();
      } finally {
        Ba(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function er(l, n, u) {
    return u === void 0 || (Qa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = lm(), je.lanes |= l, Nu |= l, u);
  }
  function Ty(l, n, u, c) {
    return zl(u, n) ? u : fc.current !== null ? (l = er(l, u, c), zl(l, n) || (fl = !0), l) : (Qa & 42) === 0 ? (fl = !0, l.memoizedState = u) : (l = lm(), je.lanes |= l, Nu |= l, n);
  }
  function Kp(l, n, u, c, r) {
    var s = W.p;
    W.p = s !== 0 && 8 > s ? s : 8;
    var y = O.T, p = {};
    O.T = p, tr(l, !1, n, u);
    try {
      var S = r(), C = O.S;
      if (C !== null && C(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Q = Lp(
          S,
          c
        );
        dc(
          l,
          n,
          Q,
          Da(l)
        );
      } else
        dc(
          l,
          n,
          c,
          Da(l)
        );
    } catch (k) {
      dc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: k },
        Da()
      );
    } finally {
      W.p = s, O.T = y;
    }
  }
  function Ag() {
  }
  function Ps(l, n, u, c) {
    if (l.tag !== 5) throw Error(U(476));
    var r = Jp(l).queue;
    Kp(
      l,
      r,
      n,
      P,
      u === null ? Ag : function() {
        return To(l), u(c);
      }
    );
  }
  function Jp(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gn,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function To(l) {
    var n = Jp(l).next.queue;
    dc(l, n, {}, Da());
  }
  function Za() {
    return ml(pa);
  }
  function Ey() {
    return Qt().memoizedState;
  }
  function kp() {
    return Qt().memoizedState;
  }
  function $p(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Da();
          l = ca(u);
          var c = jn(n, l, u);
          c !== null && (za(c, n, u), oc(c, n, u)), n = { cache: po() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Ay(l, n, u) {
    var c = Da();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l) ? Wp(n, u) : (u = uo(l, n, u, c), u !== null && (za(u, l, c), Oy(u, n, c)));
  }
  function Ry(l, n, u) {
    var c = Da();
    dc(l, n, u, c);
  }
  function dc(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hc(l)) Wp(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var y = n.lastRenderedState, p = s(y, u);
          if (r.hasEagerState = !0, r.eagerState = p, zl(p, y))
            return oi(l, n, r, 0), zt === null && rn(), !1;
        } catch {
        } finally {
        }
      if (u = uo(l, n, r, c), u !== null)
        return za(u, l, c), Oy(u, n, c), !0;
    }
    return !1;
  }
  function tr(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: zc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l)) {
      if (n) throw Error(U(479));
    } else
      n = uo(
        l,
        u,
        c,
        2
      ), n !== null && za(n, l, 2);
  }
  function hc(l) {
    var n = l.alternate;
    return l === je || n !== null && n === je;
  }
  function Wp(l, n) {
    Aa = Zf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Oy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, qe(l, u);
    }
  }
  var ed = {
    readContext: ml,
    use: tl,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt
  }, Dy = {
    readContext: ml,
    use: tl,
    useCallback: function(l, n) {
      return wl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ml,
    useEffect: Qp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, pi(
        4194308,
        4,
        by.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return pi(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      pi(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = wl();
      n = n === void 0 ? null : n;
      var c = l();
      if (yi) {
        Ba(!0);
        try {
          l();
        } finally {
          Ba(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = wl();
      if (u !== void 0) {
        var r = u(n);
        if (yi) {
          Ba(!0);
          try {
            u(n);
          } finally {
            Ba(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Ay.bind(
        null,
        je,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = wl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Wf(l);
      var n = l.queue, u = Ry.bind(null, je, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = wl();
      return er(u, l, n);
    },
    useTransition: function() {
      var l = Wf(!1);
      return l = Kp.bind(
        null,
        je,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = je, r = wl();
      if (ft) {
        if (u === void 0)
          throw Error(U(407));
        u = u();
      } else {
        if (u = n(), zt === null)
          throw Error(U(349));
        (Pe & 124) !== 0 || Xs(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Qp(yy.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, oa(
        9,
        If(),
        hy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = wl(), n = zt.identifierPrefix;
      if (ft) {
        var u = Xt, c = dn;
        u = (c & ~(1 << 32 - Al(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = yn++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = sy++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Za,
    useFormState: vy,
    useActionState: vy,
    useOptimistic: function(l) {
      var n = wl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = tr.bind(
        null,
        je,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Gs,
    useCacheRefresh: function() {
      return wl().memoizedState = $p.bind(
        null,
        je
      );
    }
  }, zy = {
    readContext: ml,
    use: tl,
    useCallback: sc,
    useContext: ml,
    useEffect: Zp,
    useImperativeHandle: Is,
    useInsertionEffect: gy,
    useLayoutEffect: mn,
    useMemo: Sy,
    useReducer: kf,
    useRef: Pf,
    useState: function() {
      return kf(Gn);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Qt();
      return Ty(
        u,
        pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = kf(Gn)[0], n = Qt().memoizedState;
      return [
        typeof l == "boolean" ? l : Jf(l),
        n
      ];
    },
    useSyncExternalStore: $f,
    useId: Ey,
    useHostTransitionStatus: Za,
    useFormState: Ln,
    useActionState: Ln,
    useOptimistic: function(l, n) {
      var u = Qt();
      return Zs(u, pt, l, n);
    },
    useMemoCache: Gs,
    useCacheRefresh: kp
  }, Uu = {
    readContext: ml,
    use: tl,
    useCallback: sc,
    useContext: ml,
    useEffect: Zp,
    useImperativeHandle: Is,
    useInsertionEffect: gy,
    useLayoutEffect: mn,
    useMemo: Sy,
    useReducer: Vs,
    useRef: Pf,
    useState: function() {
      return Vs(Gn);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Qt();
      return pt === null ? er(u, l, n) : Ty(
        u,
        pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Vs(Gn)[0], n = Qt().memoizedState;
      return [
        typeof l == "boolean" ? l : Jf(l),
        n
      ];
    },
    useSyncExternalStore: $f,
    useId: Ey,
    useHostTransitionStatus: Za,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l, n) {
      var u = Qt();
      return pt !== null ? Zs(u, pt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Gs,
    useCacheRefresh: kp
  }, yc = null, Eo = 0;
  function td(l) {
    var n = Eo;
    return Eo += 1, yc === null && (yc = []), iy(yc, l, n);
  }
  function mc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function jl(l, n) {
    throw n.$$typeof === $ ? Error(U(525)) : (l = Object.prototype.toString.call(n), Error(
      U(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function My(l) {
    var n = l._init;
    return n(l._payload);
  }
  function fa(l) {
    function n(z, R) {
      if (l) {
        var _ = z.deletions;
        _ === null ? (z.deletions = [R], z.flags |= 16) : _.push(R);
      }
    }
    function u(z, R) {
      if (!l) return null;
      for (; R !== null; )
        n(z, R), R = R.sibling;
      return null;
    }
    function c(z) {
      for (var R = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? R.set(z.key, z) : R.set(z.index, z), z = z.sibling;
      return R;
    }
    function r(z, R) {
      return z = sn(z, R), z.index = 0, z.sibling = null, z;
    }
    function s(z, R, _) {
      return z.index = _, l ? (_ = z.alternate, _ !== null ? (_ = _.index, _ < R ? (z.flags |= 67108866, R) : _) : (z.flags |= 67108866, R)) : (z.flags |= 1048576, R);
    }
    function y(z) {
      return l && z.alternate === null && (z.flags |= 67108866), z;
    }
    function p(z, R, _, K) {
      return R === null || R.tag !== 6 ? (R = oo(_, z.mode, K), R.return = z, R) : (R = r(R, _), R.return = z, R);
    }
    function S(z, R, _, K) {
      var fe = _.type;
      return fe === me ? Q(
        z,
        R,
        _.props.children,
        K,
        _.key
      ) : R !== null && (R.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Dt && My(fe) === R.type) ? (R = r(R, _.props), mc(R, _), R.return = z, R) : (R = ee(
        _.type,
        _.key,
        _.props,
        null,
        z.mode,
        K
      ), mc(R, _), R.return = z, R);
    }
    function C(z, R, _, K) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== _.containerInfo || R.stateNode.implementation !== _.implementation ? (R = Gt(_, z.mode, K), R.return = z, R) : (R = r(R, _.children || []), R.return = z, R);
    }
    function Q(z, R, _, K, fe) {
      return R === null || R.tag !== 7 ? (R = ja(
        _,
        z.mode,
        K,
        fe
      ), R.return = z, R) : (R = r(R, _), R.return = z, R);
    }
    function k(z, R, _) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = oo(
          "" + R,
          z.mode,
          _
        ), R.return = z, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case M:
            return _ = ee(
              R.type,
              R.key,
              R.props,
              null,
              z.mode,
              _
            ), mc(_, R), _.return = z, _;
          case le:
            return R = Gt(
              R,
              z.mode,
              _
            ), R.return = z, R;
          case Dt:
            var K = R._init;
            return R = K(R._payload), k(z, R, _);
        }
        if (mt(R) || ze(R))
          return R = ja(
            R,
            z.mode,
            _,
            null
          ), R.return = z, R;
        if (typeof R.then == "function")
          return k(z, td(R), _);
        if (R.$$typeof === tt)
          return k(
            z,
            wf(z, R),
            _
          );
        jl(z, R);
      }
      return null;
    }
    function N(z, R, _, K) {
      var fe = R !== null ? R.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return fe !== null ? null : p(z, R, "" + _, K);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case M:
            return _.key === fe ? S(z, R, _, K) : null;
          case le:
            return _.key === fe ? C(z, R, _, K) : null;
          case Dt:
            return fe = _._init, _ = fe(_._payload), N(z, R, _, K);
        }
        if (mt(_) || ze(_))
          return fe !== null ? null : Q(z, R, _, K, null);
        if (typeof _.then == "function")
          return N(
            z,
            R,
            td(_),
            K
          );
        if (_.$$typeof === tt)
          return N(
            z,
            R,
            wf(z, _),
            K
          );
        jl(z, _);
      }
      return null;
    }
    function q(z, R, _, K, fe) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return z = z.get(_) || null, p(R, z, "" + K, fe);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case M:
            return z = z.get(
              K.key === null ? _ : K.key
            ) || null, S(R, z, K, fe);
          case le:
            return z = z.get(
              K.key === null ? _ : K.key
            ) || null, C(R, z, K, fe);
          case Dt:
            var Je = K._init;
            return K = Je(K._payload), q(
              z,
              R,
              _,
              K,
              fe
            );
        }
        if (mt(K) || ze(K))
          return z = z.get(_) || null, Q(R, z, K, fe, null);
        if (typeof K.then == "function")
          return q(
            z,
            R,
            _,
            td(K),
            fe
          );
        if (K.$$typeof === tt)
          return q(
            z,
            R,
            _,
            wf(R, K),
            fe
          );
        jl(R, K);
      }
      return null;
    }
    function Se(z, R, _, K) {
      for (var fe = null, Je = null, ve = R, Oe = R = 0, bl = null; ve !== null && Oe < _.length; Oe++) {
        ve.index > Oe ? (bl = ve, ve = null) : bl = ve.sibling;
        var ot = N(
          z,
          ve,
          _[Oe],
          K
        );
        if (ot === null) {
          ve === null && (ve = bl);
          break;
        }
        l && ve && ot.alternate === null && n(z, ve), R = s(ot, R, Oe), Je === null ? fe = ot : Je.sibling = ot, Je = ot, ve = bl;
      }
      if (Oe === _.length)
        return u(z, ve), ft && ut(z, Oe), fe;
      if (ve === null) {
        for (; Oe < _.length; Oe++)
          ve = k(z, _[Oe], K), ve !== null && (R = s(
            ve,
            R,
            Oe
          ), Je === null ? fe = ve : Je.sibling = ve, Je = ve);
        return ft && ut(z, Oe), fe;
      }
      for (ve = c(ve); Oe < _.length; Oe++)
        bl = q(
          ve,
          z,
          Oe,
          _[Oe],
          K
        ), bl !== null && (l && bl.alternate !== null && ve.delete(
          bl.key === null ? Oe : bl.key
        ), R = s(
          bl,
          R,
          Oe
        ), Je === null ? fe = bl : Je.sibling = bl, Je = bl);
      return l && ve.forEach(function(Ni) {
        return n(z, Ni);
      }), ft && ut(z, Oe), fe;
    }
    function Te(z, R, _, K) {
      if (_ == null) throw Error(U(151));
      for (var fe = null, Je = null, ve = R, Oe = R = 0, bl = null, ot = _.next(); ve !== null && !ot.done; Oe++, ot = _.next()) {
        ve.index > Oe ? (bl = ve, ve = null) : bl = ve.sibling;
        var Ni = N(z, ve, ot.value, K);
        if (Ni === null) {
          ve === null && (ve = bl);
          break;
        }
        l && ve && Ni.alternate === null && n(z, ve), R = s(Ni, R, Oe), Je === null ? fe = Ni : Je.sibling = Ni, Je = Ni, ve = bl;
      }
      if (ot.done)
        return u(z, ve), ft && ut(z, Oe), fe;
      if (ve === null) {
        for (; !ot.done; Oe++, ot = _.next())
          ot = k(z, ot.value, K), ot !== null && (R = s(ot, R, Oe), Je === null ? fe = ot : Je.sibling = ot, Je = ot);
        return ft && ut(z, Oe), fe;
      }
      for (ve = c(ve); !ot.done; Oe++, ot = _.next())
        ot = q(ve, z, Oe, ot.value, K), ot !== null && (l && ot.alternate !== null && ve.delete(ot.key === null ? Oe : ot.key), R = s(ot, R, Oe), Je === null ? fe = ot : Je.sibling = ot, Je = ot);
      return l && ve.forEach(function(Bg) {
        return n(z, Bg);
      }), ft && ut(z, Oe), fe;
    }
    function dt(z, R, _, K) {
      if (typeof _ == "object" && _ !== null && _.type === me && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case M:
            e: {
              for (var fe = _.key; R !== null; ) {
                if (R.key === fe) {
                  if (fe = _.type, fe === me) {
                    if (R.tag === 7) {
                      u(
                        z,
                        R.sibling
                      ), K = r(
                        R,
                        _.props.children
                      ), K.return = z, z = K;
                      break e;
                    }
                  } else if (R.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Dt && My(fe) === R.type) {
                    u(
                      z,
                      R.sibling
                    ), K = r(R, _.props), mc(K, _), K.return = z, z = K;
                    break e;
                  }
                  u(z, R);
                  break;
                } else n(z, R);
                R = R.sibling;
              }
              _.type === me ? (K = ja(
                _.props.children,
                z.mode,
                K,
                _.key
              ), K.return = z, z = K) : (K = ee(
                _.type,
                _.key,
                _.props,
                null,
                z.mode,
                K
              ), mc(K, _), K.return = z, z = K);
            }
            return y(z);
          case le:
            e: {
              for (fe = _.key; R !== null; ) {
                if (R.key === fe)
                  if (R.tag === 4 && R.stateNode.containerInfo === _.containerInfo && R.stateNode.implementation === _.implementation) {
                    u(
                      z,
                      R.sibling
                    ), K = r(R, _.children || []), K.return = z, z = K;
                    break e;
                  } else {
                    u(z, R);
                    break;
                  }
                else n(z, R);
                R = R.sibling;
              }
              K = Gt(_, z.mode, K), K.return = z, z = K;
            }
            return y(z);
          case Dt:
            return fe = _._init, _ = fe(_._payload), dt(
              z,
              R,
              _,
              K
            );
        }
        if (mt(_))
          return Se(
            z,
            R,
            _,
            K
          );
        if (ze(_)) {
          if (fe = ze(_), typeof fe != "function") throw Error(U(150));
          return _ = fe.call(_), Te(
            z,
            R,
            _,
            K
          );
        }
        if (typeof _.then == "function")
          return dt(
            z,
            R,
            td(_),
            K
          );
        if (_.$$typeof === tt)
          return dt(
            z,
            R,
            wf(z, _),
            K
          );
        jl(z, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, R !== null && R.tag === 6 ? (u(z, R.sibling), K = r(R, _), K.return = z, z = K) : (u(z, R), K = oo(_, z.mode, K), K.return = z, z = K), y(z)) : u(z, R);
    }
    return function(z, R, _, K) {
      try {
        Eo = 0;
        var fe = dt(
          z,
          R,
          _,
          K
        );
        return yc = null, fe;
      } catch (ve) {
        if (ve === hi || ve === Lf) throw ve;
        var Je = ua(29, ve, null, z.mode);
        return Je.lanes = K, Je.return = z, Je;
      } finally {
      }
    };
  }
  var pc = fa(!0), Vn = fa(!1), Oa = B(null), Gl = null;
  function _u(l) {
    var n = l.alternate;
    I(At, At.current & 1), I(Oa, l), Gl === null && (n === null || fc.current !== null || n.memoizedState !== null) && (Gl = l);
  }
  function Xn(l) {
    if (l.tag === 22) {
      if (I(At, At.current), I(Oa, l), Gl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Gl = l);
      }
    } else Qn();
  }
  function Qn() {
    I(At, At.current), I(Oa, Oa.current);
  }
  function pn(l) {
    Z(Oa), Gl === l && (Gl = null), Z(At);
  }
  var At = B(0);
  function lr(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Or(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function vi(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : oe({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ld = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Da(), r = ca(c);
      r.payload = n, u != null && (r.callback = u), n = jn(l, r, c), n !== null && (za(n, l, c), oc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Da(), r = ca(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = jn(l, r, c), n !== null && (za(n, l, c), oc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Da(), c = ca(u);
      c.tag = 2, n != null && (c.callback = n), n = jn(l, c, u), n !== null && (za(n, l, u), oc(n, l, u));
    }
  };
  function Ao(l, n, u, c, r, s, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, y) : n.prototype && n.prototype.isPureReactComponent ? !ni(u, c) || !ni(r, s) : !0;
  }
  function vc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && ld.enqueueReplaceState(n, n.state, null);
  }
  function gi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = oe({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  var ar = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Ro(l) {
    ar(l);
  }
  function Uy(l) {
    console.error(l);
  }
  function nr(l) {
    ar(l);
  }
  function ur(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function _y(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Cy(l, n, u) {
    return u = ca(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      ur(l, n);
    }, u;
  }
  function Hy(l) {
    return l = ca(l), l.tag = 3, l;
  }
  function ra(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        _y(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      _y(n, u, c), typeof r != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function Fp(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && yo(
        n,
        u,
        r,
        !0
      ), u = Oa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Gl === null ? Dc() : u.alternate === null && kt === 0 && (kt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Cs ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Md(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Cs ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Md(l, c, r)), !1;
        }
        throw Error(U(435, u.tag));
      }
      return Md(l, c, r), Dc(), !1;
    }
    if (ft)
      return n = Oa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== uc && (l = Error(U(422), { cause: c }), ho(Ea(l, u)))) : (c !== uc && (n = Error(U(423), {
        cause: c
      }), ho(
        Ea(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ea(c, u), r = Cy(
        l.stateNode,
        c,
        r
      ), fy(l, r), kt !== 4 && (kt = 2)), !1;
    var s = Error(U(520), { cause: c });
    if (s = Ea(s, u), Co === null ? Co = [s] : Co.push(s), kt !== 4 && (kt = 2), n === null) return !0;
    c = Ea(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = Cy(u.stateNode, c, l), fy(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Ei === null || !Ei.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Hy(r), ra(
              r,
              l,
              u,
              c
            ), fy(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Zt = Error(U(461)), fl = !1;
  function vl(l, n, u, c) {
    n.child = l === null ? Vn(n, null, u, c) : pc(
      n,
      l.child,
      u,
      c
    );
  }
  function Ip(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var p in c)
        p !== "ref" && (y[p] = c[p]);
    } else y = c;
    return si(n), c = qs(
      l,
      n,
      u,
      y,
      s,
      r
    ), p = ws(), l !== null && !fl ? (So(l, n, r), Zn(l, n, r)) : (ft && p && nc(n), n.flags |= 1, vl(l, n, c, r), n.child);
  }
  function Cu(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !xf(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, gc(
        l,
        n,
        s,
        c,
        r
      )) : (l = ee(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !dd(l, r)) {
      var y = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ni, u(y, c) && l.ref === n.ref)
        return Zn(l, n, r);
    }
    return n.flags |= 1, l = sn(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function gc(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (ni(s, c) && l.ref === n.ref)
        if (fl = !1, n.pendingProps = c = s, dd(l, r))
          (l.flags & 131072) !== 0 && (fl = !0);
        else
          return n.lanes = l.lanes, Zn(l, n, r);
    }
    return nd(
      l,
      n,
      u,
      c,
      r
    );
  }
  function ad(l, n, u) {
    var c = n.pendingProps, r = c.children, s = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = s !== null ? s.baseLanes | u : u, l !== null) {
          for (r = n.child = l.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          n.childLanes = s & ~c;
        } else n.childLanes = 0, n.child = null;
        return bc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ic(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? pl(n, s) : go(), Xn(n);
      else
        return n.lanes = n.childLanes = 536870912, bc(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u
        );
    } else
      s !== null ? (ic(n, s.cachePool), pl(n, s), Qn(), n.memoizedState = null) : (l !== null && ic(n, null), go(), Qn());
    return vl(l, n, r, u), n.child;
  }
  function bc(l, n, u, c) {
    var r = Gf();
    return r = r === null ? null : { parent: cl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && ic(n, null), go(), Xn(n), l !== null && yo(l, n, c, !0), null;
  }
  function ir(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(U(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function nd(l, n, u, c, r) {
    return si(n), u = qs(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = ws(), l !== null && !fl ? (So(l, n, r), Zn(l, n, r)) : (ft && c && nc(n), n.flags |= 1, vl(l, n, u, r), n.child);
  }
  function xy(l, n, u, c, r, s) {
    return si(n), n.updateQueue = null, u = dy(
      n,
      c,
      u,
      r
    ), mi(l), c = ws(), l !== null && !fl ? (So(l, n, s), Zn(l, n, s)) : (ft && c && nc(n), n.flags |= 1, vl(l, n, u, s), n.child);
  }
  function ud(l, n, u, c, r) {
    if (si(n), n.stateNode === null) {
      var s = co, y = u.contextType;
      typeof y == "object" && y !== null && (s = ml(y)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ld, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, xs(n), y = u.contextType, s.context = typeof y == "object" && y !== null ? ml(y) : co, s.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (vi(
        n,
        u,
        y,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (y = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), y !== s.state && ld.enqueueReplaceState(s, s.state, null), zu(n, c, s, r), vo(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var p = n.memoizedProps, S = gi(u, p);
      s.props = S;
      var C = s.context, Q = u.contextType;
      y = co, typeof Q == "object" && Q !== null && (y = ml(Q));
      var k = u.getDerivedStateFromProps;
      Q = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, Q || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (p || C !== y) && vc(
        n,
        s,
        c,
        y
      ), wn = !1;
      var N = n.memoizedState;
      s.state = N, zu(n, c, s, r), vo(), C = n.memoizedState, p || N !== C || wn ? (typeof k == "function" && (vi(
        n,
        u,
        k,
        c
      ), C = n.memoizedState), (S = wn || Ao(
        n,
        u,
        S,
        c,
        N,
        C,
        y
      )) ? (Q || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = C), s.props = c, s.state = C, s.context = y, c = S) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, Ns(l, n), y = n.memoizedProps, Q = gi(u, y), s.props = Q, k = n.pendingProps, N = s.context, C = u.contextType, S = co, typeof C == "object" && C !== null && (S = ml(C)), p = u.getDerivedStateFromProps, (C = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y !== k || N !== S) && vc(
        n,
        s,
        c,
        S
      ), wn = !1, N = n.memoizedState, s.state = N, zu(n, c, s, r), vo();
      var q = n.memoizedState;
      y !== k || N !== q || wn || l !== null && l.dependencies !== null && qf(l.dependencies) ? (typeof p == "function" && (vi(
        n,
        u,
        p,
        c
      ), q = n.memoizedState), (Q = wn || Ao(
        n,
        u,
        Q,
        c,
        N,
        q,
        S
      ) || l !== null && l.dependencies !== null && qf(l.dependencies)) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, q, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        q,
        S
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = q), s.props = c, s.state = q, s.context = S, c = Q) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, ir(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = pc(
      n,
      l.child,
      null,
      r
    ), n.child = pc(
      n,
      null,
      u,
      r
    )) : vl(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Zn(
      l,
      n,
      r
    ), l;
  }
  function id(l, n, u, c) {
    return so(), n.flags |= 256, vl(l, n, u, c), n.child;
  }
  var cd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ny(l) {
    return { baseLanes: l, cachePool: Us() };
  }
  function By(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ka), l;
  }
  function Yy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, y;
    if ((y = s) || (y = l !== null && l.memoizedState === null ? !1 : (At.current & 2) !== 0), y && (r = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ft) {
        if (r ? _u(n) : Qn(), ft) {
          var p = rt, S;
          if (S = p) {
            e: {
              for (S = p, p = Va; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = gn(
                  S.nextSibling
                ), S === null) {
                  p = null;
                  break e;
                }
              }
              p = S;
            }
            p !== null ? (n.memoizedState = {
              dehydrated: p,
              treeContext: Au !== null ? { id: dn, overflow: Xt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = ua(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, It = n, rt = null, S = !0) : S = !1;
          }
          S || Ru(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Or(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        pn(n);
      }
      return p = c.children, c = c.fallback, r ? (Qn(), r = n.mode, p = fd(
        { mode: "hidden", children: p },
        r
      ), c = ja(
        c,
        r,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, r = n.child, r.memoizedState = Ny(u), r.childLanes = By(
        l,
        y,
        u
      ), n.memoizedState = cd, c) : (_u(n), od(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (s)
        n.flags & 256 ? (_u(n), n.flags &= -257, n = bi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Qn(), n.child = l.child, n.flags |= 128, n = null) : (Qn(), r = c.fallback, p = n.mode, c = fd(
          { mode: "visible", children: c.children },
          p
        ), r = ja(
          r,
          p,
          u,
          null
        ), r.flags |= 2, c.return = n, r.return = n, c.sibling = r, n.child = c, pc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Ny(u), c.childLanes = By(
          l,
          y,
          u
        ), n.memoizedState = cd, n = r);
      else if (_u(n), Or(p)) {
        if (y = p.nextSibling && p.nextSibling.dataset, y) var C = y.dgst;
        y = C, c = Error(U(419)), c.stack = "", c.digest = y, ho({ value: c, source: null, stack: null }), n = bi(
          l,
          n,
          u
        );
      } else if (fl || yo(l, n, u, !1), y = (u & l.childLanes) !== 0, fl || y) {
        if (y = zt, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : el(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, xn(l, c), za(y, l, c), Zt;
        p.data === "$?" || Dc(), n = bi(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, rt = gn(
          p.nextSibling
        ), It = n, ft = !0, La = null, Va = !1, l !== null && (Ga[ia++] = dn, Ga[ia++] = Xt, Ga[ia++] = Au, dn = l.id, Xt = l.overflow, Au = n), n = od(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Qn(), r = c.fallback, p = n.mode, S = l.child, C = S.sibling, c = sn(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? r = sn(C, r) : (r = ja(
      r,
      p,
      u,
      null
    ), r.flags |= 2), r.return = n, c.return = n, c.sibling = r, n.child = c, c = r, r = n.child, p = l.child.memoizedState, p === null ? p = Ny(u) : (S = p.cachePool, S !== null ? (C = cl._currentValue, S = S.parent !== C ? { parent: C, pool: C } : S) : S = Us(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), r.memoizedState = p, r.childLanes = By(
      l,
      y,
      u
    ), n.memoizedState = cd, c) : (_u(n), u = l.child, l = u.sibling, u = sn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function od(l, n) {
    return n = fd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function fd(l, n) {
    return l = ua(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function bi(l, n, u) {
    return pc(n, l.child, null, u), l = od(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function cr(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Rs(l.return, n, u);
  }
  function rd(l, n, u, c, r) {
    var s = l.memoizedState;
    s === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r
    } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = c, s.tail = u, s.tailMode = r);
  }
  function sd(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    if (vl(l, n, c.children, u), c = At.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && cr(l, u, n);
          else if (l.tag === 19)
            cr(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (I(At, c), r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && lr(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), rd(
          n,
          !1,
          r,
          u,
          s
        );
        break;
      case "backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && lr(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        rd(
          n,
          !0,
          u,
          null,
          s
        );
        break;
      case "together":
        rd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Zn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Nu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (yo(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(U(153));
    if (n.child !== null) {
      for (l = n.child, u = sn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = sn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function dd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && qf(l)));
  }
  function Pp(l, n, u) {
    switch (n.tag) {
      case 3:
        Ce(n, n.stateNode.containerInfo), Du(n, cl, l.memoizedState.cache), so();
        break;
      case 27:
      case 5:
        ta(n);
        break;
      case 4:
        Ce(n, n.stateNode.containerInfo);
        break;
      case 10:
        Du(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (_u(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Yy(l, n, u) : (_u(n), l = Zn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        _u(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (yo(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return sd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), I(At, At.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, ad(l, n, u);
      case 24:
        Du(n, cl, l.memoizedState.cache);
    }
    return Zn(l, n, u);
  }
  function ev(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        fl = !0;
      else {
        if (!dd(l, u) && (n.flags & 128) === 0)
          return fl = !1, Pp(
            l,
            n,
            u
          );
        fl = (l.flags & 131072) !== 0;
      }
    else
      fl = !1, ft && (n.flags & 1048576) !== 0 && As(n, fo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, r = c._init;
          if (c = r(c._payload), n.type = c, typeof c == "function")
            xf(c) ? (l = gi(c, l), n.tag = 1, n = ud(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = nd(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (r = c.$$typeof, r === Ft) {
                n.tag = 11, n = Ip(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (r === We) {
                n.tag = 14, n = Cu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = jt(c) || c, Error(U(306, n, ""));
          }
        }
        return n;
      case 0:
        return nd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = gi(
          c,
          n.pendingProps
        ), ud(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (Ce(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(U(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, Ns(l, n), zu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, Du(n, cl, c), c !== s.cache && ny(
            n,
            [cl],
            u,
            !0
          ), vo(), c = y.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = id(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Ea(
                Error(U(424)),
                n
              ), ho(r), n = id(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (rt = gn(l.firstChild), It = n, ft = !0, La = null, Va = !0, u = Vn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (so(), c === r) {
              n = Zn(
                l,
                n,
                u
              );
              break e;
            }
            vl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return ir(l, n), l === null ? (u = pv(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ft || (u = n.type, l = n.pendingProps, c = Wa(
          ie.current
        ).createElement(u), c[yl] = n, c[Zl] = l, Ue(c, u, l), il(c), n.stateNode = c) : n.memoizedState = pv(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ta(n), l === null && ft && (c = n.stateNode = ce(
          n.type,
          n.pendingProps,
          ie.current
        ), It = n, Va = !0, r = rt, Mi(n.type) ? (Ui = r, rt = gn(
          c.firstChild
        )) : rt = r), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), ir(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ft && ((r = c = rt) && (c = Xo(
          c,
          n.type,
          n.pendingProps,
          Va
        ), c !== null ? (n.stateNode = c, It = n, rt = gn(
          c.firstChild
        ), Va = !1, r = !0) : r = !1), r || Ru(n)), ta(n), r = n.type, s = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = s.children, eu(r, s) ? c = null : y !== null && eu(r, y) && (n.flags |= 32), n.memoizedState !== null && (r = qs(
          l,
          n,
          Vp,
          null,
          null,
          u
        ), pa._currentValue = r), ir(l, n), vl(l, n, c, u), n.child;
      case 6:
        return l === null && ft && ((l = u = rt) && (u = Hg(
          u,
          n.pendingProps,
          Va
        ), u !== null ? (n.stateNode = u, It = n, rt = null, l = !0) : l = !1), l || Ru(n)), null;
      case 13:
        return Yy(l, n, u);
      case 4:
        return Ce(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = pc(
          n,
          null,
          c,
          u
        ) : vl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Ip(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return vl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Du(n, n.type, c.value), vl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, si(n), r = ml(r), c = c(r), n.flags |= 1, vl(l, n, c, u), n.child;
      case 14:
        return Cu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return gc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return sd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = fd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = sn(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return ad(l, n, u);
      case 24:
        return si(n), c = ml(cl), l === null ? (r = Gf(), r === null && (r = zt, s = po(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = {
          parent: c,
          cache: r
        }, xs(n), Du(n, cl, r)) : ((l.lanes & u) !== 0 && (Ns(l, n), zu(n, null, null, u), vo()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), Du(n, cl, c)) : (c = s.cache, Du(n, cl, c), c !== r.cache && ny(
          n,
          [cl],
          u,
          !0
        ))), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(U(156, n.tag));
  }
  function Kn(l) {
    l.flags |= 4;
  }
  function Oo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !bm(n)) {
      if (n = Oa.current, n !== null && ((Pe & 4194048) === Pe ? Gl !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || n !== Gl))
        throw cc = Cs, _s;
      l.flags |= 8192;
    }
  }
  function or(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ne() : 536870912, l.lanes |= n, _o |= n);
  }
  function Do(l, n) {
    if (!ft)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Re(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function qy(l, n, u) {
    var c = n.pendingProps;
    switch (Nn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Re(n), null;
      case 1:
        return Re(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Bn(cl), Nt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ro(n) ? Kn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ay())), Re(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Kn(n), u !== null ? (Re(n), Oo(n, u)) : (Re(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Kn(n), Re(n), Oo(n, u)) : (Re(n), n.flags &= -16777217) : (l.memoizedProps !== c && Kn(n), Re(n), n.flags &= -16777217), null;
      case 27:
        An(n), u = ie.current;
        var r = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(U(166));
            return Re(n), null;
          }
          l = ue.current, ro(n) ? Bf(n) : (l = ce(r, c, u), n.stateNode = l, Kn(n));
        }
        return Re(n), null;
      case 5:
        if (An(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(U(166));
            return Re(n), null;
          }
          if (l = ue.current, ro(n))
            Bf(n);
          else {
            switch (r = Wa(
              ie.current
            ), l) {
              case 1:
                l = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = r.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? r.createElement("select", { is: c.is }) : r.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? r.createElement(u, { is: c.is }) : r.createElement(u);
                }
            }
            l[yl] = n, l[Zl] = c;
            e: for (r = n.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                l.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === n) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === n)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            n.stateNode = l;
            e: switch (Ue(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Kn(n);
          }
        }
        return Re(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(U(166));
          if (l = ie.current, ro(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = It, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[yl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || mm(l.nodeValue, u)), l || Ru(n);
          } else
            l = Wa(l).createTextNode(
              c
            ), l[yl] = n, n.stateNode = l;
        }
        return Re(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = ro(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(U(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(U(317));
              r[yl] = n;
            } else
              so(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Re(n), r = !1;
          } else
            r = ay(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (pn(n), n) : (pn(n), null);
        }
        if (pn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool);
          var s = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), or(n, n.updateQueue), Re(n), null;
      case 4:
        return Nt(), l === null && hm(n.stateNode.containerInfo), Re(n), null;
      case 10:
        return Bn(n.type), Re(n), null;
      case 19:
        if (Z(At), r = n.memoizedState, r === null) return Re(n), null;
        if (c = (n.flags & 128) !== 0, s = r.rendering, s === null)
          if (c) Do(r, !1);
          else {
            if (kt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = lr(l), s !== null) {
                  for (n.flags |= 128, Do(r, !1), l = s.updateQueue, n.updateQueue = l, or(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ke(u, l), u = u.sibling;
                  return I(
                    At,
                    At.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            r.tail !== null && hl() > Td && (n.flags |= 128, c = !0, Do(r, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = lr(s), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, or(n, l), Do(r, !0), r.tail === null && r.tailMode === "hidden" && !s.alternate && !ft)
                return Re(n), null;
            } else
              2 * hl() - r.renderingStartTime > Td && u !== 536870912 && (n.flags |= 128, c = !0, Do(r, !1), n.lanes = 4194304);
          r.isBackwards ? (s.sibling = n.child, n.child = s) : (l = r.last, l !== null ? l.sibling = s : n.child = s, r.last = s);
        }
        return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.renderingStartTime = hl(), n.sibling = null, l = At.current, I(At, c ? l & 1 | 2 : l & 1), n) : (Re(n), null);
      case 22:
      case 23:
        return pn(n), bo(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Re(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Re(n), u = n.updateQueue, u !== null && or(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && Z(qn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Bn(cl), Re(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(U(156, n.tag));
  }
  function Rg(l, n) {
    switch (Nn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Bn(cl), Nt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return An(n), null;
      case 13:
        if (pn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(U(340));
          so();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return Z(At), null;
      case 4:
        return Nt(), null;
      case 10:
        return Bn(n.type), null;
      case 22:
      case 23:
        return pn(n), bo(), l !== null && Z(qn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Bn(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wy(l, n) {
    switch (Nn(n), n.tag) {
      case 3:
        Bn(cl), Nt();
        break;
      case 26:
      case 27:
      case 5:
        An(n);
        break;
      case 4:
        Nt();
        break;
      case 13:
        pn(n);
        break;
      case 19:
        Z(At);
        break;
      case 10:
        Bn(n.type);
        break;
      case 22:
      case 23:
        pn(n), bo(), l !== null && Z(qn);
        break;
      case 24:
        Bn(cl);
    }
  }
  function fr(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, y = u.inst;
            c = s(), y.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (p) {
      bt(n, n.return, p);
    }
  }
  function Si(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, p = y.destroy;
            if (p !== void 0) {
              y.destroy = void 0, r = n;
              var S = u, C = p;
              try {
                C();
              } catch (Q) {
                bt(
                  r,
                  S,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (Q) {
      bt(n, n.return, Q);
    }
  }
  function hd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Xf(n, u);
      } catch (c) {
        bt(l, l.return, c);
      }
    }
  }
  function jy(l, n, u) {
    u.props = gi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      bt(l, n, c);
    }
  }
  function zo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      bt(l, n, r);
    }
  }
  function vn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          bt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          bt(l, n, r);
        }
      else u.current = null;
  }
  function Mo(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      bt(l, l.return, r);
    }
  }
  function Gy(l, n, u) {
    try {
      var c = l.stateNode;
      Ug(c, l.type, u, n), c[Zl] = n;
    } catch (r) {
      bt(l, l.return, r);
    }
  }
  function tv(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Mi(l.type) || l.tag === 4;
  }
  function Ka(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || tv(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Mi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = xd));
    else if (c !== 4 && (c === 27 && Mi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Sc(l, n, u), l = l.sibling; l !== null; )
        Sc(l, n, u), l = l.sibling;
  }
  function yd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Mi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (yd(l, n, u), l = l.sibling; l !== null; )
        yd(l, n, u), l = l.sibling;
  }
  function md(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      Ue(n, c, u), n[yl] = l, n[Zl] = u;
    } catch (s) {
      bt(l, l.return, s);
    }
  }
  var Jn = !1, Kt = !1, pd = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, rl = null;
  function Ly(l, n) {
    if (l = l.containerInfo, Er = Mr, l = Wh(l), Cf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, p = -1, S = -1, C = 0, Q = 0, k = l, N = null;
            t: for (; ; ) {
              for (var q; k !== u || r !== 0 && k.nodeType !== 3 || (p = y + r), k !== s || c !== 0 && k.nodeType !== 3 || (S = y + c), k.nodeType === 3 && (y += k.nodeValue.length), (q = k.firstChild) !== null; )
                N = k, k = q;
              for (; ; ) {
                if (k === l) break t;
                if (N === u && ++C === r && (p = y), N === s && ++Q === c && (S = y), (q = k.nextSibling) !== null) break;
                k = N, N = k.parentNode;
              }
              k = q;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Ar = { focusedElem: l, selectionRange: u }, Mr = !1, rl = n; rl !== null; )
      if (n = rl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, rl = l;
      else
        for (; rl !== null; ) {
          switch (n = rl, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var Se = gi(
                    u.type,
                    r,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    Se,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Te) {
                  bt(
                    u,
                    u.return,
                    Te
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Rr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(U(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, rl = l;
            break;
          }
          rl = n.return;
        }
  }
  function Vy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $n(l, u), c & 4 && fr(5, u);
        break;
      case 1:
        if ($n(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              bt(u, u.return, y);
            }
          else {
            var r = gi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              bt(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && hd(u), c & 512 && zo(u, u.return);
        break;
      case 3:
        if ($n(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Xf(l, n);
          } catch (y) {
            bt(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && md(u);
      case 26:
      case 5:
        $n(l, u), n === null && c & 4 && Mo(u), c & 512 && zo(u, u.return);
        break;
      case 12:
        $n(l, u);
        break;
      case 13:
        $n(l, u), c & 4 && gd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Og.bind(
          null,
          u
        ), xg(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Jn, !c) {
          n = n !== null && n.memoizedState !== null || Kt, r = Jn;
          var s = Kt;
          Jn = c, (Kt = n) && !s ? Ti(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : $n(l, u), Jn = r, Kt = s;
        }
        break;
      case 30:
        break;
      default:
        $n(l, u);
    }
  }
  function Xy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Xy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && mf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Bt = null, Ml = !1;
  function kn(l, n, u) {
    for (u = u.child; u !== null; )
      Fe(l, n, u), u = u.sibling;
  }
  function Fe(l, n, u) {
    if (El && typeof El.onCommitFiberUnmount == "function")
      try {
        El.onCommitFiberUnmount($u, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Kt || vn(u, n), kn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Kt || vn(u, n);
        var c = Bt, r = Ml;
        Mi(u.type) && (Bt = u.stateNode, Ml = !1), kn(
          l,
          n,
          u
        ), ya(u.stateNode), Bt = c, Ml = r;
        break;
      case 5:
        Kt || vn(u, n);
      case 6:
        if (c = Bt, r = Ml, Bt = null, kn(
          l,
          n,
          u
        ), Bt = c, Ml = r, Bt !== null)
          if (Ml)
            try {
              (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(u.stateNode);
            } catch (s) {
              bt(
                u,
                n,
                s
              );
            }
          else
            try {
              Bt.removeChild(u.stateNode);
            } catch (s) {
              bt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Bt !== null && (Ml ? (l = Bt, Bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), au(l)) : Bd(Bt, u.stateNode));
        break;
      case 4:
        c = Bt, r = Ml, Bt = u.stateNode.containerInfo, Ml = !0, kn(
          l,
          n,
          u
        ), Bt = c, Ml = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Kt || Si(2, u, n), Kt || Si(4, u, n), kn(
          l,
          n,
          u
        );
        break;
      case 1:
        Kt || (vn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && jy(
          u,
          n,
          c
        )), kn(
          l,
          n,
          u
        );
        break;
      case 21:
        kn(
          l,
          n,
          u
        );
        break;
      case 22:
        Kt = (c = Kt) || u.memoizedState !== null, kn(
          l,
          n,
          u
        ), Kt = c;
        break;
      default:
        kn(
          l,
          n,
          u
        );
    }
  }
  function gd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        au(l);
      } catch (u) {
        bt(n, n.return, u);
      }
  }
  function Qy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new vd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new vd()), n;
      default:
        throw Error(U(435, l.tag));
    }
  }
  function bd(l, n) {
    var u = Qy(l);
    n.forEach(function(c) {
      var r = Dg.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(r, r));
    });
  }
  function kl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, y = n, p = y;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Mi(p.type)) {
                Bt = p.stateNode, Ml = !1;
                break e;
              }
              break;
            case 5:
              Bt = p.stateNode, Ml = !1;
              break e;
            case 3:
            case 4:
              Bt = p.stateNode.containerInfo, Ml = !0;
              break e;
          }
          p = p.return;
        }
        if (Bt === null) throw Error(U(160));
        Fe(s, y, r), Bt = null, Ml = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        rr(n, l), n = n.sibling;
  }
  var $l = null;
  function rr(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(n, l), gl(l), c & 4 && (Si(3, l, l.return), fr(3, l), Si(5, l, l.return));
        break;
      case 1:
        kl(n, l), gl(l), c & 512 && (Kt || u === null || vn(u, u.return)), c & 64 && Jn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = $l;
        if (kl(n, l), gl(l), c & 512 && (Kt || u === null || vn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[se] || s[yl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Ue(s, c, u), s[yl] = l, il(s), c = s;
                      break e;
                    case "link":
                      var y = vm(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Ue(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (y = vm(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Ue(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(U(468, c));
                  }
                  s[yl] = l, il(s), c = s;
                }
                l.stateNode = c;
              } else
                gm(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = gv(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? gm(
              r,
              l.type,
              l.stateNode
            ) : gv(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Gy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        kl(n, l), gl(l), c & 512 && (Kt || u === null || vn(u, u.return)), u !== null && c & 4 && Gy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (kl(n, l), gl(l), c & 512 && (Kt || u === null || vn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            Ic(r, "");
          } catch (q) {
            bt(l, l.return, q);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, Gy(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (pd = !0);
        break;
      case 6:
        if (kl(n, l), gl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(U(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (q) {
            bt(l, l.return, q);
          }
        }
        break;
      case 3:
        if (Hi = null, r = $l, $l = Yd(n.containerInfo), kl(n, l), $l = r, gl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            au(n.containerInfo);
          } catch (q) {
            bt(l, l.return, q);
          }
        pd && (pd = !1, Zy(l));
        break;
      case 4:
        c = $l, $l = Yd(
          l.stateNode.containerInfo
        ), kl(n, l), gl(l), $l = c;
        break;
      case 12:
        kl(n, l), gl(l);
        break;
      case 13:
        kl(n, l), gl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Py = hl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, bd(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, C = Jn, Q = Kt;
        if (Jn = C || r, Kt = Q || S, kl(n, l), Kt = Q, Jn = C, gl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || S || Jn || Kt || Yt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (s = S.stateNode, r)
                    y = s.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    p = S.stateNode;
                    var k = S.memoizedProps.style, N = k != null && k.hasOwnProperty("display") ? k.display : null;
                    p.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (q) {
                  bt(S, S.return, q);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = r ? "" : S.memoizedProps;
                } catch (q) {
                  bt(S, S.return, q);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, bd(l, u))));
        break;
      case 19:
        kl(n, l), gl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, bd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(n, l), gl(l);
    }
  }
  function gl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (tv(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(U(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = Ka(l);
            yd(l, s, r);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Ic(y, ""), u.flags &= -33);
            var p = Ka(l);
            yd(l, p, y);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, C = Ka(l);
            Sc(
              l,
              C,
              S
            );
            break;
          default:
            throw Error(U(161));
        }
      } catch (Q) {
        bt(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function $n(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Vy(l, n.alternate, n), n = n.sibling;
  }
  function Yt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Si(4, n, n.return), Yt(n);
          break;
        case 1:
          vn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && jy(
            n,
            n.return,
            u
          ), Yt(n);
          break;
        case 27:
          ya(n.stateNode);
        case 26:
        case 5:
          vn(n, n.return), Yt(n);
          break;
        case 22:
          n.memoizedState === null && Yt(n);
          break;
        case 30:
          Yt(n);
          break;
        default:
          Yt(n);
      }
      l = l.sibling;
    }
  }
  function Ti(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, y = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            r,
            s,
            u
          ), fr(4, s);
          break;
        case 1:
          if (Ti(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (C) {
              bt(c, c.return, C);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var p = c.stateNode;
            try {
              var S = r.shared.hiddenCallbacks;
              if (S !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < S.length; r++)
                  Bs(S[r], p);
            } catch (C) {
              bt(c, c.return, C);
            }
          }
          u && y & 64 && hd(s), zo(s, s.return);
          break;
        case 27:
          md(s);
        case 26:
        case 5:
          Ti(
            r,
            s,
            u
          ), u && c === null && y & 4 && Mo(s), zo(s, s.return);
          break;
        case 12:
          Ti(
            r,
            s,
            u
          );
          break;
        case 13:
          Ti(
            r,
            s,
            u
          ), u && y & 4 && gd(r, s);
          break;
        case 22:
          s.memoizedState === null && Ti(
            r,
            s,
            u
          ), zo(s, s.return);
          break;
        case 30:
          break;
        default:
          Ti(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ja(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yn(u));
  }
  function Sd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l));
  }
  function Ul(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ky(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Ky(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && fr(9, n);
        break;
      case 1:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l)));
        break;
      case 12:
        if (r & 2048) {
          Ul(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, y = s.id, p = s.onPostCommit;
            typeof p == "function" && p(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            bt(n, n.return, S);
          }
        } else
          Ul(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, y = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : st(l, n) : s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Hu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), r & 2048 && Ja(y, n);
        break;
      case 24:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && Sd(n.alternate, n);
        break;
      default:
        Ul(
          l,
          n,
          u,
          c
        );
    }
  }
  function Hu(l, n, u, c, r) {
    for (r = r && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var s = l, y = n, p = u, S = c, C = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Hu(
            s,
            y,
            p,
            S,
            r
          ), fr(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null ? Q._visibility & 2 ? Hu(
            s,
            y,
            p,
            S,
            r
          ) : st(
            s,
            y
          ) : (Q._visibility |= 2, Hu(
            s,
            y,
            p,
            S,
            r
          )), r && C & 2048 && Ja(
            y.alternate,
            y
          );
          break;
        case 24:
          Hu(
            s,
            y,
            p,
            S,
            r
          ), r && C & 2048 && Sd(y.alternate, y);
          break;
        default:
          Hu(
            s,
            y,
            p,
            S,
            r
          );
      }
      n = n.sibling;
    }
  }
  function st(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            st(u, c), r & 2048 && Ja(
              c.alternate,
              c
            );
            break;
          case 24:
            st(u, c), r & 2048 && Sd(c.alternate, c);
            break;
          default:
            st(u, c);
        }
        n = n.sibling;
      }
  }
  var Tc = 8192;
  function Jt(l) {
    if (l.subtreeFlags & Tc)
      for (l = l.child; l !== null; )
        lv(l), l = l.sibling;
  }
  function lv(l) {
    switch (l.tag) {
      case 26:
        Jt(l), l.flags & Tc && l.memoizedState !== null && Tv(
          $l,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Jt(l);
        break;
      case 3:
      case 4:
        var n = $l;
        $l = Yd(l.stateNode.containerInfo), Jt(l), $l = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Tc, Tc = 16777216, Jt(l), Tc = n) : Jt(l));
        break;
      default:
        Jt(l);
    }
  }
  function Jy(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Ec(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          rl = c, $y(
            c,
            l
          );
        }
      Jy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ky(l), l = l.sibling;
  }
  function ky(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ec(l), l.flags & 2048 && Si(9, l, l.return);
        break;
      case 3:
        Ec(l);
        break;
      case 12:
        Ec(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Wl(l)) : Ec(l);
        break;
      default:
        Ec(l);
    }
  }
  function Wl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          rl = c, $y(
            c,
            l
          );
        }
      Jy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, n, n.return), Wl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Wl(n));
          break;
        default:
          Wl(n);
      }
      l = l.sibling;
    }
  }
  function $y(l, n) {
    for (; rl !== null; ) {
      var u = rl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Yn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, rl = c;
      else
        e: for (u = l; rl !== null; ) {
          c = rl;
          var r = c.sibling, s = c.return;
          if (Xy(c), c === u) {
            rl = null;
            break e;
          }
          if (r !== null) {
            r.return = s, rl = r;
            break e;
          }
          rl = s;
        }
    }
  }
  var Wy = {
    getCacheForType: function(l) {
      var n = ml(cl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, av = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, zt = null, Ie = null, Pe = 0, gt = 0, sa = null, Wn = !1, Uo = !1, Fy = !1, xu = 0, kt = 0, Nu = 0, Ac = 0, Fn = 0, ka = 0, _o = 0, Co = null, da = null, Iy = !1, Py = 0, Td = 1 / 0, Ho = null, Ei = null, _l = 0, In = null, xo = null, Cl = 0, Ed = 0, Ad = null, em = null, No = 0, tm = null;
  function Da() {
    if ((vt & 2) !== 0 && Pe !== 0)
      return Pe & -Pe;
    if (O.T !== null) {
      var l = Xa;
      return l !== 0 ? l : zc();
    }
    return ts();
  }
  function lm() {
    ka === 0 && (ka = (Pe & 536870912) === 0 || ft ? te() : 536870912);
    var l = Oa.current;
    return l !== null && (l.flags |= 32), ka;
  }
  function za(l, n, u) {
    (l === zt && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null) && (Pn(l, 0), Bu(
      l,
      Pe,
      ka,
      !1
    )), xe(l, u), ((vt & 2) === 0 || l !== zt) && (l === zt && ((vt & 2) === 0 && (Ac |= u), kt === 4 && Bu(
      l,
      Pe,
      ka,
      !1
    )), ha(l));
  }
  function Bo(l, n, u) {
    if ((vt & 6) !== 0) throw Error(U(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || m(l, n), r = c ? nm(l, n) : Rd(l, n, !0), s = c;
    do {
      if (r === 0) {
        Uo && !c && Bu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !nv(u)) {
          r = Rd(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var p = l;
              r = Co;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (Pn(p, y).flags |= 256), y = Rd(
                p,
                y,
                !1
              ), y !== 2) {
                if (Fy && !S) {
                  p.errorRecoveryDisabledLanes |= s, Ac |= s, r = 4;
                  break e;
                }
                s = da, da = r, s !== null && (da === null ? da = s : da.push.apply(
                  da,
                  s
                ));
              }
              r = y;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Pn(l, 0), Bu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(U(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Bu(
                c,
                n,
                ka,
                !Wn
              );
              break e;
            case 2:
              da = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(U(329));
          }
          if ((n & 62914560) === n && (r = Py + 300 - hl(), 10 < r)) {
            if (Bu(
              c,
              n,
              ka,
              !Wn
            ), ln(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Nd(
              sr.bind(
                null,
                c,
                u,
                da,
                Ho,
                Iy,
                n,
                ka,
                Ac,
                _o,
                Wn,
                s,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          sr(
            c,
            u,
            da,
            Ho,
            Iy,
            n,
            ka,
            Ac,
            _o,
            Wn,
            s,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ha(l);
  }
  function sr(l, n, u, c, r, s, y, p, S, C, Q, k, N, q) {
    if (l.timeoutHandle = -1, k = n.subtreeFlags, (k & 8192 || (k & 16785408) === 16785408) && (Jo = { stylesheets: null, count: 0, unsuspend: Sv }, lv(n), k = Sm(), k !== null)) {
      l.cancelPendingCommit = k(
        cv.bind(
          null,
          l,
          n,
          s,
          u,
          c,
          r,
          y,
          p,
          S,
          Q,
          1,
          N,
          q
        )
      ), Bu(l, s, y, !C);
      return;
    }
    cv(
      l,
      n,
      s,
      u,
      c,
      r,
      y,
      p,
      S
    );
  }
  function nv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!zl(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Bu(l, n, u, c) {
    n &= ~Fn, n &= ~Ac, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Al(r), y = 1 << s;
      c[s] = -1, r &= ~y;
    }
    u !== 0 && nt(l, u, n);
  }
  function Rc() {
    return (vt & 6) === 0 ? (mr(0), !1) : !0;
  }
  function Ai() {
    if (Ie !== null) {
      if (gt === 0)
        var l = Ie.return;
      else
        l = Ie, hn = Ou = null, js(l), yc = null, Eo = 0, l = Ie;
      for (; l !== null; )
        wy(l.alternate, l), l = l.return;
      Ie = null;
    }
  }
  function Pn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, _g(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ai(), zt = l, Ie = u = sn(l.current, null), Pe = n, gt = 0, sa = null, Wn = !1, Uo = m(l, n), Fy = !1, _o = ka = Fn = Ac = Nu = kt = 0, da = Co = null, Iy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Al(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return xu = n, rn(), u;
  }
  function am(l, n) {
    je = null, O.H = ed, n === hi || n === Lf ? (n = cy(), gt = 3) : n === _s ? (n = cy(), gt = 4) : gt = n === Zt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, sa = n, Ie === null && (kt = 1, ur(
      l,
      Ea(n, l.current)
    ));
  }
  function uv() {
    var l = O.H;
    return O.H = ed, l === null ? ed : l;
  }
  function Oc() {
    var l = O.A;
    return O.A = Wy, l;
  }
  function Dc() {
    kt = 4, Wn || (Pe & 4194048) !== Pe && Oa.current !== null || (Uo = !0), (Nu & 134217727) === 0 && (Ac & 134217727) === 0 || zt === null || Bu(
      zt,
      Pe,
      ka,
      !1
    );
  }
  function Rd(l, n, u) {
    var c = vt;
    vt |= 2;
    var r = uv(), s = Oc();
    (zt !== l || Pe !== n) && (Ho = null, Pn(l, n)), n = !1;
    var y = kt;
    e: do
      try {
        if (gt !== 0 && Ie !== null) {
          var p = Ie, S = sa;
          switch (gt) {
            case 8:
              Ai(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Oa.current === null && (n = !0);
              var C = gt;
              if (gt = 0, sa = null, Yo(l, p, S, C), u && Uo) {
                y = 0;
                break e;
              }
              break;
            default:
              C = gt, gt = 0, sa = null, Yo(l, p, S, C);
          }
        }
        Od(), y = kt;
        break;
      } catch (Q) {
        am(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, hn = Ou = null, vt = c, O.H = r, O.A = s, Ie === null && (zt = null, Pe = 0, rn()), y;
  }
  function Od() {
    for (; Ie !== null; ) im(Ie);
  }
  function nm(l, n) {
    var u = vt;
    vt |= 2;
    var c = uv(), r = Oc();
    zt !== l || Pe !== n ? (Ho = null, Td = hl() + 500, Pn(l, n)) : Uo = m(
      l,
      n
    );
    e: do
      try {
        if (gt !== 0 && Ie !== null) {
          n = Ie;
          var s = sa;
          t: switch (gt) {
            case 1:
              gt = 0, sa = null, Yo(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (Hs(s)) {
                gt = 0, sa = null, cm(n);
                break;
              }
              n = function() {
                gt !== 2 && gt !== 9 || zt !== l || (gt = 7), ha(l);
              }, s.then(n, n);
              break e;
            case 3:
              gt = 7;
              break e;
            case 4:
              gt = 5;
              break e;
            case 7:
              Hs(s) ? (gt = 0, sa = null, cm(n)) : (gt = 0, sa = null, Yo(l, n, s, 7));
              break;
            case 5:
              var y = null;
              switch (Ie.tag) {
                case 26:
                  y = Ie.memoizedState;
                case 5:
                case 27:
                  var p = Ie;
                  if (!y || bm(y)) {
                    gt = 0, sa = null;
                    var S = p.sibling;
                    if (S !== null) Ie = S;
                    else {
                      var C = p.return;
                      C !== null ? (Ie = C, dr(C)) : Ie = null;
                    }
                    break t;
                  }
              }
              gt = 0, sa = null, Yo(l, n, s, 5);
              break;
            case 6:
              gt = 0, sa = null, Yo(l, n, s, 6);
              break;
            case 8:
              Ai(), kt = 6;
              break e;
            default:
              throw Error(U(462));
          }
        }
        um();
        break;
      } catch (Q) {
        am(l, Q);
      }
    while (!0);
    return hn = Ou = null, O.H = c, O.A = r, vt = u, Ie !== null ? 0 : (zt = null, Pe = 0, rn(), kt);
  }
  function um() {
    for (; Ie !== null && !df(); )
      im(Ie);
  }
  function im(l) {
    var n = ev(l.alternate, l, xu);
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : Ie = n;
  }
  function cm(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = xy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Pe
        );
        break;
      case 11:
        n = xy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Pe
        );
        break;
      case 5:
        js(n);
      default:
        wy(u, n), n = Ie = Ke(n, xu), n = ev(u, n, xu);
    }
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : Ie = n;
  }
  function Yo(l, n, u, c) {
    hn = Ou = null, js(n), yc = null, Eo = 0;
    var r = n.return;
    try {
      if (Fp(
        l,
        r,
        n,
        u,
        Pe
      )) {
        kt = 1, ur(
          l,
          Ea(u, l.current)
        ), Ie = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw Ie = r, s;
      kt = 1, ur(
        l,
        Ea(u, l.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? (ft || c === 1 ? l = !0 : Uo || (Pe & 536870912) !== 0 ? l = !1 : (Wn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Oa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), iv(n, l)) : dr(n);
  }
  function dr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        iv(
          n,
          Wn
        );
        return;
      }
      l = n.return;
      var u = qy(
        n.alternate,
        n,
        xu
      );
      if (u !== null) {
        Ie = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = l;
    } while (n !== null);
    kt === 0 && (kt = 5);
  }
  function iv(l, n) {
    do {
      var u = Rg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Ie = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Ie = l;
        return;
      }
      Ie = l = u;
    } while (l !== null);
    kt = 6, Ie = null;
  }
  function cv(l, n, u, c, r, s, y, p, S) {
    l.cancelPendingCommit = null;
    do
      zd();
    while (_l !== 0);
    if ((vt & 6) !== 0) throw Error(U(327));
    if (n !== null) {
      if (n === l.current) throw Error(U(177));
      if (s = n.lanes | n.childLanes, s |= Hn, we(
        l,
        u,
        s,
        y,
        p,
        S
      ), l === zt && (Ie = zt = null, Pe = 0), xo = n, In = l, Cl = u, Ed = s, Ad = r, em = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, zg(On, function() {
        return om(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = O.T, O.T = null, r = W.p, W.p = 2, y = vt, vt |= 4;
        try {
          Ly(l, n, u);
        } finally {
          vt = y, W.p = r, O.T = c;
        }
      }
      _l = 1, ov(), hr(), Dd();
    }
  }
  function ov() {
    if (_l === 1) {
      _l = 0;
      var l = In, n = xo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var c = W.p;
        W.p = 2;
        var r = vt;
        vt |= 4;
        try {
          rr(n, l);
          var s = Ar, y = Wh(l.containerInfo), p = s.focusedElem, S = s.selectionRange;
          if (y !== p && p && p.ownerDocument && _f(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && Cf(p)) {
              var C = S.start, Q = S.end;
              if (Q === void 0 && (Q = C), "selectionStart" in p)
                p.selectionStart = C, p.selectionEnd = Math.min(
                  Q,
                  p.value.length
                );
              else {
                var k = p.ownerDocument || document, N = k && k.defaultView || window;
                if (N.getSelection) {
                  var q = N.getSelection(), Se = p.textContent.length, Te = Math.min(S.start, Se), dt = S.end === void 0 ? Te : Math.min(S.end, Se);
                  !q.extend && Te > dt && (y = dt, dt = Te, Te = y);
                  var z = Ct(
                    p,
                    Te
                  ), R = Ct(
                    p,
                    dt
                  );
                  if (z && R && (q.rangeCount !== 1 || q.anchorNode !== z.node || q.anchorOffset !== z.offset || q.focusNode !== R.node || q.focusOffset !== R.offset)) {
                    var _ = k.createRange();
                    _.setStart(z.node, z.offset), q.removeAllRanges(), Te > dt ? (q.addRange(_), q.extend(R.node, R.offset)) : (_.setEnd(R.node, R.offset), q.addRange(_));
                  }
                }
              }
            }
            for (k = [], q = p; q = q.parentNode; )
              q.nodeType === 1 && k.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < k.length; p++) {
              var K = k[p];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Mr = !!Er, Ar = Er = null;
        } finally {
          vt = r, W.p = c, O.T = u;
        }
      }
      l.current = n, _l = 2;
    }
  }
  function hr() {
    if (_l === 2) {
      _l = 0;
      var l = In, n = xo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var c = W.p;
        W.p = 2;
        var r = vt;
        vt |= 4;
        try {
          Vy(l, n.alternate, n);
        } finally {
          vt = r, W.p = c, O.T = u;
        }
      }
      _l = 3;
    }
  }
  function Dd() {
    if (_l === 4 || _l === 3) {
      _l = 0, Pt();
      var l = In, n = xo, u = Cl, c = em;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? _l = 5 : (_l = 0, xo = In = null, fv(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Ei = null), an(u), n = n.stateNode, El && typeof El.onCommitFiberRoot == "function")
        try {
          El.onCommitFiberRoot(
            $u,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = O.T, r = W.p, W.p = 2, O.T = null;
        try {
          for (var s = l.onRecoverableError, y = 0; y < c.length; y++) {
            var p = c[y];
            s(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          O.T = n, W.p = r;
        }
      }
      (Cl & 3) !== 0 && zd(), ha(l), r = l.pendingLanes, (u & 4194090) !== 0 && (r & 42) !== 0 ? l === tm ? No++ : (No = 0, tm = l) : No = 0, mr(0);
    }
  }
  function fv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yn(n)));
  }
  function zd(l) {
    return ov(), hr(), Dd(), om();
  }
  function om() {
    if (_l !== 5) return !1;
    var l = In, n = Ed;
    Ed = 0;
    var u = an(Cl), c = O.T, r = W.p;
    try {
      W.p = 32 > u ? 32 : u, O.T = null, u = Ad, Ad = null;
      var s = In, y = Cl;
      if (_l = 0, xo = In = null, Cl = 0, (vt & 6) !== 0) throw Error(U(331));
      var p = vt;
      if (vt |= 4, ky(s.current), Ky(
        s,
        s.current,
        y,
        u
      ), vt = p, mr(0, !1), El && typeof El.onPostCommitFiberRoot == "function")
        try {
          El.onPostCommitFiberRoot($u, s);
        } catch {
        }
      return !0;
    } finally {
      W.p = r, O.T = c, fv(l, n);
    }
  }
  function fm(l, n, u) {
    n = Ea(u, n), n = Cy(l.stateNode, n, 2), l = jn(l, n, 2), l !== null && (xe(l, 2), ha(l));
  }
  function bt(l, n, u) {
    if (l.tag === 3)
      fm(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          fm(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ei === null || !Ei.has(c))) {
            l = Ea(u, l), u = Hy(2), c = jn(n, u, 2), c !== null && (ra(
              u,
              c,
              n,
              l
            ), xe(c, 2), ha(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Md(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new av();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (Fy = !0, r.add(u), l = rm.bind(null, l, n, u), n.then(l, l));
  }
  function rm(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, zt === l && (Pe & u) === u && (kt === 4 || kt === 3 && (Pe & 62914560) === Pe && 300 > hl() - Py ? (vt & 2) === 0 && Pn(l, 0) : Fn |= u, _o === Pe && (_o = 0)), ha(l);
  }
  function sm(l, n) {
    n === 0 && (n = ne()), l = xn(l, n), l !== null && (xe(l, n), ha(l));
  }
  function Og(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), sm(l, u);
  }
  function Dg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(U(314));
    }
    c !== null && c.delete(n), sm(l, u);
  }
  function zg(l, n) {
    return Rn(l, n);
  }
  var Ud = null, Ri = null, yr = !1, qo = !1, _d = !1, Oi = 0;
  function ha(l) {
    l !== Ri && l.next === null && (Ri === null ? Ud = Ri = l : Ri = Ri.next = l), qo = !0, yr || (yr = !0, dv());
  }
  function mr(l, n) {
    if (!_d && qo) {
      _d = !0;
      do
        for (var u = !1, c = Ud; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var y = c.suspendedLanes, p = c.pingedLanes;
              s = (1 << 31 - Al(42 | l) + 1) - 1, s &= r & ~(y & ~p), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, vr(c, s));
          } else
            s = Pe, s = ln(
              c,
              c === zt ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || m(c, s) || (u = !0, vr(c, s));
          c = c.next;
        }
      while (u);
      _d = !1;
    }
  }
  function rv() {
    pr();
  }
  function pr() {
    qo = yr = !1;
    var l = 0;
    Oi !== 0 && (wu() && (l = Oi), Oi = 0);
    for (var n = hl(), u = null, c = Ud; c !== null; ) {
      var r = c.next, s = dm(c, n);
      s === 0 ? (c.next = null, u === null ? Ud = r : u.next = r, r === null && (Ri = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (qo = !0)), c = r;
    }
    mr(l);
  }
  function dm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var y = 31 - Al(s), p = 1 << y, S = r[y];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (r[y] = D(p, n)) : S <= n && (l.expiredLanes |= p), s &= ~p;
    }
    if (n = zt, u = Pe, u = ln(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Kc(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || m(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Kc(c), an(u)) {
        case 2:
        case 8:
          u = Qe;
          break;
        case 32:
          u = On;
          break;
        case 268435456:
          u = mu;
          break;
        default:
          u = On;
      }
      return c = sv.bind(null, l), u = Rn(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Kc(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function sv(l, n) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zd() && l.callbackNode !== u)
      return null;
    var c = Pe;
    return c = ln(
      l,
      l === zt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Bo(l, c, n), dm(l, hl()), l.callbackNode != null && l.callbackNode === u ? sv.bind(null, l) : null);
  }
  function vr(l, n) {
    if (zd()) return null;
    Bo(l, n, !0);
  }
  function dv() {
    Cg(function() {
      (vt & 6) !== 0 ? Rn(
        Pr,
        rv
      ) : pr();
    });
  }
  function zc() {
    return Oi === 0 && (Oi = te()), Oi;
  }
  function Cd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ef("" + l);
  }
  function gr(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function hv(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Cd(
        (r[Zl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Zl] || null) ? Cd(n.formAction) : y.getAttribute("formAction"), n !== null && (s = n, y = null));
      var p = new hs(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Oi !== 0) {
                  var S = y ? gr(r, y) : new FormData(r);
                  Ps(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: r.method,
                      action: s
                    },
                    null,
                    S
                  );
                }
              } else
                typeof s == "function" && (p.preventDefault(), S = y ? gr(r, y) : new FormData(r), Ps(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: r.method,
                    action: s
                  },
                  s,
                  S
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var $t = 0; $t < no.length; $t++) {
    var br = no[$t], Mg = br.toLowerCase(), Ze = br[0].toUpperCase() + br.slice(1);
    wa(
      Mg,
      "on" + Ze
    );
  }
  wa(Yp, "onAnimationEnd"), wa(Fh, "onAnimationIteration"), wa(qp, "onAnimationStart"), wa("dblclick", "onDoubleClick"), wa("focusin", "onFocus"), wa("focusout", "onBlur"), wa(Ih, "onTransitionRun"), wa(Es, "onTransitionStart"), wa(wp, "onTransitionCancel"), wa(Ph, "onTransitionEnd"), Fu("onMouseEnter", ["mouseout", "mouseover"]), Fu("onMouseLeave", ["mouseout", "mouseover"]), Fu("onPointerEnter", ["pointerout", "pointerover"]), Fu("onPointerLeave", ["pointerout", "pointerover"]), Wu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Di = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sr)
  );
  function Mc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var p = c[y], S = p.instance, C = p.currentTarget;
            if (p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = C;
            try {
              s(r);
            } catch (Q) {
              ar(Q);
            }
            r.currentTarget = null, s = S;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (p = c[y], S = p.instance, C = p.currentTarget, p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = C;
            try {
              s(r);
            } catch (Q) {
              ar(Q);
            }
            r.currentTarget = null, s = S;
          }
      }
    }
  }
  function Ge(l, n) {
    var u = n[ls];
    u === void 0 && (u = n[ls] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Hd(n, l, 2, !1), u.add(c));
  }
  function wo(l, n, u) {
    var c = 0;
    n && (c |= 4), Hd(
      u,
      l,
      c,
      n
    );
  }
  var jo = "_reactListening" + Math.random().toString(36).slice(2);
  function hm(l) {
    if (!l[jo]) {
      l[jo] = !0, vf.forEach(function(u) {
        u !== "selectionchange" && (Di.has(u) || wo(u, !1, l), wo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[jo] || (n[jo] = !0, wo("selectionchange", !1, n));
    }
  }
  function Hd(l, n, u, c) {
    switch (Mm(n)) {
      case 2:
        var r = Ev;
        break;
      case 8:
        r = Av;
        break;
      default:
        r = Dm;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !rs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function $a(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var p = c.stateNode.containerInfo;
          if (p === r) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === r)
                return;
              y = y.return;
            }
          for (; p !== null; ) {
            if (y = Ol(p), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = s = y;
              continue e;
            }
            p = p.parentNode;
          }
        }
        c = c.return;
      }
    to(function() {
      var C = s, Q = fs(u), k = [];
      e: {
        var N = ey.get(l);
        if (N !== void 0) {
          var q = hs, Se = l;
          switch (l) {
            case "keypress":
              if (Dl(u) === 0) break e;
            case "keydown":
            case "keyup":
              q = nn;
              break;
            case "focusin":
              Se = "focus", q = Bh;
              break;
            case "focusout":
              Se = "blur", q = Bh;
              break;
            case "beforeblur":
            case "afterblur":
              q = Bh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = Nh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = wh;
              break;
            case Yp:
            case Fh:
            case qp:
              q = Sg;
              break;
            case Ph:
              q = Hp;
              break;
            case "scroll":
            case "scrollend":
              q = Op;
              break;
            case "wheel":
              q = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Of;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Df;
              break;
            case "toggle":
            case "beforetoggle":
              q = xp;
          }
          var Te = (n & 4) !== 0, dt = !Te && (l === "scroll" || l === "scrollend"), z = Te ? N !== null ? N + "Capture" : null : N;
          Te = [];
          for (var R = C, _; R !== null; ) {
            var K = R;
            if (_ = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || _ === null || z === null || (K = Ji(R, z), K != null && Te.push(
              Yu(R, K, _)
            )), dt) break;
            R = R.return;
          }
          0 < Te.length && (N = new q(
            N,
            Se,
            null,
            u,
            Q
          ), k.push({ event: N, listeners: Te }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (N = l === "mouseover" || l === "pointerover", q = l === "mouseout" || l === "pointerout", N && u !== Ki && (Se = u.relatedTarget || u.fromElement) && (Ol(Se) || Se[Wc]))
            break e;
          if ((q || N) && (N = Q.window === Q ? Q : (N = Q.ownerDocument) ? N.defaultView || N.parentWindow : window, q ? (Se = u.relatedTarget || u.toElement, q = C, Se = Se ? Ol(Se) : null, Se !== null && (dt = Me(Se), Te = Se.tag, Se !== dt || Te !== 5 && Te !== 27 && Te !== 6) && (Se = null)) : (q = null, Se = C), q !== Se)) {
            if (Te = Nh, K = "onMouseLeave", z = "onMouseEnter", R = "mouse", (l === "pointerout" || l === "pointerover") && (Te = Df, K = "onPointerLeave", z = "onPointerEnter", R = "pointer"), dt = q == null ? N : pf(q), _ = Se == null ? N : pf(Se), N = new Te(
              K,
              R + "leave",
              q,
              u,
              Q
            ), N.target = dt, N.relatedTarget = _, K = null, Ol(Q) === C && (Te = new Te(
              z,
              R + "enter",
              Se,
              u,
              Q
            ), Te.target = _, Te.relatedTarget = dt, K = Te), dt = K, q && Se)
              t: {
                for (Te = q, z = Se, R = 0, _ = Te; _; _ = zi(_))
                  R++;
                for (_ = 0, K = z; K; K = zi(K))
                  _++;
                for (; 0 < R - _; )
                  Te = zi(Te), R--;
                for (; 0 < _ - R; )
                  z = zi(z), _--;
                for (; R--; ) {
                  if (Te === z || z !== null && Te === z.alternate)
                    break t;
                  Te = zi(Te), z = zi(z);
                }
                Te = null;
              }
            else Te = null;
            q !== null && Tr(
              k,
              N,
              q,
              Te,
              !1
            ), Se !== null && dt !== null && Tr(
              k,
              dt,
              Se,
              Te,
              !0
            );
          }
        }
        e: {
          if (N = C ? pf(C) : window, q = N.nodeName && N.nodeName.toLowerCase(), q === "select" || q === "input" && N.type === "file")
            var fe = Qh;
          else if (gs(N))
            if (Zh)
              fe = kh;
            else {
              fe = ai;
              var Je = Ss;
            }
          else
            q = N.nodeName, !q || q.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? C && Zi(C.elementType) && (fe = Qh) : fe = Tu;
          if (fe && (fe = fe(l, C))) {
            bs(
              k,
              fe,
              u,
              Q
            );
            break e;
          }
          Je && Je(l, N, C), l === "focusout" && C && N.type === "number" && C.memoizedProps.value != null && Sf(N, "number", N.value);
        }
        switch (Je = C ? pf(C) : window, l) {
          case "focusin":
            (gs(Je) || Je.contentEditable === "true") && (_n = Je, on = C, ii = null);
            break;
          case "focusout":
            ii = on = _n = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, Ts(k, u, Q);
            break;
          case "selectionchange":
            if (tc) break;
          case "keydown":
          case "keyup":
            Ts(k, u, Q);
        }
        var ve;
        if (zf)
          e: {
            switch (l) {
              case "compositionstart":
                var Oe = "onCompositionStart";
                break e;
              case "compositionend":
                Oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Oe = "onCompositionUpdate";
                break e;
            }
            Oe = void 0;
          }
        else
          li ? Uf(l, u) && (Oe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (Mn && u.locale !== "ko" && (li || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && li && (ve = Hh()) : (bu = Q, lo = "value" in bu ? bu.value : bu.textContent, li = !0)), Je = Go(C, Oe), 0 < Je.length && (Oe = new Yh(
          Oe,
          l,
          null,
          u,
          Q
        ), k.push({ event: Oe, listeners: Je }), ve ? Oe.data = ve : (ve = ti(u), ve !== null && (Oe.data = ve)))), (ve = Gh ? Vh(l, u) : Ii(l, u)) && (Oe = Go(C, "onBeforeInput"), 0 < Oe.length && (Je = new Yh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), k.push({
          event: Je,
          listeners: Oe
        }), Je.data = ve)), hv(
          k,
          l,
          C,
          u,
          Q
        );
      }
      Mc(k, n);
    });
  }
  function Yu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Go(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Ji(l, u), r != null && c.unshift(
        Yu(l, r, s)
      ), r = Ji(l, n), r != null && c.push(
        Yu(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function zi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Tr(l, n, u, c, r) {
    for (var s = n._reactName, y = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, C = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || C === null || (S = C, r ? (C = Ji(u, s), C != null && y.unshift(
        Yu(u, C, S)
      )) : r || (C = Ji(u, s), C != null && y.push(
        Yu(u, C, S)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var Ma = /\r\n?/g, ym = /\u0000|\uFFFD/g;
  function yv(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ma, `
`).replace(ym, "");
  }
  function mm(l, n) {
    return n = yv(n), yv(l) === n;
  }
  function xd() {
  }
  function Ne(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Ic(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Ic(l, "" + c);
        break;
      case "className":
        gf(l, "class", c);
        break;
      case "tabIndex":
        gf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gf(l, u, c);
        break;
      case "style":
        Tf(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          gf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Ef("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && Ne(l, n, "name", r.name, r, null), Ne(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Ne(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Ne(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Ne(l, n, "encType", r.encType, r, null), Ne(l, n, "method", r.method, r, null), Ne(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Ef("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = xd);
        break;
      case "onScroll":
        c != null && Ge("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ge("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(U(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(U(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ef("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ge("beforetoggle", l), Ge("toggle", l), vu(l, "popover", c);
        break;
      case "xlinkActuate":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        vu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = vg.get(u) || u, vu(l, u, c));
    }
  }
  function j(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        Tf(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(U(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(U(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Ic(l, c) : (typeof c == "number" || typeof c == "bigint") && Ic(l, "" + c);
        break;
      case "onScroll":
        c != null && Ge("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ge("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = xd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Sa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[Zl] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : vu(l, u, c);
          }
    }
  }
  function Ue(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ge("error", l), Ge("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var y = u[s];
            if (y != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(U(137, n));
                default:
                  Ne(l, n, s, y, u, null);
              }
          }
        r && Ne(l, n, "srcSet", u.srcSet, u, null), c && Ne(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ge("invalid", l);
        var p = s = y = r = null, S = null, C = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  r = Q;
                  break;
                case "type":
                  y = Q;
                  break;
                case "checked":
                  S = Q;
                  break;
                case "defaultChecked":
                  C = Q;
                  break;
                case "value":
                  s = Q;
                  break;
                case "defaultValue":
                  p = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(U(137, n));
                  break;
                default:
                  Ne(l, n, c, Q, u, null);
              }
          }
        cs(
          l,
          s,
          p,
          S,
          C,
          y,
          r,
          !1
        ), Pu(l);
        return;
      case "select":
        Ge("invalid", l), c = y = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (p = u[r], p != null))
            switch (r) {
              case "value":
                s = p;
                break;
              case "defaultValue":
                y = p;
                break;
              case "multiple":
                c = p;
              default:
                Ne(l, n, r, p, u, null);
            }
        n = s, u = y, l.multiple = !!c, n != null ? Qi(l, !!c, n, !1) : u != null && Qi(l, !!c, u, !0);
        return;
      case "textarea":
        Ge("invalid", l), s = r = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (p = u[y], p != null))
            switch (y) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                r = p;
                break;
              case "children":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(U(91));
                break;
              default:
                Ne(l, n, y, p, u, null);
            }
        _h(l, c, r, s), Pu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ne(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        Ge("beforetoggle", l), Ge("toggle", l), Ge("cancel", l), Ge("close", l);
        break;
      case "iframe":
      case "object":
        Ge("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Sr.length; c++)
          Ge(Sr[c], l);
        break;
      case "image":
        Ge("error", l), Ge("load", l);
        break;
      case "details":
        Ge("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ge("error", l), Ge("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in u)
          if (u.hasOwnProperty(C) && (c = u[C], c != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(U(137, n));
              default:
                Ne(l, n, C, c, u, null);
            }
        return;
      default:
        if (Zi(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && j(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && Ne(l, n, p, c, u, null));
  }
  function Ug(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, y = null, p = null, S = null, C = null, Q = null;
        for (q in u) {
          var k = u[q];
          if (u.hasOwnProperty(q) && k != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = k;
              default:
                c.hasOwnProperty(q) || Ne(l, n, q, null, c, k);
            }
        }
        for (var N in c) {
          var q = c[N];
          if (k = u[N], c.hasOwnProperty(N) && (q != null || k != null))
            switch (N) {
              case "type":
                s = q;
                break;
              case "name":
                r = q;
                break;
              case "checked":
                C = q;
                break;
              case "defaultChecked":
                Q = q;
                break;
              case "value":
                y = q;
                break;
              case "defaultValue":
                p = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(U(137, n));
                break;
              default:
                q !== k && Ne(
                  l,
                  n,
                  N,
                  q,
                  c,
                  k
                );
            }
        }
        is(
          l,
          y,
          p,
          S,
          C,
          Q,
          s,
          r
        );
        return;
      case "select":
        q = y = p = N = null;
        for (s in u)
          if (S = u[s], u.hasOwnProperty(s) && S != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                q = S;
              default:
                c.hasOwnProperty(s) || Ne(
                  l,
                  n,
                  s,
                  null,
                  c,
                  S
                );
            }
        for (r in c)
          if (s = c[r], S = u[r], c.hasOwnProperty(r) && (s != null || S != null))
            switch (r) {
              case "value":
                N = s;
                break;
              case "defaultValue":
                p = s;
                break;
              case "multiple":
                y = s;
              default:
                s !== S && Ne(
                  l,
                  n,
                  r,
                  s,
                  c,
                  S
                );
            }
        n = p, u = y, c = q, N != null ? Qi(l, !!u, N, !1) : !!c != !!u && (n != null ? Qi(l, !!u, n, !0) : Qi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        q = N = null;
        for (p in u)
          if (r = u[p], u.hasOwnProperty(p) && r != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(l, n, p, null, c, r);
            }
        for (y in c)
          if (r = c[y], s = u[y], c.hasOwnProperty(y) && (r != null || s != null))
            switch (y) {
              case "value":
                N = r;
                break;
              case "defaultValue":
                q = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(U(91));
                break;
              default:
                r !== s && Ne(l, n, y, r, c, s);
            }
        Uh(l, N, q);
        return;
      case "option":
        for (var Se in u)
          if (N = u[Se], u.hasOwnProperty(Se) && N != null && !c.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ne(
                  l,
                  n,
                  Se,
                  null,
                  c,
                  N
                );
            }
        for (S in c)
          if (N = c[S], q = u[S], c.hasOwnProperty(S) && N !== q && (N != null || q != null))
            switch (S) {
              case "selected":
                l.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Ne(
                  l,
                  n,
                  S,
                  N,
                  c,
                  q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Te in u)
          N = u[Te], u.hasOwnProperty(Te) && N != null && !c.hasOwnProperty(Te) && Ne(l, n, Te, null, c, N);
        for (C in c)
          if (N = c[C], q = u[C], c.hasOwnProperty(C) && N !== q && (N != null || q != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(U(137, n));
                break;
              default:
                Ne(
                  l,
                  n,
                  C,
                  N,
                  c,
                  q
                );
            }
        return;
      default:
        if (Zi(n)) {
          for (var dt in u)
            N = u[dt], u.hasOwnProperty(dt) && N !== void 0 && !c.hasOwnProperty(dt) && j(
              l,
              n,
              dt,
              void 0,
              c,
              N
            );
          for (Q in c)
            N = c[Q], q = u[Q], !c.hasOwnProperty(Q) || N === q || N === void 0 && q === void 0 || j(
              l,
              n,
              Q,
              N,
              c,
              q
            );
          return;
        }
    }
    for (var z in u)
      N = u[z], u.hasOwnProperty(z) && N != null && !c.hasOwnProperty(z) && Ne(l, n, z, null, c, N);
    for (k in c)
      N = c[k], q = u[k], !c.hasOwnProperty(k) || N === q || N == null && q == null || Ne(l, n, k, N, c, q);
  }
  var Er = null, Ar = null;
  function Wa(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lo(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function eu(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Vo = null;
  function wu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vo ? !1 : (Vo = l, !0) : (Vo = null, !1);
  }
  var Nd = typeof setTimeout == "function" ? setTimeout : void 0, _g = typeof clearTimeout == "function" ? clearTimeout : void 0, mv = typeof Promise == "function" ? Promise : void 0, Cg = typeof queueMicrotask == "function" ? queueMicrotask : typeof mv < "u" ? function(l) {
    return mv.resolve(null).then(l).catch(tu);
  } : Nd;
  function tu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Mi(l) {
    return l === "head";
  }
  function Bd(l, n) {
    var u = n, c = 0, r = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && ya(y.documentElement), u & 2 && ya(y.body), u & 4)
              for (u = y.head, ya(u), y = u.firstChild; y; ) {
                var p = y.nextSibling, S = y.nodeName;
                y[se] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = p;
              }
          }
          if (r === 0) {
            l.removeChild(s), au(n);
            return;
          }
          r--;
        } else
          u === "$" || u === "$?" || u === "$!" ? r++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = s;
    } while (u);
    au(n);
  }
  function Rr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rr(u), mf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Xo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[se])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = gn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Hg(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = gn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Or(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function xg(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function gn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var Ui = null;
  function Hl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ce(l, n, u) {
    switch (n = Wa(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(U(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(U(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(U(454));
        return l;
      default:
        throw Error(U(451));
    }
  }
  function ya(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    mf(l);
  }
  var Wt = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Set();
  function Yd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ju = W.d;
  W.d = {
    f: qd,
    r: wd,
    D: Gu,
    C: jd,
    L: _i,
    m: Vl,
    X: Ci,
    S: ma,
    M: pm
  };
  function qd() {
    var l = ju.f(), n = Rc();
    return l || n;
  }
  function wd(l) {
    var n = Gi(l);
    n !== null && n.tag === 5 && n.type === "form" ? To(n) : ju.r(l);
  }
  var xl = typeof document > "u" ? null : document;
  function bn(l, n, u) {
    var c = xl;
    if (c && typeof n == "string" && n) {
      var r = Ya(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Ll.has(r) || (Ll.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), Ue(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Gu(l) {
    ju.D(l), bn("dns-prefetch", l, null);
  }
  function jd(l, n) {
    ju.C(l, n), bn("preconnect", l, n);
  }
  function _i(l, n, u) {
    ju.L(l, n, u);
    var c = xl;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Ya(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Ya(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Ya(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Ya(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = Qo(l);
          break;
        case "script":
          s = Fa(l);
      }
      Wt.has(s) || (l = oe(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Wt.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Zo(s)) || n === "script" && c.querySelector(Uc(s)) || (n = c.createElement("link"), Ue(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Vl(l, n) {
    ju.m(l, n);
    var u = xl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Ya(c) + '"][href="' + Ya(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Fa(l);
      }
      if (!Wt.has(s) && (l = oe({ rel: "modulepreload", href: l }, n), Wt.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Uc(s)))
              return;
        }
        c = u.createElement("link"), Ue(c, "link", l), il(c), u.head.appendChild(c);
      }
    }
  }
  function ma(l, n, u) {
    ju.S(l, n, u);
    var c = xl;
    if (c && l) {
      var r = pu(c).hoistableStyles, s = Qo(l);
      n = n || "default";
      var y = r.get(s);
      if (!y) {
        var p = { loading: 0, preload: null };
        if (y = c.querySelector(
          Zo(s)
        ))
          p.loading = 5;
        else {
          l = oe(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Wt.get(s)) && Ld(l, u);
          var S = y = c.createElement("link");
          il(S), Ue(S, "link", l), S._p = new Promise(function(C, Q) {
            S.onload = C, S.onerror = Q;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Gd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: p
        }, r.set(s, y);
      }
    }
  }
  function Ci(l, n) {
    ju.X(l, n);
    var u = xl;
    if (u && l) {
      var c = pu(u).hoistableScripts, r = Fa(l), s = c.get(r);
      s || (s = u.querySelector(Uc(r)), s || (l = oe({ src: l, async: !0 }, n), (n = Wt.get(r)) && Vd(l, n), s = u.createElement("script"), il(s), Ue(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function pm(l, n) {
    ju.M(l, n);
    var u = xl;
    if (u && l) {
      var c = pu(u).hoistableScripts, r = Fa(l), s = c.get(r);
      s || (s = u.querySelector(Uc(r)), s || (l = oe({ src: l, async: !0, type: "module" }, n), (n = Wt.get(r)) && Vd(l, n), s = u.createElement("script"), il(s), Ue(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function pv(l, n, u, c) {
    var r = (r = ie.current) ? Yd(r) : null;
    if (!r) throw Error(U(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Qo(u.href), u = pu(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Qo(u.href);
          var s = pu(
            r
          ).hoistableStyles, y = s.get(l);
          if (y || (r = r.ownerDocument || r, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, y), (s = r.querySelector(
            Zo(l)
          )) && !s._p && (y.instance = s, y.state.loading = 5), Wt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Wt.set(l, u), s || vv(
            r,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(U(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(U(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Fa(u), u = pu(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(U(444, l));
    }
  }
  function Qo(l) {
    return 'href="' + Ya(l) + '"';
  }
  function Zo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ko(l) {
    return oe({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function vv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Ue(n, "link", u), il(n), l.head.appendChild(n));
  }
  function Fa(l) {
    return '[src="' + Ya(l) + '"]';
  }
  function Uc(l) {
    return "script[async]" + l;
  }
  function gv(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ya(u.href) + '"]'
          );
          if (c)
            return n.instance = c, il(c), c;
          var r = oe({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), il(c), Ue(c, "style", r), Gd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = Qo(u.href);
          var s = l.querySelector(
            Zo(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, il(s), s;
          c = Ko(u), (r = Wt.get(r)) && Ld(c, r), s = (l.ownerDocument || l).createElement("link"), il(s);
          var y = s;
          return y._p = new Promise(function(p, S) {
            y.onload = p, y.onerror = S;
          }), Ue(s, "link", c), n.state.loading |= 4, Gd(s, u.precedence, l), n.instance = s;
        case "script":
          return s = Fa(u.src), (r = l.querySelector(
            Uc(s)
          )) ? (n.instance = r, il(r), r) : (c = u, (r = Wt.get(s)) && (c = oe({}, u), Vd(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), il(r), Ue(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(U(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Gd(c, u.precedence, l));
    return n.instance;
  }
  function Gd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, y = 0; y < c.length; y++) {
      var p = c[y];
      if (p.dataset.precedence === n) s = p;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Ld(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Vd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Hi = null;
  function vm(l, n, u) {
    if (Hi === null) {
      var c = /* @__PURE__ */ new Map(), r = Hi = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = Hi, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[se] || s[yl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = s.getAttribute(n) || "";
        y = l + y;
        var p = c.get(y);
        p ? p.push(s) : c.set(y, [s]);
      }
    }
    return c;
  }
  function gm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function bv(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function bm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Jo = null;
  function Sv() {
  }
  function Tv(l, n, u) {
    if (Jo === null) throw Error(U(475));
    var c = Jo;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = Qo(u.href), s = l.querySelector(
          Zo(r)
        );
        if (s) {
          l = s._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Dr.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = s, il(s);
          return;
        }
        s = l.ownerDocument || l, u = Ko(u), (r = Wt.get(r)) && Ld(u, r), s = s.createElement("link"), il(s);
        var y = s;
        y._p = new Promise(function(p, S) {
          y.onload = p, y.onerror = S;
        }), Ue(s, "link", u), n.instance = s;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Dr.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function Sm() {
    if (Jo === null) throw Error(U(475));
    var l = Jo;
    return l.stylesheets && l.count === 0 && zr(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && zr(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Dr() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zr(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var ko = null;
  function zr(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, ko = /* @__PURE__ */ new Map(), n.forEach(Ua, l), ko = null, Dr.call(l));
  }
  function Ua(l, n) {
    if (!(n.state.loading & 4)) {
      var u = ko.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), ko.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var y = r[s];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      r = n.instance, y = r.getAttribute("data-precedence"), s = u.get(y) || c, s === c && u.set(null, r), u.set(y, r), this.count++, c = Dr.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var pa = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Ng(l, n, u, c, r, s, y, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ye(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ye(0), this.hiddenUpdates = ye(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tm(l, n, u, c, r, s, y, p, S, C, Q, k) {
    return l = new Ng(
      l,
      n,
      u,
      y,
      p,
      S,
      C,
      k
    ), n = 1, s === !0 && (n |= 24), s = ua(3, null, null, n), l.current = s, s.stateNode = l, n = po(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, xs(s), l;
  }
  function Em(l) {
    return l ? (l = co, l) : co;
  }
  function Am(l, n, u, c, r, s) {
    r = Em(r), c.context === null ? c.context = r : c.pendingContext = r, c = ca(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = jn(l, c, n), u !== null && (za(u, l, n), oc(u, l, n));
  }
  function Rm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Xd(l, n) {
    Rm(l, n), (l = l.alternate) && Rm(l, n);
  }
  function Om(l) {
    if (l.tag === 13) {
      var n = xn(l, 67108864);
      n !== null && za(n, l, 67108864), Xd(l, 67108864);
    }
  }
  var Mr = !0;
  function Ev(l, n, u, c) {
    var r = O.T;
    O.T = null;
    var s = W.p;
    try {
      W.p = 2, Dm(l, n, u, c);
    } finally {
      W.p = s, O.T = r;
    }
  }
  function Av(l, n, u, c) {
    var r = O.T;
    O.T = null;
    var s = W.p;
    try {
      W.p = 8, Dm(l, n, u, c);
    } finally {
      W.p = s, O.T = r;
    }
  }
  function Dm(l, n, u, c) {
    if (Mr) {
      var r = Qd(c);
      if (r === null)
        $a(
          l,
          n,
          c,
          Zd,
          u
        ), _c(l, c);
      else if (Ov(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (_c(l, c), n & 4 && -1 < Rv.indexOf(l)) {
        for (; r !== null; ) {
          var s = Gi(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var y = Rl(s.pendingLanes);
                  if (y !== 0) {
                    var p = s;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Al(y);
                      p.entanglements[1] |= S, y &= ~S;
                    }
                    ha(s), (vt & 6) === 0 && (Td = hl() + 500, mr(0));
                  }
                }
                break;
              case 13:
                p = xn(s, 2), p !== null && za(p, s, 2), Rc(), Xd(s, 2);
            }
          if (s = Qd(c), s === null && $a(
            l,
            n,
            c,
            Zd,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        $a(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Qd(l) {
    return l = fs(l), zm(l);
  }
  var Zd = null;
  function zm(l) {
    if (Zd = null, l = Ol(l), l !== null) {
      var n = Me(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = at(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Zd = l, null;
  }
  function Mm(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ku()) {
          case Pr:
            return 2;
          case Qe:
            return 8;
          case On:
          case Jc:
            return 32;
          case mu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $o = !1, lu = null, Lu = null, Vu = null, Ur = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), xi = [], Rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _c(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        lu = null;
        break;
      case "dragenter":
      case "dragleave":
        Lu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        Ur.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _r.delete(n.pointerId);
    }
  }
  function Cc(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Gi(n), n !== null && Om(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function Ov(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return lu = Cc(
          lu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Lu = Cc(
          Lu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Vu = Cc(
          Vu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return Ur.set(
          s,
          Cc(
            Ur.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, _r.set(
          s,
          Cc(
            _r.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Um(l) {
    var n = Ol(l.target);
    if (n !== null) {
      var u = Me(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = at(u), n !== null) {
            l.blockedOn = n, Rh(l.priority, function() {
              if (u.tag === 13) {
                var c = Da();
                c = el(c);
                var r = xn(u, c);
                r !== null && za(r, u, c), Xd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Cr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Qd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ki = c, u.target.dispatchEvent(c), Ki = null;
      } else
        return n = Gi(u), n !== null && Om(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Hr(l, n, u) {
    Cr(l) && u.delete(n);
  }
  function Wo() {
    $o = !1, lu !== null && Cr(lu) && (lu = null), Lu !== null && Cr(Lu) && (Lu = null), Vu !== null && Cr(Vu) && (Vu = null), Ur.forEach(Hr), _r.forEach(Hr);
  }
  function Kd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, $o || ($o = !0, x.unstable_scheduleCallback(
      x.unstable_NormalPriority,
      Wo
    )));
  }
  var Hc = null;
  function _m(l) {
    Hc !== l && (Hc = l, x.unstable_scheduleCallback(
      x.unstable_NormalPriority,
      function() {
        Hc === l && (Hc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (zm(c || u) === null)
              continue;
            break;
          }
          var s = Gi(u);
          s !== null && (l.splice(n, 3), n -= 3, Ps(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function au(l) {
    function n(S) {
      return Kd(S, l);
    }
    lu !== null && Kd(lu, l), Lu !== null && Kd(Lu, l), Vu !== null && Kd(Vu, l), Ur.forEach(n), _r.forEach(n);
    for (var u = 0; u < xi.length; u++) {
      var c = xi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < xi.length && (u = xi[0], u.blockedOn === null); )
      Um(u), u.blockedOn === null && xi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], y = r[Zl] || null;
        if (typeof s == "function")
          y || _m(u);
        else if (y) {
          var p = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, y = s[Zl] || null)
              p = y.formAction;
            else if (zm(r) !== null) continue;
          } else p = y.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), _m(u);
        }
      }
  }
  function Cm(l) {
    this._internalRoot = l;
  }
  Jd.prototype.render = Cm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(U(409));
    var u = n.current, c = Da();
    Am(u, c, l, n, null, null);
  }, Jd.prototype.unmount = Cm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Am(l.current, 2, null, l, null, null), Rc(), n[Wc] = null;
    }
  };
  function Jd(l) {
    this._internalRoot = l;
  }
  Jd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = ts();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < xi.length && n !== 0 && n < xi[u].priority; u++) ;
      xi.splice(u, 0, l), u === 0 && Um(l);
    }
  };
  var Hm = F.version;
  if (Hm !== "19.1.1")
    throw Error(
      U(
        527,
        Hm,
        "19.1.1"
      )
    );
  W.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(U(188)) : (l = Object.keys(l).join(","), Error(U(268, l)));
    return l = w(n), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Fl = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
      try {
        $u = xr.inject(
          Fl
        ), El = xr;
      } catch {
      }
  }
  return hp.createRoot = function(l, n) {
    if (!Ee(l)) throw Error(U(299));
    var u = !1, c = "", r = Ro, s = Uy, y = nr, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = Tm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      r,
      s,
      y,
      p,
      null
    ), l[Wc] = n.current, hm(l), new Cm(n);
  }, hp.hydrateRoot = function(l, n, u) {
    if (!Ee(l)) throw Error(U(299));
    var c = !1, r = "", s = Ro, y = Uy, p = nr, S = null, C = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (C = u.formState)), n = Tm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      s,
      y,
      p,
      S,
      C
    ), n.context = Em(null), u = n.current, c = Da(), c = el(c), r = ca(c), r.callback = null, jn(u, r, c), u = c, n.current.lanes = u, xe(n, u), ha(n), l[Wc] = n.current, hm(l), new Jd(n);
  }, hp.version = "19.1.1", hp;
}
var yp = {}, Q1;
function dT() {
  if (Q1) return yp;
  Q1 = 1;
  /**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return "production".NODE_ENV !== "production" && (function() {
    function x(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function F(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ne(e) ? e.slice() : Ze({}, e);
      return f[o] = F(e[o], t, a + 1, i), f;
    }
    function ge(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return U(e, t, a, 0);
      }
    }
    function U(e, t, a, i) {
      var o = t[i], f = Ne(e) ? e.slice() : Ze({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ne(f) ? f.splice(o, 1) : delete f[o]) : f[o] = U(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Ee(e, t, a) {
      var i = t[a], o = Ne(e) ? e.slice() : Ze({}, e);
      return a + 1 === t.length ? (Ne(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Ee(e[i], t, a + 1), o);
    }
    function Me() {
      return !1;
    }
    function at() {
      return null;
    }
    function yt() {
    }
    function w() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function J() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function oe() {
    }
    function $(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function M(e, t, a, i) {
      return new Mf(e, t, a, i);
    }
    function le(e, t) {
      e.context === Fo && (bt(e.current, 2, t, e, null, null), gc());
    }
    function me(e, t) {
      if (uu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Oo(), zf(
          e.current,
          t,
          a
        ), gc();
      }
    }
    function ct(e) {
      uu = e;
    }
    function De(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function He(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Tt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function tt(e) {
      if (He(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Ft(e) {
      var t = e.alternate;
      if (!t) {
        if (t = He(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return tt(o), e;
            if (f === i) return tt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Ye(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Ye(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ot(e) {
      return e === null || typeof e != "object" ? null : (e = mm && e[mm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function We(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === xd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ge:
          return "Fragment";
        case jo:
          return "Profiler";
        case wo:
          return "StrictMode";
        case Go:
          return "Suspense";
        case zi:
          return "SuspenseList";
        case ym:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Mc:
            return "Portal";
          case $a:
            return (e.displayName || "Context") + ".Provider";
          case Hd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Yu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Tr:
            return t = e.displayName || null, t !== null ? t : We(e.type) || "Memo";
          case Ma:
            t = e._payload, e = e._init;
            try {
              return We(e(t));
            } catch {
            }
        }
      return null;
    }
    function Dt(e) {
      return typeof e.tag == "number" ? re(e) : typeof e.name == "string" ? e.name : null;
    }
    function re(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return We(t);
        case 8:
          return t === wo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return re(e.return);
      }
      return null;
    }
    function Mt(e) {
      return { current: e };
    }
    function be(e, t) {
      0 > Wa ? console.error("Unexpected pop.") : (t !== Ar[Wa] && console.error("Unexpected Fiber popped."), e.current = Er[Wa], Er[Wa] = null, Ar[Wa] = null, Wa--);
    }
    function ze(e, t, a) {
      Wa++, Er[Wa] = e.current, Ar[Wa] = a, e.current = t;
    }
    function Ut(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function jt(e, t) {
      ze(eu, t, e), ze(Lo, e, e), ze(qu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? gt(t) : Vc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = gt(t), t = sa(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Th;
                break;
              case "math":
                t = tg;
                break;
              default:
                t = Vc;
            }
      }
      a = a.toLowerCase(), a = Uh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, be(qu, e), ze(qu, a, e);
    }
    function mt(e) {
      be(qu, e), be(Lo, e), be(eu, e);
    }
    function O() {
      return Ut(qu.current);
    }
    function W(e) {
      e.memoizedState !== null && ze(Vo, e, e);
      var t = Ut(qu.current), a = e.type, i = sa(t.context, a);
      a = Uh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (ze(Lo, e, e), ze(qu, i, e));
    }
    function P(e) {
      Lo.current === e && (be(qu, e), be(Lo, e)), Vo.current === e && (be(Vo, e), rp._currentValue = Fr);
    }
    function pe(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function g(e) {
      try {
        return B(e), !1;
      } catch {
        return !0;
      }
    }
    function B(e) {
      return "" + e;
    }
    function Z(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          pe(e)
        ), B(e);
    }
    function I(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          pe(e)
        ), B(e);
    }
    function ue(e) {
      if (g(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          pe(e)
        ), B(e);
    }
    function Ae(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ui = t.inject(e), Hl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ie(e) {
      if (typeof xg == "function" && gn(e), Hl && typeof Hl.setStrictMode == "function")
        try {
          Hl.setStrictMode(Ui, e);
        } catch (t) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function nl(e) {
      ce = e;
    }
    function Ce() {
      ce !== null && typeof ce.markCommitStopped == "function" && ce.markCommitStopped();
    }
    function Nt(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function ta() {
      ce !== null && typeof ce.markComponentRenderStopped == "function" && ce.markComponentRenderStopped();
    }
    function An(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function ji() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function Rn(e, t) {
      ce !== null && typeof ce.markStateUpdateScheduled == "function" && ce.markStateUpdateScheduled(e, t);
    }
    function Kc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Yd(e) / ju | 0) | 0;
    }
    function df(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Pt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function hl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Pt(i) : (d &= h, d !== 0 ? o = Pt(d) : a || (a = h & ~e, a !== 0 && (o = Pt(a))))) : (h = i & ~f, h !== 0 ? o = Pt(h) : d !== 0 ? o = Pt(d) : a || (a = i & ~e, a !== 0 && (o = Pt(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ku(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Pr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Qe() {
      var e = qd;
      return qd <<= 1, (qd & 4194048) === 0 && (qd = 256), e;
    }
    function On() {
      var e = wd;
      return wd <<= 1, (wd & 62914560) === 0 && (wd = 4194304), e;
    }
    function Jc(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function mu(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function es(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, v = e.expirationTimes, b = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var Y = 31 - Ll(a), L = 1 << Y;
        h[Y] = 0, v[Y] = -1;
        var H = b[Y];
        if (H !== null)
          for (b[Y] = null, Y = 0; Y < H.length; Y++) {
            var V = H[Y];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~L;
      }
      i !== 0 && hf(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function hf(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ll(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function $u(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ll(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function El(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ba(e, t, a) {
      if (Wt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ll(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Al(e, t) {
      if (Wt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ll(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function kc(e) {
      return e &= -e, xl < e ? bn < e ? (e & 134217727) !== 0 ? Gu : jd : bn : xl;
    }
    function yf() {
      var e = Ue.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Gu : _d(e.type));
    }
    function $c(e, t) {
      var a = Ue.p;
      try {
        return Ue.p = e, t();
      } finally {
        Ue.p = a;
      }
    }
    function tn(e) {
      delete e[Vl], delete e[ma], delete e[pm], delete e[pv], delete e[Qo];
    }
    function la(e) {
      var t = e[Vl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ci] || a[Vl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = No(e); e !== null; ) {
              if (a = e[Vl])
                return a;
              e = No(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Rl(e) {
      if (e = e[Vl] || e[Ci]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ln(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function m(e) {
      var t = e[Zo];
      return t || (t = e[Zo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function D(e) {
      e[Ko] = !0;
    }
    function te(e, t) {
      ne(e, t), ne(e + "Capture", t);
    }
    function ne(e, t) {
      Fa[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Fa[e] = t;
      var a = e.toLowerCase();
      for (Uc[a] = e, e === "onDoubleClick" && (Uc.ondblclick = e), e = 0; e < t.length; e++)
        vv.add(t[e]);
    }
    function ye(e, t) {
      gv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function xe(e) {
      return wu.call(Vd, e) ? !0 : wu.call(Ld, e) ? !1 : Gd.test(e) ? Vd[e] = !0 : (Ld[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function we(e, t, a) {
      if (xe(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Z(a, t), e === "" + a ? a : e);
      }
    }
    function nt(e, t, a) {
      if (xe(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Z(a, t), e.setAttribute(t, "" + a);
        }
    }
    function qe(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Z(a, t), e.setAttribute(t, "" + a);
      }
    }
    function el(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Z(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function an() {
    }
    function ts() {
      if (Hi === 0) {
        vm = console.log, gm = console.info, bv = console.warn, bm = console.error, Jo = console.group, Sv = console.groupCollapsed, Tv = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: an,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Hi++;
    }
    function Rh() {
      if (Hi--, Hi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ze({}, e, { value: vm }),
          info: Ze({}, e, { value: gm }),
          warn: Ze({}, e, { value: bv }),
          error: Ze({}, e, { value: bm }),
          group: Ze({}, e, { value: Jo }),
          groupCollapsed: Ze({}, e, { value: Sv }),
          groupEnd: Ze({}, e, { value: Tv })
        });
      }
      0 > Hi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ul(e) {
      if (Sm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Sm = t && t[1] || "", Dr = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Sm + e + Dr;
    }
    function yl(e, t) {
      if (!e || ko) return "";
      var a = zr.get(e);
      if (a !== void 0) return a;
      ko = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = j.H, j.H = null, ts();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var H = function() {
                  throw Error();
                };
                if (Object.defineProperty(H.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(H, []);
                  } catch (de) {
                    var V = de;
                  }
                  Reflect.construct(e, [], H);
                } else {
                  try {
                    H.call();
                  } catch (de) {
                    V = de;
                  }
                  e.call(H.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (de) {
                  V = de;
                }
                (H = e()) && typeof H.catch == "function" && H.catch(function() {
                });
              }
            } catch (de) {
              if (de && V && typeof de.stack == "string")
                return [de.stack, V.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], v = d[1];
        if (h && v) {
          var b = h.split(`
`), Y = v.split(`
`);
          for (d = f = 0; f < b.length && !b[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < Y.length && !Y[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === b.length || d === Y.length)
            for (f = b.length - 1, d = Y.length - 1; 1 <= f && 0 <= d && b[f] !== Y[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (b[f] !== Y[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || b[f] !== Y[d]) {
                    var L = `
` + b[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && zr.set(e, L), L;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        ko = !1, j.H = i, Rh(), Error.prepareStackTrace = a;
      }
      return b = (b = e ? e.displayName || e.name : "") ? ul(b) : "", typeof e == "function" && zr.set(e, b), b;
    }
    function Zl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Wc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ul(e.type);
        case 16:
          return ul("Lazy");
        case 13:
          return ul("Suspense");
        case 19:
          return ul("SuspenseList");
        case 0:
        case 15:
          return yl(e.type, !1);
        case 11:
          return yl(e.type.render, !1);
        case 1:
          return yl(e.type, !0);
        case 31:
          return ul("Activity");
        default:
          return "";
      }
    }
    function ls(e) {
      try {
        var t = "";
        do {
          t += Wc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = ul(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (v) {
        return `
Error generating stack: ` + v.message + `
` + v.stack;
      }
    }
    function gp(e) {
      return (e = e ? e.displayName || e.name : "") ? ul(e) : "";
    }
    function as() {
      if (Ua === null) return null;
      var e = Ua._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function bp() {
      if (Ua === null) return "";
      var e = Ua;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ul(e.type);
            break;
          case 13:
            t += ul("Suspense");
            break;
          case 19:
            t += ul("SuspenseList");
            break;
          case 31:
            t += ul("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += gp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += gp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Zl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Zl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function se(e, t, a, i, o, f, d) {
      var h = Ua;
      mf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        mf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function mf(e) {
      j.getCurrentStack = e === null ? null : bp, pa = !1, Ua = e;
    }
    function Ol(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ue(e), e;
        default:
          return "";
      }
    }
    function Gi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pf(e) {
      var t = Gi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ue(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            ue(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            ue(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function pu(e) {
      e._valueTracker || (e._valueTracker = pf(e));
    }
    function il(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Gi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Sa(e) {
      return e.replace(
        Ng,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Wu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Em || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        as() || "A component",
        t.type
      ), Em = !0), t.value === void 0 || t.defaultValue === void 0 || Tm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        as() || "A component",
        t.type
      ), Tm = !0);
    }
    function Fu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Z(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ol(t)) : e.value !== "" + Ol(t) && (e.value = "" + Ol(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ns(e, d, Ol(t)) : a != null ? ns(e, d, Ol(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Z(h, "name"), e.name = "" + Ol(h)) : e.removeAttribute("name");
    }
    function Sp(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Z(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + Ol(a) : "", t = t != null ? "" + Ol(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Z(d, "name"), e.name = d);
    }
    function ns(e, t, a) {
      t === "number" && vf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Oh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? br.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Rm || (Rm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Xd || (Xd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Am || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Am = !0);
    }
    function Tp() {
      var e = as();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function vu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ol(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function gf(e, t) {
      for (e = 0; e < Mr.length; e++) {
        var a = Mr[e];
        if (t[a] != null) {
          var i = Ne(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Tp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Tp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Om || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Om = !0);
    }
    function Dn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Ev || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        as() || "A component"
      ), Ev = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function us(e, t, a) {
      if (t != null && (t = "" + Ol(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ol(a) : "";
    }
    function Dh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ne(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ol(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Li(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Li(e.children[0], t) : e;
    }
    function Kl(e) {
      return "  " + "  ".repeat(e);
    }
    function Iu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Vi(e) {
      return "- " + "  ".repeat(e);
    }
    function zh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ql(e, t) {
      return Av.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function bf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Iu(a) + ql(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Iu(a) + ql(e, i) + `
` + Vi(a) + ql(t, i) + `
`;
      }
      return Kl(a) + ql(e, i) + `
`;
    }
    function Mh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Pu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ne(e)) return "[...]";
          if (e.$$typeof === Di)
            return (t = We(e.type)) ? "<" + t + ">" : "<...>";
          var a = Mh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Pu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Xi(e, t) {
      return typeof e != "string" || Av.test(e) ? "{" + Pu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Fc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Xi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function pg(e, t, a) {
      var i = "", o = Ze({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Pu(e[f], d);
          t.hasOwnProperty(f) ? (d = Pu(t[f], d), i += Iu(a) + f + ": " + h + `
`, i += Vi(a) + f + ": " + d + `
`) : i += Iu(a) + f + ": " + h + `
`;
        }
      for (var v in o)
        o.hasOwnProperty(v) && (e = Pu(
          o[v],
          120 - 2 * a - v.length - 2
        ), i += Vi(a) + v + ": " + e + `
`);
      return i;
    }
    function Ya(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (b in a)
        a.hasOwnProperty(b) && f.set(
          b.toLowerCase(),
          b
        );
      if (f.size === 1 && f.has("children"))
        o += Fc(
          e,
          t,
          Kl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, v = f.get(d.toLowerCase());
            if (v !== void 0) {
              f.delete(d.toLowerCase());
              var b = t[d];
              v = a[v];
              var Y = Xi(
                b,
                h
              );
              h = Xi(
                v,
                h
              ), typeof b == "object" && b !== null && typeof v == "object" && v !== null && Mh(b) === "Object" && Mh(v) === "Object" && (2 < Object.keys(b).length || 2 < Object.keys(v).length || -1 < Y.indexOf("...") || -1 < h.indexOf("...")) ? o += Kl(i + 1) + d + `={{
` + pg(
                b,
                v,
                i + 2
              ) + Kl(i + 1) + `}}
` : (o += Iu(i + 1) + d + "=" + Y + `
`, o += Vi(i + 1) + d + "=" + h + `
`);
            } else
              o += Kl(i + 1) + d + "=" + Xi(t[d], h) + `
`;
          }
        f.forEach(function(L) {
          if (L !== "children") {
            var H = 120 - 2 * (i + 1) - L.length - 1;
            o += Vi(i + 1) + L + "=" + Xi(a[L], H) + `
`;
          }
        }), o = o === "" ? Kl(i) + "<" + e + `>
` : Kl(i) + "<" + e + `
` + o + Kl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += bf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + bf("" + t, null, i + 1) : o + bf("" + t, void 0, i + 1)), o;
    }
    function is(e, t) {
      var a = zh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += is(e, t), e = e.sibling;
        return a;
      }
      return Kl(t) + "<" + a + `>
`;
    }
    function cs(e, t) {
      var a = Li(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Kl(t) + `...
` + cs(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Kl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = bf(o, e.serverProps, t), t++;
      else if (f = zh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (b in o)
            if (o.hasOwnProperty(b) && b !== "children") {
              var v = Xi(o[b], 15);
              if (d -= b.length + v.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + b + "=" + v;
            }
          i = Kl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Fc(
            f,
            o,
            Iu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ya(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var b = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (b += cs(d, t), f++) : b += is(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (b += Kl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], b = typeof f == "string" ? b + (Vi(t) + ql(f, 120 - 2 * t) + `
`) : b + Fc(
          f.type,
          f.props,
          Vi(t)
        );
      return a + i + b;
    }
    function Sf(e) {
      try {
        return `

` + cs(e, 0);
      } catch {
        return "";
      }
    }
    function Qi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Sf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Uh(e, t) {
      var a = Ze({}, e || Mm), i = { tag: t };
      return Qd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Zd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Dm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function _h(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return zm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Ic(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Ep(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function os(e, t) {
      t = t || Mm;
      var a = t.current;
      if (t = (a = _h(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Ic(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, $o[t]) return !1;
      $o[t] = !0;
      var o = (t = Ua) ? Ep(t.return, i) : null, f = t !== null && o !== null ? Qi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Tf(e, t, a) {
      if (a || _h("#text", t, !1))
        return !0;
      if (a = "#text|" + t, $o[a]) return !1;
      $o[a] = !0;
      var i = (a = Ua) ? Ep(a, t) : null;
      return a = a !== null && i !== null ? Qi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Zi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function vg(e) {
      return e.replace(xi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Ap(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        vg(t.replace(_r, "ms-"))
      )) : Ur.test(t) ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Rv.test(a) || Cc.hasOwnProperty(a) && Cc[a] || (Cc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Rv, "")
      )), typeof a == "number" && (isNaN(a) ? Ov || (Ov = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Um || (Um = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Cr.has(t) ? t === "float" ? e.cssFloat = a : (I(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Ef(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = lu[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = lu[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var v in t)
            for (o = lu[v] || [v], f = 0; f < o.length; f++)
              h[o[f]] = v;
          v = {};
          for (var b in i)
            if (o = i[b], (f = h[b]) && o !== f && (d = o + "," + f, !v[d])) {
              v[d] = !0, d = console;
              var Y = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                Y == null || typeof Y == "boolean" || Y === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var L in a)
          !a.hasOwnProperty(L) || t != null && t.hasOwnProperty(L) || (L.indexOf("--") === 0 ? e.setProperty(L, "") : L === "float" ? e.cssFloat = "" : e[L] = "");
        for (var H in t)
          b = t[H], t.hasOwnProperty(H) && a[H] !== b && Ap(e, H, b);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Ap(e, i, t[i]);
    }
    function Ki(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function fs(e) {
      return Kd.get(e) || e;
    }
    function Pc(e, t) {
      if (wu.call(au, t) && au[t])
        return !0;
      if (Jd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = _m.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), au[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), au[t] = !0;
      }
      if (Cm.test(t)) {
        if (e = t.toLowerCase(), e = _m.hasOwnProperty(e) ? e : null, e == null) return au[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), au[t] = !0);
      }
      return !0;
    }
    function eo(e, t) {
      var a = [], i;
      for (i in t)
        Pc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Rp(e, t, a, i) {
      if (wu.call(Fl, t) && Fl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Fl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Fl[t] = !0;
        if (xr.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Fl[t] = !0;
      } else if (xr.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Fl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Fl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Fl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Fl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Fl[t] = !0;
      if (Hc.hasOwnProperty(o)) {
        if (o = Hc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Fl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Fl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Fl[t] = !0);
          }
        case "function":
        case "symbol":
          return Fl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Fl[t] = !0;
          }
      }
      return !0;
    }
    function Ch(e, t, a) {
      var i = [], o;
      for (o in t)
        Rp(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function to(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ji(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function zn(e) {
      var t = Rl(e);
      if (t && (e = t.stateNode)) {
        var a = e[ma] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Fu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Z(t, "name"), a = a.querySelectorAll(
                'input[name="' + Sa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ma] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Fu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && il(i);
            }
            break e;
          case "textarea":
            us(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && vu(e, !!a.multiple, t, !1);
        }
      }
    }
    function rs(e, t, a) {
      if (p) return e(t, a);
      p = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (p = !1, (s !== null || y !== null) && (gc(), s && (t = s, e = y, y = s = null, zn(t), e)))
          for (t = 0; t < e.length; t++) zn(e[t]);
      }
    }
    function gu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ma] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function bu() {
      if (q) return q;
      var e, t = N, a = t.length, i, o = "value" in k ? k.value : k.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return q = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function lo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ki() {
      return !0;
    }
    function Hh() {
      return !1;
    }
    function Dl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ki : Hh, this.isPropagationStopped = Hh, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ki);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ki);
        },
        persist: function() {
        },
        isPersistent: ki
      }), t;
    }
    function ss(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = nS[e]) ? !!t[e] : !1;
    }
    function ds() {
      return ss;
    }
    function Jl(e, t) {
      switch (e) {
        case "keyup":
          return pS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== w0;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ei(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function hs(e, t) {
      switch (e) {
        case "compositionend":
          return ei(t);
        case "keypress":
          return t.which !== G0 ? null : (V0 = !0, L0);
        case "textInput":
          return e = t.data, e === L0 && V0 ? null : e;
        default:
          return null;
      }
    }
    function Af(e, t) {
      if (kd)
        return e === "compositionend" || !Yg && Jl(e, t) ? (e = bu(), q = N = k = null, kd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return j0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Op(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gS[e.type] : t === "textarea";
    }
    function xh(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function ys(e, t, a, i) {
      s ? y ? y.push(i) : y = [i] : s = i, t = rr(t, "onChange"), 0 < t.length && (a = new Te(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Rf(e) {
      kn(e, 0);
    }
    function $i(e) {
      var t = ln(e);
      if (il(t)) return e;
    }
    function Nh(e, t) {
      if (e === "change") return t;
    }
    function Dp() {
      Nm && (Nm.detachEvent("onpropertychange", zp), Bm = Nm = null);
    }
    function zp(e) {
      if (e.propertyName === "value" && $i(Bm)) {
        var t = [];
        ys(
          t,
          Bm,
          e,
          Ji(e)
        ), rs(Rf, t);
      }
    }
    function gg(e, t, a) {
      e === "focusin" ? (Dp(), Nm = t, Bm = a, Nm.attachEvent("onpropertychange", zp)) : e === "focusout" && Dp();
    }
    function Bh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $i(Bm);
    }
    function bg(e, t) {
      if (e === "click") return $i(t);
    }
    function Sg(e, t) {
      if (e === "input" || e === "change")
        return $i(t);
    }
    function Tg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Of(e, t) {
      if (_a(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!wu.call(t, o) || !_a(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Mp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Yh(e, t) {
      var a = Mp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Mp(a);
      }
    }
    function Up(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Up(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function _p(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = vf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = vf(e.document);
      }
      return t;
    }
    function qh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Cp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      wg || $d == null || $d !== vf(i) || (i = $d, "selectionStart" in i && qh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Ym && Of(Ym, i) || (Ym = i, i = rr(qg, "onSelect"), 0 < i.length && (t = new Te(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = $d)));
    }
    function Su(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Wi(e) {
      if (jg[e]) return jg[e];
      if (!Wd[e]) return e;
      var t = Wd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in Q0)
          return jg[e] = t[a];
      return e;
    }
    function nn(e, t) {
      $0.set(e, t), te(t, [e]);
    }
    function Ta(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Lg.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ls(t)
        }, Lg.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ls(t)
      };
    }
    function Df() {
      for (var e = Fd, t = Vg = Fd = 0; t < e; ) {
        var a = nu[t];
        nu[t++] = null;
        var i = nu[t];
        nu[t++] = null;
        var o = nu[t];
        nu[t++] = null;
        var f = nu[t];
        if (nu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Hp(a, o, f);
      }
    }
    function ms(e, t, a, i) {
      nu[Fd++] = e, nu[Fd++] = t, nu[Fd++] = a, nu[Fd++] = i, Vg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function wh(e, t, a, i) {
      return ms(e, t, a, i), ps(e);
    }
    function aa(e, t) {
      return ms(e, null, null, t), ps(e);
    }
    function Hp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Dv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ll(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function ps(e) {
      if (np > LS)
        throw Kr = np = 0, up = g0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Kr > VS && (Kr = 0, up = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && vn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && vn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Fi(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e : t.current;
    }
    function jh(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Fi(e.render), e.render !== t) ? (t = { $$typeof: Yu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function xp(e, t) {
      if (uu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Ma) && (i = !0);
          break;
        case 11:
          (o === Yu || o === Ma) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Tr || o === Ma) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = uu(a), e !== void 0 && e === uu(t)));
    }
    function Np(e) {
      uu !== null && typeof WeakSet == "function" && (Id === null && (Id = /* @__PURE__ */ new WeakSet()), Id.add(e));
    }
    function zf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, v = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          v = h;
          break;
        case 11:
          v = h.render;
      }
      if (uu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var b = !1;
      h = !1, v !== null && (v = uu(v), v !== void 0 && (a.has(v) ? h = !0 : t.has(v) && (d === 1 ? h = !0 : b = !0))), Id !== null && (Id.has(e) || i !== null && Id.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || b) && (i = aa(e, 2), i !== null && Zt(i, e, 2)), o === null || h || zf(
        o,
        t,
        a
      ), f !== null && zf(
        f,
        t,
        a
      );
    }
    function Mf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, F0 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Gh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Mn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = M(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Fi(e.type);
          break;
        case 1:
          a.type = Fi(e.type);
          break;
        case 11:
          a.type = jh(e.type);
      }
      return a;
    }
    function Lh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function vs(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Gh(e) && (d = 1), h = Fi(h);
      else if (typeof e == "string")
        d = O(), d = Yo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case ym:
            return t = M(31, a, t, o), t.elementType = ym, t.lanes = f, t;
          case Ge:
            return ti(
              a.children,
              o,
              f,
              t
            );
          case wo:
            d = 8, o |= va, o |= Xu;
            break;
          case jo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = M(12, e, t, i | Il), t.elementType = jo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Go:
            return t = M(13, a, t, o), t.elementType = Go, t.lanes = f, t;
          case zi:
            return t = M(19, a, t, o), t.elementType = zi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hm:
                case $a:
                  d = 10;
                  break e;
                case Hd:
                  d = 9;
                  break e;
                case Yu:
                  d = 11, h = jh(h);
                  break e;
                case Tr:
                  d = 14;
                  break e;
                case Ma:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ne(e) ? a = "array" : e !== void 0 && e.$$typeof === Di ? (a = "<" + (We(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Dt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = M(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Uf(e, t, a) {
      return t = vs(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function ti(e, t, a, i) {
      return e = M(7, e, i, t), e.lanes = a, e;
    }
    function li(e, t, a) {
      return e = M(6, e, null, t), e.lanes = a, e;
    }
    function Vh(e, t, a) {
      return t = M(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Ii(e, t) {
      un(), Pd[eh++] = Mv, Pd[eh++] = zv, zv = e, Mv = t;
    }
    function Bp(e, t, a) {
      un(), iu[cu++] = Nc, iu[cu++] = Bc, iu[cu++] = Nr, Nr = e;
      var i = Nc;
      e = Bc;
      var o = 32 - Ll(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ll(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Nc = 1 << 32 - Ll(t) + o | a << o | i, Bc = f + e;
      } else
        Nc = 1 << f | a << o | i, Bc = e;
    }
    function gs(e) {
      un(), e.return !== null && (Ii(e, 1), Bp(e, 1, 0));
    }
    function bs(e) {
      for (; e === zv; )
        zv = Pd[--eh], Pd[eh] = null, Mv = Pd[--eh], Pd[eh] = null;
      for (; e === Nr; )
        Nr = iu[--cu], iu[cu] = null, Bc = iu[--cu], iu[cu] = null, Nc = iu[--cu], iu[cu] = null;
    }
    function un() {
      ht || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function cn(e, t) {
      if (e.return === null) {
        if (ou === null)
          ou = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (ou.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          ou.distanceFromLeaf > t && (ou.distanceFromLeaf = t);
        }
        return ou;
      }
      var a = cn(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Xh(e, t) {
      Yc || (e = cn(e, 0), e.serverProps = null, t !== null && (t = Ed(t), e.serverTail.push(t)));
    }
    function Un(e) {
      var t = "", a = ou;
      throw a !== null && (ou = null, t = Sf(a)), ao(
        Ta(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Xg;
    }
    function Qh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Vl] = e, t[ma] = i, $n(a, i), a) {
        case "dialog":
          Fe("cancel", t), Fe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Fe("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ip.length; a++)
            Fe(ip[a], t);
          break;
        case "source":
          Fe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Fe("error", t), Fe("load", t);
          break;
        case "details":
          Fe("toggle", t);
          break;
        case "input":
          ye("input", i), Fe("invalid", t), Wu(t, i), Sp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), pu(t);
          break;
        case "option":
          Oh(t, i);
          break;
        case "select":
          ye("select", i), Fe("invalid", t), gf(t, i);
          break;
        case "textarea":
          ye("textarea", i), Fe("invalid", t), Dn(t, i), Dh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), pu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Ky(t.textContent, a) ? (i.popover != null && (Fe("beforetoggle", t), Fe("toggle", t)), i.onScroll != null && Fe("scroll", t), i.onScrollEnd != null && Fe("scrollend", t), i.onClick != null && (t.onclick = Hu), t = !0) : t = !1, t || Un(e);
    }
    function Zh(e) {
      for (Ca = e.return; Ca; )
        switch (Ca.tag) {
          case 5:
          case 13:
            Bi = !1;
            return;
          case 27:
          case 3:
            Bi = !0;
            return;
          default:
            Ca = Ca.return;
        }
    }
    function Pi(e) {
      if (e !== Ca) return !1;
      if (!ht)
        return Zh(e), ht = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Wn(e.type, e.memoizedProps)), a = !a), a && ll) {
        for (a = ll; a; ) {
          var i = cn(e, 0), o = Ed(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? em(a) : Cl(a.nextSibling);
        }
        Un(e);
      }
      if (Zh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ll = em(e);
      } else
        t === 27 ? (t = ll, Fn(e.type) ? (e = _0, _0 = null, ll = e) : ll = t) : ll = Ca ? Cl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ec() {
      ll = Ca = null, Yc = ht = !1;
    }
    function Kh() {
      var e = Br;
      return e !== null && (Na === null ? Na = e : Na.push.apply(
        Na,
        e
      ), Br = null), e;
    }
    function ao(e) {
      Br === null ? Br = [e] : Br.push(e);
    }
    function Jh() {
      var e = ou;
      if (e !== null) {
        ou = null;
        for (var t = Sf(e); 0 < e.children.length; )
          e = e.children[0];
        se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Ss() {
      th = Uv = null, lh = !1;
    }
    function ai(e, t, a) {
      ze(Qg, t._currentValue, e), t._currentValue = a, ze(Zg, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== tb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = tb;
    }
    function Tu(e, t) {
      e._currentValue = Qg.current;
      var a = Zg.current;
      be(Zg, t), e._currentRenderer = a, be(Qg, t);
    }
    function kh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $h(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var v = 0; v < t.length; v++)
              if (h.context === t[v]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), kh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), kh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function zl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            _a(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Vo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(rp) : e = [rp]);
        }
        o = o.return;
      }
      e !== null && $h(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ni(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!_a(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ui(e) {
      Uv = e, th = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ct(e) {
      return lh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Wh(Uv, e);
    }
    function _f(e, t) {
      return Uv === null && ui(e), Wh(e, t);
    }
    function Wh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, th === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        th = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else th = th.next = t;
      return a;
    }
    function Cf() {
      return {
        controller: new DS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function tc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _n(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && zS(MS, function() {
        e.controller.abort();
      });
    }
    function on() {
      var e = Yr;
      return Yr = 0, e;
    }
    function ii(e) {
      var t = Yr;
      return Yr = e, t;
    }
    function lc(e) {
      var t = Yr;
      return Yr += e, t;
    }
    function Ts(e) {
      Ia = ah(), 0 > e.actualStartTime && (e.actualStartTime = Ia);
    }
    function Eu(e) {
      if (0 <= Ia) {
        var t = ah() - Ia;
        e.actualDuration += t, e.selfBaseDuration = t, Ia = -1;
      }
    }
    function ac(e) {
      if (0 <= Ia) {
        var t = ah() - Ia;
        e.actualDuration += t, Ia = -1;
      }
    }
    function qa() {
      if (0 <= Ia) {
        var e = ah() - Ia;
        Ia = -1, Yr += e;
      }
    }
    function fn() {
      Ia = ah();
    }
    function Cn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Yp(e, t) {
      if (qm === null) {
        var a = qm = [];
        Kg = 0, qr = Ly(), nh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Kg++, t.then(Fh, Fh), t;
    }
    function Fh() {
      if (--Kg === 0 && qm !== null) {
        nh !== null && (nh.status = "fulfilled");
        var e = qm;
        qm = null, qr = 0, nh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function qp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Ih() {
      var e = wr.current;
      return e !== null ? e : Ht.pooledCache;
    }
    function Es(e, t) {
      t === null ? ze(wr, wr.current, e) : ze(wr, t.pool, e);
    }
    function wp() {
      var e = Ih();
      return e === null ? null : { parent: Nl._currentValue, pool: e };
    }
    function Ph() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function ey(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function no() {
    }
    function wa(e, t, a) {
      j.actQueue !== null && (j.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(no, no), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ea(e), e;
        default:
          if (typeof t.status == "string")
            t.then(no, no);
          else {
            if (e = Ht, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ea(e), e;
          }
          throw Zm = t, Bv = !0, Qm;
      }
    }
    function ty() {
      if (Zm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Zm;
      return Zm = null, Bv = !1, e;
    }
    function Ea(e) {
      if (e === Qm || e === Nv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function na(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function ci(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Hn(e) {
      return {
        lane: e,
        tag: ib,
        payload: null,
        callback: null,
        next: null
      };
    }
    function rn(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, $g === i && !fb) {
        var o = re(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), fb = !0;
      }
      return (St & xa) !== Sn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = ps(e), Hp(e, null, a), t) : (ms(e, i, t, a), ps(e));
    }
    function oi(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, $u(e, a);
      }
    }
    function uo(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function xn() {
      if (Wg) {
        var e = nh;
        if (e !== null) throw e;
      }
    }
    function io(e, t, a, i) {
      Wg = !1;
      var o = e.updateQueue;
      Io = !1, $g = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var v = h, b = v.next;
        v.next = null, d === null ? f = b : d.next = b, d = v;
        var Y = e.alternate;
        Y !== null && (Y = Y.updateQueue, h = Y.lastBaseUpdate, h !== d && (h === null ? Y.firstBaseUpdate = b : h.next = b, Y.lastBaseUpdate = v));
      }
      if (f !== null) {
        var L = o.baseState;
        d = 0, Y = b = v = null, h = f;
        do {
          var H = h.lane & -536870913, V = H !== h.lane;
          if (V ? (lt & H) === H : (i & H) === H) {
            H !== 0 && H === qr && (Wg = !0), Y !== null && (Y = Y.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              H = e;
              var de = h, _e = t, xt = a;
              switch (de.tag) {
                case cb:
                  if (de = de.payload, typeof de == "function") {
                    lh = !0;
                    var it = de.call(
                      xt,
                      L,
                      _e
                    );
                    if (H.mode & va) {
                      ie(!0);
                      try {
                        de.call(xt, L, _e);
                      } finally {
                        ie(!1);
                      }
                    }
                    lh = !1, L = it;
                    break e;
                  }
                  L = de;
                  break e;
                case kg:
                  H.flags = H.flags & -65537 | 128;
                case ib:
                  if (it = de.payload, typeof it == "function") {
                    if (lh = !0, de = it.call(
                      xt,
                      L,
                      _e
                    ), H.mode & va) {
                      ie(!0);
                      try {
                        it.call(xt, L, _e);
                      } finally {
                        ie(!1);
                      }
                    }
                    lh = !1;
                  } else de = it;
                  if (de == null) break e;
                  L = Ze({}, L, de);
                  break e;
                case ob:
                  Io = !0;
              }
            }
            H = h.callback, H !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [H] : V.push(H));
          } else
            V = {
              lane: H,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, Y === null ? (b = Y = V, v = L) : Y = Y.next = V, d |= H;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
          }
        } while (!0);
        Y === null && (v = L), o.baseState = v, o.firstBaseUpdate = b, o.lastBaseUpdate = Y, f === null && (o.shared.lanes = 0), lf |= d, e.lanes = d, e.memoizedState = L;
      }
      $g = null;
    }
    function Hf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function co(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Hf(a[e], t);
    }
    function jp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Hf(a[e], t);
    }
    function ua(e, t) {
      var a = wi;
      ze(Yv, a, e), ze(uh, t, e), wi = a | t.baseLanes;
    }
    function xf(e) {
      ze(Yv, wi, e), ze(
        uh,
        uh.current,
        e
      );
    }
    function sn(e) {
      wi = Yv.current, be(uh, e), be(Yv, e);
    }
    function Ke() {
      var e = G;
      su === null ? su = [e] : su.push(e);
    }
    function ee() {
      var e = G;
      if (su !== null && (wc++, su[wc] !== e)) {
        var t = re(Be);
        if (!rb.has(t) && (rb.add(t), su !== null)) {
          for (var a = "", i = 0; i <= wc; i++) {
            var o = su[i], f = i === wc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ja(e) {
      e == null || Ne(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        G,
        typeof e
      );
    }
    function oo() {
      var e = re(Be);
      db.has(e) || (db.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Gt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function fi(e, t) {
      if (Jm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          G
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        G,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!_a(e[a], t[a])) return !1;
      return !0;
    }
    function ri(e, t, a, i, o, f) {
      Po = f, Be = t, su = e !== null ? e._debugHookTypes : null, wc = -1, Jm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = re(Be), Fg.has(f) || (Fg.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e !== null && e.memoizedState !== null ? Pg : su !== null ? hb : Ig, Gr = f = (t.mode & va) !== qt;
      var d = e0(a, i, o);
      if (Gr = !1, ch && (d = fo(
        t,
        a,
        i,
        o
      )), f) {
        ie(!0);
        try {
          d = fo(
            t,
            a,
            i,
            o
          );
        } finally {
          ie(!1);
        }
      }
      return Nf(e, t), d;
    }
    function Nf(e, t) {
      t._debugHookTypes = su, t.dependencies === null ? qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: qc
      }) : t.dependencies._debugThenableState = qc, j.H = jv;
      var a = _t !== null && _t.next !== null;
      if (Po = 0, su = G = Sl = _t = Be = null, wc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), qv = !1, Km = 0, qc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xl || (e = e.dependencies, e !== null && ni(e) && (Xl = !0)), Bv ? (Bv = !1, e = !0) : e = !1, e && (t = re(t) || "Unknown", sb.has(t) || Fg.has(t) || (sb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function fo(e, t, a, i) {
      Be = e;
      var o = 0;
      do {
        if (ch && (qc = null), Km = 0, ch = !1, o >= _S)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Jm = !1, Sl = _t = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        wc = -1, j.H = yb, f = e0(t, a, i);
      } while (ch);
      return f;
    }
    function Ga() {
      var e = j.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? nc(t) : t, e = e.useState()[0], (_t !== null ? _t.memoizedState : null) !== e && (Be.flags |= 1024), t;
    }
    function ia() {
      var e = wv !== 0;
      return wv = 0, e;
    }
    function Au(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Xu) !== qt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function dn(e) {
      if (qv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qv = !1;
      }
      Po = 0, su = Sl = _t = Be = null, wc = -1, G = null, ch = !1, Km = wv = 0, qc = null;
    }
    function Xt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sl === null ? Be.memoizedState = Sl = e : Sl = Sl.next = e, Sl;
    }
    function ut() {
      if (_t === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = _t.next;
      var t = Sl === null ? Be.memoizedState : Sl.next;
      if (t !== null)
        Sl = t, _t = e;
      else {
        if (e === null)
          throw Be.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        _t = e, e = {
          memoizedState: _t.memoizedState,
          baseState: _t.baseState,
          baseQueue: _t.baseQueue,
          queue: _t.queue,
          next: null
        }, Sl === null ? Be.memoizedState = Sl = e : Sl = Sl.next = e;
      }
      return Sl;
    }
    function As() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function nc(e) {
      var t = Km;
      return Km += 1, qc === null && (qc = Ph()), e = wa(qc, e, t), t = Be, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, j.H = t !== null && t.memoizedState !== null ? Pg : Ig), e;
    }
    function Nn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return nc(e);
        if (e.$$typeof === $a) return Ct(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function It(e) {
      var t = null, a = Be.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Be.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = As(), Be.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Jm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = yv;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function rt(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ft(e, t, a) {
      var i = Xt();
      if (a !== void 0) {
        var o = a(t);
        if (Gr) {
          ie(!0);
          try {
            a(t);
          } finally {
            ie(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = ry.bind(
        null,
        Be,
        e
      ), [i.memoizedState, e];
    }
    function La(e) {
      var t = ut();
      return Va(t, _t, e);
    }
    function Va(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, v = null, b = t, Y = !1;
        do {
          var L = b.lane & -536870913;
          if (L !== b.lane ? (lt & L) === L : (Po & L) === L) {
            var H = b.revertLane;
            if (H === 0)
              v !== null && (v = v.next = {
                lane: 0,
                revertLane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }), L === qr && (Y = !0);
            else if ((Po & H) === H) {
              b = b.next, H === qr && (Y = !0);
              continue;
            } else
              L = {
                lane: 0,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, v === null ? (h = v = L, d = f) : v = v.next = L, Be.lanes |= H, lf |= H;
            L = b.action, Gr && a(f, L), f = b.hasEagerState ? b.eagerState : a(f, L);
          } else
            H = {
              lane: L,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, v === null ? (h = v = H, d = f) : v = v.next = H, Be.lanes |= L, lf |= L;
          b = b.next;
        } while (b !== null && b !== t);
        if (v === null ? d = f : v.next = h, !_a(f, e.memoizedState) && (Xl = !0, Y && (a = nh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = v, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function uc(e) {
      var t = ut(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        _a(f, t.memoizedState) || (Xl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Ru(e, t, a) {
      var i = Be, o = Xt();
      if (ht) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        ih || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), ih = !0);
      } else {
        if (f = t(), ih || (a = t(), _a(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), ih = !0)), Ht === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (lt & 124) !== 0 || ly(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Ds(
        so.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Yn(
        ru | Bl,
        di(),
        ro.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Bf(e, t, a) {
      var i = Be, o = ut(), f = ht;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !ih) {
        var d = t();
        _a(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), ih = !0);
      }
      (d = !_a(
        (_t || o).memoizedState,
        a
      )) && (o.memoizedState = a, Xl = !0), o = o.queue;
      var h = so.bind(null, i, o, e);
      if (ol(2048, Bl, h, [e]), o.getSnapshot !== t || d || Sl !== null && Sl.memoizedState.tag & ru) {
        if (i.flags |= 2048, Yn(
          ru | Bl,
          di(),
          ro.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Ht === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Po & 124) !== 0 || ly(i, t, a);
      }
      return a;
    }
    function ly(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Be.updateQueue, t === null ? (t = As(), Be.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ro(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ay(t) && ho(e);
    }
    function so(e, t, a) {
      return a(function() {
        ay(t) && ho(e);
      });
    }
    function ay(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !_a(e, a);
      } catch {
        return !0;
      }
    }
    function ho(e) {
      var t = aa(e, 2);
      t !== null && Zt(t, e, 2);
    }
    function Yf(e) {
      var t = Xt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Gr) {
          ie(!0);
          try {
            a();
          } finally {
            ie(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rt,
        lastRenderedState: e
      }, t;
    }
    function Ou(e) {
      e = Yf(e);
      var t = e.queue, a = vo.bind(null, Be, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function hn(e) {
      var t = Xt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Bs.bind(
        null,
        Be,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Du(e, t) {
      var a = ut();
      return Bn(a, _t, e, t);
    }
    function Bn(e, t, a, i) {
      return e.baseState = a, Va(
        e,
        _t,
        typeof i == "function" ? i : rt
      );
    }
    function Rs(e, t) {
      var a = ut();
      return _t !== null ? Bn(a, _t, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function ny(e, t, a, i, o) {
      if (Xf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        j.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, yo(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function yo(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = j.T, d = {};
        j.T = d, j.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), v = j.S;
          v !== null && v(d, h), qf(e, t, h);
        } catch (b) {
          ml(e, t, b);
        } finally {
          j.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), qf(e, t, d);
        } catch (b) {
          ml(e, t, b);
        }
    }
    function qf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          si(e, t, i);
        },
        function(i) {
          return ml(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : si(e, t, a);
    }
    function si(e, t, a) {
      t.status = "fulfilled", t.value = a, wf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, yo(e, a)));
    }
    function ml(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, wf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function wf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function uy(e, t) {
      return t;
    }
    function mo(e, t) {
      if (ht) {
        var a = Ht.formState;
        if (a !== null) {
          e: {
            var i = Be;
            if (ht) {
              if (ll) {
                t: {
                  for (var o = ll, f = Bi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Cl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === D0 || f === d1 ? o : null;
                }
                if (o) {
                  ll = Cl(
                    o.nextSibling
                  ), i = o.data === D0;
                  break e;
                }
              }
              Un(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Xt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uy,
        lastRenderedState: t
      }, a.queue = i, a = vo.bind(
        null,
        Be,
        i
      ), i.dispatch = a, i = Yf(!1), f = Bs.bind(
        null,
        Be,
        !1,
        i.queue
      ), i = Xt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = ny.bind(
        null,
        Be,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Os(e) {
      var t = ut();
      return Gp(t, _t, e);
    }
    function Gp(e, t, a) {
      if (t = Va(
        e,
        t,
        uy
      )[0], e = La(rt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = nc(t);
        } catch (d) {
          throw d === Qm ? Nv : d;
        }
      else i = t;
      t = ut();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Be.flags |= 2048, Yn(
        ru | Bl,
        di(),
        cl.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function cl(e, t) {
      e.action = t;
    }
    function po(e) {
      var t = ut(), a = _t;
      if (a !== null)
        return Gp(t, a, e);
      ut(), t = t.memoizedState, a = ut();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Yn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = Be.updateQueue, t === null && (t = As(), Be.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function di() {
      return { destroy: void 0, resource: void 0 };
    }
    function jf(e) {
      var t = Xt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Xa(e, t, a, i) {
      var o = Xt();
      i = i === void 0 ? null : i, Be.flags |= e, o.memoizedState = Yn(
        ru | t,
        di(),
        a,
        i
      );
    }
    function ol(e, t, a, i) {
      var o = ut();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      _t !== null && i !== null && fi(i, _t.memoizedState.deps) ? o.memoizedState = Yn(t, f, a, i) : (Be.flags |= e, o.memoizedState = Yn(
        ru | t,
        f,
        a,
        i
      ));
    }
    function Ds(e, t) {
      (Be.mode & Xu) !== qt && (Be.mode & W0) === qt ? Xa(276826112, Bl, e, t) : Xa(8390656, Bl, e, t);
    }
    function zs(e, t) {
      var a = 4194308;
      return (Be.mode & Xu) !== qt && (a |= 134217728), Xa(a, Pl, e, t);
    }
    function Lp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ms(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Be.mode & Xu) !== qt && (i |= 134217728), Xa(
        i,
        Pl,
        Lp.bind(null, t, e),
        a
      );
    }
    function qn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, ol(
        4,
        Pl,
        Lp.bind(null, t, e),
        a
      );
    }
    function Gf(e, t) {
      return Xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ic(e, t) {
      var a = ut();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && fi(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Us(e, t) {
      var a = Xt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Gr) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function hi(e, t) {
      var a = ut();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && fi(t, i[1]))
        return i[0];
      if (i = e(), Gr) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function _s(e, t) {
      var a = Xt();
      return Hs(a, e, t);
    }
    function Lf(e, t) {
      var a = ut();
      return Vf(
        a,
        _t.memoizedState,
        e,
        t
      );
    }
    function Cs(e, t) {
      var a = ut();
      return _t === null ? Hs(a, e, t) : Vf(
        a,
        _t.memoizedState,
        e,
        t
      );
    }
    function Hs(e, t, a) {
      return a === void 0 || (Po & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Fp(), Be.lanes |= e, lf |= e, a);
    }
    function Vf(e, t, a, i) {
      return _a(a, t) ? a : uh.current !== null ? (e = Hs(e, a, i), _a(e, t) || (Xl = !0), e) : (Po & 42) === 0 ? (Xl = !0, e.memoizedState = a) : (e = Fp(), Be.lanes |= e, lf |= e, t);
    }
    function iy(e, t, a, i, o) {
      var f = Ue.p;
      Ue.p = f !== 0 && f < bn ? f : bn;
      var d = j.T, h = {};
      j.T = h, Bs(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var v = o(), b = j.S;
        if (b !== null && b(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
          var Y = qp(
            v,
            i
          );
          zu(
            e,
            t,
            Y,
            ra(e)
          );
        } else
          zu(
            e,
            t,
            i,
            ra(e)
          );
      } catch (L) {
        zu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: L },
          ra(e)
        );
      } finally {
        Ue.p = f, j.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function cc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = cy(e).queue;
      iy(
        e,
        o,
        t,
        Fr,
        a === null ? oe : function() {
          return oy(e), a(i);
        }
      );
    }
    function cy(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Fr,
        baseState: Fr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rt,
          lastRenderedState: Fr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rt,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function oy(e) {
      j.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = cy(e).next.queue;
      zu(
        e,
        t,
        {},
        ra(e)
      );
    }
    function wn() {
      var e = Yf(!1);
      return e = iy.bind(
        null,
        Be,
        e.queue,
        !0,
        !1
      ), Xt().memoizedState = e, [!1, e];
    }
    function xs() {
      var e = La(rt)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : nc(e),
        t
      ];
    }
    function Ns() {
      var e = uc(rt)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : nc(e),
        t
      ];
    }
    function ca() {
      return Ct(rp);
    }
    function jn() {
      var e = Xt(), t = Ht.identifierPrefix;
      if (ht) {
        var a = Bc, i = Nc;
        a = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = wv++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = US++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function oc() {
      return Xt().memoizedState = fy.bind(
        null,
        Be
      );
    }
    function fy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ra(a);
            e = Hn(i);
            var o = rn(a, e, i);
            o !== null && (Zt(o, a, i), oi(o, a, i)), a = Cf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function ry(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Xf(e) ? fc(t, o) : (o = wh(e, t, o, i), o !== null && (Zt(o, e, i), Qf(o, t, i))), Rn(e, i);
    }
    function vo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e), zu(e, t, a, i), Rn(e, i);
    }
    function zu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Xf(e)) fc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = j.H;
          j.H = Zu;
          try {
            var h = t.lastRenderedState, v = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = v, _a(v, h))
              return ms(e, t, o, 0), Ht === null && Df(), !1;
          } catch {
          } finally {
            j.H = d;
          }
        }
        if (a = wh(e, t, o, i), a !== null)
          return Zt(a, e, i), Qf(a, t, i), !0;
      }
      return !1;
    }
    function Bs(e, t, a, i) {
      if (j.T === null && qr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ly(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Xf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = wh(
          e,
          a,
          i,
          2
        ), t !== null && Zt(t, e, 2);
      Rn(e, 2);
    }
    function Xf(e) {
      var t = e.alternate;
      return e === Be || t !== null && t === Be;
    }
    function fc(e, t) {
      ch = qv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Qf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, $u(e, a);
      }
    }
    function pl(e) {
      var t = ke;
      return e != null && (ke = t === null ? e : t.concat(e)), t;
    }
    function go(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Uf(e, a.mode, 0), t._debugInfo = ke, t.return = a), se(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function bo(e) {
      var t = km;
      return km += 1, oh === null && (oh = Ph()), wa(oh, e, t);
    }
    function Qa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function je(e, t) {
      throw t.$$typeof === Sr ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function pt(e, t) {
      var a = re(e) || "Component";
      Ub[a] || (Ub[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Lt(e, t) {
      var a = re(e) || "Component";
      _b[a] || (_b[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Zf(e) {
      function t(T, E) {
        if (e) {
          var A = T.deletions;
          A === null ? (T.deletions = [E], T.flags |= 16) : A.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = Mn(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, A) {
        return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, A, X) {
        return E === null || E.tag !== 6 ? (E = li(
          A,
          T.mode,
          X
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E) : (E = o(E, A), E.return = T, E._debugInfo = ke, E);
      }
      function v(T, E, A, X) {
        var ae = A.type;
        return ae === Ge ? (E = Y(
          T,
          E,
          A.props.children,
          X,
          A.key
        ), go(A, E, T), E) : E !== null && (E.elementType === ae || xp(E, A) || typeof ae == "object" && ae !== null && ae.$$typeof === Ma && ef(ae) === E.type) ? (E = o(E, A.props), Qa(E, A), E.return = T, E._debugOwner = A._owner, E._debugInfo = ke, E) : (E = Uf(A, T.mode, X), Qa(E, A), E.return = T, E._debugInfo = ke, E);
      }
      function b(T, E, A, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = Vh(A, T.mode, X), E.return = T, E._debugInfo = ke, E) : (E = o(E, A.children || []), E.return = T, E._debugInfo = ke, E);
      }
      function Y(T, E, A, X, ae) {
        return E === null || E.tag !== 7 ? (E = ti(
          A,
          T.mode,
          X,
          ae
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E) : (E = o(E, A), E.return = T, E._debugInfo = ke, E);
      }
      function L(T, E, A) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = li(
            "" + E,
            T.mode,
            A
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Di:
              return A = Uf(
                E,
                T.mode,
                A
              ), Qa(A, E), A.return = T, T = pl(E._debugInfo), A._debugInfo = ke, ke = T, A;
            case Mc:
              return E = Vh(
                E,
                T.mode,
                A
              ), E.return = T, E._debugInfo = ke, E;
            case Ma:
              var X = pl(E._debugInfo);
              return E = ef(E), T = L(T, E, A), ke = X, T;
          }
          if (Ne(E) || Ot(E))
            return A = ti(
              E,
              T.mode,
              A,
              null
            ), A.return = T, A._debugOwner = T, A._debugTask = T._debugTask, T = pl(E._debugInfo), A._debugInfo = ke, ke = T, A;
          if (typeof E.then == "function")
            return X = pl(E._debugInfo), T = L(
              T,
              bo(E),
              A
            ), ke = X, T;
          if (E.$$typeof === $a)
            return L(
              T,
              _f(T, E),
              A
            );
          je(T, E);
        }
        return typeof E == "function" && pt(T, E), typeof E == "symbol" && Lt(T, E), null;
      }
      function H(T, E, A, X) {
        var ae = E !== null ? E.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return ae !== null ? null : h(T, E, "" + A, X);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Di:
              return A.key === ae ? (ae = pl(A._debugInfo), T = v(
                T,
                E,
                A,
                X
              ), ke = ae, T) : null;
            case Mc:
              return A.key === ae ? b(T, E, A, X) : null;
            case Ma:
              return ae = pl(A._debugInfo), A = ef(A), T = H(
                T,
                E,
                A,
                X
              ), ke = ae, T;
          }
          if (Ne(A) || Ot(A))
            return ae !== null ? null : (ae = pl(A._debugInfo), T = Y(
              T,
              E,
              A,
              X,
              null
            ), ke = ae, T);
          if (typeof A.then == "function")
            return ae = pl(A._debugInfo), T = H(
              T,
              E,
              bo(A),
              X
            ), ke = ae, T;
          if (A.$$typeof === $a)
            return H(
              T,
              E,
              _f(T, A),
              X
            );
          je(T, A);
        }
        return typeof A == "function" && pt(T, A), typeof A == "symbol" && Lt(T, A), null;
      }
      function V(T, E, A, X, ae) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return T = T.get(A) || null, h(E, T, "" + X, ae);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Di:
              return A = T.get(
                X.key === null ? A : X.key
              ) || null, T = pl(X._debugInfo), E = v(
                E,
                A,
                X,
                ae
              ), ke = T, E;
            case Mc:
              return T = T.get(
                X.key === null ? A : X.key
              ) || null, b(E, T, X, ae);
            case Ma:
              var Le = pl(X._debugInfo);
              return X = ef(X), E = V(
                T,
                E,
                A,
                X,
                ae
              ), ke = Le, E;
          }
          if (Ne(X) || Ot(X))
            return A = T.get(A) || null, T = pl(X._debugInfo), E = Y(
              E,
              A,
              X,
              ae,
              null
            ), ke = T, E;
          if (typeof X.then == "function")
            return Le = pl(X._debugInfo), E = V(
              T,
              E,
              A,
              bo(X),
              ae
            ), ke = Le, E;
          if (X.$$typeof === $a)
            return V(
              T,
              E,
              A,
              _f(E, X),
              ae
            );
          je(E, X);
        }
        return typeof X == "function" && pt(E, X), typeof X == "symbol" && Lt(E, X), null;
      }
      function de(T, E, A, X) {
        if (typeof A != "object" || A === null) return X;
        switch (A.$$typeof) {
          case Di:
          case Mc:
            yt(T, E, A);
            var ae = A.key;
            if (typeof ae != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(ae);
              break;
            }
            if (!X.has(ae)) {
              X.add(ae);
              break;
            }
            se(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ae
              );
            });
            break;
          case Ma:
            A = ef(A), de(T, E, A, X);
        }
        return X;
      }
      function _e(T, E, A, X) {
        for (var ae = null, Le = null, he = null, Ve = E, Xe = E = 0, wt = null; Ve !== null && Xe < A.length; Xe++) {
          Ve.index > Xe ? (wt = Ve, Ve = null) : wt = Ve.sibling;
          var dl = H(
            T,
            Ve,
            A[Xe],
            X
          );
          if (dl === null) {
            Ve === null && (Ve = wt);
            break;
          }
          ae = de(
            T,
            dl,
            A[Xe],
            ae
          ), e && Ve && dl.alternate === null && t(T, Ve), E = f(dl, E, Xe), he === null ? Le = dl : he.sibling = dl, he = dl, Ve = wt;
        }
        if (Xe === A.length)
          return a(T, Ve), ht && Ii(T, Xe), Le;
        if (Ve === null) {
          for (; Xe < A.length; Xe++)
            Ve = L(T, A[Xe], X), Ve !== null && (ae = de(
              T,
              Ve,
              A[Xe],
              ae
            ), E = f(
              Ve,
              E,
              Xe
            ), he === null ? Le = Ve : he.sibling = Ve, he = Ve);
          return ht && Ii(T, Xe), Le;
        }
        for (Ve = i(Ve); Xe < A.length; Xe++)
          wt = V(
            Ve,
            T,
            Xe,
            A[Xe],
            X
          ), wt !== null && (ae = de(
            T,
            wt,
            A[Xe],
            ae
          ), e && wt.alternate !== null && Ve.delete(
            wt.key === null ? Xe : wt.key
          ), E = f(
            wt,
            E,
            Xe
          ), he === null ? Le = wt : he.sibling = wt, he = wt);
        return e && Ve.forEach(function(Qc) {
          return t(T, Qc);
        }), ht && Ii(T, Xe), Le;
      }
      function xt(T, E, A, X) {
        if (A == null)
          throw Error("An iterable object provided no iterator.");
        for (var ae = null, Le = null, he = E, Ve = E = 0, Xe = null, wt = null, dl = A.next(); he !== null && !dl.done; Ve++, dl = A.next()) {
          he.index > Ve ? (Xe = he, he = null) : Xe = he.sibling;
          var Qc = H(T, he, dl.value, X);
          if (Qc === null) {
            he === null && (he = Xe);
            break;
          }
          wt = de(
            T,
            Qc,
            dl.value,
            wt
          ), e && he && Qc.alternate === null && t(T, he), E = f(Qc, E, Ve), Le === null ? ae = Qc : Le.sibling = Qc, Le = Qc, he = Xe;
        }
        if (dl.done)
          return a(T, he), ht && Ii(T, Ve), ae;
        if (he === null) {
          for (; !dl.done; Ve++, dl = A.next())
            he = L(T, dl.value, X), he !== null && (wt = de(
              T,
              he,
              dl.value,
              wt
            ), E = f(
              he,
              E,
              Ve
            ), Le === null ? ae = he : Le.sibling = he, Le = he);
          return ht && Ii(T, Ve), ae;
        }
        for (he = i(he); !dl.done; Ve++, dl = A.next())
          Xe = V(
            he,
            T,
            Ve,
            dl.value,
            X
          ), Xe !== null && (wt = de(
            T,
            Xe,
            dl.value,
            wt
          ), e && Xe.alternate !== null && he.delete(
            Xe.key === null ? Ve : Xe.key
          ), E = f(
            Xe,
            E,
            Ve
          ), Le === null ? ae = Xe : Le.sibling = Xe, Le = Xe);
        return e && he.forEach(function(lT) {
          return t(T, lT);
        }), ht && Ii(T, Ve), ae;
      }
      function it(T, E, A, X) {
        if (typeof A == "object" && A !== null && A.type === Ge && A.key === null && (go(A, null, T), A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Di:
              var ae = pl(A._debugInfo);
              e: {
                for (var Le = A.key; E !== null; ) {
                  if (E.key === Le) {
                    if (Le = A.type, Le === Ge) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), X = o(
                          E,
                          A.props.children
                        ), X.return = T, X._debugOwner = A._owner, X._debugInfo = ke, go(A, X, T), T = X;
                        break e;
                      }
                    } else if (E.elementType === Le || xp(
                      E,
                      A
                    ) || typeof Le == "object" && Le !== null && Le.$$typeof === Ma && ef(Le) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), X = o(E, A.props), Qa(X, A), X.return = T, X._debugOwner = A._owner, X._debugInfo = ke, T = X;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                A.type === Ge ? (X = ti(
                  A.props.children,
                  T.mode,
                  X,
                  A.key
                ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = ke, go(A, X, T), T = X) : (X = Uf(
                  A,
                  T.mode,
                  X
                ), Qa(X, A), X.return = T, X._debugInfo = ke, T = X);
              }
              return T = d(T), ke = ae, T;
            case Mc:
              e: {
                for (ae = A, A = ae.key; E !== null; ) {
                  if (E.key === A)
                    if (E.tag === 4 && E.stateNode.containerInfo === ae.containerInfo && E.stateNode.implementation === ae.implementation) {
                      a(
                        T,
                        E.sibling
                      ), X = o(
                        E,
                        ae.children || []
                      ), X.return = T, T = X;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                X = Vh(
                  ae,
                  T.mode,
                  X
                ), X.return = T, T = X;
              }
              return d(T);
            case Ma:
              return ae = pl(A._debugInfo), A = ef(A), T = it(
                T,
                E,
                A,
                X
              ), ke = ae, T;
          }
          if (Ne(A))
            return ae = pl(A._debugInfo), T = _e(
              T,
              E,
              A,
              X
            ), ke = ae, T;
          if (Ot(A)) {
            if (ae = pl(A._debugInfo), Le = Ot(A), typeof Le != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var he = Le.call(A);
            return he === A ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(he) !== "[object Generator]") && (zb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), zb = !0) : A.entries !== Le || l0 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), l0 = !0), T = xt(
              T,
              E,
              he,
              X
            ), ke = ae, T;
          }
          if (typeof A.then == "function")
            return ae = pl(A._debugInfo), T = it(
              T,
              E,
              bo(A),
              X
            ), ke = ae, T;
          if (A.$$typeof === $a)
            return it(
              T,
              E,
              _f(T, A),
              X
            );
          je(T, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (ae = "" + A, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), X = o(E, ae), X.return = T, T = X) : (a(T, E), X = li(
          ae,
          T.mode,
          X
        ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = ke, T = X), d(T)) : (typeof A == "function" && pt(T, A), typeof A == "symbol" && Lt(T, A), a(T, E));
      }
      return function(T, E, A, X) {
        var ae = ke;
        ke = null;
        try {
          km = 0;
          var Le = it(
            T,
            E,
            A,
            X
          );
          return oh = null, Le;
        } catch (wt) {
          if (wt === Qm || wt === Nv) throw wt;
          var he = M(29, wt, null, T.mode);
          he.lanes = X, he.return = T;
          var Ve = he._debugInfo = ke;
          if (he._debugOwner = T._debugOwner, he._debugTask = T._debugTask, Ve != null) {
            for (var Xe = Ve.length - 1; 0 <= Xe; Xe--)
              if (typeof Ve[Xe].stack == "string") {
                he._debugOwner = Ve[Xe], he._debugTask = Ve[Xe].debugTask;
                break;
              }
          }
          return he;
        } finally {
          ke = ae;
        }
      };
    }
    function Aa(e) {
      var t = e.alternate;
      ze(
        Yl,
        Yl.current & rh,
        e
      ), ze(du, e, e), qi === null && (t === null || uh.current !== null || t.memoizedState !== null) && (qi = e);
    }
    function yi(e) {
      if (e.tag === 22) {
        if (ze(Yl, Yl.current, e), ze(du, e, e), qi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (qi = e);
        }
      } else yn(e);
    }
    function yn(e) {
      ze(Yl, Yl.current, e), ze(
        du,
        du.current,
        e
      );
    }
    function Ra(e) {
      be(du, e), qi === e && (qi = null), be(Yl, e);
    }
    function Mu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Lc || In(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function sy(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Vb.has(t) || (Vb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Vt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & va) {
        ie(!0);
        try {
          f = a(i, o);
        } finally {
          ie(!1);
        }
      }
      f === void 0 && (t = We(t) || "Component", wb.has(t) || (wb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ze({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ys(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & va) {
          ie(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ie(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          We(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Of(a, i) || !Of(o, f) : !0;
    }
    function qs(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = re(e) || "Component", xb.has(e) || (xb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), a0.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function mi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ze({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function dy(e) {
      n0(e), console.warn(
        `%s

%s
`,
        sh ? "An error occurred in the <" + sh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Vp(e) {
      var t = sh ? "The above error occurred in the <" + sh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((u0 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          S1 + e[0],
          T1,
          ng + i + ng,
          E1
        ) : e.splice(
          0,
          0,
          S1,
          T1,
          ng + i + ng,
          E1
        ), e.unshift(console), i = eT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function ws(e) {
      n0(e);
    }
    function So(e, t) {
      try {
        sh = t.source ? re(t.source) : null, u0 = null;
        var a = t.value;
        if (j.actQueue !== null)
          j.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function js(e, t, a) {
      try {
        sh = a.source ? re(a.source) : null, u0 = re(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wl(e, t, a) {
      return a = Hn(a), a.tag = kg, a.payload = { element: null }, a.callback = function() {
        se(t.source, So, e, t);
      }, a;
    }
    function Qt(e) {
      return e = Hn(e), e.tag = kg, e;
    }
    function Kf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Np(a), se(
            i.source,
            js,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Np(a), se(
          i.source,
          js,
          t,
          a,
          i
        ), typeof o != "function" && (nf === null ? nf = /* @__PURE__ */ new Set([this]) : nf.add(this)), CS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          re(a) || "Unknown"
        );
      });
    }
    function Jf(e, t, a, i, o) {
      if (a.flags |= 32768, Wt && Mo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && zl(
          t,
          a,
          o,
          !0
        ), ht && (Yc = !0), a = du.current, a !== null) {
          switch (a.tag) {
            case 13:
              return qi === null ? ud() : a.alternate === null && al === Gc && (al = f0), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Jg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), qy(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Jg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), qy(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return qy(e, i, o), ud(), !1;
      }
      if (ht)
        return Yc = !0, t = du.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Xg && ao(
          Ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Xg && ao(
          Ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ta(i, a), o = wl(
          e.stateNode,
          i,
          o
        ), uo(e, o), al !== Lr && (al = mh)), !1;
      var f = Ta(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (lp === null ? lp = [f] : lp.push(f), al !== Lr && (al = mh), t === null) return !0;
      i = Ta(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = wl(
              a.stateNode,
              i,
              e
            ), uo(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (nf === null || !nf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Qt(o), Kf(
                o,
                e,
                a,
                i
              ), uo(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function tl(e, t, a, i) {
      t.child = e === null ? Cb(t, null, a, i) : fh(
        t,
        e.child,
        a,
        i
      );
    }
    function Gs(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ui(t), Nt(t), i = ri(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = ia(), ta(), e !== null && !Xl ? (Au(e, t, o), Ln(e, t, o)) : (ht && h && gs(t), t.flags |= 1, tl(e, t, i, o), t.child);
    }
    function Gn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Gh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Fi(f), t.tag = 15, t.type = a, Qs(t, f), kf(
          e,
          t,
          a,
          i,
          o
        )) : (e = vs(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Ws(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Of, a(d, i) && e.ref === t.ref)
          return Ln(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Mn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function kf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Of(f, i) && e.ref === t.ref && t.type === e.type)
          if (Xl = !1, t.pendingProps = i = f, Ws(e, o))
            (e.flags & 131072) !== 0 && (Xl = !0);
          else
            return t.lanes = e.lanes, Ln(e, t, o);
      }
      return Xs(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Ls(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Vs(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Es(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? ua(t, f) : xf(t), yi(t);
        else
          return t.lanes = t.childLanes = 536870912, Vs(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Es(t, f.cachePool), ua(t, f), yn(t), t.memoizedState = null) : (e !== null && Es(t, null), xf(t), yn(t));
      return tl(e, t, o, a), t.child;
    }
    function Vs(e, t, a, i) {
      var o = Ih();
      return o = o === null ? null : {
        parent: Nl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Es(t, null), xf(t), yi(t), e !== null && zl(e, t, i, !0), null;
    }
    function $f(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Xs(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = We(a) || "Unknown";
        Qb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Qb[f] = !0);
      }
      return t.mode & va && Qu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Qs(t, t.type), a.contextTypes && (f = We(a) || "Unknown", Kb[f] || (Kb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ui(t), Nt(t), a = ri(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = ia(), ta(), e !== null && !Xl ? (Au(e, t, o), Ln(e, t, o)) : (ht && i && gs(t), t.flags |= 1, tl(e, t, a, o), t.child);
    }
    function hy(e, t, a, i, o, f) {
      return ui(t), Nt(t), wc = -1, Jm = e !== null && e.type !== t.type, t.updateQueue = null, a = fo(
        t,
        i,
        a,
        o
      ), Nf(e, t), i = ia(), ta(), e !== null && !Xl ? (Au(e, t, f), Ln(e, t, f)) : (ht && i && gs(t), t.flags |= 1, tl(e, t, a, f), t.child);
    }
    function yy(e, t, a, i, o) {
      switch (at(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Ht, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Qt(h), Kf(
            h,
            d,
            t,
            Ta(f, t)
          ), uo(t, h);
      }
      if (ui(t), t.stateNode === null) {
        if (d = Fo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== $a) && !Lb.has(a) && (Lb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Hd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          We(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Ct(f)), f = new a(i, d), t.mode & va) {
          ie(!0);
          try {
            f = new a(i, d);
          } finally {
            ie(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = a0, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Hb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = We(a) || "Component", Nb.has(d) || (Nb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var v = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? v = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (v = "UNSAFE_componentWillUpdate"), d !== null || h !== null || v !== null) {
            f = We(a) || "Component";
            var b = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yb.has(f) || (Yb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              b,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              v !== null ? `
  ` + v : ""
            ));
          }
        }
        f = t.stateNode, d = We(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Gb.has(a) && (Gb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !jb.has(a) && (jb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          We(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Bb.has(a) || (Bb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          We(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Ne(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, na(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Ct(d) : Fo, f.state === i && (d = We(a) || "Component", qb.has(d) || (qb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & va && Qu.recordLegacyContextWarning(
          t,
          f
        ), Qu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Vt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          re(t) || "Component"
        ), a0.enqueueReplaceState(
          f,
          f.state,
          null
        )), io(t, i, f, o), xn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== qt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var Y = t.memoizedProps;
        h = mi(a, Y), f.props = h;
        var L = f.context;
        v = a.contextType, d = Fo, typeof v == "object" && v !== null && (d = Ct(v)), b = a.getDerivedStateFromProps, v = typeof b == "function" || typeof f.getSnapshotBeforeUpdate == "function", Y = t.pendingProps !== Y, v || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (Y || L !== d) && qs(
          t,
          f,
          i,
          d
        ), Io = !1;
        var H = t.memoizedState;
        f.state = H, io(t, i, f, o), xn(), L = t.memoizedState, Y || H !== L || Io ? (typeof b == "function" && (Vt(
          t,
          a,
          b,
          i
        ), L = t.memoizedState), (h = Io || Ys(
          t,
          a,
          h,
          i,
          H,
          L,
          d
        )) ? (v || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== qt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== qt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== qt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, ci(e, t), d = t.memoizedProps, v = mi(a, d), f.props = v, b = t.pendingProps, H = f.context, L = a.contextType, h = Fo, typeof L == "object" && L !== null && (h = Ct(L)), Y = a.getDerivedStateFromProps, (L = typeof Y == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== b || H !== h) && qs(
          t,
          f,
          i,
          h
        ), Io = !1, H = t.memoizedState, f.state = H, io(t, i, f, o), xn();
        var V = t.memoizedState;
        d !== b || H !== V || Io || e !== null && e.dependencies !== null && ni(e.dependencies) ? (typeof Y == "function" && (Vt(
          t,
          a,
          Y,
          i
        ), V = t.memoizedState), (v = Io || Ys(
          t,
          a,
          v,
          i,
          H,
          V,
          h
        ) || e !== null && e.dependencies !== null && ni(e.dependencies)) ? (L || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = h, f = v) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, $f(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, mf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Ia = -1;
        else {
          if (Nt(t), a = vb(h), t.mode & va) {
            ie(!0);
            try {
              vb(h);
            } finally {
              ie(!1);
            }
          }
          ta();
        }
        t.flags |= 1, e !== null && d ? (t.child = fh(
          t,
          e.child,
          null,
          o
        ), t.child = fh(
          t,
          null,
          a,
          o
        )) : tl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Ln(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (dh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        re(t) || "a component"
      ), dh = !0), e;
    }
    function my(e, t, a, i) {
      return ec(), t.flags |= 256, tl(e, t, a, i), t.child;
    }
    function Qs(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = We(t) || "Unknown", Jb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Jb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = We(t) || "Unknown", Zb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Zb[t] = !0));
    }
    function Wf(e) {
      return { baseLanes: e, cachePool: wp() };
    }
    function Zs(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= En), e;
    }
    function Xp(e, t, a) {
      var i, o = t.pendingProps;
      Me(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Yl.current & $m) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ht) {
          if (f ? Aa(t) : yn(t), ht) {
            var h = ll, v;
            if (!(v = !h)) {
              e: {
                var b = h;
                for (v = Bi; b.nodeType !== 8; ) {
                  if (!v) {
                    v = null;
                    break e;
                  }
                  if (b = Cl(b.nextSibling), b === null) {
                    v = null;
                    break e;
                  }
                }
                v = b;
              }
              v !== null ? (un(), t.memoizedState = {
                dehydrated: v,
                treeContext: Nr !== null ? { id: Nc, overflow: Bc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = M(18, null, null, qt), b.stateNode = v, b.return = t, t.child = b, Ca = t, ll = null, v = !0) : v = !1, v = !v;
            }
            v && (Xh(
              t,
              h
            ), Un(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return In(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Ra(t);
        }
        return h = o.children, o = o.fallback, f ? (yn(t), f = t.mode, h = Ff(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = ti(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Wf(a), f.childLanes = Zs(
          e,
          i,
          a
        ), t.memoizedState = c0, o) : (Aa(t), Ks(
          t,
          h
        ));
      }
      var Y = e.memoizedState;
      if (Y !== null && (h = Y.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Aa(t), t.flags &= -257, t = Js(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (yn(t), t.child = e.child, t.flags |= 128, t = null) : (yn(t), f = o.fallback, h = t.mode, o = Ff(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = ti(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, fh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Wf(a), o.childLanes = Zs(
            e,
            i,
            a
          ), t.memoizedState = c0, t = f);
        else if (Aa(t), ht && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), In(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            v = i.dgst;
            var L = i.msg;
            b = i.stck;
            var H = i.cstck;
          }
          h = L, i = v, o = b, v = f = H, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = v === void 0 ? null : v, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Lg.set(
            f,
            o
          ), ao(o), t = Js(
            e,
            t,
            a
          );
        } else if (Xl || zl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Xl || i) {
          if (i = Ht, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : El(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== Y.retryLane))
            throw Y.retryLane = o, aa(
              e,
              o
            ), Zt(
              i,
              e,
              o
            ), Xb;
          h.data === Lc || ud(), t = Js(
            e,
            t,
            a
          );
        } else
          h.data === Lc ? (t.flags |= 192, t.child = e.child, t = null) : (e = Y.treeContext, ll = Cl(
            h.nextSibling
          ), Ca = t, ht = !0, Br = null, Yc = !1, ou = null, Bi = !1, e !== null && (un(), iu[cu++] = Nc, iu[cu++] = Bc, iu[cu++] = Nr, Nc = e.id, Bc = e.overflow, Nr = t), t = Ks(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (yn(t), f = o.fallback, h = t.mode, v = e.child, b = v.sibling, o = Mn(
        v,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = v.subtreeFlags & 65011712, b !== null ? f = Mn(
        b,
        f
      ) : (f = ti(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Wf(a) : (v = h.cachePool, v !== null ? (b = Nl._currentValue, v = v.parent !== b ? { parent: b, pool: b } : v) : v = wp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: v
      }), f.memoizedState = h, f.childLanes = Zs(
        e,
        i,
        a
      ), t.memoizedState = c0, o) : (Aa(t), a = e.child, e = a.sibling, a = Mn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Ks(e, t) {
      return t = Ff(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ff(e, t) {
      return e = M(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Dv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Js(e, t, a) {
      return fh(t, e.child, null, a), e = Ks(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function ks(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), kh(
        e.return,
        t,
        a
      );
    }
    function py(e, t) {
      var a = Ne(e);
      return e = !a && typeof Ot(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function $s(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function vy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !kb[o])
        if (kb[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || i0[f] || (f !== "collapsed" && f !== "hidden" ? (i0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (i0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Ne(i)) {
          for (var d = 0; d < i.length; d++)
            if (!py(i[d], d)) break e;
        } else if (d = Ot(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), v = 0; !h.done; h = d.next()) {
              if (!py(h.value, v)) break e;
              v++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (tl(e, t, i, a), i = Yl.current, (i & $m) !== 0)
        i = i & rh | $m, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && ks(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              ks(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= rh;
      }
      switch (ze(Yl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Mu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), $s(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Mu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          $s(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          $s(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ln(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ia = -1, lf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (zl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Mn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Ws(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ni(e)));
    }
    function Eg(e, t, a) {
      switch (t.tag) {
        case 3:
          jt(
            t,
            t.stateNode.containerInfo
          ), ai(
            t,
            Nl,
            e.memoizedState.cache
          ), ec();
          break;
        case 27:
        case 5:
          W(t);
          break;
        case 4:
          jt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ai(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Aa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Xp(
              e,
              t,
              a
            ) : (Aa(t), e = Ln(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Aa(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (zl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return vy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ze(
            Yl,
            Yl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Ls(e, t, a);
        case 24:
          ai(
            t,
            Nl,
            e.memoizedState.cache
          );
      }
      return Ln(e, t, a);
    }
    function Fs(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = vs(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Xl = !0;
        else {
          if (!Ws(e, a) && (t.flags & 128) === 0)
            return Xl = !1, Eg(
              e,
              t,
              a
            );
          Xl = (e.flags & 131072) !== 0;
        }
      else
        Xl = !1, (i = ht) && (un(), i = (t.flags & 1048576) !== 0), i && (i = t.index, un(), Bp(t, Mv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = ef(t.elementType), t.type = e, typeof e == "function")
            Gh(e) ? (i = mi(
              e,
              i
            ), t.tag = 1, t.type = e = Fi(e), t = yy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Qs(t, e), t.type = e = Fi(e), t = Xs(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Yu) {
                t.tag = 11, t.type = e = jh(e), t = Gs(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Tr) {
                t.tag = 14, t = Gn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ma && (t = " Did you wrap a component in React.lazy() more than once?"), e = We(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Xs(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = mi(
            i,
            t.pendingProps
          ), yy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (jt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, ci(e, t), io(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, ai(t, Nl, i), i !== f.cache && $h(
              t,
              [Nl],
              a,
              !0
            ), xn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = my(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Ta(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ao(o), t = my(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (ll = Cl(e.firstChild), Ca = t, ht = !0, Br = null, Yc = !1, ou = null, Bi = !0, e = Cb(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (ec(), i === o) {
                t = Ln(
                  e,
                  t,
                  a
                );
                break e;
              }
              tl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return $f(e, t), e === null ? (e = Bu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ht || (e = t.type, a = t.pendingProps, i = Ut(
            eu.current
          ), i = Pe(
            i
          ).createElement(e), i[Vl] = t, i[ma] = a, Jt(i, e, a), D(i), t.stateNode = i) : t.memoizedState = Bu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return W(t), e === null && ht && (i = Ut(eu.current), o = O(), i = t.stateNode = lm(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Yc || (o = zt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (cn(t, 0).serverProps = o)), Ca = t, Bi = !0, o = ll, Fn(t.type) ? (_0 = o, ll = Cl(
            i.firstChild
          )) : ll = o), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), $f(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ht && (f = O(), i = os(
            t.type,
            f.ancestorInfo
          ), o = ll, (d = !o) || (d = Ei(
            o,
            t.type,
            t.pendingProps,
            Bi
          ), d !== null ? (t.stateNode = d, Yc || (f = zt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (cn(t, 0).serverProps = f)), Ca = t, ll = Cl(
            d.firstChild
          ), Bi = !1, f = !0) : f = !1, d = !f), d && (i && Xh(t, o), Un(t))), W(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Wn(o, f) ? i = null : d !== null && Wn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ri(
            e,
            t,
            Ga,
            null,
            null,
            a
          ), rp._currentValue = o), $f(e, t), tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ht && (e = t.pendingProps, a = O(), i = a.ancestorInfo.current, e = i != null ? Tf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = ll, (i = !a) || (i = _l(
            a,
            t.pendingProps,
            Bi
          ), i !== null ? (t.stateNode = i, Ca = t, ll = null, i = !0) : i = !1, i = !i), i && (e && Xh(t, a), Un(t))), null;
        case 13:
          return Xp(e, t, a);
        case 4:
          return jt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = fh(
            t,
            null,
            i,
            a
          ) : tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Gs(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return tl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || $b || ($b = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ai(t, i, f), tl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ui(t), o = Ct(o), Nt(t), i = e0(
            i,
            o,
            void 0
          ), ta(), t.flags |= 1, tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Gn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return kf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return vy(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Ff(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Mn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Ls(e, t, a);
        case 24:
          return ui(t), i = Ct(Nl), e === null ? (o = Ih(), o === null && (o = Ht, f = Cf(), o.pooledCache = f, tc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, na(t), ai(t, Nl, o)) : ((e.lanes & a) !== 0 && (ci(e, t), io(t, null, null, a), xn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ai(t, Nl, i)) : (i = f.cache, ai(t, Nl, i), i !== o.cache && $h(
            t,
            [Nl],
            a,
            !0
          ))), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function oa(e) {
      e.flags |= 4;
    }
    function If(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & hu) !== Wr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !dr(t)) {
        if (t = du.current, t !== null && ((lt & 4194048) === lt ? qi !== null : (lt & 62914560) !== lt && (lt & 536870912) === 0 || t !== qi))
          throw Zm = Jg, ub;
        e.flags |= 8192;
      }
    }
    function Pf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? On() : 536870912, e.lanes |= t, Qr |= t);
    }
    function pi(e, t) {
      if (!ht)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Et(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Il) !== qt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Il) !== qt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Qp(e, t, a) {
      var i = t.pendingProps;
      switch (bs(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Et(t), null;
        case 1:
          return Et(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Tu(Nl, t), mt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? (Jh(), oa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Kh())), Et(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (oa(t), a !== null ? (Et(t), If(
            t,
            a
          )) : (Et(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (oa(t), Et(t), If(
            t,
            a
          )) : (Et(t), t.flags &= -16777217) : (e.memoizedProps !== i && oa(t), Et(t), t.flags &= -16777217), null;
        case 27:
          P(t), a = Ut(eu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Et(t), null;
            }
            e = O(), Pi(t) ? Qh(t) : (e = lm(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, oa(t));
          }
          return Et(t), null;
        case 5:
          if (P(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Et(t), null;
            }
            if (o = O(), Pi(t))
              Qh(t);
            else {
              switch (e = Ut(eu.current), os(a, o.ancestorInfo), o = o.context, e = Pe(e), o) {
                case Th:
                  e = e.createElementNS(Wo, a);
                  break;
                case tg:
                  e = e.createElementNS(
                    Hr,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Wo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Hr,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || wu.call(
                        y1,
                        a
                      ) || (y1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Vl] = t, e[ma] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Jt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && oa(t);
            }
          }
          return Et(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Ut(eu.current), a = O(), Pi(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Yc, i = null;
              var f = Ca;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Ad(
                      e,
                      a,
                      i
                    ), o !== null && (cn(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Ad(
                      e,
                      a,
                      i
                    ), o !== null && (cn(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Vl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ky(e.nodeValue, a)), e || Un(t);
            } else
              o = a.ancestorInfo.current, o != null && Tf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Pe(e).createTextNode(
                i
              ), e[Vl] = t, t.stateNode = e;
          }
          return Et(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Pi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Vl] = t, Et(t), (t.mode & Il) !== qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Jh(), ec(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Et(t), (t.mode & Il) !== qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Kh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Ra(t), t) : (Ra(t), null);
          }
          return Ra(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Il) !== qt && Cn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Pf(t, t.updateQueue), Et(t), (t.mode & Il) !== qt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return mt(t), e === null && Qy(
            t.stateNode.containerInfo
          ), Et(t), null;
        case 10:
          return Tu(t.type, t), Et(t), null;
        case 19:
          if (be(Yl, t), o = t.memoizedState, o === null) return Et(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) pi(o, !1);
            else {
              if (al !== Gc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Mu(e), f !== null) {
                    for (t.flags |= 128, pi(o, !1), e = f.updateQueue, t.updateQueue = e, Pf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Lh(a, e), a = a.sibling;
                    return ze(
                      Yl,
                      Yl.current & rh | $m,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && tu() > Xv && (t.flags |= 128, i = !0, pi(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Mu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Pf(t, e), pi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ht)
                  return Et(t), null;
              } else
                2 * tu() - o.renderingStartTime > Xv && a !== 536870912 && (t.flags |= 128, i = !0, pi(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = tu(), e.sibling = null, a = Yl.current, a = i ? a & rh | $m : a & rh, ze(Yl, a, t), e) : (Et(t), null);
        case 22:
        case 23:
          return Ra(t), sn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Et(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Et(t), a = t.updateQueue, a !== null && Pf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && be(wr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Tu(Nl, t), Et(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Zp(e, t) {
      switch (bs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== qt && Cn(t), t) : null;
        case 3:
          return Tu(Nl, t), mt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return P(t), null;
        case 13:
          if (Ra(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ec();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== qt && Cn(t), t) : null;
        case 19:
          return be(Yl, t), null;
        case 4:
          return mt(t), null;
        case 10:
          return Tu(t.type, t), null;
        case 22:
        case 23:
          return Ra(t), sn(t), e !== null && be(wr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== qt && Cn(t), t) : null;
        case 24:
          return Tu(Nl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function gy(e, t) {
      switch (bs(t), t.tag) {
        case 3:
          Tu(Nl, t), mt(t);
          break;
        case 26:
        case 27:
        case 5:
          P(t);
          break;
        case 4:
          mt(t);
          break;
        case 13:
          Ra(t);
          break;
        case 19:
          be(Yl, t);
          break;
        case 10:
          Tu(t.type, t);
          break;
        case 22:
        case 23:
          Ra(t), sn(t), e !== null && be(wr, t);
          break;
        case 24:
          Tu(Nl, t);
      }
    }
    function mn(e) {
      return (e.mode & Il) !== qt;
    }
    function by(e, t) {
      mn(e) ? (fn(), rc(t, e), qa()) : rc(t, e);
    }
    function Is(e, t, a) {
      mn(e) ? (fn(), sc(
        a,
        e,
        t
      ), qa()) : sc(
        a,
        e,
        t
      );
    }
    function rc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & Bl) !== fu ? ce !== null && typeof ce.markComponentPassiveEffectMountStarted == "function" && ce.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Pl) !== fu && ce !== null && typeof ce.markComponentLayoutEffectMountStarted == "function" && ce.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ha) !== fu && (bh = !0), i = se(
              t,
              HS,
              a
            ), (e & Ha) !== fu && (bh = !1), (e & Bl) !== fu ? ce !== null && typeof ce.markComponentPassiveEffectMountStopped == "function" && ce.markComponentPassiveEffectMountStopped() : (e & Pl) !== fu && ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Pl) !== 0 ? "useLayoutEffect" : (a.tag & Ha) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, se(
                t,
                function(h, v) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    v
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Re(t, t.return, h);
      }
    }
    function sc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Bl) !== fu ? ce !== null && typeof ce.markComponentPassiveEffectUnmountStarted == "function" && ce.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Pl) !== fu && ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ha) !== fu && (bh = !0), o = t, se(
                o,
                xS,
                o,
                a,
                h
              ), (e & Ha) !== fu && (bh = !1), (e & Bl) !== fu ? ce !== null && typeof ce.markComponentPassiveEffectUnmountStopped == "function" && ce.markComponentPassiveEffectUnmountStopped() : (e & Pl) !== fu && ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (v) {
        Re(t, t.return, v);
      }
    }
    function Sy(e, t) {
      mn(e) ? (fn(), rc(t, e), qa()) : rc(t, e);
    }
    function er(e, t, a) {
      mn(e) ? (fn(), sc(
        a,
        e,
        t
      ), qa()) : sc(
        a,
        e,
        t
      );
    }
    function Ty(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || dh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          re(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          re(e) || "instance"
        ));
        try {
          se(
            e,
            jp,
            t,
            a
          );
        } catch (i) {
          Re(e, e.return, i);
        }
      }
    }
    function Kp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Ag(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || dh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        re(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        re(e) || "instance"
      ));
      try {
        var o = mi(
          e.type,
          a,
          e.elementType === e.type
        ), f = se(
          e,
          Kp,
          t,
          o,
          i
        );
        a = Wb, f !== void 0 || a.has(e.type) || (a.add(e.type), se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            re(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Re(e, e.return, d);
      }
    }
    function Ps(e, t, a) {
      a.props = mi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, mn(e) ? (fn(), se(
        e,
        Ab,
        e,
        t,
        a
      ), qa()) : se(
        e,
        Ab,
        e,
        t,
        a
      );
    }
    function Jp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (mn(e))
            try {
              fn(), e.refCleanup = t(a);
            } finally {
              qa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            re(e)
          ), t.current = a;
      }
    }
    function To(e, t) {
      try {
        se(e, Jp, e);
      } catch (a) {
        Re(e, t, a);
      }
    }
    function Za(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (mn(e))
              try {
                fn(), se(e, i);
              } finally {
                qa(e);
              }
            else se(e, i);
          } catch (o) {
            Re(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (mn(e))
              try {
                fn(), se(e, a, null);
              } finally {
                qa(e);
              }
            else se(e, a, null);
          } catch (o) {
            Re(e, t, o);
          }
        else a.current = null;
    }
    function Ey(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Cv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function kp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Cv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function $p(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        se(
          e,
          xu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Re(e, e.return, o);
      }
    }
    function Ay(e, t, a) {
      try {
        se(
          e,
          kt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Re(e, e.return, i);
      }
    }
    function Ry(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
    }
    function dc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ry(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function tr(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Hu));
      else if (i !== 4 && (i === 27 && Fn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (tr(e, t, a), e = e.sibling; e !== null; )
          tr(e, t, a), e = e.sibling;
    }
    function hc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Fn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (hc(e, t, a), e = e.sibling; e !== null; )
          hc(e, t, a), e = e.sibling;
    }
    function Wp(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ry(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = dc(e), hc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Nu(a), t.flags &= -33), t = dc(e), hc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = dc(e), tr(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Oy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        se(
          e,
          za,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Re(e, e.return, i);
      }
    }
    function ed(e, t) {
      if (e = e.containerInfo, z0 = ug, e = _p(e), qh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, v = -1, b = 0, Y = 0, L = e, H = null;
              t: for (; ; ) {
                for (var V; L !== a || o !== 0 && L.nodeType !== 3 || (h = d + o), L !== f || i !== 0 && L.nodeType !== 3 || (v = d + i), L.nodeType === 3 && (d += L.nodeValue.length), (V = L.firstChild) !== null; )
                  H = L, L = V;
                for (; ; ) {
                  if (L === e) break t;
                  if (H === a && ++b === o && (h = d), H === f && ++Y === i && (v = d), (V = L.nextSibling) !== null) break;
                  L = H, H = L.parentNode;
                }
                L = V;
              }
              a = h === -1 || v === -1 ? null : { start: h, end: v };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (M0 = {
        focusedElem: e,
        selectionRange: a
      }, ug = !1, Ql = t; Ql !== null; )
        if (t = Ql, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Ql = e;
        else
          for (; Ql !== null; ) {
            switch (e = t = Ql, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Ag(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ho(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ho(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ql = e;
              break;
            }
            Ql = t.return;
          }
    }
    function Dy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(e, a), i & 4 && by(a, Pl | ru);
          break;
        case 1:
          if (Vn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || dh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), mn(a) ? (fn(), se(
                a,
                t0,
                a,
                e
              ), qa()) : se(
                a,
                t0,
                a,
                e
              );
            else {
              var o = mi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || dh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), mn(a) ? (fn(), se(
                a,
                Sb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), qa()) : se(
                a,
                Sb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Ty(a), i & 512 && To(a, a.return);
          break;
        case 3:
          if (t = on(), Vn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              se(
                a,
                jp,
                i,
                o
              );
            } catch (d) {
              Re(a, a.return, d);
            }
          }
          e.effectDuration += ii(t);
          break;
        case 27:
          t === null && i & 4 && Oy(a);
        case 26:
        case 5:
          Vn(e, a), t === null && i & 4 && $p(a), i & 512 && To(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = on(), Vn(e, a), e = a.stateNode, e.effectDuration += lc(i);
            try {
              se(
                a,
                Ey,
                a,
                t,
                _v,
                e.effectDuration
              );
            } catch (d) {
              Re(a, a.return, d);
            }
          } else Vn(e, a);
          break;
        case 13:
          Vn(e, a), i & 4 && Eo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = fr.bind(
            null,
            a
          ), xo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || jc, !i) {
            t = t !== null && t.memoizedState !== null || sl, o = jc;
            var f = sl;
            jc = i, (sl = t) && !f ? Xn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Vn(e, a), jc = o, sl = f;
          }
          break;
        case 30:
          break;
        default:
          Vn(e, a);
      }
    }
    function zy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && tn(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Uu(e, t, a) {
      for (a = a.child; a !== null; )
        yc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function yc(e, t, a) {
      if (Hl && typeof Hl.onCommitFiberUnmount == "function")
        try {
          Hl.onCommitFiberUnmount(Ui, a);
        } catch (f) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          sl || Za(a, t), Uu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          sl || Za(a, t);
          var i = Tl, o = Pa;
          Fn(a.type) && (Tl = a.stateNode, Pa = !1), Uu(
            e,
            t,
            a
          ), se(
            a,
            Bo,
            a.stateNode
          ), Tl = i, Pa = o;
          break;
        case 5:
          sl || Za(a, t);
        case 6:
          if (i = Tl, o = Pa, Tl = null, Uu(
            e,
            t,
            a
          ), Tl = i, Pa = o, Tl !== null)
            if (Pa)
              try {
                se(
                  a,
                  _o,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Re(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                se(
                  a,
                  ka,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Re(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Tl !== null && (Pa ? (e = Tl, Co(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), zc(e)) : Co(Tl, a.stateNode));
          break;
        case 4:
          i = Tl, o = Pa, Tl = a.stateNode.containerInfo, Pa = !0, Uu(
            e,
            t,
            a
          ), Tl = i, Pa = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          sl || sc(
            Ha,
            a,
            t
          ), sl || Is(
            a,
            t,
            Pl
          ), Uu(
            e,
            t,
            a
          );
          break;
        case 1:
          sl || (Za(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Ps(
            a,
            t,
            i
          )), Uu(
            e,
            t,
            a
          );
          break;
        case 21:
          Uu(
            e,
            t,
            a
          );
          break;
        case 22:
          sl = (i = sl) || a.memoizedState !== null, Uu(
            e,
            t,
            a
          ), sl = i;
          break;
        default:
          Uu(
            e,
            t,
            a
          );
      }
    }
    function Eo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          se(
            t,
            Da,
            e
          );
        } catch (a) {
          Re(t, t.return, a);
        }
    }
    function td(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Fb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Fb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function mc(e, t) {
      var a = td(e);
      t.forEach(function(i) {
        var o = Si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Wt)
            if (hh !== null && yh !== null)
              Mo(yh, hh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function jl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Fn(h.type)) {
                  Tl = h.stateNode, Pa = !1;
                  break e;
                }
                break;
              case 5:
                Tl = h.stateNode, Pa = !1;
                break e;
              case 3:
              case 4:
                Tl = h.stateNode.containerInfo, Pa = !0;
                break e;
            }
            h = h.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          yc(o, f, d), Tl = null, Pa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          My(t, e), t = t.sibling;
    }
    function My(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jl(t, e), fa(e), i & 4 && (sc(
            Ha | ru,
            e,
            e.return
          ), rc(Ha | ru, e), Is(
            e,
            e.return,
            Pl | ru
          ));
          break;
        case 1:
          jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), i & 64 && jc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ku;
          if (jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Ko] || o[Vl] || o.namespaceURI === Wo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Jt(o, i, a), o[Vl] = e, D(o), i = o;
                        break e;
                      case "link":
                        var f = im(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Jt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = im(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], Z(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Jt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Vl] = e, D(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  cm(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Rd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? cm(
                o,
                e.type,
                e.stateNode
              ) : Rd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Ay(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), a !== null && i & 4 && Ay(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              se(e, Nu, t);
            } catch (Y) {
              Re(e, e.return, Y);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Ay(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (o0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (jl(t, e), fa(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              se(
                e,
                Ac,
                t,
                a,
                i
              );
            } catch (Y) {
              Re(e, e.return, Y);
            }
          }
          break;
        case 3:
          if (o = on(), lg = null, f = Ku, Ku = sr(t.containerInfo), jl(t, e), Ku = f, fa(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              se(
                e,
                tm,
                t.containerInfo
              );
            } catch (Y) {
              Re(e, e.return, Y);
            }
          o0 && (o0 = !1, pc(e)), t.effectDuration += ii(o);
          break;
        case 4:
          i = Ku, Ku = sr(
            e.stateNode.containerInfo
          ), jl(t, e), fa(e), Ku = i;
          break;
        case 12:
          i = on(), jl(t, e), fa(e), e.stateNode.effectDuration += lc(i);
          break;
        case 13:
          jl(t, e), fa(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (y0 = tu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, mc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, v = jc, b = sl;
          if (jc = v || o, sl = b || h, jl(t, e), sl = b, jc = v, fa(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~Dv : t._visibility | Dv, o && (a === null || h || jc || sl || Gl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? se(h, da, f) : se(
                      h,
                      Py,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (Y) {
                    Re(h, h.return, Y);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? se(h, Iy, d) : se(
                      h,
                      Td,
                      d,
                      h.memoizedProps
                    );
                  } catch (Y) {
                    Re(h, h.return, Y);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, mc(e, a))));
          break;
        case 19:
          jl(t, e), fa(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, mc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          jl(t, e), fa(e);
      }
    }
    function fa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          se(e, Wp, e);
        } catch (a) {
          Re(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function pc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          pc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Vn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Dy(e, t.alternate, t), t = t.sibling;
    }
    function Oa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Is(
            e,
            e.return,
            Pl
          ), Gl(e);
          break;
        case 1:
          Za(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Ps(
            e,
            e.return,
            t
          ), Gl(e);
          break;
        case 27:
          se(
            e,
            Bo,
            e.stateNode
          );
        case 26:
        case 5:
          Za(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
    }
    function Gl(e) {
      for (e = e.child; e !== null; )
        Oa(e), e = e.sibling;
    }
    function _u(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xn(
            e,
            a,
            i
          ), by(a, Pl);
          break;
        case 1:
          if (Xn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && se(
            a,
            t0,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              se(
                a,
                co,
                t,
                e
              );
            } catch (f) {
              Re(a, a.return, f);
            }
          }
          i && o & 64 && Ty(a), To(a, a.return);
          break;
        case 27:
          Oy(a);
        case 26:
        case 5:
          Xn(
            e,
            a,
            i
          ), i && t === null && o & 4 && $p(a), To(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = on(), Xn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += lc(o);
            try {
              se(
                a,
                Ey,
                a,
                t,
                _v,
                i.effectDuration
              );
            } catch (f) {
              Re(a, a.return, f);
            }
          } else
            Xn(
              e,
              a,
              i
            );
          break;
        case 13:
          Xn(
            e,
            a,
            i
          ), i && o & 4 && Eo(e, a);
          break;
        case 22:
          a.memoizedState === null && Xn(
            e,
            a,
            i
          ), To(a, a.return);
          break;
        case 30:
          break;
        default:
          Xn(
            e,
            a,
            i
          );
      }
    }
    function Xn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        _u(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Qn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && tc(e), a != null && _n(a));
    }
    function pn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (tc(t), e != null && _n(e));
    }
    function At(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          lr(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function lr(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          At(
            e,
            t,
            a,
            i
          ), o & 2048 && Sy(t, Bl | ru);
          break;
        case 1:
          At(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = on();
          At(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (tc(t), a != null && _n(a))), e.passiveEffectDuration += ii(f);
          break;
        case 12:
          if (o & 2048) {
            o = on(), At(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += lc(o);
            try {
              se(
                t,
                kp,
                t,
                t.alternate,
                _v,
                e.passiveEffectDuration
              );
            } catch (h) {
              Re(t, t.return, h);
            }
          } else
            At(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          At(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & xc ? At(
            e,
            t,
            a,
            i
          ) : Ao(
            e,
            t
          ) : f._visibility & xc ? At(
            e,
            t,
            a,
            i
          ) : (f._visibility |= xc, vi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Qn(d, t);
          break;
        case 24:
          At(
            e,
            t,
            a,
            i
          ), o & 2048 && pn(t.alternate, t);
          break;
        default:
          At(
            e,
            t,
            a,
            i
          );
      }
    }
    function vi(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        ld(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function ld(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vi(
            e,
            t,
            a,
            i,
            o
          ), Sy(t, Bl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & xc ? vi(
            e,
            t,
            a,
            i,
            o
          ) : Ao(
            e,
            t
          ) : (d._visibility |= xc, vi(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Qn(
            t.alternate,
            t
          );
          break;
        case 24:
          vi(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && pn(t.alternate, t);
          break;
        default:
          vi(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function Ao(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Ao(
                a,
                i
              ), o & 2048 && Qn(
                i.alternate,
                i
              );
              break;
            case 24:
              Ao(
                a,
                i
              ), o & 2048 && pn(
                i.alternate,
                i
              );
              break;
            default:
              Ao(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function vc(e) {
      if (e.subtreeFlags & Wm)
        for (e = e.child; e !== null; )
          gi(e), e = e.sibling;
    }
    function gi(e) {
      switch (e.tag) {
        case 26:
          vc(e), e.flags & Wm && e.memoizedState !== null && cv(
            Ku,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          vc(e);
          break;
        case 3:
        case 4:
          var t = Ku;
          Ku = sr(
            e.stateNode.containerInfo
          ), vc(e), Ku = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wm, Wm = 16777216, vc(e), Wm = t) : vc(e));
          break;
        default:
          vc(e);
      }
    }
    function ar(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Ro(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, _y(
              i,
              e
            );
          }
        ar(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Uy(e), e = e.sibling;
    }
    function Uy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ro(e), e.flags & 2048 && er(
            e,
            e.return,
            Bl | ru
          );
          break;
        case 3:
          var t = on();
          Ro(e), e.stateNode.passiveEffectDuration += ii(t);
          break;
        case 12:
          t = on(), Ro(e), e.stateNode.passiveEffectDuration += lc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & xc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~xc, nr(e)) : Ro(e);
          break;
        default:
          Ro(e);
      }
    }
    function nr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, _y(
              i,
              e
            );
          }
        ar(e);
      }
      for (e = e.child; e !== null; )
        ur(e), e = e.sibling;
    }
    function ur(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          er(
            e,
            e.return,
            Bl
          ), nr(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & xc && (t._visibility &= ~xc, nr(e));
          break;
        default:
          nr(e);
      }
    }
    function _y(e, t) {
      for (; Ql !== null; ) {
        var a = Ql, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            er(
              i,
              t,
              Bl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && tc(i));
            break;
          case 24:
            _n(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Ql = i;
        else
          e: for (a = e; Ql !== null; ) {
            i = Ql;
            var o = i.sibling, f = i.return;
            if (zy(i), i === a) {
              Ql = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Ql = o;
              break e;
            }
            Ql = f;
          }
      }
    }
    function Cy() {
      BS.forEach(function(e) {
        return e();
      });
    }
    function Hy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || j.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ra(e) {
      if ((St & xa) !== Sn && lt !== 0)
        return lt & -lt;
      var t = j.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = qr, e !== 0 ? e : Ly()) : yf();
    }
    function Fp() {
      En === 0 && (En = (lt & 536870912) === 0 || ht ? Qe() : 536870912);
      var e = du.current;
      return e !== null && (e.flags |= 32), En;
    }
    function Zt(e, t, a) {
      if (bh && console.error("useInsertionEffect must not schedule updates."), b0 && (Qv = !0), (e === Ht && (Rt === Vr || Rt === Xr) || e.cancelPendingCommit !== null) && (bc(e, 0), Cu(
        e,
        lt,
        En,
        !1
      )), mu(e, a), (St & xa) !== 0 && e === Ht) {
        if (pa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = et && re(et) || "Unknown", c1.has(e) || (c1.add(e), t = re(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              i1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), i1 = !0);
          }
      } else
        Wt && Ba(e, t, a), tv(t), e === Ht && ((St & xa) === Sn && (af |= a), al === Lr && Cu(
          e,
          lt,
          En,
          !1
        )), Ka(e);
    }
    function fl(e, t, a) {
      if ((St & (xa | Ju)) !== Sn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ku(e, t), o = i ? Ny(e, t) : id(e, t, !0), f = i;
      do {
        if (o === Gc) {
          vh && !i && Cu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Ip(a)) {
            o = id(e, t, !1), f = !1;
            continue;
          }
          if (o === mh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = lp;
                var v = o.current.memoizedState.isDehydrated;
                if (v && (bc(
                  o,
                  h
                ).flags |= 256), h = id(
                  o,
                  h,
                  !1
                ), h !== mh) {
                  if (d0 && !v) {
                    o.errorRecoveryDisabledLanes |= f, af |= f, o = Lr;
                    break e;
                  }
                  o = Na, Na = d, o !== null && (Na === null ? Na = o : Na.push.apply(
                    Na,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== mh) continue;
            }
          }
          if (o === Im) {
            bc(e, 0), Cu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Gc:
              case Im:
                throw Error("Root did not complete. This is a bug in React.");
              case Lr:
                if ((t & 4194048) !== t) break;
              case Lv:
                Cu(
                  i,
                  t,
                  En,
                  !tf
                );
                break e;
              case mh:
                Na = null;
                break;
              case f0:
              case Ib:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (j.actQueue !== null)
              sd(
                i,
                a,
                t,
                Na,
                ap,
                Vv,
                En,
                af,
                Qr
              );
            else {
              if ((t & 62914560) === t && (f = y0 + e1 - tu(), 10 < f)) {
                if (Cu(
                  i,
                  t,
                  En,
                  !tf
                ), hl(i, 0, !0) !== 0) break e;
                i.timeoutHandle = m1(
                  vl.bind(
                    null,
                    i,
                    a,
                    Na,
                    ap,
                    Vv,
                    t,
                    En,
                    af,
                    Qr,
                    tf,
                    o,
                    jS,
                    lb,
                    0
                  ),
                  f
                );
                break e;
              }
              vl(
                i,
                a,
                Na,
                ap,
                Vv,
                t,
                En,
                af,
                Qr,
                tf,
                o,
                qS,
                lb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ka(e);
    }
    function vl(e, t, a, i, o, f, d, h, v, b, Y, L, H, V) {
      if (e.timeoutHandle = $r, L = t.subtreeFlags, (L & 8192 || (L & 16785408) === 16785408) && (fp = { stylesheets: null, count: 0, unsuspend: iv }, gi(t), L = ov(), L !== null)) {
        e.cancelPendingCommit = L(
          sd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            v,
            Y,
            wS,
            H,
            V
          )
        ), Cu(
          e,
          f,
          d,
          !b
        );
        return;
      }
      sd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        v
      );
    }
    function Ip(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!_a(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Cu(e, t, a, i) {
      t &= ~h0, t &= ~af, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ll(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && hf(e, a, t);
    }
    function gc() {
      return (St & (xa | Ju)) === Sn ? (Sc(0), !1) : !0;
    }
    function ad() {
      if (et !== null) {
        if (Rt === en)
          var e = et.return;
        else
          e = et, Ss(), dn(e), oh = null, km = 0, e = et;
        for (; e !== null; )
          gy(e.alternate, e), e = e.return;
        et = null;
      }
    }
    function bc(e, t) {
      var a = e.timeoutHandle;
      a !== $r && (e.timeoutHandle = $r, IS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ad(), Ht = e, et = a = Mn(e.current, null), lt = t, Rt = en, Tn = null, tf = !1, vh = ku(e, t), d0 = !1, al = Gc, Qr = En = h0 = af = lf = 0, Na = lp = null, Vv = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Ll(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return wi = t, Df(), t = eb(), 1e3 < t - P0 && (j.recentlyCreatedOwnerStacks = 0, P0 = t), Qu.discardPendingWarnings(), a;
    }
    function ir(e, t) {
      Be = null, j.H = jv, j.getCurrentStack = null, pa = !1, Ua = null, t === Qm || t === Nv ? (t = ty(), Rt = ep) : t === ub ? (t = ty(), Rt = Pb) : Rt = t === Xb ? s0 : t !== null && typeof t == "object" && typeof t.then == "function" ? ph : Pm, Tn = t;
      var a = et;
      if (a === null)
        al = Im, So(
          e,
          Ta(t, e.current)
        );
      else
        switch (a.mode & Il && Eu(a), ta(), Rt) {
          case Pm:
            ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(
              a,
              t,
              lt
            );
            break;
          case Vr:
          case Xr:
          case ep:
          case ph:
          case tp:
            ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(
              a,
              t,
              lt
            );
        }
    }
    function nd() {
      var e = j.H;
      return j.H = jv, e === null ? jv : e;
    }
    function xy() {
      var e = j.A;
      return j.A = NS, e;
    }
    function ud() {
      al = Lr, tf || (lt & 4194048) !== lt && du.current !== null || (vh = !0), (lf & 134217727) === 0 && (af & 134217727) === 0 || Ht === null || Cu(
        Ht,
        lt,
        En,
        !1
      );
    }
    function id(e, t, a) {
      var i = St;
      St |= xa;
      var o = nd(), f = xy();
      if (Ht !== e || lt !== t) {
        if (Wt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Mo(e, lt), d.clear()), Al(e, t);
        }
        ap = null, bc(e, t);
      }
      An(t), t = !1, d = al;
      e: do
        try {
          if (Rt !== en && et !== null) {
            var h = et, v = Tn;
            switch (Rt) {
              case s0:
                ad(), d = Lv;
                break e;
              case ep:
              case Vr:
              case Xr:
              case ph:
                du.current === null && (t = !0);
                var b = Rt;
                if (Rt = en, Tn = null, bi(e, h, v, b), a && vh) {
                  d = Gc;
                  break e;
                }
                break;
              default:
                b = Rt, Rt = en, Tn = null, bi(e, h, v, b);
            }
          }
          cd(), d = al;
          break;
        } catch (Y) {
          ir(e, Y);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Ss(), St = i, j.H = o, j.A = f, ji(), et === null && (Ht = null, lt = 0, Df()), d;
    }
    function cd() {
      for (; et !== null; ) Yy(et);
    }
    function Ny(e, t) {
      var a = St;
      St |= xa;
      var i = nd(), o = xy();
      if (Ht !== e || lt !== t) {
        if (Wt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Mo(e, lt), f.clear()), Al(e, t);
        }
        ap = null, Xv = tu() + t1, bc(e, t);
      } else
        vh = ku(
          e,
          t
        );
      An(t);
      e: do
        try {
          if (Rt !== en && et !== null)
            t: switch (t = et, f = Tn, Rt) {
              case Pm:
                Rt = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  Pm
                );
                break;
              case Vr:
              case Xr:
                if (ey(f)) {
                  Rt = en, Tn = null, od(t);
                  break;
                }
                t = function() {
                  Rt !== Vr && Rt !== Xr || Ht !== e || (Rt = tp), Ka(e);
                }, f.then(t, t);
                break e;
              case ep:
                Rt = tp;
                break e;
              case Pb:
                Rt = r0;
                break e;
              case tp:
                ey(f) ? (Rt = en, Tn = null, od(t)) : (Rt = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  tp
                ));
                break;
              case r0:
                var d = null;
                switch (et.tag) {
                  case 26:
                    d = et.memoizedState;
                  case 5:
                  case 27:
                    var h = et;
                    if (!d || dr(d)) {
                      Rt = en, Tn = null;
                      var v = h.sibling;
                      if (v !== null) et = v;
                      else {
                        var b = h.return;
                        b !== null ? (et = b, cr(b)) : et = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Rt = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  r0
                );
                break;
              case ph:
                Rt = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  ph
                );
                break;
              case s0:
                ad(), al = Lv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          j.actQueue !== null ? cd() : By();
          break;
        } catch (Y) {
          ir(e, Y);
        }
      while (!0);
      return Ss(), j.H = i, j.A = o, St = a, et !== null ? (ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded(), Gc) : (ji(), Ht = null, lt = 0, Df(), al);
    }
    function By() {
      for (; et !== null && !mv(); )
        Yy(et);
    }
    function Yy(e) {
      var t = e.alternate;
      (e.mode & Il) !== qt ? (Ts(e), t = se(
        e,
        Fs,
        t,
        e,
        wi
      ), Eu(e)) : t = se(
        e,
        Fs,
        t,
        e,
        wi
      ), e.memoizedProps = e.pendingProps, t === null ? cr(e) : et = t;
    }
    function od(e) {
      var t = se(e, fd, e);
      e.memoizedProps = e.pendingProps, t === null ? cr(e) : et = t;
    }
    function fd(e) {
      var t = e.alternate, a = (e.mode & Il) !== qt;
      switch (a && Ts(e), e.tag) {
        case 15:
        case 0:
          t = hy(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            lt
          );
          break;
        case 11:
          t = hy(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            lt
          );
          break;
        case 5:
          dn(e);
        default:
          gy(t, e), e = et = Lh(e, wi), t = Fs(t, e, wi);
      }
      return a && Eu(e), t;
    }
    function bi(e, t, a, i) {
      Ss(), dn(t), oh = null, km = 0;
      var o = t.return;
      try {
        if (Jf(
          e,
          o,
          t,
          a,
          lt
        )) {
          al = Im, So(
            e,
            Ta(a, e.current)
          ), et = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw et = o, f;
        al = Im, So(
          e,
          Ta(a, e.current)
        ), et = null;
        return;
      }
      t.flags & 32768 ? (ht || i === Pm ? e = !0 : vh || (lt & 536870912) !== 0 ? e = !1 : (tf = e = !0, (i === Vr || i === Xr || i === ep || i === ph) && (i = du.current, i !== null && i.tag === 13 && (i.flags |= 16384))), rd(t, e)) : cr(t);
    }
    function cr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          rd(
            t,
            tf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Ts(t), a = se(
          t,
          Qp,
          a,
          t,
          wi
        ), (t.mode & Il) !== qt && ac(t), a !== null) {
          et = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          et = t;
          return;
        }
        et = t = e;
      } while (t !== null);
      al === Gc && (al = Ib);
    }
    function rd(e, t) {
      do {
        var a = Zp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, et = a;
          return;
        }
        if ((e.mode & Il) !== qt) {
          ac(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          et = e;
          return;
        }
        et = e = a;
      } while (e !== null);
      al = Lv, et = null;
    }
    function sd(e, t, a, i, o, f, d, h, v) {
      e.cancelPendingCommit = null;
      do
        Oo();
      while (ea !== Zr);
      if (Qu.flushLegacyContextWarning(), Qu.flushPendingUnsafeLifecycleWarnings(), (St & (xa | Ju)) !== Sn)
        throw Error("Should not already be working.");
      if (ce !== null && typeof ce.markCommitStarted == "function" && ce.markCommitStarted(a), t === null) Ce();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= Vg, es(
          e,
          a,
          f,
          d,
          h,
          v
        ), e === Ht && (et = Ht = null, lt = 0), gh = t, uf = e, cf = a, p0 = f, v0 = o, u1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gy(Xo, function() {
          return or(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), _v = ah(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = j.T, j.T = null, o = Ue.p, Ue.p = xl, d = St, St |= Ju;
          try {
            ed(e, t, a);
          } finally {
            St = d, Ue.p = o, j.T = i;
          }
        }
        ea = l1, Zn(), dd(), Pp();
      }
    }
    function Zn() {
      if (ea === l1) {
        ea = Zr;
        var e = uf, t = gh, a = cf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = j.T, j.T = null;
          var o = Ue.p;
          Ue.p = xl;
          var f = St;
          St |= Ju;
          try {
            hh = a, yh = e, My(t, e), yh = hh = null, a = M0;
            var d = _p(e.containerInfo), h = a.focusedElem, v = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Up(
              h.ownerDocument.documentElement,
              h
            )) {
              if (v !== null && qh(h)) {
                var b = v.start, Y = v.end;
                if (Y === void 0 && (Y = b), "selectionStart" in h)
                  h.selectionStart = b, h.selectionEnd = Math.min(
                    Y,
                    h.value.length
                  );
                else {
                  var L = h.ownerDocument || document, H = L && L.defaultView || window;
                  if (H.getSelection) {
                    var V = H.getSelection(), de = h.textContent.length, _e = Math.min(
                      v.start,
                      de
                    ), xt = v.end === void 0 ? _e : Math.min(v.end, de);
                    !V.extend && _e > xt && (d = xt, xt = _e, _e = d);
                    var it = Yh(
                      h,
                      _e
                    ), T = Yh(
                      h,
                      xt
                    );
                    if (it && T && (V.rangeCount !== 1 || V.anchorNode !== it.node || V.anchorOffset !== it.offset || V.focusNode !== T.node || V.focusOffset !== T.offset)) {
                      var E = L.createRange();
                      E.setStart(it.node, it.offset), V.removeAllRanges(), _e > xt ? (V.addRange(E), V.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), V.addRange(E));
                    }
                  }
                }
              }
              for (L = [], V = h; V = V.parentNode; )
                V.nodeType === 1 && L.push({
                  element: V,
                  left: V.scrollLeft,
                  top: V.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < L.length; h++) {
                var A = L[h];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            ug = !!z0, M0 = z0 = null;
          } finally {
            St = f, Ue.p = o, j.T = i;
          }
        }
        e.current = t, ea = a1;
      }
    }
    function dd() {
      if (ea === a1) {
        ea = Zr;
        var e = uf, t = gh, a = cf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = j.T, j.T = null;
          var o = Ue.p;
          Ue.p = xl;
          var f = St;
          St |= Ju;
          try {
            ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(a), hh = a, yh = e, Dy(
              e,
              t.alternate,
              t
            ), yh = hh = null, ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
          } finally {
            St = f, Ue.p = o, j.T = i;
          }
        }
        ea = n1;
      }
    }
    function Pp() {
      if (ea === GS || ea === n1) {
        ea = Zr, Cg();
        var e = uf, t = gh, a = cf, i = u1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ea = m0 : (ea = Zr, gh = uf = null, Kn(e, e.pendingLanes), Kr = 0, up = null);
        var f = e.pendingLanes;
        if (f === 0 && (nf = null), o || zo(e), o = kc(a), t = t.stateNode, Hl && typeof Hl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case xl:
                var h = Bd;
                break;
              case bn:
                h = Rr;
                break;
              case Gu:
                h = Xo;
                break;
              case jd:
                h = Or;
                break;
              default:
                h = Xo;
            }
            Hl.onCommitFiberRoot(
              Ui,
              t,
              h,
              d
            );
          } catch (L) {
            ya || (ya = !0, console.error(
              "React instrumentation encountered an error: %s",
              L
            ));
          }
        if (Wt && e.memoizedUpdaters.clear(), Cy(), i !== null) {
          d = j.T, h = Ue.p, Ue.p = xl, j.T = null;
          try {
            var v = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var b = i[t], Y = ev(b.stack);
              se(
                b.source,
                v,
                b.value,
                Y
              );
            }
          } finally {
            j.T = d, Ue.p = h;
          }
        }
        (cf & 3) !== 0 && Oo(), Ka(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Hv = !0, e === g0 ? np++ : (np = 0, g0 = e)) : np = 0, Sc(0), Ce();
      }
    }
    function ev(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Kn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _n(t)));
    }
    function Oo(e) {
      return Zn(), dd(), Pp(), or();
    }
    function or() {
      if (ea !== m0) return !1;
      var e = uf, t = p0;
      p0 = 0;
      var a = kc(cf), i = Gu > a ? Gu : a;
      a = j.T;
      var o = Ue.p;
      try {
        Ue.p = i, j.T = null, i = v0, v0 = null;
        var f = uf, d = cf;
        if (ea = Zr, gh = uf = null, cf = 0, (St & (xa | Ju)) !== Sn)
          throw Error("Cannot flush passive effects while already rendering.");
        b0 = !0, Qv = !1, ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(d);
        var h = St;
        if (St |= Ju, Uy(f.current), lr(
          f,
          f.current,
          d,
          i
        ), ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped(), zo(f), St = h, Sc(0, !1), Qv ? f === up ? Kr++ : (Kr = 0, up = f) : Kr = 0, Qv = b0 = !1, Hl && typeof Hl.onPostCommitFiberRoot == "function")
          try {
            Hl.onPostCommitFiberRoot(Ui, f);
          } catch (b) {
            ya || (ya = !0, console.error(
              "React instrumentation encountered an error: %s",
              b
            ));
          }
        var v = f.current.stateNode;
        return v.effectDuration = 0, v.passiveEffectDuration = 0, !0;
      } finally {
        Ue.p = o, j.T = a, Kn(e, t);
      }
    }
    function Do(e, t, a) {
      t = Ta(a, t), t = wl(e.stateNode, t, 2), e = rn(e, t, 2), e !== null && (mu(e, 2), Ka(e));
    }
    function Re(e, t, a) {
      if (bh = !1, e.tag === 3)
        Do(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Do(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (nf === null || !nf.has(i))) {
              e = Ta(a, e), a = Qt(2), i = rn(t, a, 2), i !== null && (Kf(
                a,
                i,
                t,
                e
              ), mu(i, 2), Ka(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function qy(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new YS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (d0 = !0, o.add(a), i = Rg.bind(null, e, t, a), Wt && Mo(e, a), t.then(i, i));
    }
    function Rg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Hy() && j.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Ht === e && (lt & a) === a && (al === Lr || al === f0 && (lt & 62914560) === lt && tu() - y0 < e1 ? (St & xa) === Sn && bc(e, 0) : h0 |= a, Qr === lt && (Qr = 0)), Ka(e);
    }
    function wy(e, t) {
      t === 0 && (t = On()), e = aa(e, t), e !== null && (mu(e, t), Ka(e));
    }
    function fr(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), wy(e, a);
    }
    function Si(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), wy(e, a);
    }
    function hd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === wo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && se(
            o,
            jy,
            i,
            o,
            (o.mode & W0) === qt
          ) : hd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? se(
            o,
            jy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && se(
            o,
            hd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function jy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      ie(!0);
      try {
        Oa(t), a && ur(t), _u(e, t.alternate, t, !1), a && ld(e, t, 0, null, !1, 0);
      } finally {
        ie(!1);
      }
    }
    function zo(e) {
      var t = !0;
      e.current.mode & (va | Xu) || (t = !1), hd(
        e,
        e.current,
        t
      );
    }
    function vn(e) {
      if ((St & xa) === Sn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = re(e) || "ReactComponent", Zv !== null) {
            if (Zv.has(t)) return;
            Zv.add(t);
          } else Zv = /* @__PURE__ */ new Set([t]);
          se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Mo(e, t) {
      Wt && e.memoizedUpdaters.forEach(function(a) {
        Ba(e, a, t);
      });
    }
    function Gy(e, t) {
      var a = j.actQueue;
      return a !== null ? (a.push(t), XS) : Nd(e, t);
    }
    function tv(e) {
      Hy() && j.actQueue === null && se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          re(e)
        );
      });
    }
    function Ka(e) {
      e !== Sh && e.next === null && (Sh === null ? Kv = Sh = e : Sh = Sh.next = e), Jv = !0, j.actQueue !== null ? T0 || (T0 = !0, rl()) : S0 || (S0 = !0, rl());
    }
    function Sc(e, t) {
      if (!E0 && Jv) {
        E0 = !0;
        do
          for (var a = !1, i = Kv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ll(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, pd(i, f));
            } else
              f = lt, f = hl(
                i,
                i === Ht ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== $r
              ), (f & 3) === 0 || ku(i, f) || (a = !0, pd(i, f));
            i = i.next;
          }
        while (a);
        E0 = !1;
      }
    }
    function yd() {
      md();
    }
    function md() {
      Jv = T0 = S0 = !1;
      var e = 0;
      Jr !== 0 && (Uo() && (e = Jr), Jr = 0);
      for (var t = tu(), a = null, i = Kv; i !== null; ) {
        var o = i.next, f = Jn(i, t);
        f === 0 ? (i.next = null, a === null ? Kv = o : a.next = o, o === null && (Sh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Jv = !0)), i = o;
      }
      Sc(e);
    }
    function Jn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ll(f), h = 1 << d, v = o[d];
        v === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Pr(h, t)) : v <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Ht, a = lt, a = hl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $r
      ), i = e.callbackNode, a === 0 || e === t && (Rt === Vr || Rt === Xr) || e.cancelPendingCommit !== null)
        return i !== null && vd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ku(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || j.actQueue !== null && i !== A0)
          vd(i);
        else return t;
        switch (kc(a)) {
          case xl:
          case bn:
            a = Rr;
            break;
          case Gu:
            a = Xo;
            break;
          case jd:
            a = Or;
            break;
          default:
            a = Xo;
        }
        return i = Kt.bind(null, e), j.actQueue !== null ? (j.actQueue.push(i), a = A0) : a = Nd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && vd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Kt(e, t) {
      if (Hv = Cv = !1, ea !== Zr && ea !== m0)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Oo() && e.callbackNode !== a)
        return null;
      var i = lt;
      return i = hl(
        e,
        e === Ht ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $r
      ), i === 0 ? null : (fl(
        e,
        i,
        t
      ), Jn(e, tu()), e.callbackNode != null && e.callbackNode === a ? Kt.bind(null, e) : null);
    }
    function pd(e, t) {
      if (Oo()) return null;
      Cv = Hv, Hv = !1, fl(e, t, !0);
    }
    function vd(e) {
      e !== A0 && e !== null && _g(e);
    }
    function rl() {
      j.actQueue !== null && j.actQueue.push(function() {
        return md(), null;
      }), PS(function() {
        (St & (xa | Ju)) !== Sn ? Nd(
          Bd,
          yd
        ) : md();
      });
    }
    function Ly() {
      return Jr === 0 && (Jr = Qe()), Jr;
    }
    function Vy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Z(e, "action"), to("" + e));
    }
    function Xy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Bt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Vy(
          (o[ma] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ma] || null) ? Vy(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Te(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Jr !== 0) {
                    var v = d ? Xy(
                      o,
                      d
                    ) : new FormData(o), b = {
                      pending: !0,
                      data: v,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(b), cc(
                      a,
                      b,
                      null,
                      v
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), v = d ? Xy(
                    o,
                    d
                  ) : new FormData(o), b = {
                    pending: !0,
                    data: v,
                    method: o.method,
                    action: f
                  }, Object.freeze(b), cc(
                    a,
                    b,
                    f,
                    v
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Ml(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        n0(i);
      }
      e.currentTarget = null;
    }
    function kn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], v = h.instance, b = h.currentTarget;
              if (h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? se(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], v = h.instance, b = h.currentTarget, h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? se(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
        }
      }
    }
    function Fe(e, t) {
      R0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[pm];
      a === void 0 && (a = t[pm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (bd(t, e, 2, !1), a.add(i));
    }
    function gd(e, t, a) {
      R0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), bd(
        a,
        e,
        i,
        t
      );
    }
    function Qy(e) {
      if (!e[kv]) {
        e[kv] = !0, vv.forEach(function(a) {
          a !== "selectionchange" && (R0.has(a) || gd(a, !1, e), gd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[kv] || (t[kv] = !0, gd("selectionchange", !1, t));
      }
    }
    function bd(e, t, a, i) {
      switch (_d(t)) {
        case xl:
          var o = zg;
          break;
        case bn:
          o = Ud;
          break;
        default:
          o = Ri;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !C || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function kl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var v = d.tag;
                if ((v === 3 || v === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = la(h), d === null) return;
              if (v = d.tag, v === 5 || v === 6 || v === 26 || v === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      rs(function() {
        var b = f, Y = Ji(a), L = [];
        e: {
          var H = $0.get(e);
          if (H !== void 0) {
            var V = Te, de = e;
            switch (e) {
              case "keypress":
                if (lo(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = iS;
                break;
              case "focusin":
                de = "focus", V = ot;
                break;
              case "focusout":
                de = "blur", V = ot;
                break;
              case "beforeblur":
              case "afterblur":
                V = ot;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                V = Je;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = Oe;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = fS;
                break;
              case Z0:
              case K0:
              case J0:
                V = Bg;
                break;
              case k0:
                V = sS;
                break;
              case "scroll":
              case "scrollend":
                V = z;
                break;
              case "wheel":
                V = hS;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = P1;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = q0;
                break;
              case "toggle":
              case "beforetoggle":
                V = mS;
            }
            var _e = (t & 4) !== 0, xt = !_e && (e === "scroll" || e === "scrollend"), it = _e ? H !== null ? H + "Capture" : null : H;
            _e = [];
            for (var T = b, E; T !== null; ) {
              var A = T;
              if (E = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || E === null || it === null || (A = gu(T, it), A != null && _e.push(
                $l(
                  T,
                  A,
                  E
                )
              )), xt) break;
              T = T.return;
            }
            0 < _e.length && (H = new V(
              H,
              de,
              null,
              a,
              Y
            ), L.push({
              event: H,
              listeners: _e
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (H = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", H && a !== r && (de = a.relatedTarget || a.fromElement) && (la(de) || de[Ci]))
              break e;
            if ((V || H) && (H = Y.window === Y ? Y : (H = Y.ownerDocument) ? H.defaultView || H.parentWindow : window, V ? (de = a.relatedTarget || a.toElement, V = b, de = de ? la(de) : null, de !== null && (xt = He(de), _e = de.tag, de !== xt || _e !== 5 && _e !== 27 && _e !== 6) && (de = null)) : (V = null, de = b), V !== de)) {
              if (_e = Je, A = "onMouseLeave", it = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (_e = q0, A = "onPointerLeave", it = "onPointerEnter", T = "pointer"), xt = V == null ? H : ln(V), E = de == null ? H : ln(de), H = new _e(
                A,
                T + "leave",
                V,
                a,
                Y
              ), H.target = xt, H.relatedTarget = E, A = null, la(Y) === b && (_e = new _e(
                it,
                T + "enter",
                de,
                a,
                Y
              ), _e.target = E, _e.relatedTarget = xt, A = _e), xt = A, V && de)
                t: {
                  for (_e = V, it = de, T = 0, E = _e; E; E = gl(E))
                    T++;
                  for (E = 0, A = it; A; A = gl(A))
                    E++;
                  for (; 0 < T - E; )
                    _e = gl(_e), T--;
                  for (; 0 < E - T; )
                    it = gl(it), E--;
                  for (; T--; ) {
                    if (_e === it || it !== null && _e === it.alternate)
                      break t;
                    _e = gl(_e), it = gl(it);
                  }
                  _e = null;
                }
              else _e = null;
              V !== null && Zy(
                L,
                H,
                V,
                _e,
                !1
              ), de !== null && xt !== null && Zy(
                L,
                xt,
                de,
                _e,
                !0
              );
            }
          }
          e: {
            if (H = b ? ln(b) : window, V = H.nodeName && H.nodeName.toLowerCase(), V === "select" || V === "input" && H.type === "file")
              var X = Nh;
            else if (Op(H))
              if (X0)
                X = Sg;
              else {
                X = Bh;
                var ae = gg;
              }
            else
              V = H.nodeName, !V || V.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? b && Ki(b.elementType) && (X = Nh) : X = bg;
            if (X && (X = X(e, b))) {
              ys(
                L,
                X,
                a,
                Y
              );
              break e;
            }
            ae && ae(e, H, b), e === "focusout" && b && H.type === "number" && b.memoizedProps.value != null && ns(H, "number", H.value);
          }
          switch (ae = b ? ln(b) : window, e) {
            case "focusin":
              (Op(ae) || ae.contentEditable === "true") && ($d = ae, qg = b, Ym = null);
              break;
            case "focusout":
              Ym = qg = $d = null;
              break;
            case "mousedown":
              wg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              wg = !1, Cp(
                L,
                a,
                Y
              );
              break;
            case "selectionchange":
              if (bS) break;
            case "keydown":
            case "keyup":
              Cp(
                L,
                a,
                Y
              );
          }
          var Le;
          if (Yg)
            e: {
              switch (e) {
                case "compositionstart":
                  var he = "onCompositionStart";
                  break e;
                case "compositionend":
                  he = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  he = "onCompositionUpdate";
                  break e;
              }
              he = void 0;
            }
          else
            kd ? Jl(e, a) && (he = "onCompositionEnd") : e === "keydown" && a.keyCode === w0 && (he = "onCompositionStart");
          he && (j0 && a.locale !== "ko" && (kd || he !== "onCompositionStart" ? he === "onCompositionEnd" && kd && (Le = bu()) : (k = Y, N = "value" in k ? k.value : k.textContent, kd = !0)), ae = rr(
            b,
            he
          ), 0 < ae.length && (he = new Y0(
            he,
            e,
            null,
            a,
            Y
          ), L.push({
            event: he,
            listeners: ae
          }), Le ? he.data = Le : (Le = ei(a), Le !== null && (he.data = Le)))), (Le = vS ? hs(e, a) : Af(e, a)) && (he = rr(
            b,
            "onBeforeInput"
          ), 0 < he.length && (ae = new tS(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            Y
          ), L.push({
            event: ae,
            listeners: he
          }), ae.data = Le)), Bt(
            L,
            e,
            b,
            a,
            Y
          );
        }
        kn(L, t);
      });
    }
    function $l(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function rr(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = gu(e, a), o != null && i.unshift(
          $l(e, o, f)
        ), o = gu(e, t), o != null && i.push(
          $l(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function gl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Zy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, v = h.alternate, b = h.stateNode;
        if (h = h.tag, v !== null && v === i) break;
        h !== 5 && h !== 26 && h !== 27 || b === null || (v = b, o ? (b = gu(a, f), b != null && d.unshift(
          $l(a, b, v)
        )) : o || (b = gu(a, f), b != null && d.push(
          $l(a, b, v)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function $n(e, t) {
      eo(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Hm || (Hm = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Fa,
        possibleRegistrationNames: Uc
      };
      Ki(e) || typeof t.is == "string" || Ch(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Yt(e, t, a, i) {
      t !== a && (a = Ul(a), Ul(t) !== a && (i[e] = t));
    }
    function Ti(e, t, a) {
      t.forEach(function(i) {
        a[Jy(i)] = i === "style" ? Ec(e) : e.getAttribute(i);
      });
    }
    function Ja(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Sd(e, t) {
      return e = e.namespaceURI === Hr || e.namespaceURI === Wo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ul(e) {
      return g(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        pe(e)
      ), B(e)), (typeof e == "string" ? e : "" + e).replace(QS, `
`).replace(ZS, "");
    }
    function Ky(e, t) {
      return t = Ul(t), Ul(e) === t;
    }
    function Hu() {
    }
    function st(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Tf(i, t, !1), t === "body" || t === "textarea" && i === "" || Zi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Tf("" + i, t, !1), t !== "body" && Zi(e, "" + i));
          break;
        case "className":
          qe(e, "class", i);
          break;
        case "tabIndex":
          qe(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          qe(e, a, i);
          break;
        case "style":
          Ef(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            qe(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Z(i, a), i = to("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Fv || (Fv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Wv || (Wv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || $v ? t !== "button" || o.type == null || o.type === "submit" || $v ? typeof i == "function" && (o.name == null || r1 || (r1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Fv || (Fv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Wv || (Wv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : ($v = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : ($v = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && st(e, t, "name", o.name, o, null), st(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), st(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), st(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (st(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), st(e, t, "method", o.method, o, null), st(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Z(i, a), i = to("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Z(i, a), a = to("" + i), e.setAttributeNS(kr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Z(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Iv[a] || (Iv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Z(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Z(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Z(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Fe("beforetoggle", e), Fe("toggle", e), nt(e, "popover", i);
          break;
        case "xlinkActuate":
          el(
            e,
            kr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          el(
            e,
            kr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          el(
            e,
            kr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          el(
            e,
            kr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          el(
            e,
            kr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          el(
            e,
            kr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          el(
            e,
            O0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          el(
            e,
            O0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          el(
            e,
            O0,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), nt(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          s1 || i == null || typeof i != "object" || (s1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = fs(a), nt(e, a, i)) : Fa.hasOwnProperty(a) && i != null && typeof i != "function" && Ja(a, i);
      }
    }
    function Tc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Ef(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Zi(e, i) : (typeof i == "number" || typeof i == "bigint") && Zi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Fa.hasOwnProperty(a))
            i != null && typeof i != "function" && Ja(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ma] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : nt(e, a, i);
            }
      }
    }
    function Jt(e, t, a) {
      switch ($n(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Fe("error", e), Fe("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    st(e, t, f, d, a, null);
                }
            }
          o && st(e, t, "srcSet", a.srcSet, a, null), i && st(e, t, "src", a.src, a, null);
          return;
        case "input":
          ye("input", a), Fe("invalid", e);
          var h = f = d = o = null, v = null, b = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var Y = a[i];
              if (Y != null)
                switch (i) {
                  case "name":
                    o = Y;
                    break;
                  case "type":
                    d = Y;
                    break;
                  case "checked":
                    v = Y;
                    break;
                  case "defaultChecked":
                    b = Y;
                    break;
                  case "value":
                    f = Y;
                    break;
                  case "defaultValue":
                    h = Y;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (Y != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    st(e, t, i, Y, a, null);
                }
            }
          Wu(e, a), Sp(
            e,
            f,
            h,
            v,
            b,
            d,
            o,
            !1
          ), pu(e);
          return;
        case "select":
          ye("select", a), Fe("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  st(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          gf(e, a), t = f, a = d, e.multiple = !!i, t != null ? vu(e, !!i, t, !1) : a != null && vu(e, !!i, a, !0);
          return;
        case "textarea":
          ye("textarea", a), Fe("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  st(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Dn(e, a), Dh(e, i, o, f), pu(e);
          return;
        case "option":
          Oh(e, a);
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  st(e, t, v, i, a, null);
              }
          return;
        case "dialog":
          Fe("beforetoggle", e), Fe("toggle", e), Fe("cancel", e), Fe("close", e);
          break;
        case "iframe":
        case "object":
          Fe("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < ip.length; i++)
            Fe(ip[i], e);
          break;
        case "image":
          Fe("error", e), Fe("load", e);
          break;
        case "details":
          Fe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Fe("error", e), Fe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  st(e, t, b, i, a, null);
              }
          return;
        default:
          if (Ki(t)) {
            for (Y in a)
              a.hasOwnProperty(Y) && (i = a[Y], i !== void 0 && Tc(
                e,
                t,
                Y,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && st(e, t, h, i, a, null));
    }
    function lv(e, t, a, i) {
      switch ($n(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, v = null, b = null, Y = null;
          for (V in a) {
            var L = a[V];
            if (a.hasOwnProperty(V) && L != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  v = L;
                default:
                  i.hasOwnProperty(V) || st(
                    e,
                    t,
                    V,
                    null,
                    i,
                    L
                  );
              }
          }
          for (var H in i) {
            var V = i[H];
            if (L = a[H], i.hasOwnProperty(H) && (V != null || L != null))
              switch (H) {
                case "type":
                  f = V;
                  break;
                case "name":
                  o = V;
                  break;
                case "checked":
                  b = V;
                  break;
                case "defaultChecked":
                  Y = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== L && st(
                    e,
                    t,
                    H,
                    V,
                    i,
                    L
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || f1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), f1 = !0), !t || i || o1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), o1 = !0), Fu(
            e,
            d,
            h,
            v,
            b,
            Y,
            f,
            o
          );
          return;
        case "select":
          V = d = h = H = null;
          for (f in a)
            if (v = a[f], a.hasOwnProperty(f) && v != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  V = v;
                default:
                  i.hasOwnProperty(f) || st(
                    e,
                    t,
                    f,
                    null,
                    i,
                    v
                  );
              }
          for (o in i)
            if (f = i[o], v = a[o], i.hasOwnProperty(o) && (f != null || v != null))
              switch (o) {
                case "value":
                  H = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== v && st(
                    e,
                    t,
                    o,
                    f,
                    i,
                    v
                  );
              }
          i = h, t = d, a = V, H != null ? vu(e, !!t, H, !1) : !!a != !!t && (i != null ? vu(e, !!t, i, !0) : vu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = H = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  st(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  H = o;
                  break;
                case "defaultValue":
                  V = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && st(e, t, d, o, i, f);
              }
          us(e, H, V);
          return;
        case "option":
          for (var de in a)
            if (H = a[de], a.hasOwnProperty(de) && H != null && !i.hasOwnProperty(de))
              switch (de) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  st(
                    e,
                    t,
                    de,
                    null,
                    i,
                    H
                  );
              }
          for (v in i)
            if (H = i[v], V = a[v], i.hasOwnProperty(v) && H !== V && (H != null || V != null))
              switch (v) {
                case "selected":
                  e.selected = H && typeof H != "function" && typeof H != "symbol";
                  break;
                default:
                  st(
                    e,
                    t,
                    v,
                    H,
                    i,
                    V
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var _e in a)
            H = a[_e], a.hasOwnProperty(_e) && H != null && !i.hasOwnProperty(_e) && st(
              e,
              t,
              _e,
              null,
              i,
              H
            );
          for (b in i)
            if (H = i[b], V = a[b], i.hasOwnProperty(b) && H !== V && (H != null || V != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  st(
                    e,
                    t,
                    b,
                    H,
                    i,
                    V
                  );
              }
          return;
        default:
          if (Ki(t)) {
            for (var xt in a)
              H = a[xt], a.hasOwnProperty(xt) && H !== void 0 && !i.hasOwnProperty(xt) && Tc(
                e,
                t,
                xt,
                void 0,
                i,
                H
              );
            for (Y in i)
              H = i[Y], V = a[Y], !i.hasOwnProperty(Y) || H === V || H === void 0 && V === void 0 || Tc(
                e,
                t,
                Y,
                H,
                i,
                V
              );
            return;
          }
      }
      for (var it in a)
        H = a[it], a.hasOwnProperty(it) && H != null && !i.hasOwnProperty(it) && st(e, t, it, null, i, H);
      for (L in i)
        H = i[L], V = a[L], !i.hasOwnProperty(L) || H === V || H == null && V == null || st(e, t, L, H, i, V);
    }
    function Jy(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Ec(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function ky(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (I(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Cr.has(f) ? (I(d, f), i += o + f.replace(Lu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Lu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ul(i), Ul(t) !== i && (a.style = Ec(e)));
      }
    }
    function Wl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Z(i, t), e === "" + i)
              return;
        }
      Yt(t, e, i, f);
    }
    function $y(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Yt(t, e, i, f);
    }
    function Wy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Z(i, a), e === "" + i)
              return;
        }
      Yt(t, e, i, f);
    }
    function av(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Z(i, t), e === "" + i))
              return;
        }
      Yt(t, e, i, f);
    }
    function vt(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Z(i, t), a = to("" + i), e === a)
              return;
        }
      Yt(t, e, i, f);
    }
    function zt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ki(t)) {
        for (var v in a)
          if (a.hasOwnProperty(v)) {
            var b = a[v];
            if (b != null) {
              if (Fa.hasOwnProperty(v))
                typeof b != "function" && Ja(v, b);
              else if (a.suppressHydrationWarning !== !0)
                switch (v) {
                  case "children":
                    typeof b != "string" && typeof b != "number" || Yt(
                      "children",
                      e.textContent,
                      b,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = Sd(e, b), Yt(
                      v,
                      d,
                      b,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(v), ky(e, b, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(v.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      v
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = we(
                      e,
                      "class",
                      b
                    ), Yt(
                      "className",
                      d,
                      b,
                      o
                    );
                    continue;
                  default:
                    i.context === Vc && t !== "svg" && t !== "math" ? f.delete(v.toLowerCase()) : f.delete(v), d = we(
                      e,
                      v,
                      b
                    ), Yt(
                      v,
                      d,
                      b,
                      o
                    );
                }
            }
          }
      } else
        for (b in a)
          if (a.hasOwnProperty(b) && (v = a[b], v != null)) {
            if (Fa.hasOwnProperty(b))
              typeof v != "function" && Ja(b, v);
            else if (a.suppressHydrationWarning !== !0)
              switch (b) {
                case "children":
                  typeof v != "string" && typeof v != "number" || Yt(
                    "children",
                    e.textContent,
                    v,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = Sd(e, v), d !== v && (o[b] = { __html: d }));
                  continue;
                case "className":
                  Wl(
                    e,
                    b,
                    "class",
                    v,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Wl(
                    e,
                    b,
                    "tabindex",
                    v,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(b), ky(e, v, o);
                  continue;
                case "multiple":
                  f.delete(b), Yt(
                    b,
                    e.multiple,
                    v,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(b), Yt(
                    b,
                    e.muted,
                    v,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Yt(
                    b,
                    e.autofocus,
                    v,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(b), d = e.getAttribute("data"), Yt(
                      b,
                      d,
                      v,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(v !== "" || t === "a" && b === "href" || t === "object" && b === "data")) {
                    console.error(
                      b === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      b,
                      b
                    );
                    continue;
                  }
                  vt(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(b), typeof v == "function") {
                    f.delete(b.toLowerCase()), b === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === KS) {
                    f.delete(b.toLowerCase()), Yt(
                      b,
                      "function",
                      v,
                      o
                    );
                    continue;
                  }
                  vt(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  vt(
                    e,
                    b,
                    "xlink:href",
                    v,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Wy(
                    e,
                    b,
                    "contenteditable",
                    v,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Wy(
                    e,
                    b,
                    "spellcheck",
                    v,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Wy(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  $y(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var Y = d = b, L = o;
                    if (f.delete(Y), h = h.getAttribute(Y), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (v === !1) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (v === !0 && h === "") break e;
                          break;
                        default:
                          if (Z(v, d), h === "" + v)
                            break e;
                      }
                    Yt(
                      d,
                      h,
                      v,
                      L
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, Y = d = b, L = o, f.delete(Y), h = h.getAttribute(Y), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(v) || 1 > v) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(v) || 1 > v) && (Z(v, d), h === "" + v))
                            break e;
                      }
                    Yt(
                      d,
                      h,
                      v,
                      L
                    );
                  }
                  continue;
                case "rowSpan":
                  av(
                    e,
                    b,
                    "rowspan",
                    v,
                    f,
                    o
                  );
                  continue;
                case "start":
                  av(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Wl(
                    e,
                    b,
                    "x-height",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Wl(
                    e,
                    b,
                    "xlink:actuate",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Wl(
                    e,
                    b,
                    "xlink:arcrole",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Wl(
                    e,
                    b,
                    "xlink:role",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Wl(
                    e,
                    b,
                    "xlink:show",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Wl(
                    e,
                    b,
                    "xlink:title",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Wl(
                    e,
                    b,
                    "xlink:type",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Wl(
                    e,
                    b,
                    "xml:base",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Wl(
                    e,
                    b,
                    "xml:lang",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Wl(
                    e,
                    b,
                    "xml:space",
                    v,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  v !== "" || Iv[b] || (Iv[b] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    b
                  )), $y(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
                    h = fs(b), d = !1, i.context === Vc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (Y = b.toLowerCase(), Y = Hc.hasOwnProperty(
                      Y
                    ) && Hc[Y] || null, Y !== null && Y !== b && (d = !0, f.delete(Y)), f.delete(h));
                    e: if (Y = e, L = h, h = v, xe(L))
                      if (Y.hasAttribute(L))
                        Y = Y.getAttribute(
                          L
                        ), Z(
                          h,
                          L
                        ), h = Y === "" + h ? h : Y;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (Y = L.toLowerCase().slice(0, 5), Y !== "data-" && Y !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Yt(
                      b,
                      h,
                      v,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ti(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Ie(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Pe(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function gt(e) {
      switch (e) {
        case Wo:
          return Th;
        case Hr:
          return tg;
        default:
          return Vc;
      }
    }
    function sa(e, t) {
      if (e === Vc)
        switch (t) {
          case "svg":
            return Th;
          case "math":
            return tg;
          default:
            return Vc;
        }
      return e === Th && t === "foreignObject" ? Vc : e;
    }
    function Wn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Uo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === U0 ? !1 : (U0 = e, !0) : (U0 = null, !1);
    }
    function Fy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function xu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function kt(e, t, a, i) {
      lv(e, t, a, i), e[ma] = i;
    }
    function Nu(e) {
      Zi(e, "");
    }
    function Ac(e, t, a) {
      e.nodeValue = a;
    }
    function Fn(e) {
      return e === "head";
    }
    function ka(e, t) {
      e.removeChild(t);
    }
    function _o(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Co(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === eg) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & kS && Bo(d.documentElement), a & $S && Bo(d.body), a & WS)
                for (a = d.head, Bo(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, v = d.nodeName;
                  d[Ko] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), zc(t);
              return;
            }
            o--;
          } else
            a === Pv || a === Lc || a === cp ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      zc(t);
    }
    function da(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Iy(e) {
      e.nodeValue = "";
    }
    function Py(e, t) {
      t = t[FS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Td(e, t) {
      e.nodeValue = t;
    }
    function Ho(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ho(a), tn(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ei(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ko])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Z(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Cl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function _l(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Cl(e.nextSibling), e === null)) return null;
      return e;
    }
    function In(e) {
      return e.data === cp || e.data === Lc && e.ownerDocument.readyState === h1;
    }
    function xo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Lc || a.readyState === h1)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Cl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Pv || t === cp || t === Lc || t === D0 || t === d1)
            break;
          if (t === eg) return null;
        }
      }
      return e;
    }
    function Ed(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Jy(f.name)] = f.name.toLowerCase() === "style" ? Ec(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ad(e, t, a) {
      return a === null || a[JS] !== !0 ? (e.nodeValue === t ? e = null : (t = Ul(t), e = Ul(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function em(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === eg) {
            if (t === 0)
              return Cl(e.nextSibling);
            t--;
          } else
            a !== Pv && a !== cp && a !== Lc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function No(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Pv || a === cp || a === Lc) {
            if (t === 0) return e;
            t--;
          } else a === eg && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function tm(e) {
      zc(e);
    }
    function Da(e) {
      zc(e);
    }
    function lm(e, t, a, i, o) {
      switch (o && os(e, i.ancestorInfo), t = Pe(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function za(e, t, a, i) {
      if (!a[Ci] && Rl(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Jt(a, e, t), a[Vl] = i, a[ma] = t;
    }
    function Bo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      tn(e);
    }
    function sr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function nv(e, t, a) {
      var i = Eh;
      if (i && typeof t == "string" && t) {
        var o = Sa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), b1.has(o) || (b1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Jt(t, "link", e), D(t), i.head.appendChild(t)));
      }
    }
    function Bu(e, t, a, i) {
      var o = (o = eu.current) ? sr(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Ai(a.href), t = m(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Ai(a.href);
            var f = m(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Wr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Pn(e)
            )) && !f._p && (d.instance = f, d.state.loading = op | hu), !yu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              yu.set(e, h), f || uv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Rc(t) + `
  + ` + Rc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Rc(t) + `
  + ` + Rc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Oc(a), t = m(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Rc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : wu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : wu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : wu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Ai(e) {
      return 'href="' + Sa(e) + '"';
    }
    function Pn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function am(e) {
      return Ze({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function uv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = op : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= op;
      }), t.addEventListener("error", function() {
        return i.loading |= v1;
      }), Jt(t, "link", a), D(t), e.head.appendChild(t));
    }
    function Oc(e) {
      return '[src="' + Sa(e) + '"]';
    }
    function Dc(e) {
      return "script[async]" + e;
    }
    function Rd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Sa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, D(i), i;
            var o = Ze({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), D(i), Jt(i, "style", o), Od(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Ai(a.href);
            var f = e.querySelector(
              Pn(o)
            );
            if (f)
              return t.state.loading |= hu, t.instance = f, D(f), f;
            i = am(a), (o = yu.get(o)) && nm(i, o), f = (e.ownerDocument || e).createElement("link"), D(f);
            var d = f;
            return d._p = new Promise(function(h, v) {
              d.onload = h, d.onerror = v;
            }), Jt(f, "link", i), t.state.loading |= hu, Od(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Oc(a.src), (o = e.querySelector(
              Dc(f)
            )) ? (t.instance = o, D(o), o) : (i = a, (o = yu.get(f)) && (i = Ze({}, a), um(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), D(o), Jt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & hu) === Wr && (i = t.instance, t.state.loading |= hu, Od(i, a.precedence, e));
      return t.instance;
    }
    function Od(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function nm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function um(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function im(e, t, a) {
      if (lg === null) {
        var i = /* @__PURE__ */ new Map(), o = lg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = lg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ko] || f[Vl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Wo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function cm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Yo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Th || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Ie(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function dr(e) {
      return !(e.type === "stylesheet" && (e.state.loading & g1) === Wr);
    }
    function iv() {
    }
    function cv(e, t, a) {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = fp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & hu) === Wr) {
        if (t.instance === null) {
          var o = Ai(a.href), f = e.querySelector(
            Pn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = hr.bind(i), e.then(i, i)), t.state.loading |= hu, t.instance = f, D(f);
            return;
          }
          f = e.ownerDocument || e, a = am(a), (o = yu.get(o)) && nm(a, o), f = f.createElement("link"), D(f);
          var d = f;
          d._p = new Promise(function(h, v) {
            d.onload = h, d.onerror = v;
          }), Jt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & g1) === Wr && (i.count++, t = hr.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function ov() {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = fp;
      return e.stylesheets && e.count === 0 && Dd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Dd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function hr() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Dd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Dd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, ag = /* @__PURE__ */ new Map(), t.forEach(fv, e), ag = null, hr.call(e));
    }
    function fv(e, t) {
      if (!(t.state.loading & hu)) {
        var a = ag.get(e);
        if (a) var i = a.get(C0);
        else {
          a = /* @__PURE__ */ new Map(), ag.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(C0, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(C0, o), a.set(d, o), this.count++, i = hr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= hu;
      }
    }
    function zd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = $r, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jc(0), this.hiddenUpdates = Jc(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function om(e, t, a, i, o, f, d, h, v, b, Y, L) {
      return e = new zd(
        e,
        t,
        a,
        d,
        h,
        v,
        b,
        L
      ), t = AS, f === !0 && (t |= va | Xu), Wt && (t |= Il), f = M(3, null, null, t), e.current = f, f.stateNode = e, t = Cf(), tc(t), e.pooledCache = t, tc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, na(f), e;
    }
    function fm(e) {
      return e ? (e = Fo, e) : Fo;
    }
    function bt(e, t, a, i, o, f) {
      if (Hl && typeof Hl.onScheduleFiberRoot == "function")
        try {
          Hl.onScheduleFiberRoot(Ui, i, a);
        } catch (d) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(t), o = fm(o), i.context === null ? i.context = o : i.pendingContext = o, pa && Ua !== null && !A1 && (A1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        re(Ua) || "Unknown"
      )), i = Hn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = rn(e, i, t), a !== null && (Zt(a, e, t), oi(a, e, t));
    }
    function Md(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function rm(e, t) {
      Md(e, t), (e = e.alternate) && Md(e, t);
    }
    function sm(e) {
      if (e.tag === 13) {
        var t = aa(e, 67108864);
        t !== null && Zt(t, e, 67108864), rm(e, 67108864);
      }
    }
    function Og() {
      return Ua;
    }
    function Dg() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = df(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function zg(e, t, a, i) {
      var o = j.T;
      j.T = null;
      var f = Ue.p;
      try {
        Ue.p = xl, Ri(e, t, a, i);
      } finally {
        Ue.p = f, j.T = o;
      }
    }
    function Ud(e, t, a, i) {
      var o = j.T;
      j.T = null;
      var f = Ue.p;
      try {
        Ue.p = bn, Ri(e, t, a, i);
      } finally {
        Ue.p = f, j.T = o;
      }
    }
    function Ri(e, t, a, i) {
      if (ug) {
        var o = yr(i);
        if (o === null)
          kl(
            e,
            t,
            i,
            ig,
            a
          ), Oi(e, i);
        else if (mr(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Oi(e, i), t & 4 && -1 < tT.indexOf(e)) {
          for (; o !== null; ) {
            var f = Rl(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Pt(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var v = 1 << 31 - Ll(d);
                        h.entanglements[1] |= v, d &= ~v;
                      }
                      Ka(f), (St & (xa | Ju)) === Sn && (Xv = tu() + t1, Sc(0));
                    }
                  }
                  break;
                case 13:
                  h = aa(f, 2), h !== null && Zt(h, f, 2), gc(), rm(f, 2);
              }
            if (f = yr(i), f === null && kl(
              e,
              t,
              i,
              ig,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          kl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function yr(e) {
      return e = Ji(e), qo(e);
    }
    function qo(e) {
      if (ig = null, e = la(e), e !== null) {
        var t = He(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Tt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ig = e, null;
    }
    function _d(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return xl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return bn;
        case "message":
          switch (Mi()) {
            case Bd:
              return xl;
            case Rr:
              return bn;
            case Xo:
            case Hg:
              return Gu;
            case Or:
              return jd;
            default:
              return Gu;
          }
        default:
          return Gu;
      }
    }
    function Oi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          of = null;
          break;
        case "dragenter":
        case "dragleave":
          ff = null;
          break;
        case "mouseover":
        case "mouseout":
          rf = null;
          break;
        case "pointerover":
        case "pointerout":
          sp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          dp.delete(t.pointerId);
      }
    }
    function ha(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Rl(t), t !== null && sm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function mr(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return of = ha(
            of,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return ff = ha(
            ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return rf = ha(
            rf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return sp.set(
            f,
            ha(
              sp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, dp.set(
            f,
            ha(
              dp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function rv(e) {
      var t = la(e.target);
      if (t !== null) {
        var a = He(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Tt(a), t !== null) {
              e.blockedOn = t, $c(e.priority, function() {
                if (a.tag === 13) {
                  var i = ra(a);
                  i = El(i);
                  var o = aa(
                    a,
                    i
                  );
                  o !== null && Zt(o, a, i), rm(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function pr(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = yr(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          r !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = o, a.target.dispatchEvent(i), r === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = null;
        } else
          return t = Rl(a), t !== null && sm(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function dm(e, t, a) {
      pr(e) && a.delete(t);
    }
    function sv() {
      H0 = !1, of !== null && pr(of) && (of = null), ff !== null && pr(ff) && (ff = null), rf !== null && pr(rf) && (rf = null), sp.forEach(dm), dp.forEach(dm);
    }
    function vr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, H0 || (H0 = !0, $t.unstable_scheduleCallback(
        $t.unstable_NormalPriority,
        sv
      )));
    }
    function dv(e) {
      cg !== e && (cg = e, $t.unstable_scheduleCallback(
        $t.unstable_NormalPriority,
        function() {
          cg === e && (cg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (qo(i || a) === null)
                continue;
              break;
            }
            var f = Rl(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), cc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function zc(e) {
      function t(v) {
        return vr(v, e);
      }
      of !== null && vr(of, e), ff !== null && vr(ff, e), rf !== null && vr(rf, e), sp.forEach(t), dp.forEach(t);
      for (var a = 0; a < sf.length; a++) {
        var i = sf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < sf.length && (a = sf[0], a.blockedOn === null); )
        rv(a), a.blockedOn === null && sf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ma] || null;
          if (typeof f == "function")
            d || dv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ma] || null)
                h = d.formAction;
              else if (qo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), dv(a);
          }
        }
    }
    function Cd(e) {
      this._internalRoot = e;
    }
    function gr(e) {
      this._internalRoot = e;
    }
    function hv(e) {
      e[Ci] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var $t = W1(), br = Ah(), Mg = F1(), Ze = Object.assign, Sr = Symbol.for("react.element"), Di = Symbol.for("react.transitional.element"), Mc = Symbol.for("react.portal"), Ge = Symbol.for("react.fragment"), wo = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), hm = Symbol.for("react.provider"), Hd = Symbol.for("react.consumer"), $a = Symbol.for("react.context"), Yu = Symbol.for("react.forward_ref"), Go = Symbol.for("react.suspense"), zi = Symbol.for("react.suspense_list"), Tr = Symbol.for("react.memo"), Ma = Symbol.for("react.lazy"), ym = Symbol.for("react.activity"), yv = Symbol.for("react.memo_cache_sentinel"), mm = Symbol.iterator, xd = Symbol.for("react.client.reference"), Ne = Array.isArray, j = br.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Mg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ug = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Er = [], Ar = [], Wa = -1, qu = Mt(null), Lo = Mt(null), eu = Mt(null), Vo = Mt(null), wu = Object.prototype.hasOwnProperty, Nd = $t.unstable_scheduleCallback, _g = $t.unstable_cancelCallback, mv = $t.unstable_shouldYield, Cg = $t.unstable_requestPaint, tu = $t.unstable_now, Mi = $t.unstable_getCurrentPriorityLevel, Bd = $t.unstable_ImmediatePriority, Rr = $t.unstable_UserBlockingPriority, Xo = $t.unstable_NormalPriority, Hg = $t.unstable_LowPriority, Or = $t.unstable_IdlePriority, xg = $t.log, gn = $t.unstable_setDisableYieldValue, Ui = null, Hl = null, ce = null, ya = !1, Wt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ll = Math.clz32 ? Math.clz32 : Kc, Yd = Math.log, ju = Math.LN2, qd = 256, wd = 4194304, xl = 2, bn = 8, Gu = 32, jd = 268435456, _i = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + _i, ma = "__reactProps$" + _i, Ci = "__reactContainer$" + _i, pm = "__reactEvents$" + _i, pv = "__reactListeners$" + _i, Qo = "__reactHandles$" + _i, Zo = "__reactResources$" + _i, Ko = "__reactMarker$" + _i, vv = /* @__PURE__ */ new Set(), Fa = {}, Uc = {}, gv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Gd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ld = {}, Vd = {}, Hi = 0, vm, gm, bv, bm, Jo, Sv, Tv;
    an.__reactDisabledLog = !0;
    var Sm, Dr, ko = !1, zr = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ua = null, pa = !1, Ng = /[\n"\\]/g, Tm = !1, Em = !1, Am = !1, Rm = !1, Xd = !1, Om = !1, Mr = ["value", "defaultValue"], Ev = !1, Av = /["'&<>\n\t]|^\s|\s$/, Dm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Qd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Zd = Qd.concat(["button"]), zm = "dd dt li option optgroup p rp rt".split(" "), Mm = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, $o = {}, lu = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Lu = /([A-Z])/g, Vu = /^ms-/, Ur = /^(?:webkit|moz|o)[A-Z]/, _r = /^-ms-/, xi = /-(.)/g, Rv = /;\s*$/, _c = {}, Cc = {}, Ov = !1, Um = !1, Cr = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Hr = "http://www.w3.org/1998/Math/MathML", Wo = "http://www.w3.org/2000/svg", Kd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Hc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, _m = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, au = {}, Cm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Jd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hm = !1, Fl = {}, xr = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, r = null, s = null, y = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = !1;
    if (S)
      try {
        var Q = {};
        Object.defineProperty(Q, "passive", {
          get: function() {
            C = !0;
          }
        }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
      } catch {
        C = !1;
      }
    var k = null, N = null, q = null, Se = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Te = Dl(Se), dt = Ze({}, Se, { view: 0, detail: 0 }), z = Dl(dt), R, _, K, fe = Ze({}, dt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ds,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== K && (K && e.type === "mousemove" ? (R = e.screenX - K.screenX, _ = e.screenY - K.screenY) : _ = R = 0, K = e), R);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : _;
      }
    }), Je = Dl(fe), ve = Ze({}, fe, { dataTransfer: 0 }), Oe = Dl(ve), bl = Ze({}, dt, { relatedTarget: 0 }), ot = Dl(bl), Ni = Ze({}, Se, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bg = Dl(Ni), I1 = Ze({}, Se, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), P1 = Dl(I1), eS = Ze({}, Se, { data: 0 }), Y0 = Dl(
      eS
    ), tS = Y0, lS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, aS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, nS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, uS = Ze({}, dt, {
      key: function(e) {
        if (e.key) {
          var t = lS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? aS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ds,
      charCode: function(e) {
        return e.type === "keypress" ? lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), iS = Dl(uS), cS = Ze({}, fe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), q0 = Dl(cS), oS = Ze({}, dt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ds
    }), fS = Dl(oS), rS = Ze({}, Se, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), sS = Dl(rS), dS = Ze({}, fe, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), hS = Dl(dS), yS = Ze({}, Se, {
      newState: 0,
      oldState: 0
    }), mS = Dl(yS), pS = [9, 13, 27, 32], w0 = 229, Yg = S && "CompositionEvent" in window, xm = null;
    S && "documentMode" in document && (xm = document.documentMode);
    var vS = S && "TextEvent" in window && !xm, j0 = S && (!Yg || xm && 8 < xm && 11 >= xm), G0 = 32, L0 = String.fromCharCode(G0), V0 = !1, kd = !1, gS = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Nm = null, Bm = null, X0 = !1;
    S && (X0 = xh("input") && (!document.documentMode || 9 < document.documentMode));
    var _a = typeof Object.is == "function" ? Object.is : Tg, bS = S && "documentMode" in document && 11 >= document.documentMode, $d = null, qg = null, Ym = null, wg = !1, Wd = {
      animationend: Su("Animation", "AnimationEnd"),
      animationiteration: Su("Animation", "AnimationIteration"),
      animationstart: Su("Animation", "AnimationStart"),
      transitionrun: Su("Transition", "TransitionRun"),
      transitionstart: Su("Transition", "TransitionStart"),
      transitioncancel: Su("Transition", "TransitionCancel"),
      transitionend: Su("Transition", "TransitionEnd")
    }, jg = {}, Q0 = {};
    S && (Q0 = document.createElement("div").style, "AnimationEvent" in window || (delete Wd.animationend.animation, delete Wd.animationiteration.animation, delete Wd.animationstart.animation), "TransitionEvent" in window || delete Wd.transitionend.transition);
    var Z0 = Wi("animationend"), K0 = Wi("animationiteration"), J0 = Wi("animationstart"), SS = Wi("transitionrun"), TS = Wi("transitionstart"), ES = Wi("transitioncancel"), k0 = Wi("transitionend"), $0 = /* @__PURE__ */ new Map(), Gg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Gg.push("scrollEnd");
    var Lg = /* @__PURE__ */ new WeakMap(), Dv = 1, xc = 2, nu = [], Fd = 0, Vg = 0, Fo = {};
    Object.freeze(Fo);
    var uu = null, Id = null, qt = 0, AS = 1, Il = 2, va = 8, Xu = 16, W0 = 64, F0 = !1;
    try {
      var I0 = Object.preventExtensions({});
    } catch {
      F0 = !0;
    }
    var Pd = [], eh = 0, zv = null, Mv = 0, iu = [], cu = 0, Nr = null, Nc = 1, Bc = "", Ca = null, ll = null, ht = !1, Yc = !1, ou = null, Br = null, Bi = !1, Xg = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), P0 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var RS = performance, eb = function() {
        return RS.now();
      };
    else {
      var OS = Date;
      eb = function() {
        return OS.now();
      };
    }
    var Qg = Mt(null), Zg = Mt(null), tb = {}, Uv = null, th = null, lh = !1, DS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, zS = $t.unstable_scheduleCallback, MS = $t.unstable_NormalPriority, Nl = {
      $$typeof: $a,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, ah = $t.unstable_now, lb = -0, _v = -0, Ia = -1.1, Yr = -0, Cv = !1, Hv = !1, qm = null, Kg = 0, qr = 0, nh = null, ab = j.S;
    j.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Yp(e, t), ab !== null && ab(e, t);
    };
    var wr = Mt(null), Qu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, wm = [], jm = [], Gm = [], Lm = [], Vm = [], Xm = [], jr = /* @__PURE__ */ new Set();
    Qu.recordUnsafeLifecycleWarnings = function(e, t) {
      jr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && wm.push(e), e.mode & va && typeof t.UNSAFE_componentWillMount == "function" && jm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gm.push(e), e.mode & va && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vm.push(e), e.mode & va && typeof t.UNSAFE_componentWillUpdate == "function" && Xm.push(e));
    }, Qu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < wm.length && (wm.forEach(function(h) {
        e.add(
          re(h) || "Component"
        ), jr.add(h.type);
      }), wm = []);
      var t = /* @__PURE__ */ new Set();
      0 < jm.length && (jm.forEach(function(h) {
        t.add(
          re(h) || "Component"
        ), jr.add(h.type);
      }), jm = []);
      var a = /* @__PURE__ */ new Set();
      0 < Gm.length && (Gm.forEach(function(h) {
        a.add(
          re(h) || "Component"
        ), jr.add(h.type);
      }), Gm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Lm.length && (Lm.forEach(
        function(h) {
          i.add(
            re(h) || "Component"
          ), jr.add(h.type);
        }
      ), Lm = []);
      var o = /* @__PURE__ */ new Set();
      0 < Vm.length && (Vm.forEach(function(h) {
        o.add(
          re(h) || "Component"
        ), jr.add(h.type);
      }), Vm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Xm.length && (Xm.forEach(function(h) {
        f.add(
          re(h) || "Component"
        ), jr.add(h.type);
      }), Xm = []), 0 < t.size) {
        var d = $(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = $(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = $(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = $(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = $(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = $(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var xv = /* @__PURE__ */ new Map(), nb = /* @__PURE__ */ new Set();
    Qu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & va && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !nb.has(e.type) && (i = xv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], xv.set(a, i)), i.push(e));
    }, Qu.flushLegacyContextWarning = function() {
      xv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(re(o) || "Component"), nb.add(o.type);
          });
          var i = $(a);
          se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Qu.discardPendingWarnings = function() {
      wm = [], jm = [], Gm = [], Lm = [], Vm = [], Xm = [], xv = /* @__PURE__ */ new Map();
    };
    var Qm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), ub = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Nv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Jg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Zm = null, Bv = !1, fu = 0, ru = 1, Ha = 2, Pl = 4, Bl = 8, ib = 0, cb = 1, ob = 2, kg = 3, Io = !1, fb = !1, $g = null, Wg = !1, uh = Mt(null), Yv = Mt(0), ih, rb = /* @__PURE__ */ new Set(), sb = /* @__PURE__ */ new Set(), Fg = /* @__PURE__ */ new Set(), db = /* @__PURE__ */ new Set(), Po = 0, Be = null, _t = null, Sl = null, qv = !1, ch = !1, Gr = !1, wv = 0, Km = 0, qc = null, US = 0, _S = 25, G = null, su = null, wc = -1, Jm = !1, jv = {
      readContext: Ct,
      use: Nn,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt
    }, Ig = null, hb = null, Pg = null, yb = null, Yi = null, Zu = null, Gv = null;
    Ig = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", Ke(), ja(t), Gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Ke(), Ct(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Ke(), ja(t), Ds(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Ke(), ja(a), Ms(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Ke(), ja(t), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Ke(), ja(t), zs(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Ke(), ja(t);
        var a = j.H;
        j.H = Yi;
        try {
          return Us(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Ke();
        var i = j.H;
        j.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Ke(), jf(e);
      },
      useState: function(e) {
        G = "useState", Ke();
        var t = j.H;
        j.H = Yi;
        try {
          return Ou(e);
        } finally {
          j.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Ke();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Ke(), _s(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Ke(), wn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Ke(), Ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Ke(), jn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Ke(), oo(), mo(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Ke(), mo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Ke(), hn(e);
      },
      useHostTransitionStatus: ca,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ke(), oc();
      }
    }, hb = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", ee(), Gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ee(), Ct(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", ee(), Ds(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", ee(), Ms(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", ee(), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ee(), zs(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ee();
        var a = j.H;
        j.H = Yi;
        try {
          return Us(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", ee();
        var i = j.H;
        j.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", ee(), jf(e);
      },
      useState: function(e) {
        G = "useState", ee();
        var t = j.H;
        j.H = Yi;
        try {
          return Ou(e);
        } finally {
          j.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", ee(), _s(e, t);
      },
      useTransition: function() {
        return G = "useTransition", ee(), wn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", ee(), Ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", ee(), jn();
      },
      useActionState: function(e, t) {
        return G = "useActionState", ee(), mo(e, t);
      },
      useFormState: function(e, t) {
        return G = "useFormState", ee(), oo(), mo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", ee(), hn(e);
      },
      useHostTransitionStatus: ca,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), oc();
      }
    }, Pg = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ee(), Ct(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", ee(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ee();
        var a = j.H;
        j.H = Zu;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", ee();
        var i = j.H;
        j.H = Zu;
        try {
          return La(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", ee(), ut().memoizedState;
      },
      useState: function() {
        G = "useState", ee();
        var e = j.H;
        j.H = Zu;
        try {
          return La(rt);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", ee(), Lf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", ee(), xs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", ee(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", ee(), ut().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", ee(), oo(), Os(e);
      },
      useActionState: function(e) {
        return G = "useActionState", ee(), Os(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", ee(), Du(e, t);
      },
      useHostTransitionStatus: ca,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), ut().memoizedState;
      }
    }, yb = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ee(), Ct(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", ee(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ee();
        var a = j.H;
        j.H = Gv;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", ee();
        var i = j.H;
        j.H = Gv;
        try {
          return uc(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", ee(), ut().memoizedState;
      },
      useState: function() {
        G = "useState", ee();
        var e = j.H;
        j.H = Gv;
        try {
          return uc(rt);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", ee(), Cs(e, t);
      },
      useTransition: function() {
        return G = "useTransition", ee(), Ns();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", ee(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", ee(), ut().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", ee(), oo(), po(e);
      },
      useActionState: function(e) {
        return G = "useActionState", ee(), po(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", ee(), Rs(e, t);
      },
      useHostTransitionStatus: ca,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), ut().memoizedState;
      }
    }, Yi = {
      readContext: function(e) {
        return J(), Ct(e);
      },
      use: function(e) {
        return w(), Nn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", w(), Ke(), Gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", w(), Ke(), Ct(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", w(), Ke(), Ds(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", w(), Ke(), Ms(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", w(), Ke(), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", w(), Ke(), zs(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", w(), Ke();
        var a = j.H;
        j.H = Yi;
        try {
          return Us(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", w(), Ke();
        var i = j.H;
        j.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", w(), Ke(), jf(e);
      },
      useState: function(e) {
        G = "useState", w(), Ke();
        var t = j.H;
        j.H = Yi;
        try {
          return Ou(e);
        } finally {
          j.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", w(), Ke();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", w(), Ke(), _s(e, t);
      },
      useTransition: function() {
        return G = "useTransition", w(), Ke(), wn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", w(), Ke(), Ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", w(), Ke(), jn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", w(), Ke(), mo(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", w(), Ke(), mo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", w(), Ke(), hn(e);
      },
      useMemoCache: function(e) {
        return w(), It(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ke(), oc();
      }
    }, Zu = {
      readContext: function(e) {
        return J(), Ct(e);
      },
      use: function(e) {
        return w(), Nn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", w(), ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", w(), ee(), Ct(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", w(), ee(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", w(), ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", w(), ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", w(), ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", w(), ee();
        var a = j.H;
        j.H = Zu;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", w(), ee();
        var i = j.H;
        j.H = Zu;
        try {
          return La(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", w(), ee(), ut().memoizedState;
      },
      useState: function() {
        G = "useState", w(), ee();
        var e = j.H;
        j.H = Zu;
        try {
          return La(rt);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", w(), ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", w(), ee(), Lf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", w(), ee(), xs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", w(), ee(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", w(), ee(), ut().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", w(), ee(), Os(e);
      },
      useActionState: function(e) {
        return G = "useActionState", w(), ee(), Os(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", w(), ee(), Du(e, t);
      },
      useMemoCache: function(e) {
        return w(), It(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), ut().memoizedState;
      }
    }, Gv = {
      readContext: function(e) {
        return J(), Ct(e);
      },
      use: function(e) {
        return w(), Nn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", w(), ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", w(), ee(), Ct(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", w(), ee(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", w(), ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", w(), ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", w(), ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", w(), ee();
        var a = j.H;
        j.H = Zu;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", w(), ee();
        var i = j.H;
        j.H = Zu;
        try {
          return uc(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", w(), ee(), ut().memoizedState;
      },
      useState: function() {
        G = "useState", w(), ee();
        var e = j.H;
        j.H = Zu;
        try {
          return uc(rt);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", w(), ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", w(), ee(), Cs(e, t);
      },
      useTransition: function() {
        return G = "useTransition", w(), ee(), Ns();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", w(), ee(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", w(), ee(), ut().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", w(), ee(), po(e);
      },
      useActionState: function(e) {
        return G = "useActionState", w(), ee(), po(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", w(), ee(), Rs(e, t);
      },
      useMemoCache: function(e) {
        return w(), It(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), ut().memoizedState;
      }
    };
    var mb = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = pa;
        pa = !0;
        try {
          return e(t, a);
        } finally {
          pa = i;
        }
      }
    }, e0 = mb.react_stack_bottom_frame.bind(mb), pb = {
      react_stack_bottom_frame: function(e) {
        var t = pa;
        pa = !0;
        try {
          return e.render();
        } finally {
          pa = t;
        }
      }
    }, vb = pb.react_stack_bottom_frame.bind(pb), gb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Re(e, e.return, a);
        }
      }
    }, t0 = gb.react_stack_bottom_frame.bind(
      gb
    ), bb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Re(e, e.return, f);
        }
      }
    }, Sb = bb.react_stack_bottom_frame.bind(
      bb
    ), Tb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, CS = Tb.react_stack_bottom_frame.bind(
      Tb
    ), Eb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Re(e, t, i);
        }
      }
    }, Ab = Eb.react_stack_bottom_frame.bind(
      Eb
    ), Rb = {
      react_stack_bottom_frame: function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, HS = Rb.react_stack_bottom_frame.bind(Rb), Ob = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Re(e, t, i);
        }
      }
    }, xS = Ob.react_stack_bottom_frame.bind(Ob), Db = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ef = Db.react_stack_bottom_frame.bind(Db), oh = null, km = 0, ke = null, l0, zb = l0 = !1, Mb = {}, Ub = {}, _b = {};
    yt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = re(e), o = i || "null";
        if (!Mb[o]) {
          Mb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = re(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = re(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var fh = Zf(!0), Cb = Zf(!1), du = Mt(null), qi = null, rh = 1, $m = 2, Yl = Mt(0), Hb = {}, xb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), qb = /* @__PURE__ */ new Set(), wb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Gb = /* @__PURE__ */ new Set(), Lb = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set();
    Object.freeze(Hb);
    var a0 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = Hn(i);
        o.payload = t, a != null && (sy(a), o.callback = a), t = rn(e, o, i), t !== null && (Zt(t, e, i), oi(t, e, i)), Rn(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = Hn(i);
        o.tag = cb, o.payload = t, a != null && (sy(a), o.callback = a), t = rn(e, o, i), t !== null && (Zt(t, e, i), oi(t, e, i)), Rn(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ra(e), i = Hn(a);
        i.tag = ob, t != null && (sy(t), i.callback = t), t = rn(e, i, a), t !== null && (Zt(t, e, a), oi(t, e, a)), ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, a);
      }
    }, n0 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, sh = null, u0 = null, Xb = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xl = !1, Qb = {}, Zb = {}, Kb = {}, Jb = {}, dh = !1, kb = {}, i0 = {}, c0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, $b = !1, Wb = null;
    Wb = /* @__PURE__ */ new Set();
    var jc = !1, sl = !1, o0 = !1, Fb = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, hh = null, yh = null, Tl = null, Pa = !1, Ku = null, Wm = 8192, NS = {
      getCacheForType: function(e) {
        var t = Ct(Nl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Ua;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Fm = Symbol.for;
      Fm("selector.component"), Fm("selector.has_pseudo_class"), Fm("selector.role"), Fm("selector.test_id"), Fm("selector.text");
    }
    var BS = [], YS = typeof WeakMap == "function" ? WeakMap : Map, Sn = 0, xa = 2, Ju = 4, Gc = 0, Im = 1, mh = 2, f0 = 3, Lr = 4, Lv = 6, Ib = 5, St = Sn, Ht = null, et = null, lt = 0, en = 0, Pm = 1, Vr = 2, ep = 3, Pb = 4, r0 = 5, ph = 6, tp = 7, s0 = 8, Xr = 9, Rt = en, Tn = null, tf = !1, vh = !1, d0 = !1, wi = 0, al = Gc, lf = 0, af = 0, h0 = 0, En = 0, Qr = 0, lp = null, Na = null, Vv = !1, y0 = 0, e1 = 300, Xv = 1 / 0, t1 = 500, ap = null, nf = null, qS = 0, wS = 1, jS = 2, Zr = 0, l1 = 1, a1 = 2, n1 = 3, GS = 4, m0 = 5, ea = 0, uf = null, gh = null, cf = 0, p0 = 0, v0 = null, u1 = null, LS = 50, np = 0, g0 = null, b0 = !1, Qv = !1, VS = 50, Kr = 0, up = null, bh = !1, Zv = null, i1 = !1, c1 = /* @__PURE__ */ new Set(), XS = {}, Kv = null, Sh = null, S0 = !1, T0 = !1, Jv = !1, E0 = !1, Jr = 0, A0 = {};
    (function() {
      for (var e = 0; e < Gg.length; e++) {
        var t = Gg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), nn(a, "on" + t);
      }
      nn(Z0, "onAnimationEnd"), nn(K0, "onAnimationIteration"), nn(J0, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(SS, "onTransitionRun"), nn(TS, "onTransitionStart"), nn(ES, "onTransitionCancel"), nn(k0, "onTransitionEnd");
    })(), ne("onMouseEnter", ["mouseout", "mouseover"]), ne("onMouseLeave", ["mouseout", "mouseover"]), ne("onPointerEnter", ["pointerout", "pointerover"]), ne("onPointerLeave", ["pointerout", "pointerover"]), te(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), te(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), te("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), te(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), te(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), te(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ip = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), R0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ip)
    ), kv = "_reactListening" + Math.random().toString(36).slice(2), o1 = !1, f1 = !1, $v = !1, r1 = !1, Wv = !1, Fv = !1, s1 = !1, Iv = {}, QS = /\r\n?/g, ZS = /\u0000|\uFFFD/g, kr = "http://www.w3.org/1999/xlink", O0 = "http://www.w3.org/XML/1998/namespace", KS = "javascript:throw new Error('React form unexpectedly submitted.')", JS = "suppressHydrationWarning", Pv = "$", eg = "/$", Lc = "$?", cp = "$!", kS = 1, $S = 2, WS = 4, D0 = "F!", d1 = "F", h1 = "complete", FS = "style", Vc = 0, Th = 1, tg = 2, z0 = null, M0 = null, y1 = { dialog: !0, webview: !0 }, U0 = null, m1 = typeof setTimeout == "function" ? setTimeout : void 0, IS = typeof clearTimeout == "function" ? clearTimeout : void 0, $r = -1, p1 = typeof Promise == "function" ? Promise : void 0, PS = typeof queueMicrotask == "function" ? queueMicrotask : typeof p1 < "u" ? function(e) {
      return p1.resolve(null).then(e).catch(Fy);
    } : m1, _0 = null, Wr = 0, op = 1, v1 = 2, g1 = 3, hu = 4, yu = /* @__PURE__ */ new Map(), b1 = /* @__PURE__ */ new Set(), Xc = Ue.d;
    Ue.d = {
      f: function() {
        var e = Xc.f(), t = gc();
        return e || t;
      },
      r: function(e) {
        var t = Rl(e);
        t !== null && t.tag === 5 && t.type === "form" ? oy(t) : Xc.r(e);
      },
      D: function(e) {
        Xc.D(e), nv("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Xc.C(e, t), nv("preconnect", e, t);
      },
      L: function(e, t, a) {
        Xc.L(e, t, a);
        var i = Eh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Sa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Sa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Sa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Sa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Ai(e);
              break;
            case "script":
              f = Oc(e);
          }
          yu.has(f) || (e = Ze(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), yu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Pn(f)
          ) || t === "script" && i.querySelector(Dc(f)) || (t = i.createElement("link"), Jt(t, "link", e), D(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Xc.m(e, t);
        var a = Eh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Sa(i) + '"][href="' + Sa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Oc(e);
          }
          if (!yu.has(f) && (e = Ze({ rel: "modulepreload", href: e }, t), yu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Dc(f)))
                  return;
            }
            i = a.createElement("link"), Jt(i, "link", e), D(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Xc.X(e, t);
        var a = Eh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Oc(e), f = i.get(o);
          f || (f = a.querySelector(
            Dc(o)
          ), f || (e = Ze({ src: e, async: !0 }, t), (t = yu.get(o)) && um(e, t), f = a.createElement("script"), D(f), Jt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Xc.S(e, t, a);
        var i = Eh;
        if (i && e) {
          var o = m(i).hoistableStyles, f = Ai(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Wr, preload: null };
            if (d = i.querySelector(
              Pn(f)
            ))
              h.loading = op | hu;
            else {
              e = Ze(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = yu.get(f)) && nm(e, a);
              var v = d = i.createElement("link");
              D(v), Jt(v, "link", e), v._p = new Promise(function(b, Y) {
                v.onload = b, v.onerror = Y;
              }), v.addEventListener("load", function() {
                h.loading |= op;
              }), v.addEventListener("error", function() {
                h.loading |= v1;
              }), h.loading |= hu, Od(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Xc.M(e, t);
        var a = Eh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Oc(e), f = i.get(o);
          f || (f = a.querySelector(
            Dc(o)
          ), f || (e = Ze({ src: e, async: !0, type: "module" }, t), (t = yu.get(o)) && um(e, t), f = a.createElement("script"), D(f), Jt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Eh = typeof document > "u" ? null : document, lg = null, fp = null, C0 = null, ag = null, Fr = Ug, rp = {
      $$typeof: $a,
      Provider: null,
      Consumer: null,
      _currentValue: Fr,
      _currentValue2: Fr,
      _threadCount: 0
    }, S1 = "%c%s%c ", T1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", E1 = "", ng = " ", eT = Function.prototype.bind, A1 = !1, R1 = null, O1 = null, D1 = null, z1 = null, M1 = null, U1 = null, _1 = null, C1 = null, H1 = null;
    R1 = function(e, t, a, i) {
      t = x(e, t), t !== null && (a = F(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = aa(e, 2), a !== null && Zt(a, e, 2));
    }, O1 = function(e, t, a) {
      t = x(e, t), t !== null && (a = Ee(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = aa(e, 2), a !== null && Zt(a, e, 2));
    }, D1 = function(e, t, a, i) {
      t = x(e, t), t !== null && (a = ge(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = aa(e, 2), a !== null && Zt(a, e, 2));
    }, z1 = function(e, t, a) {
      e.pendingProps = F(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Zt(t, e, 2);
    }, M1 = function(e, t) {
      e.pendingProps = Ee(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Zt(t, e, 2);
    }, U1 = function(e, t, a) {
      e.pendingProps = ge(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Zt(t, e, 2);
    }, _1 = function(e) {
      var t = aa(e, 2);
      t !== null && Zt(t, e, 2);
    }, C1 = function(e) {
      at = e;
    }, H1 = function(e) {
      Me = e;
    };
    var ug = !0, ig = null, H0 = !1, of = null, ff = null, rf = null, sp = /* @__PURE__ */ new Map(), dp = /* @__PURE__ */ new Map(), sf = [], tT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), cg = null;
    if (gr.prototype.render = Cd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : De(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ra(i);
      bt(i, o, a, t, null, null);
    }, gr.prototype.unmount = Cd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (St & (xa | Ju)) !== Sn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), bt(e.current, 2, null, e, null, null), gc(), t[Ci] = null;
      }
    }, gr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = yf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < sf.length && t !== 0 && t < sf[a].priority; a++) ;
        sf.splice(a, 0, e), a === 0 && rv(e);
      }
    }, (function() {
      var e = br.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ue.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Ft(t), e = e !== null ? Ye(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.1.1"
      };
      return e.overrideHookState = R1, e.overrideHookStateDeletePath = O1, e.overrideHookStateRenamePath = D1, e.overrideProps = z1, e.overridePropsDeletePath = M1, e.overridePropsRenamePath = U1, e.scheduleUpdate = _1, e.setErrorHandler = C1, e.setSuspenseHandler = H1, e.scheduleRefresh = me, e.scheduleRoot = le, e.setRefreshHandler = ct, e.getCurrentFiber = Og, e.getLaneLabelMap = Dg, e.injectProfilingHooks = nl, Ae(e);
    })() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var x1 = window.location.protocol;
      /^(https?|file):$/.test(x1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (x1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    yp.createRoot = function(e, t) {
      if (!De(e))
        throw Error("Target container is not a DOM element.");
      hv(e);
      var a = !1, i = "", o = dy, f = Vp, d = ws, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Di && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = om(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Ci] = t.current, Qy(e), new Cd(t);
    }, yp.hydrateRoot = function(e, t, a) {
      if (!De(e))
        throw Error("Target container is not a DOM element.");
      hv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = dy, d = Vp, h = ws, v = null, b = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks), a.formState !== void 0 && (b = a.formState)), t = om(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        v,
        b
      ), t.context = fm(null), a = t.current, i = ra(a), i = El(i), o = Hn(i), o.callback = null, rn(a, o, i), a = i, t.current.lanes = a, mu(t, a), Ka(t), e[Ci] = t.current, Qy(e), new gr(t);
    }, yp.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), yp;
}
var Z1;
function hT() {
  if (Z1) return fg.exports;
  Z1 = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ("production".NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (F) {
        console.error(F);
      }
    }
  }
  return "production".NODE_ENV === "production" ? (x(), fg.exports = sT()) : fg.exports = dT(), fg.exports;
}
var yT = hT(), mT = Object.defineProperty, pT = (x, F, ge) => F in x ? mT(x, F, { enumerable: !0, configurable: !0, writable: !0, value: ge }) : x[F] = ge, dg = (x, F, ge) => pT(x, typeof F != "symbol" ? F + "" : F, ge);
const vT = {
  stringify: (x) => x ? "true" : "false",
  parse: (x) => /^[ty1-9]/i.test(x)
}, gT = {
  stringify: (x) => x.name,
  parse: (x, F, ge) => {
    const U = (() => {
      if (typeof window < "u" && x in window)
        return window[x];
      if (typeof global < "u" && x in global)
        return global[x];
    })();
    return typeof U == "function" ? U.bind(ge) : void 0;
  }
}, bT = {
  stringify: (x) => JSON.stringify(x),
  parse: (x) => JSON.parse(x)
}, ST = {
  stringify: (x) => `${x}`,
  parse: (x) => parseFloat(x)
}, TT = {
  stringify: (x) => x,
  parse: (x) => x
}, B0 = {
  string: TT,
  number: ST,
  boolean: vT,
  function: gT,
  json: bT
};
function ET(x) {
  return x.replace(
    /([a-z0-9])([A-Z])/g,
    (F, ge, U) => `${ge}-${U.toLowerCase()}`
  );
}
const hg = Symbol.for("r2wc.render"), yg = Symbol.for("r2wc.connected"), Ir = Symbol.for("r2wc.context"), Zc = Symbol.for("r2wc.props");
function AT(x, F, ge) {
  var U, Ee, Me;
  F.props || (F.props = x.propTypes ? Object.keys(x.propTypes) : []), F.events || (F.events = []);
  const at = Array.isArray(F.props) ? F.props.slice() : Object.keys(F.props), yt = Array.isArray(F.events) ? F.events.slice() : Object.keys(F.events), w = {}, J = {}, oe = {}, $ = {};
  for (const le of at) {
    w[le] = Array.isArray(F.props) ? "string" : F.props[le];
    const me = ET(le);
    oe[le] = me, $[me] = le;
  }
  for (const le of yt)
    J[le] = Array.isArray(F.events) ? {} : F.events[le];
  class M extends HTMLElement {
    constructor() {
      super(), dg(this, Me, !0), dg(this, Ee), dg(this, U, {}), dg(this, "container"), F.shadow ? this.container = this.attachShadow({
        mode: F.shadow
      }) : this.container = this, this[Zc].container = this.container;
      for (const me of at) {
        const ct = oe[me], De = this.getAttribute(ct), He = w[me], Tt = He ? B0[He] : null;
        Tt != null && Tt.parse && De && (this[Zc][me] = Tt.parse(De, ct, this));
      }
      for (const me of yt)
        this[Zc][me] = (ct) => {
          const De = me.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(De, { detail: ct, ...J[me] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys($);
    }
    connectedCallback() {
      this[yg] = !0, this[hg]();
    }
    disconnectedCallback() {
      this[yg] = !1, this[Ir] && ge.unmount(this[Ir]), delete this[Ir];
    }
    attributeChangedCallback(me, ct, De) {
      const He = $[me], Tt = w[He], tt = Tt ? B0[Tt] : null;
      He in w && tt != null && tt.parse && De && (this[Zc][He] = tt.parse(De, me, this), this[hg]());
    }
    [(Me = yg, Ee = Ir, U = Zc, hg)]() {
      this[yg] && (this[Ir] ? ge.update(this[Ir], this[Zc]) : this[Ir] = ge.mount(
        this.container,
        x,
        this[Zc]
      ));
    }
  }
  for (const le of at) {
    const me = oe[le], ct = w[le];
    Object.defineProperty(M.prototype, le, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Zc][le];
      },
      set(De) {
        this[Zc][le] = De;
        const He = ct ? B0[ct] : null;
        if (He != null && He.stringify) {
          const Tt = He.stringify(De, me, this);
          this.getAttribute(me) !== Tt && this.setAttribute(me, Tt);
        } else
          this[hg]();
      }
    });
  }
  return M;
}
function RT(x, F, ge) {
  const U = yT.createRoot(x), Ee = $1.createElement(F, ge);
  return U.render(Ee), {
    root: U,
    ReactComponent: F
  };
}
function OT({ root: x, ReactComponent: F }, ge) {
  const U = $1.createElement(F, ge);
  x.render(U);
}
function DT({ root: x }) {
  x.unmount();
}
function zT(x, F = {}) {
  return AT(x, F, { mount: RT, update: OT, unmount: DT });
}
var mg = { exports: {} }, mp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function MT() {
  if (K1) return mp;
  K1 = 1;
  var x = Symbol.for("react.transitional.element"), F = Symbol.for("react.fragment");
  function ge(U, Ee, Me) {
    var at = null;
    if (Me !== void 0 && (at = "" + Me), Ee.key !== void 0 && (at = "" + Ee.key), "key" in Ee) {
      Me = {};
      for (var yt in Ee)
        yt !== "key" && (Me[yt] = Ee[yt]);
    } else Me = Ee;
    return Ee = Me.ref, {
      $$typeof: x,
      type: U,
      key: at,
      ref: Ee !== void 0 ? Ee : null,
      props: Me
    };
  }
  return mp.Fragment = F, mp.jsx = ge, mp.jsxs = ge, mp;
}
var pp = {}, J1;
function UT() {
  if (J1) return pp;
  J1 = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return "production".NODE_ENV !== "production" && (function() {
    function x(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === Mt ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case ct:
          return "Fragment";
        case He:
          return "Profiler";
        case De:
          return "StrictMode";
        case Ye:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case me:
            return "Portal";
          case tt:
            return (g.displayName || "Context") + ".Provider";
          case Tt:
            return (g._context.displayName || "Context") + ".Consumer";
          case Ft:
            var B = g.render;
            return g = g.displayName, g || (g = B.displayName || B.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case We:
            return B = g.displayName || null, B !== null ? B : x(g.type) || "Memo";
          case Dt:
            B = g._payload, g = g._init;
            try {
              return x(g(B));
            } catch {
            }
        }
      return null;
    }
    function F(g) {
      return "" + g;
    }
    function ge(g) {
      try {
        F(g);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var Z = B.error, I = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Z.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), F(g);
      }
    }
    function U(g) {
      if (g === ct) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === Dt)
        return "<...>";
      try {
        var B = x(g);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ee() {
      var g = be.A;
      return g === null ? null : g.getOwner();
    }
    function Me() {
      return Error("react-stack-top-frame");
    }
    function at(g) {
      if (ze.call(g, "key")) {
        var B = Object.getOwnPropertyDescriptor(g, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function yt(g, B) {
      function Z() {
        mt || (mt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Z,
        configurable: !0
      });
    }
    function w() {
      var g = x(this.type);
      return O[g] || (O[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function J(g, B, Z, I, ue, Ae, ie, nl) {
      return Z = Ae.ref, g = {
        $$typeof: le,
        type: g,
        key: B,
        props: Ae,
        _owner: ue
      }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: nl
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function oe(g, B, Z, I, ue, Ae, ie, nl) {
      var Ce = B.children;
      if (Ce !== void 0)
        if (I)
          if (Ut(Ce)) {
            for (I = 0; I < Ce.length; I++)
              $(Ce[I]);
            Object.freeze && Object.freeze(Ce);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else $(Ce);
      if (ze.call(B, "key")) {
        Ce = x(g);
        var Nt = Object.keys(B).filter(function(An) {
          return An !== "key";
        });
        I = 0 < Nt.length ? "{key: someKey, " + Nt.join(": ..., ") + ": ...}" : "{key: someKey}", pe[Ce + I] || (Nt = 0 < Nt.length ? "{" + Nt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          Ce,
          Nt,
          Ce
        ), pe[Ce + I] = !0);
      }
      if (Ce = null, Z !== void 0 && (ge(Z), Ce = "" + Z), at(B) && (ge(B.key), Ce = "" + B.key), "key" in B) {
        Z = {};
        for (var ta in B)
          ta !== "key" && (Z[ta] = B[ta]);
      } else Z = B;
      return Ce && yt(
        Z,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), J(
        g,
        Ce,
        Ae,
        ue,
        Ee(),
        Z,
        ie,
        nl
      );
    }
    function $(g) {
      typeof g == "object" && g !== null && g.$$typeof === le && g._store && (g._store.validated = 1);
    }
    var M = Ah(), le = Symbol.for("react.transitional.element"), me = Symbol.for("react.portal"), ct = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), Tt = Symbol.for("react.consumer"), tt = Symbol.for("react.context"), Ft = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), We = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), Mt = Symbol.for("react.client.reference"), be = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ze = Object.prototype.hasOwnProperty, Ut = Array.isArray, jt = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var mt, O = {}, W = M.react_stack_bottom_frame.bind(
      M,
      Me
    )(), P = jt(U(Me)), pe = {};
    pp.Fragment = ct, pp.jsx = function(g, B, Z, I, ue) {
      var Ae = 1e4 > be.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        B,
        Z,
        !1,
        I,
        ue,
        Ae ? Error("react-stack-top-frame") : W,
        Ae ? jt(U(g)) : P
      );
    }, pp.jsxs = function(g, B, Z, I, ue) {
      var Ae = 1e4 > be.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        B,
        Z,
        !0,
        I,
        ue,
        Ae ? Error("react-stack-top-frame") : W,
        Ae ? jt(U(g)) : P
      );
    };
  })(), pp;
}
var k1;
function _T() {
  return k1 || (k1 = 1, "production".NODE_ENV === "production" ? mg.exports = MT() : mg.exports = UT()), mg.exports;
}
var CT = _T();
function HT({ name: x }) {
  const F = `Web Component Hello${x ? `, ${x}` : ""}!`;
  return /* @__PURE__ */ CT.jsx("div", { children: F });
}
const xT = zT(HT, {
  props: {
    name: "string"
  }
});
customElements.get("greeting-wc") || customElements.define("greeting-wc", xT);
