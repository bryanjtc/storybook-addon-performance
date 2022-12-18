import {
  require_memoizerific
} from "./chunk-ECBLCABK.mjs";
import {
  __commonJS,
  __toESM as __toESM2
} from "./chunk-HE5ANRZV.mjs";
import {
  __toESM
} from "./chunk-22M6QDW2.mjs";

// ../../node_modules/@storybook/components/dist/formatter-PK6264PW.mjs
var import_memoizerific = __toESM(require_memoizerific(), 1);
var require_parser_html = __commonJS({ "../../node_modules/prettier/parser-html.js"(exports, module) {
  (function(e) {
    if (typeof exports == "object" && typeof module == "object")
      module.exports = e();
    else if (typeof define == "function" && define.amd)
      define(e);
    else {
      var i = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.html = e();
    }
  })(function() {
    "use strict";
    var y = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), G = y((uc, Hr) => {
      var be = function(e) {
        return e && e.Math == Math && e;
      };
      Hr.exports = be(typeof globalThis == "object" && globalThis) || be(typeof window == "object" && window) || be(typeof self == "object" && self) || be(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), se = y((tc, zr) => {
      zr.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    }), oe = y((nc, Wr) => {
      var As = se();
      Wr.exports = !As(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), we = y((sc, Yr) => {
      var vs = se();
      Yr.exports = !vs(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    }), De = y((ic, Qr) => {
      var _s = we(), Ne = Function.prototype.call;
      Qr.exports = _s ? Ne.bind(Ne) : function() {
        return Ne.apply(Ne, arguments);
      };
    }), eu = y((Zr) => {
      "use strict";
      var Kr = {}.propertyIsEnumerable, Jr = Object.getOwnPropertyDescriptor, Ss = Jr && !Kr.call({ 1: 2 }, 1);
      Zr.f = Ss ? function(r) {
        var u = Jr(this, r);
        return !!u && u.enumerable;
      } : Kr;
    }), Oe = y((oc, ru) => {
      ru.exports = function(e, r) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
      };
    }), Q = y((Dc, nu) => {
      var uu = we(), tu = Function.prototype, ys = tu.bind, Ze = tu.call, Ts = uu && ys.bind(Ze, Ze);
      nu.exports = uu ? function(e) {
        return e && Ts(e);
      } : function(e) {
        return e && function() {
          return Ze.apply(e, arguments);
        };
      };
    }), qe = y((lc, iu) => {
      var su = Q(), Bs = su({}.toString), bs = su("".slice);
      iu.exports = function(e) {
        return bs(Bs(e), 8, -1);
      };
    }), ou = y((cc, au) => {
      var ws = G(), Ns = Q(), Os = se(), qs = qe(), er = ws.Object, Is = Ns("".split);
      au.exports = Os(function() {
        return !er("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return qs(e) == "String" ? Is(e, "") : er(e);
      } : er;
    }), rr = y((hc, Du) => {
      var Rs = G(), xs = Rs.TypeError;
      Du.exports = function(e) {
        if (e == null)
          throw xs("Can't call method on " + e);
        return e;
      };
    }), Ie = y((pc, lu) => {
      var Ps = ou(), ks = rr();
      lu.exports = function(e) {
        return Ps(ks(e));
      };
    }), K = y((fc, cu) => {
      cu.exports = function(e) {
        return typeof e == "function";
      };
    }), le = y((dc, hu) => {
      var Ls = K();
      hu.exports = function(e) {
        return typeof e == "object" ? e !== null : Ls(e);
      };
    }), me = y((Ec, pu) => {
      var ur = G(), $s = K(), Ms = function(e) {
        return $s(e) ? e : void 0;
      };
      pu.exports = function(e, r) {
        return arguments.length < 2 ? Ms(ur[e]) : ur[e] && ur[e][r];
      };
    }), tr = y((Cc, fu) => {
      var js = Q();
      fu.exports = js({}.isPrototypeOf);
    }), Eu = y((mc, du) => {
      var Us = me();
      du.exports = Us("navigator", "userAgent") || "";
    }), _u = y((gc, vu) => {
      var Au = G(), nr = Eu(), Cu = Au.process, mu = Au.Deno, gu = Cu && Cu.versions || mu && mu.version, Fu = gu && gu.v8, ue, Re;
      Fu && (ue = Fu.split("."), Re = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1])), !Re && nr && (ue = nr.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = nr.match(/Chrome\/(\d+)/), ue && (Re = +ue[1]))), vu.exports = Re;
    }), sr = y((Fc, yu) => {
      var Su = _u(), Gs = se();
      yu.exports = !!Object.getOwnPropertySymbols && !Gs(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Su && Su < 41;
      });
    }), ir = y((Ac, Tu) => {
      var Vs = sr();
      Tu.exports = Vs && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), ar = y((vc, Bu) => {
      var Xs = G(), Hs = me(), zs = K(), Ws = tr(), Ys = ir(), Qs = Xs.Object;
      Bu.exports = Ys ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var r = Hs("Symbol");
        return zs(r) && Ws(r.prototype, Qs(e));
      };
    }), xe = y((_c, bu) => {
      var Ks = G(), Js = Ks.String;
      bu.exports = function(e) {
        try {
          return Js(e);
        } catch {
          return "Object";
        }
      };
    }), ge = y((Sc, wu) => {
      var Zs = G(), ei = K(), ri = xe(), ui = Zs.TypeError;
      wu.exports = function(e) {
        if (ei(e))
          return e;
        throw ui(ri(e) + " is not a function");
      };
    }), Pe = y((yc, Nu) => {
      var ti = ge();
      Nu.exports = function(e, r) {
        var u = e[r];
        return u == null ? void 0 : ti(u);
      };
    }), qu = y((Tc, Ou) => {
      var ni = G(), or = De(), Dr = K(), lr = le(), si = ni.TypeError;
      Ou.exports = function(e, r) {
        var u, s;
        if (r === "string" && Dr(u = e.toString) && !lr(s = or(u, e)) || Dr(u = e.valueOf) && !lr(s = or(u, e)) || r !== "string" && Dr(u = e.toString) && !lr(s = or(u, e)))
          return s;
        throw si("Can't convert object to primitive value");
      };
    }), Ru = y((Bc, Iu) => {
      Iu.exports = false;
    }), ke = y((bc, Pu) => {
      var xu = G(), ii = Object.defineProperty;
      Pu.exports = function(e, r) {
        try {
          ii(xu, e, { value: r, configurable: true, writable: true });
        } catch {
          xu[e] = r;
        }
        return r;
      };
    }), Le = y((wc, Lu) => {
      var ai = G(), oi = ke(), ku = "__core-js_shared__", Di = ai[ku] || oi(ku, {});
      Lu.exports = Di;
    }), cr = y((Nc, Mu) => {
      var li = Ru(), $u = Le();
      (Mu.exports = function(e, r) {
        return $u[e] || ($u[e] = r !== void 0 ? r : {});
      })("versions", []).push({ version: "3.22.2", mode: li ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), hr = y((Oc, ju) => {
      var ci = G(), hi = rr(), pi = ci.Object;
      ju.exports = function(e) {
        return pi(hi(e));
      };
    }), ie = y((qc, Uu) => {
      var fi = Q(), di = hr(), Ei = fi({}.hasOwnProperty);
      Uu.exports = Object.hasOwn || function(r, u) {
        return Ei(di(r), u);
      };
    }), pr = y((Ic, Gu) => {
      var Ci = Q(), mi = 0, gi = Math.random(), Fi = Ci(1 .toString);
      Gu.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Fi(++mi + gi, 36);
      };
    }), he = y((Rc, Wu) => {
      var Ai = G(), vi = cr(), Vu = ie(), _i = pr(), Xu = sr(), zu = ir(), fe = vi("wks"), ce = Ai.Symbol, Hu = ce && ce.for, Si = zu ? ce : ce && ce.withoutSetter || _i;
      Wu.exports = function(e) {
        if (!Vu(fe, e) || !(Xu || typeof fe[e] == "string")) {
          var r = "Symbol." + e;
          Xu && Vu(ce, e) ? fe[e] = ce[e] : zu && Hu ? fe[e] = Hu(r) : fe[e] = Si(r);
        }
        return fe[e];
      };
    }), Ju = y((xc, Ku) => {
      var yi = G(), Ti = De(), Yu = le(), Qu = ar(), Bi = Pe(), bi = qu(), wi = he(), Ni = yi.TypeError, Oi = wi("toPrimitive");
      Ku.exports = function(e, r) {
        if (!Yu(e) || Qu(e))
          return e;
        var u = Bi(e, Oi), s;
        if (u) {
          if (r === void 0 && (r = "default"), s = Ti(u, e, r), !Yu(s) || Qu(s))
            return s;
          throw Ni("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), bi(e, r);
      };
    }), $e = y((Pc, Zu) => {
      var qi = Ju(), Ii = ar();
      Zu.exports = function(e) {
        var r = qi(e, "string");
        return Ii(r) ? r : r + "";
      };
    }), ut = y((kc, rt) => {
      var Ri = G(), et = le(), fr = Ri.document, xi = et(fr) && et(fr.createElement);
      rt.exports = function(e) {
        return xi ? fr.createElement(e) : {};
      };
    }), dr = y((Lc, tt) => {
      var Pi = oe(), ki = se(), Li = ut();
      tt.exports = !Pi && !ki(function() {
        return Object.defineProperty(Li("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), Er = y((st) => {
      var $i = oe(), Mi = De(), ji = eu(), Ui = Oe(), Gi = Ie(), Vi = $e(), Xi = ie(), Hi = dr(), nt = Object.getOwnPropertyDescriptor;
      st.f = $i ? nt : function(r, u) {
        if (r = Gi(r), u = Vi(u), Hi)
          try {
            return nt(r, u);
          } catch {
          }
        if (Xi(r, u))
          return Ui(!Mi(ji.f, r, u), r[u]);
      };
    }), at = y((Mc, it) => {
      var zi = oe(), Wi = se();
      it.exports = zi && Wi(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    }), de = y((jc, Dt) => {
      var ot = G(), Yi = le(), Qi = ot.String, Ki = ot.TypeError;
      Dt.exports = function(e) {
        if (Yi(e))
          return e;
        throw Ki(Qi(e) + " is not an object");
      };
    }), je = y((ct) => {
      var Ji = G(), Zi = oe(), ea = dr(), ra = at(), Me = de(), lt = $e(), ua = Ji.TypeError, Cr = Object.defineProperty, ta = Object.getOwnPropertyDescriptor, mr = "enumerable", gr = "configurable", Fr = "writable";
      ct.f = Zi ? ra ? function(r, u, s) {
        if (Me(r), u = lt(u), Me(s), typeof r == "function" && u === "prototype" && "value" in s && Fr in s && !s[Fr]) {
          var D = ta(r, u);
          D && D[Fr] && (r[u] = s.value, s = { configurable: gr in s ? s[gr] : D[gr], enumerable: mr in s ? s[mr] : D[mr], writable: false });
        }
        return Cr(r, u, s);
      } : Cr : function(r, u, s) {
        if (Me(r), u = lt(u), Me(s), ea)
          try {
            return Cr(r, u, s);
          } catch {
          }
        if ("get" in s || "set" in s)
          throw ua("Accessors not supported");
        return "value" in s && (r[u] = s.value), r;
      };
    }), Ue = y((Gc, ht) => {
      var na = oe(), sa = je(), ia = Oe();
      ht.exports = na ? function(e, r, u) {
        return sa.f(e, r, ia(1, u));
      } : function(e, r, u) {
        return e[r] = u, e;
      };
    }), Ge = y((Vc, pt) => {
      var aa = Q(), oa = K(), Ar = Le(), Da = aa(Function.toString);
      oa(Ar.inspectSource) || (Ar.inspectSource = function(e) {
        return Da(e);
      }), pt.exports = Ar.inspectSource;
    }), Et = y((Xc, dt) => {
      var la = G(), ca = K(), ha = Ge(), ft = la.WeakMap;
      dt.exports = ca(ft) && /native code/.test(ha(ft));
    }), gt = y((Hc, mt) => {
      var pa = cr(), fa = pr(), Ct = pa("keys");
      mt.exports = function(e) {
        return Ct[e] || (Ct[e] = fa(e));
      };
    }), vr = y((zc, Ft) => {
      Ft.exports = {};
    }), Tt = y((Wc, yt) => {
      var da = Et(), St = G(), _r = Q(), Ea = le(), Ca = Ue(), Sr = ie(), yr = Le(), ma = gt(), ga = vr(), At = "Object already initialized", Br = St.TypeError, Fa = St.WeakMap, Ve, Fe, Xe, Aa = function(e) {
        return Xe(e) ? Fe(e) : Ve(e, {});
      }, va = function(e) {
        return function(r) {
          var u;
          if (!Ea(r) || (u = Fe(r)).type !== e)
            throw Br("Incompatible receiver, " + e + " required");
          return u;
        };
      };
      da || yr.state ? (ae = yr.state || (yr.state = new Fa()), vt = _r(ae.get), Tr = _r(ae.has), _t = _r(ae.set), Ve = function(e, r) {
        if (Tr(ae, e))
          throw new Br(At);
        return r.facade = e, _t(ae, e, r), r;
      }, Fe = function(e) {
        return vt(ae, e) || {};
      }, Xe = function(e) {
        return Tr(ae, e);
      }) : (pe = ma("state"), ga[pe] = true, Ve = function(e, r) {
        if (Sr(e, pe))
          throw new Br(At);
        return r.facade = e, Ca(e, pe, r), r;
      }, Fe = function(e) {
        return Sr(e, pe) ? e[pe] : {};
      }, Xe = function(e) {
        return Sr(e, pe);
      });
      var ae, vt, Tr, _t, pe;
      yt.exports = { set: Ve, get: Fe, has: Xe, enforce: Aa, getterFor: va };
    }), wt = y((Yc, bt) => {
      var br = oe(), _a = ie(), Bt = Function.prototype, Sa = br && Object.getOwnPropertyDescriptor, wr = _a(Bt, "name"), ya = wr && function() {
      }.name === "something", Ta = wr && (!br || br && Sa(Bt, "name").configurable);
      bt.exports = { EXISTS: wr, PROPER: ya, CONFIGURABLE: Ta };
    }), Rt = y((Qc, It) => {
      var Ba = G(), Nt = K(), ba = ie(), Ot = Ue(), wa = ke(), Na = Ge(), qt = Tt(), Oa = wt().CONFIGURABLE, qa = qt.get, Ia = qt.enforce, Ra = String(String).split("String");
      (It.exports = function(e, r, u, s) {
        var D = s ? !!s.unsafe : false, n = s ? !!s.enumerable : false, i = s ? !!s.noTargetGet : false, p = s && s.name !== void 0 ? s.name : r, l;
        if (Nt(u) && (String(p).slice(0, 7) === "Symbol(" && (p = "[" + String(p).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!ba(u, "name") || Oa && u.name !== p) && Ot(u, "name", p), l = Ia(u), l.source || (l.source = Ra.join(typeof p == "string" ? p : ""))), e === Ba) {
          n ? e[r] = u : wa(r, u);
          return;
        } else
          D ? !i && e[r] && (n = true) : delete e[r];
        n ? e[r] = u : Ot(e, r, u);
      })(Function.prototype, "toString", function() {
        return Nt(this) && qa(this).source || Na(this);
      });
    }), Nr = y((Kc, xt) => {
      var xa = Math.ceil, Pa = Math.floor;
      xt.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : (r > 0 ? Pa : xa)(r);
      };
    }), kt = y((Jc, Pt) => {
      var ka = Nr(), La = Math.max, $a = Math.min;
      Pt.exports = function(e, r) {
        var u = ka(e);
        return u < 0 ? La(u + r, 0) : $a(u, r);
      };
    }), $t = y((Zc, Lt) => {
      var Ma = Nr(), ja = Math.min;
      Lt.exports = function(e) {
        return e > 0 ? ja(Ma(e), 9007199254740991) : 0;
      };
    }), Ae = y((e2, Mt) => {
      var Ua = $t();
      Mt.exports = function(e) {
        return Ua(e.length);
      };
    }), Gt = y((r2, Ut) => {
      var Ga = Ie(), Va = kt(), Xa = Ae(), jt = function(e) {
        return function(r, u, s) {
          var D = Ga(r), n = Xa(D), i = Va(s, n), p;
          if (e && u != u) {
            for (; n > i; )
              if (p = D[i++], p != p)
                return true;
          } else
            for (; n > i; i++)
              if ((e || i in D) && D[i] === u)
                return e || i || 0;
          return !e && -1;
        };
      };
      Ut.exports = { includes: jt(true), indexOf: jt(false) };
    }), Ht = y((u2, Xt) => {
      var Ha = Q(), Or = ie(), za = Ie(), Wa = Gt().indexOf, Ya = vr(), Vt = Ha([].push);
      Xt.exports = function(e, r) {
        var u = za(e), s = 0, D = [], n;
        for (n in u)
          !Or(Ya, n) && Or(u, n) && Vt(D, n);
        for (; r.length > s; )
          Or(u, n = r[s++]) && (~Wa(D, n) || Vt(D, n));
        return D;
      };
    }), Wt = y((t2, zt) => {
      zt.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), Qt = y((Yt) => {
      var Qa = Ht(), Ka = Wt(), Ja = Ka.concat("length", "prototype");
      Yt.f = Object.getOwnPropertyNames || function(r) {
        return Qa(r, Ja);
      };
    }), Jt = y((Kt) => {
      Kt.f = Object.getOwnPropertySymbols;
    }), en = y((i2, Zt) => {
      var Za = me(), eo = Q(), ro = Qt(), uo = Jt(), to = de(), no = eo([].concat);
      Zt.exports = Za("Reflect", "ownKeys") || function(r) {
        var u = ro.f(to(r)), s = uo.f;
        return s ? no(u, s(r)) : u;
      };
    }), tn = y((a2, un) => {
      var rn = ie(), so = en(), io = Er(), ao = je();
      un.exports = function(e, r, u) {
        for (var s = so(r), D = ao.f, n = io.f, i = 0; i < s.length; i++) {
          var p = s[i];
          !rn(e, p) && !(u && rn(u, p)) && D(e, p, n(r, p));
        }
      };
    }), sn = y((o2, nn) => {
      var oo = se(), Do = K(), lo = /#|\.prototype\./, ve = function(e, r) {
        var u = ho[co(e)];
        return u == fo ? true : u == po ? false : Do(r) ? oo(r) : !!r;
      }, co = ve.normalize = function(e) {
        return String(e).replace(lo, ".").toLowerCase();
      }, ho = ve.data = {}, po = ve.NATIVE = "N", fo = ve.POLYFILL = "P";
      nn.exports = ve;
    }), He = y((D2, an) => {
      var qr = G(), Eo = Er().f, Co = Ue(), mo = Rt(), go = ke(), Fo = tn(), Ao = sn();
      an.exports = function(e, r) {
        var u = e.target, s = e.global, D = e.stat, n, i, p, l, g, a;
        if (s ? i = qr : D ? i = qr[u] || go(u, {}) : i = (qr[u] || {}).prototype, i)
          for (p in r) {
            if (g = r[p], e.noTargetGet ? (a = Eo(i, p), l = a && a.value) : l = i[p], n = Ao(s ? p : u + (D ? "." : "#") + p, e.forced), !n && l !== void 0) {
              if (typeof g == typeof l)
                continue;
              Fo(g, l);
            }
            (e.sham || l && l.sham) && Co(g, "sham", true), mo(i, p, g, e);
          }
      };
    }), on = y(() => {
      var vo = He(), _o = G();
      vo({ global: true }, { globalThis: _o });
    }), Dn = y(() => {
      on();
    }), Ir = y((f2, ln) => {
      var So = qe();
      ln.exports = Array.isArray || function(r) {
        return So(r) == "Array";
      };
    }), Rr = y((d2, hn) => {
      var cn = Q(), yo = ge(), To = we(), Bo = cn(cn.bind);
      hn.exports = function(e, r) {
        return yo(e), r === void 0 ? e : To ? Bo(e, r) : function() {
          return e.apply(r, arguments);
        };
      };
    }), dn = y((E2, fn) => {
      "use strict";
      var bo = G(), wo = Ir(), No = Ae(), Oo = Rr(), qo = bo.TypeError, pn = function(e, r, u, s, D, n, i, p) {
        for (var l = D, g = 0, a = i ? Oo(i, p) : false, c, h; g < s; ) {
          if (g in u) {
            if (c = a ? a(u[g], g, r) : u[g], n > 0 && wo(c))
              h = No(c), l = pn(e, r, c, h, l, n - 1) - 1;
            else {
              if (l >= 9007199254740991)
                throw qo("Exceed the acceptable array length");
              e[l] = c;
            }
            l++;
          }
          g++;
        }
        return l;
      };
      fn.exports = pn;
    }), mn = y((C2, Cn) => {
      var Io = he(), Ro = Io("toStringTag"), En = {};
      En[Ro] = "z", Cn.exports = String(En) === "[object z]";
    }), xr = y((m2, gn) => {
      var xo = G(), Po = mn(), ko = K(), ze = qe(), Lo = he(), $o = Lo("toStringTag"), Mo = xo.Object, jo = ze(function() {
        return arguments;
      }()) == "Arguments", Uo = function(e, r) {
        try {
          return e[r];
        } catch {
        }
      };
      gn.exports = Po ? ze : function(e) {
        var r, u, s;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (u = Uo(r = Mo(e), $o)) == "string" ? u : jo ? ze(r) : (s = ze(r)) == "Object" && ko(r.callee) ? "Arguments" : s;
      };
    }), yn = y((g2, Sn) => {
      var Go = Q(), Vo = se(), Fn = K(), Xo = xr(), Ho = me(), zo = Ge(), An = function() {
      }, Wo = [], vn = Ho("Reflect", "construct"), Pr = /^\s*(?:class|function)\b/, Yo = Go(Pr.exec), Qo = !Pr.exec(An), _e = function(r) {
        if (!Fn(r))
          return false;
        try {
          return vn(An, Wo, r), true;
        } catch {
          return false;
        }
      }, _n = function(r) {
        if (!Fn(r))
          return false;
        switch (Xo(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Qo || !!Yo(Pr, zo(r));
        } catch {
          return true;
        }
      };
      _n.sham = true, Sn.exports = !vn || Vo(function() {
        var e;
        return _e(_e.call) || !_e(Object) || !_e(function() {
          e = true;
        }) || e;
      }) ? _n : _e;
    }), wn = y((F2, bn) => {
      var Ko = G(), Tn = Ir(), Jo = yn(), Zo = le(), eD = he(), rD = eD("species"), Bn = Ko.Array;
      bn.exports = function(e) {
        var r;
        return Tn(e) && (r = e.constructor, Jo(r) && (r === Bn || Tn(r.prototype)) ? r = void 0 : Zo(r) && (r = r[rD], r === null && (r = void 0))), r === void 0 ? Bn : r;
      };
    }), On = y((A2, Nn) => {
      var uD = wn();
      Nn.exports = function(e, r) {
        return new (uD(e))(r === 0 ? 0 : r);
      };
    }), qn = y(() => {
      "use strict";
      var tD = He(), nD = dn(), sD = ge(), iD = hr(), aD = Ae(), oD = On();
      tD({ target: "Array", proto: true }, { flatMap: function(r) {
        var u = iD(this), s = aD(u), D;
        return sD(r), D = oD(u, 0), D.length = nD(D, u, u, s, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D;
      } });
    }), kr = y((S2, In) => {
      In.exports = {};
    }), xn = y((y2, Rn) => {
      var DD = he(), lD = kr(), cD = DD("iterator"), hD = Array.prototype;
      Rn.exports = function(e) {
        return e !== void 0 && (lD.Array === e || hD[cD] === e);
      };
    }), Lr = y((T2, kn) => {
      var pD = xr(), Pn = Pe(), fD = kr(), dD = he(), ED = dD("iterator");
      kn.exports = function(e) {
        if (e != null)
          return Pn(e, ED) || Pn(e, "@@iterator") || fD[pD(e)];
      };
    }), $n = y((B2, Ln) => {
      var CD = G(), mD = De(), gD = ge(), FD = de(), AD = xe(), vD = Lr(), _D = CD.TypeError;
      Ln.exports = function(e, r) {
        var u = arguments.length < 2 ? vD(e) : r;
        if (gD(u))
          return FD(mD(u, e));
        throw _D(AD(e) + " is not iterable");
      };
    }), Un = y((b2, jn) => {
      var SD = De(), Mn = de(), yD = Pe();
      jn.exports = function(e, r, u) {
        var s, D;
        Mn(e);
        try {
          if (s = yD(e, "return"), !s) {
            if (r === "throw")
              throw u;
            return u;
          }
          s = SD(s, e);
        } catch (n) {
          D = true, s = n;
        }
        if (r === "throw")
          throw u;
        if (D)
          throw s;
        return Mn(s), u;
      };
    }), zn = y((w2, Hn) => {
      var TD = G(), BD = Rr(), bD = De(), wD = de(), ND = xe(), OD = xn(), qD = Ae(), Gn = tr(), ID = $n(), RD = Lr(), Vn = Un(), xD = TD.TypeError, We = function(e, r) {
        this.stopped = e, this.result = r;
      }, Xn = We.prototype;
      Hn.exports = function(e, r, u) {
        var s = u && u.that, D = !!(u && u.AS_ENTRIES), n = !!(u && u.IS_ITERATOR), i = !!(u && u.INTERRUPTED), p = BD(r, s), l, g, a, c, h, C, d, m = function(B) {
          return l && Vn(l, "normal", B), new We(true, B);
        }, T = function(B) {
          return D ? (wD(B), i ? p(B[0], B[1], m) : p(B[0], B[1])) : i ? p(B, m) : p(B);
        };
        if (n)
          l = e;
        else {
          if (g = RD(e), !g)
            throw xD(ND(e) + " is not iterable");
          if (OD(g)) {
            for (a = 0, c = qD(e); c > a; a++)
              if (h = T(e[a]), h && Gn(Xn, h))
                return h;
            return new We(false);
          }
          l = ID(e, g);
        }
        for (C = l.next; !(d = bD(C, l)).done; ) {
          try {
            h = T(d.value);
          } catch (B) {
            Vn(l, "throw", B);
          }
          if (typeof h == "object" && h && Gn(Xn, h))
            return h;
        }
        return new We(false);
      };
    }), Yn = y((N2, Wn) => {
      "use strict";
      var PD = $e(), kD = je(), LD = Oe();
      Wn.exports = function(e, r, u) {
        var s = PD(r);
        s in e ? kD.f(e, s, LD(0, u)) : e[s] = u;
      };
    }), Qn = y(() => {
      var $D = He(), MD = zn(), jD = Yn();
      $D({ target: "Object", stat: true }, { fromEntries: function(r) {
        var u = {};
        return MD(r, function(s, D) {
          jD(u, s, D);
        }, { AS_ENTRIES: true }), u;
      } });
    }), ec = y((I2, Fs) => {
      var UD = ["cliName", "cliCategory", "cliDescription"];
      function GD(e, r) {
        if (e == null)
          return {};
        var u = VD(e, r), s, D;
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (D = 0; D < n.length; D++)
            s = n[D], !(r.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, s) || (u[s] = e[s]));
        }
        return u;
      }
      function VD(e, r) {
        if (e == null)
          return {};
        var u = {}, s = Object.keys(e), D, n;
        for (n = 0; n < s.length; n++)
          D = s[n], !(r.indexOf(D) >= 0) && (u[D] = e[D]);
        return u;
      }
      Dn(), qn(), Qn();
      var XD = Object.create, Ke = Object.defineProperty, HD = Object.getOwnPropertyDescriptor, Mr = Object.getOwnPropertyNames, zD = Object.getPrototypeOf, WD = Object.prototype.hasOwnProperty, Ee = (e, r) => function() {
        return e && (r = (0, e[Mr(e)[0]])(e = 0)), r;
      }, I = (e, r) => function() {
        return r || (0, e[Mr(e)[0]])((r = { exports: {} }).exports, r), r.exports;
      }, us = (e, r) => {
        for (var u in r)
          Ke(e, u, { get: r[u], enumerable: true });
      }, ts = (e, r, u, s) => {
        if (r && typeof r == "object" || typeof r == "function")
          for (let D of Mr(r))
            !WD.call(e, D) && D !== u && Ke(e, D, { get: () => r[D], enumerable: !(s = HD(r, D)) || s.enumerable });
        return e;
      }, YD = (e, r, u) => (u = e != null ? XD(zD(e)) : {}, ts(r || !e || !e.__esModule ? Ke(u, "default", { value: e, enumerable: true }) : u, e)), ns = (e) => ts(Ke({}, "__esModule", { value: true }), e), Kn, Jn, Se, q = Ee({ "<define:process>"() {
        Kn = {}, Jn = [], Se = { env: Kn, argv: Jn };
      } }), ss = I({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(p) {
          return p >= e.$TAB && p <= e.$SPACE || p == e.$NBSP;
        }
        e.isWhitespace = r;
        function u(p) {
          return e.$0 <= p && p <= e.$9;
        }
        e.isDigit = u;
        function s(p) {
          return p >= e.$a && p <= e.$z || p >= e.$A && p <= e.$Z;
        }
        e.isAsciiLetter = s;
        function D(p) {
          return p >= e.$a && p <= e.$f || p >= e.$A && p <= e.$F || u(p);
        }
        e.isAsciiHexDigit = D;
        function n(p) {
          return p === e.$LF || p === e.$CR;
        }
        e.isNewLine = n;
        function i(p) {
          return e.$0 <= p && p <= e.$7;
        }
        e.isOctalDigit = i;
      } }), QD = I({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(s, D, n) {
            this.filePath = s, this.name = D, this.members = n;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        e.StaticSymbol = r;
        var u = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(s, D, n) {
            n = n || [];
            let i = n.length ? `.${n.join(".")}` : "", p = `"${s}".${D}${i}`, l = this.cache.get(p);
            return l || (l = new r(s, D, n), this.cache.set(p, l)), l;
          }
        };
        e.StaticSymbolCache = u;
      } }), KD = I({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = /-+([a-z0-9])/g;
        function u(o) {
          return o.replace(r, function() {
            for (var E = arguments.length, f = new Array(E), F = 0; F < E; F++)
              f[F] = arguments[F];
            return f[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = u;
        function s(o, E) {
          return n(o, ":", E);
        }
        e.splitAtColon = s;
        function D(o, E) {
          return n(o, ".", E);
        }
        e.splitAtPeriod = D;
        function n(o, E, f) {
          let F = o.indexOf(E);
          return F == -1 ? f : [o.slice(0, F).trim(), o.slice(F + 1).trim()];
        }
        function i(o, E, f) {
          return Array.isArray(o) ? E.visitArray(o, f) : A(o) ? E.visitStringMap(o, f) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? E.visitPrimitive(o, f) : E.visitOther(o, f);
        }
        e.visitValue = i;
        function p(o) {
          return o != null;
        }
        e.isDefined = p;
        function l(o) {
          return o === void 0 ? null : o;
        }
        e.noUndefined = l;
        var g = class {
          visitArray(o, E) {
            return o.map((f) => i(f, this, E));
          }
          visitStringMap(o, E) {
            let f = {};
            return Object.keys(o).forEach((F) => {
              f[F] = i(o[F], this, E);
            }), f;
          }
          visitPrimitive(o, E) {
            return o;
          }
          visitOther(o, E) {
            return o;
          }
        };
        e.ValueTransformer = g, e.SyncAsync = { assertSync: (o) => {
          if (_(o))
            throw new Error("Illegal state: value cannot be a promise");
          return o;
        }, then: (o, E) => _(o) ? o.then(E) : E(o), all: (o) => o.some(_) ? Promise.all(o) : o };
        function a(o) {
          throw new Error(`Internal Error: ${o}`);
        }
        e.error = a;
        function c(o, E) {
          let f = Error(o);
          return f[h] = true, E && (f[C] = E), f;
        }
        e.syntaxError = c;
        var h = "ngSyntaxError", C = "ngParseErrors";
        function d(o) {
          return o[h];
        }
        e.isSyntaxError = d;
        function m(o) {
          return o[C] || [];
        }
        e.getParseErrors = m;
        function T(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = T;
        var B = Object.getPrototypeOf({});
        function A(o) {
          return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === B;
        }
        function N(o) {
          let E = "";
          for (let f = 0; f < o.length; f++) {
            let F = o.charCodeAt(f);
            if (F >= 55296 && F <= 56319 && o.length > f + 1) {
              let P = o.charCodeAt(f + 1);
              P >= 56320 && P <= 57343 && (f++, F = (F - 55296 << 10) + P - 56320 + 65536);
            }
            F <= 127 ? E += String.fromCharCode(F) : F <= 2047 ? E += String.fromCharCode(F >> 6 & 31 | 192, F & 63 | 128) : F <= 65535 ? E += String.fromCharCode(F >> 12 | 224, F >> 6 & 63 | 128, F & 63 | 128) : F <= 2097151 && (E += String.fromCharCode(F >> 18 & 7 | 240, F >> 12 & 63 | 128, F >> 6 & 63 | 128, F & 63 | 128));
          }
          return E;
        }
        e.utf8Encode = N;
        function R(o) {
          if (typeof o == "string")
            return o;
          if (o instanceof Array)
            return "[" + o.map(R).join(", ") + "]";
          if (o == null)
            return "" + o;
          if (o.overriddenName)
            return `${o.overriddenName}`;
          if (o.name)
            return `${o.name}`;
          if (!o.toString)
            return "object";
          let E = o.toString();
          if (E == null)
            return "" + E;
          let f = E.indexOf(`
`);
          return f === -1 ? E : E.substring(0, f);
        }
        e.stringify = R;
        function j(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }
        e.resolveForwardRef = j;
        function _(o) {
          return !!o && typeof o.then == "function";
        }
        e.isPromise = _;
        var O = class {
          constructor(o) {
            this.full = o;
            let E = o.split(".");
            this.major = E[0], this.minor = E[1], this.patch = E.slice(2).join(".");
          }
        };
        e.Version = O;
        var x = typeof window < "u" && window, k = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, $ = typeof globalThis < "u" && globalThis, t = $ || x || k;
        e.global = t;
      } }), JD = I({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = QD(), u = KD(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function D(f) {
          return f.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = D;
        var n = 0;
        function i(f) {
          if (!f || !f.reference)
            return null;
          let F = f.reference;
          if (F instanceof r.StaticSymbol)
            return F.name;
          if (F.__anonymousType)
            return F.__anonymousType;
          let P = u.stringify(F);
          return P.indexOf("(") >= 0 ? (P = `anonymous_${n++}`, F.__anonymousType = P) : P = D(P), P;
        }
        e.identifierName = i;
        function p(f) {
          let F = f.reference;
          return F instanceof r.StaticSymbol ? F.filePath : `./${u.stringify(F)}`;
        }
        e.identifierModuleUrl = p;
        function l(f, F) {
          return `View_${i({ reference: f })}_${F}`;
        }
        e.viewClassName = l;
        function g(f) {
          return `RenderType_${i({ reference: f })}`;
        }
        e.rendererTypeName = g;
        function a(f) {
          return `HostView_${i({ reference: f })}`;
        }
        e.hostViewClassName = a;
        function c(f) {
          return `${i({ reference: f })}NgFactory`;
        }
        e.componentFactoryName = c;
        var h;
        (function(f) {
          f[f.Pipe = 0] = "Pipe", f[f.Directive = 1] = "Directive", f[f.NgModule = 2] = "NgModule", f[f.Injectable = 3] = "Injectable";
        })(h = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function C(f) {
          return f.value != null ? D(f.value) : i(f.identifier);
        }
        e.tokenName = C;
        function d(f) {
          return f.identifier != null ? f.identifier.reference : f.value;
        }
        e.tokenReference = d;
        var m = class {
          constructor() {
            let { moduleUrl: f, styles: F, styleUrls: P } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = f || null, this.styles = _(F), this.styleUrls = _(P);
          }
        };
        e.CompileStylesheetMetadata = m;
        var T = class {
          constructor(f) {
            let { encapsulation: F, template: P, templateUrl: M, htmlAst: W, styles: X, styleUrls: H, externalStylesheets: z, animations: J, ngContentSelectors: Z, interpolation: ee, isInline: v, preserveWhitespaces: S } = f;
            if (this.encapsulation = F, this.template = P, this.templateUrl = M, this.htmlAst = W, this.styles = _(X), this.styleUrls = _(H), this.externalStylesheets = _(z), this.animations = J ? x(J) : [], this.ngContentSelectors = Z || [], ee && ee.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = ee, this.isInline = v, this.preserveWhitespaces = S;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = T;
        var B = class {
          static create(f) {
            let { isHost: F, type: P, isComponent: M, selector: W, exportAs: X, changeDetection: H, inputs: z, outputs: J, host: Z, providers: ee, viewProviders: v, queries: S, guards: b, viewQueries: w, entryComponents: L, template: U, componentViewType: V, rendererType: Y, componentFactory: te } = f, Te = {}, Be = {}, Gr = {};
            Z != null && Object.keys(Z).forEach((re) => {
              let ne = Z[re], Ce = re.match(s);
              Ce === null ? Gr[re] = ne : Ce[1] != null ? Be[Ce[1]] = ne : Ce[2] != null && (Te[Ce[2]] = ne);
            });
            let Vr = {};
            z == null ? void 0 : z.forEach((re) => {
              let ne = u.splitAtColon(re, [re, re]);
              Vr[ne[0]] = ne[1];
            });
            let Xr = {};
            return J == null ? void 0 : J.forEach((re) => {
              let ne = u.splitAtColon(re, [re, re]);
              Xr[ne[0]] = ne[1];
            }), new B({ isHost: F, type: P, isComponent: !!M, selector: W, exportAs: X, changeDetection: H, inputs: Vr, outputs: Xr, hostListeners: Te, hostProperties: Be, hostAttributes: Gr, providers: ee, viewProviders: v, queries: S, guards: b, viewQueries: w, entryComponents: L, template: U, componentViewType: V, rendererType: Y, componentFactory: te });
          }
          constructor(f) {
            let { isHost: F, type: P, isComponent: M, selector: W, exportAs: X, changeDetection: H, inputs: z, outputs: J, hostListeners: Z, hostProperties: ee, hostAttributes: v, providers: S, viewProviders: b, queries: w, guards: L, viewQueries: U, entryComponents: V, template: Y, componentViewType: te, rendererType: Te, componentFactory: Be } = f;
            this.isHost = !!F, this.type = P, this.isComponent = M, this.selector = W, this.exportAs = X, this.changeDetection = H, this.inputs = z, this.outputs = J, this.hostListeners = Z, this.hostProperties = ee, this.hostAttributes = v, this.providers = _(S), this.viewProviders = _(b), this.queries = _(w), this.guards = L, this.viewQueries = _(U), this.entryComponents = _(V), this.template = Y, this.componentViewType = te, this.rendererType = Te, this.componentFactory = Be;
          }
          toSummary() {
            return { summaryKind: h.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = B;
        var A = class {
          constructor(f) {
            let { type: F, name: P, pure: M } = f;
            this.type = F, this.name = P, this.pure = !!M;
          }
          toSummary() {
            return { summaryKind: h.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = A;
        var N = class {
        };
        e.CompileShallowModuleMetadata = N;
        var R = class {
          constructor(f) {
            let { type: F, providers: P, declaredDirectives: M, exportedDirectives: W, declaredPipes: X, exportedPipes: H, entryComponents: z, bootstrapComponents: J, importedModules: Z, exportedModules: ee, schemas: v, transitiveModule: S, id: b } = f;
            this.type = F || null, this.declaredDirectives = _(M), this.exportedDirectives = _(W), this.declaredPipes = _(X), this.exportedPipes = _(H), this.providers = _(P), this.entryComponents = _(z), this.bootstrapComponents = _(J), this.importedModules = _(Z), this.exportedModules = _(ee), this.schemas = _(v), this.id = b || null, this.transitiveModule = S || null;
          }
          toSummary() {
            let f = this.transitiveModule;
            return { summaryKind: h.NgModule, type: this.type, entryComponents: f.entryComponents, providers: f.providers, modules: f.modules, exportedDirectives: f.exportedDirectives, exportedPipes: f.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = R;
        var j = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(f, F) {
            this.providers.push({ provider: f, module: F });
          }
          addDirective(f) {
            this.directivesSet.has(f.reference) || (this.directivesSet.add(f.reference), this.directives.push(f));
          }
          addExportedDirective(f) {
            this.exportedDirectivesSet.has(f.reference) || (this.exportedDirectivesSet.add(f.reference), this.exportedDirectives.push(f));
          }
          addPipe(f) {
            this.pipesSet.has(f.reference) || (this.pipesSet.add(f.reference), this.pipes.push(f));
          }
          addExportedPipe(f) {
            this.exportedPipesSet.has(f.reference) || (this.exportedPipesSet.add(f.reference), this.exportedPipes.push(f));
          }
          addModule(f) {
            this.modulesSet.has(f.reference) || (this.modulesSet.add(f.reference), this.modules.push(f));
          }
          addEntryComponent(f) {
            this.entryComponentsSet.has(f.componentType) || (this.entryComponentsSet.add(f.componentType), this.entryComponents.push(f));
          }
        };
        e.TransitiveCompileNgModuleMetadata = j;
        function _(f) {
          return f || [];
        }
        var O = class {
          constructor(f, F) {
            let { useClass: P, useValue: M, useExisting: W, useFactory: X, deps: H, multi: z } = F;
            this.token = f, this.useClass = P || null, this.useValue = M, this.useExisting = W, this.useFactory = X || null, this.dependencies = H || null, this.multi = !!z;
          }
        };
        e.ProviderMeta = O;
        function x(f) {
          return f.reduce((F, P) => {
            let M = Array.isArray(P) ? x(P) : P;
            return F.concat(M);
          }, []);
        }
        e.flatten = x;
        function k(f) {
          return f.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function $(f, F, P) {
          let M;
          return P.isInline ? F.type.reference instanceof r.StaticSymbol ? M = `${F.type.reference.filePath}.${F.type.reference.name}.html` : M = `${i(f)}/${i(F.type)}.html` : M = P.templateUrl, F.type.reference instanceof r.StaticSymbol ? M : k(M);
        }
        e.templateSourceUrl = $;
        function t(f, F) {
          let P = f.moduleUrl.split(/\/\\/g), M = P[P.length - 1];
          return k(`css/${F}${M}.ngstyle.js`);
        }
        e.sharedStylesheetJitUrl = t;
        function o(f) {
          return k(`${i(f.type)}/module.ngfactory.js`);
        }
        e.ngModuleJitUrl = o;
        function E(f, F) {
          return k(`${i(f)}/${i(F.type)}.ngfactory.js`);
        }
        e.templateJitUrl = E;
      } }), ye = I({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ss(), u = JD(), s = class {
          constructor(a, c, h, C) {
            this.file = a, this.offset = c, this.line = h, this.col = C;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(a) {
            let c = this.file.content, h = c.length, C = this.offset, d = this.line, m = this.col;
            for (; C > 0 && a < 0; )
              if (C--, a++, c.charCodeAt(C) == r.$LF) {
                d--;
                let B = c.substr(0, C - 1).lastIndexOf(String.fromCharCode(r.$LF));
                m = B > 0 ? C - B : C;
              } else
                m--;
            for (; C < h && a > 0; ) {
              let T = c.charCodeAt(C);
              C++, a--, T == r.$LF ? (d++, m = 0) : m++;
            }
            return new s(this.file, C, d, m);
          }
          getContext(a, c) {
            let h = this.file.content, C = this.offset;
            if (C != null) {
              C > h.length - 1 && (C = h.length - 1);
              let d = C, m = 0, T = 0;
              for (; m < a && C > 0 && (C--, m++, !(h[C] == `
` && ++T == c)); )
                ;
              for (m = 0, T = 0; m < a && d < h.length - 1 && (d++, m++, !(h[d] == `
` && ++T == c)); )
                ;
              return { before: h.substring(C, this.offset), after: h.substring(this.offset, d + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = s;
        var D = class {
          constructor(a, c) {
            this.content = a, this.url = c;
          }
        };
        e.ParseSourceFile = D;
        var n = class {
          constructor(a, c) {
            let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = a, this.end = c, this.details = h;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new s(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var i;
        (function(a) {
          a[a.WARNING = 0] = "WARNING", a[a.ERROR = 1] = "ERROR";
        })(i = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var p = class {
          constructor(a, c) {
            let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.ERROR;
            this.span = a, this.msg = c, this.level = h;
          }
          contextualMessage() {
            let a = this.span.start.getContext(100, 3);
            return a ? `${this.msg} ("${a.before}[${i[this.level]} ->]${a.after}")` : this.msg;
          }
          toString() {
            let a = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${a}`;
          }
        };
        e.ParseError = p;
        function l(a, c) {
          let h = u.identifierModuleUrl(c), C = h != null ? `in ${a} ${u.identifierName(c)} in ${h}` : `in ${a} ${u.identifierName(c)}`, d = new D("", C);
          return new n(new s(d, -1, -1, -1), new s(d, -1, -1, -1));
        }
        e.typeSourceSpan = l;
        function g(a, c, h) {
          let C = `in ${a} ${c} in ${h}`, d = new D("", C);
          return new n(new s(d, -1, -1, -1), new s(d, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = g;
      } }), ZD = I({ "src/utils/front-matter/parse.js"(e, r) {
        "use strict";
        q();
        var u = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function s(D) {
          let n = D.match(u);
          if (!n)
            return { content: D };
          let { startDelimiter: i, language: p, value: l = "", endDelimiter: g } = n.groups, a = p.trim() || "yaml";
          if (i === "+++" && (a = "toml"), a !== "yaml" && i !== g)
            return { content: D };
          let [c] = n;
          return { frontMatter: { type: "front-matter", lang: a, value: l, startDelimiter: i, endDelimiter: g, raw: c.replace(/\n$/, "") }, content: c.replace(/[^\n]/g, " ") + D.slice(c.length) };
        }
        r.exports = s;
      } }), is = I({ "src/utils/get-last.js"(e, r) {
        "use strict";
        q();
        var u = (s) => s[s.length - 1];
        r.exports = u;
      } }), el = I({ "src/common/parser-create-error.js"(e, r) {
        "use strict";
        q();
        function u(s, D) {
          let n = new SyntaxError(s + " (" + D.start.line + ":" + D.start.column + ")");
          return n.loc = D, n;
        }
        r.exports = u;
      } }), as = {};
      us(as, { default: () => rl });
      function rl(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var ul = Ee({ "node_modules/escape-string-regexp/index.js"() {
        q();
      } }), os = I({ "node_modules/semver/internal/debug.js"(e, r) {
        q();
        var u = typeof Se == "object" && Se.env && Se.env.NODE_DEBUG && /\bsemver\b/i.test(Se.env.NODE_DEBUG) ? function() {
          for (var s = arguments.length, D = new Array(s), n = 0; n < s; n++)
            D[n] = arguments[n];
          return console.error("SEMVER", ...D);
        } : () => {
        };
        r.exports = u;
      } }), Ds = I({ "node_modules/semver/internal/constants.js"(e, r) {
        q();
        var u = "2.0.0", s = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16;
        r.exports = { SEMVER_SPEC_VERSION: u, MAX_LENGTH: s, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: n };
      } }), tl = I({ "node_modules/semver/internal/re.js"(e, r) {
        q();
        var { MAX_SAFE_COMPONENT_LENGTH: u } = Ds(), s = os();
        e = r.exports = {};
        var D = e.re = [], n = e.src = [], i = e.t = {}, p = 0, l = (g, a, c) => {
          let h = p++;
          s(g, h, a), i[g] = h, n[h] = a, D[h] = new RegExp(a, c ? "g" : void 0);
        };
        l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${n[i.NUMERICIDENTIFIER]})\\.(${n[i.NUMERICIDENTIFIER]})\\.(${n[i.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${n[i.NUMERICIDENTIFIERLOOSE]})\\.(${n[i.NUMERICIDENTIFIERLOOSE]})\\.(${n[i.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${n[i.NUMERICIDENTIFIER]}|${n[i.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${n[i.NUMERICIDENTIFIERLOOSE]}|${n[i.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${n[i.PRERELEASEIDENTIFIER]}(?:\\.${n[i.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${n[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[i.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${n[i.BUILDIDENTIFIER]}(?:\\.${n[i.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${n[i.MAINVERSION]}${n[i.PRERELEASE]}?${n[i.BUILD]}?`), l("FULL", `^${n[i.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${n[i.MAINVERSIONLOOSE]}${n[i.PRERELEASELOOSE]}?${n[i.BUILD]}?`), l("LOOSE", `^${n[i.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${n[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${n[i.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${n[i.XRANGEIDENTIFIER]})(?:\\.(${n[i.XRANGEIDENTIFIER]})(?:\\.(${n[i.XRANGEIDENTIFIER]})(?:${n[i.PRERELEASE]})?${n[i.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${n[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[i.XRANGEIDENTIFIERLOOSE]})(?:${n[i.PRERELEASELOOSE]})?${n[i.BUILD]}?)?)?`), l("XRANGE", `^${n[i.GTLT]}\\s*${n[i.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${n[i.GTLT]}\\s*${n[i.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?(?:$|[^\\d])`), l("COERCERTL", n[i.COERCE], true), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${n[i.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", l("TILDE", `^${n[i.LONETILDE]}${n[i.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${n[i.LONETILDE]}${n[i.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${n[i.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", l("CARET", `^${n[i.LONECARET]}${n[i.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${n[i.LONECARET]}${n[i.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${n[i.GTLT]}\\s*(${n[i.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${n[i.GTLT]}\\s*(${n[i.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${n[i.GTLT]}\\s*(${n[i.LOOSEPLAIN]}|${n[i.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${n[i.XRANGEPLAIN]})\\s+-\\s+(${n[i.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${n[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[i.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), nl = I({ "node_modules/semver/internal/parse-options.js"(e, r) {
        q();
        var u = ["includePrerelease", "loose", "rtl"], s = (D) => D ? typeof D != "object" ? { loose: true } : u.filter((n) => D[n]).reduce((n, i) => (n[i] = true, n), {}) : {};
        r.exports = s;
      } }), sl = I({ "node_modules/semver/internal/identifiers.js"(e, r) {
        q();
        var u = /^[0-9]+$/, s = (n, i) => {
          let p = u.test(n), l = u.test(i);
          return p && l && (n = +n, i = +i), n === i ? 0 : p && !l ? -1 : l && !p ? 1 : n < i ? -1 : 1;
        }, D = (n, i) => s(i, n);
        r.exports = { compareIdentifiers: s, rcompareIdentifiers: D };
      } }), il = I({ "node_modules/semver/classes/semver.js"(e, r) {
        q();
        var u = os(), { MAX_LENGTH: s, MAX_SAFE_INTEGER: D } = Ds(), { re: n, t: i } = tl(), p = nl(), { compareIdentifiers: l } = sl(), g = class {
          constructor(a, c) {
            if (c = p(c), a instanceof g) {
              if (a.loose === !!c.loose && a.includePrerelease === !!c.includePrerelease)
                return a;
              a = a.version;
            } else if (typeof a != "string")
              throw new TypeError(`Invalid Version: ${a}`);
            if (a.length > s)
              throw new TypeError(`version is longer than ${s} characters`);
            u("SemVer", a, c), this.options = c, this.loose = !!c.loose, this.includePrerelease = !!c.includePrerelease;
            let h = a.trim().match(c.loose ? n[i.LOOSE] : n[i.FULL]);
            if (!h)
              throw new TypeError(`Invalid Version: ${a}`);
            if (this.raw = a, this.major = +h[1], this.minor = +h[2], this.patch = +h[3], this.major > D || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > D || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > D || this.patch < 0)
              throw new TypeError("Invalid patch version");
            h[4] ? this.prerelease = h[4].split(".").map((C) => {
              if (/^[0-9]+$/.test(C)) {
                let d = +C;
                if (d >= 0 && d < D)
                  return d;
              }
              return C;
            }) : this.prerelease = [], this.build = h[5] ? h[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(a) {
            if (u("SemVer.compare", this.version, this.options, a), !(a instanceof g)) {
              if (typeof a == "string" && a === this.version)
                return 0;
              a = new g(a, this.options);
            }
            return a.version === this.version ? 0 : this.compareMain(a) || this.comparePre(a);
          }
          compareMain(a) {
            return a instanceof g || (a = new g(a, this.options)), l(this.major, a.major) || l(this.minor, a.minor) || l(this.patch, a.patch);
          }
          comparePre(a) {
            if (a instanceof g || (a = new g(a, this.options)), this.prerelease.length && !a.prerelease.length)
              return -1;
            if (!this.prerelease.length && a.prerelease.length)
              return 1;
            if (!this.prerelease.length && !a.prerelease.length)
              return 0;
            let c = 0;
            do {
              let h = this.prerelease[c], C = a.prerelease[c];
              if (u("prerelease compare", c, h, C), h === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (h === void 0)
                return -1;
              if (h !== C)
                return l(h, C);
            } while (++c);
          }
          compareBuild(a) {
            a instanceof g || (a = new g(a, this.options));
            let c = 0;
            do {
              let h = this.build[c], C = a.build[c];
              if (u("prerelease compare", c, h, C), h === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (h === void 0)
                return -1;
              if (h !== C)
                return l(h, C);
            } while (++c);
          }
          inc(a, c) {
            switch (a) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", c);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", c);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", c), this.inc("pre", c);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", c), this.inc("pre", c);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let h = this.prerelease.length;
                  for (; --h >= 0; )
                    typeof this.prerelease[h] == "number" && (this.prerelease[h]++, h = -2);
                  h === -1 && this.prerelease.push(0);
                }
                c && (l(this.prerelease[0], c) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [c, 0]) : this.prerelease = [c, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${a}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        r.exports = g;
      } }), jr = I({ "node_modules/semver/functions/compare.js"(e, r) {
        q();
        var u = il(), s = (D, n, i) => new u(D, i).compare(new u(n, i));
        r.exports = s;
      } }), al = I({ "node_modules/semver/functions/lt.js"(e, r) {
        q();
        var u = jr(), s = (D, n, i) => u(D, n, i) < 0;
        r.exports = s;
      } }), ol = I({ "node_modules/semver/functions/gte.js"(e, r) {
        q();
        var u = jr(), s = (D, n, i) => u(D, n, i) >= 0;
        r.exports = s;
      } }), Dl = I({ "src/utils/arrayify.js"(e, r) {
        "use strict";
        q(), r.exports = (u, s) => Object.entries(u).map((D) => {
          let [n, i] = D;
          return Object.assign({ [s]: n }, i);
        });
      } }), ll = I({ "package.json"(e, r) {
        r.exports = { version: "2.8.0" };
      } }), cl = I({ "node_modules/outdent/lib/index.js"(e, r) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function u() {
          for (var A = [], N = 0; N < arguments.length; N++)
            A[N] = arguments[N];
        }
        function s() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : D();
        }
        function D() {
          return { add: u, delete: u, get: u, set: u, has: function(A) {
            return false;
          } };
        }
        var n = Object.prototype.hasOwnProperty, i = function(A, N) {
          return n.call(A, N);
        };
        function p(A, N) {
          for (var R in N)
            i(N, R) && (A[R] = N[R]);
          return A;
        }
        var l = /^[ \t]*(?:\r\n|\r|\n)/, g = /(?:\r\n|\r|\n)[ \t]*$/, a = /^(?:[\r\n]|$)/, c = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, h = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function C(A, N, R) {
          var j = 0, _ = A[0].match(c);
          _ && (j = _[1].length);
          var O = "(\\r\\n|\\r|\\n).{0," + j + "}", x = new RegExp(O, "g");
          N && (A = A.slice(1));
          var k = R.newline, $ = R.trimLeadingNewline, t = R.trimTrailingNewline, o = typeof k == "string", E = A.length, f = A.map(function(F, P) {
            return F = F.replace(x, "$1"), P === 0 && $ && (F = F.replace(l, "")), P === E - 1 && t && (F = F.replace(g, "")), o && (F = F.replace(/\r\n|\n|\r/g, function(M) {
              return k;
            })), F;
          });
          return f;
        }
        function d(A, N) {
          for (var R = "", j = 0, _ = A.length; j < _; j++)
            R += A[j], j < _ - 1 && (R += N[j]);
          return R;
        }
        function m(A) {
          return i(A, "raw") && i(A, "length");
        }
        function T(A) {
          var N = s(), R = s();
          function j(O) {
            for (var x = [], k = 1; k < arguments.length; k++)
              x[k - 1] = arguments[k];
            if (m(O)) {
              var $ = O, t = (x[0] === j || x[0] === B) && h.test($[0]) && a.test($[1]), o = t ? R : N, E = o.get($);
              if (E || (E = C($, t, A), o.set($, E)), x.length === 0)
                return E[0];
              var f = d(E, t ? x.slice(1) : x);
              return f;
            } else
              return T(p(p({}, A), O || {}));
          }
          var _ = p(j, { string: function(O) {
            return C([O], false, A)[0];
          } });
          return _;
        }
        var B = T({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = B, e.default = B, typeof r < "u")
          try {
            r.exports = B, Object.defineProperty(B, "__esModule", { value: true }), B.default = B, B.outdent = B;
          } catch {
          }
      } }), hl = I({ "src/main/core-options.js"(e, r) {
        "use strict";
        q();
        var { outdent: u } = cl(), s = "Config", D = "Editor", n = "Format", i = "Other", p = "Output", l = "Global", g = "Special", a = { cursorOffset: { since: "1.4.0", category: g, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: D }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: u`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: g, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: i, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: g, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: i }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (c) => typeof c == "string" || typeof c == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (c) => typeof c == "string" || typeof c == "object", cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: l, description: u`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (c) => typeof c == "string" || typeof c == "object", cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: g, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, rangeStart: { since: "1.4.0", category: g, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, requirePragma: { since: "1.7.0", category: g, type: "boolean", default: false, description: u`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: i }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: D, CATEGORY_FORMAT: n, CATEGORY_OTHER: i, CATEGORY_OUTPUT: p, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: g, options: a };
      } }), pl = I({ "src/main/support.js"(e, r) {
        "use strict";
        q();
        var u = { compare: jr(), lt: al(), gte: ol() }, s = Dl(), D = ll().version, n = hl().options;
        function i() {
          let { plugins: l = [], showUnreleased: g = false, showDeprecated: a = false, showInternal: c = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = D.split("-", 1)[0], C = l.flatMap((A) => A.languages || []).filter(m), d = s(Object.assign({}, ...l.map((A) => {
            let { options: N } = A;
            return N;
          }), n), "name").filter((A) => m(A) && T(A)).sort((A, N) => A.name === N.name ? 0 : A.name < N.name ? -1 : 1).map(B).map((A) => {
            A = Object.assign({}, A), Array.isArray(A.default) && (A.default = A.default.length === 1 ? A.default[0].value : A.default.filter(m).sort((R, j) => u.compare(j.since, R.since))[0].value), Array.isArray(A.choices) && (A.choices = A.choices.filter((R) => m(R) && T(R)), A.name === "parser" && p(A, C, l));
            let N = Object.fromEntries(l.filter((R) => R.defaultOptions && R.defaultOptions[A.name] !== void 0).map((R) => [R.name, R.defaultOptions[A.name]]));
            return Object.assign(Object.assign({}, A), {}, { pluginDefaults: N });
          });
          return { languages: C, options: d };
          function m(A) {
            return g || !("since" in A) || A.since && u.gte(h, A.since);
          }
          function T(A) {
            return a || !("deprecated" in A) || A.deprecated && u.lt(h, A.deprecated);
          }
          function B(A) {
            if (c)
              return A;
            let { cliName: N, cliCategory: R, cliDescription: j } = A;
            return GD(A, UD);
          }
        }
        function p(l, g, a) {
          let c = new Set(l.choices.map((h) => h.value));
          for (let h of g)
            if (h.parsers) {
              for (let C of h.parsers)
                if (!c.has(C)) {
                  c.add(C);
                  let d = a.find((T) => T.parsers && T.parsers[C]), m = h.name;
                  d && d.name && (m += ` (plugin: ${d.name})`), l.choices.push({ value: C, description: m });
                }
            }
        }
        r.exports = { getSupportInfo: i };
      } }), fl = I({ "src/utils/is-non-empty-array.js"(e, r) {
        "use strict";
        q();
        function u(s) {
          return Array.isArray(s) && s.length > 0;
        }
        r.exports = u;
      } });
      function dl() {
        let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      }
      var El = Ee({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        q();
      } });
      function Cl(e) {
        if (typeof e != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
        return e.replace(dl(), "");
      }
      var ml = Ee({ "node_modules/strip-ansi/index.js"() {
        q(), El();
      } });
      function gl(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var Fl = Ee({ "node_modules/is-fullwidth-code-point/index.js"() {
        q();
      } }), Al = I({ "node_modules/emoji-regex/index.js"(e, r) {
        "use strict";
        q(), r.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), ls = {};
      us(ls, { default: () => vl });
      function vl(e) {
        if (typeof e != "string" || e.length === 0 || (e = Cl(e), e.length === 0))
          return 0;
        e = e.replace((0, cs.default)(), "  ");
        let r = 0;
        for (let u = 0; u < e.length; u++) {
          let s = e.codePointAt(u);
          s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && u++, r += gl(s) ? 2 : 1);
        }
        return r;
      }
      var cs, _l = Ee({ "node_modules/string-width/index.js"() {
        q(), ml(), Fl(), cs = YD(Al());
      } }), Sl = I({ "src/utils/get-string-width.js"(e, r) {
        "use strict";
        q();
        var u = (_l(), ns(ls)).default, s = /[^\x20-\x7F]/;
        function D(n) {
          return n ? s.test(n) ? u(n) : n.length : 0;
        }
        r.exports = D;
      } }), Ur = I({ "src/utils/text/skip.js"(e, r) {
        "use strict";
        q();
        function u(p) {
          return (l, g, a) => {
            let c = a && a.backwards;
            if (g === false)
              return false;
            let { length: h } = l, C = g;
            for (; C >= 0 && C < h; ) {
              let d = l.charAt(C);
              if (p instanceof RegExp) {
                if (!p.test(d))
                  return C;
              } else if (!p.includes(d))
                return C;
              c ? C-- : C++;
            }
            return C === -1 || C === h ? C : false;
          };
        }
        var s = u(/\s/), D = u(" 	"), n = u(",; 	"), i = u(/[^\n\r]/);
        r.exports = { skipWhitespace: s, skipSpaces: D, skipToLineEnd: n, skipEverythingButNewLine: i };
      } }), hs = I({ "src/utils/text/skip-inline-comment.js"(e, r) {
        "use strict";
        q();
        function u(s, D) {
          if (D === false)
            return false;
          if (s.charAt(D) === "/" && s.charAt(D + 1) === "*") {
            for (let n = D + 2; n < s.length; ++n)
              if (s.charAt(n) === "*" && s.charAt(n + 1) === "/")
                return n + 2;
          }
          return D;
        }
        r.exports = u;
      } }), ps = I({ "src/utils/text/skip-trailing-comment.js"(e, r) {
        "use strict";
        q();
        var { skipEverythingButNewLine: u } = Ur();
        function s(D, n) {
          return n === false ? false : D.charAt(n) === "/" && D.charAt(n + 1) === "/" ? u(D, n) : n;
        }
        r.exports = s;
      } }), fs = I({ "src/utils/text/skip-newline.js"(e, r) {
        "use strict";
        q();
        function u(s, D, n) {
          let i = n && n.backwards;
          if (D === false)
            return false;
          let p = s.charAt(D);
          if (i) {
            if (s.charAt(D - 1) === "\r" && p === `
`)
              return D - 2;
            if (p === `
` || p === "\r" || p === "\u2028" || p === "\u2029")
              return D - 1;
          } else {
            if (p === "\r" && s.charAt(D + 1) === `
`)
              return D + 2;
            if (p === `
` || p === "\r" || p === "\u2028" || p === "\u2029")
              return D + 1;
          }
          return D;
        }
        r.exports = u;
      } }), yl = I({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
        "use strict";
        q();
        var u = hs(), s = fs(), D = ps(), { skipSpaces: n } = Ur();
        function i(p, l) {
          let g = null, a = l;
          for (; a !== g; )
            g = a, a = n(p, a), a = u(p, a), a = D(p, a), a = s(p, a);
          return a;
        }
        r.exports = i;
      } }), Tl = I({ "src/common/util.js"(e, r) {
        "use strict";
        q();
        var { default: u } = (ul(), ns(as)), s = is(), { getSupportInfo: D } = pl(), n = fl(), i = Sl(), { skipWhitespace: p, skipSpaces: l, skipToLineEnd: g, skipEverythingButNewLine: a } = Ur(), c = hs(), h = ps(), C = fs(), d = yl(), m = (v) => v[v.length - 2];
        function T(v) {
          return (S, b, w) => {
            let L = w && w.backwards;
            if (b === false)
              return false;
            let { length: U } = S, V = b;
            for (; V >= 0 && V < U; ) {
              let Y = S.charAt(V);
              if (v instanceof RegExp) {
                if (!v.test(Y))
                  return V;
              } else if (!v.includes(Y))
                return V;
              L ? V-- : V++;
            }
            return V === -1 || V === U ? V : false;
          };
        }
        function B(v, S) {
          let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, w = l(v, b.backwards ? S - 1 : S, b), L = C(v, w, b);
          return w !== L;
        }
        function A(v, S, b) {
          for (let w = S; w < b; ++w)
            if (v.charAt(w) === `
`)
              return true;
          return false;
        }
        function N(v, S, b) {
          let w = b(S) - 1;
          w = l(v, w, { backwards: true }), w = C(v, w, { backwards: true }), w = l(v, w, { backwards: true });
          let L = C(v, w, { backwards: true });
          return w !== L;
        }
        function R(v, S) {
          let b = null, w = S;
          for (; w !== b; )
            b = w, w = g(v, w), w = c(v, w), w = l(v, w);
          return w = h(v, w), w = C(v, w), w !== false && B(v, w);
        }
        function j(v, S, b) {
          return R(v, b(S));
        }
        function _(v, S, b) {
          return d(v, b(S));
        }
        function O(v, S, b) {
          return v.charAt(_(v, S, b));
        }
        function x(v, S) {
          let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return l(v, b.backwards ? S - 1 : S, b) !== S;
        }
        function k(v, S) {
          let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, w = 0;
          for (let L = b; L < v.length; ++L)
            v[L] === "	" ? w = w + S - w % S : w++;
          return w;
        }
        function $(v, S) {
          let b = v.lastIndexOf(`
`);
          return b === -1 ? 0 : k(v.slice(b + 1).match(/^[\t ]*/)[0], S);
        }
        function t(v, S) {
          let b = { quote: '"', regex: /"/g, escaped: "&quot;" }, w = { quote: "'", regex: /'/g, escaped: "&apos;" }, L = S === "'" ? w : b, U = L === w ? b : w, V = L;
          if (v.includes(L.quote) || v.includes(U.quote)) {
            let Y = (v.match(L.regex) || []).length, te = (v.match(U.regex) || []).length;
            V = Y > te ? U : L;
          }
          return V;
        }
        function o(v, S) {
          let b = v.slice(1, -1), w = S.parser === "json" || S.parser === "json5" && S.quoteProps === "preserve" && !S.singleQuote ? '"' : S.__isInHtmlAttribute ? "'" : t(b, S.singleQuote ? "'" : '"').quote;
          return E(b, w, !(S.parser === "css" || S.parser === "less" || S.parser === "scss" || S.__embeddedInHtml));
        }
        function E(v, S, b) {
          let w = S === '"' ? "'" : '"', L = /\\(.)|(["'])/gs, U = v.replace(L, (V, Y, te) => Y === w ? Y : te === S ? "\\" + te : te || (b && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(Y) ? Y : "\\" + Y));
          return S + U + S;
        }
        function f(v) {
          return v.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function F(v, S) {
          let b = v.match(new RegExp(`(${u(S)})+`, "g"));
          return b === null ? 0 : b.reduce((w, L) => Math.max(w, L.length / S.length), 0);
        }
        function P(v, S) {
          let b = v.match(new RegExp(`(${u(S)})+`, "g"));
          if (b === null)
            return 0;
          let w = /* @__PURE__ */ new Map(), L = 0;
          for (let U of b) {
            let V = U.length / S.length;
            w.set(V, true), V > L && (L = V);
          }
          for (let U = 1; U < L; U++)
            if (!w.get(U))
              return U;
          return L + 1;
        }
        function M(v, S) {
          (v.comments || (v.comments = [])).push(S), S.printed = false, S.nodeDescription = ee(v);
        }
        function W(v, S) {
          S.leading = true, S.trailing = false, M(v, S);
        }
        function X(v, S, b) {
          S.leading = false, S.trailing = false, b && (S.marker = b), M(v, S);
        }
        function H(v, S) {
          S.leading = false, S.trailing = true, M(v, S);
        }
        function z(v, S) {
          let { languages: b } = D({ plugins: S.plugins }), w = b.find((L) => {
            let { name: U } = L;
            return U.toLowerCase() === v;
          }) || b.find((L) => {
            let { aliases: U } = L;
            return Array.isArray(U) && U.includes(v);
          }) || b.find((L) => {
            let { extensions: U } = L;
            return Array.isArray(U) && U.includes(`.${v}`);
          });
          return w && w.parsers[0];
        }
        function J(v) {
          return v && v.type === "front-matter";
        }
        function Z(v) {
          let S = /* @__PURE__ */ new WeakMap();
          return function(b) {
            return S.has(b) || S.set(b, Symbol(v)), S.get(b);
          };
        }
        function ee(v) {
          let S = v.type || v.kind || "(unknown type)", b = String(v.name || v.id && (typeof v.id == "object" ? v.id.name : v.id) || v.key && (typeof v.key == "object" ? v.key.name : v.key) || v.value && (typeof v.value == "object" ? "" : String(v.value)) || v.operator || "");
          return b.length > 20 && (b = b.slice(0, 19) + "\u2026"), S + (b ? " " + b : "");
        }
        r.exports = { inferParserByLanguage: z, getStringWidth: i, getMaxContinuousCount: F, getMinNotPresentContinuousCount: P, getPenultimate: m, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: d, getNextNonSpaceNonCommentCharacterIndex: _, getNextNonSpaceNonCommentCharacter: O, skip: T, skipWhitespace: p, skipSpaces: l, skipToLineEnd: g, skipEverythingButNewLine: a, skipInlineComment: c, skipTrailingComment: h, skipNewline: C, isNextLineEmptyAfterIndex: R, isNextLineEmpty: j, isPreviousLineEmpty: N, hasNewline: B, hasNewlineInRange: A, hasSpaces: x, getAlignmentSize: k, getIndentSize: $, getPreferredQuote: t, printString: o, printNumber: f, makeString: E, addLeadingComment: W, addDanglingComment: X, addTrailingComment: H, isFrontMatterNode: J, isNonEmptyArray: n, createGroupIdMapper: Z };
      } }), Bl = I({ "vendors/html-tag-names.json"(e, r) {
        r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
      } }), ds = I({ "src/language-html/utils/array-to-map.js"(e, r) {
        "use strict";
        q();
        function u(s) {
          let D = /* @__PURE__ */ Object.create(null);
          for (let n of s)
            D[n] = true;
          return D;
        }
        r.exports = u;
      } }), bl = I({ "src/language-html/utils/html-tag-names.js"(e, r) {
        "use strict";
        q();
        var { htmlTagNames: u } = Bl(), s = ds(), D = s(u);
        r.exports = D;
      } }), wl = I({ "vendors/html-element-attributes.json"(e, r) {
        r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
      } }), Nl = I({ "src/language-html/utils/map-object.js"(e, r) {
        "use strict";
        q();
        function u(s, D) {
          let n = /* @__PURE__ */ Object.create(null);
          for (let [i, p] of Object.entries(s))
            n[i] = D(p, i);
          return n;
        }
        r.exports = u;
      } }), Ol = I({ "src/language-html/utils/html-elements-attributes.js"(e, r) {
        "use strict";
        q();
        var { htmlElementAttributes: u } = wl(), s = Nl(), D = ds(), n = s(u, D);
        r.exports = n;
      } }), ql = I({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
        "use strict";
        q();
        function u(s) {
          return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
        }
        r.exports = u;
      } }), Il = I({ "src/language-html/pragma.js"(e, r) {
        "use strict";
        q();
        function u(D) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D);
        }
        function s(D) {
          return `<!-- @format -->

` + D.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: u, insertPragma: s };
      } }), Rl = I({ "src/language-html/ast.js"(e, r) {
        "use strict";
        q();
        var u = { attrs: true, children: true }, s = /* @__PURE__ */ new Set(["parent"]), D = class {
          constructor() {
            let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            for (let p of /* @__PURE__ */ new Set([...s, ...Object.keys(i)]))
              this.setProperty(p, i[p]);
          }
          setProperty(i, p) {
            if (this[i] !== p) {
              if (i in u && (p = p.map((l) => this.createChild(l))), !s.has(i)) {
                this[i] = p;
                return;
              }
              Object.defineProperty(this, i, { value: p, enumerable: false, configurable: true });
            }
          }
          map(i) {
            let p;
            for (let l in u) {
              let g = this[l];
              if (g) {
                let a = n(g, (c) => c.map(i));
                p !== g && (p || (p = new D({ parent: this.parent })), p.setProperty(l, a));
              }
            }
            if (p)
              for (let l in this)
                l in u || (p[l] = this[l]);
            return i(p || this);
          }
          walk(i) {
            for (let p in u) {
              let l = this[p];
              if (l)
                for (let g = 0; g < l.length; g++)
                  l[g].walk(i);
            }
            i(this);
          }
          createChild(i) {
            let p = i instanceof D ? i.clone() : new D(i);
            return p.setProperty("parent", this), p;
          }
          insertChildBefore(i, p) {
            this.children.splice(this.children.indexOf(i), 0, this.createChild(p));
          }
          removeChild(i) {
            this.children.splice(this.children.indexOf(i), 1);
          }
          replaceChild(i, p) {
            this.children[this.children.indexOf(i)] = this.createChild(p);
          }
          clone() {
            return new D(this);
          }
          get firstChild() {
            var i;
            return (i = this.children) === null || i === void 0 ? void 0 : i[0];
          }
          get lastChild() {
            var i;
            return (i = this.children) === null || i === void 0 ? void 0 : i[this.children.length - 1];
          }
          get prev() {
            var i;
            return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) - 1];
          }
          get next() {
            var i;
            return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) + 1];
          }
          get rawName() {
            return this.hasExplicitNamespace ? this.fullName : this.name;
          }
          get fullName() {
            return this.namespace ? this.namespace + ":" + this.name : this.name;
          }
          get attrMap() {
            return Object.fromEntries(this.attrs.map((i) => [i.fullName, i.value]));
          }
        };
        function n(i, p) {
          let l = i.map(p);
          return l.some((g, a) => g !== i[a]) ? l : i;
        }
        r.exports = { Node: D };
      } }), xl = I({ "src/language-html/conditional-comment.js"(e, r) {
        "use strict";
        q();
        var { ParseSourceSpan: u } = ye(), s = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: n }, { regex: /^\[if([^\]]*)]><!$/, parse: i }, { regex: /^<!\s*\[endif]$/, parse: p }];
        function D(l, g) {
          if (l.value)
            for (let { regex: a, parse: c } of s) {
              let h = l.value.match(a);
              if (h)
                return c(l, g, h);
            }
          return null;
        }
        function n(l, g, a) {
          let [, c, h, C] = a, d = 4 + c.length, m = l.sourceSpan.start.moveBy(d), T = m.moveBy(C.length), [B, A] = (() => {
            try {
              return [true, g(C, m).children];
            } catch {
              let N = { type: "text", value: C, sourceSpan: new u(m, T) };
              return [false, [N]];
            }
          })();
          return { type: "ieConditionalComment", complete: B, children: A, condition: h.trim().replace(/\s+/g, " "), sourceSpan: l.sourceSpan, startSourceSpan: new u(l.sourceSpan.start, m), endSourceSpan: new u(T, l.sourceSpan.end) };
        }
        function i(l, g, a) {
          let [, c] = a;
          return { type: "ieConditionalStartComment", condition: c.trim().replace(/\s+/g, " "), sourceSpan: l.sourceSpan };
        }
        function p(l) {
          return { type: "ieConditionalEndComment", sourceSpan: l.sourceSpan };
        }
        r.exports = { parseIeConditionalComment: D };
      } }), Pl = I({ "src/language-html/loc.js"(e, r) {
        "use strict";
        q();
        function u(D) {
          return D.sourceSpan.start.offset;
        }
        function s(D) {
          return D.sourceSpan.end.offset;
        }
        r.exports = { locStart: u, locEnd: s };
      } }), Je = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r;
        (function(l) {
          l[l.RAW_TEXT = 0] = "RAW_TEXT", l[l.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", l[l.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        })(r = e.TagContentType || (e.TagContentType = {}));
        function u(l) {
          if (l[0] != ":")
            return [null, l];
          let g = l.indexOf(":", 1);
          if (g == -1)
            throw new Error(`Unsupported format "${l}" expecting ":namespace:name"`);
          return [l.slice(1, g), l.slice(g + 1)];
        }
        e.splitNsName = u;
        function s(l) {
          return u(l)[1] === "ng-container";
        }
        e.isNgContainer = s;
        function D(l) {
          return u(l)[1] === "ng-content";
        }
        e.isNgContent = D;
        function n(l) {
          return u(l)[1] === "ng-template";
        }
        e.isNgTemplate = n;
        function i(l) {
          return l === null ? null : u(l)[0];
        }
        e.getNsPrefix = i;
        function p(l, g) {
          return l ? `:${l}:${g}` : g;
        }
        e.mergeNsAndName = p, e.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, e.NGSP_UNICODE = "\uE500", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
      } }), Es = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Je(), u = class {
          constructor() {
            let { closedByChildren: i, implicitNamespacePrefix: p, contentType: l = r.TagContentType.PARSABLE_DATA, closedByParent: g = false, isVoid: a = false, ignoreFirstLf: c = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, i && i.length > 0 && i.forEach((h) => this.closedByChildren[h] = true), this.isVoid = a, this.closedByParent = g || a, this.implicitNamespacePrefix = p || null, this.contentType = l, this.ignoreFirstLf = c;
          }
          isClosedByChild(i) {
            return this.isVoid || i.toLowerCase() in this.closedByChildren;
          }
        };
        e.HtmlTagDefinition = u;
        var s, D;
        function n(i) {
          return D || (s = new u(), D = { base: new u({ isVoid: true }), meta: new u({ isVoid: true }), area: new u({ isVoid: true }), embed: new u({ isVoid: true }), link: new u({ isVoid: true }), img: new u({ isVoid: true }), input: new u({ isVoid: true }), param: new u({ isVoid: true }), hr: new u({ isVoid: true }), br: new u({ isVoid: true }), source: new u({ isVoid: true }), track: new u({ isVoid: true }), wbr: new u({ isVoid: true }), p: new u({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new u({ closedByChildren: ["tbody", "tfoot"] }), tbody: new u({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new u({ closedByChildren: ["tbody"], closedByParent: true }), tr: new u({ closedByChildren: ["tr"], closedByParent: true }), td: new u({ closedByChildren: ["td", "th"], closedByParent: true }), th: new u({ closedByChildren: ["td", "th"], closedByParent: true }), col: new u({ isVoid: true }), svg: new u({ implicitNamespacePrefix: "svg" }), math: new u({ implicitNamespacePrefix: "math" }), li: new u({ closedByChildren: ["li"], closedByParent: true }), dt: new u({ closedByChildren: ["dt", "dd"] }), dd: new u({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new u({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new u({ closedByChildren: ["optgroup"], closedByParent: true }), option: new u({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new u({ ignoreFirstLf: true }), listing: new u({ ignoreFirstLf: true }), style: new u({ contentType: r.TagContentType.RAW_TEXT }), script: new u({ contentType: r.TagContentType.RAW_TEXT }), title: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), D[i] || s;
        }
        e.getHtmlTagDefinition = n;
      } }), kl = I({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(u) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
            this.path = u, this.position = s;
          }
          get empty() {
            return !this.path || !this.path.length;
          }
          get head() {
            return this.path[0];
          }
          get tail() {
            return this.path[this.path.length - 1];
          }
          parentOf(u) {
            return u && this.path[this.path.indexOf(u) - 1];
          }
          childOf(u) {
            return this.path[this.path.indexOf(u) + 1];
          }
          first(u) {
            for (let s = this.path.length - 1; s >= 0; s--) {
              let D = this.path[s];
              if (D instanceof u)
                return D;
            }
          }
          push(u) {
            this.path.push(u);
          }
          pop() {
            return this.path.pop();
          }
        };
        e.AstPath = r;
      } }), Cs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kl(), u = class {
          constructor(d, m, T) {
            this.value = d, this.sourceSpan = m, this.i18n = T, this.type = "text";
          }
          visit(d, m) {
            return d.visitText(this, m);
          }
        };
        e.Text = u;
        var s = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "cdata";
          }
          visit(d, m) {
            return d.visitCdata(this, m);
          }
        };
        e.CDATA = s;
        var D = class {
          constructor(d, m, T, B, A, N) {
            this.switchValue = d, this.type = m, this.cases = T, this.sourceSpan = B, this.switchValueSourceSpan = A, this.i18n = N;
          }
          visit(d, m) {
            return d.visitExpansion(this, m);
          }
        };
        e.Expansion = D;
        var n = class {
          constructor(d, m, T, B, A) {
            this.value = d, this.expression = m, this.sourceSpan = T, this.valueSourceSpan = B, this.expSourceSpan = A;
          }
          visit(d, m) {
            return d.visitExpansionCase(this, m);
          }
        };
        e.ExpansionCase = n;
        var i = class {
          constructor(d, m, T) {
            let B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            this.name = d, this.value = m, this.sourceSpan = T, this.valueSpan = B, this.nameSpan = A, this.i18n = N, this.type = "attribute";
          }
          visit(d, m) {
            return d.visitAttribute(this, m);
          }
        };
        e.Attribute = i;
        var p = class {
          constructor(d, m, T, B) {
            let A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, R = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, j = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
            this.name = d, this.attrs = m, this.children = T, this.sourceSpan = B, this.startSourceSpan = A, this.endSourceSpan = N, this.nameSpan = R, this.i18n = j, this.type = "element";
          }
          visit(d, m) {
            return d.visitElement(this, m);
          }
        };
        e.Element = p;
        var l = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "comment";
          }
          visit(d, m) {
            return d.visitComment(this, m);
          }
        };
        e.Comment = l;
        var g = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "docType";
          }
          visit(d, m) {
            return d.visitDocType(this, m);
          }
        };
        e.DocType = g;
        function a(d, m) {
          let T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, B = [], A = d.visit ? (N) => d.visit(N, T) || N.visit(d, T) : (N) => N.visit(d, T);
          return m.forEach((N) => {
            let R = A(N);
            R && B.push(R);
          }), B;
        }
        e.visitAll = a;
        var c = class {
          constructor() {
          }
          visitElement(d, m) {
            this.visitChildren(m, (T) => {
              T(d.attrs), T(d.children);
            });
          }
          visitAttribute(d, m) {
          }
          visitText(d, m) {
          }
          visitCdata(d, m) {
          }
          visitComment(d, m) {
          }
          visitDocType(d, m) {
          }
          visitExpansion(d, m) {
            return this.visitChildren(m, (T) => {
              T(d.cases);
            });
          }
          visitExpansionCase(d, m) {
          }
          visitChildren(d, m) {
            let T = [], B = this;
            function A(N) {
              N && T.push(a(B, N, d));
            }
            return m(A), Array.prototype.concat.apply([], T);
          }
        };
        e.RecursiveVisitor = c;
        function h(d) {
          let m = d.sourceSpan.start.offset, T = d.sourceSpan.end.offset;
          return d instanceof p && (d.endSourceSpan ? T = d.endSourceSpan.end.offset : d.children && d.children.length && (T = h(d.children[d.children.length - 1]).end)), { start: m, end: T };
        }
        function C(d, m) {
          let T = [], B = new class extends c {
            visit(A, N) {
              let R = h(A);
              if (R.start <= m && m < R.end)
                T.push(A);
              else
                return true;
            }
          }();
          return a(B, d), new r.AstPath(T, m);
        }
        e.findNode = C;
      } }), Ll = I({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        function r(D, n) {
          if (n != null) {
            if (!Array.isArray(n))
              throw new Error(`Expected '${D}' to be an array of strings.`);
            for (let i = 0; i < n.length; i += 1)
              if (typeof n[i] != "string")
                throw new Error(`Expected '${D}' to be an array of strings.`);
          }
        }
        e.assertArrayOfStrings = r;
        var u = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function s(D, n) {
          if (n != null && !(Array.isArray(n) && n.length == 2))
            throw new Error(`Expected '${D}' to be an array, [start, end].`);
          if (n != null) {
            let i = n[0], p = n[1];
            u.forEach((l) => {
              if (l.test(i) || l.test(p))
                throw new Error(`['${i}', '${p}'] contains unusable interpolation symbol.`);
            });
          }
        }
        e.assertInterpolationSymbols = s;
      } }), $l = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ll(), u = class {
          constructor(s, D) {
            this.start = s, this.end = D;
          }
          static fromArray(s) {
            return s ? (r.assertInterpolationSymbols("interpolation", s), new u(s[0], s[1])) : e.DEFAULT_INTERPOLATION_CONFIG;
          }
        };
        e.InterpolationConfig = u, e.DEFAULT_INTERPOLATION_CONFIG = new u("{{", "}}");
      } }), Ml = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ss(), u = ye(), s = $l(), D = Je(), n;
        (function(t) {
          t[t.TAG_OPEN_START = 0] = "TAG_OPEN_START", t[t.TAG_OPEN_END = 1] = "TAG_OPEN_END", t[t.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", t[t.TAG_CLOSE = 3] = "TAG_CLOSE", t[t.TEXT = 4] = "TEXT", t[t.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", t[t.RAW_TEXT = 6] = "RAW_TEXT", t[t.COMMENT_START = 7] = "COMMENT_START", t[t.COMMENT_END = 8] = "COMMENT_END", t[t.CDATA_START = 9] = "CDATA_START", t[t.CDATA_END = 10] = "CDATA_END", t[t.ATTR_NAME = 11] = "ATTR_NAME", t[t.ATTR_QUOTE = 12] = "ATTR_QUOTE", t[t.ATTR_VALUE = 13] = "ATTR_VALUE", t[t.DOC_TYPE_START = 14] = "DOC_TYPE_START", t[t.DOC_TYPE_END = 15] = "DOC_TYPE_END", t[t.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", t[t.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", t[t.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", t[t.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", t[t.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", t[t.EOF = 21] = "EOF";
        })(n = e.TokenType || (e.TokenType = {}));
        var i = class {
          constructor(t, o, E) {
            this.type = t, this.parts = o, this.sourceSpan = E;
          }
        };
        e.Token = i;
        var p = class extends u.ParseError {
          constructor(t, o, E) {
            super(E, t), this.tokenType = o;
          }
        };
        e.TokenError = p;
        var l = class {
          constructor(t, o) {
            this.tokens = t, this.errors = o;
          }
        };
        e.TokenizeResult = l;
        function g(t, o, E) {
          let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return new d(new u.ParseSourceFile(t, o), E, f).tokenize();
        }
        e.tokenize = g;
        var a = /\r\n?/g;
        function c(t) {
          return `Unexpected character "${t === r.$EOF ? "EOF" : String.fromCharCode(t)}"`;
        }
        function h(t) {
          return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
        }
        var C = class {
          constructor(t) {
            this.error = t;
          }
        }, d = class {
          constructor(t, o, E) {
            this._getTagContentType = o, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = E.tokenizeExpansionForms || false, this._interpolationConfig = E.interpolationConfig || s.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = E.leadingTriviaChars && E.leadingTriviaChars.map((F) => F.codePointAt(0) || 0), this._canSelfClose = E.canSelfClose || false, this._allowHtmComponentClosingTags = E.allowHtmComponentClosingTags || false;
            let f = E.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = E.escapedString ? new k(t, f) : new x(t, f);
            try {
              this._cursor.init();
            } catch (F) {
              this.handleError(F);
            }
          }
          _processCarriageReturns(t) {
            return t.replace(a, `
`);
          }
          tokenize() {
            for (; this._cursor.peek() !== r.$EOF; ) {
              let t = this._cursor.clone();
              try {
                if (this._attemptCharCode(r.$LT))
                  if (this._attemptCharCode(r.$BANG))
                    this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr("--") ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(t);
                  else if (this._attemptCharCode(r.$SLASH))
                    this._consumeTagClose(t);
                  else {
                    let o = this._cursor.clone();
                    this._attemptCharCode(r.$QUESTION) ? (this._cursor = o, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
                  }
                else
                  this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
              } catch (o) {
                this.handleError(o);
              }
            }
            return this._beginToken(n.EOF), this._endToken([]), new l(O(this.tokens), this.errors);
          }
          _tokenizeExpansionForm() {
            if (this.isExpansionFormStart())
              return this._consumeExpansionFormStart(), true;
            if (R(this._cursor.peek()) && this._isInExpansionForm())
              return this._consumeExpansionCaseStart(), true;
            if (this._cursor.peek() === r.$RBRACE) {
              if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), true;
              if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), true;
            }
            return false;
          }
          _beginToken(t) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            this._currentTokenStart = o, this._currentTokenType = t;
          }
          _endToken(t) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            if (this._currentTokenStart === null)
              throw new p("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(o));
            if (this._currentTokenType === null)
              throw new p("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let E = new i(this._currentTokenType, t, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
            return this.tokens.push(E), this._currentTokenStart = null, this._currentTokenType = null, E;
          }
          _createError(t, o) {
            this._isInExpansionForm() && (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let E = new p(t, this._currentTokenType, o);
            return this._currentTokenStart = null, this._currentTokenType = null, new C(E);
          }
          handleError(t) {
            if (t instanceof $ && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof C)
              this.errors.push(t.error);
            else
              throw t;
          }
          _attemptCharCode(t) {
            return this._cursor.peek() === t ? (this._cursor.advance(), true) : false;
          }
          _attemptCharCodeCaseInsensitive(t) {
            return j(this._cursor.peek(), t) ? (this._cursor.advance(), true) : false;
          }
          _requireCharCode(t) {
            let o = this._cursor.clone();
            if (!this._attemptCharCode(t))
              throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _attemptStr(t) {
            let o = t.length;
            if (this._cursor.charsLeft() < o)
              return false;
            let E = this._cursor.clone();
            for (let f = 0; f < o; f++)
              if (!this._attemptCharCode(t.charCodeAt(f)))
                return this._cursor = E, false;
            return true;
          }
          _attemptStrCaseInsensitive(t) {
            for (let o = 0; o < t.length; o++)
              if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(o)))
                return false;
            return true;
          }
          _requireStr(t) {
            let o = this._cursor.clone();
            if (!this._attemptStr(t))
              throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _requireStrCaseInsensitive(t) {
            let o = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(t))
              throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _attemptCharCodeUntilFn(t) {
            for (; !t(this._cursor.peek()); )
              this._cursor.advance();
          }
          _requireCharCodeUntilFn(t, o) {
            let E = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(t), this._cursor.clone().diff(E) < o)
              throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(E));
          }
          _attemptUntilChar(t) {
            for (; this._cursor.peek() !== t; )
              this._cursor.advance();
          }
          _readChar(t) {
            if (t && this._cursor.peek() === r.$AMPERSAND)
              return this._decodeEntity();
            {
              let o = String.fromCodePoint(this._cursor.peek());
              return this._cursor.advance(), o;
            }
          }
          _decodeEntity() {
            let t = this._cursor.clone();
            if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
              let o = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), E = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(A), this._cursor.peek() != r.$SEMICOLON)
                throw this._createError(c(this._cursor.peek()), this._cursor.getSpan());
              let f = this._cursor.getChars(E);
              this._cursor.advance();
              try {
                let F = parseInt(f, o ? 16 : 10);
                return String.fromCharCode(F);
              } catch {
                throw this._createError(h(this._cursor.getChars(t)), this._cursor.getSpan());
              }
            } else {
              let o = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(N), this._cursor.peek() != r.$SEMICOLON)
                return this._cursor = o, "&";
              let E = this._cursor.getChars(o);
              this._cursor.advance();
              let f = D.NAMED_ENTITIES[E];
              if (!f)
                throw this._createError(h(E), this._cursor.getSpan(t));
              return f;
            }
          }
          _consumeRawText(t, o) {
            this._beginToken(t ? n.ESCAPABLE_RAW_TEXT : n.RAW_TEXT);
            let E = [];
            for (; ; ) {
              let f = this._cursor.clone(), F = o();
              if (this._cursor = f, F)
                break;
              E.push(this._readChar(t));
            }
            return this._endToken([this._processCarriageReturns(E.join(""))]);
          }
          _consumeComment(t) {
            this._beginToken(n.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(n.COMMENT_END), this._requireStr("-->"), this._endToken([]);
          }
          _consumeBogusComment(t) {
            this._beginToken(n.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(n.COMMENT_END), this._cursor.advance(), this._endToken([]);
          }
          _consumeCdata(t) {
            this._beginToken(n.CDATA_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(n.CDATA_END), this._requireStr("]]>"), this._endToken([]);
          }
          _consumeDocType(t) {
            this._beginToken(n.DOC_TYPE_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(n.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
          }
          _consumePrefixAndName() {
            let t = this._cursor.clone(), o = "";
            for (; this._cursor.peek() !== r.$COLON && !B(this._cursor.peek()); )
              this._cursor.advance();
            let E;
            this._cursor.peek() === r.$COLON ? (o = this._cursor.getChars(t), this._cursor.advance(), E = this._cursor.clone()) : E = t, this._requireCharCodeUntilFn(T, o === "" ? 0 : 1);
            let f = this._cursor.getChars(E);
            return [o, f];
          }
          _consumeTagOpen(t) {
            let o, E, f, F = this.tokens.length, P = this._cursor.clone(), M = [];
            try {
              if (!r.isAsciiLetter(this._cursor.peek()))
                throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(t));
              for (f = this._consumeTagOpenStart(t), E = f.parts[0], o = f.parts[1], this._attemptCharCodeUntilFn(m); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT; ) {
                let [X, H] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$EQ)) {
                  this._attemptCharCodeUntilFn(m);
                  let z = this._consumeAttributeValue();
                  M.push({ prefix: X, name: H, value: z });
                } else
                  M.push({ prefix: X, name: H });
                this._attemptCharCodeUntilFn(m);
              }
              this._consumeTagOpenEnd();
            } catch (X) {
              if (X instanceof C) {
                this._cursor = P, f && (this.tokens.length = F), this._beginToken(n.TEXT, t), this._endToken(["<"]);
                return;
              }
              throw X;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === n.TAG_OPEN_END_VOID)
              return;
            let W = this._getTagContentType(o, E, this._fullNameStack.length > 0, M);
            this._handleFullNameStackForTagOpen(E, o), W === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(E, o, false) : W === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(E, o, true);
          }
          _consumeRawTextWithTagClose(t, o, E) {
            let f = this._consumeRawText(E, () => !this._attemptCharCode(r.$LT) || !this._attemptCharCode(r.$SLASH) || (this._attemptCharCodeUntilFn(m), !this._attemptStrCaseInsensitive(t ? `${t}:${o}` : o)) ? false : (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$GT)));
            this._beginToken(n.TAG_CLOSE), this._requireCharCodeUntilFn((F) => F === r.$GT, 3), this._cursor.advance(), this._endToken([t, o]), this._handleFullNameStackForTagClose(t, o);
          }
          _consumeTagOpenStart(t) {
            this._beginToken(n.TAG_OPEN_START, t);
            let o = this._consumePrefixAndName();
            return this._endToken(o);
          }
          _consumeAttributeName() {
            let t = this._cursor.peek();
            if (t === r.$SQ || t === r.$DQ)
              throw this._createError(c(t), this._cursor.getSpan());
            this._beginToken(n.ATTR_NAME);
            let o = this._consumePrefixAndName();
            return this._endToken(o), o;
          }
          _consumeAttributeValue() {
            let t;
            if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
              this._beginToken(n.ATTR_QUOTE);
              let o = this._cursor.peek();
              this._cursor.advance(), this._endToken([String.fromCodePoint(o)]), this._beginToken(n.ATTR_VALUE);
              let E = [];
              for (; this._cursor.peek() !== o; )
                E.push(this._readChar(true));
              t = this._processCarriageReturns(E.join("")), this._endToken([t]), this._beginToken(n.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(o)]);
            } else {
              this._beginToken(n.ATTR_VALUE);
              let o = this._cursor.clone();
              this._requireCharCodeUntilFn(T, 1), t = this._processCarriageReturns(this._cursor.getChars(o)), this._endToken([t]);
            }
            return t;
          }
          _consumeTagOpenEnd() {
            let t = this._attemptCharCode(r.$SLASH) ? n.TAG_OPEN_END_VOID : n.TAG_OPEN_END;
            this._beginToken(t), this._requireCharCode(r.$GT), this._endToken([]);
          }
          _consumeTagClose(t) {
            if (this._beginToken(n.TAG_CLOSE, t), this._attemptCharCodeUntilFn(m), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([]);
            else {
              let [o, E] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([o, E]), this._handleFullNameStackForTagClose(o, E);
            }
          }
          _consumeExpansionFormStart() {
            this._beginToken(n.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(n.EXPANSION_FORM_START), this._beginToken(n.RAW_TEXT);
            let t = this._readUntil(r.$COMMA);
            this._endToken([t]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m), this._beginToken(n.RAW_TEXT);
            let o = this._readUntil(r.$COMMA);
            this._endToken([o]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(n.EXPANSION_CASE_VALUE);
            let t = this._readUntil(r.$LBRACE).trim();
            this._endToken([t]), this._attemptCharCodeUntilFn(m), this._beginToken(n.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.push(n.EXPANSION_CASE_EXP_START);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(n.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.pop();
          }
          _consumeExpansionFormEnd() {
            this._beginToken(n.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
          }
          _consumeText() {
            let t = this._cursor.clone();
            this._beginToken(n.TEXT, t);
            let o = [];
            do
              this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (o.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (o.push(this._interpolationConfig.end), this._inInterpolation = false) : o.push(this._readChar(true));
            while (!this._isTextEnd());
            this._endToken([this._processCarriageReturns(o.join(""))]);
          }
          _isTextEnd() {
            return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()));
          }
          _readUntil(t) {
            let o = this._cursor.clone();
            return this._attemptUntilChar(t), this._cursor.getChars(o);
          }
          _isInExpansionCase() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === n.EXPANSION_CASE_EXP_START;
          }
          _isInExpansionForm() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === n.EXPANSION_FORM_START;
          }
          isExpansionFormStart() {
            if (this._cursor.peek() !== r.$LBRACE)
              return false;
            if (this._interpolationConfig) {
              let t = this._cursor.clone(), o = this._attemptStr(this._interpolationConfig.start);
              return this._cursor = t, !o;
            }
            return true;
          }
          _handleFullNameStackForTagOpen(t, o) {
            let E = D.mergeNsAndName(t, o);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === E) && this._fullNameStack.push(E);
          }
          _handleFullNameStackForTagClose(t, o) {
            let E = D.mergeNsAndName(t, o);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === E && this._fullNameStack.pop();
          }
        };
        function m(t) {
          return !r.isWhitespace(t) || t === r.$EOF;
        }
        function T(t) {
          return r.isWhitespace(t) || t === r.$GT || t === r.$SLASH || t === r.$SQ || t === r.$DQ || t === r.$EQ;
        }
        function B(t) {
          return (t < r.$a || r.$z < t) && (t < r.$A || r.$Z < t) && (t < r.$0 || t > r.$9);
        }
        function A(t) {
          return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiHexDigit(t);
        }
        function N(t) {
          return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiLetter(t);
        }
        function R(t) {
          return t === r.$EQ || r.isAsciiLetter(t) || r.isDigit(t);
        }
        function j(t, o) {
          return _(t) == _(o);
        }
        function _(t) {
          return t >= r.$a && t <= r.$z ? t - r.$a + r.$A : t;
        }
        function O(t) {
          let o = [], E;
          for (let f = 0; f < t.length; f++) {
            let F = t[f];
            E && E.type == n.TEXT && F.type == n.TEXT ? (E.parts[0] += F.parts[0], E.sourceSpan.end = F.sourceSpan.end) : (E = F, o.push(E));
          }
          return o;
        }
        var x = class {
          constructor(t, o) {
            if (t instanceof x)
              this.file = t.file, this.input = t.input, this.end = t.end, this.state = Object.assign({}, t.state);
            else {
              if (!o)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = t, this.input = t.content, this.end = o.endPos, this.state = { peek: -1, offset: o.startPos, line: o.startLine, column: o.startCol };
            }
          }
          clone() {
            return new x(this);
          }
          peek() {
            return this.state.peek;
          }
          charsLeft() {
            return this.end - this.state.offset;
          }
          diff(t) {
            return this.state.offset - t.state.offset;
          }
          advance() {
            this.advanceState(this.state);
          }
          init() {
            this.updatePeek(this.state);
          }
          getSpan(t, o) {
            if (t = t || this, o)
              for (t = t.clone(); this.diff(t) > 0 && o.indexOf(t.peek()) !== -1; )
                t.advance();
            return new u.ParseSourceSpan(new u.ParseLocation(t.file, t.state.offset, t.state.line, t.state.column), new u.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
          }
          getChars(t) {
            return this.input.substring(t.state.offset, this.state.offset);
          }
          charAt(t) {
            return this.input.charCodeAt(t);
          }
          advanceState(t) {
            if (t.offset >= this.end)
              throw this.state = t, new $('Unexpected character "EOF"', this);
            let o = this.charAt(t.offset);
            o === r.$LF ? (t.line++, t.column = 0) : r.isNewLine(o) || t.column++, t.offset++, this.updatePeek(t);
          }
          updatePeek(t) {
            t.peek = t.offset >= this.end ? r.$EOF : this.charAt(t.offset);
          }
        }, k = class extends x {
          constructor(t, o) {
            t instanceof k ? (super(t), this.internalState = Object.assign({}, t.internalState)) : (super(t, o), this.internalState = this.state);
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new k(this);
          }
          getChars(t) {
            let o = t.clone(), E = "";
            for (; o.internalState.offset < this.internalState.offset; )
              E += String.fromCodePoint(o.peek()), o.advance();
            return E;
          }
          processEscapeSequence() {
            let t = () => this.internalState.peek;
            if (t() === r.$BACKSLASH)
              if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), t() === r.$n)
                this.state.peek = r.$LF;
              else if (t() === r.$r)
                this.state.peek = r.$CR;
              else if (t() === r.$v)
                this.state.peek = r.$VTAB;
              else if (t() === r.$t)
                this.state.peek = r.$TAB;
              else if (t() === r.$b)
                this.state.peek = r.$BSPACE;
              else if (t() === r.$f)
                this.state.peek = r.$FF;
              else if (t() === r.$u)
                if (this.advanceState(this.internalState), t() === r.$LBRACE) {
                  this.advanceState(this.internalState);
                  let o = this.clone(), E = 0;
                  for (; t() !== r.$RBRACE; )
                    this.advanceState(this.internalState), E++;
                  this.state.peek = this.decodeHexDigits(o, E);
                } else {
                  let o = this.clone();
                  this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 4);
                }
              else if (t() === r.$x) {
                this.advanceState(this.internalState);
                let o = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 2);
              } else if (r.isOctalDigit(t())) {
                let o = "", E = 0, f = this.clone();
                for (; r.isOctalDigit(t()) && E < 3; )
                  f = this.clone(), o += String.fromCodePoint(t()), this.advanceState(this.internalState), E++;
                this.state.peek = parseInt(o, 8), this.internalState = f.internalState;
              } else
                r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(t, o) {
            let E = this.input.substr(t.internalState.offset, o), f = parseInt(E, 16);
            if (isNaN(f))
              throw t.state = t.internalState, new $("Invalid hexadecimal escape sequence", t);
            return f;
          }
        }, $ = class {
          constructor(t, o) {
            this.msg = t, this.cursor = o;
          }
        };
        e.CursorError = $;
      } }), Zn = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ye(), u = Cs(), s = Ml(), D = Je(), n = class extends r.ParseError {
          constructor(a, c, h) {
            super(c, h), this.elementName = a;
          }
          static create(a, c, h) {
            return new n(a, c, h);
          }
        };
        e.TreeError = n;
        var i = class {
          constructor(a, c) {
            this.rootNodes = a, this.errors = c;
          }
        };
        e.ParseTreeResult = i;
        var p = class {
          constructor(a) {
            this.getTagDefinition = a;
          }
          parse(a, c, h) {
            let C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, d = arguments.length > 4 ? arguments[4] : void 0, m = (x) => function(k) {
              for (var $ = arguments.length, t = new Array($ > 1 ? $ - 1 : 0), o = 1; o < $; o++)
                t[o - 1] = arguments[o];
              return x(k.toLowerCase(), ...t);
            }, T = C ? this.getTagDefinition : m(this.getTagDefinition), B = (x) => T(x).contentType, A = C ? d : m(d), N = d ? (x, k, $, t) => {
              let o = A(x, k, $, t);
              return o !== void 0 ? o : B(x);
            } : B, R = s.tokenize(a, c, N, h), j = h && h.canSelfClose || false, _ = h && h.allowHtmComponentClosingTags || false, O = new l(R.tokens, T, j, _, C).build();
            return new i(O.rootNodes, R.errors.concat(O.errors));
          }
        };
        e.Parser = p;
        var l = class {
          constructor(a, c, h, C, d) {
            this.tokens = a, this.getTagDefinition = c, this.canSelfClose = h, this.allowHtmComponentClosingTags = C, this.isTagNameCaseSensitive = d, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
          }
          build() {
            for (; this._peek.type !== s.TokenType.EOF; )
              this._peek.type === s.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === s.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === s.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === s.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === s.TokenType.TEXT || this._peek.type === s.TokenType.RAW_TEXT || this._peek.type === s.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === s.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === s.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
            return new i(this._rootNodes, this._errors);
          }
          _advance() {
            let a = this._peek;
            return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], a;
          }
          _advanceIf(a) {
            return this._peek.type === a ? this._advance() : null;
          }
          _consumeCdata(a) {
            let c = this._advance(), h = this._getText(c), C = this._advanceIf(s.TokenType.CDATA_END);
            this._addToParent(new u.CDATA(h, new r.ParseSourceSpan(a.sourceSpan.start, (C || c).sourceSpan.end)));
          }
          _consumeComment(a) {
            let c = this._advanceIf(s.TokenType.RAW_TEXT), h = this._advanceIf(s.TokenType.COMMENT_END), C = c != null ? c.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || c || a).sourceSpan.end);
            this._addToParent(new u.Comment(C, d));
          }
          _consumeDocType(a) {
            let c = this._advanceIf(s.TokenType.RAW_TEXT), h = this._advanceIf(s.TokenType.DOC_TYPE_END), C = c != null ? c.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || c || a).sourceSpan.end);
            this._addToParent(new u.DocType(C, d));
          }
          _consumeExpansion(a) {
            let c = this._advance(), h = this._advance(), C = [];
            for (; this._peek.type === s.TokenType.EXPANSION_CASE_VALUE; ) {
              let m = this._parseExpansionCase();
              if (!m)
                return;
              C.push(m);
            }
            if (this._peek.type !== s.TokenType.EXPANSION_FORM_END) {
              this._errors.push(n.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
              return;
            }
            let d = new r.ParseSourceSpan(a.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new u.Expansion(c.parts[0], h.parts[0], C, d, c.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let a = this._advance();
            if (this._peek.type !== s.TokenType.EXPANSION_CASE_EXP_START)
              return this._errors.push(n.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let c = this._advance(), h = this._collectExpansionExpTokens(c);
            if (!h)
              return null;
            let C = this._advance();
            h.push(new s.Token(s.TokenType.EOF, [], C.sourceSpan));
            let d = new l(h, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
            if (d.errors.length > 0)
              return this._errors = this._errors.concat(d.errors), null;
            let m = new r.ParseSourceSpan(a.sourceSpan.start, C.sourceSpan.end), T = new r.ParseSourceSpan(c.sourceSpan.start, C.sourceSpan.end);
            return new u.ExpansionCase(a.parts[0], d.rootNodes, m, a.sourceSpan, T);
          }
          _collectExpansionExpTokens(a) {
            let c = [], h = [s.TokenType.EXPANSION_CASE_EXP_START];
            for (; ; ) {
              if ((this._peek.type === s.TokenType.EXPANSION_FORM_START || this._peek.type === s.TokenType.EXPANSION_CASE_EXP_START) && h.push(this._peek.type), this._peek.type === s.TokenType.EXPANSION_CASE_EXP_END)
                if (g(h, s.TokenType.EXPANSION_CASE_EXP_START)) {
                  if (h.pop(), h.length == 0)
                    return c;
                } else
                  return this._errors.push(n.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === s.TokenType.EXPANSION_FORM_END)
                if (g(h, s.TokenType.EXPANSION_FORM_START))
                  h.pop();
                else
                  return this._errors.push(n.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === s.TokenType.EOF)
                return this._errors.push(n.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              c.push(this._advance());
            }
          }
          _getText(a) {
            let c = a.parts[0];
            if (c.length > 0 && c[0] == `
`) {
              let h = this._getParentElement();
              h != null && h.children.length == 0 && this.getTagDefinition(h.name).ignoreFirstLf && (c = c.substring(1));
            }
            return c;
          }
          _consumeText(a) {
            let c = this._getText(a);
            c.length > 0 && this._addToParent(new u.Text(c, a.sourceSpan));
          }
          _closeVoidElement() {
            let a = this._getParentElement();
            a && this.getTagDefinition(a.name).isVoid && this._elementStack.pop();
          }
          _consumeStartTag(a) {
            let c = a.parts[0], h = a.parts[1], C = [];
            for (; this._peek.type === s.TokenType.ATTR_NAME; )
              C.push(this._consumeAttr(this._advance()));
            let d = this._getElementFullName(c, h, this._getParentElement()), m = false;
            if (this._peek.type === s.TokenType.TAG_OPEN_END_VOID) {
              this._advance(), m = true;
              let R = this.getTagDefinition(d);
              this.canSelfClose || R.canSelfClose || D.getNsPrefix(d) !== null || R.isVoid || this._errors.push(n.create(d, a.sourceSpan, `Only void and foreign elements can be self closed "${a.parts[1]}"`));
            } else
              this._peek.type === s.TokenType.TAG_OPEN_END && (this._advance(), m = false);
            let T = this._peek.sourceSpan.start, B = new r.ParseSourceSpan(a.sourceSpan.start, T), A = new r.ParseSourceSpan(a.sourceSpan.start.moveBy(1), a.sourceSpan.end), N = new u.Element(d, C, [], B, B, void 0, A);
            this._pushElement(N), m && (this._popElement(d), N.endSourceSpan = B);
          }
          _pushElement(a) {
            let c = this._getParentElement();
            c && this.getTagDefinition(c.name).isClosedByChild(a.name) && this._elementStack.pop(), this._addToParent(a), this._elementStack.push(a);
          }
          _consumeEndTag(a) {
            let c = this.allowHtmComponentClosingTags && a.parts.length === 0 ? null : this._getElementFullName(a.parts[0], a.parts[1], this._getParentElement());
            if (this._getParentElement() && (this._getParentElement().endSourceSpan = a.sourceSpan), c && this.getTagDefinition(c).isVoid)
              this._errors.push(n.create(c, a.sourceSpan, `Void elements do not have end tags "${a.parts[1]}"`));
            else if (!this._popElement(c)) {
              let h = `Unexpected closing tag "${c}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
              this._errors.push(n.create(c, a.sourceSpan, h));
            }
          }
          _popElement(a) {
            for (let c = this._elementStack.length - 1; c >= 0; c--) {
              let h = this._elementStack[c];
              if (!a || (D.getNsPrefix(h.name) ? h.name == a : h.name.toLowerCase() == a.toLowerCase()))
                return this._elementStack.splice(c, this._elementStack.length - c), true;
              if (!this.getTagDefinition(h.name).closedByParent)
                return false;
            }
            return false;
          }
          _consumeAttr(a) {
            let c = D.mergeNsAndName(a.parts[0], a.parts[1]), h = a.sourceSpan.end, C = "", d, m;
            if (this._peek.type === s.TokenType.ATTR_QUOTE && (m = this._advance().sourceSpan.start), this._peek.type === s.TokenType.ATTR_VALUE) {
              let T = this._advance();
              C = T.parts[0], h = T.sourceSpan.end, d = T.sourceSpan;
            }
            return this._peek.type === s.TokenType.ATTR_QUOTE && (h = this._advance().sourceSpan.end, d = new r.ParseSourceSpan(m, h)), new u.Attribute(c, C, new r.ParseSourceSpan(a.sourceSpan.start, h), d, a.sourceSpan);
          }
          _getParentElement() {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
          }
          _getParentElementSkippingContainers() {
            let a = null;
            for (let c = this._elementStack.length - 1; c >= 0; c--) {
              if (!D.isNgContainer(this._elementStack[c].name))
                return { parent: this._elementStack[c], container: a };
              a = this._elementStack[c];
            }
            return { parent: null, container: a };
          }
          _addToParent(a) {
            let c = this._getParentElement();
            c != null ? c.children.push(a) : this._rootNodes.push(a);
          }
          _insertBeforeContainer(a, c, h) {
            if (!c)
              this._addToParent(h), this._elementStack.push(h);
            else {
              if (a) {
                let C = a.children.indexOf(c);
                a.children[C] = h;
              } else
                this._rootNodes.push(h);
              h.children.push(c), this._elementStack.splice(this._elementStack.indexOf(c), 0, h);
            }
          }
          _getElementFullName(a, c, h) {
            return a === "" && (a = this.getTagDefinition(c).implicitNamespacePrefix || "", a === "" && h != null && (a = D.getNsPrefix(h.name))), D.mergeNsAndName(a, c);
          }
        };
        function g(a, c) {
          return a.length > 0 && a[a.length - 1] === c;
        }
      } }), jl = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Es(), u = Zn(), s = Zn();
        e.ParseTreeResult = s.ParseTreeResult, e.TreeError = s.TreeError;
        var D = class extends u.Parser {
          constructor() {
            super(r.getHtmlTagDefinition);
          }
          parse(n, i, p) {
            let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, g = arguments.length > 4 ? arguments[4] : void 0;
            return super.parse(n, i, p, l, g);
          }
        };
        e.HtmlParser = D;
      } }), ms = I({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(e) {
        "use strict";
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = jl(), u = Je();
        e.TagContentType = u.TagContentType;
        var s = null, D = () => (s || (s = new r.HtmlParser()), s);
        function n(i) {
          let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: l = false, allowHtmComponentClosingTags: g = false, isTagNameCaseSensitive: a = false, getTagContentType: c } = p;
          return D().parse(i, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: l, allowHtmComponentClosingTags: g }, a, c);
        }
        e.parse = n;
      } });
      q();
      var { ParseSourceSpan: Ye, ParseLocation: es, ParseSourceFile: Ul } = ye(), Gl = ZD(), Vl = is(), Xl = el(), { inferParserByLanguage: Hl } = Tl(), zl = bl(), $r = Ol(), rs = ql(), { hasPragma: Wl } = Il(), { Node: Yl } = Rl(), { parseIeConditionalComment: Ql } = xl(), { locStart: Kl, locEnd: Jl } = Pl();
      function Zl(e, r, u) {
        let { recognizeSelfClosing: s, normalizeTagName: D, normalizeAttributeName: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p, getTagContentType: l } = r, g = ms(), { RecursiveVisitor: a, visitAll: c } = Cs(), { ParseSourceSpan: h } = ye(), { getHtmlTagDefinition: C } = Es(), { rootNodes: d, errors: m } = g.parse(e, { canSelfClose: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p, getTagContentType: l });
        if (u.parser === "vue")
          if (d.some((O) => O.type === "docType" && O.value === "html" || O.type === "element" && O.name.toLowerCase() === "html")) {
            s = true, D = true, n = true, i = true, p = false;
            let O = g.parse(e, { canSelfClose: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p });
            d = O.rootNodes, m = O.errors;
          } else {
            let O = (x) => {
              if (!x || x.type !== "element" || x.name !== "template")
                return false;
              let k = x.attrs.find((t) => t.name === "lang"), $ = k && k.value;
              return !$ || Hl($, u) === "html";
            };
            if (d.some(O)) {
              let x, k = () => g.parse(e, { canSelfClose: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p }), $ = () => x || (x = k()), t = (o) => $().rootNodes.find((E) => {
                let { startSourceSpan: f } = E;
                return f && f.start.offset === o.startSourceSpan.start.offset;
              });
              for (let o = 0; o < d.length; o++) {
                let E = d[o], { endSourceSpan: f, startSourceSpan: F } = E;
                if (f === null)
                  m = $().errors, d[o] = t(E) || E;
                else if (O(E)) {
                  let M = $(), W = F.end.offset, X = f.start.offset;
                  for (let H of M.errors) {
                    let { offset: z } = H.span.start;
                    if (W < z && z < X) {
                      m = [H];
                      break;
                    }
                  }
                  d[o] = t(E) || E;
                }
              }
            }
          }
        if (m.length > 0) {
          let { msg: _, span: { start: O, end: x } } = m[0];
          throw Xl(_, { start: { line: O.line + 1, column: O.col + 1 }, end: { line: x.line + 1, column: x.col + 1 } });
        }
        let T = (_) => {
          let O = _.name.startsWith(":") ? _.name.slice(1).split(":")[0] : null, x = _.nameSpan.toString(), k = O !== null && x.startsWith(`${O}:`), $ = k ? x.slice(O.length + 1) : x;
          _.name = $, _.namespace = O, _.hasExplicitNamespace = k;
        }, B = (_) => {
          switch (_.type) {
            case "element":
              T(_);
              for (let O of _.attrs)
                T(O), O.valueSpan ? (O.value = O.valueSpan.toString(), /["']/.test(O.value[0]) && (O.value = O.value.slice(1, -1))) : O.value = null;
              break;
            case "comment":
              _.value = _.sourceSpan.toString().slice(4, -3);
              break;
            case "text":
              _.value = _.sourceSpan.toString();
              break;
          }
        }, A = (_, O) => {
          let x = _.toLowerCase();
          return O(x) ? x : _;
        }, N = (_) => {
          if (_.type === "element" && (D && (!_.namespace || _.namespace === _.tagDefinition.implicitNamespacePrefix || rs(_)) && (_.name = A(_.name, (O) => O in zl)), n)) {
            let O = $r[_.name] || /* @__PURE__ */ Object.create(null);
            for (let x of _.attrs)
              x.namespace || (x.name = A(x.name, (k) => _.name in $r && (k in $r["*"] || k in O)));
          }
        }, R = (_) => {
          _.sourceSpan && _.endSourceSpan && (_.sourceSpan = new h(_.sourceSpan.start, _.endSourceSpan.end));
        }, j = (_) => {
          if (_.type === "element") {
            let O = C(p ? _.name : _.name.toLowerCase());
            !_.namespace || _.namespace === O.implicitNamespacePrefix || rs(_) ? _.tagDefinition = O : _.tagDefinition = C("");
          }
        };
        return c(new class extends a {
          visit(_) {
            B(_), j(_), N(_), R(_);
          }
        }(), d), d;
      }
      function gs(e, r, u) {
        let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { frontMatter: D, content: n } = s ? Gl(e) : { frontMatter: null, content: e }, i = new Ul(e, r.filepath), p = new es(i, 0, 0, 0), l = p.moveBy(e.length), g = { type: "root", sourceSpan: new Ye(p, l), children: Zl(n, u, r) };
        if (D) {
          let h = new es(i, 0, 0, 0), C = h.moveBy(D.raw.length);
          D.sourceSpan = new Ye(h, C), g.children.unshift(D);
        }
        let a = new Yl(g), c = (h, C) => {
          let { offset: d } = C, m = e.slice(0, d).replace(/[^\n\r]/g, " "), B = gs(m + h, r, u, false);
          B.sourceSpan = new Ye(C, Vl(B.children).sourceSpan.end);
          let A = B.children[0];
          return A.length === d ? B.children.shift() : (A.sourceSpan = new Ye(A.sourceSpan.start.moveBy(d), A.sourceSpan.end), A.value = A.value.slice(d)), B;
        };
        return a.walk((h) => {
          if (h.type === "comment") {
            let C = Ql(h, c);
            C && h.parent.replaceChild(h, C);
          }
        }), a;
      }
      function Qe() {
        let { name: e, recognizeSelfClosing: r = false, normalizeTagName: u = false, normalizeAttributeName: s = false, allowHtmComponentClosingTags: D = false, isTagNameCaseSensitive: n = false, getTagContentType: i } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { parse: (p, l, g) => gs(p, Object.assign({ parser: e }, g), { recognizeSelfClosing: r, normalizeTagName: u, normalizeAttributeName: s, allowHtmComponentClosingTags: D, isTagNameCaseSensitive: n, getTagContentType: i }), hasPragma: Wl, astFormat: "html", locStart: Kl, locEnd: Jl };
      }
      Fs.exports = { parsers: { html: Qe({ name: "html", recognizeSelfClosing: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: Qe({ name: "angular" }), vue: Qe({ name: "vue", recognizeSelfClosing: true, isTagNameCaseSensitive: true, getTagContentType: (e, r, u, s) => {
        if (e.toLowerCase() !== "html" && !u && (e !== "template" || s.some((D) => {
          let { name: n, value: i } = D;
          return n === "lang" && i !== "html" && i !== "" && i !== void 0;
        })))
          return ms().TagContentType.RAW_TEXT;
      } }), lwc: Qe({ name: "lwc" }) } };
    });
    return ec();
  });
} });
var require_standalone = __commonJS({ "../../node_modules/prettier/standalone.js"(exports, module) {
  (function(e) {
    if (typeof exports == "object" && typeof module == "object")
      module.exports = e();
    else if (typeof define == "function" && define.amd)
      define(e);
    else {
      var f = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      f.prettier = e();
    }
  })(function() {
    "use strict";
    var Ne = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports), Qe = Ne((Ng, nu) => {
      var ur = function(e) {
        return e && e.Math == Math && e;
      };
      nu.exports = ur(typeof globalThis == "object" && globalThis) || ur(typeof window == "object" && window) || ur(typeof self == "object" && self) || ur(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), dt = Ne((wg, uu) => {
      uu.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    }), Ft = Ne((_g, su) => {
      var vo = dt();
      su.exports = !vo(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), sr = Ne((Pg, iu) => {
      var Co = dt();
      iu.exports = !Co(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    }), At = Ne((Ig, au) => {
      var Eo = sr(), ir = Function.prototype.call;
      au.exports = Eo ? ir.bind(ir) : function() {
        return ir.apply(ir, arguments);
      };
    }), pu = Ne((cu) => {
      "use strict";
      var ou = {}.propertyIsEnumerable, lu = Object.getOwnPropertyDescriptor, Fo = lu && !ou.call({ 1: 2 }, 1);
      cu.f = Fo ? function(n) {
        var t = lu(this, n);
        return !!t && t.enumerable;
      } : ou;
    }), ar = Ne((Lg, fu) => {
      fu.exports = function(e, n) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: n };
      };
    }), ct = Ne((jg, du) => {
      var Du = sr(), mu = Function.prototype, Ao = mu.bind, Mr = mu.call, So = Du && Ao.bind(Mr, Mr);
      du.exports = Du ? function(e) {
        return e && So(e);
      } : function(e) {
        return e && function() {
          return Mr.apply(e, arguments);
        };
      };
    }), or = Ne((Og, yu) => {
      var gu = ct(), xo = gu({}.toString), bo = gu("".slice);
      yu.exports = function(e) {
        return bo(xo(e), 8, -1);
      };
    }), vu = Ne((qg, hu) => {
      var To = Qe(), Bo = ct(), No = dt(), wo = or(), Rr = To.Object, _o = Bo("".split);
      hu.exports = No(function() {
        return !Rr("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return wo(e) == "String" ? _o(e, "") : Rr(e);
      } : Rr;
    }), $r = Ne((Mg, Cu) => {
      var Po = Qe(), Io = Po.TypeError;
      Cu.exports = function(e) {
        if (e == null)
          throw Io("Can't call method on " + e);
        return e;
      };
    }), lr = Ne((Rg, Eu) => {
      var ko = vu(), Lo = $r();
      Eu.exports = function(e) {
        return ko(Lo(e));
      };
    }), pt = Ne(($g, Fu) => {
      Fu.exports = function(e) {
        return typeof e == "function";
      };
    }), St = Ne((Vg, Au) => {
      var jo = pt();
      Au.exports = function(e) {
        return typeof e == "object" ? e !== null : jo(e);
      };
    }), $t = Ne((Wg, Su) => {
      var Vr = Qe(), Oo = pt(), qo = function(e) {
        return Oo(e) ? e : void 0;
      };
      Su.exports = function(e, n) {
        return arguments.length < 2 ? qo(Vr[e]) : Vr[e] && Vr[e][n];
      };
    }), Wr = Ne((Hg, xu) => {
      var Mo = ct();
      xu.exports = Mo({}.isPrototypeOf);
    }), Tu = Ne((Gg, bu) => {
      var Ro = $t();
      bu.exports = Ro("navigator", "userAgent") || "";
    }), ku = Ne((Ug, Iu) => {
      var Pu = Qe(), Hr = Tu(), Bu = Pu.process, Nu = Pu.Deno, wu = Bu && Bu.versions || Nu && Nu.version, _u = wu && wu.v8, mt, cr;
      _u && (mt = _u.split("."), cr = mt[0] > 0 && mt[0] < 4 ? 1 : +(mt[0] + mt[1])), !cr && Hr && (mt = Hr.match(/Edge\/(\d+)/), (!mt || mt[1] >= 74) && (mt = Hr.match(/Chrome\/(\d+)/), mt && (cr = +mt[1]))), Iu.exports = cr;
    }), Gr = Ne((Jg, ju) => {
      var Lu = ku(), $o = dt();
      ju.exports = !!Object.getOwnPropertySymbols && !$o(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Lu && Lu < 41;
      });
    }), Ur = Ne((zg, Ou) => {
      var Vo = Gr();
      Ou.exports = Vo && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Jr = Ne((Xg, qu) => {
      var Wo = Qe(), Ho = $t(), Go = pt(), Uo = Wr(), Jo = Ur(), zo = Wo.Object;
      qu.exports = Jo ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var n = Ho("Symbol");
        return Go(n) && Uo(n.prototype, zo(e));
      };
    }), pr = Ne((Kg, Mu) => {
      var Xo = Qe(), Ko = Xo.String;
      Mu.exports = function(e) {
        try {
          return Ko(e);
        } catch {
          return "Object";
        }
      };
    }), Vt = Ne((Yg, Ru) => {
      var Yo = Qe(), Qo = pt(), Zo = pr(), el = Yo.TypeError;
      Ru.exports = function(e) {
        if (Qo(e))
          return e;
        throw el(Zo(e) + " is not a function");
      };
    }), fr = Ne((Qg, $u) => {
      var tl = Vt();
      $u.exports = function(e, n) {
        var t = e[n];
        return t == null ? void 0 : tl(t);
      };
    }), Wu = Ne((Zg, Vu) => {
      var rl = Qe(), zr = At(), Xr = pt(), Kr = St(), nl = rl.TypeError;
      Vu.exports = function(e, n) {
        var t, s;
        if (n === "string" && Xr(t = e.toString) && !Kr(s = zr(t, e)) || Xr(t = e.valueOf) && !Kr(s = zr(t, e)) || n !== "string" && Xr(t = e.toString) && !Kr(s = zr(t, e)))
          return s;
        throw nl("Can't convert object to primitive value");
      };
    }), Gu = Ne((e0, Hu) => {
      Hu.exports = false;
    }), Dr = Ne((t0, Ju) => {
      var Uu = Qe(), ul = Object.defineProperty;
      Ju.exports = function(e, n) {
        try {
          ul(Uu, e, { value: n, configurable: true, writable: true });
        } catch {
          Uu[e] = n;
        }
        return n;
      };
    }), mr = Ne((r0, Xu) => {
      var sl = Qe(), il = Dr(), zu = "__core-js_shared__", al = sl[zu] || il(zu, {});
      Xu.exports = al;
    }), Yr = Ne((n0, Yu) => {
      var ol = Gu(), Ku = mr();
      (Yu.exports = function(e, n) {
        return Ku[e] || (Ku[e] = n !== void 0 ? n : {});
      })("versions", []).push({ version: "3.22.2", mode: ol ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), dr = Ne((u0, Qu) => {
      var ll = Qe(), cl = $r(), pl = ll.Object;
      Qu.exports = function(e) {
        return pl(cl(e));
      };
    }), ht = Ne((s0, Zu) => {
      var fl = ct(), Dl = dr(), ml = fl({}.hasOwnProperty);
      Zu.exports = Object.hasOwn || function(n, t) {
        return ml(Dl(n), t);
      };
    }), Qr = Ne((i0, es) => {
      var dl = ct(), gl = 0, yl = Math.random(), hl = dl(1 .toString);
      es.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + hl(++gl + yl, 36);
      };
    }), bt = Ne((a0, ss) => {
      var vl = Qe(), Cl = Yr(), ts = ht(), El = Qr(), rs = Gr(), us = Ur(), _t = Cl("wks"), xt = vl.Symbol, ns = xt && xt.for, Fl = us ? xt : xt && xt.withoutSetter || El;
      ss.exports = function(e) {
        if (!ts(_t, e) || !(rs || typeof _t[e] == "string")) {
          var n = "Symbol." + e;
          rs && ts(xt, e) ? _t[e] = xt[e] : us && ns ? _t[e] = ns(n) : _t[e] = Fl(n);
        }
        return _t[e];
      };
    }), ls = Ne((o0, os) => {
      var Al = Qe(), Sl = At(), is = St(), as = Jr(), xl = fr(), bl = Wu(), Tl = bt(), Bl = Al.TypeError, Nl = Tl("toPrimitive");
      os.exports = function(e, n) {
        if (!is(e) || as(e))
          return e;
        var t = xl(e, Nl), s;
        if (t) {
          if (n === void 0 && (n = "default"), s = Sl(t, e, n), !is(s) || as(s))
            return s;
          throw Bl("Can't convert object to primitive value");
        }
        return n === void 0 && (n = "number"), bl(e, n);
      };
    }), gr = Ne((l0, cs) => {
      var wl = ls(), _l = Jr();
      cs.exports = function(e) {
        var n = wl(e, "string");
        return _l(n) ? n : n + "";
      };
    }), Ds = Ne((c0, fs) => {
      var Pl = Qe(), ps = St(), Zr = Pl.document, Il = ps(Zr) && ps(Zr.createElement);
      fs.exports = function(e) {
        return Il ? Zr.createElement(e) : {};
      };
    }), en = Ne((p0, ms) => {
      var kl = Ft(), Ll = dt(), jl = Ds();
      ms.exports = !kl && !Ll(function() {
        return Object.defineProperty(jl("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), tn = Ne((gs) => {
      var Ol = Ft(), ql = At(), Ml = pu(), Rl = ar(), $l = lr(), Vl = gr(), Wl = ht(), Hl = en(), ds = Object.getOwnPropertyDescriptor;
      gs.f = Ol ? ds : function(n, t) {
        if (n = $l(n), t = Vl(t), Hl)
          try {
            return ds(n, t);
          } catch {
          }
        if (Wl(n, t))
          return Rl(!ql(Ml.f, n, t), n[t]);
      };
    }), hs = Ne((D0, ys) => {
      var Gl = Ft(), Ul = dt();
      ys.exports = Gl && Ul(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    }), Pt = Ne((m0, Cs) => {
      var vs = Qe(), Jl = St(), zl = vs.String, Xl = vs.TypeError;
      Cs.exports = function(e) {
        if (Jl(e))
          return e;
        throw Xl(zl(e) + " is not an object");
      };
    }), hr = Ne((Fs) => {
      var Kl = Qe(), Yl = Ft(), Ql = en(), Zl = hs(), yr = Pt(), Es = gr(), ec = Kl.TypeError, rn = Object.defineProperty, tc = Object.getOwnPropertyDescriptor, nn = "enumerable", un = "configurable", sn = "writable";
      Fs.f = Yl ? Zl ? function(n, t, s) {
        if (yr(n), t = Es(t), yr(s), typeof n == "function" && t === "prototype" && "value" in s && sn in s && !s[sn]) {
          var a = tc(n, t);
          a && a[sn] && (n[t] = s.value, s = { configurable: un in s ? s[un] : a[un], enumerable: nn in s ? s[nn] : a[nn], writable: false });
        }
        return rn(n, t, s);
      } : rn : function(n, t, s) {
        if (yr(n), t = Es(t), yr(s), Ql)
          try {
            return rn(n, t, s);
          } catch {
          }
        if ("get" in s || "set" in s)
          throw ec("Accessors not supported");
        return "value" in s && (n[t] = s.value), n;
      };
    }), vr = Ne((g0, As) => {
      var rc = Ft(), nc = hr(), uc = ar();
      As.exports = rc ? function(e, n, t) {
        return nc.f(e, n, uc(1, t));
      } : function(e, n, t) {
        return e[n] = t, e;
      };
    }), Cr = Ne((y0, Ss) => {
      var sc = ct(), ic = pt(), an = mr(), ac = sc(Function.toString);
      ic(an.inspectSource) || (an.inspectSource = function(e) {
        return ac(e);
      }), Ss.exports = an.inspectSource;
    }), Ts = Ne((h0, bs) => {
      var oc = Qe(), lc = pt(), cc = Cr(), xs = oc.WeakMap;
      bs.exports = lc(xs) && /native code/.test(cc(xs));
    }), ws = Ne((v0, Ns) => {
      var pc = Yr(), fc = Qr(), Bs = pc("keys");
      Ns.exports = function(e) {
        return Bs[e] || (Bs[e] = fc(e));
      };
    }), on = Ne((C0, _s) => {
      _s.exports = {};
    }), Os = Ne((E0, js) => {
      var Dc = Ts(), Ls = Qe(), ln = ct(), mc = St(), dc = vr(), cn = ht(), pn = mr(), gc = ws(), yc = on(), Ps = "Object already initialized", Dn = Ls.TypeError, hc = Ls.WeakMap, Er, Wt, Fr, vc = function(e) {
        return Fr(e) ? Wt(e) : Er(e, {});
      }, Cc = function(e) {
        return function(n) {
          var t;
          if (!mc(n) || (t = Wt(n)).type !== e)
            throw Dn("Incompatible receiver, " + e + " required");
          return t;
        };
      };
      Dc || pn.state ? (vt = pn.state || (pn.state = new hc()), Is = ln(vt.get), fn = ln(vt.has), ks = ln(vt.set), Er = function(e, n) {
        if (fn(vt, e))
          throw new Dn(Ps);
        return n.facade = e, ks(vt, e, n), n;
      }, Wt = function(e) {
        return Is(vt, e) || {};
      }, Fr = function(e) {
        return fn(vt, e);
      }) : (Tt = gc("state"), yc[Tt] = true, Er = function(e, n) {
        if (cn(e, Tt))
          throw new Dn(Ps);
        return n.facade = e, dc(e, Tt, n), n;
      }, Wt = function(e) {
        return cn(e, Tt) ? e[Tt] : {};
      }, Fr = function(e) {
        return cn(e, Tt);
      });
      var vt, Is, fn, ks, Tt;
      js.exports = { set: Er, get: Wt, has: Fr, enforce: vc, getterFor: Cc };
    }), Rs = Ne((F0, Ms) => {
      var mn = Ft(), Ec = ht(), qs = Function.prototype, Fc = mn && Object.getOwnPropertyDescriptor, dn = Ec(qs, "name"), Ac = dn && function() {
      }.name === "something", Sc = dn && (!mn || mn && Fc(qs, "name").configurable);
      Ms.exports = { EXISTS: dn, PROPER: Ac, CONFIGURABLE: Sc };
    }), Gs = Ne((A0, Hs) => {
      var xc = Qe(), $s = pt(), bc = ht(), Vs = vr(), Tc = Dr(), Bc = Cr(), Ws = Os(), Nc = Rs().CONFIGURABLE, wc = Ws.get, _c = Ws.enforce, Pc = String(String).split("String");
      (Hs.exports = function(e, n, t, s) {
        var a = s ? !!s.unsafe : false, r = s ? !!s.enumerable : false, u = s ? !!s.noTargetGet : false, i = s && s.name !== void 0 ? s.name : n, l;
        if ($s(t) && (String(i).slice(0, 7) === "Symbol(" && (i = "[" + String(i).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!bc(t, "name") || Nc && t.name !== i) && Vs(t, "name", i), l = _c(t), l.source || (l.source = Pc.join(typeof i == "string" ? i : ""))), e === xc) {
          r ? e[n] = t : Tc(n, t);
          return;
        } else
          a ? !u && e[n] && (r = true) : delete e[n];
        r ? e[n] = t : Vs(e, n, t);
      })(Function.prototype, "toString", function() {
        return $s(this) && wc(this).source || Bc(this);
      });
    }), Ar = Ne((S0, Us) => {
      var Ic = Math.ceil, kc = Math.floor;
      Us.exports = function(e) {
        var n = +e;
        return n !== n || n === 0 ? 0 : (n > 0 ? kc : Ic)(n);
      };
    }), zs = Ne((x0, Js) => {
      var Lc = Ar(), jc = Math.max, Oc = Math.min;
      Js.exports = function(e, n) {
        var t = Lc(e);
        return t < 0 ? jc(t + n, 0) : Oc(t, n);
      };
    }), Ks = Ne((b0, Xs) => {
      var qc = Ar(), Mc = Math.min;
      Xs.exports = function(e) {
        return e > 0 ? Mc(qc(e), 9007199254740991) : 0;
      };
    }), It = Ne((T0, Ys) => {
      var Rc = Ks();
      Ys.exports = function(e) {
        return Rc(e.length);
      };
    }), ei = Ne((B0, Zs) => {
      var $c = lr(), Vc = zs(), Wc = It(), Qs = function(e) {
        return function(n, t, s) {
          var a = $c(n), r = Wc(a), u = Vc(s, r), i;
          if (e && t != t) {
            for (; r > u; )
              if (i = a[u++], i != i)
                return true;
          } else
            for (; r > u; u++)
              if ((e || u in a) && a[u] === t)
                return e || u || 0;
          return !e && -1;
        };
      };
      Zs.exports = { includes: Qs(true), indexOf: Qs(false) };
    }), ni = Ne((N0, ri) => {
      var Hc = ct(), gn = ht(), Gc = lr(), Uc = ei().indexOf, Jc = on(), ti = Hc([].push);
      ri.exports = function(e, n) {
        var t = Gc(e), s = 0, a = [], r;
        for (r in t)
          !gn(Jc, r) && gn(t, r) && ti(a, r);
        for (; n.length > s; )
          gn(t, r = n[s++]) && (~Uc(a, r) || ti(a, r));
        return a;
      };
    }), si = Ne((w0, ui) => {
      ui.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), ai = Ne((ii) => {
      var zc = ni(), Xc = si(), Kc = Xc.concat("length", "prototype");
      ii.f = Object.getOwnPropertyNames || function(n) {
        return zc(n, Kc);
      };
    }), li = Ne((oi) => {
      oi.f = Object.getOwnPropertySymbols;
    }), pi = Ne((I0, ci) => {
      var Yc = $t(), Qc = ct(), Zc = ai(), ep = li(), tp = Pt(), rp = Qc([].concat);
      ci.exports = Yc("Reflect", "ownKeys") || function(n) {
        var t = Zc.f(tp(n)), s = ep.f;
        return s ? rp(t, s(n)) : t;
      };
    }), mi = Ne((k0, Di) => {
      var fi = ht(), np = pi(), up = tn(), sp = hr();
      Di.exports = function(e, n, t) {
        for (var s = np(n), a = sp.f, r = up.f, u = 0; u < s.length; u++) {
          var i = s[u];
          !fi(e, i) && !(t && fi(t, i)) && a(e, i, r(n, i));
        }
      };
    }), gi = Ne((L0, di) => {
      var ip = dt(), ap = pt(), op = /#|\.prototype\./, Ht = function(e, n) {
        var t = cp[lp(e)];
        return t == fp ? true : t == pp ? false : ap(n) ? ip(n) : !!n;
      }, lp = Ht.normalize = function(e) {
        return String(e).replace(op, ".").toLowerCase();
      }, cp = Ht.data = {}, pp = Ht.NATIVE = "N", fp = Ht.POLYFILL = "P";
      di.exports = Ht;
    }), Gt = Ne((j0, yi) => {
      var yn = Qe(), Dp = tn().f, mp = vr(), dp = Gs(), gp = Dr(), yp = mi(), hp = gi();
      yi.exports = function(e, n) {
        var t = e.target, s = e.global, a = e.stat, r, u, i, l, c, y;
        if (s ? u = yn : a ? u = yn[t] || gp(t, {}) : u = (yn[t] || {}).prototype, u)
          for (i in n) {
            if (c = n[i], e.noTargetGet ? (y = Dp(u, i), l = y && y.value) : l = u[i], r = hp(s ? i : t + (a ? "." : "#") + i, e.forced), !r && l !== void 0) {
              if (typeof c == typeof l)
                continue;
              yp(c, l);
            }
            (e.sham || l && l.sham) && mp(c, "sham", true), dp(u, i, c, e);
          }
      };
    }), hn = Ne((O0, hi) => {
      var vp = or();
      hi.exports = Array.isArray || function(n) {
        return vp(n) == "Array";
      };
    }), vn = Ne((q0, Ci) => {
      var vi = ct(), Cp = Vt(), Ep = sr(), Fp = vi(vi.bind);
      Ci.exports = function(e, n) {
        return Cp(e), n === void 0 ? e : Ep ? Fp(e, n) : function() {
          return e.apply(n, arguments);
        };
      };
    }), Cn = Ne((M0, Fi) => {
      "use strict";
      var Ap = Qe(), Sp = hn(), xp = It(), bp = vn(), Tp = Ap.TypeError, Ei = function(e, n, t, s, a, r, u, i) {
        for (var l = a, c = 0, y = u ? bp(u, i) : false, h, g; c < s; ) {
          if (c in t) {
            if (h = y ? y(t[c], c, n) : t[c], r > 0 && Sp(h))
              g = xp(h), l = Ei(e, n, h, g, l, r - 1) - 1;
            else {
              if (l >= 9007199254740991)
                throw Tp("Exceed the acceptable array length");
              e[l] = h;
            }
            l++;
          }
          c++;
        }
        return l;
      };
      Fi.exports = Ei;
    }), xi = Ne((R0, Si) => {
      var Bp = bt(), Np = Bp("toStringTag"), Ai = {};
      Ai[Np] = "z", Si.exports = String(Ai) === "[object z]";
    }), En = Ne(($0, bi) => {
      var wp = Qe(), _p = xi(), Pp = pt(), Sr = or(), Ip = bt(), kp = Ip("toStringTag"), Lp = wp.Object, jp = Sr(function() {
        return arguments;
      }()) == "Arguments", Op = function(e, n) {
        try {
          return e[n];
        } catch {
        }
      };
      bi.exports = _p ? Sr : function(e) {
        var n, t, s;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Op(n = Lp(e), kp)) == "string" ? t : jp ? Sr(n) : (s = Sr(n)) == "Object" && Pp(n.callee) ? "Arguments" : s;
      };
    }), Pi = Ne((V0, _i) => {
      var qp = ct(), Mp = dt(), Ti = pt(), Rp = En(), $p = $t(), Vp = Cr(), Bi = function() {
      }, Wp = [], Ni = $p("Reflect", "construct"), Fn = /^\s*(?:class|function)\b/, Hp = qp(Fn.exec), Gp = !Fn.exec(Bi), Ut = function(n) {
        if (!Ti(n))
          return false;
        try {
          return Ni(Bi, Wp, n), true;
        } catch {
          return false;
        }
      }, wi = function(n) {
        if (!Ti(n))
          return false;
        switch (Rp(n)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Gp || !!Hp(Fn, Vp(n));
        } catch {
          return true;
        }
      };
      wi.sham = true, _i.exports = !Ni || Mp(function() {
        var e;
        return Ut(Ut.call) || !Ut(Object) || !Ut(function() {
          e = true;
        }) || e;
      }) ? wi : Ut;
    }), ji = Ne((W0, Li) => {
      var Up = Qe(), Ii = hn(), Jp = Pi(), zp = St(), Xp = bt(), Kp = Xp("species"), ki = Up.Array;
      Li.exports = function(e) {
        var n;
        return Ii(e) && (n = e.constructor, Jp(n) && (n === ki || Ii(n.prototype)) ? n = void 0 : zp(n) && (n = n[Kp], n === null && (n = void 0))), n === void 0 ? ki : n;
      };
    }), An = Ne((H0, Oi) => {
      var Yp = ji();
      Oi.exports = function(e, n) {
        return new (Yp(e))(n === 0 ? 0 : n);
      };
    }), qi = Ne(() => {
      "use strict";
      var Qp = Gt(), Zp = Cn(), ef = Vt(), tf = dr(), rf = It(), nf = An();
      Qp({ target: "Array", proto: true }, { flatMap: function(n) {
        var t = tf(this), s = rf(t), a;
        return ef(n), a = nf(t, 0), a.length = Zp(a, t, t, s, 0, 1, n, arguments.length > 1 ? arguments[1] : void 0), a;
      } });
    }), Sn = Ne((J0, Mi) => {
      Mi.exports = {};
    }), $i = Ne((z0, Ri) => {
      var uf = bt(), sf = Sn(), af = uf("iterator"), of = Array.prototype;
      Ri.exports = function(e) {
        return e !== void 0 && (sf.Array === e || of[af] === e);
      };
    }), xn = Ne((X0, Wi) => {
      var lf = En(), Vi = fr(), cf = Sn(), pf = bt(), ff = pf("iterator");
      Wi.exports = function(e) {
        if (e != null)
          return Vi(e, ff) || Vi(e, "@@iterator") || cf[lf(e)];
      };
    }), Gi = Ne((K0, Hi) => {
      var Df = Qe(), mf = At(), df = Vt(), gf = Pt(), yf = pr(), hf = xn(), vf = Df.TypeError;
      Hi.exports = function(e, n) {
        var t = arguments.length < 2 ? hf(e) : n;
        if (df(t))
          return gf(mf(t, e));
        throw vf(yf(e) + " is not iterable");
      };
    }), zi = Ne((Y0, Ji) => {
      var Cf = At(), Ui = Pt(), Ef = fr();
      Ji.exports = function(e, n, t) {
        var s, a;
        Ui(e);
        try {
          if (s = Ef(e, "return"), !s) {
            if (n === "throw")
              throw t;
            return t;
          }
          s = Cf(s, e);
        } catch (r) {
          a = true, s = r;
        }
        if (n === "throw")
          throw t;
        if (a)
          throw s;
        return Ui(s), t;
      };
    }), Zi = Ne((Q0, Qi) => {
      var Ff = Qe(), Af = vn(), Sf = At(), xf = Pt(), bf = pr(), Tf = $i(), Bf = It(), Xi = Wr(), Nf = Gi(), wf = xn(), Ki = zi(), _f = Ff.TypeError, xr = function(e, n) {
        this.stopped = e, this.result = n;
      }, Yi = xr.prototype;
      Qi.exports = function(e, n, t) {
        var s = t && t.that, a = !!(t && t.AS_ENTRIES), r = !!(t && t.IS_ITERATOR), u = !!(t && t.INTERRUPTED), i = Af(n, s), l, c, y, h, g, p, D, v = function(T) {
          return l && Ki(l, "normal", T), new xr(true, T);
        }, w = function(T) {
          return a ? (xf(T), u ? i(T[0], T[1], v) : i(T[0], T[1])) : u ? i(T, v) : i(T);
        };
        if (r)
          l = e;
        else {
          if (c = wf(e), !c)
            throw _f(bf(e) + " is not iterable");
          if (Tf(c)) {
            for (y = 0, h = Bf(e); h > y; y++)
              if (g = w(e[y]), g && Xi(Yi, g))
                return g;
            return new xr(false);
          }
          l = Nf(e, c);
        }
        for (p = l.next; !(D = Sf(p, l)).done; ) {
          try {
            g = w(D.value);
          } catch (T) {
            Ki(l, "throw", T);
          }
          if (typeof g == "object" && g && Xi(Yi, g))
            return g;
        }
        return new xr(false);
      };
    }), ta = Ne((Z0, ea) => {
      "use strict";
      var Pf = gr(), If = hr(), kf = ar();
      ea.exports = function(e, n, t) {
        var s = Pf(n);
        s in e ? If.f(e, s, kf(0, t)) : e[s] = t;
      };
    }), ra = Ne(() => {
      var Lf = Gt(), jf = Zi(), Of = ta();
      Lf({ target: "Object", stat: true }, { fromEntries: function(n) {
        var t = {};
        return jf(n, function(s, a) {
          Of(t, s, a);
        }, { AS_ENTRIES: true }), t;
      } });
    }), na = Ne(() => {
      var qf = Gt(), Mf = Qe();
      qf({ global: true }, { globalThis: Mf });
    }), ua = Ne(() => {
      na();
    }), sa = Ne(() => {
      "use strict";
      var Rf = Gt(), $f = Cn(), Vf = dr(), Wf = It(), Hf = Ar(), Gf = An();
      Rf({ target: "Array", proto: true }, { flat: function() {
        var n = arguments.length ? arguments[0] : void 0, t = Vf(this), s = Wf(t), a = Gf(t, 0);
        return a.length = $f(a, t, t, s, 0, n === void 0 ? 1 : Hf(n)), a;
      } });
    }), Tg = Ne((ly, mo) => {
      var Uf = ["cliName", "cliCategory", "cliDescription"], Jf = ["_"], zf = ["languageId"];
      function Ln(e, n) {
        if (e == null)
          return {};
        var t = Xf(e, n), s, a;
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            s = r[a], !(n.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, s) || (t[s] = e[s]));
        }
        return t;
      }
      function Xf(e, n) {
        if (e == null)
          return {};
        var t = {}, s = Object.keys(e), a, r;
        for (r = 0; r < s.length; r++)
          a = s[r], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
        return t;
      }
      qi(), ra(), ua(), sa();
      var Kf = Object.create, wr = Object.defineProperty, Yf = Object.getOwnPropertyDescriptor, jn = Object.getOwnPropertyNames, Qf = Object.getPrototypeOf, Zf = Object.prototype.hasOwnProperty, gt = (e, n) => function() {
        return e && (n = (0, e[jn(e)[0]])(e = 0)), n;
      }, ee = (e, n) => function() {
        return n || (0, e[jn(e)[0]])((n = { exports: {} }).exports, n), n.exports;
      }, zt = (e, n) => {
        for (var t in n)
          wr(e, t, { get: n[t], enumerable: true });
      }, pa = (e, n, t, s) => {
        if (n && typeof n == "object" || typeof n == "function")
          for (let a of jn(n))
            !Zf.call(e, a) && a !== t && wr(e, a, { get: () => n[a], enumerable: !(s = Yf(n, a)) || s.enumerable });
        return e;
      }, eD = (e, n, t) => (t = e != null ? Kf(Qf(e)) : {}, pa(n || !e || !e.__esModule ? wr(t, "default", { value: e, enumerable: true }) : t, e)), ft = (e) => pa(wr({}, "__esModule", { value: true }), e), ia, aa, Nt, re = gt({ "<define:process>"() {
        ia = {}, aa = [], Nt = { env: ia, argv: aa };
      } }), fa = ee({ "package.json"(e, n) {
        n.exports = { version: "2.8.0" };
      } }), tD = ee({ "node_modules/diff/lib/diff/base.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.default = n;
        function n() {
        }
        n.prototype = { diff: function(r, u) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = i.callback;
          typeof i == "function" && (l = i, i = {}), this.options = i;
          var c = this;
          function y(A) {
            return l ? (setTimeout(function() {
              l(void 0, A);
            }, 0), true) : A;
          }
          r = this.castInput(r), u = this.castInput(u), r = this.removeEmpty(this.tokenize(r)), u = this.removeEmpty(this.tokenize(u));
          var h = u.length, g = r.length, p = 1, D = h + g, v = [{ newPos: -1, components: [] }], w = this.extractCommon(v[0], u, r, 0);
          if (v[0].newPos + 1 >= h && w + 1 >= g)
            return y([{ value: this.join(u), count: u.length }]);
          function T() {
            for (var A = -1 * p; A <= p; A += 2) {
              var B = void 0, I = v[A - 1], P = v[A + 1], R = (P ? P.newPos : 0) - A;
              I && (v[A - 1] = void 0);
              var f = I && I.newPos + 1 < h, x = P && 0 <= R && R < g;
              if (!f && !x) {
                v[A] = void 0;
                continue;
              }
              if (!f || x && I.newPos < P.newPos ? (B = s(P), c.pushComponent(B.components, void 0, true)) : (B = I, B.newPos++, c.pushComponent(B.components, true, void 0)), R = c.extractCommon(B, u, r, A), B.newPos + 1 >= h && R + 1 >= g)
                return y(t(c, B.components, u, r, c.useLongestToken));
              v[A] = B;
            }
            p++;
          }
          if (l)
            (function A() {
              setTimeout(function() {
                if (p > D)
                  return l();
                T() || A();
              }, 0);
            })();
          else
            for (; p <= D; ) {
              var F = T();
              if (F)
                return F;
            }
        }, pushComponent: function(r, u, i) {
          var l = r[r.length - 1];
          l && l.added === u && l.removed === i ? r[r.length - 1] = { count: l.count + 1, added: u, removed: i } : r.push({ count: 1, added: u, removed: i });
        }, extractCommon: function(r, u, i, l) {
          for (var c = u.length, y = i.length, h = r.newPos, g = h - l, p = 0; h + 1 < c && g + 1 < y && this.equals(u[h + 1], i[g + 1]); )
            h++, g++, p++;
          return p && r.components.push({ count: p }), r.newPos = h, g;
        }, equals: function(r, u) {
          return this.options.comparator ? this.options.comparator(r, u) : r === u || this.options.ignoreCase && r.toLowerCase() === u.toLowerCase();
        }, removeEmpty: function(r) {
          for (var u = [], i = 0; i < r.length; i++)
            r[i] && u.push(r[i]);
          return u;
        }, castInput: function(r) {
          return r;
        }, tokenize: function(r) {
          return r.split("");
        }, join: function(r) {
          return r.join("");
        } };
        function t(a, r, u, i, l) {
          for (var c = 0, y = r.length, h = 0, g = 0; c < y; c++) {
            var p = r[c];
            if (p.removed) {
              if (p.value = a.join(i.slice(g, g + p.count)), g += p.count, c && r[c - 1].added) {
                var v = r[c - 1];
                r[c - 1] = r[c], r[c] = v;
              }
            } else {
              if (!p.added && l) {
                var D = u.slice(h, h + p.count);
                D = D.map(function(T, F) {
                  var A = i[g + F];
                  return A.length > T.length ? A : T;
                }), p.value = a.join(D);
              } else
                p.value = a.join(u.slice(h, h + p.count));
              h += p.count, p.added || (g += p.count);
            }
          }
          var w = r[y - 1];
          return y > 1 && typeof w.value == "string" && (w.added || w.removed) && a.equals("", w.value) && (r[y - 2].value += w.value, r.pop()), r;
        }
        function s(a) {
          return { newPos: a.newPos, components: a.components.slice(0) };
        }
      } }), rD = ee({ "node_modules/diff/lib/diff/array.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.diffArrays = a, e.arrayDiff = void 0;
        var n = t(tD());
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var s = new n.default();
        e.arrayDiff = s, s.tokenize = function(r) {
          return r.slice();
        }, s.join = s.removeEmpty = function(r) {
          return r;
        };
        function a(r, u, i) {
          return s.diff(r, u, i);
        }
      } }), On = ee({ "src/document/doc-builders.js"(e, n) {
        "use strict";
        re();
        function t(E) {
          return { type: "concat", parts: E };
        }
        function s(E) {
          return { type: "indent", contents: E };
        }
        function a(E, o) {
          return { type: "align", contents: o, n: E };
        }
        function r(E) {
          let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: o.id, contents: E, break: Boolean(o.shouldBreak), expandedStates: o.expandedStates };
        }
        function u(E) {
          return a(Number.NEGATIVE_INFINITY, E);
        }
        function i(E) {
          return a({ type: "root" }, E);
        }
        function l(E) {
          return a(-1, E);
        }
        function c(E, o) {
          return r(E[0], Object.assign(Object.assign({}, o), {}, { expandedStates: E }));
        }
        function y(E) {
          return { type: "fill", parts: E };
        }
        function h(E, o) {
          let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: E, flatContents: o, groupId: d.groupId };
        }
        function g(E, o) {
          return { type: "indent-if-break", contents: E, groupId: o.groupId, negate: o.negate };
        }
        function p(E) {
          return { type: "line-suffix", contents: E };
        }
        var D = { type: "line-suffix-boundary" }, v = { type: "break-parent" }, w = { type: "trim" }, T = { type: "line", hard: true }, F = { type: "line", hard: true, literal: true }, A = { type: "line" }, B = { type: "line", soft: true }, I = t([T, v]), P = t([F, v]), R = { type: "cursor", placeholder: Symbol("cursor") };
        function f(E, o) {
          let d = [];
          for (let C = 0; C < o.length; C++)
            C !== 0 && d.push(E), d.push(o[C]);
          return t(d);
        }
        function x(E, o, d) {
          let C = E;
          if (o > 0) {
            for (let _ = 0; _ < Math.floor(o / d); ++_)
              C = s(C);
            C = a(o % d, C), C = a(Number.NEGATIVE_INFINITY, C);
          }
          return C;
        }
        function m(E, o) {
          return { type: "label", label: E, contents: o };
        }
        n.exports = { concat: t, join: f, line: A, softline: B, hardline: I, literalline: P, group: r, conditionalGroup: c, fill: y, lineSuffix: p, lineSuffixBoundary: D, cursor: R, breakParent: v, ifBreak: h, trim: w, indent: s, indentIfBreak: g, align: a, addAlignmentToDoc: x, markAsRoot: i, dedentToRoot: u, dedent: l, hardlineWithoutBreakParent: T, literallineWithoutBreakParent: F, label: m };
      } }), qn = ee({ "src/common/end-of-line.js"(e, n) {
        "use strict";
        re();
        function t(u) {
          let i = u.indexOf("\r");
          return i >= 0 ? u.charAt(i + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function s(u) {
          switch (u) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function a(u, i) {
          let l;
          switch (i) {
            case `
`:
              l = /\n/g;
              break;
            case "\r":
              l = /\r/g;
              break;
            case `\r
`:
              l = /\r\n/g;
              break;
            default:
              throw new Error(`Unexpected "eol" ${JSON.stringify(i)}.`);
          }
          let c = u.match(l);
          return c ? c.length : 0;
        }
        function r(u) {
          return u.replace(/\r\n?/g, `
`);
        }
        n.exports = { guessEndOfLine: t, convertEndOfLineToChars: s, countEndOfLineChars: a, normalizeEndOfLine: r };
      } }), lt = ee({ "src/utils/get-last.js"(e, n) {
        "use strict";
        re();
        var t = (s) => s[s.length - 1];
        n.exports = t;
      } });
      function nD() {
        let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(n, e ? void 0 : "g");
      }
      var uD = gt({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        re();
      } });
      function sD(e) {
        if (typeof e != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
        return e.replace(nD(), "");
      }
      var iD = gt({ "node_modules/strip-ansi/index.js"() {
        re(), uD();
      } });
      function aD(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var oD = gt({ "node_modules/is-fullwidth-code-point/index.js"() {
        re();
      } }), lD = ee({ "node_modules/emoji-regex/index.js"(e, n) {
        "use strict";
        re(), n.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), Da = {};
      zt(Da, { default: () => cD });
      function cD(e) {
        if (typeof e != "string" || e.length === 0 || (e = sD(e), e.length === 0))
          return 0;
        e = e.replace((0, ma.default)(), "  ");
        let n = 0;
        for (let t = 0; t < e.length; t++) {
          let s = e.codePointAt(t);
          s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && t++, n += aD(s) ? 2 : 1);
        }
        return n;
      }
      var ma, pD = gt({ "node_modules/string-width/index.js"() {
        re(), iD(), oD(), ma = eD(lD());
      } }), da = ee({ "src/utils/get-string-width.js"(e, n) {
        "use strict";
        re();
        var t = (pD(), ft(Da)).default, s = /[^\x20-\x7F]/;
        function a(r) {
          return r ? s.test(r) ? t(r) : r.length : 0;
        }
        n.exports = a;
      } }), Xt = ee({ "src/document/doc-utils.js"(e, n) {
        "use strict";
        re();
        var t = lt(), { literalline: s, join: a } = On(), r = (o) => Array.isArray(o) || o && o.type === "concat", u = (o) => {
          if (Array.isArray(o))
            return o;
          if (o.type !== "concat" && o.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return o.parts;
        }, i = {};
        function l(o, d, C, _) {
          let b = [o];
          for (; b.length > 0; ) {
            let N = b.pop();
            if (N === i) {
              C(b.pop());
              continue;
            }
            if (C && b.push(N, i), !d || d(N) !== false)
              if (r(N) || N.type === "fill") {
                let k = u(N);
                for (let $ = k.length, M = $ - 1; M >= 0; --M)
                  b.push(k[M]);
              } else if (N.type === "if-break")
                N.flatContents && b.push(N.flatContents), N.breakContents && b.push(N.breakContents);
              else if (N.type === "group" && N.expandedStates)
                if (_)
                  for (let k = N.expandedStates.length, $ = k - 1; $ >= 0; --$)
                    b.push(N.expandedStates[$]);
                else
                  b.push(N.contents);
              else
                N.contents && b.push(N.contents);
          }
        }
        function c(o, d) {
          let C = /* @__PURE__ */ new Map();
          return _(o);
          function _(N) {
            if (C.has(N))
              return C.get(N);
            let k = b(N);
            return C.set(N, k), k;
          }
          function b(N) {
            if (Array.isArray(N))
              return d(N.map(_));
            if (N.type === "concat" || N.type === "fill") {
              let k = N.parts.map(_);
              return d(Object.assign(Object.assign({}, N), {}, { parts: k }));
            }
            if (N.type === "if-break") {
              let k = N.breakContents && _(N.breakContents), $ = N.flatContents && _(N.flatContents);
              return d(Object.assign(Object.assign({}, N), {}, { breakContents: k, flatContents: $ }));
            }
            if (N.type === "group" && N.expandedStates) {
              let k = N.expandedStates.map(_), $ = k[0];
              return d(Object.assign(Object.assign({}, N), {}, { contents: $, expandedStates: k }));
            }
            if (N.contents) {
              let k = _(N.contents);
              return d(Object.assign(Object.assign({}, N), {}, { contents: k }));
            }
            return d(N);
          }
        }
        function y(o, d, C) {
          let _ = C, b = false;
          function N(k) {
            let $ = d(k);
            if ($ !== void 0 && (b = true, _ = $), b)
              return false;
          }
          return l(o, N), _;
        }
        function h(o) {
          if (o.type === "group" && o.break || o.type === "line" && o.hard || o.type === "break-parent")
            return true;
        }
        function g(o) {
          return y(o, h, false);
        }
        function p(o) {
          if (o.length > 0) {
            let d = t(o);
            !d.expandedStates && !d.break && (d.break = "propagated");
          }
          return null;
        }
        function D(o) {
          let d = /* @__PURE__ */ new Set(), C = [];
          function _(N) {
            if (N.type === "break-parent" && p(C), N.type === "group") {
              if (C.push(N), d.has(N))
                return false;
              d.add(N);
            }
          }
          function b(N) {
            N.type === "group" && C.pop().break && p(C);
          }
          l(o, _, b, true);
        }
        function v(o) {
          return o.type === "line" && !o.hard ? o.soft ? "" : " " : o.type === "if-break" ? o.flatContents || "" : o;
        }
        function w(o) {
          return c(o, v);
        }
        var T = (o, d) => o && o.type === "line" && o.hard && d && d.type === "break-parent";
        function F(o) {
          if (!o)
            return o;
          if (r(o) || o.type === "fill") {
            let d = u(o);
            for (; d.length > 1 && T(...d.slice(-2)); )
              d.length -= 2;
            if (d.length > 0) {
              let C = F(t(d));
              d[d.length - 1] = C;
            }
            return Array.isArray(o) ? d : Object.assign(Object.assign({}, o), {}, { parts: d });
          }
          switch (o.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let d = F(o.contents);
              return Object.assign(Object.assign({}, o), {}, { contents: d });
            }
            case "if-break": {
              let d = F(o.breakContents), C = F(o.flatContents);
              return Object.assign(Object.assign({}, o), {}, { breakContents: d, flatContents: C });
            }
          }
          return o;
        }
        function A(o) {
          return F(I(o));
        }
        function B(o) {
          switch (o.type) {
            case "fill":
              if (o.parts.every((C) => C === ""))
                return "";
              break;
            case "group":
              if (!o.contents && !o.id && !o.break && !o.expandedStates)
                return "";
              if (o.contents.type === "group" && o.contents.id === o.id && o.contents.break === o.break && o.contents.expandedStates === o.expandedStates)
                return o.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!o.contents)
                return "";
              break;
            case "if-break":
              if (!o.flatContents && !o.breakContents)
                return "";
              break;
          }
          if (!r(o))
            return o;
          let d = [];
          for (let C of u(o)) {
            if (!C)
              continue;
            let [_, ...b] = r(C) ? u(C) : [C];
            typeof _ == "string" && typeof t(d) == "string" ? d[d.length - 1] += _ : d.push(_), d.push(...b);
          }
          return d.length === 0 ? "" : d.length === 1 ? d[0] : Array.isArray(o) ? d : Object.assign(Object.assign({}, o), {}, { parts: d });
        }
        function I(o) {
          return c(o, (d) => B(d));
        }
        function P(o) {
          let d = [], C = o.filter(Boolean);
          for (; C.length > 0; ) {
            let _ = C.shift();
            if (_) {
              if (r(_)) {
                C.unshift(...u(_));
                continue;
              }
              if (d.length > 0 && typeof t(d) == "string" && typeof _ == "string") {
                d[d.length - 1] += _;
                continue;
              }
              d.push(_);
            }
          }
          return d;
        }
        function R(o) {
          return c(o, (d) => Array.isArray(d) ? P(d) : d.parts ? Object.assign(Object.assign({}, d), {}, { parts: P(d.parts) }) : d);
        }
        function f(o) {
          return c(o, (d) => typeof d == "string" && d.includes(`
`) ? x(d) : d);
        }
        function x(o) {
          let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
          return a(d, o.split(`
`)).parts;
        }
        function m(o) {
          if (o.type === "line")
            return true;
        }
        function E(o) {
          return y(o, m, false);
        }
        n.exports = { isConcat: r, getDocParts: u, willBreak: g, traverseDoc: l, findInDoc: y, mapDoc: c, propagateBreaks: D, removeLines: w, stripTrailingHardline: A, normalizeParts: P, normalizeDoc: R, cleanDoc: I, replaceTextEndOfLine: x, replaceEndOfLine: f, canBreak: E };
      } }), fD = ee({ "src/document/doc-printer.js"(e, n) {
        "use strict";
        re();
        var { convertEndOfLineToChars: t } = qn(), s = lt(), a = da(), { fill: r, cursor: u, indent: i } = On(), { isConcat: l, getDocParts: c } = Xt(), y, h = 1, g = 2;
        function p() {
          return { value: "", length: 0, queue: [] };
        }
        function D(B, I) {
          return w(B, { type: "indent" }, I);
        }
        function v(B, I, P) {
          return I === Number.NEGATIVE_INFINITY ? B.root || p() : I < 0 ? w(B, { type: "dedent" }, P) : I ? I.type === "root" ? Object.assign(Object.assign({}, B), {}, { root: B }) : w(B, { type: typeof I == "string" ? "stringAlign" : "numberAlign", n: I }, P) : B;
        }
        function w(B, I, P) {
          let R = I.type === "dedent" ? B.queue.slice(0, -1) : [...B.queue, I], f = "", x = 0, m = 0, E = 0;
          for (let k of R)
            switch (k.type) {
              case "indent":
                C(), P.useTabs ? o(1) : d(P.tabWidth);
                break;
              case "stringAlign":
                C(), f += k.n, x += k.n.length;
                break;
              case "numberAlign":
                m += 1, E += k.n;
                break;
              default:
                throw new Error(`Unexpected type '${k.type}'`);
            }
          return b(), Object.assign(Object.assign({}, B), {}, { value: f, length: x, queue: R });
          function o(k) {
            f += "	".repeat(k), x += P.tabWidth * k;
          }
          function d(k) {
            f += " ".repeat(k), x += k;
          }
          function C() {
            P.useTabs ? _() : b();
          }
          function _() {
            m > 0 && o(m), N();
          }
          function b() {
            E > 0 && d(E), N();
          }
          function N() {
            m = 0, E = 0;
          }
        }
        function T(B) {
          if (B.length === 0)
            return 0;
          let I = 0;
          for (; B.length > 0 && typeof s(B) == "string" && /^[\t ]*$/.test(s(B)); )
            I += B.pop().length;
          if (B.length > 0 && typeof s(B) == "string") {
            let P = s(B).replace(/[\t ]*$/, "");
            I += s(B).length - P.length, B[B.length - 1] = P;
          }
          return I;
        }
        function F(B, I, P, R, f) {
          let x = I.length, m = [B], E = [];
          for (; P >= 0; ) {
            if (m.length === 0) {
              if (x === 0)
                return true;
              m.push(I[--x]);
              continue;
            }
            let { mode: o, doc: d } = m.pop();
            if (typeof d == "string")
              E.push(d), P -= a(d);
            else if (l(d) || d.type === "fill") {
              let C = c(d);
              for (let _ = C.length - 1; _ >= 0; _--)
                m.push({ mode: o, doc: C[_] });
            } else
              switch (d.type) {
                case "indent":
                case "align":
                case "indent-if-break":
                case "label":
                  m.push({ mode: o, doc: d.contents });
                  break;
                case "trim":
                  P += T(E);
                  break;
                case "group": {
                  if (f && d.break)
                    return false;
                  let C = d.break ? h : o, _ = d.expandedStates && C === h ? s(d.expandedStates) : d.contents;
                  m.push({ mode: C, doc: _ });
                  break;
                }
                case "if-break": {
                  let _ = (d.groupId ? y[d.groupId] || g : o) === h ? d.breakContents : d.flatContents;
                  _ && m.push({ mode: o, doc: _ });
                  break;
                }
                case "line":
                  if (o === h || d.hard)
                    return true;
                  d.soft || (E.push(" "), P--);
                  break;
                case "line-suffix":
                  R = true;
                  break;
                case "line-suffix-boundary":
                  if (R)
                    return false;
                  break;
              }
          }
          return false;
        }
        function A(B, I) {
          y = {};
          let P = I.printWidth, R = t(I.endOfLine), f = 0, x = [{ ind: p(), mode: h, doc: B }], m = [], E = false, o = [];
          for (; x.length > 0; ) {
            let { ind: C, mode: _, doc: b } = x.pop();
            if (typeof b == "string") {
              let N = R !== `
` ? b.replace(/\n/g, R) : b;
              m.push(N), f += a(N);
            } else if (l(b)) {
              let N = c(b);
              for (let k = N.length - 1; k >= 0; k--)
                x.push({ ind: C, mode: _, doc: N[k] });
            } else
              switch (b.type) {
                case "cursor":
                  m.push(u.placeholder);
                  break;
                case "indent":
                  x.push({ ind: D(C, I), mode: _, doc: b.contents });
                  break;
                case "align":
                  x.push({ ind: v(C, b.n, I), mode: _, doc: b.contents });
                  break;
                case "trim":
                  f -= T(m);
                  break;
                case "group":
                  switch (_) {
                    case g:
                      if (!E) {
                        x.push({ ind: C, mode: b.break ? h : g, doc: b.contents });
                        break;
                      }
                    case h: {
                      E = false;
                      let N = { ind: C, mode: g, doc: b.contents }, k = P - f, $ = o.length > 0;
                      if (!b.break && F(N, x, k, $))
                        x.push(N);
                      else if (b.expandedStates) {
                        let M = s(b.expandedStates);
                        if (b.break) {
                          x.push({ ind: C, mode: h, doc: M });
                          break;
                        } else
                          for (let q = 1; q < b.expandedStates.length + 1; q++)
                            if (q >= b.expandedStates.length) {
                              x.push({ ind: C, mode: h, doc: M });
                              break;
                            } else {
                              let J = b.expandedStates[q], L = { ind: C, mode: g, doc: J };
                              if (F(L, x, k, $)) {
                                x.push(L);
                                break;
                              }
                            }
                      } else
                        x.push({ ind: C, mode: h, doc: b.contents });
                      break;
                    }
                  }
                  b.id && (y[b.id] = s(x).mode);
                  break;
                case "fill": {
                  let N = P - f, { parts: k } = b;
                  if (k.length === 0)
                    break;
                  let [$, M] = k, q = { ind: C, mode: g, doc: $ }, J = { ind: C, mode: h, doc: $ }, L = F(q, [], N, o.length > 0, true);
                  if (k.length === 1) {
                    L ? x.push(q) : x.push(J);
                    break;
                  }
                  let Y = { ind: C, mode: g, doc: M }, V = { ind: C, mode: h, doc: M };
                  if (k.length === 2) {
                    L ? x.push(Y, q) : x.push(V, J);
                    break;
                  }
                  k.splice(0, 2);
                  let O = { ind: C, mode: _, doc: r(k) }, K = k[0];
                  F({ ind: C, mode: g, doc: [$, M, K] }, [], N, o.length > 0, true) ? x.push(O, Y, q) : L ? x.push(O, V, q) : x.push(O, V, J);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let N = b.groupId ? y[b.groupId] : _;
                  if (N === h) {
                    let k = b.type === "if-break" ? b.breakContents : b.negate ? b.contents : i(b.contents);
                    k && x.push({ ind: C, mode: _, doc: k });
                  }
                  if (N === g) {
                    let k = b.type === "if-break" ? b.flatContents : b.negate ? i(b.contents) : b.contents;
                    k && x.push({ ind: C, mode: _, doc: k });
                  }
                  break;
                }
                case "line-suffix":
                  o.push({ ind: C, mode: _, doc: b.contents });
                  break;
                case "line-suffix-boundary":
                  o.length > 0 && x.push({ ind: C, mode: _, doc: { type: "line", hard: true } });
                  break;
                case "line":
                  switch (_) {
                    case g:
                      if (b.hard)
                        E = true;
                      else {
                        b.soft || (m.push(" "), f += 1);
                        break;
                      }
                    case h:
                      if (o.length > 0) {
                        x.push({ ind: C, mode: _, doc: b }, ...o.reverse()), o.length = 0;
                        break;
                      }
                      b.literal ? C.root ? (m.push(R, C.root.value), f = C.root.length) : (m.push(R), f = 0) : (f -= T(m), m.push(R + C.value), f = C.length);
                      break;
                  }
                  break;
                case "label":
                  x.push({ ind: C, mode: _, doc: b.contents });
                  break;
                default:
              }
            x.length === 0 && o.length > 0 && (x.push(...o.reverse()), o.length = 0);
          }
          let d = m.indexOf(u.placeholder);
          if (d !== -1) {
            let C = m.indexOf(u.placeholder, d + 1), _ = m.slice(0, d).join(""), b = m.slice(d + 1, C).join(""), N = m.slice(C + 1).join("");
            return { formatted: _ + b + N, cursorNodeStart: _.length, cursorNodeText: b };
          }
          return { formatted: m.join("") };
        }
        n.exports = { printDocToString: A };
      } }), DD = ee({ "src/document/doc-debug.js"(e, n) {
        "use strict";
        re();
        var { isConcat: t, getDocParts: s } = Xt();
        function a(u) {
          if (!u)
            return "";
          if (t(u)) {
            let i = [];
            for (let l of s(u))
              if (t(l))
                i.push(...a(l).parts);
              else {
                let c = a(l);
                c !== "" && i.push(c);
              }
            return { type: "concat", parts: i };
          }
          return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, { breakContents: a(u.breakContents), flatContents: a(u.flatContents) }) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents), expandedStates: u.expandedStates && u.expandedStates.map(a) }) : u.type === "fill" ? { type: "fill", parts: u.parts.map(a) } : u.contents ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents) }) : u;
        }
        function r(u) {
          let i = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ new Set();
          return c(a(u));
          function c(h, g, p) {
            if (typeof h == "string")
              return JSON.stringify(h);
            if (t(h)) {
              let D = s(h).map(c).filter(Boolean);
              return D.length === 1 ? D[0] : `[${D.join(", ")}]`;
            }
            if (h.type === "line") {
              let D = Array.isArray(p) && p[g + 1] && p[g + 1].type === "break-parent";
              return h.literal ? D ? "literalline" : "literallineWithoutBreakParent" : h.hard ? D ? "hardline" : "hardlineWithoutBreakParent" : h.soft ? "softline" : "line";
            }
            if (h.type === "break-parent")
              return Array.isArray(p) && p[g - 1] && p[g - 1].type === "line" && p[g - 1].hard ? void 0 : "breakParent";
            if (h.type === "trim")
              return "trim";
            if (h.type === "indent")
              return "indent(" + c(h.contents) + ")";
            if (h.type === "align")
              return h.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + c(h.contents) + ")" : h.n < 0 ? "dedent(" + c(h.contents) + ")" : h.n.type === "root" ? "markAsRoot(" + c(h.contents) + ")" : "align(" + JSON.stringify(h.n) + ", " + c(h.contents) + ")";
            if (h.type === "if-break")
              return "ifBreak(" + c(h.breakContents) + (h.flatContents ? ", " + c(h.flatContents) : "") + (h.groupId ? (h.flatContents ? "" : ', ""') + `, { groupId: ${y(h.groupId)} }` : "") + ")";
            if (h.type === "indent-if-break") {
              let D = [];
              h.negate && D.push("negate: true"), h.groupId && D.push(`groupId: ${y(h.groupId)}`);
              let v = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return `indentIfBreak(${c(h.contents)}${v})`;
            }
            if (h.type === "group") {
              let D = [];
              h.break && h.break !== "propagated" && D.push("shouldBreak: true"), h.id && D.push(`id: ${y(h.id)}`);
              let v = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return h.expandedStates ? `conditionalGroup([${h.expandedStates.map((w) => c(w)).join(",")}]${v})` : `group(${c(h.contents)}${v})`;
            }
            if (h.type === "fill")
              return `fill([${h.parts.map((D) => c(D)).join(", ")}])`;
            if (h.type === "line-suffix")
              return "lineSuffix(" + c(h.contents) + ")";
            if (h.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (h.type === "label")
              return `label(${JSON.stringify(h.label)}, ${c(h.contents)})`;
            throw new Error("Unknown doc type " + h.type);
          }
          function y(h) {
            if (typeof h != "symbol")
              return JSON.stringify(String(h));
            if (h in i)
              return i[h];
            let g = String(h).slice(7, -1) || "symbol";
            for (let p = 0; ; p++) {
              let D = g + (p > 0 ? ` #${p}` : "");
              if (!l.has(D))
                return l.add(D), i[h] = `Symbol.for(${JSON.stringify(D)})`;
            }
          }
        }
        n.exports = { printDocToDebug: r };
      } }), qe = ee({ "src/document/index.js"(e, n) {
        "use strict";
        re(), n.exports = { builders: On(), printer: fD(), utils: Xt(), debug: DD() };
      } }), ga = {};
      zt(ga, { default: () => mD });
      function mD(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var dD = gt({ "node_modules/escape-string-regexp/index.js"() {
        re();
      } }), ya = ee({ "node_modules/semver/internal/debug.js"(e, n) {
        re();
        var t = typeof Nt == "object" && Nt.env && Nt.env.NODE_DEBUG && /\bsemver\b/i.test(Nt.env.NODE_DEBUG) ? function() {
          for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++)
            a[r] = arguments[r];
          return console.error("SEMVER", ...a);
        } : () => {
        };
        n.exports = t;
      } }), ha = ee({ "node_modules/semver/internal/constants.js"(e, n) {
        re();
        var t = "2.0.0", s = 256, a = Number.MAX_SAFE_INTEGER || 9007199254740991, r = 16;
        n.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: s, MAX_SAFE_INTEGER: a, MAX_SAFE_COMPONENT_LENGTH: r };
      } }), gD = ee({ "node_modules/semver/internal/re.js"(e, n) {
        re();
        var { MAX_SAFE_COMPONENT_LENGTH: t } = ha(), s = ya();
        e = n.exports = {};
        var a = e.re = [], r = e.src = [], u = e.t = {}, i = 0, l = (c, y, h) => {
          let g = i++;
          s(c, g, y), u[c] = g, r[g] = y, a[g] = new RegExp(y, h ? "g" : void 0);
        };
        l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${r[u.NUMERICIDENTIFIER]})\\.(${r[u.NUMERICIDENTIFIER]})\\.(${r[u.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${r[u.NUMERICIDENTIFIERLOOSE]})\\.(${r[u.NUMERICIDENTIFIERLOOSE]})\\.(${r[u.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${r[u.NUMERICIDENTIFIER]}|${r[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${r[u.NUMERICIDENTIFIERLOOSE]}|${r[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${r[u.PRERELEASEIDENTIFIER]}(?:\\.${r[u.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${r[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${r[u.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${r[u.BUILDIDENTIFIER]}(?:\\.${r[u.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${r[u.MAINVERSION]}${r[u.PRERELEASE]}?${r[u.BUILD]}?`), l("FULL", `^${r[u.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${r[u.MAINVERSIONLOOSE]}${r[u.PRERELEASELOOSE]}?${r[u.BUILD]}?`), l("LOOSE", `^${r[u.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${r[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${r[u.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${r[u.XRANGEIDENTIFIER]})(?:\\.(${r[u.XRANGEIDENTIFIER]})(?:\\.(${r[u.XRANGEIDENTIFIER]})(?:${r[u.PRERELEASE]})?${r[u.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${r[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[u.XRANGEIDENTIFIERLOOSE]})(?:${r[u.PRERELEASELOOSE]})?${r[u.BUILD]}?)?)?`), l("XRANGE", `^${r[u.GTLT]}\\s*${r[u.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${r[u.GTLT]}\\s*${r[u.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), l("COERCERTL", r[u.COERCE], true), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${r[u.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", l("TILDE", `^${r[u.LONETILDE]}${r[u.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${r[u.LONETILDE]}${r[u.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${r[u.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", l("CARET", `^${r[u.LONECARET]}${r[u.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${r[u.LONECARET]}${r[u.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${r[u.GTLT]}\\s*(${r[u.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${r[u.GTLT]}\\s*(${r[u.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${r[u.GTLT]}\\s*(${r[u.LOOSEPLAIN]}|${r[u.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${r[u.XRANGEPLAIN]})\\s+-\\s+(${r[u.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${r[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${r[u.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), yD = ee({ "node_modules/semver/internal/parse-options.js"(e, n) {
        re();
        var t = ["includePrerelease", "loose", "rtl"], s = (a) => a ? typeof a != "object" ? { loose: true } : t.filter((r) => a[r]).reduce((r, u) => (r[u] = true, r), {}) : {};
        n.exports = s;
      } }), hD = ee({ "node_modules/semver/internal/identifiers.js"(e, n) {
        re();
        var t = /^[0-9]+$/, s = (r, u) => {
          let i = t.test(r), l = t.test(u);
          return i && l && (r = +r, u = +u), r === u ? 0 : i && !l ? -1 : l && !i ? 1 : r < u ? -1 : 1;
        }, a = (r, u) => s(u, r);
        n.exports = { compareIdentifiers: s, rcompareIdentifiers: a };
      } }), vD = ee({ "node_modules/semver/classes/semver.js"(e, n) {
        re();
        var t = ya(), { MAX_LENGTH: s, MAX_SAFE_INTEGER: a } = ha(), { re: r, t: u } = gD(), i = yD(), { compareIdentifiers: l } = hD(), c = class {
          constructor(y, h) {
            if (h = i(h), y instanceof c) {
              if (y.loose === !!h.loose && y.includePrerelease === !!h.includePrerelease)
                return y;
              y = y.version;
            } else if (typeof y != "string")
              throw new TypeError(`Invalid Version: ${y}`);
            if (y.length > s)
              throw new TypeError(`version is longer than ${s} characters`);
            t("SemVer", y, h), this.options = h, this.loose = !!h.loose, this.includePrerelease = !!h.includePrerelease;
            let g = y.trim().match(h.loose ? r[u.LOOSE] : r[u.FULL]);
            if (!g)
              throw new TypeError(`Invalid Version: ${y}`);
            if (this.raw = y, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > a || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > a || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > a || this.patch < 0)
              throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map((p) => {
              if (/^[0-9]+$/.test(p)) {
                let D = +p;
                if (D >= 0 && D < a)
                  return D;
              }
              return p;
            }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(y) {
            if (t("SemVer.compare", this.version, this.options, y), !(y instanceof c)) {
              if (typeof y == "string" && y === this.version)
                return 0;
              y = new c(y, this.options);
            }
            return y.version === this.version ? 0 : this.compareMain(y) || this.comparePre(y);
          }
          compareMain(y) {
            return y instanceof c || (y = new c(y, this.options)), l(this.major, y.major) || l(this.minor, y.minor) || l(this.patch, y.patch);
          }
          comparePre(y) {
            if (y instanceof c || (y = new c(y, this.options)), this.prerelease.length && !y.prerelease.length)
              return -1;
            if (!this.prerelease.length && y.prerelease.length)
              return 1;
            if (!this.prerelease.length && !y.prerelease.length)
              return 0;
            let h = 0;
            do {
              let g = this.prerelease[h], p = y.prerelease[h];
              if (t("prerelease compare", h, g, p), g === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== p)
                return l(g, p);
            } while (++h);
          }
          compareBuild(y) {
            y instanceof c || (y = new c(y, this.options));
            let h = 0;
            do {
              let g = this.build[h], p = y.build[h];
              if (t("prerelease compare", h, g, p), g === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== p)
                return l(g, p);
            } while (++h);
          }
          inc(y, h) {
            switch (y) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", h), this.inc("pre", h);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", h), this.inc("pre", h);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let g = this.prerelease.length;
                  for (; --g >= 0; )
                    typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                  g === -1 && this.prerelease.push(0);
                }
                h && (l(this.prerelease[0], h) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [h, 0]) : this.prerelease = [h, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${y}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        n.exports = c;
      } }), Mn = ee({ "node_modules/semver/functions/compare.js"(e, n) {
        re();
        var t = vD(), s = (a, r, u) => new t(a, u).compare(new t(r, u));
        n.exports = s;
      } }), CD = ee({ "node_modules/semver/functions/lt.js"(e, n) {
        re();
        var t = Mn(), s = (a, r, u) => t(a, r, u) < 0;
        n.exports = s;
      } }), ED = ee({ "node_modules/semver/functions/gte.js"(e, n) {
        re();
        var t = Mn(), s = (a, r, u) => t(a, r, u) >= 0;
        n.exports = s;
      } }), FD = ee({ "src/utils/arrayify.js"(e, n) {
        "use strict";
        re(), n.exports = (t, s) => Object.entries(t).map((a) => {
          let [r, u] = a;
          return Object.assign({ [s]: r }, u);
        });
      } }), AD = ee({ "node_modules/outdent/lib/index.js"(e, n) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function t() {
          for (var F = [], A = 0; A < arguments.length; A++)
            F[A] = arguments[A];
        }
        function s() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : a();
        }
        function a() {
          return { add: t, delete: t, get: t, set: t, has: function(F) {
            return false;
          } };
        }
        var r = Object.prototype.hasOwnProperty, u = function(F, A) {
          return r.call(F, A);
        };
        function i(F, A) {
          for (var B in A)
            u(A, B) && (F[B] = A[B]);
          return F;
        }
        var l = /^[ \t]*(?:\r\n|\r|\n)/, c = /(?:\r\n|\r|\n)[ \t]*$/, y = /^(?:[\r\n]|$)/, h = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function p(F, A, B) {
          var I = 0, P = F[0].match(h);
          P && (I = P[1].length);
          var R = "(\\r\\n|\\r|\\n).{0," + I + "}", f = new RegExp(R, "g");
          A && (F = F.slice(1));
          var x = B.newline, m = B.trimLeadingNewline, E = B.trimTrailingNewline, o = typeof x == "string", d = F.length, C = F.map(function(_, b) {
            return _ = _.replace(f, "$1"), b === 0 && m && (_ = _.replace(l, "")), b === d - 1 && E && (_ = _.replace(c, "")), o && (_ = _.replace(/\r\n|\n|\r/g, function(N) {
              return x;
            })), _;
          });
          return C;
        }
        function D(F, A) {
          for (var B = "", I = 0, P = F.length; I < P; I++)
            B += F[I], I < P - 1 && (B += A[I]);
          return B;
        }
        function v(F) {
          return u(F, "raw") && u(F, "length");
        }
        function w(F) {
          var A = s(), B = s();
          function I(R) {
            for (var f = [], x = 1; x < arguments.length; x++)
              f[x - 1] = arguments[x];
            if (v(R)) {
              var m = R, E = (f[0] === I || f[0] === T) && g.test(m[0]) && y.test(m[1]), o = E ? B : A, d = o.get(m);
              if (d || (d = p(m, E, F), o.set(m, d)), f.length === 0)
                return d[0];
              var C = D(d, E ? f.slice(1) : f);
              return C;
            } else
              return w(i(i({}, F), R || {}));
          }
          var P = i(I, { string: function(R) {
            return p([R], false, F)[0];
          } });
          return P;
        }
        var T = w({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = T, e.default = T, typeof n < "u")
          try {
            n.exports = T, Object.defineProperty(T, "__esModule", { value: true }), T.default = T, T.outdent = T;
          } catch {
          }
      } }), SD = ee({ "src/main/core-options.js"(e, n) {
        "use strict";
        re();
        var { outdent: t } = AD(), s = "Config", a = "Editor", r = "Format", u = "Other", i = "Output", l = "Global", c = "Special", y = { cursorOffset: { since: "1.4.0", category: c, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: a }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: c, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: u, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: c, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: u }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (h) => typeof h == "string" || typeof h == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (h) => typeof h == "string" || typeof h == "object", cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: l, description: t`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (h) => typeof h == "string" || typeof h == "object", cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: c, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, rangeStart: { since: "1.4.0", category: c, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, requirePragma: { since: "1.7.0", category: c, type: "boolean", default: false, description: t`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: u }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        n.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: a, CATEGORY_FORMAT: r, CATEGORY_OTHER: u, CATEGORY_OUTPUT: i, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: c, options: y };
      } }), Rn = ee({ "src/main/support.js"(e, n) {
        "use strict";
        re();
        var t = { compare: Mn(), lt: CD(), gte: ED() }, s = FD(), a = fa().version, r = SD().options;
        function u() {
          let { plugins: l = [], showUnreleased: c = false, showDeprecated: y = false, showInternal: h = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = a.split("-", 1)[0], p = l.flatMap((F) => F.languages || []).filter(v), D = s(Object.assign({}, ...l.map((F) => {
            let { options: A } = F;
            return A;
          }), r), "name").filter((F) => v(F) && w(F)).sort((F, A) => F.name === A.name ? 0 : F.name < A.name ? -1 : 1).map(T).map((F) => {
            F = Object.assign({}, F), Array.isArray(F.default) && (F.default = F.default.length === 1 ? F.default[0].value : F.default.filter(v).sort((B, I) => t.compare(I.since, B.since))[0].value), Array.isArray(F.choices) && (F.choices = F.choices.filter((B) => v(B) && w(B)), F.name === "parser" && i(F, p, l));
            let A = Object.fromEntries(l.filter((B) => B.defaultOptions && B.defaultOptions[F.name] !== void 0).map((B) => [B.name, B.defaultOptions[F.name]]));
            return Object.assign(Object.assign({}, F), {}, { pluginDefaults: A });
          });
          return { languages: p, options: D };
          function v(F) {
            return c || !("since" in F) || F.since && t.gte(g, F.since);
          }
          function w(F) {
            return y || !("deprecated" in F) || F.deprecated && t.lt(g, F.deprecated);
          }
          function T(F) {
            if (h)
              return F;
            let { cliName: A, cliCategory: B, cliDescription: I } = F;
            return Ln(F, Uf);
          }
        }
        function i(l, c, y) {
          let h = new Set(l.choices.map((g) => g.value));
          for (let g of c)
            if (g.parsers) {
              for (let p of g.parsers)
                if (!h.has(p)) {
                  h.add(p);
                  let D = y.find((w) => w.parsers && w.parsers[p]), v = g.name;
                  D && D.name && (v += ` (plugin: ${D.name})`), l.choices.push({ value: p, description: v });
                }
            }
        }
        n.exports = { getSupportInfo: u };
      } }), $n = ee({ "src/utils/is-non-empty-array.js"(e, n) {
        "use strict";
        re();
        function t(s) {
          return Array.isArray(s) && s.length > 0;
        }
        n.exports = t;
      } }), _r = ee({ "src/utils/text/skip.js"(e, n) {
        "use strict";
        re();
        function t(i) {
          return (l, c, y) => {
            let h = y && y.backwards;
            if (c === false)
              return false;
            let { length: g } = l, p = c;
            for (; p >= 0 && p < g; ) {
              let D = l.charAt(p);
              if (i instanceof RegExp) {
                if (!i.test(D))
                  return p;
              } else if (!i.includes(D))
                return p;
              h ? p-- : p++;
            }
            return p === -1 || p === g ? p : false;
          };
        }
        var s = t(/\s/), a = t(" 	"), r = t(",; 	"), u = t(/[^\n\r]/);
        n.exports = { skipWhitespace: s, skipSpaces: a, skipToLineEnd: r, skipEverythingButNewLine: u };
      } }), va = ee({ "src/utils/text/skip-inline-comment.js"(e, n) {
        "use strict";
        re();
        function t(s, a) {
          if (a === false)
            return false;
          if (s.charAt(a) === "/" && s.charAt(a + 1) === "*") {
            for (let r = a + 2; r < s.length; ++r)
              if (s.charAt(r) === "*" && s.charAt(r + 1) === "/")
                return r + 2;
          }
          return a;
        }
        n.exports = t;
      } }), Ca = ee({ "src/utils/text/skip-trailing-comment.js"(e, n) {
        "use strict";
        re();
        var { skipEverythingButNewLine: t } = _r();
        function s(a, r) {
          return r === false ? false : a.charAt(r) === "/" && a.charAt(r + 1) === "/" ? t(a, r) : r;
        }
        n.exports = s;
      } }), Ea = ee({ "src/utils/text/skip-newline.js"(e, n) {
        "use strict";
        re();
        function t(s, a, r) {
          let u = r && r.backwards;
          if (a === false)
            return false;
          let i = s.charAt(a);
          if (u) {
            if (s.charAt(a - 1) === "\r" && i === `
`)
              return a - 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a - 1;
          } else {
            if (i === "\r" && s.charAt(a + 1) === `
`)
              return a + 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a + 1;
          }
          return a;
        }
        n.exports = t;
      } }), xD = ee({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, n) {
        "use strict";
        re();
        var t = va(), s = Ea(), a = Ca(), { skipSpaces: r } = _r();
        function u(i, l) {
          let c = null, y = l;
          for (; y !== c; )
            c = y, y = r(i, y), y = t(i, y), y = a(i, y), y = s(i, y);
          return y;
        }
        n.exports = u;
      } }), Ge = ee({ "src/common/util.js"(e, n) {
        "use strict";
        re();
        var { default: t } = (dD(), ft(ga)), s = lt(), { getSupportInfo: a } = Rn(), r = $n(), u = da(), { skipWhitespace: i, skipSpaces: l, skipToLineEnd: c, skipEverythingButNewLine: y } = _r(), h = va(), g = Ca(), p = Ea(), D = xD(), v = (V) => V[V.length - 2];
        function w(V) {
          return (O, K, se) => {
            let Q = se && se.backwards;
            if (K === false)
              return false;
            let { length: le } = O, W = K;
            for (; W >= 0 && W < le; ) {
              let X = O.charAt(W);
              if (V instanceof RegExp) {
                if (!V.test(X))
                  return W;
              } else if (!V.includes(X))
                return W;
              Q ? W-- : W++;
            }
            return W === -1 || W === le ? W : false;
          };
        }
        function T(V, O) {
          let K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, se = l(V, K.backwards ? O - 1 : O, K), Q = p(V, se, K);
          return se !== Q;
        }
        function F(V, O, K) {
          for (let se = O; se < K; ++se)
            if (V.charAt(se) === `
`)
              return true;
          return false;
        }
        function A(V, O, K) {
          let se = K(O) - 1;
          se = l(V, se, { backwards: true }), se = p(V, se, { backwards: true }), se = l(V, se, { backwards: true });
          let Q = p(V, se, { backwards: true });
          return se !== Q;
        }
        function B(V, O) {
          let K = null, se = O;
          for (; se !== K; )
            K = se, se = c(V, se), se = h(V, se), se = l(V, se);
          return se = g(V, se), se = p(V, se), se !== false && T(V, se);
        }
        function I(V, O, K) {
          return B(V, K(O));
        }
        function P(V, O, K) {
          return D(V, K(O));
        }
        function R(V, O, K) {
          return V.charAt(P(V, O, K));
        }
        function f(V, O) {
          let K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return l(V, K.backwards ? O - 1 : O, K) !== O;
        }
        function x(V, O) {
          let K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, se = 0;
          for (let Q = K; Q < V.length; ++Q)
            V[Q] === "	" ? se = se + O - se % O : se++;
          return se;
        }
        function m(V, O) {
          let K = V.lastIndexOf(`
`);
          return K === -1 ? 0 : x(V.slice(K + 1).match(/^[\t ]*/)[0], O);
        }
        function E(V, O) {
          let K = { quote: '"', regex: /"/g, escaped: "&quot;" }, se = { quote: "'", regex: /'/g, escaped: "&apos;" }, Q = O === "'" ? se : K, le = Q === se ? K : se, W = Q;
          if (V.includes(Q.quote) || V.includes(le.quote)) {
            let X = (V.match(Q.regex) || []).length, oe = (V.match(le.regex) || []).length;
            W = X > oe ? le : Q;
          }
          return W;
        }
        function o(V, O) {
          let K = V.slice(1, -1), se = O.parser === "json" || O.parser === "json5" && O.quoteProps === "preserve" && !O.singleQuote ? '"' : O.__isInHtmlAttribute ? "'" : E(K, O.singleQuote ? "'" : '"').quote;
          return d(K, se, !(O.parser === "css" || O.parser === "less" || O.parser === "scss" || O.__embeddedInHtml));
        }
        function d(V, O, K) {
          let se = O === '"' ? "'" : '"', Q = /\\(.)|(["'])/gs, le = V.replace(Q, (W, X, oe) => X === se ? X : oe === O ? "\\" + oe : oe || (K && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(X) ? X : "\\" + X));
          return O + le + O;
        }
        function C(V) {
          return V.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function _(V, O) {
          let K = V.match(new RegExp(`(${t(O)})+`, "g"));
          return K === null ? 0 : K.reduce((se, Q) => Math.max(se, Q.length / O.length), 0);
        }
        function b(V, O) {
          let K = V.match(new RegExp(`(${t(O)})+`, "g"));
          if (K === null)
            return 0;
          let se = /* @__PURE__ */ new Map(), Q = 0;
          for (let le of K) {
            let W = le.length / O.length;
            se.set(W, true), W > Q && (Q = W);
          }
          for (let le = 1; le < Q; le++)
            if (!se.get(le))
              return le;
          return Q + 1;
        }
        function N(V, O) {
          (V.comments || (V.comments = [])).push(O), O.printed = false, O.nodeDescription = Y(V);
        }
        function k(V, O) {
          O.leading = true, O.trailing = false, N(V, O);
        }
        function $(V, O, K) {
          O.leading = false, O.trailing = false, K && (O.marker = K), N(V, O);
        }
        function M(V, O) {
          O.leading = false, O.trailing = true, N(V, O);
        }
        function q(V, O) {
          let { languages: K } = a({ plugins: O.plugins }), se = K.find((Q) => {
            let { name: le } = Q;
            return le.toLowerCase() === V;
          }) || K.find((Q) => {
            let { aliases: le } = Q;
            return Array.isArray(le) && le.includes(V);
          }) || K.find((Q) => {
            let { extensions: le } = Q;
            return Array.isArray(le) && le.includes(`.${V}`);
          });
          return se && se.parsers[0];
        }
        function J(V) {
          return V && V.type === "front-matter";
        }
        function L(V) {
          let O = /* @__PURE__ */ new WeakMap();
          return function(K) {
            return O.has(K) || O.set(K, Symbol(V)), O.get(K);
          };
        }
        function Y(V) {
          let O = V.type || V.kind || "(unknown type)", K = String(V.name || V.id && (typeof V.id == "object" ? V.id.name : V.id) || V.key && (typeof V.key == "object" ? V.key.name : V.key) || V.value && (typeof V.value == "object" ? "" : String(V.value)) || V.operator || "");
          return K.length > 20 && (K = K.slice(0, 19) + "\u2026"), O + (K ? " " + K : "");
        }
        n.exports = { inferParserByLanguage: q, getStringWidth: u, getMaxContinuousCount: _, getMinNotPresentContinuousCount: b, getPenultimate: v, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: D, getNextNonSpaceNonCommentCharacterIndex: P, getNextNonSpaceNonCommentCharacter: R, skip: w, skipWhitespace: i, skipSpaces: l, skipToLineEnd: c, skipEverythingButNewLine: y, skipInlineComment: h, skipTrailingComment: g, skipNewline: p, isNextLineEmptyAfterIndex: B, isNextLineEmpty: I, isPreviousLineEmpty: A, hasNewline: T, hasNewlineInRange: F, hasSpaces: f, getAlignmentSize: x, getIndentSize: m, getPreferredQuote: E, printString: o, printNumber: C, makeString: d, addLeadingComment: k, addDanglingComment: $, addTrailingComment: M, isFrontMatterNode: J, isNonEmptyArray: r, createGroupIdMapper: L };
      } }), Fa = {};
      zt(Fa, { basename: () => Ta, default: () => Na, delimiter: () => wn, dirname: () => ba, extname: () => Ba, isAbsolute: () => Wn, join: () => Sa, normalize: () => Vn, relative: () => xa, resolve: () => Nr, sep: () => Nn });
      function Aa(e, n) {
        for (var t = 0, s = e.length - 1; s >= 0; s--) {
          var a = e[s];
          a === "." ? e.splice(s, 1) : a === ".." ? (e.splice(s, 1), t++) : t && (e.splice(s, 1), t--);
        }
        if (n)
          for (; t--; t)
            e.unshift("..");
        return e;
      }
      function Nr() {
        for (var e = "", n = false, t = arguments.length - 1; t >= -1 && !n; t--) {
          var s = t >= 0 ? arguments[t] : "/";
          if (typeof s != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          !s || (e = s + "/" + e, n = s.charAt(0) === "/");
        }
        return e = Aa(Hn(e.split("/"), function(a) {
          return !!a;
        }), !n).join("/"), (n ? "/" : "") + e || ".";
      }
      function Vn(e) {
        var n = Wn(e), t = wa(e, -1) === "/";
        return e = Aa(Hn(e.split("/"), function(s) {
          return !!s;
        }), !n).join("/"), !e && !n && (e = "."), e && t && (e += "/"), (n ? "/" : "") + e;
      }
      function Wn(e) {
        return e.charAt(0) === "/";
      }
      function Sa() {
        var e = Array.prototype.slice.call(arguments, 0);
        return Vn(Hn(e, function(n, t) {
          if (typeof n != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return n;
        }).join("/"));
      }
      function xa(e, n) {
        e = Nr(e).substr(1), n = Nr(n).substr(1);
        function t(c) {
          for (var y = 0; y < c.length && c[y] === ""; y++)
            ;
          for (var h = c.length - 1; h >= 0 && c[h] === ""; h--)
            ;
          return y > h ? [] : c.slice(y, h - y + 1);
        }
        for (var s = t(e.split("/")), a = t(n.split("/")), r = Math.min(s.length, a.length), u = r, i = 0; i < r; i++)
          if (s[i] !== a[i]) {
            u = i;
            break;
          }
        for (var l = [], i = u; i < s.length; i++)
          l.push("..");
        return l = l.concat(a.slice(u)), l.join("/");
      }
      function ba(e) {
        var n = Pr(e), t = n[0], s = n[1];
        return !t && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t + s);
      }
      function Ta(e, n) {
        var t = Pr(e)[2];
        return n && t.substr(-1 * n.length) === n && (t = t.substr(0, t.length - n.length)), t;
      }
      function Ba(e) {
        return Pr(e)[3];
      }
      function Hn(e, n) {
        if (e.filter)
          return e.filter(n);
        for (var t = [], s = 0; s < e.length; s++)
          n(e[s], s, e) && t.push(e[s]);
        return t;
      }
      var oa, Pr, Nn, wn, Na, wa, bD = gt({ "node-modules-polyfills:path"() {
        re(), oa = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Pr = function(e) {
          return oa.exec(e).slice(1);
        }, Nn = "/", wn = ":", Na = { extname: Ba, basename: Ta, dirname: ba, sep: Nn, delimiter: wn, relative: xa, join: Sa, isAbsolute: Wn, normalize: Vn, resolve: Nr }, wa = "ab".substr(-1) === "b" ? function(e, n, t) {
          return e.substr(n, t);
        } : function(e, n, t) {
          return n < 0 && (n = e.length + n), e.substr(n, t);
        };
      } }), TD = ee({ "node-modules-polyfills-commonjs:path"(e, n) {
        re();
        var t = (bD(), ft(Fa));
        if (t && t.default) {
          n.exports = t.default;
          for (let s in t)
            n.exports[s] = t[s];
        } else
          t && (n.exports = t);
      } }), Kt = ee({ "src/common/errors.js"(e, n) {
        "use strict";
        re();
        var t = class extends Error {
        }, s = class extends Error {
        }, a = class extends Error {
        }, r = class extends Error {
        };
        n.exports = { ConfigError: t, DebugError: s, UndefinedParserError: a, ArgExpansionBailout: r };
      } }), yt = {};
      zt(yt, { __assign: () => Br, __asyncDelegator: () => RD, __asyncGenerator: () => MD, __asyncValues: () => $D, __await: () => Jt, __awaiter: () => ID, __classPrivateFieldGet: () => GD, __classPrivateFieldSet: () => UD, __createBinding: () => LD, __decorate: () => wD, __exportStar: () => jD, __extends: () => BD, __generator: () => kD, __importDefault: () => HD, __importStar: () => WD, __makeTemplateObject: () => VD, __metadata: () => PD, __param: () => _D, __read: () => _a, __rest: () => ND, __spread: () => OD, __spreadArrays: () => qD, __values: () => _n });
      function BD(e, n) {
        Tr(e, n);
        function t() {
          this.constructor = e;
        }
        e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
      }
      function ND(e, n) {
        var t = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && n.indexOf(s) < 0 && (t[s] = e[s]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
            n.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t[s[a]] = e[s[a]]);
        return t;
      }
      function wD(e, n, t, s) {
        var a = arguments.length, r = a < 3 ? n : s === null ? s = Object.getOwnPropertyDescriptor(n, t) : s, u;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          r = Reflect.decorate(e, n, t, s);
        else
          for (var i = e.length - 1; i >= 0; i--)
            (u = e[i]) && (r = (a < 3 ? u(r) : a > 3 ? u(n, t, r) : u(n, t)) || r);
        return a > 3 && r && Object.defineProperty(n, t, r), r;
      }
      function _D(e, n) {
        return function(t, s) {
          n(t, s, e);
        };
      }
      function PD(e, n) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(e, n);
      }
      function ID(e, n, t, s) {
        function a(r) {
          return r instanceof t ? r : new t(function(u) {
            u(r);
          });
        }
        return new (t || (t = Promise))(function(r, u) {
          function i(y) {
            try {
              c(s.next(y));
            } catch (h) {
              u(h);
            }
          }
          function l(y) {
            try {
              c(s.throw(y));
            } catch (h) {
              u(h);
            }
          }
          function c(y) {
            y.done ? r(y.value) : a(y.value).then(i, l);
          }
          c((s = s.apply(e, n || [])).next());
        });
      }
      function kD(e, n) {
        var t = { label: 0, sent: function() {
          if (r[0] & 1)
            throw r[1];
          return r[1];
        }, trys: [], ops: [] }, s, a, r, u;
        return u = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
          return this;
        }), u;
        function i(c) {
          return function(y) {
            return l([c, y]);
          };
        }
        function l(c) {
          if (s)
            throw new TypeError("Generator is already executing.");
          for (; t; )
            try {
              if (s = 1, a && (r = c[0] & 2 ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done)
                return r;
              switch (a = 0, r && (c = [c[0] & 2, r.value]), c[0]) {
                case 0:
                case 1:
                  r = c;
                  break;
                case 4:
                  return t.label++, { value: c[1], done: false };
                case 5:
                  t.label++, a = c[1], c = [0];
                  continue;
                case 7:
                  c = t.ops.pop(), t.trys.pop();
                  continue;
                default:
                  if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    t = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) {
                    t.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && t.label < r[1]) {
                    t.label = r[1], r = c;
                    break;
                  }
                  if (r && t.label < r[2]) {
                    t.label = r[2], t.ops.push(c);
                    break;
                  }
                  r[2] && t.ops.pop(), t.trys.pop();
                  continue;
              }
              c = n.call(e, t);
            } catch (y) {
              c = [6, y], a = 0;
            } finally {
              s = r = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return { value: c[0] ? c[1] : void 0, done: true };
        }
      }
      function LD(e, n, t, s) {
        s === void 0 && (s = t), e[s] = n[t];
      }
      function jD(e, n) {
        for (var t in e)
          t !== "default" && !n.hasOwnProperty(t) && (n[t] = e[t]);
      }
      function _n(e) {
        var n = typeof Symbol == "function" && Symbol.iterator, t = n && e[n], s = 0;
        if (t)
          return t.call(e);
        if (e && typeof e.length == "number")
          return { next: function() {
            return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
          } };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function _a(e, n) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t)
          return e;
        var s = t.call(e), a, r = [], u;
        try {
          for (; (n === void 0 || n-- > 0) && !(a = s.next()).done; )
            r.push(a.value);
        } catch (i) {
          u = { error: i };
        } finally {
          try {
            a && !a.done && (t = s.return) && t.call(s);
          } finally {
            if (u)
              throw u.error;
          }
        }
        return r;
      }
      function OD() {
        for (var e = [], n = 0; n < arguments.length; n++)
          e = e.concat(_a(arguments[n]));
        return e;
      }
      function qD() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++)
          e += arguments[n].length;
        for (var s = Array(e), a = 0, n = 0; n < t; n++)
          for (var r = arguments[n], u = 0, i = r.length; u < i; u++, a++)
            s[a] = r[u];
        return s;
      }
      function Jt(e) {
        return this instanceof Jt ? (this.v = e, this) : new Jt(e);
      }
      function MD(e, n, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var s = t.apply(e, n || []), a, r = [];
        return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function() {
          return this;
        }, a;
        function u(g) {
          s[g] && (a[g] = function(p) {
            return new Promise(function(D, v) {
              r.push([g, p, D, v]) > 1 || i(g, p);
            });
          });
        }
        function i(g, p) {
          try {
            l(s[g](p));
          } catch (D) {
            h(r[0][3], D);
          }
        }
        function l(g) {
          g.value instanceof Jt ? Promise.resolve(g.value.v).then(c, y) : h(r[0][2], g);
        }
        function c(g) {
          i("next", g);
        }
        function y(g) {
          i("throw", g);
        }
        function h(g, p) {
          g(p), r.shift(), r.length && i(r[0][0], r[0][1]);
        }
      }
      function RD(e) {
        var n, t;
        return n = {}, s("next"), s("throw", function(a) {
          throw a;
        }), s("return"), n[Symbol.iterator] = function() {
          return this;
        }, n;
        function s(a, r) {
          n[a] = e[a] ? function(u) {
            return (t = !t) ? { value: Jt(e[a](u)), done: a === "return" } : r ? r(u) : u;
          } : r;
        }
      }
      function $D(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = e[Symbol.asyncIterator], t;
        return n ? n.call(e) : (e = typeof _n == "function" ? _n(e) : e[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);
        function s(r) {
          t[r] = e[r] && function(u) {
            return new Promise(function(i, l) {
              u = e[r](u), a(i, l, u.done, u.value);
            });
          };
        }
        function a(r, u, i, l) {
          Promise.resolve(l).then(function(c) {
            r({ value: c, done: i });
          }, u);
        }
      }
      function VD(e, n) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", { value: n }) : e.raw = n, e;
      }
      function WD(e) {
        if (e && e.__esModule)
          return e;
        var n = {};
        if (e != null)
          for (var t in e)
            Object.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        return n.default = e, n;
      }
      function HD(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function GD(e, n) {
        if (!n.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return n.get(e);
      }
      function UD(e, n, t) {
        if (!n.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return n.set(e, t), t;
      }
      var Tr, Br, Ct = gt({ "node_modules/tslib/tslib.es6.js"() {
        re(), Tr = function(e, n) {
          return Tr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
            t.__proto__ = s;
          } || function(t, s) {
            for (var a in s)
              s.hasOwnProperty(a) && (t[a] = s[a]);
          }, Tr(e, n);
        }, Br = function() {
          return Br = Object.assign || function(n) {
            for (var t, s = 1, a = arguments.length; s < a; s++) {
              t = arguments[s];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }, Br.apply(this, arguments);
        };
      } }), Pa = ee({ "node_modules/vnopts/lib/descriptors/api.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.apiDescriptor = { key: (n) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(n) ? n : JSON.stringify(n), value(n) {
          if (n === null || typeof n != "object")
            return JSON.stringify(n);
          if (Array.isArray(n))
            return `[${n.map((s) => e.apiDescriptor.value(s)).join(", ")}]`;
          let t = Object.keys(n);
          return t.length === 0 ? "{}" : `{ ${t.map((s) => `${e.apiDescriptor.key(s)}: ${e.apiDescriptor.value(n[s])}`).join(", ")} }`;
        }, pair: (n) => {
          let { key: t, value: s } = n;
          return e.apiDescriptor.value({ [t]: s });
        } };
      } }), JD = ee({ "node_modules/vnopts/lib/descriptors/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(Pa(), e);
      } }), Ir = ee({ "scripts/build/shims/chalk.cjs"(e, n) {
        "use strict";
        re();
        var t = (s) => s;
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, n.exports = t;
      } }), Ia = ee({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Ir();
        e.commonDeprecatedHandler = (t, s, a) => {
          let { descriptor: r } = a, u = [`${n.default.yellow(typeof t == "string" ? r.key(t) : r.pair(t))} is deprecated`];
          return s && u.push(`we now treat it as ${n.default.blue(typeof s == "string" ? r.key(s) : r.pair(s))}`), u.join("; ") + ".";
        };
      } }), zD = ee({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(Ia(), e);
      } }), XD = ee({ "node_modules/vnopts/lib/handlers/invalid/common.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Ir();
        e.commonInvalidHandler = (t, s, a) => [`Invalid ${n.default.red(a.descriptor.key(t))} value.`, `Expected ${n.default.blue(a.schemas[t].expected(a))},`, `but received ${n.default.red(a.descriptor.value(s))}.`].join(" ");
      } }), ka = ee({ "node_modules/vnopts/lib/handlers/invalid/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(XD(), e);
      } }), KD = ee({ "node_modules/vnopts/node_modules/leven/index.js"(e, n) {
        "use strict";
        re();
        var t = [], s = [];
        n.exports = function(a, r) {
          if (a === r)
            return 0;
          var u = a;
          a.length > r.length && (a = r, r = u);
          var i = a.length, l = r.length;
          if (i === 0)
            return l;
          if (l === 0)
            return i;
          for (; i > 0 && a.charCodeAt(~-i) === r.charCodeAt(~-l); )
            i--, l--;
          if (i === 0)
            return l;
          for (var c = 0; c < i && a.charCodeAt(c) === r.charCodeAt(c); )
            c++;
          if (i -= c, l -= c, i === 0)
            return l;
          for (var y, h, g, p, D = 0, v = 0; D < i; )
            s[c + D] = a.charCodeAt(c + D), t[D] = ++D;
          for (; v < l; )
            for (y = r.charCodeAt(c + v), g = v++, h = v, D = 0; D < i; D++)
              p = y === s[c + D] ? g : g + 1, g = t[D], h = t[D] = g > h ? p > h ? h + 1 : p : p > g ? g + 1 : p;
          return h;
        };
      } }), La = ee({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Ir(), t = KD();
        e.levenUnknownHandler = (s, a, r) => {
          let { descriptor: u, logger: i, schemas: l } = r, c = [`Ignored unknown option ${n.default.yellow(u.pair({ key: s, value: a }))}.`], y = Object.keys(l).sort().find((h) => t(s, h) < 3);
          y && c.push(`Did you mean ${n.default.blue(u.key(y))}?`), i.warn(c.join(" "));
        };
      } }), YD = ee({ "node_modules/vnopts/lib/handlers/unknown/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(La(), e);
      } }), QD = ee({ "node_modules/vnopts/lib/handlers/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(zD(), e), n.__exportStar(ka(), e), n.__exportStar(YD(), e);
      } }), Et = ee({ "node_modules/vnopts/lib/schema.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(r, u) {
          let i = new r(u), l = Object.create(i);
          for (let c of n)
            c in u && (l[c] = a(u[c], i, s.prototype[c].length));
          return l;
        }
        e.createSchema = t;
        var s = class {
          constructor(r) {
            this.name = r.name;
          }
          static create(r) {
            return t(this, r);
          }
          default(r) {
          }
          expected(r) {
            return "nothing";
          }
          validate(r, u) {
            return false;
          }
          deprecated(r, u) {
            return false;
          }
          forward(r, u) {
          }
          redirect(r, u) {
          }
          overlap(r, u, i) {
            return r;
          }
          preprocess(r, u) {
            return r;
          }
          postprocess(r, u) {
            return r;
          }
        };
        e.Schema = s;
        function a(r, u, i) {
          return typeof r == "function" ? function() {
            for (var l = arguments.length, c = new Array(l), y = 0; y < l; y++)
              c[y] = arguments[y];
            return r(...c.slice(0, i - 1), u, ...c.slice(i - 1));
          } : () => r;
        }
      } }), ZD = ee({ "node_modules/vnopts/lib/schemas/alias.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Et(), t = class extends n.Schema {
          constructor(s) {
            super(s), this._sourceName = s.sourceName;
          }
          expected(s) {
            return s.schemas[this._sourceName].expected(s);
          }
          validate(s, a) {
            return a.schemas[this._sourceName].validate(s, a);
          }
          redirect(s, a) {
            return this._sourceName;
          }
        };
        e.AliasSchema = t;
      } }), em = ee({ "node_modules/vnopts/lib/schemas/any.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Et(), t = class extends n.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return true;
          }
        };
        e.AnySchema = t;
      } }), tm = ee({ "node_modules/vnopts/lib/schemas/array.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt)), t = Et(), s = class extends t.Schema {
          constructor(r) {
            var { valueSchema: u, name: i = u.name } = r, l = n.__rest(r, ["valueSchema", "name"]);
            super(Object.assign({}, l, { name: i })), this._valueSchema = u;
          }
          expected(r) {
            return `an array of ${this._valueSchema.expected(r)}`;
          }
          validate(r, u) {
            if (!Array.isArray(r))
              return false;
            let i = [];
            for (let l of r) {
              let c = u.normalizeValidateResult(this._valueSchema.validate(l, u), l);
              c !== true && i.push(c.value);
            }
            return i.length === 0 ? true : { value: i };
          }
          deprecated(r, u) {
            let i = [];
            for (let l of r) {
              let c = u.normalizeDeprecatedResult(this._valueSchema.deprecated(l, u), l);
              c !== false && i.push(...c.map((y) => {
                let { value: h } = y;
                return { value: [h] };
              }));
            }
            return i;
          }
          forward(r, u) {
            let i = [];
            for (let l of r) {
              let c = u.normalizeForwardResult(this._valueSchema.forward(l, u), l);
              i.push(...c.map(a));
            }
            return i;
          }
          redirect(r, u) {
            let i = [], l = [];
            for (let c of r) {
              let y = u.normalizeRedirectResult(this._valueSchema.redirect(c, u), c);
              "remain" in y && i.push(y.remain), l.push(...y.redirect.map(a));
            }
            return i.length === 0 ? { redirect: l } : { redirect: l, remain: i };
          }
          overlap(r, u) {
            return r.concat(u);
          }
        };
        e.ArraySchema = s;
        function a(r) {
          let { from: u, to: i } = r;
          return { from: [u], to: i };
        }
      } }), rm = ee({ "node_modules/vnopts/lib/schemas/boolean.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Et(), t = class extends n.Schema {
          expected() {
            return "true or false";
          }
          validate(s) {
            return typeof s == "boolean";
          }
        };
        e.BooleanSchema = t;
      } }), Gn = ee({ "node_modules/vnopts/lib/utils.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        function n(p, D) {
          let v = /* @__PURE__ */ Object.create(null);
          for (let w of p) {
            let T = w[D];
            if (v[T])
              throw new Error(`Duplicate ${D} ${JSON.stringify(T)}`);
            v[T] = w;
          }
          return v;
        }
        e.recordFromArray = n;
        function t(p, D) {
          let v = /* @__PURE__ */ new Map();
          for (let w of p) {
            let T = w[D];
            if (v.has(T))
              throw new Error(`Duplicate ${D} ${JSON.stringify(T)}`);
            v.set(T, w);
          }
          return v;
        }
        e.mapFromArray = t;
        function s() {
          let p = /* @__PURE__ */ Object.create(null);
          return (D) => {
            let v = JSON.stringify(D);
            return p[v] ? true : (p[v] = true, false);
          };
        }
        e.createAutoChecklist = s;
        function a(p, D) {
          let v = [], w = [];
          for (let T of p)
            D(T) ? v.push(T) : w.push(T);
          return [v, w];
        }
        e.partition = a;
        function r(p) {
          return p === Math.floor(p);
        }
        e.isInt = r;
        function u(p, D) {
          if (p === D)
            return 0;
          let v = typeof p, w = typeof D, T = ["undefined", "object", "boolean", "number", "string"];
          return v !== w ? T.indexOf(v) - T.indexOf(w) : v !== "string" ? Number(p) - Number(D) : p.localeCompare(D);
        }
        e.comparePrimitive = u;
        function i(p) {
          return p === void 0 ? {} : p;
        }
        e.normalizeDefaultResult = i;
        function l(p, D) {
          return p === true ? true : p === false ? { value: D } : p;
        }
        e.normalizeValidateResult = l;
        function c(p, D) {
          let v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          return p === false ? false : p === true ? v ? true : [{ value: D }] : "value" in p ? [p] : p.length === 0 ? false : p;
        }
        e.normalizeDeprecatedResult = c;
        function y(p, D) {
          return typeof p == "string" || "key" in p ? { from: D, to: p } : "from" in p ? { from: p.from, to: p.to } : { from: D, to: p.to };
        }
        e.normalizeTransferResult = y;
        function h(p, D) {
          return p === void 0 ? [] : Array.isArray(p) ? p.map((v) => y(v, D)) : [y(p, D)];
        }
        e.normalizeForwardResult = h;
        function g(p, D) {
          let v = h(typeof p == "object" && "redirect" in p ? p.redirect : p, D);
          return v.length === 0 ? { remain: D, redirect: v } : typeof p == "object" && "remain" in p ? { remain: p.remain, redirect: v } : { redirect: v };
        }
        e.normalizeRedirectResult = g;
      } }), nm = ee({ "node_modules/vnopts/lib/schemas/choice.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Et(), t = Gn(), s = class extends n.Schema {
          constructor(a) {
            super(a), this._choices = t.mapFromArray(a.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
          }
          expected(a) {
            let { descriptor: r } = a, u = Array.from(this._choices.keys()).map((c) => this._choices.get(c)).filter((c) => !c.deprecated).map((c) => c.value).sort(t.comparePrimitive).map(r.value), i = u.slice(0, -2), l = u.slice(-2);
            return i.concat(l.join(" or ")).join(", ");
          }
          validate(a) {
            return this._choices.has(a);
          }
          deprecated(a) {
            let r = this._choices.get(a);
            return r && r.deprecated ? { value: a } : false;
          }
          forward(a) {
            let r = this._choices.get(a);
            return r ? r.forward : void 0;
          }
          redirect(a) {
            let r = this._choices.get(a);
            return r ? r.redirect : void 0;
          }
        };
        e.ChoiceSchema = s;
      } }), ja = ee({ "node_modules/vnopts/lib/schemas/number.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Et(), t = class extends n.Schema {
          expected() {
            return "a number";
          }
          validate(s, a) {
            return typeof s == "number";
          }
        };
        e.NumberSchema = t;
      } }), um = ee({ "node_modules/vnopts/lib/schemas/integer.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Gn(), t = ja(), s = class extends t.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(a, r) {
            return r.normalizeValidateResult(super.validate(a, r), a) === true && n.isInt(a);
          }
        };
        e.IntegerSchema = s;
      } }), sm = ee({ "node_modules/vnopts/lib/schemas/string.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Et(), t = class extends n.Schema {
          expected() {
            return "a string";
          }
          validate(s) {
            return typeof s == "string";
          }
        };
        e.StringSchema = t;
      } }), im = ee({ "node_modules/vnopts/lib/schemas/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(ZD(), e), n.__exportStar(em(), e), n.__exportStar(tm(), e), n.__exportStar(rm(), e), n.__exportStar(nm(), e), n.__exportStar(um(), e), n.__exportStar(ja(), e), n.__exportStar(sm(), e);
      } }), am = ee({ "node_modules/vnopts/lib/defaults.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Pa(), t = Ia(), s = ka(), a = La();
        e.defaultDescriptor = n.apiDescriptor, e.defaultUnknownHandler = a.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      } }), om = ee({ "node_modules/vnopts/lib/normalize.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = am(), t = Gn();
        e.normalize = (a, r, u) => new s(r, u).normalize(a);
        var s = class {
          constructor(a, r) {
            let { logger: u = console, descriptor: i = n.defaultDescriptor, unknown: l = n.defaultUnknownHandler, invalid: c = n.defaultInvalidHandler, deprecated: y = n.defaultDeprecatedHandler } = r || {};
            this._utils = { descriptor: i, logger: u || { warn: () => {
            } }, schemas: t.recordFromArray(a, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult }, this._unknownHandler = l, this._invalidHandler = c, this._deprecatedHandler = y, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = t.createAutoChecklist();
          }
          normalize(a) {
            let r = {}, u = [a], i = () => {
              for (; u.length !== 0; ) {
                let l = u.shift(), c = this._applyNormalization(l, r);
                u.push(...c);
              }
            };
            i();
            for (let l of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[l];
              if (!(l in r)) {
                let y = t.normalizeDefaultResult(c.default(this._utils));
                "value" in y && u.push({ [l]: y.value });
              }
            }
            i();
            for (let l of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[l];
              l in r && (r[l] = c.postprocess(r[l], this._utils));
            }
            return r;
          }
          _applyNormalization(a, r) {
            let u = [], [i, l] = t.partition(Object.keys(a), (c) => c in this._utils.schemas);
            for (let c of i) {
              let y = this._utils.schemas[c], h = y.preprocess(a[c], this._utils), g = t.normalizeValidateResult(y.validate(h, this._utils), h);
              if (g !== true) {
                let { value: T } = g, F = this._invalidHandler(c, T, this._utils);
                throw typeof F == "string" ? new Error(F) : F;
              }
              let p = (T) => {
                let { from: F, to: A } = T;
                u.push(typeof A == "string" ? { [A]: F } : { [A.key]: A.value });
              }, D = (T) => {
                let { value: F, redirectTo: A } = T, B = t.normalizeDeprecatedResult(y.deprecated(F, this._utils), h, true);
                if (B !== false)
                  if (B === true)
                    this._hasDeprecationWarned(c) || this._utils.logger.warn(this._deprecatedHandler(c, A, this._utils));
                  else
                    for (let { value: I } of B) {
                      let P = { key: c, value: I };
                      if (!this._hasDeprecationWarned(P)) {
                        let R = typeof A == "string" ? { key: A, value: I } : A;
                        this._utils.logger.warn(this._deprecatedHandler(P, R, this._utils));
                      }
                    }
              };
              t.normalizeForwardResult(y.forward(h, this._utils), h).forEach(p);
              let w = t.normalizeRedirectResult(y.redirect(h, this._utils), h);
              if (w.redirect.forEach(p), "remain" in w) {
                let T = w.remain;
                r[c] = c in r ? y.overlap(r[c], T, this._utils) : T, D({ value: T });
              }
              for (let { from: T, to: F } of w.redirect)
                D({ value: T, redirectTo: F });
            }
            for (let c of l) {
              let y = a[c], h = this._unknownHandler(c, y, this._utils);
              if (h)
                for (let g of Object.keys(h)) {
                  let p = { [g]: h[g] };
                  g in this._utils.schemas ? u.push(p) : Object.assign(r, p);
                }
            }
            return u;
          }
        };
        e.Normalizer = s;
      } }), lm = ee({ "node_modules/vnopts/lib/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = (Ct(), ft(yt));
        n.__exportStar(JD(), e), n.__exportStar(QD(), e), n.__exportStar(im(), e), n.__exportStar(om(), e), n.__exportStar(Et(), e);
      } }), cm = ee({ "src/main/options-normalizer.js"(e, n) {
        "use strict";
        re();
        var t = lm(), s = lt(), a = { key: (g) => g.length === 1 ? `-${g}` : `--${g}`, value: (g) => t.apiDescriptor.value(g), pair: (g) => {
          let { key: p, value: D } = g;
          return D === false ? `--no-${p}` : D === true ? a.key(p) : D === "" ? `${a.key(p)} without an argument` : `${a.key(p)}=${D}`;
        } }, r = (g) => {
          let { colorsModule: p, levenshteinDistance: D } = g;
          return class extends t.ChoiceSchema {
            constructor(w) {
              let { name: T, flags: F } = w;
              super({ name: T, choices: F }), this._flags = [...F].sort();
            }
            preprocess(w, T) {
              if (typeof w == "string" && w.length > 0 && !this._flags.includes(w)) {
                let F = this._flags.find((A) => D(A, w) < 3);
                if (F)
                  return T.logger.warn([`Unknown flag ${p.yellow(T.descriptor.value(w))},`, `did you mean ${p.blue(T.descriptor.value(F))}?`].join(" ")), F;
              }
              return w;
            }
            expected() {
              return "a flag";
            }
          };
        }, u;
        function i(g, p) {
          let { logger: D = false, isCLI: v = false, passThrough: w = false, colorsModule: T = null, levenshteinDistance: F = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, A = w ? Array.isArray(w) ? (x, m) => w.includes(x) ? { [x]: m } : void 0 : (x, m) => ({ [x]: m }) : (x, m, E) => {
            let o = E.schemas, { _: d } = o, C = Ln(o, Jf);
            return t.levenUnknownHandler(x, m, Object.assign(Object.assign({}, E), {}, { schemas: C }));
          }, B = v ? a : t.apiDescriptor, I = l(p, { isCLI: v, colorsModule: T, levenshteinDistance: F }), P = new t.Normalizer(I, { logger: D, unknown: A, descriptor: B }), R = D !== false;
          R && u && (P._hasDeprecationWarned = u);
          let f = P.normalize(g);
          return R && (u = P._hasDeprecationWarned), v && f["plugin-search"] === false && (f["plugin-search-dir"] = false), f;
        }
        function l(g, p) {
          let { isCLI: D, colorsModule: v, levenshteinDistance: w } = p, T = [];
          D && T.push(t.AnySchema.create({ name: "_" }));
          for (let F of g)
            T.push(c(F, { isCLI: D, optionInfos: g, colorsModule: v, levenshteinDistance: w })), F.alias && D && T.push(t.AliasSchema.create({ name: F.alias, sourceName: F.name }));
          return T;
        }
        function c(g, p) {
          let { isCLI: D, optionInfos: v, colorsModule: w, levenshteinDistance: T } = p, { name: F } = g;
          if (F === "plugin-search-dir" || F === "pluginSearchDirs")
            return t.AnySchema.create({ name: F, preprocess(P) {
              return P === false || (P = Array.isArray(P) ? P : [P]), P;
            }, validate(P) {
              return P === false ? true : P.every((R) => typeof R == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            } });
          let A = { name: F }, B, I = {};
          switch (g.type) {
            case "int":
              B = t.IntegerSchema, D && (A.preprocess = Number);
              break;
            case "string":
              B = t.StringSchema;
              break;
            case "choice":
              B = t.ChoiceSchema, A.choices = g.choices.map((P) => typeof P == "object" && P.redirect ? Object.assign(Object.assign({}, P), {}, { redirect: { to: { key: g.name, value: P.redirect } } }) : P);
              break;
            case "boolean":
              B = t.BooleanSchema;
              break;
            case "flag":
              B = r({ colorsModule: w, levenshteinDistance: T }), A.flags = v.flatMap((P) => [P.alias, P.description && P.name, P.oppositeDescription && `no-${P.name}`].filter(Boolean));
              break;
            case "path":
              B = t.StringSchema;
              break;
            default:
              throw new Error(`Unexpected type ${g.type}`);
          }
          if (g.exception ? A.validate = (P, R, f) => g.exception(P) || R.validate(P, f) : A.validate = (P, R, f) => P === void 0 || R.validate(P, f), g.redirect && (I.redirect = (P) => P ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0), g.deprecated && (I.deprecated = true), D && !g.array) {
            let P = A.preprocess || ((R) => R);
            A.preprocess = (R, f, x) => f.preprocess(P(Array.isArray(R) ? s(R) : R), x);
          }
          return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, D ? { preprocess: (P) => Array.isArray(P) ? P : [P] } : {}), I), {}, { valueSchema: B.create(A) })) : B.create(Object.assign(Object.assign({}, A), I));
        }
        function y(g, p, D) {
          return i(g, p, D);
        }
        function h(g, p, D) {
          return i(g, p, Object.assign({ isCLI: true }, D));
        }
        n.exports = { normalizeApiOptions: y, normalizeCliOptions: h };
      } }), it = ee({ "src/language-js/loc.js"(e, n) {
        "use strict";
        re();
        var t = $n();
        function s(l) {
          var c, y;
          let h = l.range ? l.range[0] : l.start, g = (c = (y = l.declaration) === null || y === void 0 ? void 0 : y.decorators) !== null && c !== void 0 ? c : l.decorators;
          return t(g) ? Math.min(s(g[0]), h) : h;
        }
        function a(l) {
          return l.range ? l.range[1] : l.end;
        }
        function r(l, c) {
          let y = s(l);
          return Number.isInteger(y) && y === s(c);
        }
        function u(l, c) {
          let y = a(l);
          return Number.isInteger(y) && y === a(c);
        }
        function i(l, c) {
          return r(l, c) && u(l, c);
        }
        n.exports = { locStart: s, locEnd: a, hasSameLocStart: r, hasSameLoc: i };
      } }), pm = ee({ "src/main/load-parser.js"(e, n) {
        re(), n.exports = () => {
        };
      } }), fm = ee({ "scripts/build/shims/babel-highlight.cjs"(e, n) {
        "use strict";
        re();
        var t = Ir(), s = { shouldHighlight: () => false, getChalk: () => t };
        n.exports = s;
      } }), Dm = ee({ "node_modules/@babel/code-frame/lib/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.codeFrameColumns = u, e.default = i;
        var n = fm(), t = false;
        function s(l) {
          return { gutter: l.grey, marker: l.red.bold, message: l.red.bold };
        }
        var a = /\r\n|[\n\r\u2028\u2029]/;
        function r(l, c, y) {
          let h = Object.assign({ column: 0, line: -1 }, l.start), g = Object.assign({}, h, l.end), { linesAbove: p = 2, linesBelow: D = 3 } = y || {}, v = h.line, w = h.column, T = g.line, F = g.column, A = Math.max(v - (p + 1), 0), B = Math.min(c.length, T + D);
          v === -1 && (A = 0), T === -1 && (B = c.length);
          let I = T - v, P = {};
          if (I)
            for (let R = 0; R <= I; R++) {
              let f = R + v;
              if (!w)
                P[f] = true;
              else if (R === 0) {
                let x = c[f - 1].length;
                P[f] = [w, x - w + 1];
              } else if (R === I)
                P[f] = [0, F];
              else {
                let x = c[f - R].length;
                P[f] = [0, x];
              }
            }
          else
            w === F ? w ? P[v] = [w, 0] : P[v] = true : P[v] = [w, F - w];
          return { start: A, end: B, markerLines: P };
        }
        function u(l, c) {
          let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = (y.highlightCode || y.forceColor) && (0, n.shouldHighlight)(y), g = (0, n.getChalk)(y), p = s(g), D = (R, f) => h ? R(f) : f, v = l.split(a), { start: w, end: T, markerLines: F } = r(c, v, y), A = c.start && typeof c.start.column == "number", B = String(T).length, P = (h ? (0, n.default)(l, y) : l).split(a, T).slice(w, T).map((R, f) => {
            let x = w + 1 + f, E = ` ${` ${x}`.slice(-B)} |`, o = F[x], d = !F[x + 1];
            if (o) {
              let C = "";
              if (Array.isArray(o)) {
                let _ = R.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "), b = o[1] || 1;
                C = [`
 `, D(p.gutter, E.replace(/\d/g, " ")), " ", _, D(p.marker, "^").repeat(b)].join(""), d && y.message && (C += " " + D(p.message, y.message));
              }
              return [D(p.marker, ">"), D(p.gutter, E), R.length > 0 ? ` ${R}` : "", C].join("");
            } else
              return ` ${D(p.gutter, E)}${R.length > 0 ? ` ${R}` : ""}`;
          }).join(`
`);
          return y.message && !A && (P = `${" ".repeat(B + 1)}${y.message}
${P}`), h ? g.reset(P) : P;
        }
        function i(l, c, y) {
          let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!t) {
            t = true;
            let p = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (Nt.emitWarning)
              Nt.emitWarning(p, "DeprecationWarning");
            else {
              let D = new Error(p);
              D.name = "DeprecationWarning", console.warn(new Error(p));
            }
          }
          return y = Math.max(y, 0), u(l, { start: { column: y, line: c } }, h);
        }
      } }), Un = ee({ "src/main/parser.js"(e, n) {
        "use strict";
        re();
        var { ConfigError: t } = Kt(), s = it(), a = pm(), { locStart: r, locEnd: u } = s, i = Object.getOwnPropertyNames, l = Object.getOwnPropertyDescriptor;
        function c(g) {
          let p = {};
          for (let D of g.plugins)
            if (D.parsers)
              for (let v of i(D.parsers))
                Object.defineProperty(p, v, l(D.parsers, v));
          return p;
        }
        function y(g) {
          let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c(g);
          if (typeof g.parser == "function")
            return { parse: g.parser, astFormat: "estree", locStart: r, locEnd: u };
          if (typeof g.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(p, g.parser))
              return p[g.parser];
            throw new t(`Couldn't resolve parser "${g.parser}". Parsers must be explicitly added to the standalone bundle.`);
          }
        }
        function h(g, p) {
          let D = c(p), v = Object.defineProperties({}, Object.fromEntries(Object.keys(D).map((T) => [T, { enumerable: true, get() {
            return D[T].parse;
          } }]))), w = y(p, D);
          try {
            return w.preprocess && (g = w.preprocess(g, p)), { text: g, ast: w.parse(g, v, p) };
          } catch (T) {
            let { loc: F } = T;
            if (F) {
              let { codeFrameColumns: A } = Dm();
              throw T.codeFrame = A(g, F, { highlightCode: true }), T.message += `
` + T.codeFrame, T;
            }
            throw T;
          }
        }
        n.exports = { parse: h, resolveParser: y };
      } }), Oa = ee({ "src/main/options.js"(e, n) {
        "use strict";
        re();
        var t = TD(), { UndefinedParserError: s } = Kt(), { getSupportInfo: a } = Rn(), r = cm(), { resolveParser: u } = Un(), i = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function l(h) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = Object.assign({}, h), D = a({ plugins: h.plugins, showUnreleased: true, showDeprecated: true }).options, v = Object.assign(Object.assign({}, i), Object.fromEntries(D.filter((B) => B.default !== void 0).map((B) => [B.name, B.default])));
          if (!p.parser) {
            if (!p.filepath)
              (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), p.parser = "babel";
            else if (p.parser = y(p.filepath, p.plugins), !p.parser)
              throw new s(`No parser could be inferred for file: ${p.filepath}`);
          }
          let w = u(r.normalizeApiOptions(p, [D.find((B) => B.name === "parser")], { passThrough: true, logger: false }));
          p.astFormat = w.astFormat, p.locEnd = w.locEnd, p.locStart = w.locStart;
          let T = c(p);
          p.printer = T.printers[p.astFormat];
          let F = Object.fromEntries(D.filter((B) => B.pluginDefaults && B.pluginDefaults[T.name] !== void 0).map((B) => [B.name, B.pluginDefaults[T.name]])), A = Object.assign(Object.assign({}, v), F);
          for (let [B, I] of Object.entries(A))
            (p[B] === null || p[B] === void 0) && (p[B] = I);
          return p.parser === "json" && (p.trailingComma = "none"), r.normalizeApiOptions(p, D, Object.assign({ passThrough: Object.keys(i) }, g));
        }
        function c(h) {
          let { astFormat: g } = h;
          if (!g)
            throw new Error("getPlugin() requires astFormat to be set");
          let p = h.plugins.find((D) => D.printers && D.printers[g]);
          if (!p)
            throw new Error(`Couldn't find plugin for AST format "${g}"`);
          return p;
        }
        function y(h, g) {
          let p = t.basename(h).toLowerCase(), v = a({ plugins: g }).languages.filter((w) => w.since !== null).find((w) => w.extensions && w.extensions.some((T) => p.endsWith(T)) || w.filenames && w.filenames.some((T) => T.toLowerCase() === p));
          return v && v.parsers[0];
        }
        n.exports = { normalize: l, hiddenDefaults: i, inferParser: y };
      } }), mm = ee({ "src/main/massage-ast.js"(e, n) {
        "use strict";
        re();
        function t(s, a, r) {
          if (Array.isArray(s))
            return s.map((c) => t(c, a, r)).filter(Boolean);
          if (!s || typeof s != "object")
            return s;
          let u = a.printer.massageAstNode, i;
          u && u.ignoredProperties ? i = u.ignoredProperties : i = /* @__PURE__ */ new Set();
          let l = {};
          for (let [c, y] of Object.entries(s))
            !i.has(c) && typeof y != "function" && (l[c] = t(y, a, s));
          if (u) {
            let c = u(s, l, r);
            if (c === null)
              return;
            if (c)
              return c;
          }
          return l;
        }
        n.exports = t;
      } }), Yt = ee({ "scripts/build/shims/assert.cjs"(e, n) {
        "use strict";
        re();
        var t = () => {
        };
        t.ok = t, t.strictEqual = t, n.exports = t;
      } }), et = ee({ "src/main/comments.js"(e, n) {
        "use strict";
        re();
        var t = Yt(), { builders: { line: s, hardline: a, breakParent: r, indent: u, lineSuffix: i, join: l, cursor: c } } = qe(), { hasNewline: y, skipNewline: h, skipSpaces: g, isPreviousLineEmpty: p, addLeadingComment: D, addDanglingComment: v, addTrailingComment: w } = Ge(), T = /* @__PURE__ */ new WeakMap();
        function F(k, $, M) {
          if (!k)
            return;
          let { printer: q, locStart: J, locEnd: L } = $;
          if (M) {
            if (q.canAttachComment && q.canAttachComment(k)) {
              let V;
              for (V = M.length - 1; V >= 0 && !(J(M[V]) <= J(k) && L(M[V]) <= L(k)); --V)
                ;
              M.splice(V + 1, 0, k);
              return;
            }
          } else if (T.has(k))
            return T.get(k);
          let Y = q.getCommentChildNodes && q.getCommentChildNodes(k, $) || typeof k == "object" && Object.entries(k).filter((V) => {
            let [O] = V;
            return O !== "enclosingNode" && O !== "precedingNode" && O !== "followingNode" && O !== "tokens" && O !== "comments" && O !== "parent";
          }).map((V) => {
            let [, O] = V;
            return O;
          });
          if (Y) {
            M || (M = [], T.set(k, M));
            for (let V of Y)
              F(V, $, M);
            return M;
          }
        }
        function A(k, $, M, q) {
          let { locStart: J, locEnd: L } = M, Y = J($), V = L($), O = F(k, M), K, se, Q = 0, le = O.length;
          for (; Q < le; ) {
            let W = Q + le >> 1, X = O[W], oe = J(X), ae = L(X);
            if (oe <= Y && V <= ae)
              return A(X, $, M, X);
            if (ae <= Y) {
              K = X, Q = W + 1;
              continue;
            }
            if (V <= oe) {
              se = X, le = W;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if (q && q.type === "TemplateLiteral") {
            let { quasis: W } = q, X = E(W, $, M);
            K && E(W, K, M) !== X && (K = null), se && E(W, se, M) !== X && (se = null);
          }
          return { enclosingNode: q, precedingNode: K, followingNode: se };
        }
        var B = () => false;
        function I(k, $, M, q) {
          if (!Array.isArray(k))
            return;
          let J = [], { locStart: L, locEnd: Y, printer: { handleComments: V = {} } } = q, { avoidAstMutation: O, ownLine: K = B, endOfLine: se = B, remaining: Q = B } = V, le = k.map((W, X) => Object.assign(Object.assign({}, A($, W, q)), {}, { comment: W, text: M, options: q, ast: $, isLastComment: k.length - 1 === X }));
          for (let [W, X] of le.entries()) {
            let { comment: oe, precedingNode: ae, enclosingNode: Ae, followingNode: z, text: H, options: Z, ast: ne, isLastComment: fe } = X;
            if (Z.parser === "json" || Z.parser === "json5" || Z.parser === "__js_expression" || Z.parser === "__vue_expression" || Z.parser === "__vue_ts_expression") {
              if (L(oe) - L(ne) <= 0) {
                D(ne, oe);
                continue;
              }
              if (Y(oe) - Y(ne) >= 0) {
                w(ne, oe);
                continue;
              }
            }
            let ge;
            if (O ? ge = [X] : (oe.enclosingNode = Ae, oe.precedingNode = ae, oe.followingNode = z, ge = [oe, H, Z, ne, fe]), R(H, Z, le, W))
              oe.placement = "ownLine", K(...ge) || (z ? D(z, oe) : ae ? w(ae, oe) : v(Ae || ne, oe));
            else if (f(H, Z, le, W))
              oe.placement = "endOfLine", se(...ge) || (ae ? w(ae, oe) : z ? D(z, oe) : v(Ae || ne, oe));
            else if (oe.placement = "remaining", !Q(...ge))
              if (ae && z) {
                let Ce = J.length;
                Ce > 0 && J[Ce - 1].followingNode !== z && x(J, H, Z), J.push(X);
              } else
                ae ? w(ae, oe) : z ? D(z, oe) : v(Ae || ne, oe);
          }
          if (x(J, M, q), !O)
            for (let W of k)
              delete W.precedingNode, delete W.enclosingNode, delete W.followingNode;
        }
        var P = (k) => !/[\S\n\u2028\u2029]/.test(k);
        function R(k, $, M, q) {
          let { comment: J, precedingNode: L } = M[q], { locStart: Y, locEnd: V } = $, O = Y(J);
          if (L)
            for (let K = q - 1; K >= 0; K--) {
              let { comment: se, precedingNode: Q } = M[K];
              if (Q !== L || !P(k.slice(V(se), O)))
                break;
              O = Y(se);
            }
          return y(k, O, { backwards: true });
        }
        function f(k, $, M, q) {
          let { comment: J, followingNode: L } = M[q], { locStart: Y, locEnd: V } = $, O = V(J);
          if (L)
            for (let K = q + 1; K < M.length; K++) {
              let { comment: se, followingNode: Q } = M[K];
              if (Q !== L || !P(k.slice(O, Y(se))))
                break;
              O = V(se);
            }
          return y(k, O);
        }
        function x(k, $, M) {
          let q = k.length;
          if (q === 0)
            return;
          let { precedingNode: J, followingNode: L, enclosingNode: Y } = k[0], V = M.printer.getGapRegex && M.printer.getGapRegex(Y) || /^[\s(]*$/, O = M.locStart(L), K;
          for (K = q; K > 0; --K) {
            let { comment: se, precedingNode: Q, followingNode: le } = k[K - 1];
            t.strictEqual(Q, J), t.strictEqual(le, L);
            let W = $.slice(M.locEnd(se), O);
            if (V.test(W))
              O = M.locStart(se);
            else
              break;
          }
          for (let [se, { comment: Q }] of k.entries())
            se < K ? w(J, Q) : D(L, Q);
          for (let se of [J, L])
            se.comments && se.comments.length > 1 && se.comments.sort((Q, le) => M.locStart(Q) - M.locStart(le));
          k.length = 0;
        }
        function m(k, $) {
          let M = k.getValue();
          return M.printed = true, $.printer.printComment(k, $);
        }
        function E(k, $, M) {
          let q = M.locStart($) - 1;
          for (let J = 1; J < k.length; ++J)
            if (q < M.locStart(k[J]))
              return J - 1;
          return 0;
        }
        function o(k, $) {
          let M = k.getValue(), q = [m(k, $)], { printer: J, originalText: L, locStart: Y, locEnd: V } = $;
          if (J.isBlockComment && J.isBlockComment(M)) {
            let se = y(L, V(M)) ? y(L, Y(M), { backwards: true }) ? a : s : " ";
            q.push(se);
          } else
            q.push(a);
          let K = h(L, g(L, V(M)));
          return K !== false && y(L, K) && q.push(a), q;
        }
        function d(k, $) {
          let M = k.getValue(), q = m(k, $), { printer: J, originalText: L, locStart: Y } = $, V = J.isBlockComment && J.isBlockComment(M);
          if (y(L, Y(M), { backwards: true })) {
            let K = p(L, M, Y);
            return i([a, K ? a : "", q]);
          }
          let O = [" ", q];
          return V || (O = [i(O), r]), O;
        }
        function C(k, $, M, q) {
          let J = [], L = k.getValue();
          return !L || !L.comments || (k.each(() => {
            let Y = k.getValue();
            !Y.leading && !Y.trailing && (!q || q(Y)) && J.push(m(k, $));
          }, "comments"), J.length === 0) ? "" : M ? l(a, J) : u([a, l(a, J)]);
        }
        function _(k, $, M) {
          let q = k.getValue();
          if (!q)
            return {};
          let J = q.comments || [];
          M && (J = J.filter((O) => !M.has(O)));
          let L = q === $.cursorNode;
          if (J.length === 0) {
            let O = L ? c : "";
            return { leading: O, trailing: O };
          }
          let Y = [], V = [];
          return k.each(() => {
            let O = k.getValue();
            if (M && M.has(O))
              return;
            let { leading: K, trailing: se } = O;
            K ? Y.push(o(k, $)) : se && V.push(d(k, $));
          }, "comments"), L && (Y.unshift(c), V.push(c)), { leading: Y, trailing: V };
        }
        function b(k, $, M, q) {
          let { leading: J, trailing: L } = _(k, M, q);
          return !J && !L ? $ : [J, $, L];
        }
        function N(k) {
          if (k)
            for (let $ of k) {
              if (!$.printed)
                throw new Error('Comment "' + $.value.trim() + '" was not printed. Please report this error!');
              delete $.printed;
            }
        }
        n.exports = { attach: I, printComments: b, printCommentsSeparately: _, printDanglingComments: C, getSortedChildNodes: F, ensureAllCommentsPrinted: N };
      } }), dm = ee({ "src/common/ast-path.js"(e, n) {
        "use strict";
        re();
        var t = lt();
        function s(u, i) {
          let l = a(u.stack, i);
          return l === -1 ? null : u.stack[l];
        }
        function a(u, i) {
          for (let l = u.length - 1; l >= 0; l -= 2) {
            let c = u[l];
            if (c && !Array.isArray(c) && --i < 0)
              return l;
          }
          return -1;
        }
        var r = class {
          constructor(u) {
            this.stack = [u];
          }
          getName() {
            let { stack: u } = this, { length: i } = u;
            return i > 1 ? u[i - 2] : null;
          }
          getValue() {
            return t(this.stack);
          }
          getNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u);
          }
          getParentNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u + 1);
          }
          call(u) {
            let { stack: i } = this, { length: l } = i, c = t(i);
            for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              h[g - 1] = arguments[g];
            for (let D of h)
              c = c[D], i.push(D, c);
            let p = u(this);
            return i.length = l, p;
          }
          callParent(u) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = a(this.stack, i + 1), c = this.stack.splice(l + 1), y = u(this);
            return this.stack.push(...c), y;
          }
          each(u) {
            let { stack: i } = this, { length: l } = i, c = t(i);
            for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              h[g - 1] = arguments[g];
            for (let p of h)
              c = c[p], i.push(p, c);
            for (let p = 0; p < c.length; ++p)
              i.push(p, c[p]), u(this, p, c), i.length -= 2;
            i.length = l;
          }
          map(u) {
            let i = [];
            for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), y = 1; y < l; y++)
              c[y - 1] = arguments[y];
            return this.each((h, g, p) => {
              i[g] = u(h, g, p);
            }, ...c), i;
          }
          try(u) {
            let { stack: i } = this, l = [...i];
            try {
              return u();
            } finally {
              i.length = 0, i.push(...l);
            }
          }
          match() {
            let u = this.stack.length - 1, i = null, l = this.stack[u--];
            for (var c = arguments.length, y = new Array(c), h = 0; h < c; h++)
              y[h] = arguments[h];
            for (let g of y) {
              if (l === void 0)
                return false;
              let p = null;
              if (typeof i == "number" && (p = i, i = this.stack[u--], l = this.stack[u--]), g && !g(l, i, p))
                return false;
              i = this.stack[u--], l = this.stack[u--];
            }
            return true;
          }
          findAncestor(u) {
            let i = this.stack.length - 1, l = null, c = this.stack[i--];
            for (; c; ) {
              let y = null;
              if (typeof l == "number" && (y = l, l = this.stack[i--], c = this.stack[i--]), l !== null && u(c, l, y))
                return c;
              l = this.stack[i--], c = this.stack[i--];
            }
          }
        };
        n.exports = r;
      } }), gm = ee({ "src/main/multiparser.js"(e, n) {
        "use strict";
        re();
        var { utils: { stripTrailingHardline: t } } = qe(), { normalize: s } = Oa(), a = et();
        function r(i, l, c, y) {
          if (c.printer.embed && c.embeddedLanguageFormatting === "auto")
            return c.printer.embed(i, l, (h, g, p) => u(h, g, c, y, p), c);
        }
        function u(i, l, c, y) {
          let { stripTrailingHardline: h = false } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, g = s(Object.assign(Object.assign(Object.assign({}, c), l), {}, { parentParser: c.parser, originalText: i }), { passThrough: true }), p = Un().parse(i, g), { ast: D } = p;
          i = p.text;
          let v = D.comments;
          delete D.comments, a.attach(v, D, i, g), g[Symbol.for("comments")] = v || [], g[Symbol.for("tokens")] = D.tokens || [];
          let w = y(D, g);
          return a.ensureAllCommentsPrinted(v), h ? typeof w == "string" ? w.replace(/(?:\r?\n)*$/, "") : t(w) : w;
        }
        n.exports = { printSubtree: r };
      } }), ym = ee({ "src/main/ast-to-doc.js"(e, n) {
        "use strict";
        re();
        var t = dm(), { builders: { hardline: s, addAlignmentToDoc: a }, utils: { propagateBreaks: r } } = qe(), { printComments: u } = et(), i = gm();
        function l(h, g) {
          let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: D } = g;
          D.preprocess && (h = D.preprocess(h, g));
          let v = /* @__PURE__ */ new Map(), w = new t(h), T = F();
          return p > 0 && (T = a([s, T], p, g.tabWidth)), r(T), T;
          function F(B, I) {
            return B === void 0 || B === w ? A(I) : Array.isArray(B) ? w.call(() => A(I), ...B) : w.call(() => A(I), B);
          }
          function A(B) {
            let I = w.getValue(), P = I && typeof I == "object" && B === void 0;
            if (P && v.has(I))
              return v.get(I);
            let R = y(w, g, F, B);
            return P && v.set(I, R), R;
          }
        }
        function c(h, g) {
          let { originalText: p, [Symbol.for("comments")]: D, locStart: v, locEnd: w } = g, T = v(h), F = w(h), A = /* @__PURE__ */ new Set();
          for (let B of D)
            v(B) >= T && w(B) <= F && (B.printed = true, A.add(B));
          return { doc: p.slice(T, F), printedComments: A };
        }
        function y(h, g, p, D) {
          let v = h.getValue(), { printer: w } = g, T, F;
          if (w.hasPrettierIgnore && w.hasPrettierIgnore(h))
            ({ doc: T, printedComments: F } = c(v, g));
          else {
            if (v)
              try {
                T = i.printSubtree(h, p, g, l);
              } catch (A) {
                if (globalThis.PRETTIER_DEBUG)
                  throw A;
              }
            T || (T = w.print(h, g, p, D));
          }
          return (!w.willPrintOwnComments || !w.willPrintOwnComments(h, g)) && (T = u(h, T, g, F)), T;
        }
        n.exports = l;
      } }), hm = ee({ "src/main/range-util.js"(e, n) {
        "use strict";
        re();
        var t = Yt(), s = et(), a = (D) => {
          let { parser: v } = D;
          return v === "json" || v === "json5" || v === "json-stringify";
        };
        function r(D, v) {
          let w = [D.node, ...D.parentNodes], T = /* @__PURE__ */ new Set([v.node, ...v.parentNodes]);
          return w.find((F) => y.has(F.type) && T.has(F));
        }
        function u(D) {
          let v = D.length - 1;
          for (; ; ) {
            let w = D[v];
            if (w && (w.type === "Program" || w.type === "File"))
              v--;
            else
              break;
          }
          return D.slice(0, v + 1);
        }
        function i(D, v, w) {
          let { locStart: T, locEnd: F } = w, A = D.node, B = v.node;
          if (A === B)
            return { startNode: A, endNode: B };
          let I = T(D.node);
          for (let R of u(v.parentNodes))
            if (T(R) >= I)
              B = R;
            else
              break;
          let P = F(v.node);
          for (let R of u(D.parentNodes)) {
            if (F(R) <= P)
              A = R;
            else
              break;
            if (A === B)
              break;
          }
          return { startNode: A, endNode: B };
        }
        function l(D, v, w, T) {
          let F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], A = arguments.length > 5 ? arguments[5] : void 0, { locStart: B, locEnd: I } = w, P = B(D), R = I(D);
          if (!(v > R || v < P || A === "rangeEnd" && v === P || A === "rangeStart" && v === R)) {
            for (let f of s.getSortedChildNodes(D, w)) {
              let x = l(f, v, w, T, [D, ...F], A);
              if (x)
                return x;
            }
            if (!T || T(D, F[0]))
              return { node: D, parentNodes: F };
          }
        }
        function c(D, v) {
          return v !== "DeclareExportDeclaration" && D !== "TypeParameterDeclaration" && (D === "Directive" || D === "TypeAlias" || D === "TSExportAssignment" || D.startsWith("Declare") || D.startsWith("TSDeclare") || D.endsWith("Statement") || D.endsWith("Declaration"));
        }
        var y = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), h = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function g(D, v, w) {
          if (!v)
            return false;
          switch (D.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return c(v.type, w && w.type);
            case "json":
            case "json5":
            case "json-stringify":
              return y.has(v.type);
            case "graphql":
              return h.has(v.kind);
            case "vue":
              return v.tag !== "root";
          }
          return false;
        }
        function p(D, v, w) {
          let { rangeStart: T, rangeEnd: F, locStart: A, locEnd: B } = v;
          t.ok(F > T);
          let I = D.slice(T, F).search(/\S/), P = I === -1;
          if (!P)
            for (T += I; F > T && !/\S/.test(D[F - 1]); --F)
              ;
          let R = l(w, T, v, (E, o) => g(v, E, o), [], "rangeStart"), f = P ? R : l(w, F, v, (E) => g(v, E), [], "rangeEnd");
          if (!R || !f)
            return { rangeStart: 0, rangeEnd: 0 };
          let x, m;
          if (a(v)) {
            let E = r(R, f);
            x = E, m = E;
          } else
            ({ startNode: x, endNode: m } = i(R, f, v));
          return { rangeStart: Math.min(A(x), A(m)), rangeEnd: Math.max(B(x), B(m)) };
        }
        n.exports = { calculateRange: p, findNodeAtOffset: l };
      } }), vm = ee({ "src/main/core.js"(e, n) {
        "use strict";
        re();
        var { diffArrays: t } = rD(), { printer: { printDocToString: s }, debug: { printDocToDebug: a } } = qe(), { getAlignmentSize: r } = Ge(), { guessEndOfLine: u, convertEndOfLineToChars: i, countEndOfLineChars: l, normalizeEndOfLine: c } = qn(), y = Oa().normalize, h = mm(), g = et(), p = Un(), D = ym(), v = hm(), w = "\uFEFF", T = Symbol("cursor");
        function F(m, E, o) {
          let d = E.comments;
          return d && (delete E.comments, g.attach(d, E, m, o)), o[Symbol.for("comments")] = d || [], o[Symbol.for("tokens")] = E.tokens || [], o.originalText = m, d;
        }
        function A(m, E) {
          let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!m || m.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          let { ast: d, text: C } = p.parse(m, E);
          if (E.cursorOffset >= 0) {
            let k = v.findNodeAtOffset(d, E.cursorOffset, E);
            k && k.node && (E.cursorNode = k.node);
          }
          let _ = F(C, d, E), b = D(d, E, o), N = s(b, E);
          if (g.ensureAllCommentsPrinted(_), o > 0) {
            let k = N.formatted.trim();
            N.cursorNodeStart !== void 0 && (N.cursorNodeStart -= N.formatted.indexOf(k)), N.formatted = k + i(E.endOfLine);
          }
          if (E.cursorOffset >= 0) {
            let k, $, M, q, J;
            if (E.cursorNode && N.cursorNodeText ? (k = E.locStart(E.cursorNode), $ = C.slice(k, E.locEnd(E.cursorNode)), M = E.cursorOffset - k, q = N.cursorNodeStart, J = N.cursorNodeText) : (k = 0, $ = C, M = E.cursorOffset, q = 0, J = N.formatted), $ === J)
              return { formatted: N.formatted, cursorOffset: q + M, comments: _ };
            let L = [...$];
            L.splice(M, 0, T);
            let Y = [...J], V = t(L, Y), O = q;
            for (let K of V)
              if (K.removed) {
                if (K.value.includes(T))
                  break;
              } else
                O += K.count;
            return { formatted: N.formatted, cursorOffset: O, comments: _ };
          }
          return { formatted: N.formatted, cursorOffset: -1, comments: _ };
        }
        function B(m, E) {
          let { ast: o, text: d } = p.parse(m, E), { rangeStart: C, rangeEnd: _ } = v.calculateRange(d, E, o), b = d.slice(C, _), N = Math.min(C, d.lastIndexOf(`
`, C) + 1), k = d.slice(N, C).match(/^\s*/)[0], $ = r(k, E.tabWidth), M = A(b, Object.assign(Object.assign({}, E), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: E.cursorOffset > C && E.cursorOffset <= _ ? E.cursorOffset - C : -1, endOfLine: "lf" }), $), q = M.formatted.trimEnd(), { cursorOffset: J } = E;
          J > _ ? J += q.length - b.length : M.cursorOffset >= 0 && (J = M.cursorOffset + C);
          let L = d.slice(0, C) + q + d.slice(_);
          if (E.endOfLine !== "lf") {
            let Y = i(E.endOfLine);
            J >= 0 && Y === `\r
` && (J += l(L.slice(0, J), `
`)), L = L.replace(/\n/g, Y);
          }
          return { formatted: L, cursorOffset: J, comments: M.comments };
        }
        function I(m, E, o) {
          return typeof E != "number" || Number.isNaN(E) || E < 0 || E > m.length ? o : E;
        }
        function P(m, E) {
          let { cursorOffset: o, rangeStart: d, rangeEnd: C } = E;
          return o = I(m, o, -1), d = I(m, d, 0), C = I(m, C, m.length), Object.assign(Object.assign({}, E), {}, { cursorOffset: o, rangeStart: d, rangeEnd: C });
        }
        function R(m, E) {
          let { cursorOffset: o, rangeStart: d, rangeEnd: C, endOfLine: _ } = P(m, E), b = m.charAt(0) === w;
          if (b && (m = m.slice(1), o--, d--, C--), _ === "auto" && (_ = u(m)), m.includes("\r")) {
            let N = (k) => l(m.slice(0, Math.max(k, 0)), `\r
`);
            o -= N(o), d -= N(d), C -= N(C), m = c(m);
          }
          return { hasBOM: b, text: m, options: P(m, Object.assign(Object.assign({}, E), {}, { cursorOffset: o, rangeStart: d, rangeEnd: C, endOfLine: _ })) };
        }
        function f(m, E) {
          let o = p.resolveParser(E);
          return !o.hasPragma || o.hasPragma(m);
        }
        function x(m, E) {
          let { hasBOM: o, text: d, options: C } = R(m, y(E));
          if (C.rangeStart >= C.rangeEnd && d !== "" || C.requirePragma && !f(d, C))
            return { formatted: m, cursorOffset: E.cursorOffset, comments: [] };
          let _;
          return C.rangeStart > 0 || C.rangeEnd < d.length ? _ = B(d, C) : (!C.requirePragma && C.insertPragma && C.printer.insertPragma && !f(d, C) && (d = C.printer.insertPragma(d)), _ = A(d, C)), o && (_.formatted = w + _.formatted, _.cursorOffset >= 0 && _.cursorOffset++), _;
        }
        n.exports = { formatWithCursor: x, parse(m, E, o) {
          let { text: d, options: C } = R(m, y(E)), _ = p.parse(d, C);
          return o && (_.ast = h(_.ast, C)), _;
        }, formatAST(m, E) {
          E = y(E);
          let o = D(m, E);
          return s(o, E);
        }, formatDoc(m, E) {
          return x(a(m), Object.assign(Object.assign({}, E), {}, { parser: "__js_expression" })).formatted;
        }, printToDoc(m, E) {
          E = y(E);
          let { ast: o, text: d } = p.parse(m, E);
          return F(d, o, E), D(o, E);
        }, printDocToString(m, E) {
          return s(m, y(E));
        } };
      } }), Cm = ee({ "src/common/util-shared.js"(e, n) {
        "use strict";
        re();
        var { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: r, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: c, skipToLineEnd: y, skipEverythingButNewLine: h, skipInlineComment: g, skipTrailingComment: p, hasNewline: D, hasNewlineInRange: v, hasSpaces: w, isNextLineEmpty: T, isNextLineEmptyAfterIndex: F, isPreviousLineEmpty: A, getNextNonSpaceNonCommentCharacterIndex: B, makeString: I, addLeadingComment: P, addDanglingComment: R, addTrailingComment: f } = Ge();
        n.exports = { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: r, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: c, skipToLineEnd: y, skipEverythingButNewLine: h, skipInlineComment: g, skipTrailingComment: p, hasNewline: D, hasNewlineInRange: v, hasSpaces: w, isNextLineEmpty: T, isNextLineEmptyAfterIndex: F, isPreviousLineEmpty: A, getNextNonSpaceNonCommentCharacterIndex: B, makeString: I, addLeadingComment: P, addDanglingComment: R, addTrailingComment: f };
      } }), wt = ee({ "src/utils/create-language.js"(e, n) {
        "use strict";
        re(), n.exports = function(t, s) {
          let { languageId: a } = t, r = Ln(t, zf);
          return Object.assign(Object.assign({ linguistLanguageId: a }, r), s(t));
        };
      } }), Em = ee({ "node_modules/esutils/lib/ast.js"(e, n) {
        re(), function() {
          "use strict";
          function t(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return true;
            }
            return false;
          }
          function s(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return true;
            }
            return false;
          }
          function a(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return true;
            }
            return false;
          }
          function r(l) {
            return a(l) || l != null && l.type === "FunctionDeclaration";
          }
          function u(l) {
            switch (l.type) {
              case "IfStatement":
                return l.alternate != null ? l.alternate : l.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return l.body;
            }
            return null;
          }
          function i(l) {
            var c;
            if (l.type !== "IfStatement" || l.alternate == null)
              return false;
            c = l.consequent;
            do {
              if (c.type === "IfStatement" && c.alternate == null)
                return true;
              c = u(c);
            } while (c);
            return false;
          }
          n.exports = { isExpression: t, isStatement: a, isIterationStatement: s, isSourceElement: r, isProblematicIfStatement: i, trailingStatement: u };
        }();
      } }), qa = ee({ "node_modules/esutils/lib/code.js"(e, n) {
        re(), function() {
          "use strict";
          var t, s, a, r, u, i;
          s = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
          function l(F) {
            return 48 <= F && F <= 57;
          }
          function c(F) {
            return 48 <= F && F <= 57 || 97 <= F && F <= 102 || 65 <= F && F <= 70;
          }
          function y(F) {
            return F >= 48 && F <= 55;
          }
          a = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function h(F) {
            return F === 32 || F === 9 || F === 11 || F === 12 || F === 160 || F >= 5760 && a.indexOf(F) >= 0;
          }
          function g(F) {
            return F === 10 || F === 13 || F === 8232 || F === 8233;
          }
          function p(F) {
            if (F <= 65535)
              return String.fromCharCode(F);
            var A = String.fromCharCode(Math.floor((F - 65536) / 1024) + 55296), B = String.fromCharCode((F - 65536) % 1024 + 56320);
            return A + B;
          }
          for (r = new Array(128), i = 0; i < 128; ++i)
            r[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
          for (u = new Array(128), i = 0; i < 128; ++i)
            u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
          function D(F) {
            return F < 128 ? r[F] : s.NonAsciiIdentifierStart.test(p(F));
          }
          function v(F) {
            return F < 128 ? u[F] : s.NonAsciiIdentifierPart.test(p(F));
          }
          function w(F) {
            return F < 128 ? r[F] : t.NonAsciiIdentifierStart.test(p(F));
          }
          function T(F) {
            return F < 128 ? u[F] : t.NonAsciiIdentifierPart.test(p(F));
          }
          n.exports = { isDecimalDigit: l, isHexDigit: c, isOctalDigit: y, isWhiteSpace: h, isLineTerminator: g, isIdentifierStartES5: D, isIdentifierPartES5: v, isIdentifierStartES6: w, isIdentifierPartES6: T };
        }();
      } }), Fm = ee({ "node_modules/esutils/lib/keyword.js"(e, n) {
        re(), function() {
          "use strict";
          var t = qa();
          function s(D) {
            switch (D) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return true;
              default:
                return false;
            }
          }
          function a(D, v) {
            return !v && D === "yield" ? false : r(D, v);
          }
          function r(D, v) {
            if (v && s(D))
              return true;
            switch (D.length) {
              case 2:
                return D === "if" || D === "in" || D === "do";
              case 3:
                return D === "var" || D === "for" || D === "new" || D === "try";
              case 4:
                return D === "this" || D === "else" || D === "case" || D === "void" || D === "with" || D === "enum";
              case 5:
                return D === "while" || D === "break" || D === "catch" || D === "throw" || D === "const" || D === "yield" || D === "class" || D === "super";
              case 6:
                return D === "return" || D === "typeof" || D === "delete" || D === "switch" || D === "export" || D === "import";
              case 7:
                return D === "default" || D === "finally" || D === "extends";
              case 8:
                return D === "function" || D === "continue" || D === "debugger";
              case 10:
                return D === "instanceof";
              default:
                return false;
            }
          }
          function u(D, v) {
            return D === "null" || D === "true" || D === "false" || a(D, v);
          }
          function i(D, v) {
            return D === "null" || D === "true" || D === "false" || r(D, v);
          }
          function l(D) {
            return D === "eval" || D === "arguments";
          }
          function c(D) {
            var v, w, T;
            if (D.length === 0 || (T = D.charCodeAt(0), !t.isIdentifierStartES5(T)))
              return false;
            for (v = 1, w = D.length; v < w; ++v)
              if (T = D.charCodeAt(v), !t.isIdentifierPartES5(T))
                return false;
            return true;
          }
          function y(D, v) {
            return (D - 55296) * 1024 + (v - 56320) + 65536;
          }
          function h(D) {
            var v, w, T, F, A;
            if (D.length === 0)
              return false;
            for (A = t.isIdentifierStartES6, v = 0, w = D.length; v < w; ++v) {
              if (T = D.charCodeAt(v), 55296 <= T && T <= 56319) {
                if (++v, v >= w || (F = D.charCodeAt(v), !(56320 <= F && F <= 57343)))
                  return false;
                T = y(T, F);
              }
              if (!A(T))
                return false;
              A = t.isIdentifierPartES6;
            }
            return true;
          }
          function g(D, v) {
            return c(D) && !u(D, v);
          }
          function p(D, v) {
            return h(D) && !i(D, v);
          }
          n.exports = { isKeywordES5: a, isKeywordES6: r, isReservedWordES5: u, isReservedWordES6: i, isRestrictedWord: l, isIdentifierNameES5: c, isIdentifierNameES6: h, isIdentifierES5: g, isIdentifierES6: p };
        }();
      } }), Am = ee({ "node_modules/esutils/lib/utils.js"(e) {
        re(), function() {
          "use strict";
          e.ast = Em(), e.code = qa(), e.keyword = Fm();
        }();
      } }), Lt = ee({ "src/language-js/utils/is-block-comment.js"(e, n) {
        "use strict";
        re();
        var t = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), s = (a) => t.has(a == null ? void 0 : a.type);
        n.exports = s;
      } }), Sm = ee({ "src/language-js/utils/is-node-matches.js"(e, n) {
        "use strict";
        re();
        function t(a, r) {
          let u = r.split(".");
          for (let i = u.length - 1; i >= 0; i--) {
            let l = u[i];
            if (i === 0)
              return a.type === "Identifier" && a.name === l;
            if (a.type !== "MemberExpression" || a.optional || a.computed || a.property.type !== "Identifier" || a.property.name !== l)
              return false;
            a = a.object;
          }
        }
        function s(a, r) {
          return r.some((u) => t(a, u));
        }
        n.exports = s;
      } }), Ke = ee({ "src/language-js/utils/index.js"(e, n) {
        "use strict";
        re();
        var t = Am().keyword.isIdentifierNameES5, { getLast: s, hasNewline: a, skipWhitespace: r, isNonEmptyArray: u, isNextLineEmptyAfterIndex: i, getStringWidth: l } = Ge(), { locStart: c, locEnd: y, hasSameLocStart: h } = it(), g = Lt(), p = Sm(), D = "(?:(?=.)\\s)", v = new RegExp(`^${D}*:`), w = new RegExp(`^${D}*::`);
        function T(j) {
          var me, Ie;
          return ((me = j.extra) === null || me === void 0 ? void 0 : me.parenthesized) && g((Ie = j.trailingComments) === null || Ie === void 0 ? void 0 : Ie[0]) && v.test(j.trailingComments[0].value);
        }
        function F(j) {
          let me = j == null ? void 0 : j[0];
          return g(me) && w.test(me.value);
        }
        function A(j, me) {
          if (!j || typeof j != "object")
            return false;
          if (Array.isArray(j))
            return j.some((je) => A(je, me));
          let Ie = me(j);
          return typeof Ie == "boolean" ? Ie : Object.values(j).some((je) => A(je, me));
        }
        function B(j) {
          return j.type === "AssignmentExpression" || j.type === "BinaryExpression" || j.type === "LogicalExpression" || j.type === "NGPipeExpression" || j.type === "ConditionalExpression" || oe(j) || ae(j) || j.type === "SequenceExpression" || j.type === "TaggedTemplateExpression" || j.type === "BindExpression" || j.type === "UpdateExpression" && !j.prefix || nt(j) || j.type === "TSNonNullExpression";
        }
        function I(j) {
          var me, Ie, je, Ye, ut, ze;
          return j.expressions ? j.expressions[0] : (me = (Ie = (je = (Ye = (ut = (ze = j.left) !== null && ze !== void 0 ? ze : j.test) !== null && ut !== void 0 ? ut : j.callee) !== null && Ye !== void 0 ? Ye : j.object) !== null && je !== void 0 ? je : j.tag) !== null && Ie !== void 0 ? Ie : j.argument) !== null && me !== void 0 ? me : j.expression;
        }
        function P(j, me) {
          if (me.expressions)
            return ["expressions", 0];
          if (me.left)
            return ["left"];
          if (me.test)
            return ["test"];
          if (me.object)
            return ["object"];
          if (me.callee)
            return ["callee"];
          if (me.tag)
            return ["tag"];
          if (me.argument)
            return ["argument"];
          if (me.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function R(j) {
          return j = new Set(j), (me) => j.has(me == null ? void 0 : me.type);
        }
        var f = R(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), x = R(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function m(j) {
          let me = j.getParentNode();
          return j.getName() === "declaration" && x(me) ? me : null;
        }
        var E = R(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function o(j) {
          return j.type === "NumericLiteral" || j.type === "Literal" && typeof j.value == "number";
        }
        function d(j) {
          return j.type === "UnaryExpression" && (j.operator === "+" || j.operator === "-") && o(j.argument);
        }
        function C(j) {
          return j.type === "StringLiteral" || j.type === "Literal" && typeof j.value == "string";
        }
        var _ = R(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), b = R(["FunctionExpression", "ArrowFunctionExpression"]);
        function N(j) {
          return j.type === "FunctionExpression" || j.type === "ArrowFunctionExpression" && j.body.type === "BlockStatement";
        }
        function k(j) {
          return oe(j) && j.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(j.callee.name);
        }
        var $ = R(["JSXElement", "JSXFragment"]);
        function M(j, me) {
          if (j.parentParser !== "markdown" && j.parentParser !== "mdx")
            return false;
          let Ie = me.getNode();
          if (!Ie.expression || !$(Ie.expression))
            return false;
          let je = me.getParentNode();
          return je.type === "Program" && je.body.length === 1;
        }
        function q(j) {
          return j.kind === "get" || j.kind === "set";
        }
        function J(j) {
          return q(j) || h(j, j.value);
        }
        function L(j) {
          return (j.type === "ObjectTypeProperty" || j.type === "ObjectTypeInternalSlot") && j.value.type === "FunctionTypeAnnotation" && !j.static && !J(j);
        }
        function Y(j) {
          return (j.type === "TypeAnnotation" || j.type === "TSTypeAnnotation") && j.typeAnnotation.type === "FunctionTypeAnnotation" && !j.static && !h(j, j.typeAnnotation);
        }
        var V = R(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function O(j) {
          return ae(j) || j.type === "BindExpression" && Boolean(j.object);
        }
        var K = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function se(j) {
          return j ? !!((j.type === "GenericTypeAnnotation" || j.type === "TSTypeReference") && !j.typeParameters || K.has(j.type)) : false;
        }
        function Q(j) {
          let me = /^(?:before|after)(?:Each|All)$/;
          return j.callee.type === "Identifier" && me.test(j.callee.name) && j.arguments.length === 1;
        }
        var le = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function W(j) {
          return p(j, le);
        }
        function X(j, me) {
          if (j.type !== "CallExpression")
            return false;
          if (j.arguments.length === 1) {
            if (k(j) && me && X(me))
              return b(j.arguments[0]);
            if (Q(j))
              return k(j.arguments[0]);
          } else if ((j.arguments.length === 2 || j.arguments.length === 3) && (j.arguments[0].type === "TemplateLiteral" || C(j.arguments[0])) && W(j.callee))
            return j.arguments[2] && !o(j.arguments[2]) ? false : (j.arguments.length === 2 ? b(j.arguments[1]) : N(j.arguments[1]) && Fe(j.arguments[1]).length <= 1) || k(j.arguments[1]);
          return false;
        }
        var oe = R(["CallExpression", "OptionalCallExpression"]), ae = R(["MemberExpression", "OptionalMemberExpression"]);
        function Ae(j) {
          let me = "expressions";
          j.type === "TSTemplateLiteralType" && (me = "types");
          let Ie = j[me];
          return Ie.length === 0 ? false : Ie.every((je) => {
            if (ue(je))
              return false;
            if (je.type === "Identifier" || je.type === "ThisExpression")
              return true;
            if (ae(je)) {
              let Ye = je;
              for (; ae(Ye); )
                if (Ye.property.type !== "Identifier" && Ye.property.type !== "Literal" && Ye.property.type !== "StringLiteral" && Ye.property.type !== "NumericLiteral" || (Ye = Ye.object, ue(Ye)))
                  return false;
              return Ye.type === "Identifier" || Ye.type === "ThisExpression";
            }
            return false;
          });
        }
        function z(j, me) {
          return j === "+" || j === "-" ? j + me : me;
        }
        function H(j, me) {
          let Ie = c(me), je = r(j, y(me));
          return je !== false && j.slice(Ie, Ie + 2) === "/*" && j.slice(je, je + 2) === "*/";
        }
        function Z(j, me) {
          return $(me) ? Ve(me) : ue(me, ke.Leading, (Ie) => a(j, y(Ie)));
        }
        function ne(j, me) {
          return me.parser !== "json" && C(j.key) && ce(j.key).slice(1, -1) === j.key.value && (t(j.key.value) && !(me.parser === "babel-ts" && j.type === "ClassProperty" || me.parser === "typescript" && j.type === "PropertyDefinition") || fe(j.key.value) && String(Number(j.key.value)) === j.key.value && (me.parser === "babel" || me.parser === "acorn" || me.parser === "espree" || me.parser === "meriyah" || me.parser === "__babel_estree"));
        }
        function fe(j) {
          return /^(?:\d+|\d+\.\d+)$/.test(j);
        }
        function ge(j, me) {
          let Ie = /^[fx]?(?:describe|it|test)$/;
          return me.type === "TaggedTemplateExpression" && me.quasi === j && me.tag.type === "MemberExpression" && me.tag.property.type === "Identifier" && me.tag.property.name === "each" && (me.tag.object.type === "Identifier" && Ie.test(me.tag.object.name) || me.tag.object.type === "MemberExpression" && me.tag.object.property.type === "Identifier" && (me.tag.object.property.name === "only" || me.tag.object.property.name === "skip") && me.tag.object.object.type === "Identifier" && Ie.test(me.tag.object.object.name));
        }
        function Ce(j) {
          return j.quasis.some((me) => me.value.raw.includes(`
`));
        }
        function _e(j, me) {
          return (j.type === "TemplateLiteral" && Ce(j) || j.type === "TaggedTemplateExpression" && Ce(j.quasi)) && !a(me, c(j), { backwards: true });
        }
        function Oe(j) {
          if (!ue(j))
            return false;
          let me = s(st(j, ke.Dangling));
          return me && !g(me);
        }
        function pe(j) {
          if (j.length <= 1)
            return false;
          let me = 0;
          for (let Ie of j)
            if (b(Ie)) {
              if (me += 1, me > 1)
                return true;
            } else if (oe(Ie)) {
              for (let je of Ie.arguments)
                if (b(je))
                  return true;
            }
          return false;
        }
        function ie(j) {
          let me = j.getValue(), Ie = j.getParentNode();
          return oe(me) && oe(Ie) && Ie.callee === me && me.arguments.length > Ie.arguments.length && Ie.arguments.length > 0;
        }
        function ve(j, me) {
          if (me >= 2)
            return false;
          let Ie = (ze) => ve(ze, me + 1), je = j.type === "Literal" && "regex" in j && j.regex.pattern || j.type === "RegExpLiteral" && j.pattern;
          if (je && l(je) > 5)
            return false;
          if (j.type === "Literal" || j.type === "BigIntLiteral" || j.type === "DecimalLiteral" || j.type === "BooleanLiteral" || j.type === "NullLiteral" || j.type === "NumericLiteral" || j.type === "RegExpLiteral" || j.type === "StringLiteral" || j.type === "Identifier" || j.type === "ThisExpression" || j.type === "Super" || j.type === "PrivateName" || j.type === "PrivateIdentifier" || j.type === "ArgumentPlaceholder" || j.type === "Import")
            return true;
          if (j.type === "TemplateLiteral")
            return j.quasis.every((ze) => !ze.value.raw.includes(`
`)) && j.expressions.every(Ie);
          if (j.type === "ObjectExpression")
            return j.properties.every((ze) => !ze.computed && (ze.shorthand || ze.value && Ie(ze.value)));
          if (j.type === "ArrayExpression")
            return j.elements.every((ze) => ze === null || Ie(ze));
          if (He(j))
            return (j.type === "ImportExpression" || ve(j.callee, me)) && Je(j).every(Ie);
          if (ae(j))
            return ve(j.object, me) && ve(j.property, me);
          let Ye = { "!": true, "-": true, "+": true, "~": true };
          if (j.type === "UnaryExpression" && Ye[j.operator])
            return ve(j.argument, me);
          let ut = { "++": true, "--": true };
          return j.type === "UpdateExpression" && ut[j.operator] ? ve(j.argument, me) : j.type === "TSNonNullExpression" ? ve(j.expression, me) : false;
        }
        function ce(j) {
          var me, Ie;
          return (me = (Ie = j.extra) === null || Ie === void 0 ? void 0 : Ie.raw) !== null && me !== void 0 ? me : j.raw;
        }
        function U(j) {
          return j;
        }
        function de(j) {
          return j.filepath && /\.tsx$/i.test(j.filepath);
        }
        function De(j) {
          let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return j.trailingComma === "es5" && me === "es5" || j.trailingComma === "all" && (me === "all" || me === "es5");
        }
        function he(j, me) {
          switch (j = Ee(j), j.type) {
            case "FunctionExpression":
            case "ClassExpression":
            case "DoExpression":
              return me;
            case "ObjectExpression":
              return true;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return he(j.object, me);
            case "TaggedTemplateExpression":
              return j.tag.type === "FunctionExpression" ? false : he(j.tag, me);
            case "CallExpression":
            case "OptionalCallExpression":
              return j.callee.type === "FunctionExpression" ? false : he(j.callee, me);
            case "ConditionalExpression":
              return he(j.test, me);
            case "UpdateExpression":
              return !j.prefix && he(j.argument, me);
            case "BindExpression":
              return j.object && he(j.object, me);
            case "SequenceExpression":
              return he(j.expressions[0], me);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return he(j.expression, me);
            default:
              return false;
          }
        }
        var Be = { "==": true, "!=": true, "===": true, "!==": true }, Se = { "*": true, "/": true, "%": true }, ye = { ">>": true, ">>>": true, "<<": true };
        function S(j, me) {
          return !(te(me) !== te(j) || j === "**" || Be[j] && Be[me] || me === "%" && Se[j] || j === "%" && Se[me] || me !== j && Se[me] && Se[j] || ye[j] && ye[me]);
        }
        var G = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((j, me) => j.map((Ie) => [Ie, me])));
        function te(j) {
          return G.get(j);
        }
        function Ee(j) {
          for (; j.left; )
            j = j.left;
          return j;
        }
        function Re(j) {
          return Boolean(ye[j]) || j === "|" || j === "^" || j === "&";
        }
        function Te(j) {
          var me;
          if (j.rest)
            return true;
          let Ie = Fe(j);
          return ((me = s(Ie)) === null || me === void 0 ? void 0 : me.type) === "RestElement";
        }
        var Pe = /* @__PURE__ */ new WeakMap();
        function Fe(j) {
          if (Pe.has(j))
            return Pe.get(j);
          let me = [];
          return j.this && me.push(j.this), Array.isArray(j.parameters) ? me.push(...j.parameters) : Array.isArray(j.params) && me.push(...j.params), j.rest && me.push(j.rest), Pe.set(j, me), me;
        }
        function Ze(j, me) {
          let Ie = j.getValue(), je = 0, Ye = (ut) => me(ut, je++);
          Ie.this && j.call(Ye, "this"), Array.isArray(Ie.parameters) ? j.each(Ye, "parameters") : Array.isArray(Ie.params) && j.each(Ye, "params"), Ie.rest && j.call(Ye, "rest");
        }
        var xe = /* @__PURE__ */ new WeakMap();
        function Je(j) {
          if (xe.has(j))
            return xe.get(j);
          let me = j.arguments;
          return j.type === "ImportExpression" && (me = [j.source], j.attributes && me.push(j.attributes)), xe.set(j, me), me;
        }
        function we(j, me) {
          let Ie = j.getValue();
          Ie.type === "ImportExpression" ? (j.call((je) => me(je, 0), "source"), Ie.attributes && j.call((je) => me(je, 1), "attributes")) : j.each(me, "arguments");
        }
        function Le(j) {
          return j.value.trim() === "prettier-ignore" && !j.unignore;
        }
        function Ve(j) {
          return j && (j.prettierIgnore || ue(j, ke.PrettierIgnore));
        }
        function be(j) {
          let me = j.getValue();
          return Ve(me);
        }
        var ke = { Leading: 1 << 1, Trailing: 1 << 2, Dangling: 1 << 3, Block: 1 << 4, Line: 1 << 5, PrettierIgnore: 1 << 6, First: 1 << 7, Last: 1 << 8 }, Me = (j, me) => {
          if (typeof j == "function" && (me = j, j = 0), j || me)
            return (Ie, je, Ye) => !(j & ke.Leading && !Ie.leading || j & ke.Trailing && !Ie.trailing || j & ke.Dangling && (Ie.leading || Ie.trailing) || j & ke.Block && !g(Ie) || j & ke.Line && !f(Ie) || j & ke.First && je !== 0 || j & ke.Last && je !== Ye.length - 1 || j & ke.PrettierIgnore && !Le(Ie) || me && !me(Ie));
        };
        function ue(j, me, Ie) {
          if (!u(j == null ? void 0 : j.comments))
            return false;
          let je = Me(me, Ie);
          return je ? j.comments.some(je) : true;
        }
        function st(j, me, Ie) {
          if (!Array.isArray(j == null ? void 0 : j.comments))
            return [];
          let je = Me(me, Ie);
          return je ? j.comments.filter(je) : j.comments;
        }
        var rt = (j, me) => {
          let { originalText: Ie } = me;
          return i(Ie, y(j));
        };
        function He(j) {
          return oe(j) || j.type === "NewExpression" || j.type === "ImportExpression";
        }
        function Ue(j) {
          return j && (j.type === "ObjectProperty" || j.type === "Property" && !j.method && j.kind === "init");
        }
        function Xe(j) {
          return Boolean(j.__isUsingHackPipeline);
        }
        var at = Symbol("ifWithoutBlockAndSameLineComment");
        function nt(j) {
          return j.type === "TSAsExpression" || j.type === "TSSatisfiesExpression";
        }
        n.exports = { getFunctionParameters: Fe, iterateFunctionParametersPath: Ze, getCallArguments: Je, iterateCallArgumentsPath: we, hasRestParameter: Te, getLeftSide: I, getLeftSidePathName: P, getParentExportDeclaration: m, getTypeScriptMappedTypeModifier: z, hasFlowAnnotationComment: F, hasFlowShorthandAnnotationComment: T, hasLeadingOwnLineComment: Z, hasNakedLeftSide: B, hasNode: A, hasIgnoreComment: be, hasNodeIgnoreComment: Ve, identity: U, isBinaryish: V, isCallLikeExpression: He, isEnabledHackPipeline: Xe, isLineComment: f, isPrettierIgnoreComment: Le, isCallExpression: oe, isMemberExpression: ae, isExportDeclaration: x, isFlowAnnotationComment: H, isFunctionCompositionArgs: pe, isFunctionNotation: J, isFunctionOrArrowExpression: b, isGetterOrSetter: q, isJestEachTemplateLiteral: ge, isJsxNode: $, isLiteral: E, isLongCurriedCallExpression: ie, isSimpleCallArgument: ve, isMemberish: O, isNumericLiteral: o, isSignedNumericLiteral: d, isObjectProperty: Ue, isObjectType: _, isObjectTypePropertyAFunction: L, isSimpleType: se, isSimpleNumber: fe, isSimpleTemplateLiteral: Ae, isStringLiteral: C, isStringPropSafeToUnquote: ne, isTemplateOnItsOwnLine: _e, isTestCall: X, isTheOnlyJsxElementInMarkdown: M, isTSXFile: de, isTypeAnnotationAFunction: Y, isNextLineEmpty: rt, needsHardlineAfterDanglingComment: Oe, rawText: ce, shouldPrintComma: De, isBitwiseOperator: Re, shouldFlatten: S, startsWithNoLookaheadToken: he, getPrecedence: te, hasComment: ue, getComments: st, CommentCheckFlags: ke, markerForIfWithoutBlockAndSameLineComment: at, isTSTypeExpression: nt };
      } }), jt = ee({ "src/language-js/print/template-literal.js"(e, n) {
        "use strict";
        re();
        var t = lt(), { getStringWidth: s, getIndentSize: a } = Ge(), { builders: { join: r, hardline: u, softline: i, group: l, indent: c, align: y, lineSuffixBoundary: h, addAlignmentToDoc: g }, printer: { printDocToString: p }, utils: { mapDoc: D } } = qe(), { isBinaryish: v, isJestEachTemplateLiteral: w, isSimpleTemplateLiteral: T, hasComment: F, isMemberExpression: A, isTSTypeExpression: B } = Ke();
        function I(E, o, d) {
          let C = E.getValue();
          if (C.type === "TemplateLiteral" && w(C, E.getParentNode())) {
            let M = P(E, d, o);
            if (M)
              return M;
          }
          let b = "expressions";
          C.type === "TSTemplateLiteralType" && (b = "types");
          let N = [], k = E.map(o, b), $ = T(C);
          return $ && (k = k.map((M) => p(M, Object.assign(Object.assign({}, d), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), N.push(h, "`"), E.each((M) => {
            let q = M.getName();
            if (N.push(o()), q < k.length) {
              let { tabWidth: J } = d, L = M.getValue(), Y = a(L.value.raw, J), V = k[q];
              if (!$) {
                let K = C[b][q];
                (F(K) || A(K) || K.type === "ConditionalExpression" || K.type === "SequenceExpression" || B(K) || v(K)) && (V = [c([i, V]), i]);
              }
              let O = Y === 0 && L.value.raw.endsWith(`
`) ? y(Number.NEGATIVE_INFINITY, V) : g(V, Y, J);
              N.push(l(["${", O, h, "}"]));
            }
          }, "quasis"), N.push("`"), N;
        }
        function P(E, o, d) {
          let C = E.getNode(), _ = C.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (_.length > 1 || _.some((b) => b.length > 0)) {
            o.__inJestEach = true;
            let b = E.map(d, "expressions");
            o.__inJestEach = false;
            let N = [], k = b.map((L) => "${" + p(L, Object.assign(Object.assign({}, o), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), $ = [{ hasLineBreak: false, cells: [] }];
            for (let L = 1; L < C.quasis.length; L++) {
              let Y = t($), V = k[L - 1];
              Y.cells.push(V), V.includes(`
`) && (Y.hasLineBreak = true), C.quasis[L].value.raw.includes(`
`) && $.push({ hasLineBreak: false, cells: [] });
            }
            let M = Math.max(_.length, ...$.map((L) => L.cells.length)), q = Array.from({ length: M }).fill(0), J = [{ cells: _ }, ...$.filter((L) => L.cells.length > 0)];
            for (let { cells: L } of J.filter((Y) => !Y.hasLineBreak))
              for (let [Y, V] of L.entries())
                q[Y] = Math.max(q[Y], s(V));
            return N.push(h, "`", c([u, r(u, J.map((L) => r(" | ", L.cells.map((Y, V) => L.hasLineBreak ? Y : Y + " ".repeat(q[V] - s(Y))))))]), u, "`"), N;
          }
        }
        function R(E, o) {
          let d = E.getValue(), C = o();
          return F(d) && (C = l([c([i, C]), i])), ["${", C, h, "}"];
        }
        function f(E, o) {
          return E.map((d) => R(d, o), "expressions");
        }
        function x(E, o) {
          return D(E, (d) => typeof d == "string" ? o ? d.replace(/(\\*)`/g, "$1$1\\`") : m(d) : d);
        }
        function m(E) {
          return E.replace(/([\\`]|\${)/g, "\\$1");
        }
        n.exports = { printTemplateLiteral: I, printTemplateExpressions: f, escapeTemplateCharacters: x, uncookTemplateElementValue: m };
      } }), xm = ee({ "src/language-js/embed/markdown.js"(e, n) {
        "use strict";
        re();
        var { builders: { indent: t, softline: s, literalline: a, dedentToRoot: r } } = qe(), { escapeTemplateCharacters: u } = jt();
        function i(c, y, h) {
          let p = c.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (T, F) => "\\".repeat(F.length / 2) + "`"), D = l(p), v = D !== "";
          v && (p = p.replace(new RegExp(`^${D}`, "gm"), ""));
          let w = u(h(p, { parser: "markdown", __inJsTemplate: true }, { stripTrailingHardline: true }), true);
          return ["`", v ? t([s, w]) : [a, r(w)], s, "`"];
        }
        function l(c) {
          let y = c.match(/^([^\S\n]*)\S/m);
          return y === null ? "" : y[1];
        }
        n.exports = i;
      } }), bm = ee({ "src/language-js/embed/css.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t } = Ge(), { builders: { indent: s, hardline: a, softline: r }, utils: { mapDoc: u, replaceEndOfLine: i, cleanDoc: l } } = qe(), { printTemplateExpressions: c } = jt();
        function y(p, D, v) {
          let w = p.getValue(), T = w.quasis.map((P) => P.value.raw), F = 0, A = T.reduce((P, R, f) => f === 0 ? R : P + "@prettier-placeholder-" + F++ + "-id" + R, ""), B = v(A, { parser: "scss" }, { stripTrailingHardline: true }), I = c(p, D);
          return h(B, w, I);
        }
        function h(p, D, v) {
          if (D.quasis.length === 1 && !D.quasis[0].value.raw.trim())
            return "``";
          let T = g(p, v);
          if (!T)
            throw new Error("Couldn't insert all the expressions");
          return ["`", s([a, T]), r, "`"];
        }
        function g(p, D) {
          if (!t(D))
            return p;
          let v = 0, w = u(l(p), (T) => typeof T != "string" || !T.includes("@prettier-placeholder") ? T : T.split(/@prettier-placeholder-(\d+)-id/).map((F, A) => A % 2 === 0 ? i(F) : (v++, D[F])));
          return D.length === v ? w : null;
        }
        n.exports = y;
      } }), Tm = ee({ "src/language-js/embed/graphql.js"(e, n) {
        "use strict";
        re();
        var { builders: { indent: t, join: s, hardline: a } } = qe(), { escapeTemplateCharacters: r, printTemplateExpressions: u } = jt();
        function i(c, y, h) {
          let g = c.getValue(), p = g.quasis.length;
          if (p === 1 && g.quasis[0].value.raw.trim() === "")
            return "``";
          let D = u(c, y), v = [];
          for (let w = 0; w < p; w++) {
            let T = g.quasis[w], F = w === 0, A = w === p - 1, B = T.value.cooked, I = B.split(`
`), P = I.length, R = D[w], f = P > 2 && I[0].trim() === "" && I[1].trim() === "", x = P > 2 && I[P - 1].trim() === "" && I[P - 2].trim() === "", m = I.every((o) => /^\s*(?:#[^\n\r]*)?$/.test(o));
            if (!A && /#[^\n\r]*$/.test(I[P - 1]))
              return null;
            let E = null;
            m ? E = l(I) : E = h(B, { parser: "graphql" }, { stripTrailingHardline: true }), E ? (E = r(E, false), !F && f && v.push(""), v.push(E), !A && x && v.push("")) : !F && !A && f && v.push(""), R && v.push(R);
          }
          return ["`", t([a, s(a, v)]), a, "`"];
        }
        function l(c) {
          let y = [], h = false, g = c.map((p) => p.trim());
          for (let [p, D] of g.entries())
            D !== "" && (g[p - 1] === "" && h ? y.push([a, D]) : y.push(D), h = true);
          return y.length === 0 ? null : s(a, y);
        }
        n.exports = i;
      } }), Bm = ee({ "src/language-js/embed/html.js"(e, n) {
        "use strict";
        re();
        var { builders: { indent: t, line: s, hardline: a, group: r }, utils: { mapDoc: u } } = qe(), { printTemplateExpressions: i, uncookTemplateElementValue: l } = jt(), c = 0;
        function y(h, g, p, D, v) {
          let { parser: w } = v, T = h.getValue(), F = c;
          c = c + 1 >>> 0;
          let A = (d) => `PRETTIER_HTML_PLACEHOLDER_${d}_${F}_IN_JS`, B = T.quasis.map((d, C, _) => C === _.length - 1 ? d.value.cooked : d.value.cooked + A(C)).join(""), I = i(h, g);
          if (I.length === 0 && B.trim().length === 0)
            return "``";
          let P = new RegExp(A("(\\d+)"), "g"), R = 0, f = p(B, { parser: w, __onHtmlRoot(d) {
            R = d.children.length;
          } }, { stripTrailingHardline: true }), x = u(f, (d) => {
            if (typeof d != "string")
              return d;
            let C = [], _ = d.split(P);
            for (let b = 0; b < _.length; b++) {
              let N = _[b];
              if (b % 2 === 0) {
                N && (N = l(N), D.__embeddedInHtml && (N = N.replace(/<\/(script)\b/gi, "<\\/$1")), C.push(N));
                continue;
              }
              let k = Number(N);
              C.push(I[k]);
            }
            return C;
          }), m = /^\s/.test(B) ? " " : "", E = /\s$/.test(B) ? " " : "", o = D.htmlWhitespaceSensitivity === "ignore" ? a : m && E ? s : null;
          return r(o ? ["`", t([o, r(x)]), o, "`"] : ["`", m, R > 1 ? t(r(x)) : r(x), E, "`"]);
        }
        n.exports = y;
      } }), Nm = ee({ "src/language-js/embed.js"(e, n) {
        "use strict";
        re();
        var { hasComment: t, CommentCheckFlags: s, isObjectProperty: a } = Ke(), r = xm(), u = bm(), i = Tm(), l = Bm();
        function c(f) {
          if (g(f) || w(f) || T(f) || p(f))
            return "css";
          if (B(f))
            return "graphql";
          if (P(f))
            return "html";
          if (D(f))
            return "angular";
          if (h(f))
            return "markdown";
        }
        function y(f, x, m, E) {
          let o = f.getValue();
          if (o.type !== "TemplateLiteral" || R(o))
            return;
          let d = c(f);
          if (d) {
            if (d === "markdown")
              return r(f, x, m);
            if (d === "css")
              return u(f, x, m);
            if (d === "graphql")
              return i(f, x, m);
            if (d === "html" || d === "angular")
              return l(f, x, m, E, { parser: d });
          }
        }
        function h(f) {
          let x = f.getValue(), m = f.getParentNode();
          return m && m.type === "TaggedTemplateExpression" && x.quasis.length === 1 && m.tag.type === "Identifier" && (m.tag.name === "md" || m.tag.name === "markdown");
        }
        function g(f) {
          let x = f.getValue(), m = f.getParentNode(), E = f.getParentNode(1);
          return E && x.quasis && m.type === "JSXExpressionContainer" && E.type === "JSXElement" && E.openingElement.name.name === "style" && E.openingElement.attributes.some((o) => o.name.name === "jsx") || m && m.type === "TaggedTemplateExpression" && m.tag.type === "Identifier" && m.tag.name === "css" || m && m.type === "TaggedTemplateExpression" && m.tag.type === "MemberExpression" && m.tag.object.name === "css" && (m.tag.property.name === "global" || m.tag.property.name === "resolve");
        }
        function p(f) {
          return f.match((x) => x.type === "TemplateLiteral", (x, m) => x.type === "ArrayExpression" && m === "elements", (x, m) => a(x) && x.key.type === "Identifier" && x.key.name === "styles" && m === "value", ...v);
        }
        function D(f) {
          return f.match((x) => x.type === "TemplateLiteral", (x, m) => a(x) && x.key.type === "Identifier" && x.key.name === "template" && m === "value", ...v);
        }
        var v = [(f, x) => f.type === "ObjectExpression" && x === "properties", (f, x) => f.type === "CallExpression" && f.callee.type === "Identifier" && f.callee.name === "Component" && x === "arguments", (f, x) => f.type === "Decorator" && x === "expression"];
        function w(f) {
          let x = f.getParentNode();
          if (!x || x.type !== "TaggedTemplateExpression")
            return false;
          let m = x.tag.type === "ParenthesizedExpression" ? x.tag.expression : x.tag;
          switch (m.type) {
            case "MemberExpression":
              return F(m.object) || A(m);
            case "CallExpression":
              return F(m.callee) || m.callee.type === "MemberExpression" && (m.callee.object.type === "MemberExpression" && (F(m.callee.object.object) || A(m.callee.object)) || m.callee.object.type === "CallExpression" && F(m.callee.object.callee));
            case "Identifier":
              return m.name === "css";
            default:
              return false;
          }
        }
        function T(f) {
          let x = f.getParentNode(), m = f.getParentNode(1);
          return m && x.type === "JSXExpressionContainer" && m.type === "JSXAttribute" && m.name.type === "JSXIdentifier" && m.name.name === "css";
        }
        function F(f) {
          return f.type === "Identifier" && f.name === "styled";
        }
        function A(f) {
          return /^[A-Z]/.test(f.object.name) && f.property.name === "extend";
        }
        function B(f) {
          let x = f.getValue(), m = f.getParentNode();
          return I(x, "GraphQL") || m && (m.type === "TaggedTemplateExpression" && (m.tag.type === "MemberExpression" && m.tag.object.name === "graphql" && m.tag.property.name === "experimental" || m.tag.type === "Identifier" && (m.tag.name === "gql" || m.tag.name === "graphql")) || m.type === "CallExpression" && m.callee.type === "Identifier" && m.callee.name === "graphql");
        }
        function I(f, x) {
          return t(f, s.Block | s.Leading, (m) => {
            let { value: E } = m;
            return E === ` ${x} `;
          });
        }
        function P(f) {
          return I(f.getValue(), "HTML") || f.match((x) => x.type === "TemplateLiteral", (x, m) => x.type === "TaggedTemplateExpression" && x.tag.type === "Identifier" && x.tag.name === "html" && m === "quasi");
        }
        function R(f) {
          let { quasis: x } = f;
          return x.some((m) => {
            let { value: { cooked: E } } = m;
            return E === null;
          });
        }
        n.exports = y;
      } }), wm = ee({ "src/language-js/clean.js"(e, n) {
        "use strict";
        re();
        var t = Lt(), s = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), a = (u) => {
          for (let i of u.quasis)
            delete i.value;
        };
        function r(u, i, l) {
          if (u.type === "Program" && delete i.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && i.value && (i.value = i.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && i.bigint && (i.bigint = i.bigint.toLowerCase()), u.type === "DecimalLiteral" && (i.value = Number(i.value)), u.type === "Literal" && i.decimal && (i.decimal = Number(i.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ")
            return null;
          if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && typeof u.key == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete i.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some((h) => h.name.name === "jsx"))
            for (let { type: h, expression: g } of i.children)
              h === "JSXExpressionContainer" && g.type === "TemplateLiteral" && a(g);
          u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && a(i.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (i.value.value = i.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let c = u.expression || u.callee;
          if (u.type === "Decorator" && c.type === "CallExpression" && c.callee.name === "Component" && c.arguments.length === 1) {
            let h = u.expression.arguments[0].properties;
            for (let [g, p] of i.expression.arguments[0].properties.entries())
              switch (h[g].key.name) {
                case "styles":
                  p.value.type === "ArrayExpression" && a(p.value.elements[0]);
                  break;
                case "template":
                  p.value.type === "TemplateLiteral" && a(p.value);
                  break;
              }
          }
          if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && a(i.quasi), u.type === "TemplateLiteral") {
            var y;
            (((y = u.leadingComments) === null || y === void 0 ? void 0 : y.some((g) => t(g) && ["GraphQL", "HTML"].some((p) => g.value === ` ${p} `))) || l.type === "CallExpression" && l.callee.name === "graphql" || !u.leadingComments) && a(i);
          }
          if (u.type === "InterpreterDirective" && (i.value = i.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1)
            return i.types[0];
        }
        r.ignoredProperties = s, n.exports = r;
      } }), Ma = {};
      zt(Ma, { EOL: () => kn, arch: () => _m, cpus: () => Ua, default: () => Ya, endianness: () => Ra, freemem: () => Ha, getNetworkInterfaces: () => Ka, hostname: () => $a, loadavg: () => Va, networkInterfaces: () => Xa, platform: () => Pm, release: () => za, tmpDir: () => Pn, tmpdir: () => In, totalmem: () => Ga, type: () => Ja, uptime: () => Wa });
      function Ra() {
        if (typeof br > "u") {
          var e = new ArrayBuffer(2), n = new Uint8Array(e), t = new Uint16Array(e);
          if (n[0] = 1, n[1] = 2, t[0] === 258)
            br = "BE";
          else if (t[0] === 513)
            br = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return br;
      }
      function $a() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function Va() {
        return [];
      }
      function Wa() {
        return 0;
      }
      function Ha() {
        return Number.MAX_VALUE;
      }
      function Ga() {
        return Number.MAX_VALUE;
      }
      function Ua() {
        return [];
      }
      function Ja() {
        return "Browser";
      }
      function za() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function Xa() {
      }
      function Ka() {
      }
      function _m() {
        return "javascript";
      }
      function Pm() {
        return "browser";
      }
      function Pn() {
        return "/tmp";
      }
      var br, In, kn, Ya, Im = gt({ "node-modules-polyfills:os"() {
        re(), In = Pn, kn = `
`, Ya = { EOL: kn, tmpdir: In, tmpDir: Pn, networkInterfaces: Xa, getNetworkInterfaces: Ka, release: za, type: Ja, cpus: Ua, totalmem: Ga, freemem: Ha, uptime: Wa, loadavg: Va, hostname: $a, endianness: Ra };
      } }), km = ee({ "node-modules-polyfills-commonjs:os"(e, n) {
        re();
        var t = (Im(), ft(Ma));
        if (t && t.default) {
          n.exports = t.default;
          for (let s in t)
            n.exports[s] = t[s];
        } else
          t && (n.exports = t);
      } }), Lm = ee({ "node_modules/detect-newline/index.js"(e, n) {
        "use strict";
        re();
        var t = (s) => {
          if (typeof s != "string")
            throw new TypeError("Expected a string");
          let a = s.match(/(?:\r?\n)/g) || [];
          if (a.length === 0)
            return;
          let r = a.filter((i) => i === `\r
`).length, u = a.length - r;
          return r > u ? `\r
` : `
`;
        };
        n.exports = t, n.exports.graceful = (s) => typeof s == "string" && t(s) || `
`;
      } }), jm = ee({ "node_modules/jest-docblock/build/index.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.extract = p, e.parse = v, e.parseWithComments = w, e.print = T, e.strip = D;
        function n() {
          let A = km();
          return n = function() {
            return A;
          }, A;
        }
        function t() {
          let A = s(Lm());
          return t = function() {
            return A;
          }, A;
        }
        function s(A) {
          return A && A.__esModule ? A : { default: A };
        }
        var a = /\*\/$/, r = /^\/\*\*?/, u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, i = /(^|\s+)\/\/([^\r\n]*)/g, l = /^(\r?\n)+/, c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, y = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, h = /(\r?\n|^) *\* ?/g, g = [];
        function p(A) {
          let B = A.match(u);
          return B ? B[0].trimLeft() : "";
        }
        function D(A) {
          let B = A.match(u);
          return B && B[0] ? A.substring(B[0].length) : A;
        }
        function v(A) {
          return w(A).pragmas;
        }
        function w(A) {
          let B = (0, t().default)(A) || n().EOL;
          A = A.replace(r, "").replace(a, "").replace(h, "$1");
          let I = "";
          for (; I !== A; )
            I = A, A = A.replace(c, `${B}$1 $2${B}`);
          A = A.replace(l, "").trimRight();
          let P = /* @__PURE__ */ Object.create(null), R = A.replace(y, "").replace(l, "").trimRight(), f;
          for (; f = y.exec(A); ) {
            let x = f[2].replace(i, "");
            typeof P[f[1]] == "string" || Array.isArray(P[f[1]]) ? P[f[1]] = g.concat(P[f[1]], x) : P[f[1]] = x;
          }
          return { comments: R, pragmas: P };
        }
        function T(A) {
          let { comments: B = "", pragmas: I = {} } = A, P = (0, t().default)(B) || n().EOL, R = "/**", f = " *", x = " */", m = Object.keys(I), E = m.map((d) => F(d, I[d])).reduce((d, C) => d.concat(C), []).map((d) => `${f} ${d}${P}`).join("");
          if (!B) {
            if (m.length === 0)
              return "";
            if (m.length === 1 && !Array.isArray(I[m[0]])) {
              let d = I[m[0]];
              return `${R} ${F(m[0], d)[0]}${x}`;
            }
          }
          let o = B.split(P).map((d) => `${f} ${d}`).join(P) + P;
          return R + P + (B ? o : "") + (B && m.length ? f + P : "") + E + x;
        }
        function F(A, B) {
          return g.concat(B).map((I) => `@${A} ${I}`.trim());
        }
      } }), Om = ee({ "src/language-js/utils/get-shebang.js"(e, n) {
        "use strict";
        re();
        function t(s) {
          if (!s.startsWith("#!"))
            return "";
          let a = s.indexOf(`
`);
          return a === -1 ? s : s.slice(0, a);
        }
        n.exports = t;
      } }), Qa = ee({ "src/language-js/pragma.js"(e, n) {
        "use strict";
        re();
        var { parseWithComments: t, strip: s, extract: a, print: r } = jm(), { normalizeEndOfLine: u } = qn(), i = Om();
        function l(h) {
          let g = i(h);
          g && (h = h.slice(g.length + 1));
          let p = a(h), { pragmas: D, comments: v } = t(p);
          return { shebang: g, text: h, pragmas: D, comments: v };
        }
        function c(h) {
          let g = Object.keys(l(h).pragmas);
          return g.includes("prettier") || g.includes("format");
        }
        function y(h) {
          let { shebang: g, text: p, pragmas: D, comments: v } = l(h), w = s(p), T = r({ pragmas: Object.assign({ format: "" }, D), comments: v.trimStart() });
          return (g ? `${g}
` : "") + u(T) + (w.startsWith(`
`) ? `
` : `

`) + w;
        }
        n.exports = { hasPragma: c, insertPragma: y };
      } }), Za = ee({ "src/language-js/comments.js"(e, n) {
        "use strict";
        re();
        var { getLast: t, hasNewline: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: a, getNextNonSpaceNonCommentCharacter: r, hasNewlineInRange: u, addLeadingComment: i, addTrailingComment: l, addDanglingComment: c, getNextNonSpaceNonCommentCharacterIndex: y, isNonEmptyArray: h } = Ge(), { getFunctionParameters: g, isPrettierIgnoreComment: p, isJsxNode: D, hasFlowShorthandAnnotationComment: v, hasFlowAnnotationComment: w, hasIgnoreComment: T, isCallLikeExpression: F, getCallArguments: A, isCallExpression: B, isMemberExpression: I, isObjectProperty: P, isLineComment: R, getComments: f, CommentCheckFlags: x, markerForIfWithoutBlockAndSameLineComment: m } = Ke(), { locStart: E, locEnd: o } = it(), d = Lt();
        function C(ye) {
          return [ce, ae, L, M, q, J, K, ge, Z, fe, Ce, _e, Q, Ae, z].some((S) => S(ye));
        }
        function _(ye) {
          return [$, ae, Y, Ce, M, q, J, K, Ae, H, ne, fe, ie, z, de].some((S) => S(ye));
        }
        function b(ye) {
          return [ce, M, q, V, oe, Q, fe, X, W, U, z, ve].some((S) => S(ye));
        }
        function N(ye, S) {
          let G = (ye.body || ye.properties).find((te) => {
            let { type: Ee } = te;
            return Ee !== "EmptyStatement";
          });
          G ? i(G, S) : c(ye, S);
        }
        function k(ye, S) {
          ye.type === "BlockStatement" ? N(ye, S) : i(ye, S);
        }
        function $(ye) {
          let { comment: S, followingNode: G } = ye;
          return G && Be(S) ? (i(G, S), true) : false;
        }
        function M(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee, text: Re } = ye;
          if ((te == null ? void 0 : te.type) !== "IfStatement" || !Ee)
            return false;
          if (r(Re, S, o) === ")")
            return l(G, S), true;
          if (G === te.consequent && Ee === te.alternate) {
            if (G.type === "BlockStatement")
              l(G, S);
            else {
              let Pe = S.type === "SingleLine" || S.loc.start.line === S.loc.end.line, Fe = S.loc.start.line === G.loc.start.line;
              Pe && Fe ? c(G, S, m) : c(te, S);
            }
            return true;
          }
          return Ee.type === "BlockStatement" ? (N(Ee, S), true) : Ee.type === "IfStatement" ? (k(Ee.consequent, S), true) : te.consequent === Ee ? (i(Ee, S), true) : false;
        }
        function q(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee, text: Re } = ye;
          return (te == null ? void 0 : te.type) !== "WhileStatement" || !Ee ? false : r(Re, S, o) === ")" ? (l(G, S), true) : Ee.type === "BlockStatement" ? (N(Ee, S), true) : te.body === Ee ? (i(Ee, S), true) : false;
        }
        function J(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee } = ye;
          return (te == null ? void 0 : te.type) !== "TryStatement" && (te == null ? void 0 : te.type) !== "CatchClause" || !Ee ? false : te.type === "CatchClause" && G ? (l(G, S), true) : Ee.type === "BlockStatement" ? (N(Ee, S), true) : Ee.type === "TryStatement" ? (k(Ee.finalizer, S), true) : Ee.type === "CatchClause" ? (k(Ee.body, S), true) : false;
        }
        function L(ye) {
          let { comment: S, enclosingNode: G, followingNode: te } = ye;
          return I(G) && (te == null ? void 0 : te.type) === "Identifier" ? (i(G, S), true) : false;
        }
        function Y(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee, text: Re } = ye, Te = G && !u(Re, o(G), E(S));
          return (!G || !Te) && ((te == null ? void 0 : te.type) === "ConditionalExpression" || (te == null ? void 0 : te.type) === "TSConditionalType") && Ee ? (i(Ee, S), true) : false;
        }
        function V(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te } = ye;
          return P(te) && te.shorthand && te.key === G && te.value.type === "AssignmentPattern" ? (l(te.value.left, S), true) : false;
        }
        var O = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function K(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee } = ye;
          if (O.has(te == null ? void 0 : te.type)) {
            if (h(te.decorators) && !(Ee && Ee.type === "Decorator"))
              return l(t(te.decorators), S), true;
            if (te.body && Ee === te.body)
              return N(te.body, S), true;
            if (Ee) {
              if (te.superClass && Ee === te.superClass && G && (G === te.id || G === te.typeParameters))
                return l(G, S), true;
              for (let Re of ["implements", "extends", "mixins"])
                if (te[Re] && Ee === te[Re][0])
                  return G && (G === te.id || G === te.typeParameters || G === te.superClass) ? l(G, S) : c(te, S, Re), true;
            }
          }
          return false;
        }
        var se = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition"]);
        function Q(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, text: Ee } = ye;
          return te && G && r(Ee, S, o) === "(" && (te.type === "Property" || te.type === "TSDeclareMethod" || te.type === "TSAbstractMethodDefinition") && G.type === "Identifier" && te.key === G && r(Ee, G, o) !== ":" || (G == null ? void 0 : G.type) === "Decorator" && se.has(te == null ? void 0 : te.type) ? (l(G, S), true) : false;
        }
        var le = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function W(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, text: Ee } = ye;
          return r(Ee, S, o) !== "(" ? false : G && le.has(te == null ? void 0 : te.type) ? (l(G, S), true) : false;
        }
        function X(ye) {
          let { comment: S, enclosingNode: G, text: te } = ye;
          if ((G == null ? void 0 : G.type) !== "ArrowFunctionExpression")
            return false;
          let Ee = y(te, S, o);
          return Ee !== false && te.slice(Ee, Ee + 2) === "=>" ? (c(G, S), true) : false;
        }
        function oe(ye) {
          let { comment: S, enclosingNode: G, text: te } = ye;
          return r(te, S, o) !== ")" ? false : G && (De(G) && g(G).length === 0 || F(G) && A(G).length === 0) ? (c(G, S), true) : ((G == null ? void 0 : G.type) === "MethodDefinition" || (G == null ? void 0 : G.type) === "TSAbstractMethodDefinition") && g(G.value).length === 0 ? (c(G.value, S), true) : false;
        }
        function ae(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee, text: Re } = ye;
          if ((G == null ? void 0 : G.type) === "FunctionTypeParam" && (te == null ? void 0 : te.type) === "FunctionTypeAnnotation" && (Ee == null ? void 0 : Ee.type) !== "FunctionTypeParam" || ((G == null ? void 0 : G.type) === "Identifier" || (G == null ? void 0 : G.type) === "AssignmentPattern") && te && De(te) && r(Re, S, o) === ")")
            return l(G, S), true;
          if ((te == null ? void 0 : te.type) === "FunctionDeclaration" && (Ee == null ? void 0 : Ee.type) === "BlockStatement") {
            let Te = (() => {
              let Pe = g(te);
              if (Pe.length > 0)
                return a(Re, o(t(Pe)));
              let Fe = a(Re, o(te.id));
              return Fe !== false && a(Re, Fe + 1);
            })();
            if (E(S) > Te)
              return N(Ee, S), true;
          }
          return false;
        }
        function Ae(ye) {
          let { comment: S, enclosingNode: G } = ye;
          return (G == null ? void 0 : G.type) === "LabeledStatement" ? (i(G, S), true) : false;
        }
        function z(ye) {
          let { comment: S, enclosingNode: G } = ye;
          return ((G == null ? void 0 : G.type) === "ContinueStatement" || (G == null ? void 0 : G.type) === "BreakStatement") && !G.label ? (l(G, S), true) : false;
        }
        function H(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te } = ye;
          return B(te) && G && te.callee === G && te.arguments.length > 0 ? (i(te.arguments[0], S), true) : false;
        }
        function Z(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee } = ye;
          return (te == null ? void 0 : te.type) === "UnionTypeAnnotation" || (te == null ? void 0 : te.type) === "TSUnionType" ? (p(S) && (Ee.prettierIgnore = true, S.unignore = true), G ? (l(G, S), true) : false) : (((Ee == null ? void 0 : Ee.type) === "UnionTypeAnnotation" || (Ee == null ? void 0 : Ee.type) === "TSUnionType") && p(S) && (Ee.types[0].prettierIgnore = true, S.unignore = true), false);
        }
        function ne(ye) {
          let { comment: S, enclosingNode: G } = ye;
          return P(G) ? (i(G, S), true) : false;
        }
        function fe(ye) {
          let { comment: S, enclosingNode: G, followingNode: te, ast: Ee, isLastComment: Re } = ye;
          return Ee && Ee.body && Ee.body.length === 0 ? (Re ? c(Ee, S) : i(Ee, S), true) : (G == null ? void 0 : G.type) === "Program" && (G == null ? void 0 : G.body.length) === 0 && !h(G.directives) ? (Re ? c(G, S) : i(G, S), true) : (te == null ? void 0 : te.type) === "Program" && (te == null ? void 0 : te.body.length) === 0 && (G == null ? void 0 : G.type) === "ModuleExpression" ? (c(te, S), true) : false;
        }
        function ge(ye) {
          let { comment: S, enclosingNode: G } = ye;
          return (G == null ? void 0 : G.type) === "ForInStatement" || (G == null ? void 0 : G.type) === "ForOfStatement" ? (i(G, S), true) : false;
        }
        function Ce(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, text: Ee } = ye;
          if ((te == null ? void 0 : te.type) === "ImportSpecifier" || (te == null ? void 0 : te.type) === "ExportSpecifier")
            return i(te, S), true;
          let Re = (G == null ? void 0 : G.type) === "ImportSpecifier" && (te == null ? void 0 : te.type) === "ImportDeclaration", Te = (G == null ? void 0 : G.type) === "ExportSpecifier" && (te == null ? void 0 : te.type) === "ExportNamedDeclaration";
          return (Re || Te) && s(Ee, o(S)) ? (l(G, S), true) : false;
        }
        function _e(ye) {
          let { comment: S, enclosingNode: G } = ye;
          return (G == null ? void 0 : G.type) === "AssignmentPattern" ? (i(G, S), true) : false;
        }
        var Oe = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), pe = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function ie(ye) {
          let { comment: S, enclosingNode: G, followingNode: te } = ye;
          return Oe.has(G == null ? void 0 : G.type) && te && (pe.has(te.type) || d(S)) ? (i(te, S), true) : false;
        }
        function ve(ye) {
          let { comment: S, enclosingNode: G, followingNode: te, text: Ee } = ye;
          return !te && ((G == null ? void 0 : G.type) === "TSMethodSignature" || (G == null ? void 0 : G.type) === "TSDeclareFunction" || (G == null ? void 0 : G.type) === "TSAbstractMethodDefinition") && r(Ee, S, o) === ";" ? (l(G, S), true) : false;
        }
        function ce(ye) {
          let { comment: S, enclosingNode: G, followingNode: te } = ye;
          if (p(S) && (G == null ? void 0 : G.type) === "TSMappedType" && (te == null ? void 0 : te.type) === "TSTypeParameter" && te.constraint)
            return G.prettierIgnore = true, S.unignore = true, true;
        }
        function U(ye) {
          let { comment: S, precedingNode: G, enclosingNode: te, followingNode: Ee } = ye;
          return (te == null ? void 0 : te.type) !== "TSMappedType" ? false : (Ee == null ? void 0 : Ee.type) === "TSTypeParameter" && Ee.name ? (i(Ee.name, S), true) : (G == null ? void 0 : G.type) === "TSTypeParameter" && G.constraint ? (l(G.constraint, S), true) : false;
        }
        function de(ye) {
          let { comment: S, enclosingNode: G, followingNode: te } = ye;
          return !G || G.type !== "SwitchCase" || G.test ? false : (te.type === "BlockStatement" && R(S) ? N(te, S) : c(G, S), true);
        }
        function De(ye) {
          return ye.type === "ArrowFunctionExpression" || ye.type === "FunctionExpression" || ye.type === "FunctionDeclaration" || ye.type === "ObjectMethod" || ye.type === "ClassMethod" || ye.type === "TSDeclareFunction" || ye.type === "TSCallSignatureDeclaration" || ye.type === "TSConstructSignatureDeclaration" || ye.type === "TSMethodSignature" || ye.type === "TSConstructorType" || ye.type === "TSFunctionType" || ye.type === "TSDeclareMethod";
        }
        function he(ye, S) {
          if ((S.parser === "typescript" || S.parser === "flow" || S.parser === "acorn" || S.parser === "espree" || S.parser === "meriyah" || S.parser === "__babel_estree") && ye.type === "MethodDefinition" && ye.value && ye.value.type === "FunctionExpression" && g(ye.value).length === 0 && !ye.value.returnType && !h(ye.value.typeParameters) && ye.value.body)
            return [...ye.decorators || [], ye.key, ye.value.body];
        }
        function Be(ye) {
          return d(ye) && ye.value[0] === "*" && /@type\b/.test(ye.value);
        }
        function Se(ye) {
          let S = ye.getValue(), G = ye.getParentNode(), te = (Ee) => w(f(Ee, x.Leading)) || w(f(Ee, x.Trailing));
          return (S && (D(S) || v(S) || B(G) && te(S)) || G && (G.type === "JSXSpreadAttribute" || G.type === "JSXSpreadChild" || G.type === "UnionTypeAnnotation" || G.type === "TSUnionType" || (G.type === "ClassDeclaration" || G.type === "ClassExpression") && G.superClass === S)) && (!T(ye) || G.type === "UnionTypeAnnotation" || G.type === "TSUnionType");
        }
        n.exports = { handleOwnLineComment: C, handleEndOfLineComment: _, handleRemainingComment: b, isTypeCastComment: Be, getCommentChildNodes: he, willPrintOwnComments: Se };
      } }), Ot = ee({ "src/language-js/needs-parens.js"(e, n) {
        "use strict";
        re();
        var t = lt(), s = $n(), { getFunctionParameters: a, getLeftSidePathName: r, hasFlowShorthandAnnotationComment: u, hasNakedLeftSide: i, hasNode: l, isBitwiseOperator: c, startsWithNoLookaheadToken: y, shouldFlatten: h, getPrecedence: g, isCallExpression: p, isMemberExpression: D, isObjectProperty: v, isTSTypeExpression: w } = Ke();
        function T(f, x) {
          let m = f.getParentNode();
          if (!m)
            return false;
          let E = f.getName(), o = f.getNode();
          if (x.__isInHtmlInterpolation && !x.bracketSpacing && I(o) && P(f))
            return true;
          if (F(o))
            return false;
          if (x.parser !== "flow" && u(f.getValue()))
            return true;
          if (o.type === "Identifier")
            return !!(o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name) || E === "left" && o.name === "async" && m.type === "ForOfStatement" && !m.await);
          switch (m.type) {
            case "ParenthesizedExpression":
              return false;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (E === "superClass" && (o.type === "ArrowFunctionExpression" || o.type === "AssignmentExpression" || o.type === "AwaitExpression" || o.type === "BinaryExpression" || o.type === "ConditionalExpression" || o.type === "LogicalExpression" || o.type === "NewExpression" || o.type === "ObjectExpression" || o.type === "SequenceExpression" || o.type === "TaggedTemplateExpression" || o.type === "UnaryExpression" || o.type === "UpdateExpression" || o.type === "YieldExpression" || o.type === "TSNonNullExpression"))
                return true;
              break;
            }
            case "ExportDefaultDeclaration":
              return R(f, x) || o.type === "SequenceExpression";
            case "Decorator": {
              if (E === "expression") {
                let d = false, C = false, _ = o;
                for (; _; )
                  switch (_.type) {
                    case "MemberExpression":
                      C = true, _ = _.object;
                      break;
                    case "CallExpression":
                      if (C || d)
                        return x.parser !== "typescript";
                      d = true, _ = _.callee;
                      break;
                    case "Identifier":
                      return false;
                    case "TaggedTemplateExpression":
                      return x.parser !== "typescript";
                    default:
                      return true;
                  }
                return true;
              }
              break;
            }
            case "ExpressionStatement": {
              if (y(o, true))
                return true;
              break;
            }
            case "ArrowFunctionExpression": {
              if (E === "body" && o.type !== "SequenceExpression" && y(o, false))
                return true;
              break;
            }
          }
          switch (o.type) {
            case "UpdateExpression":
              if (m.type === "UnaryExpression")
                return o.prefix && (o.operator === "++" && m.operator === "+" || o.operator === "--" && m.operator === "-");
            case "UnaryExpression":
              switch (m.type) {
                case "UnaryExpression":
                  return o.operator === m.operator && (o.operator === "+" || o.operator === "-");
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return E === "object";
                case "TaggedTemplateExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return E === "callee";
                case "BinaryExpression":
                  return E === "left" && m.operator === "**";
                case "TSNonNullExpression":
                  return true;
                default:
                  return false;
              }
            case "BinaryExpression": {
              if (m.type === "UpdateExpression" || o.operator === "in" && A(f))
                return true;
              if (o.operator === "|>" && o.extra && o.extra.parenthesized) {
                let d = f.getParentNode(1);
                if (d.type === "BinaryExpression" && d.operator === "|>")
                  return true;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression":
              switch (m.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression":
                  return !w(o);
                case "ConditionalExpression":
                  return w(o);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return E === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return E === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return E === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return E === "left" && (o.type === "TSTypeAssertion" || w(o));
                case "LogicalExpression":
                  if (o.type === "LogicalExpression")
                    return m.operator !== o.operator;
                case "BinaryExpression": {
                  let { operator: d, type: C } = o;
                  if (!d && C !== "TSTypeAssertion")
                    return true;
                  let _ = g(d), b = m.operator, N = g(b);
                  return N > _ || E === "right" && N === _ || N === _ && !h(b, d) ? true : N < _ && d === "%" ? b === "+" || b === "-" : !!c(b);
                }
                default:
                  return false;
              }
            case "SequenceExpression":
              switch (m.type) {
                case "ReturnStatement":
                  return false;
                case "ForStatement":
                  return false;
                case "ExpressionStatement":
                  return E !== "expression";
                case "ArrowFunctionExpression":
                  return E !== "body";
                default:
                  return true;
              }
            case "YieldExpression":
              if (m.type === "UnaryExpression" || m.type === "AwaitExpression" || w(m) || m.type === "TSNonNullExpression")
                return true;
            case "AwaitExpression":
              switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return E === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return E === "callee";
                case "ConditionalExpression":
                  return E === "test";
                case "BinaryExpression":
                  return !(!o.argument && m.operator === "|>");
                default:
                  return false;
              }
            case "TSConditionalType":
              if (E === "extendsType" && m.type === "TSConditionalType")
                return true;
            case "TSFunctionType":
            case "TSConstructorType":
              if (E === "extendsType" && m.type === "TSConditionalType") {
                let d = (o.returnType || o.typeAnnotation).typeAnnotation;
                if (d.type === "TSInferType" && d.typeParameter.constraint)
                  return true;
              }
              if (E === "checkType" && m.type === "TSConditionalType")
                return true;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((m.type === "TSUnionType" || m.type === "TSIntersectionType") && m.types.length > 1 && (!o.types || o.types.length > 1))
                return true;
            case "TSInferType":
              if (o.type === "TSInferType" && m.type === "TSRestType")
                return false;
            case "TSTypeOperator":
              return m.type === "TSArrayType" || m.type === "TSOptionalType" || m.type === "TSRestType" || E === "objectType" && m.type === "TSIndexedAccessType" || m.type === "TSTypeOperator" || m.type === "TSTypeAnnotation" && f.getParentNode(1).type.startsWith("TSJSDoc");
            case "ArrayTypeAnnotation":
              return m.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return m.type === "ArrayTypeAnnotation" || m.type === "NullableTypeAnnotation" || m.type === "IntersectionTypeAnnotation" || m.type === "UnionTypeAnnotation" || E === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return m.type === "ArrayTypeAnnotation" || E === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let d = m.type === "NullableTypeAnnotation" ? f.getParentNode(1) : m;
              return d.type === "UnionTypeAnnotation" || d.type === "IntersectionTypeAnnotation" || d.type === "ArrayTypeAnnotation" || E === "objectType" && (d.type === "IndexedAccessType" || d.type === "OptionalIndexedAccessType") || d.type === "NullableTypeAnnotation" || m.type === "FunctionTypeParam" && m.name === null && a(o).some((C) => C.typeAnnotation && C.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return E === "objectType" && m.type === "IndexedAccessType";
            case "TypeofTypeAnnotation":
              return E === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof o.value == "string" && m.type === "ExpressionStatement" && !m.directive) {
                let d = f.getParentNode(1);
                return d.type === "Program" || d.type === "BlockStatement";
              }
              return E === "object" && m.type === "MemberExpression" && typeof o.value == "number";
            case "AssignmentExpression": {
              let d = f.getParentNode(1);
              return E === "body" && m.type === "ArrowFunctionExpression" ? true : E === "key" && (m.type === "ClassProperty" || m.type === "PropertyDefinition") && m.computed || (E === "init" || E === "update") && m.type === "ForStatement" ? false : m.type === "ExpressionStatement" ? o.left.type === "ObjectPattern" : !(E === "key" && m.type === "TSPropertySignature" || m.type === "AssignmentExpression" || m.type === "SequenceExpression" && d && d.type === "ForStatement" && (d.init === m || d.update === m) || E === "value" && m.type === "Property" && d && d.type === "ObjectPattern" && d.properties.includes(m) || m.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return E === "callee";
                case "ConditionalExpression":
                  return E === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return E === "object";
                default:
                  return false;
              }
            case "FunctionExpression":
              switch (m.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return E === "callee";
                case "TaggedTemplateExpression":
                  return true;
                default:
                  return false;
              }
            case "ArrowFunctionExpression":
              switch (m.type) {
                case "BinaryExpression":
                  return m.operator !== "|>" || o.extra && o.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return E === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return E === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return true;
                case "ConditionalExpression":
                  return E === "test";
                default:
                  return false;
              }
            case "ClassExpression":
              if (s(o.decorators))
                return true;
              switch (m.type) {
                case "NewExpression":
                  return E === "callee";
                default:
                  return false;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let d = f.getParentNode(1);
              if (E === "object" && m.type === "MemberExpression" || E === "callee" && (m.type === "CallExpression" || m.type === "NewExpression") || m.type === "TSNonNullExpression" && d.type === "MemberExpression" && d.object === m)
                return true;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (E === "callee" && (m.type === "BindExpression" || m.type === "NewExpression")) {
                let d = o;
                for (; d; )
                  switch (d.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return true;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      d = d.object;
                      break;
                    case "TaggedTemplateExpression":
                      d = d.tag;
                      break;
                    case "TSNonNullExpression":
                      d = d.expression;
                      break;
                    default:
                      return false;
                  }
              }
              return false;
            case "BindExpression":
              return E === "callee" && (m.type === "BindExpression" || m.type === "NewExpression") || E === "object" && D(m);
            case "NGPipeExpression":
              return !(m.type === "NGRoot" || m.type === "NGMicrosyntaxExpression" || m.type === "ObjectProperty" && !(o.extra && o.extra.parenthesized) || m.type === "ArrayExpression" || p(m) && m.arguments[E] === o || E === "right" && m.type === "NGPipeExpression" || E === "property" && m.type === "MemberExpression" || m.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return E === "callee" || E === "left" && m.type === "BinaryExpression" && m.operator === "<" || m.type !== "ArrayExpression" && m.type !== "ArrowFunctionExpression" && m.type !== "AssignmentExpression" && m.type !== "AssignmentPattern" && m.type !== "BinaryExpression" && m.type !== "NewExpression" && m.type !== "ConditionalExpression" && m.type !== "ExpressionStatement" && m.type !== "JsExpressionRoot" && m.type !== "JSXAttribute" && m.type !== "JSXElement" && m.type !== "JSXExpressionContainer" && m.type !== "JSXFragment" && m.type !== "LogicalExpression" && !p(m) && !v(m) && m.type !== "ReturnStatement" && m.type !== "ThrowStatement" && m.type !== "TypeCastExpression" && m.type !== "VariableDeclarator" && m.type !== "YieldExpression";
            case "TypeAnnotation":
              return E === "returnType" && m.type === "ArrowFunctionExpression" && B(o);
          }
          return false;
        }
        function F(f) {
          return f.type === "BlockStatement" || f.type === "BreakStatement" || f.type === "ClassBody" || f.type === "ClassDeclaration" || f.type === "ClassMethod" || f.type === "ClassProperty" || f.type === "PropertyDefinition" || f.type === "ClassPrivateProperty" || f.type === "ContinueStatement" || f.type === "DebuggerStatement" || f.type === "DeclareClass" || f.type === "DeclareExportAllDeclaration" || f.type === "DeclareExportDeclaration" || f.type === "DeclareFunction" || f.type === "DeclareInterface" || f.type === "DeclareModule" || f.type === "DeclareModuleExports" || f.type === "DeclareVariable" || f.type === "DoWhileStatement" || f.type === "EnumDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportDefaultDeclaration" || f.type === "ExportNamedDeclaration" || f.type === "ExpressionStatement" || f.type === "ForInStatement" || f.type === "ForOfStatement" || f.type === "ForStatement" || f.type === "FunctionDeclaration" || f.type === "IfStatement" || f.type === "ImportDeclaration" || f.type === "InterfaceDeclaration" || f.type === "LabeledStatement" || f.type === "MethodDefinition" || f.type === "ReturnStatement" || f.type === "SwitchStatement" || f.type === "ThrowStatement" || f.type === "TryStatement" || f.type === "TSDeclareFunction" || f.type === "TSEnumDeclaration" || f.type === "TSImportEqualsDeclaration" || f.type === "TSInterfaceDeclaration" || f.type === "TSModuleDeclaration" || f.type === "TSNamespaceExportDeclaration" || f.type === "TypeAlias" || f.type === "VariableDeclaration" || f.type === "WhileStatement" || f.type === "WithStatement";
        }
        function A(f) {
          let x = 0, m = f.getValue();
          for (; m; ) {
            let E = f.getParentNode(x++);
            if (E && E.type === "ForStatement" && E.init === m)
              return true;
            m = E;
          }
          return false;
        }
        function B(f) {
          return l(f, (x) => x.type === "ObjectTypeAnnotation" && l(x, (m) => m.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function I(f) {
          switch (f.type) {
            case "ObjectExpression":
              return true;
            default:
              return false;
          }
        }
        function P(f) {
          let x = f.getValue(), m = f.getParentNode(), E = f.getName();
          switch (m.type) {
            case "NGPipeExpression":
              if (typeof E == "number" && m.arguments[E] === x && m.arguments.length - 1 === E)
                return f.callParent(P);
              break;
            case "ObjectProperty":
              if (E === "value") {
                let o = f.getParentNode(1);
                return t(o.properties) === m;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (E === "right")
                return f.callParent(P);
              break;
            case "ConditionalExpression":
              if (E === "alternate")
                return f.callParent(P);
              break;
            case "UnaryExpression":
              if (m.prefix)
                return f.callParent(P);
              break;
          }
          return false;
        }
        function R(f, x) {
          let m = f.getValue(), E = f.getParentNode();
          return m.type === "FunctionExpression" || m.type === "ClassExpression" ? E.type === "ExportDefaultDeclaration" || !T(f, x) : !i(m) || E.type !== "ExportDefaultDeclaration" && T(f, x) ? false : f.call((o) => R(o, x), ...r(f, m));
        }
        n.exports = T;
      } }), eo = ee({ "src/language-js/print-preprocess.js"(e, n) {
        "use strict";
        re();
        function t(s, a) {
          switch (a.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, s), {}, { type: a.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: s, comments: [], rootMarker: a.rootMarker });
            default:
              return s;
          }
        }
        n.exports = t;
      } }), qm = ee({ "src/language-js/print/html-binding.js"(e, n) {
        "use strict";
        re();
        var { builders: { join: t, line: s, group: a, softline: r, indent: u } } = qe();
        function i(c, y, h) {
          let g = c.getValue();
          if (y.__onHtmlBindingRoot && c.getName() === null && y.__onHtmlBindingRoot(g, y), g.type === "File") {
            if (y.__isVueForBindingLeft)
              return c.call((p) => {
                let D = t([",", s], p.map(h, "params")), { params: v } = p.getValue();
                return v.length === 1 ? D : ["(", u([r, a(D)]), r, ")"];
              }, "program", "body", 0);
            if (y.__isVueBindings)
              return c.call((p) => t([",", s], p.map(h, "params")), "program", "body", 0);
          }
        }
        function l(c) {
          switch (c.type) {
            case "MemberExpression":
              switch (c.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return l(c.object);
              }
              return false;
            case "Identifier":
              return true;
            default:
              return false;
          }
        }
        n.exports = { isVueEventBindingExpression: l, printHtmlBinding: i };
      } }), Jn = ee({ "src/language-js/print/binaryish.js"(e, n) {
        "use strict";
        re();
        var { printComments: t } = et(), { getLast: s } = Ge(), { builders: { join: a, line: r, softline: u, group: i, indent: l, align: c, indentIfBreak: y }, utils: { cleanDoc: h, getDocParts: g, isConcat: p } } = qe(), { hasLeadingOwnLineComment: D, isBinaryish: v, isJsxNode: w, shouldFlatten: T, hasComment: F, CommentCheckFlags: A, isCallExpression: B, isMemberExpression: I, isObjectProperty: P, isEnabledHackPipeline: R } = Ke(), f = 0;
        function x(o, d, C) {
          let _ = o.getValue(), b = o.getParentNode(), N = o.getParentNode(1), k = _ !== b.body && (b.type === "IfStatement" || b.type === "WhileStatement" || b.type === "SwitchStatement" || b.type === "DoWhileStatement"), $ = R(d) && _.operator === "|>", M = m(o, C, d, false, k);
          if (k)
            return M;
          if ($)
            return i(M);
          if (B(b) && b.callee === _ || b.type === "UnaryExpression" || I(b) && !b.computed)
            return i([l([u, ...M]), u]);
          let q = b.type === "ReturnStatement" || b.type === "ThrowStatement" || b.type === "JSXExpressionContainer" && N.type === "JSXAttribute" || _.operator !== "|" && b.type === "JsExpressionRoot" || _.type !== "NGPipeExpression" && (b.type === "NGRoot" && d.parser === "__ng_binding" || b.type === "NGMicrosyntaxExpression" && N.type === "NGMicrosyntax" && N.body.length === 1) || _ === b.body && b.type === "ArrowFunctionExpression" || _ !== b.body && b.type === "ForStatement" || b.type === "ConditionalExpression" && N.type !== "ReturnStatement" && N.type !== "ThrowStatement" && !B(N) || b.type === "TemplateLiteral", J = b.type === "AssignmentExpression" || b.type === "VariableDeclarator" || b.type === "ClassProperty" || b.type === "PropertyDefinition" || b.type === "TSAbstractPropertyDefinition" || b.type === "ClassPrivateProperty" || P(b), L = v(_.left) && T(_.operator, _.left.operator);
          if (q || E(_) && !L || !E(_) && J)
            return i(M);
          if (M.length === 0)
            return "";
          let Y = w(_.right), V = M.findIndex((W) => typeof W != "string" && !Array.isArray(W) && W.type === "group"), O = M.slice(0, V === -1 ? 1 : V + 1), K = M.slice(O.length, Y ? -1 : void 0), se = Symbol("logicalChain-" + ++f), Q = i([...O, l(K)], { id: se });
          if (!Y)
            return Q;
          let le = s(M);
          return i([Q, y(le, { groupId: se })]);
        }
        function m(o, d, C, _, b) {
          let N = o.getValue();
          if (!v(N))
            return [i(d())];
          let k = [];
          T(N.operator, N.left.operator) ? k = o.call((K) => m(K, d, C, true, b), "left") : k.push(i(d("left")));
          let $ = E(N), M = (N.operator === "|>" || N.type === "NGPipeExpression" || N.operator === "|" && C.parser === "__vue_expression") && !D(C.originalText, N.right), q = N.type === "NGPipeExpression" ? "|" : N.operator, J = N.type === "NGPipeExpression" && N.arguments.length > 0 ? i(l([r, ": ", a([r, ": "], o.map(d, "arguments").map((K) => c(2, i(K))))])) : "", L;
          if ($)
            L = [q, " ", d("right"), J];
          else {
            let se = R(C) && q === "|>" ? o.call((Q) => m(Q, d, C, true, b), "right") : d("right");
            L = [M ? r : "", q, M ? " " : r, se, J];
          }
          let Y = o.getParentNode(), V = F(N.left, A.Trailing | A.Line), O = V || !(b && N.type === "LogicalExpression") && Y.type !== N.type && N.left.type !== N.type && N.right.type !== N.type;
          if (k.push(M ? "" : " ", O ? i(L, { shouldBreak: V }) : L), _ && F(N)) {
            let K = h(t(o, k, C));
            return p(K) || K.type === "fill" ? g(K) : [K];
          }
          return k;
        }
        function E(o) {
          return o.type !== "LogicalExpression" ? false : !!(o.right.type === "ObjectExpression" && o.right.properties.length > 0 || o.right.type === "ArrayExpression" && o.right.elements.length > 0 || w(o.right));
        }
        n.exports = { printBinaryishExpression: x, shouldInlineLogicalExpression: E };
      } }), Mm = ee({ "src/language-js/print/angular.js"(e, n) {
        "use strict";
        re();
        var { builders: { join: t, line: s, group: a } } = qe(), { hasNode: r, hasComment: u, getComments: i } = Ke(), { printBinaryishExpression: l } = Jn();
        function c(g, p, D) {
          let v = g.getValue();
          if (v.type.startsWith("NG"))
            switch (v.type) {
              case "NGRoot":
                return [D("node"), u(v.node) ? " //" + i(v.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return l(g, p, D);
              case "NGChainedExpression":
                return a(t([";", s], g.map((w) => h(w) ? D() : ["(", D(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [v.prefix, ": ", v.value.trim()];
              case "NGMicrosyntax":
                return g.map((w, T) => [T === 0 ? "" : y(w.getValue(), T, v) ? " " : [";", s], D()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(v.name) ? v.name : JSON.stringify(v.name);
              case "NGMicrosyntaxExpression":
                return [D("expression"), v.alias === null ? "" : [" as ", D("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let w = g.getName(), T = g.getParentNode(), F = y(v, w, T) || (w === 1 && (v.key.name === "then" || v.key.name === "else") || w === 2 && v.key.name === "else" && T.body[w - 1].type === "NGMicrosyntaxKeyedExpression" && T.body[w - 1].key.name === "then") && T.body[0].type === "NGMicrosyntaxExpression";
                return [D("key"), F ? " " : ": ", D("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", D("key"), v.value === null ? "" : [" = ", D("value")]];
              case "NGMicrosyntaxAs":
                return [D("key"), " as ", D("alias")];
              default:
                throw new Error(`Unknown Angular node type: ${JSON.stringify(v.type)}.`);
            }
        }
        function y(g, p, D) {
          return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && p === 1 && D.body[0].type === "NGMicrosyntaxLet" && D.body[0].value === null;
        }
        function h(g) {
          return r(g.getValue(), (p) => {
            switch (p.type) {
              case void 0:
                return false;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return true;
            }
          });
        }
        n.exports = { printAngular: c };
      } }), Rm = ee({ "src/language-js/print/jsx.js"(e, n) {
        "use strict";
        re();
        var { printComments: t, printDanglingComments: s } = et(), { builders: { line: a, hardline: r, softline: u, group: i, indent: l, conditionalGroup: c, fill: y, ifBreak: h, lineSuffixBoundary: g, join: p }, utils: { willBreak: D } } = qe(), { getLast: v, getPreferredQuote: w } = Ge(), { isJsxNode: T, rawText: F, isLiteral: A, isCallExpression: B, isStringLiteral: I, isBinaryish: P, hasComment: R, CommentCheckFlags: f, hasNodeIgnoreComment: x } = Ke(), m = Ot(), { willPrintOwnComments: E } = Za(), o = (H) => H === "" || H === a || H === r || H === u;
        function d(H, Z, ne) {
          let fe = H.getValue();
          if (fe.type === "JSXElement" && oe(fe))
            return [ne("openingElement"), ne("closingElement")];
          let ge = fe.type === "JSXElement" ? ne("openingElement") : ne("openingFragment"), Ce = fe.type === "JSXElement" ? ne("closingElement") : ne("closingFragment");
          if (fe.children.length === 1 && fe.children[0].type === "JSXExpressionContainer" && (fe.children[0].expression.type === "TemplateLiteral" || fe.children[0].expression.type === "TaggedTemplateExpression"))
            return [ge, ...H.map(ne, "children"), Ce];
          fe.children = fe.children.map((S) => Ae(S) ? { type: "JSXText", value: " ", raw: " " } : S);
          let _e = fe.children.some(T), Oe = fe.children.filter((S) => S.type === "JSXExpressionContainer").length > 1, pe = fe.type === "JSXElement" && fe.openingElement.attributes.length > 1, ie = D(ge) || _e || pe || Oe, ve = H.getParentNode().rootMarker === "mdx", ce = Z.singleQuote ? "{' '}" : '{" "}', U = ve ? " " : h([ce, u], " "), de = fe.openingElement && fe.openingElement.name && fe.openingElement.name.name === "fbt", De = C(H, Z, ne, U, de), he = fe.children.some((S) => ae(S));
          for (let S = De.length - 2; S >= 0; S--) {
            let G = De[S] === "" && De[S + 1] === "", te = De[S] === r && De[S + 1] === "" && De[S + 2] === r, Ee = (De[S] === u || De[S] === r) && De[S + 1] === "" && De[S + 2] === U, Re = De[S] === U && De[S + 1] === "" && (De[S + 2] === u || De[S + 2] === r), Te = De[S] === U && De[S + 1] === "" && De[S + 2] === U, Pe = De[S] === u && De[S + 1] === "" && De[S + 2] === r || De[S] === r && De[S + 1] === "" && De[S + 2] === u;
            te && he || G || Ee || Te || Pe ? De.splice(S, 2) : Re && De.splice(S + 1, 2);
          }
          for (; De.length > 0 && o(v(De)); )
            De.pop();
          for (; De.length > 1 && o(De[0]) && o(De[1]); )
            De.shift(), De.shift();
          let Be = [];
          for (let [S, G] of De.entries()) {
            if (G === U) {
              if (S === 1 && De[S - 1] === "") {
                if (De.length === 2) {
                  Be.push(ce);
                  continue;
                }
                Be.push([ce, r]);
                continue;
              } else if (S === De.length - 1) {
                Be.push(ce);
                continue;
              } else if (De[S - 1] === "" && De[S - 2] === r) {
                Be.push(ce);
                continue;
              }
            }
            Be.push(G), D(G) && (ie = true);
          }
          let Se = he ? y(Be) : i(Be, { shouldBreak: true });
          if (ve)
            return Se;
          let ye = i([ge, l([r, Se]), r, Ce]);
          return ie ? ye : c([i([ge, ...De, Ce]), ye]);
        }
        function C(H, Z, ne, fe, ge) {
          let Ce = [];
          return H.each((_e, Oe, pe) => {
            let ie = _e.getValue();
            if (A(ie)) {
              let ve = F(ie);
              if (ae(ie)) {
                let ce = ve.split(le);
                if (ce[0] === "") {
                  if (Ce.push(""), ce.shift(), /\n/.test(ce[0])) {
                    let de = pe[Oe + 1];
                    Ce.push(b(ge, ce[1], ie, de));
                  } else
                    Ce.push(fe);
                  ce.shift();
                }
                let U;
                if (v(ce) === "" && (ce.pop(), U = ce.pop()), ce.length === 0)
                  return;
                for (let [de, De] of ce.entries())
                  de % 2 === 1 ? Ce.push(a) : Ce.push(De);
                if (U !== void 0)
                  if (/\n/.test(U)) {
                    let de = pe[Oe + 1];
                    Ce.push(b(ge, v(Ce), ie, de));
                  } else
                    Ce.push(fe);
                else {
                  let de = pe[Oe + 1];
                  Ce.push(_(ge, v(Ce), ie, de));
                }
              } else
                /\n/.test(ve) ? ve.match(/\n/g).length > 1 && Ce.push("", r) : Ce.push("", fe);
            } else {
              let ve = ne();
              Ce.push(ve);
              let ce = pe[Oe + 1];
              if (ce && ae(ce)) {
                let de = X(F(ce)).split(le)[0];
                Ce.push(_(ge, de, ie, ce));
              } else
                Ce.push(r);
            }
          }, "children"), Ce;
        }
        function _(H, Z, ne, fe) {
          return H ? "" : ne.type === "JSXElement" && !ne.closingElement || fe && fe.type === "JSXElement" && !fe.closingElement ? Z.length === 1 ? u : r : u;
        }
        function b(H, Z, ne, fe) {
          return H ? r : Z.length === 1 ? ne.type === "JSXElement" && !ne.closingElement || fe && fe.type === "JSXElement" && !fe.closingElement ? r : u : r;
        }
        function N(H, Z, ne) {
          let fe = H.getParentNode();
          if (!fe || { ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true }[fe.type])
            return Z;
          let Ce = H.match(void 0, (Oe) => Oe.type === "ArrowFunctionExpression", B, (Oe) => Oe.type === "JSXExpressionContainer"), _e = m(H, ne);
          return i([_e ? "" : h("("), l([u, Z]), u, _e ? "" : h(")")], { shouldBreak: Ce });
        }
        function k(H, Z, ne) {
          let fe = H.getValue(), ge = [];
          if (ge.push(ne("name")), fe.value) {
            let Ce;
            if (I(fe.value)) {
              let Oe = F(fe.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: pe, quote: ie, regex: ve } = w(Oe, Z.jsxSingleQuote ? "'" : '"');
              Oe = Oe.replace(ve, pe), Ce = [ie, Oe, ie];
            } else
              Ce = ne("value");
            ge.push("=", Ce);
          }
          return ge;
        }
        function $(H, Z, ne) {
          let fe = H.getValue(), ge = (Ce, _e) => Ce.type === "JSXEmptyExpression" || !R(Ce) && (Ce.type === "ArrayExpression" || Ce.type === "ObjectExpression" || Ce.type === "ArrowFunctionExpression" || Ce.type === "AwaitExpression" && (ge(Ce.argument, Ce) || Ce.argument.type === "JSXElement") || B(Ce) || Ce.type === "FunctionExpression" || Ce.type === "TemplateLiteral" || Ce.type === "TaggedTemplateExpression" || Ce.type === "DoExpression" || T(_e) && (Ce.type === "ConditionalExpression" || P(Ce)));
          return ge(fe.expression, H.getParentNode(0)) ? i(["{", ne("expression"), g, "}"]) : i(["{", l([u, ne("expression")]), u, g, "}"]);
        }
        function M(H, Z, ne) {
          let fe = H.getValue(), ge = fe.name && R(fe.name) || fe.typeParameters && R(fe.typeParameters);
          if (fe.selfClosing && fe.attributes.length === 0 && !ge)
            return ["<", ne("name"), ne("typeParameters"), " />"];
          if (fe.attributes && fe.attributes.length === 1 && fe.attributes[0].value && I(fe.attributes[0].value) && !fe.attributes[0].value.value.includes(`
`) && !ge && !R(fe.attributes[0]))
            return i(["<", ne("name"), ne("typeParameters"), " ", ...H.map(ne, "attributes"), fe.selfClosing ? " />" : ">"]);
          let Ce = fe.attributes && fe.attributes.some((Oe) => Oe.value && I(Oe.value) && Oe.value.value.includes(`
`)), _e = Z.singleAttributePerLine && fe.attributes.length > 1 ? r : a;
          return i(["<", ne("name"), ne("typeParameters"), l(H.map(() => [_e, ne()], "attributes")), ...q(fe, Z, ge)], { shouldBreak: Ce });
        }
        function q(H, Z, ne) {
          return H.selfClosing ? [a, "/>"] : J(H, Z, ne) ? [">"] : [u, ">"];
        }
        function J(H, Z, ne) {
          let fe = H.attributes.length > 0 && R(v(H.attributes), f.Trailing);
          return H.attributes.length === 0 && !ne || (Z.bracketSameLine || Z.jsxBracketSameLine) && (!ne || H.attributes.length > 0) && !fe;
        }
        function L(H, Z, ne) {
          let fe = H.getValue(), ge = [];
          ge.push("</");
          let Ce = ne("name");
          return R(fe.name, f.Leading | f.Line) ? ge.push(l([r, Ce]), r) : R(fe.name, f.Leading | f.Block) ? ge.push(" ", Ce) : ge.push(Ce), ge.push(">"), ge;
        }
        function Y(H, Z) {
          let ne = H.getValue(), fe = R(ne), ge = R(ne, f.Line), Ce = ne.type === "JSXOpeningFragment";
          return [Ce ? "<" : "</", l([ge ? r : fe && !Ce ? " " : "", s(H, Z, true)]), ge ? r : "", ">"];
        }
        function V(H, Z, ne) {
          let fe = t(H, d(H, Z, ne), Z);
          return N(H, fe, Z);
        }
        function O(H, Z) {
          let ne = H.getValue(), fe = R(ne, f.Line);
          return [s(H, Z, !fe), fe ? r : ""];
        }
        function K(H, Z, ne) {
          let fe = H.getValue();
          return ["{", H.call((ge) => {
            let Ce = ["...", ne()], _e = ge.getValue();
            return !R(_e) || !E(ge) ? Ce : [l([u, t(ge, Ce, Z)]), u];
          }, fe.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function se(H, Z, ne) {
          let fe = H.getValue();
          if (fe.type.startsWith("JSX"))
            switch (fe.type) {
              case "JSXAttribute":
                return k(H, Z, ne);
              case "JSXIdentifier":
                return String(fe.name);
              case "JSXNamespacedName":
                return p(":", [ne("namespace"), ne("name")]);
              case "JSXMemberExpression":
                return p(".", [ne("object"), ne("property")]);
              case "JSXSpreadAttribute":
                return K(H, Z, ne);
              case "JSXSpreadChild":
                return K(H, Z, ne);
              case "JSXExpressionContainer":
                return $(H, Z, ne);
              case "JSXFragment":
              case "JSXElement":
                return V(H, Z, ne);
              case "JSXOpeningElement":
                return M(H, Z, ne);
              case "JSXClosingElement":
                return L(H, Z, ne);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return Y(H, Z);
              case "JSXEmptyExpression":
                return O(H, Z);
              case "JSXText":
                throw new Error("JSXTest should be handled by JSXElement");
              default:
                throw new Error(`Unknown JSX node type: ${JSON.stringify(fe.type)}.`);
            }
        }
        var Q = ` 
\r	`, le = new RegExp("([" + Q + "]+)"), W = new RegExp("[^" + Q + "]"), X = (H) => H.replace(new RegExp("(?:^" + le.source + "|" + le.source + "$)"), "");
        function oe(H) {
          if (H.children.length === 0)
            return true;
          if (H.children.length > 1)
            return false;
          let Z = H.children[0];
          return A(Z) && !ae(Z);
        }
        function ae(H) {
          return A(H) && (W.test(F(H)) || !/\n/.test(F(H)));
        }
        function Ae(H) {
          return H.type === "JSXExpressionContainer" && A(H.expression) && H.expression.value === " " && !R(H.expression);
        }
        function z(H) {
          let Z = H.getValue(), ne = H.getParentNode();
          if (!ne || !Z || !T(Z) || !T(ne))
            return false;
          let fe = ne.children.indexOf(Z), ge = null;
          for (let Ce = fe; Ce > 0; Ce--) {
            let _e = ne.children[Ce - 1];
            if (!(_e.type === "JSXText" && !ae(_e))) {
              ge = _e;
              break;
            }
          }
          return ge && ge.type === "JSXExpressionContainer" && ge.expression.type === "JSXEmptyExpression" && x(ge.expression);
        }
        n.exports = { hasJsxIgnoreComment: z, printJsx: se };
      } }), Dt = ee({ "src/language-js/print/misc.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t } = Ge(), { builders: { indent: s, join: a, line: r } } = qe(), { isFlowAnnotationComment: u } = Ke();
        function i(v) {
          let w = v.getValue();
          return !w.optional || w.type === "Identifier" && w === v.getParentNode().key ? "" : w.type === "OptionalCallExpression" || w.type === "OptionalMemberExpression" && w.computed ? "?." : "?";
        }
        function l(v) {
          return v.getValue().definite || v.match(void 0, (w, T) => T === "id" && w.type === "VariableDeclarator" && w.definite) ? "!" : "";
        }
        function c(v, w, T) {
          let F = v.getValue();
          return F.typeArguments ? T("typeArguments") : F.typeParameters ? T("typeParameters") : "";
        }
        function y(v, w, T) {
          let F = v.getValue();
          if (!F.typeAnnotation)
            return "";
          let A = v.getParentNode(), B = A.type === "DeclareFunction" && A.id === F;
          return u(w.originalText, F.typeAnnotation) ? [" /*: ", T("typeAnnotation"), " */"] : [B ? "" : ": ", T("typeAnnotation")];
        }
        function h(v, w, T) {
          return ["::", T("callee")];
        }
        function g(v, w, T) {
          let F = v.getValue();
          return t(F.modifiers) ? [a(" ", v.map(T, "modifiers")), " "] : "";
        }
        function p(v, w, T) {
          return v.type === "EmptyStatement" ? ";" : v.type === "BlockStatement" || T ? [" ", w] : s([r, w]);
        }
        function D(v, w, T) {
          return ["...", T("argument"), y(v, w, T)];
        }
        n.exports = { printOptionalToken: i, printDefiniteToken: l, printFunctionTypeParameters: c, printBindExpressionCallee: h, printTypeScriptModifiers: g, printTypeAnnotation: y, printRestSpread: D, adjustClause: p };
      } }), Qt = ee({ "src/language-js/print/array.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { builders: { line: s, softline: a, hardline: r, group: u, indent: i, ifBreak: l, fill: c } } = qe(), { getLast: y, hasNewline: h } = Ge(), { shouldPrintComma: g, hasComment: p, CommentCheckFlags: D, isNextLineEmpty: v, isNumericLiteral: w, isSignedNumericLiteral: T } = Ke(), { locStart: F } = it(), { printOptionalToken: A, printTypeAnnotation: B } = Dt();
        function I(x, m, E) {
          let o = x.getValue(), d = [], C = o.type === "TupleExpression" ? "#[" : "[", _ = "]";
          if (o.elements.length === 0)
            p(o, D.Dangling) ? d.push(u([C, t(x, m), a, _])) : d.push(C, _);
          else {
            let b = y(o.elements), N = !(b && b.type === "RestElement"), k = b === null, $ = Symbol("array"), M = !m.__inJestEach && o.elements.length > 1 && o.elements.every((L, Y, V) => {
              let O = L && L.type;
              if (O !== "ArrayExpression" && O !== "ObjectExpression")
                return false;
              let K = V[Y + 1];
              if (K && O !== K.type)
                return false;
              let se = O === "ArrayExpression" ? "elements" : "properties";
              return L[se] && L[se].length > 1;
            }), q = P(o, m), J = N ? k ? "," : g(m) ? q ? l(",", "", { groupId: $ }) : l(",") : "" : "";
            d.push(u([C, i([a, q ? f(x, m, E, J) : [R(x, m, "elements", E), J], t(x, m, true)]), a, _], { shouldBreak: M, id: $ }));
          }
          return d.push(A(x), B(x, m, E)), d;
        }
        function P(x, m) {
          return x.elements.length > 1 && x.elements.every((E) => E && (w(E) || T(E) && !p(E.argument)) && !p(E, D.Trailing | D.Line, (o) => !h(m.originalText, F(o), { backwards: true })));
        }
        function R(x, m, E, o) {
          let d = [], C = [];
          return x.each((_) => {
            d.push(C, u(o())), C = [",", s], _.getValue() && v(_.getValue(), m) && C.push(a);
          }, E), d;
        }
        function f(x, m, E, o) {
          let d = [];
          return x.each((C, _, b) => {
            let N = _ === b.length - 1;
            d.push([E(), N ? o : ","]), N || d.push(v(C.getValue(), m) ? [r, r] : p(b[_ + 1], D.Leading | D.Line) ? r : s);
          }, "elements"), c(d);
        }
        n.exports = { printArray: I, printArrayItems: R, isConciselyPrintedArray: P };
      } }), to = ee({ "src/language-js/print/call-arguments.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { getLast: s, getPenultimate: a } = Ge(), { getFunctionParameters: r, hasComment: u, CommentCheckFlags: i, isFunctionCompositionArgs: l, isJsxNode: c, isLongCurriedCallExpression: y, shouldPrintComma: h, getCallArguments: g, iterateCallArgumentsPath: p, isNextLineEmpty: D, isCallExpression: v, isStringLiteral: w, isObjectProperty: T, isTSTypeExpression: F } = Ke(), { builders: { line: A, hardline: B, softline: I, group: P, indent: R, conditionalGroup: f, ifBreak: x, breakParent: m }, utils: { willBreak: E } } = qe(), { ArgExpansionBailout: o } = Kt(), { isConciselyPrintedArray: d } = Qt();
        function C(q, J, L) {
          let Y = q.getValue(), V = Y.type === "ImportExpression", O = g(Y);
          if (O.length === 0)
            return ["(", t(q, J, true), ")"];
          if (k(O))
            return ["(", L(["arguments", 0]), ", ", L(["arguments", 1]), ")"];
          let K = false, se = false, Q = O.length - 1, le = [];
          p(q, (z, H) => {
            let Z = z.getNode(), ne = [L()];
            H === Q || (D(Z, J) ? (H === 0 && (se = true), K = true, ne.push(",", B, B)) : ne.push(",", A)), le.push(ne);
          });
          let W = !(V || Y.callee && Y.callee.type === "Import") && h(J, "all") ? "," : "";
          function X() {
            return P(["(", R([A, ...le]), W, A, ")"], { shouldBreak: true });
          }
          if (K || q.getParentNode().type !== "Decorator" && l(O))
            return X();
          let oe = N(O), ae = b(O, J);
          if (oe || ae) {
            if (oe ? le.slice(1).some(E) : le.slice(0, -1).some(E))
              return X();
            let z = [];
            try {
              q.try(() => {
                p(q, (H, Z) => {
                  oe && Z === 0 && (z = [[L([], { expandFirstArg: true }), le.length > 1 ? "," : "", se ? B : A, se ? B : ""], ...le.slice(1)]), ae && Z === Q && (z = [...le.slice(0, -1), L([], { expandLastArg: true })]);
                });
              });
            } catch (H) {
              if (H instanceof o)
                return X();
              throw H;
            }
            return [le.some(E) ? m : "", f([["(", ...z, ")"], oe ? ["(", P(z[0], { shouldBreak: true }), ...z.slice(1), ")"] : ["(", ...le.slice(0, -1), P(s(z), { shouldBreak: true }), ")"], X()])];
          }
          let Ae = ["(", R([I, ...le]), x(W), I, ")"];
          return y(q) ? Ae : P(Ae, { shouldBreak: le.some(E) || K });
        }
        function _(q) {
          let J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          return q.type === "ObjectExpression" && (q.properties.length > 0 || u(q)) || q.type === "ArrayExpression" && (q.elements.length > 0 || u(q)) || q.type === "TSTypeAssertion" && _(q.expression) || F(q) && _(q.expression) || q.type === "FunctionExpression" || q.type === "ArrowFunctionExpression" && (!q.returnType || !q.returnType.typeAnnotation || q.returnType.typeAnnotation.type !== "TSTypeReference" || $(q.body)) && (q.body.type === "BlockStatement" || q.body.type === "ArrowFunctionExpression" && _(q.body, true) || q.body.type === "ObjectExpression" || q.body.type === "ArrayExpression" || !J && (v(q.body) || q.body.type === "ConditionalExpression") || c(q.body)) || q.type === "DoExpression" || q.type === "ModuleExpression";
        }
        function b(q, J) {
          let L = s(q), Y = a(q);
          return !u(L, i.Leading) && !u(L, i.Trailing) && _(L) && (!Y || Y.type !== L.type) && (q.length !== 2 || Y.type !== "ArrowFunctionExpression" || L.type !== "ArrayExpression") && !(q.length > 1 && L.type === "ArrayExpression" && d(L, J));
        }
        function N(q) {
          if (q.length !== 2)
            return false;
          let [J, L] = q;
          return J.type === "ModuleExpression" && M(L) ? true : !u(J) && (J.type === "FunctionExpression" || J.type === "ArrowFunctionExpression" && J.body.type === "BlockStatement") && L.type !== "FunctionExpression" && L.type !== "ArrowFunctionExpression" && L.type !== "ConditionalExpression" && !_(L);
        }
        function k(q) {
          return q.length === 2 && q[0].type === "ArrowFunctionExpression" && r(q[0]).length === 0 && q[0].body.type === "BlockStatement" && q[1].type === "ArrayExpression" && !q.some((J) => u(J));
        }
        function $(q) {
          return q.type === "BlockStatement" && (q.body.some((J) => J.type !== "EmptyStatement") || u(q, i.Dangling));
        }
        function M(q) {
          return q.type === "ObjectExpression" && q.properties.length === 1 && T(q.properties[0]) && q.properties[0].key.type === "Identifier" && q.properties[0].key.name === "type" && w(q.properties[0].value) && q.properties[0].value.value === "module";
        }
        n.exports = C;
      } }), ro = ee({ "src/language-js/print/member.js"(e, n) {
        "use strict";
        re();
        var { builders: { softline: t, group: s, indent: a, label: r } } = qe(), { isNumericLiteral: u, isMemberExpression: i, isCallExpression: l } = Ke(), { printOptionalToken: c } = Dt();
        function y(g, p, D) {
          let v = g.getValue(), w = g.getParentNode(), T, F = 0;
          do
            T = g.getParentNode(F), F++;
          while (T && (i(T) || T.type === "TSNonNullExpression"));
          let A = D("object"), B = h(g, p, D), I = T && (T.type === "NewExpression" || T.type === "BindExpression" || T.type === "AssignmentExpression" && T.left.type !== "Identifier") || v.computed || v.object.type === "Identifier" && v.property.type === "Identifier" && !i(w) || (w.type === "AssignmentExpression" || w.type === "VariableDeclarator") && (l(v.object) && v.object.arguments.length > 0 || v.object.type === "TSNonNullExpression" && l(v.object.expression) && v.object.expression.arguments.length > 0 || A.label === "member-chain");
          return r(A.label === "member-chain" ? "member-chain" : "member", [A, I ? B : s(a([t, B]))]);
        }
        function h(g, p, D) {
          let v = D("property"), w = g.getValue(), T = c(g);
          return w.computed ? !w.property || u(w.property) ? [T, "[", v, "]"] : s([T, "[", a([t, v]), t, "]"]) : [T, ".", v];
        }
        n.exports = { printMemberExpression: y, printMemberLookup: h };
      } }), $m = ee({ "src/language-js/print/member-chain.js"(e, n) {
        "use strict";
        re();
        var { printComments: t } = et(), { getLast: s, isNextLineEmptyAfterIndex: a, getNextNonSpaceNonCommentCharacterIndex: r } = Ge(), u = Ot(), { isCallExpression: i, isMemberExpression: l, isFunctionOrArrowExpression: c, isLongCurriedCallExpression: y, isMemberish: h, isNumericLiteral: g, isSimpleCallArgument: p, hasComment: D, CommentCheckFlags: v, isNextLineEmpty: w } = Ke(), { locEnd: T } = it(), { builders: { join: F, hardline: A, group: B, indent: I, conditionalGroup: P, breakParent: R, label: f }, utils: { willBreak: x } } = qe(), m = to(), { printMemberLookup: E } = ro(), { printOptionalToken: o, printFunctionTypeParameters: d, printBindExpressionCallee: C } = Dt();
        function _(b, N, k) {
          let $ = b.getParentNode(), M = !$ || $.type === "ExpressionStatement", q = [];
          function J(ie) {
            let { originalText: ve } = N, ce = r(ve, ie, T);
            return ve.charAt(ce) === ")" ? ce !== false && a(ve, ce + 1) : w(ie, N);
          }
          function L(ie) {
            let ve = ie.getValue();
            i(ve) && (h(ve.callee) || i(ve.callee)) ? (q.unshift({ node: ve, printed: [t(ie, [o(ie), d(ie, N, k), m(ie, N, k)], N), J(ve) ? A : ""] }), ie.call((ce) => L(ce), "callee")) : h(ve) ? (q.unshift({ node: ve, needsParens: u(ie, N), printed: t(ie, l(ve) ? E(ie, N, k) : C(ie, N, k), N) }), ie.call((ce) => L(ce), "object")) : ve.type === "TSNonNullExpression" ? (q.unshift({ node: ve, printed: t(ie, "!", N) }), ie.call((ce) => L(ce), "expression")) : q.unshift({ node: ve, printed: k() });
          }
          let Y = b.getValue();
          q.unshift({ node: Y, printed: [o(b), d(b, N, k), m(b, N, k)] }), Y.callee && b.call((ie) => L(ie), "callee");
          let V = [], O = [q[0]], K = 1;
          for (; K < q.length && (q[K].node.type === "TSNonNullExpression" || i(q[K].node) || l(q[K].node) && q[K].node.computed && g(q[K].node.property)); ++K)
            O.push(q[K]);
          if (!i(q[0].node))
            for (; K + 1 < q.length && h(q[K].node) && h(q[K + 1].node); ++K)
              O.push(q[K]);
          V.push(O), O = [];
          let se = false;
          for (; K < q.length; ++K) {
            if (se && h(q[K].node)) {
              if (q[K].node.computed && g(q[K].node.property)) {
                O.push(q[K]);
                continue;
              }
              V.push(O), O = [], se = false;
            }
            (i(q[K].node) || q[K].node.type === "ImportExpression") && (se = true), O.push(q[K]), D(q[K].node, v.Trailing) && (V.push(O), O = [], se = false);
          }
          O.length > 0 && V.push(O);
          function Q(ie) {
            return /^[A-Z]|^[$_]+$/.test(ie);
          }
          function le(ie) {
            return ie.length <= N.tabWidth;
          }
          function W(ie) {
            let ve = ie[1].length > 0 && ie[1][0].node.computed;
            if (ie[0].length === 1) {
              let U = ie[0][0].node;
              return U.type === "ThisExpression" || U.type === "Identifier" && (Q(U.name) || M && le(U.name) || ve);
            }
            let ce = s(ie[0]).node;
            return l(ce) && ce.property.type === "Identifier" && (Q(ce.property.name) || ve);
          }
          let X = V.length >= 2 && !D(V[1][0].node) && W(V);
          function oe(ie) {
            let ve = ie.map((ce) => ce.printed);
            return ie.length > 0 && s(ie).needsParens ? ["(", ...ve, ")"] : ve;
          }
          function ae(ie) {
            return ie.length === 0 ? "" : I(B([A, F(A, ie.map(oe))]));
          }
          let Ae = V.map(oe), z = Ae, H = X ? 3 : 2, Z = V.flat(), ne = Z.slice(1, -1).some((ie) => D(ie.node, v.Leading)) || Z.slice(0, -1).some((ie) => D(ie.node, v.Trailing)) || V[H] && D(V[H][0].node, v.Leading);
          if (V.length <= H && !ne)
            return y(b) ? z : B(z);
          let fe = s(V[X ? 1 : 0]).node, ge = !i(fe) && J(fe), Ce = [oe(V[0]), X ? V.slice(1, 2).map(oe) : "", ge ? A : "", ae(V.slice(X ? 2 : 1))], _e = q.map((ie) => {
            let { node: ve } = ie;
            return ve;
          }).filter(i);
          function Oe() {
            let ie = s(s(V)).node, ve = s(Ae);
            return i(ie) && x(ve) && _e.slice(0, -1).some((ce) => ce.arguments.some(c));
          }
          let pe;
          return ne || _e.length > 2 && _e.some((ie) => !ie.arguments.every((ve) => p(ve, 0))) || Ae.slice(0, -1).some(x) || Oe() ? pe = B(Ce) : pe = [x(z) || ge ? R : "", P([z, Ce])], f("member-chain", pe);
        }
        n.exports = _;
      } }), no = ee({ "src/language-js/print/call-expression.js"(e, n) {
        "use strict";
        re();
        var { builders: { join: t, group: s } } = qe(), a = Ot(), { getCallArguments: r, hasFlowAnnotationComment: u, isCallExpression: i, isMemberish: l, isStringLiteral: c, isTemplateOnItsOwnLine: y, isTestCall: h, iterateCallArgumentsPath: g } = Ke(), p = $m(), D = to(), { printOptionalToken: v, printFunctionTypeParameters: w } = Dt();
        function T(A, B, I) {
          let P = A.getValue(), R = A.getParentNode(), f = P.type === "NewExpression", x = P.type === "ImportExpression", m = v(A), E = r(P);
          if (E.length > 0 && (!x && !f && F(P, R) || E.length === 1 && y(E[0], B.originalText) || !f && h(P, R))) {
            let C = [];
            return g(A, () => {
              C.push(I());
            }), [f ? "new " : "", I("callee"), m, w(A, B, I), "(", t(", ", C), ")"];
          }
          let o = (B.parser === "babel" || B.parser === "babel-flow") && P.callee && P.callee.type === "Identifier" && u(P.callee.trailingComments);
          if (o && (P.callee.trailingComments[0].printed = true), !x && !f && l(P.callee) && !A.call((C) => a(C, B), "callee"))
            return p(A, B, I);
          let d = [f ? "new " : "", x ? "import" : I("callee"), m, o ? `/*:: ${P.callee.trailingComments[0].value.slice(2).trim()} */` : "", w(A, B, I), D(A, B, I)];
          return x || i(P.callee) ? s(d) : d;
        }
        function F(A, B) {
          if (A.callee.type !== "Identifier")
            return false;
          if (A.callee.name === "require")
            return true;
          if (A.callee.name === "define") {
            let I = r(A);
            return B.type === "ExpressionStatement" && (I.length === 1 || I.length === 2 && I[0].type === "ArrayExpression" || I.length === 3 && c(I[0]) && I[1].type === "ArrayExpression");
          }
          return false;
        }
        n.exports = { printCallExpression: T };
      } }), Zt = ee({ "src/language-js/print/assignment.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t, getStringWidth: s } = Ge(), { builders: { line: a, group: r, indent: u, indentIfBreak: i, lineSuffixBoundary: l }, utils: { cleanDoc: c, willBreak: y, canBreak: h } } = qe(), { hasLeadingOwnLineComment: g, isBinaryish: p, isStringLiteral: D, isLiteral: v, isNumericLiteral: w, isCallExpression: T, isMemberExpression: F, getCallArguments: A, rawText: B, hasComment: I, isSignedNumericLiteral: P, isObjectProperty: R } = Ke(), { shouldInlineLogicalExpression: f } = Jn(), { printCallExpression: x } = no();
        function m(W, X, oe, ae, Ae, z) {
          let H = d(W, X, oe, ae, z), Z = oe(z, { assignmentLayout: H });
          switch (H) {
            case "break-after-operator":
              return r([r(ae), Ae, r(u([a, Z]))]);
            case "never-break-after-operator":
              return r([r(ae), Ae, " ", Z]);
            case "fluid": {
              let ne = Symbol("assignment");
              return r([r(ae), Ae, r(u(a), { id: ne }), l, i(Z, { groupId: ne })]);
            }
            case "break-lhs":
              return r([ae, Ae, " ", r(Z)]);
            case "chain":
              return [r(ae), Ae, a, Z];
            case "chain-tail":
              return [r(ae), Ae, u([a, Z])];
            case "chain-tail-arrow-chain":
              return [r(ae), Ae, Z];
            case "only-left":
              return ae;
          }
        }
        function E(W, X, oe) {
          let ae = W.getValue();
          return m(W, X, oe, oe("left"), [" ", ae.operator], "right");
        }
        function o(W, X, oe) {
          return m(W, X, oe, oe("id"), " =", "init");
        }
        function d(W, X, oe, ae, Ae) {
          let z = W.getValue(), H = z[Ae];
          if (!H)
            return "only-left";
          let Z = !b(H);
          if (W.match(b, N, (Ce) => !Z || Ce.type !== "ExpressionStatement" && Ce.type !== "VariableDeclaration"))
            return Z ? H.type === "ArrowFunctionExpression" && H.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!Z && b(H.right) || g(X.originalText, H))
            return "break-after-operator";
          if (H.type === "CallExpression" && H.callee.name === "require" || X.parser === "json5" || X.parser === "json")
            return "never-break-after-operator";
          if (_(z) || k(z) || q(z) || J(z) && h(ae))
            return "break-lhs";
          let ge = se(z, ae, X);
          return W.call(() => C(W, X, oe, ge), Ae) ? "break-after-operator" : ge || H.type === "TemplateLiteral" || H.type === "TaggedTemplateExpression" || H.type === "BooleanLiteral" || w(H) || H.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function C(W, X, oe, ae) {
          let Ae = W.getValue();
          if (p(Ae) && !f(Ae))
            return true;
          switch (Ae.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return true;
            case "ConditionalExpression": {
              let { test: Z } = Ae;
              return p(Z) && !f(Z);
            }
            case "ClassExpression":
              return t(Ae.decorators);
          }
          if (ae)
            return false;
          let z = Ae, H = [];
          for (; ; )
            if (z.type === "UnaryExpression")
              z = z.argument, H.push("argument");
            else if (z.type === "TSNonNullExpression")
              z = z.expression, H.push("expression");
            else
              break;
          return !!(D(z) || W.call(() => V(W, X, oe), ...H));
        }
        function _(W) {
          if (N(W)) {
            let X = W.left || W.id;
            return X.type === "ObjectPattern" && X.properties.length > 2 && X.properties.some((oe) => R(oe) && (!oe.shorthand || oe.value && oe.value.type === "AssignmentPattern"));
          }
          return false;
        }
        function b(W) {
          return W.type === "AssignmentExpression";
        }
        function N(W) {
          return b(W) || W.type === "VariableDeclarator";
        }
        function k(W) {
          let X = $(W);
          if (t(X)) {
            let oe = W.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (X.length > 1 && X.some((ae) => ae[oe] || ae.default))
              return true;
          }
          return false;
        }
        function $(W) {
          return M(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function M(W) {
          return W.type === "TSTypeAliasDeclaration" || W.type === "TypeAlias";
        }
        function q(W) {
          if (W.type !== "VariableDeclarator")
            return false;
          let { typeAnnotation: X } = W.id;
          if (!X || !X.typeAnnotation)
            return false;
          let oe = L(X.typeAnnotation);
          return t(oe) && oe.length > 1 && oe.some((ae) => t(L(ae)) || ae.type === "TSConditionalType");
        }
        function J(W) {
          return W.type === "VariableDeclarator" && W.init && W.init.type === "ArrowFunctionExpression";
        }
        function L(W) {
          return Y(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function Y(W) {
          return W.type === "TSTypeReference" || W.type === "GenericTypeAnnotation";
        }
        function V(W, X, oe) {
          let ae = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, Ae = W.getValue(), z = () => V(W, X, oe, true);
          if (Ae.type === "TSNonNullExpression")
            return W.call(z, "expression");
          if (T(Ae)) {
            if (x(W, X, oe).label === "member-chain")
              return false;
            let Z = A(Ae);
            return !(Z.length === 0 || Z.length === 1 && K(Z[0], X)) || Q(Ae, oe) ? false : W.call(z, "callee");
          }
          return F(Ae) ? W.call(z, "object") : ae && (Ae.type === "Identifier" || Ae.type === "ThisExpression");
        }
        var O = 0.25;
        function K(W, X) {
          let { printWidth: oe } = X;
          if (I(W))
            return false;
          let ae = oe * O;
          if (W.type === "ThisExpression" || W.type === "Identifier" && W.name.length <= ae || P(W) && !I(W.argument))
            return true;
          let Ae = W.type === "Literal" && "regex" in W && W.regex.pattern || W.type === "RegExpLiteral" && W.pattern;
          return Ae ? Ae.length <= ae : D(W) ? B(W).length <= ae : W.type === "TemplateLiteral" ? W.expressions.length === 0 && W.quasis[0].value.raw.length <= ae && !W.quasis[0].value.raw.includes(`
`) : v(W);
        }
        function se(W, X, oe) {
          if (!R(W))
            return false;
          X = c(X);
          let ae = 3;
          return typeof X == "string" && s(X) < oe.tabWidth + ae;
        }
        function Q(W, X) {
          let oe = le(W);
          if (t(oe)) {
            if (oe.length > 1)
              return true;
            if (oe.length === 1) {
              let Ae = oe[0];
              if (Ae.type === "TSUnionType" || Ae.type === "UnionTypeAnnotation" || Ae.type === "TSIntersectionType" || Ae.type === "IntersectionTypeAnnotation" || Ae.type === "TSTypeLiteral" || Ae.type === "ObjectTypeAnnotation")
                return true;
            }
            let ae = W.typeParameters ? "typeParameters" : "typeArguments";
            if (y(X(ae)))
              return true;
          }
          return false;
        }
        function le(W) {
          return W.typeParameters && W.typeParameters.params || W.typeArguments && W.typeArguments.params;
        }
        n.exports = { printVariableDeclarator: o, printAssignmentExpression: E, printAssignment: m, isArrowFunctionVariableDeclarator: J };
      } }), kr = ee({ "src/language-js/print/function-parameters.js"(e, n) {
        "use strict";
        re();
        var { getNextNonSpaceNonCommentCharacter: t } = Ge(), { printDanglingComments: s } = et(), { builders: { line: a, hardline: r, softline: u, group: i, indent: l, ifBreak: c }, utils: { removeLines: y, willBreak: h } } = qe(), { getFunctionParameters: g, iterateFunctionParametersPath: p, isSimpleType: D, isTestCall: v, isTypeAnnotationAFunction: w, isObjectType: T, isObjectTypePropertyAFunction: F, hasRestParameter: A, shouldPrintComma: B, hasComment: I, isNextLineEmpty: P } = Ke(), { locEnd: R } = it(), { ArgExpansionBailout: f } = Kt(), { printFunctionTypeParameters: x } = Dt();
        function m(C, _, b, N, k) {
          let $ = C.getValue(), M = g($), q = k ? x(C, b, _) : "";
          if (M.length === 0)
            return [q, "(", s(C, b, true, (se) => t(b.originalText, se, R) === ")"), ")"];
          let J = C.getParentNode(), L = v(J), Y = E($), V = [];
          if (p(C, (se, Q) => {
            let le = Q === M.length - 1;
            le && $.rest && V.push("..."), V.push(_()), !le && (V.push(","), L || Y ? V.push(" ") : P(M[Q], b) ? V.push(r, r) : V.push(a));
          }), N) {
            if (h(q) || h(V))
              throw new f();
            return i([y(q), "(", y(V), ")"]);
          }
          let O = M.every((se) => !se.decorators);
          return Y && O ? [q, "(", ...V, ")"] : L ? [q, "(", ...V, ")"] : (F(J) || w(J) || J.type === "TypeAlias" || J.type === "UnionTypeAnnotation" || J.type === "TSUnionType" || J.type === "IntersectionTypeAnnotation" || J.type === "FunctionTypeAnnotation" && J.returnType === $) && M.length === 1 && M[0].name === null && $.this !== M[0] && M[0].typeAnnotation && $.typeParameters === null && D(M[0].typeAnnotation) && !$.rest ? b.arrowParens === "always" ? ["(", ...V, ")"] : V : [q, "(", l([u, ...V]), c(!A($) && B(b, "all") ? "," : ""), u, ")"];
        }
        function E(C) {
          if (!C)
            return false;
          let _ = g(C);
          if (_.length !== 1)
            return false;
          let [b] = _;
          return !I(b) && (b.type === "ObjectPattern" || b.type === "ArrayPattern" || b.type === "Identifier" && b.typeAnnotation && (b.typeAnnotation.type === "TypeAnnotation" || b.typeAnnotation.type === "TSTypeAnnotation") && T(b.typeAnnotation.typeAnnotation) || b.type === "FunctionTypeParam" && T(b.typeAnnotation) || b.type === "AssignmentPattern" && (b.left.type === "ObjectPattern" || b.left.type === "ArrayPattern") && (b.right.type === "Identifier" || b.right.type === "ObjectExpression" && b.right.properties.length === 0 || b.right.type === "ArrayExpression" && b.right.elements.length === 0));
        }
        function o(C) {
          let _;
          return C.returnType ? (_ = C.returnType, _.typeAnnotation && (_ = _.typeAnnotation)) : C.typeAnnotation && (_ = C.typeAnnotation), _;
        }
        function d(C, _) {
          let b = o(C);
          if (!b)
            return false;
          let N = C.typeParameters && C.typeParameters.params;
          if (N) {
            if (N.length > 1)
              return false;
            if (N.length === 1) {
              let k = N[0];
              if (k.constraint || k.default)
                return false;
            }
          }
          return g(C).length === 1 && (T(b) || h(_));
        }
        n.exports = { printFunctionParameters: m, shouldHugFunctionParameters: E, shouldGroupFunctionParameters: d };
      } }), Lr = ee({ "src/language-js/print/type-annotation.js"(e, n) {
        "use strict";
        re();
        var { printComments: t, printDanglingComments: s } = et(), { isNonEmptyArray: a } = Ge(), { builders: { group: r, join: u, line: i, softline: l, indent: c, align: y, ifBreak: h } } = qe(), g = Ot(), { locStart: p } = it(), { isSimpleType: D, isObjectType: v, hasLeadingOwnLineComment: w, isObjectTypePropertyAFunction: T, shouldPrintComma: F } = Ke(), { printAssignment: A } = Zt(), { printFunctionParameters: B, shouldGroupFunctionParameters: I } = kr(), { printArrayItems: P } = Qt();
        function R(b) {
          if (D(b) || v(b))
            return true;
          if (b.type === "UnionTypeAnnotation" || b.type === "TSUnionType") {
            let N = b.types.filter(($) => $.type === "VoidTypeAnnotation" || $.type === "TSVoidKeyword" || $.type === "NullLiteralTypeAnnotation" || $.type === "TSNullKeyword").length, k = b.types.some(($) => $.type === "ObjectTypeAnnotation" || $.type === "TSTypeLiteral" || $.type === "GenericTypeAnnotation" || $.type === "TSTypeReference");
            if (b.types.length - 1 === N && k)
              return true;
          }
          return false;
        }
        function f(b, N, k) {
          let $ = N.semi ? ";" : "", M = b.getValue(), q = [];
          return q.push("opaque type ", k("id"), k("typeParameters")), M.supertype && q.push(": ", k("supertype")), M.impltype && q.push(" = ", k("impltype")), q.push($), q;
        }
        function x(b, N, k) {
          let $ = N.semi ? ";" : "", M = b.getValue(), q = [];
          M.declare && q.push("declare "), q.push("type ", k("id"), k("typeParameters"));
          let J = M.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [A(b, N, k, q, " =", J), $];
        }
        function m(b, N, k) {
          let $ = b.getValue(), M = b.map(k, "types"), q = [], J = false;
          for (let L = 0; L < M.length; ++L)
            L === 0 ? q.push(M[L]) : v($.types[L - 1]) && v($.types[L]) ? q.push([" & ", J ? c(M[L]) : M[L]]) : !v($.types[L - 1]) && !v($.types[L]) ? q.push(c([" &", i, M[L]])) : (L > 1 && (J = true), q.push(" & ", L > 1 ? c(M[L]) : M[L]));
          return r(q);
        }
        function E(b, N, k) {
          let $ = b.getValue(), M = b.getParentNode(), q = M.type !== "TypeParameterInstantiation" && M.type !== "TSTypeParameterInstantiation" && M.type !== "GenericTypeAnnotation" && M.type !== "TSTypeReference" && M.type !== "TSTypeAssertion" && M.type !== "TupleTypeAnnotation" && M.type !== "TSTupleType" && !(M.type === "FunctionTypeParam" && !M.name && b.getParentNode(1).this !== M) && !((M.type === "TypeAlias" || M.type === "VariableDeclarator" || M.type === "TSTypeAliasDeclaration") && w(N.originalText, $)), J = R($), L = b.map((O) => {
            let K = k();
            return J || (K = y(2, K)), t(O, K, N);
          }, "types");
          if (J)
            return u(" | ", L);
          let Y = q && !w(N.originalText, $), V = [h([Y ? i : "", "| "]), u([i, "| "], L)];
          return g(b, N) ? r([c(V), l]) : M.type === "TupleTypeAnnotation" && M.types.length > 1 || M.type === "TSTupleType" && M.elementTypes.length > 1 ? r([c([h(["(", l]), V]), l, h(")")]) : r(q ? c(V) : V);
        }
        function o(b, N, k) {
          let $ = b.getValue(), M = [], q = b.getParentNode(0), J = b.getParentNode(1), L = b.getParentNode(2), Y = $.type === "TSFunctionType" || !((q.type === "ObjectTypeProperty" || q.type === "ObjectTypeInternalSlot") && !q.variance && !q.optional && p(q) === p($) || q.type === "ObjectTypeCallProperty" || L && L.type === "DeclareFunction"), V = Y && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation"), O = V && Y && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation") && J.type === "ArrowFunctionExpression";
          T(q) && (Y = true, V = true), O && M.push("(");
          let K = B(b, k, N, false, true), se = $.returnType || $.predicate || $.typeAnnotation ? [Y ? " => " : ": ", k("returnType"), k("predicate"), k("typeAnnotation")] : "", Q = I($, se);
          return M.push(Q ? r(K) : K), se && M.push(se), O && M.push(")"), r(M);
        }
        function d(b, N, k) {
          let $ = b.getValue(), M = $.type === "TSTupleType" ? "elementTypes" : "types", q = $[M], J = a(q), L = J ? l : "";
          return r(["[", c([L, P(b, N, M, k)]), h(J && F(N, "all") ? "," : ""), s(b, N, true), L, "]"]);
        }
        function C(b, N, k) {
          let $ = b.getValue(), M = $.type === "OptionalIndexedAccessType" && $.optional ? "?.[" : "[";
          return [k("objectType"), M, k("indexType"), "]"];
        }
        function _(b, N, k) {
          let $ = b.getValue();
          return [$.postfix ? "" : k, N("typeAnnotation"), $.postfix ? k : ""];
        }
        n.exports = { printOpaqueType: f, printTypeAlias: x, printIntersectionType: m, printUnionType: E, printFunctionType: o, printTupleType: d, printIndexedAccessType: C, shouldHugType: R, printJSDocType: _ };
      } }), jr = ee({ "src/language-js/print/type-parameters.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { builders: { join: s, line: a, hardline: r, softline: u, group: i, indent: l, ifBreak: c } } = qe(), { isTestCall: y, hasComment: h, CommentCheckFlags: g, isTSXFile: p, shouldPrintComma: D, getFunctionParameters: v, isObjectType: w } = Ke(), { createGroupIdMapper: T } = Ge(), { shouldHugType: F } = Lr(), { isArrowFunctionVariableDeclarator: A } = Zt(), B = T("typeParameters");
        function I(f, x, m, E) {
          let o = f.getValue();
          if (!o[E])
            return "";
          if (!Array.isArray(o[E]))
            return m(E);
          let d = f.getNode(2), C = d && y(d);
          if (!f.match((k) => !(k[E].length === 1 && w(k[E][0])), void 0, (k, $) => $ === "typeAnnotation", (k) => k.type === "Identifier", A) && (C || o[E].length === 0 || o[E].length === 1 && (o[E][0].type === "NullableTypeAnnotation" || F(o[E][0]))))
            return ["<", s(", ", f.map(m, E)), P(f, x), ">"];
          let N = o.type === "TSTypeParameterInstantiation" ? "" : v(o).length === 1 && p(x) && !o[E][0].constraint && f.getParentNode().type === "ArrowFunctionExpression" ? "," : D(x, "all") ? c(",") : "";
          return i(["<", l([u, s([",", a], f.map(m, E))]), N, u, ">"], { id: B(o) });
        }
        function P(f, x) {
          let m = f.getValue();
          if (!h(m, g.Dangling))
            return "";
          let E = !h(m, g.Line), o = t(f, x, E);
          return E ? o : [o, r];
        }
        function R(f, x, m) {
          let E = f.getValue(), o = [], d = f.getParentNode();
          return d.type === "TSMappedType" ? (o.push("[", m("name")), E.constraint && o.push(" in ", m("constraint")), d.nameType && o.push(" as ", f.callParent(() => m("nameType"))), o.push("]"), o) : (E.variance && o.push(m("variance")), E.in && o.push("in "), E.out && o.push("out "), o.push(m("name")), E.bound && o.push(": ", m("bound")), E.constraint && o.push(" extends ", m("constraint")), E.default && o.push(" = ", m("default")), o);
        }
        n.exports = { printTypeParameter: R, printTypeParameters: I, getTypeParametersGroupId: B };
      } }), er = ee({ "src/language-js/print/property.js"(e, n) {
        "use strict";
        re();
        var { printComments: t } = et(), { printString: s, printNumber: a } = Ge(), { isNumericLiteral: r, isSimpleNumber: u, isStringLiteral: i, isStringPropSafeToUnquote: l, rawText: c } = Ke(), { printAssignment: y } = Zt(), h = /* @__PURE__ */ new WeakMap();
        function g(D, v, w) {
          let T = D.getNode();
          if (T.computed)
            return ["[", w("key"), "]"];
          let F = D.getParentNode(), { key: A } = T;
          if (T.type === "ClassPrivateProperty" && A.type === "Identifier")
            return ["#", w("key")];
          if (v.quoteProps === "consistent" && !h.has(F)) {
            let B = (F.properties || F.body || F.members).some((I) => !I.computed && I.key && i(I.key) && !l(I, v));
            h.set(F, B);
          }
          if ((A.type === "Identifier" || r(A) && u(a(c(A))) && String(A.value) === a(c(A)) && !(v.parser === "typescript" || v.parser === "babel-ts")) && (v.parser === "json" || v.quoteProps === "consistent" && h.get(F))) {
            let B = s(JSON.stringify(A.type === "Identifier" ? A.name : A.value.toString()), v);
            return D.call((I) => t(I, B, v), "key");
          }
          return l(T, v) && (v.quoteProps === "as-needed" || v.quoteProps === "consistent" && !h.get(F)) ? D.call((B) => t(B, /^\d/.test(A.value) ? a(A.value) : A.value, v), "key") : w("key");
        }
        function p(D, v, w) {
          return D.getValue().shorthand ? w("value") : y(D, v, w, g(D, v, w), ":", "value");
        }
        n.exports = { printProperty: p, printPropertyKey: g };
      } }), Or = ee({ "src/language-js/print/function.js"(e, n) {
        "use strict";
        re();
        var t = Yt(), { printDanglingComments: s, printCommentsSeparately: a } = et(), r = lt(), { getNextNonSpaceNonCommentCharacterIndex: u } = Ge(), { builders: { line: i, softline: l, group: c, indent: y, ifBreak: h, hardline: g, join: p, indentIfBreak: D }, utils: { removeLines: v, willBreak: w } } = qe(), { ArgExpansionBailout: T } = Kt(), { getFunctionParameters: F, hasLeadingOwnLineComment: A, isFlowAnnotationComment: B, isJsxNode: I, isTemplateOnItsOwnLine: P, shouldPrintComma: R, startsWithNoLookaheadToken: f, isBinaryish: x, isLineComment: m, hasComment: E, getComments: o, CommentCheckFlags: d, isCallLikeExpression: C, isCallExpression: _, getCallArguments: b, hasNakedLeftSide: N, getLeftSide: k } = Ke(), { locEnd: $ } = it(), { printFunctionParameters: M, shouldGroupFunctionParameters: q } = kr(), { printPropertyKey: J } = er(), { printFunctionTypeParameters: L } = Dt();
        function Y(H, Z, ne, fe) {
          let ge = H.getValue(), Ce = false;
          if ((ge.type === "FunctionDeclaration" || ge.type === "FunctionExpression") && fe && fe.expandLastArg) {
            let ve = H.getParentNode();
            _(ve) && b(ve).length > 1 && (Ce = true);
          }
          let _e = [];
          ge.type === "TSDeclareFunction" && ge.declare && _e.push("declare "), ge.async && _e.push("async "), ge.generator ? _e.push("function* ") : _e.push("function "), ge.id && _e.push(Z("id"));
          let Oe = M(H, Z, ne, Ce), pe = X(H, Z, ne), ie = q(ge, pe);
          return _e.push(L(H, ne, Z), c([ie ? c(Oe) : Oe, pe]), ge.body ? " " : "", Z("body")), ne.semi && (ge.declare || !ge.body) && _e.push(";"), _e;
        }
        function V(H, Z, ne) {
          let fe = H.getNode(), { kind: ge } = fe, Ce = fe.value || fe, _e = [];
          return !ge || ge === "init" || ge === "method" || ge === "constructor" ? Ce.async && _e.push("async ") : (t.ok(ge === "get" || ge === "set"), _e.push(ge, " ")), Ce.generator && _e.push("*"), _e.push(J(H, Z, ne), fe.optional || fe.key.optional ? "?" : ""), fe === Ce ? _e.push(O(H, Z, ne)) : Ce.type === "FunctionExpression" ? _e.push(H.call((Oe) => O(Oe, Z, ne), "value")) : _e.push(ne("value")), _e;
        }
        function O(H, Z, ne) {
          let fe = H.getNode(), ge = M(H, ne, Z), Ce = X(H, ne, Z), _e = q(fe, Ce), Oe = [L(H, Z, ne), c([_e ? c(ge) : ge, Ce])];
          return fe.body ? Oe.push(" ", ne("body")) : Oe.push(Z.semi ? ";" : ""), Oe;
        }
        function K(H, Z, ne, fe) {
          let ge = H.getValue(), Ce = [];
          if (ge.async && Ce.push("async "), W(H, Z))
            Ce.push(ne(["params", 0]));
          else {
            let Oe = fe && (fe.expandLastArg || fe.expandFirstArg), pe = X(H, ne, Z);
            if (Oe) {
              if (w(pe))
                throw new T();
              pe = c(v(pe));
            }
            Ce.push(c([M(H, ne, Z, Oe, true), pe]));
          }
          let _e = s(H, Z, true, (Oe) => {
            let pe = u(Z.originalText, Oe, $);
            return pe !== false && Z.originalText.slice(pe, pe + 2) === "=>";
          });
          return _e && Ce.push(" ", _e), Ce;
        }
        function se(H, Z, ne, fe, ge, Ce) {
          let _e = H.getName(), Oe = H.getParentNode(), pe = C(Oe) && _e === "callee", ie = Boolean(Z && Z.assignmentLayout), ve = Ce.body.type !== "BlockStatement" && Ce.body.type !== "ObjectExpression" && Ce.body.type !== "SequenceExpression", ce = pe && ve || Z && Z.assignmentLayout === "chain-tail-arrow-chain", U = Symbol("arrow-chain");
          return Ce.body.type === "SequenceExpression" && (ge = c(["(", y([l, ge]), l, ")"])), c([c(y([pe || ie ? l : "", c(p([" =>", i], ne), { shouldBreak: fe })]), { id: U, shouldBreak: ce }), " =>", D(ve ? y([i, ge]) : [" ", ge], { groupId: U }), pe ? h(l, "", { groupId: U }) : ""]);
        }
        function Q(H, Z, ne, fe) {
          let ge = H.getValue(), Ce = [], _e = [], Oe = false;
          if (function U() {
            let de = K(H, Z, ne, fe);
            if (Ce.length === 0)
              Ce.push(de);
            else {
              let { leading: De, trailing: he } = a(H, Z);
              Ce.push([De, de]), _e.unshift(he);
            }
            Oe = Oe || ge.returnType && F(ge).length > 0 || ge.typeParameters || F(ge).some((De) => De.type !== "Identifier"), ge.body.type !== "ArrowFunctionExpression" || fe && fe.expandLastArg ? _e.unshift(ne("body", fe)) : (ge = ge.body, H.call(U, "body"));
          }(), Ce.length > 1)
            return se(H, fe, Ce, Oe, _e, ge);
          let pe = Ce;
          if (pe.push(" =>"), !A(Z.originalText, ge.body) && (ge.body.type === "ArrayExpression" || ge.body.type === "ObjectExpression" || ge.body.type === "BlockStatement" || I(ge.body) || P(ge.body, Z.originalText) || ge.body.type === "ArrowFunctionExpression" || ge.body.type === "DoExpression"))
            return c([...pe, " ", _e]);
          if (ge.body.type === "SequenceExpression")
            return c([...pe, c([" (", y([l, _e]), l, ")"])]);
          let ie = (fe && fe.expandLastArg || H.getParentNode().type === "JSXExpressionContainer") && !E(ge), ve = fe && fe.expandLastArg && R(Z, "all"), ce = ge.body.type === "ConditionalExpression" && !f(ge.body, false);
          return c([...pe, c([y([i, ce ? h("", "(") : "", _e, ce ? h("", ")") : ""]), ie ? [h(ve ? "," : ""), l] : ""])]);
        }
        function le(H) {
          let Z = F(H);
          return Z.length === 1 && !H.typeParameters && !E(H, d.Dangling) && Z[0].type === "Identifier" && !Z[0].typeAnnotation && !E(Z[0]) && !Z[0].optional && !H.predicate && !H.returnType;
        }
        function W(H, Z) {
          if (Z.arrowParens === "always")
            return false;
          if (Z.arrowParens === "avoid") {
            let ne = H.getValue();
            return le(ne);
          }
          return false;
        }
        function X(H, Z, ne) {
          let fe = H.getValue(), ge = Z("returnType");
          if (fe.returnType && B(ne.originalText, fe.returnType))
            return [" /*: ", ge, " */"];
          let Ce = [ge];
          return fe.returnType && fe.returnType.typeAnnotation && Ce.unshift(": "), fe.predicate && Ce.push(fe.returnType ? " " : ": ", Z("predicate")), Ce;
        }
        function oe(H, Z, ne) {
          let fe = H.getValue(), ge = Z.semi ? ";" : "", Ce = [];
          fe.argument && (z(Z, fe.argument) ? Ce.push([" (", y([g, ne("argument")]), g, ")"]) : x(fe.argument) || fe.argument.type === "SequenceExpression" ? Ce.push(c([h(" (", " "), y([l, ne("argument")]), l, h(")")])) : Ce.push(" ", ne("argument")));
          let _e = o(fe), Oe = r(_e), pe = Oe && m(Oe);
          return pe && Ce.push(ge), E(fe, d.Dangling) && Ce.push(" ", s(H, Z, true)), pe || Ce.push(ge), Ce;
        }
        function ae(H, Z, ne) {
          return ["return", oe(H, Z, ne)];
        }
        function Ae(H, Z, ne) {
          return ["throw", oe(H, Z, ne)];
        }
        function z(H, Z) {
          if (A(H.originalText, Z))
            return true;
          if (N(Z)) {
            let ne = Z, fe;
            for (; fe = k(ne); )
              if (ne = fe, A(H.originalText, ne))
                return true;
          }
          return false;
        }
        n.exports = { printFunction: Y, printArrowFunction: Q, printMethod: V, printReturnStatement: ae, printThrowStatement: Ae, printMethodInternal: O, shouldPrintParamsWithoutParens: W };
      } }), zn = ee({ "src/language-js/print/decorators.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t, hasNewline: s } = Ge(), { builders: { line: a, hardline: r, join: u, breakParent: i, group: l } } = qe(), { locStart: c, locEnd: y } = it(), { getParentExportDeclaration: h } = Ke();
        function g(T, F, A) {
          let B = T.getValue();
          return l([u(a, T.map(A, "decorators")), v(B, F) ? r : a]);
        }
        function p(T, F, A) {
          return [u(r, T.map(A, "declaration", "decorators")), r];
        }
        function D(T, F, A) {
          let B = T.getValue(), { decorators: I } = B;
          if (!t(I) || w(T.getParentNode()))
            return;
          let P = B.type === "ClassExpression" || B.type === "ClassDeclaration" || v(B, F);
          return [h(T) ? r : P ? i : "", u(a, T.map(A, "decorators")), a];
        }
        function v(T, F) {
          return T.decorators.some((A) => s(F.originalText, y(A)));
        }
        function w(T) {
          if (T.type !== "ExportDefaultDeclaration" && T.type !== "ExportNamedDeclaration" && T.type !== "DeclareExportDeclaration")
            return false;
          let F = T.declaration && T.declaration.decorators;
          return t(F) && c(T) === c(F[0]);
        }
        n.exports = { printDecorators: D, printClassMemberDecorators: g, printDecoratorsBeforeExport: p, hasDecoratorsBeforeExport: w };
      } }), tr = ee({ "src/language-js/print/class.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t, createGroupIdMapper: s } = Ge(), { printComments: a, printDanglingComments: r } = et(), { builders: { join: u, line: i, hardline: l, softline: c, group: y, indent: h, ifBreak: g } } = qe(), { hasComment: p, CommentCheckFlags: D } = Ke(), { getTypeParametersGroupId: v } = jr(), { printMethod: w } = Or(), { printOptionalToken: T, printTypeAnnotation: F, printDefiniteToken: A } = Dt(), { printPropertyKey: B } = er(), { printAssignment: I } = Zt(), { printClassMemberDecorators: P } = zn();
        function R(b, N, k) {
          let $ = b.getValue(), M = [];
          $.declare && M.push("declare "), $.abstract && M.push("abstract "), M.push("class");
          let q = $.id && p($.id, D.Trailing) || $.typeParameters && p($.typeParameters, D.Trailing) || $.superClass && p($.superClass) || t($.extends) || t($.mixins) || t($.implements), J = [], L = [];
          if ($.id && J.push(" ", k("id")), J.push(k("typeParameters")), $.superClass) {
            let Y = [d(b, N, k), k("superTypeParameters")], V = b.call((O) => ["extends ", a(O, Y, N)], "superClass");
            q ? L.push(i, y(V)) : L.push(" ", V);
          } else
            L.push(o(b, N, k, "extends"));
          if (L.push(o(b, N, k, "mixins"), o(b, N, k, "implements")), q) {
            let Y;
            E($) ? Y = [...J, h(L)] : Y = h([...J, L]), M.push(y(Y, { id: f($) }));
          } else
            M.push(...J, ...L);
          return M.push(" ", k("body")), M;
        }
        var f = s("heritageGroup");
        function x(b) {
          return g(l, "", { groupId: f(b) });
        }
        function m(b) {
          return ["superClass", "extends", "mixins", "implements"].filter((N) => Boolean(b[N])).length > 1;
        }
        function E(b) {
          return b.typeParameters && !p(b.typeParameters, D.Trailing | D.Line) && !m(b);
        }
        function o(b, N, k, $) {
          let M = b.getValue();
          if (!t(M[$]))
            return "";
          let q = r(b, N, true, (J) => {
            let { marker: L } = J;
            return L === $;
          });
          return [E(M) ? g(" ", i, { groupId: v(M.typeParameters) }) : i, q, q && l, $, y(h([i, u([",", i], b.map(k, $))]))];
        }
        function d(b, N, k) {
          let $ = k("superClass");
          return b.getParentNode().type === "AssignmentExpression" ? y(g(["(", h([c, $]), c, ")"], $)) : $;
        }
        function C(b, N, k) {
          let $ = b.getValue(), M = [];
          return t($.decorators) && M.push(P(b, N, k)), $.accessibility && M.push($.accessibility + " "), $.readonly && M.push("readonly "), $.declare && M.push("declare "), $.static && M.push("static "), ($.type === "TSAbstractMethodDefinition" || $.abstract) && M.push("abstract "), $.override && M.push("override "), M.push(w(b, N, k)), M;
        }
        function _(b, N, k) {
          let $ = b.getValue(), M = [], q = N.semi ? ";" : "";
          return t($.decorators) && M.push(P(b, N, k)), $.accessibility && M.push($.accessibility + " "), $.declare && M.push("declare "), $.static && M.push("static "), ($.type === "TSAbstractPropertyDefinition" || $.abstract) && M.push("abstract "), $.override && M.push("override "), $.readonly && M.push("readonly "), $.variance && M.push(k("variance")), $.type === "ClassAccessorProperty" && M.push("accessor "), M.push(B(b, N, k), T(b), A(b), F(b, N, k)), [I(b, N, k, M, " =", "value"), q];
        }
        n.exports = { printClass: R, printClassMethod: C, printClassProperty: _, printHardlineAfterHeritage: x };
      } }), uo = ee({ "src/language-js/print/interface.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t } = Ge(), { builders: { join: s, line: a, group: r, indent: u, ifBreak: i } } = qe(), { hasComment: l, identity: c, CommentCheckFlags: y } = Ke(), { getTypeParametersGroupId: h } = jr(), { printTypeScriptModifiers: g } = Dt();
        function p(D, v, w) {
          let T = D.getValue(), F = [];
          T.declare && F.push("declare "), T.type === "TSInterfaceDeclaration" && F.push(T.abstract ? "abstract " : "", g(D, v, w)), F.push("interface");
          let A = [], B = [];
          T.type !== "InterfaceTypeAnnotation" && A.push(" ", w("id"), w("typeParameters"));
          let I = T.typeParameters && !l(T.typeParameters, y.Trailing | y.Line);
          return t(T.extends) && B.push(I ? i(" ", a, { groupId: h(T.typeParameters) }) : a, "extends ", (T.extends.length === 1 ? c : u)(s([",", a], D.map(w, "extends")))), T.id && l(T.id, y.Trailing) || t(T.extends) ? I ? F.push(r([...A, u(B)])) : F.push(r(u([...A, ...B]))) : F.push(...A, ...B), F.push(" ", w("body")), r(F);
        }
        n.exports = { printInterface: p };
      } }), so = ee({ "src/language-js/print/module.js"(e, n) {
        "use strict";
        re();
        var { isNonEmptyArray: t } = Ge(), { builders: { softline: s, group: a, indent: r, join: u, line: i, ifBreak: l, hardline: c } } = qe(), { printDanglingComments: y } = et(), { hasComment: h, CommentCheckFlags: g, shouldPrintComma: p, needsHardlineAfterDanglingComment: D, isStringLiteral: v, rawText: w } = Ke(), { locStart: T, hasSameLoc: F } = it(), { hasDecoratorsBeforeExport: A, printDecoratorsBeforeExport: B } = zn();
        function I(_, b, N) {
          let k = _.getValue(), $ = b.semi ? ";" : "", M = [], { importKind: q } = k;
          return M.push("import"), q && q !== "value" && M.push(" ", q), M.push(m(_, b, N), x(_, b, N), o(_, b, N), $), M;
        }
        function P(_, b, N) {
          let k = _.getValue(), $ = [];
          A(k) && $.push(B(_, b, N));
          let { type: M, exportKind: q, declaration: J } = k;
          return $.push("export"), (k.default || M === "ExportDefaultDeclaration") && $.push(" default"), h(k, g.Dangling) && ($.push(" ", y(_, b, true)), D(k) && $.push(c)), J ? $.push(" ", N("declaration")) : $.push(q === "type" ? " type" : "", m(_, b, N), x(_, b, N), o(_, b, N)), f(k, b) && $.push(";"), $;
        }
        function R(_, b, N) {
          let k = _.getValue(), $ = b.semi ? ";" : "", M = [], { exportKind: q, exported: J } = k;
          return M.push("export"), q === "type" && M.push(" type"), M.push(" *"), J && M.push(" as ", N("exported")), M.push(x(_, b, N), o(_, b, N), $), M;
        }
        function f(_, b) {
          if (!b.semi)
            return false;
          let { type: N, declaration: k } = _, $ = _.default || N === "ExportDefaultDeclaration";
          if (!k)
            return true;
          let { type: M } = k;
          return !!($ && M !== "ClassDeclaration" && M !== "FunctionDeclaration" && M !== "TSInterfaceDeclaration" && M !== "DeclareClass" && M !== "DeclareFunction" && M !== "TSDeclareFunction" && M !== "EnumDeclaration");
        }
        function x(_, b, N) {
          let k = _.getValue();
          if (!k.source)
            return "";
          let $ = [];
          return E(k, b) || $.push(" from"), $.push(" ", N("source")), $;
        }
        function m(_, b, N) {
          let k = _.getValue();
          if (E(k, b))
            return "";
          let $ = [" "];
          if (t(k.specifiers)) {
            let M = [], q = [];
            _.each(() => {
              let J = _.getValue().type;
              if (J === "ExportNamespaceSpecifier" || J === "ExportDefaultSpecifier" || J === "ImportNamespaceSpecifier" || J === "ImportDefaultSpecifier")
                M.push(N());
              else if (J === "ExportSpecifier" || J === "ImportSpecifier")
                q.push(N());
              else
                throw new Error(`Unknown specifier type ${JSON.stringify(J)}`);
            }, "specifiers"), $.push(u(", ", M)), q.length > 0 && (M.length > 0 && $.push(", "), q.length > 1 || M.length > 0 || k.specifiers.some((L) => h(L)) ? $.push(a(["{", r([b.bracketSpacing ? i : s, u([",", i], q)]), l(p(b) ? "," : ""), b.bracketSpacing ? i : s, "}"])) : $.push(["{", b.bracketSpacing ? " " : "", ...q, b.bracketSpacing ? " " : "", "}"]));
          } else
            $.push("{}");
          return $;
        }
        function E(_, b) {
          let { type: N, importKind: k, source: $, specifiers: M } = _;
          return N !== "ImportDeclaration" || t(M) || k === "type" ? false : !/{\s*}/.test(b.originalText.slice(T(_), T($)));
        }
        function o(_, b, N) {
          let k = _.getNode();
          return t(k.assertions) ? [" assert {", b.bracketSpacing ? " " : "", u(", ", _.map(N, "assertions")), b.bracketSpacing ? " " : "", "}"] : "";
        }
        function d(_, b, N) {
          let k = _.getNode(), { type: $ } = k, M = [], q = $ === "ImportSpecifier" ? k.importKind : k.exportKind;
          q && q !== "value" && M.push(q, " ");
          let J = $.startsWith("Import"), L = J ? "imported" : "local", Y = J ? "local" : "exported", V = k[L], O = k[Y], K = "", se = "";
          return $ === "ExportNamespaceSpecifier" || $ === "ImportNamespaceSpecifier" ? K = "*" : V && (K = N(L)), O && !C(k) && (se = N(Y)), M.push(K, K && se ? " as " : "", se), M;
        }
        function C(_) {
          if (_.type !== "ImportSpecifier" && _.type !== "ExportSpecifier")
            return false;
          let { local: b, [_.type === "ImportSpecifier" ? "imported" : "exported"]: N } = _;
          if (b.type !== N.type || !F(b, N))
            return false;
          if (v(b))
            return b.value === N.value && w(b) === w(N);
          switch (b.type) {
            case "Identifier":
              return b.name === N.name;
            default:
              return false;
          }
        }
        n.exports = { printImportDeclaration: I, printExportDeclaration: P, printExportAllDeclaration: R, printModuleSpecifier: d };
      } }), Xn = ee({ "src/language-js/print/object.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { builders: { line: s, softline: a, group: r, indent: u, ifBreak: i, hardline: l } } = qe(), { getLast: c, hasNewlineInRange: y, hasNewline: h, isNonEmptyArray: g } = Ge(), { shouldPrintComma: p, hasComment: D, getComments: v, CommentCheckFlags: w, isNextLineEmpty: T } = Ke(), { locStart: F, locEnd: A } = it(), { printOptionalToken: B, printTypeAnnotation: I } = Dt(), { shouldHugFunctionParameters: P } = kr(), { shouldHugType: R } = Lr(), { printHardlineAfterHeritage: f } = tr();
        function x(m, E, o) {
          let d = E.semi ? ";" : "", C = m.getValue(), _;
          C.type === "TSTypeLiteral" ? _ = "members" : C.type === "TSInterfaceBody" ? _ = "body" : _ = "properties";
          let b = C.type === "ObjectTypeAnnotation", N = [_];
          b && N.push("indexers", "callProperties", "internalSlots");
          let k = N.map((W) => C[W][0]).sort((W, X) => F(W) - F(X))[0], $ = m.getParentNode(0), M = b && $ && ($.type === "InterfaceDeclaration" || $.type === "DeclareInterface" || $.type === "DeclareClass") && m.getName() === "body", q = C.type === "TSInterfaceBody" || M || C.type === "ObjectPattern" && $.type !== "FunctionDeclaration" && $.type !== "FunctionExpression" && $.type !== "ArrowFunctionExpression" && $.type !== "ObjectMethod" && $.type !== "ClassMethod" && $.type !== "ClassPrivateMethod" && $.type !== "AssignmentPattern" && $.type !== "CatchClause" && C.properties.some((W) => W.value && (W.value.type === "ObjectPattern" || W.value.type === "ArrayPattern")) || C.type !== "ObjectPattern" && k && y(E.originalText, F(C), F(k)), J = M ? ";" : C.type === "TSInterfaceBody" || C.type === "TSTypeLiteral" ? i(d, ";") : ",", L = C.type === "RecordExpression" ? "#{" : C.exact ? "{|" : "{", Y = C.exact ? "|}" : "}", V = [];
          for (let W of N)
            m.each((X) => {
              let oe = X.getValue();
              V.push({ node: oe, printed: o(), loc: F(oe) });
            }, W);
          N.length > 1 && V.sort((W, X) => W.loc - X.loc);
          let O = [], K = V.map((W) => {
            let X = [...O, r(W.printed)];
            return O = [J, s], (W.node.type === "TSPropertySignature" || W.node.type === "TSMethodSignature" || W.node.type === "TSConstructSignatureDeclaration") && D(W.node, w.PrettierIgnore) && O.shift(), T(W.node, E) && O.push(l), X;
          });
          if (C.inexact) {
            let W;
            if (D(C, w.Dangling)) {
              let X = D(C, w.Line);
              W = [t(m, E, true), X || h(E.originalText, A(c(v(C)))) ? l : s, "..."];
            } else
              W = ["..."];
            K.push([...O, ...W]);
          }
          let se = c(C[_]), Q = !(C.inexact || se && se.type === "RestElement" || se && (se.type === "TSPropertySignature" || se.type === "TSCallSignatureDeclaration" || se.type === "TSMethodSignature" || se.type === "TSConstructSignatureDeclaration") && D(se, w.PrettierIgnore)), le;
          if (K.length === 0) {
            if (!D(C, w.Dangling))
              return [L, Y, I(m, E, o)];
            le = r([L, t(m, E), a, Y, B(m), I(m, E, o)]);
          } else
            le = [M && g(C.properties) ? f($) : "", L, u([E.bracketSpacing ? s : a, ...K]), i(Q && (J !== "," || p(E)) ? J : ""), E.bracketSpacing ? s : a, Y, B(m), I(m, E, o)];
          return m.match((W) => W.type === "ObjectPattern" && !W.decorators, (W, X, oe) => P(W) && (X === "params" || X === "parameters" || X === "this" || X === "rest") && oe === 0) || m.match(R, (W, X) => X === "typeAnnotation", (W, X) => X === "typeAnnotation", (W, X, oe) => P(W) && (X === "params" || X === "parameters" || X === "this" || X === "rest") && oe === 0) || !q && m.match((W) => W.type === "ObjectPattern", (W) => W.type === "AssignmentExpression" || W.type === "VariableDeclarator") ? le : r(le, { shouldBreak: q });
        }
        n.exports = { printObject: x };
      } }), Vm = ee({ "src/language-js/print/flow.js"(e, n) {
        "use strict";
        re();
        var t = Yt(), { printDanglingComments: s } = et(), { printString: a, printNumber: r } = Ge(), { builders: { hardline: u, softline: i, group: l, indent: c } } = qe(), { getParentExportDeclaration: y, isFunctionNotation: h, isGetterOrSetter: g, rawText: p, shouldPrintComma: D } = Ke(), { locStart: v, locEnd: w } = it(), { replaceTextEndOfLine: T } = Xt(), { printClass: F } = tr(), { printOpaqueType: A, printTypeAlias: B, printIntersectionType: I, printUnionType: P, printFunctionType: R, printTupleType: f, printIndexedAccessType: x } = Lr(), { printInterface: m } = uo(), { printTypeParameter: E, printTypeParameters: o } = jr(), { printExportDeclaration: d, printExportAllDeclaration: C } = so(), { printArrayItems: _ } = Qt(), { printObject: b } = Xn(), { printPropertyKey: N } = er(), { printOptionalToken: k, printTypeAnnotation: $, printRestSpread: M } = Dt();
        function q(L, Y, V) {
          let O = L.getValue(), K = Y.semi ? ";" : "", se = [];
          switch (O.type) {
            case "DeclareClass":
              return J(L, F(L, Y, V));
            case "DeclareFunction":
              return J(L, ["function ", V("id"), O.predicate ? " " : "", V("predicate"), K]);
            case "DeclareModule":
              return J(L, ["module ", V("id"), " ", V("body")]);
            case "DeclareModuleExports":
              return J(L, ["module.exports", ": ", V("typeAnnotation"), K]);
            case "DeclareVariable":
              return J(L, ["var ", V("id"), K]);
            case "DeclareOpaqueType":
              return J(L, A(L, Y, V));
            case "DeclareInterface":
              return J(L, m(L, Y, V));
            case "DeclareTypeAlias":
              return J(L, B(L, Y, V));
            case "DeclareExportDeclaration":
              return J(L, d(L, Y, V));
            case "DeclareExportAllDeclaration":
              return J(L, C(L, Y, V));
            case "OpaqueType":
              return A(L, Y, V);
            case "TypeAlias":
              return B(L, Y, V);
            case "IntersectionTypeAnnotation":
              return I(L, Y, V);
            case "UnionTypeAnnotation":
              return P(L, Y, V);
            case "FunctionTypeAnnotation":
              return R(L, Y, V);
            case "TupleTypeAnnotation":
              return f(L, Y, V);
            case "GenericTypeAnnotation":
              return [V("id"), o(L, Y, V, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return x(L, Y, V);
            case "TypeAnnotation":
              return V("typeAnnotation");
            case "TypeParameter":
              return E(L, Y, V);
            case "TypeofTypeAnnotation":
              return ["typeof ", V("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [V("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(O.value);
            case "EnumDeclaration":
              return ["enum ", V("id"), " ", V("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (O.type === "EnumSymbolBody" || O.explicitType) {
                let Q = null;
                switch (O.type) {
                  case "EnumBooleanBody":
                    Q = "boolean";
                    break;
                  case "EnumNumberBody":
                    Q = "number";
                    break;
                  case "EnumStringBody":
                    Q = "string";
                    break;
                  case "EnumSymbolBody":
                    Q = "symbol";
                    break;
                }
                se.push("of ", Q, " ");
              }
              if (O.members.length === 0 && !O.hasUnknownMembers)
                se.push(l(["{", s(L, Y), i, "}"]));
              else {
                let Q = O.members.length > 0 ? [u, _(L, Y, "members", V), O.hasUnknownMembers || D(Y) ? "," : ""] : [];
                se.push(l(["{", c([...Q, ...O.hasUnknownMembers ? [u, "..."] : []]), s(L, Y, true), u, "}"]));
              }
              return se;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [V("id"), " = ", typeof O.init == "object" ? V("init") : String(O.init)];
            case "EnumDefaultedMember":
              return V("id");
            case "FunctionTypeParam": {
              let Q = O.name ? V("name") : L.getParentNode().this === O ? "this" : "";
              return [Q, k(L), Q ? ": " : "", V("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return m(L, Y, V);
            case "ClassImplements":
            case "InterfaceExtends":
              return [V("id"), V("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", V("typeAnnotation")];
            case "Variance": {
              let { kind: Q } = O;
              return t.ok(Q === "plus" || Q === "minus"), Q === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return O.static && se.push("static "), se.push(V("value")), se;
            case "ObjectTypeIndexer":
              return [O.static ? "static " : "", O.variance ? V("variance") : "", "[", V("id"), O.id ? ": " : "", V("key"), "]: ", V("value")];
            case "ObjectTypeProperty": {
              let Q = "";
              return O.proto ? Q = "proto " : O.static && (Q = "static "), [Q, g(O) ? O.kind + " " : "", O.variance ? V("variance") : "", N(L, Y, V), k(L), h(O) ? "" : ": ", V("value")];
            }
            case "ObjectTypeAnnotation":
              return b(L, Y, V);
            case "ObjectTypeInternalSlot":
              return [O.static ? "static " : "", "[[", V("id"), "]]", k(L), O.method ? "" : ": ", V("value")];
            case "ObjectTypeSpreadProperty":
              return M(L, Y, V);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [V("qualification"), ".", V("id")];
            case "StringLiteralTypeAnnotation":
              return T(a(p(O), Y));
            case "NumberLiteralTypeAnnotation":
              t.strictEqual(typeof O.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return O.extra ? r(O.extra.raw) : r(O.raw);
            case "TypeCastExpression":
              return ["(", V("expression"), $(L, Y, V), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let Q = o(L, Y, V, "params");
              if (Y.parser === "flow") {
                let le = v(O), W = w(O), X = Y.originalText.lastIndexOf("/*", le), oe = Y.originalText.indexOf("*/", W);
                if (X !== -1 && oe !== -1) {
                  let ae = Y.originalText.slice(X + 2, oe).trim();
                  if (ae.startsWith("::") && !ae.includes("/*") && !ae.includes("*/"))
                    return ["/*:: ", Q, " */"];
                }
              }
              return Q;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", V("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(O.type));
          }
        }
        function J(L, Y) {
          let V = y(L);
          return V ? (t.strictEqual(V.type, "DeclareExportDeclaration"), Y) : ["declare ", Y];
        }
        n.exports = { printFlow: q };
      } }), Wm = ee({ "src/language-js/utils/is-ts-keyword-type.js"(e, n) {
        "use strict";
        re();
        function t(s) {
          let { type: a } = s;
          return a.startsWith("TS") && a.endsWith("Keyword");
        }
        n.exports = t;
      } }), io = ee({ "src/language-js/print/ternary.js"(e, n) {
        "use strict";
        re();
        var { hasNewlineInRange: t } = Ge(), { isJsxNode: s, getComments: a, isCallExpression: r, isMemberExpression: u, isTSTypeExpression: i } = Ke(), { locStart: l, locEnd: c } = it(), y = Lt(), { builders: { line: h, softline: g, group: p, indent: D, align: v, ifBreak: w, dedent: T, breakParent: F } } = qe();
        function A(f) {
          let x = [f];
          for (let m = 0; m < x.length; m++) {
            let E = x[m];
            for (let o of ["test", "consequent", "alternate"]) {
              let d = E[o];
              if (s(d))
                return true;
              d.type === "ConditionalExpression" && x.push(d);
            }
          }
          return false;
        }
        function B(f, x, m) {
          let E = f.getValue(), o = E.type === "ConditionalExpression", d = o ? "alternate" : "falseType", C = f.getParentNode(), _ = o ? m("test") : [m("checkType"), " ", "extends", " ", m("extendsType")];
          return C.type === E.type && C[d] === E ? v(2, _) : _;
        }
        var I = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function P(f) {
          let x = f.getValue();
          if (x.type !== "ConditionalExpression")
            return false;
          let m, E = x;
          for (let o = 0; !m; o++) {
            let d = f.getParentNode(o);
            if (r(d) && d.callee === E || u(d) && d.object === E || d.type === "TSNonNullExpression" && d.expression === E) {
              E = d;
              continue;
            }
            d.type === "NewExpression" && d.callee === E || i(d) && d.expression === E ? (m = f.getParentNode(o + 1), E = d) : m = d;
          }
          return E === x ? false : m[I.get(m.type)] === E;
        }
        function R(f, x, m) {
          let E = f.getValue(), o = E.type === "ConditionalExpression", d = o ? "consequent" : "trueType", C = o ? "alternate" : "falseType", _ = o ? ["test"] : ["checkType", "extendsType"], b = E[d], N = E[C], k = [], $ = false, M = f.getParentNode(), q = M.type === E.type && _.some((ae) => M[ae] === E), J = M.type === E.type && !q, L, Y, V = 0;
          do
            Y = L || E, L = f.getParentNode(V), V++;
          while (L && L.type === E.type && _.every((ae) => L[ae] !== Y));
          let O = L || M, K = Y;
          if (o && (s(E[_[0]]) || s(b) || s(N) || A(K))) {
            $ = true, J = true;
            let ae = (z) => [w("("), D([g, z]), g, w(")")], Ae = (z) => z.type === "NullLiteral" || z.type === "Literal" && z.value === null || z.type === "Identifier" && z.name === "undefined";
            k.push(" ? ", Ae(b) ? m(d) : ae(m(d)), " : ", N.type === E.type || Ae(N) ? m(C) : ae(m(C)));
          } else {
            let ae = [h, "? ", b.type === E.type ? w("", "(") : "", v(2, m(d)), b.type === E.type ? w("", ")") : "", h, ": ", N.type === E.type ? m(C) : v(2, m(C))];
            k.push(M.type !== E.type || M[C] === E || q ? ae : x.useTabs ? T(D(ae)) : v(Math.max(0, x.tabWidth - 2), ae));
          }
          let Q = [..._.map((ae) => a(E[ae])), a(b), a(N)].flat().some((ae) => y(ae) && t(x.originalText, l(ae), c(ae))), le = (ae) => M === O ? p(ae, { shouldBreak: Q }) : Q ? [ae, F] : ae, W = !$ && (u(M) || M.type === "NGPipeExpression" && M.left === E) && !M.computed, X = P(f), oe = le([B(f, x, m), J ? k : D(k), o && W && !X ? g : ""]);
          return q || X ? p([D([g, oe]), g]) : oe;
        }
        n.exports = { printTernary: R };
      } }), ao = ee({ "src/language-js/print/statement.js"(e, n) {
        "use strict";
        re();
        var { builders: { hardline: t } } = qe(), s = Ot(), { getLeftSidePathName: a, hasNakedLeftSide: r, isJsxNode: u, isTheOnlyJsxElementInMarkdown: i, hasComment: l, CommentCheckFlags: c, isNextLineEmpty: y } = Ke(), { shouldPrintParamsWithoutParens: h } = Or();
        function g(B, I, P, R) {
          let f = B.getValue(), x = [], m = f.type === "ClassBody", E = p(f[R]);
          return B.each((o, d, C) => {
            let _ = o.getValue();
            if (_.type === "EmptyStatement")
              return;
            let b = P();
            !I.semi && !m && !i(I, o) && D(o, I) ? l(_, c.Leading) ? x.push(P([], { needsSemi: true })) : x.push(";", b) : x.push(b), !I.semi && m && F(_) && A(_, C[d + 1]) && x.push(";"), _ !== E && (x.push(t), y(_, I) && x.push(t));
          }, R), x;
        }
        function p(B) {
          for (let I = B.length - 1; I >= 0; I--) {
            let P = B[I];
            if (P.type !== "EmptyStatement")
              return P;
          }
        }
        function D(B, I) {
          return B.getNode().type !== "ExpressionStatement" ? false : B.call((R) => v(R, I), "expression");
        }
        function v(B, I) {
          let P = B.getValue();
          switch (P.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return true;
            case "ArrowFunctionExpression": {
              if (!h(B, I))
                return true;
              break;
            }
            case "UnaryExpression": {
              let { prefix: R, operator: f } = P;
              if (R && (f === "+" || f === "-"))
                return true;
              break;
            }
            case "BindExpression": {
              if (!P.object)
                return true;
              break;
            }
            case "Literal": {
              if (P.regex)
                return true;
              break;
            }
            default:
              if (u(P))
                return true;
          }
          return s(B, I) ? true : r(P) ? B.call((R) => v(R, I), ...a(B, P)) : false;
        }
        function w(B, I, P) {
          return g(B, I, P, "body");
        }
        function T(B, I, P) {
          return g(B, I, P, "consequent");
        }
        var F = (B) => {
          let { type: I } = B;
          return I === "ClassProperty" || I === "PropertyDefinition" || I === "ClassPrivateProperty" || I === "ClassAccessorProperty";
        };
        function A(B, I) {
          let P = B.key && B.key.name;
          if ((P === "static" || P === "get" || P === "set") && !B.value && !B.typeAnnotation)
            return true;
          if (!I || I.static || I.accessibility)
            return false;
          if (!I.computed) {
            let R = I.key && I.key.name;
            if (R === "in" || R === "instanceof")
              return true;
          }
          if (F(I) && I.variance && !I.static && !I.declare)
            return true;
          switch (I.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return I.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((I.value ? I.value.async : I.async) || I.kind === "get" || I.kind === "set")
                return false;
              let f = I.value ? I.value.generator : I.generator;
              return !!(I.computed || f);
            }
            case "TSIndexSignature":
              return true;
          }
          return false;
        }
        n.exports = { printBody: w, printSwitchCaseConsequent: T };
      } }), oo = ee({ "src/language-js/print/block.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { isNonEmptyArray: s } = Ge(), { builders: { hardline: a, indent: r } } = qe(), { hasComment: u, CommentCheckFlags: i, isNextLineEmpty: l } = Ke(), { printHardlineAfterHeritage: c } = tr(), { printBody: y } = ao();
        function h(p, D, v) {
          let w = p.getValue(), T = [];
          if (w.type === "StaticBlock" && T.push("static "), w.type === "ClassBody" && s(w.body)) {
            let A = p.getParentNode();
            T.push(c(A));
          }
          T.push("{");
          let F = g(p, D, v);
          if (F)
            T.push(r([a, F]), a);
          else {
            let A = p.getParentNode(), B = p.getParentNode(1);
            A.type === "ArrowFunctionExpression" || A.type === "FunctionExpression" || A.type === "FunctionDeclaration" || A.type === "ObjectMethod" || A.type === "ClassMethod" || A.type === "ClassPrivateMethod" || A.type === "ForStatement" || A.type === "WhileStatement" || A.type === "DoWhileStatement" || A.type === "DoExpression" || A.type === "CatchClause" && !B.finalizer || A.type === "TSModuleDeclaration" || A.type === "TSDeclareFunction" || w.type === "StaticBlock" || w.type === "ClassBody" || T.push(a);
          }
          return T.push("}"), T;
        }
        function g(p, D, v) {
          let w = p.getValue(), T = s(w.directives), F = w.body.some((I) => I.type !== "EmptyStatement"), A = u(w, i.Dangling);
          if (!T && !F && !A)
            return "";
          let B = [];
          if (T && p.each((I, P, R) => {
            B.push(v()), (P < R.length - 1 || F || A) && (B.push(a), l(I.getValue(), D) && B.push(a));
          }, "directives"), F && B.push(y(p, D, v)), A && B.push(t(p, D, true)), w.type === "Program") {
            let I = p.getParentNode();
            (!I || I.type !== "ModuleExpression") && B.push(a);
          }
          return B;
        }
        n.exports = { printBlock: h, printBlockBody: g };
      } }), Hm = ee({ "src/language-js/print/typescript.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { hasNewlineInRange: s } = Ge(), { builders: { join: a, line: r, hardline: u, softline: i, group: l, indent: c, conditionalGroup: y, ifBreak: h } } = qe(), { isLiteral: g, getTypeScriptMappedTypeModifier: p, shouldPrintComma: D, isCallExpression: v, isMemberExpression: w } = Ke(), T = Wm(), { locStart: F, locEnd: A } = it(), { printOptionalToken: B, printTypeScriptModifiers: I } = Dt(), { printTernary: P } = io(), { printFunctionParameters: R, shouldGroupFunctionParameters: f } = kr(), { printTemplateLiteral: x } = jt(), { printArrayItems: m } = Qt(), { printObject: E } = Xn(), { printClassProperty: o, printClassMethod: d } = tr(), { printTypeParameter: C, printTypeParameters: _ } = jr(), { printPropertyKey: b } = er(), { printFunction: N, printMethodInternal: k } = Or(), { printInterface: $ } = uo(), { printBlock: M } = oo(), { printTypeAlias: q, printIntersectionType: J, printUnionType: L, printFunctionType: Y, printTupleType: V, printIndexedAccessType: O, printJSDocType: K } = Lr();
        function se(Q, le, W) {
          let X = Q.getValue();
          if (!X.type.startsWith("TS"))
            return;
          if (T(X))
            return X.type.slice(2, -7).toLowerCase();
          let oe = le.semi ? ";" : "", ae = [];
          switch (X.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let Ae = !(X.expression.type === "ArrayExpression" || X.expression.type === "ObjectExpression"), z = l(["<", c([i, W("typeAnnotation")]), i, ">"]), H = [h("("), c([i, W("expression")]), i, h(")")];
              return Ae ? y([[z, W("expression")], [z, l(H, { shouldBreak: true })], [z, W("expression")]]) : l([z, W("expression")]);
            }
            case "TSDeclareFunction":
              return N(Q, W, le);
            case "TSExportAssignment":
              return ["export = ", W("expression"), oe];
            case "TSModuleBlock":
              return M(Q, le, W);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return E(Q, le, W);
            case "TSTypeAliasDeclaration":
              return q(Q, le, W);
            case "TSQualifiedName":
              return a(".", [W("left"), W("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return d(Q, le, W);
            case "TSAbstractPropertyDefinition":
              return o(Q, le, W);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return ae.push(W("expression")), X.typeParameters && ae.push(W("typeParameters")), ae;
            case "TSTemplateLiteralType":
              return x(Q, W, le);
            case "TSNamedTupleMember":
              return [W("label"), X.optional ? "?" : "", ": ", W("elementType")];
            case "TSRestType":
              return ["...", W("typeAnnotation")];
            case "TSOptionalType":
              return [W("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return $(Q, le, W);
            case "TSClassImplements":
              return [W("expression"), W("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return _(Q, le, W, "params");
            case "TSTypeParameter":
              return C(Q, le, W);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
              let Ae = X.type === "TSAsExpression" ? "as" : "satisfies";
              ae.push(W("expression"), ` ${Ae} `, W("typeAnnotation"));
              let z = Q.getParentNode();
              return v(z) && z.callee === X || w(z) && z.object === X ? l([c([i, ...ae]), i]) : ae;
            }
            case "TSArrayType":
              return [W("elementType"), "[]"];
            case "TSPropertySignature":
              return X.readonly && ae.push("readonly "), ae.push(b(Q, le, W), B(Q)), X.typeAnnotation && ae.push(": ", W("typeAnnotation")), X.initializer && ae.push(" = ", W("initializer")), ae;
            case "TSParameterProperty":
              return X.accessibility && ae.push(X.accessibility + " "), X.export && ae.push("export "), X.static && ae.push("static "), X.override && ae.push("override "), X.readonly && ae.push("readonly "), ae.push(W("parameter")), ae;
            case "TSTypeQuery":
              return ["typeof ", W("exprName"), W("typeParameters")];
            case "TSIndexSignature": {
              let Ae = Q.getParentNode(), z = X.parameters.length > 1 ? h(D(le) ? "," : "") : "", H = l([c([i, a([", ", i], Q.map(W, "parameters"))]), z, i]);
              return [X.export ? "export " : "", X.accessibility ? [X.accessibility, " "] : "", X.static ? "static " : "", X.readonly ? "readonly " : "", X.declare ? "declare " : "", "[", X.parameters ? H : "", X.typeAnnotation ? "]: " : "]", X.typeAnnotation ? W("typeAnnotation") : "", Ae.type === "ClassBody" ? oe : ""];
            }
            case "TSTypePredicate":
              return [X.asserts ? "asserts " : "", W("parameterName"), X.typeAnnotation ? [" is ", W("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [W("expression"), "!"];
            case "TSImportType":
              return [X.isTypeOf ? "typeof " : "", "import(", W(X.parameter ? "parameter" : "argument"), ")", X.qualifier ? [".", W("qualifier")] : "", _(Q, le, W, "typeParameters")];
            case "TSLiteralType":
              return W("literal");
            case "TSIndexedAccessType":
              return O(Q, le, W);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (X.type === "TSConstructorType" && X.abstract && ae.push("abstract "), X.type !== "TSCallSignatureDeclaration" && ae.push("new "), ae.push(l(R(Q, W, le, false, true))), X.returnType || X.typeAnnotation) {
                let Ae = X.type === "TSConstructorType";
                ae.push(Ae ? " => " : ": ", W("returnType"), W("typeAnnotation"));
              }
              return ae;
            }
            case "TSTypeOperator":
              return [X.operator, " ", W("typeAnnotation")];
            case "TSMappedType": {
              let Ae = s(le.originalText, F(X), A(X));
              return l(["{", c([le.bracketSpacing ? r : i, X.readonly ? [p(X.readonly, "readonly"), " "] : "", I(Q, le, W), W("typeParameter"), X.optional ? p(X.optional, "?") : "", X.typeAnnotation ? ": " : "", W("typeAnnotation"), h(oe)]), t(Q, le, true), le.bracketSpacing ? r : i, "}"], { shouldBreak: Ae });
            }
            case "TSMethodSignature": {
              let Ae = X.kind && X.kind !== "method" ? `${X.kind} ` : "";
              ae.push(X.accessibility ? [X.accessibility, " "] : "", Ae, X.export ? "export " : "", X.static ? "static " : "", X.readonly ? "readonly " : "", X.abstract ? "abstract " : "", X.declare ? "declare " : "", X.computed ? "[" : "", W("key"), X.computed ? "]" : "", B(Q));
              let z = R(Q, W, le, false, true), H = X.returnType ? "returnType" : "typeAnnotation", Z = X[H], ne = Z ? W(H) : "", fe = f(X, ne);
              return ae.push(fe ? l(z) : z), Z && ae.push(": ", l(ne)), l(ae);
            }
            case "TSNamespaceExportDeclaration":
              return ae.push("export as namespace ", W("id")), le.semi && ae.push(";"), l(ae);
            case "TSEnumDeclaration":
              return X.declare && ae.push("declare "), X.modifiers && ae.push(I(Q, le, W)), X.const && ae.push("const "), ae.push("enum ", W("id"), " "), X.members.length === 0 ? ae.push(l(["{", t(Q, le), i, "}"])) : ae.push(l(["{", c([u, m(Q, le, "members", W), D(le, "es5") ? "," : ""]), t(Q, le, true), u, "}"])), ae;
            case "TSEnumMember":
              return X.computed ? ae.push("[", W("id"), "]") : ae.push(W("id")), X.initializer && ae.push(" = ", W("initializer")), ae;
            case "TSImportEqualsDeclaration":
              return X.isExport && ae.push("export "), ae.push("import "), X.importKind && X.importKind !== "value" && ae.push(X.importKind, " "), ae.push(W("id"), " = ", W("moduleReference")), le.semi && ae.push(";"), l(ae);
            case "TSExternalModuleReference":
              return ["require(", W("expression"), ")"];
            case "TSModuleDeclaration": {
              let Ae = Q.getParentNode(), z = g(X.id), H = Ae.type === "TSModuleDeclaration", Z = X.body && X.body.type === "TSModuleDeclaration";
              if (H)
                ae.push(".");
              else {
                X.declare && ae.push("declare "), ae.push(I(Q, le, W));
                let ne = le.originalText.slice(F(X), F(X.id));
                X.id.type === "Identifier" && X.id.name === "global" && !/namespace|module/.test(ne) || ae.push(z || /(?:^|\s)module(?:\s|$)/.test(ne) ? "module " : "namespace ");
              }
              return ae.push(W("id")), Z ? ae.push(W("body")) : X.body ? ae.push(" ", l(W("body"))) : ae.push(oe), ae;
            }
            case "TSConditionalType":
              return P(Q, le, W);
            case "TSInferType":
              return ["infer", " ", W("typeParameter")];
            case "TSIntersectionType":
              return J(Q, le, W);
            case "TSUnionType":
              return L(Q, le, W);
            case "TSFunctionType":
              return Y(Q, le, W);
            case "TSTupleType":
              return V(Q, le, W);
            case "TSTypeReference":
              return [W("typeName"), _(Q, le, W, "typeParameters")];
            case "TSTypeAnnotation":
              return W("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return k(Q, le, W);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return K(Q, W, "?");
            case "TSJSDocNonNullableType":
              return K(Q, W, "!");
            case "TSInstantiationExpression":
              return [W("expression"), W("typeParameters")];
            default:
              throw new Error(`Unknown TypeScript node type: ${JSON.stringify(X.type)}.`);
          }
        }
        n.exports = { printTypescript: se };
      } }), Gm = ee({ "src/language-js/print/comment.js"(e, n) {
        "use strict";
        re();
        var { hasNewline: t } = Ge(), { builders: { join: s, hardline: a }, utils: { replaceTextEndOfLine: r } } = qe(), { isLineComment: u } = Ke(), { locStart: i, locEnd: l } = it(), c = Lt();
        function y(p, D) {
          let v = p.getValue();
          if (u(v))
            return D.originalText.slice(i(v), l(v)).trimEnd();
          if (c(v)) {
            if (h(v)) {
              let F = g(v);
              return v.trailing && !t(D.originalText, i(v), { backwards: true }) ? [a, F] : F;
            }
            let w = l(v), T = D.originalText.slice(w - 3, w) === "*-/";
            return ["/*", r(v.value), T ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(v));
        }
        function h(p) {
          let D = `*${p.value}*`.split(`
`);
          return D.length > 1 && D.every((v) => v.trim()[0] === "*");
        }
        function g(p) {
          let D = p.value.split(`
`);
          return ["/*", s(a, D.map((v, w) => w === 0 ? v.trimEnd() : " " + (w < D.length - 1 ? v.trim() : v.trimStart()))), "*/"];
        }
        n.exports = { printComment: y };
      } }), Um = ee({ "src/language-js/print/literal.js"(e, n) {
        "use strict";
        re();
        var { printString: t, printNumber: s } = Ge(), { replaceTextEndOfLine: a } = Xt();
        function r(l, c) {
          let y = l.getNode();
          switch (y.type) {
            case "RegExpLiteral":
              return i(y);
            case "BigIntLiteral":
              return u(y.bigint || y.extra.raw);
            case "NumericLiteral":
              return s(y.extra.raw);
            case "StringLiteral":
              return a(t(y.extra.raw, c));
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(y.value);
            case "DecimalLiteral":
              return s(y.value) + "m";
            case "Literal": {
              if (y.regex)
                return i(y.regex);
              if (y.bigint)
                return u(y.raw);
              if (y.decimal)
                return s(y.decimal) + "m";
              let { value: h } = y;
              return typeof h == "number" ? s(y.raw) : typeof h == "string" ? a(t(y.raw, c)) : String(h);
            }
          }
        }
        function u(l) {
          return l.toLowerCase();
        }
        function i(l) {
          let { pattern: c, flags: y } = l;
          return y = [...y].sort().join(""), `/${c}/${y}`;
        }
        n.exports = { printLiteral: r };
      } }), Jm = ee({ "src/language-js/printer-estree.js"(e, n) {
        "use strict";
        re();
        var { printDanglingComments: t } = et(), { hasNewline: s } = Ge(), { builders: { join: a, line: r, hardline: u, softline: i, group: l, indent: c }, utils: { replaceTextEndOfLine: y } } = qe(), h = Nm(), g = wm(), { insertPragma: p } = Qa(), D = Za(), v = Ot(), w = eo(), { hasFlowShorthandAnnotationComment: T, hasComment: F, CommentCheckFlags: A, isTheOnlyJsxElementInMarkdown: B, isLineComment: I, isNextLineEmpty: P, needsHardlineAfterDanglingComment: R, rawText: f, hasIgnoreComment: x, isCallExpression: m, isMemberExpression: E, markerForIfWithoutBlockAndSameLineComment: o } = Ke(), { locStart: d, locEnd: C } = it(), _ = Lt(), { printHtmlBinding: b, isVueEventBindingExpression: N } = qm(), { printAngular: k } = Mm(), { printJsx: $, hasJsxIgnoreComment: M } = Rm(), { printFlow: q } = Vm(), { printTypescript: J } = Hm(), { printOptionalToken: L, printBindExpressionCallee: Y, printTypeAnnotation: V, adjustClause: O, printRestSpread: K, printDefiniteToken: se } = Dt(), { printImportDeclaration: Q, printExportDeclaration: le, printExportAllDeclaration: W, printModuleSpecifier: X } = so(), { printTernary: oe } = io(), { printTemplateLiteral: ae } = jt(), { printArray: Ae } = Qt(), { printObject: z } = Xn(), { printClass: H, printClassMethod: Z, printClassProperty: ne } = tr(), { printProperty: fe } = er(), { printFunction: ge, printArrowFunction: Ce, printMethod: _e, printReturnStatement: Oe, printThrowStatement: pe } = Or(), { printCallExpression: ie } = no(), { printVariableDeclarator: ve, printAssignmentExpression: ce } = Zt(), { printBinaryishExpression: U } = Jn(), { printSwitchCaseConsequent: de } = ao(), { printMemberExpression: De } = ro(), { printBlock: he, printBlockBody: Be } = oo(), { printComment: Se } = Gm(), { printLiteral: ye } = Um(), { printDecorators: S } = zn();
        function G(Te, Pe, Fe, Ze) {
          let xe = te(Te, Pe, Fe, Ze);
          if (!xe)
            return "";
          let Je = Te.getValue(), { type: we } = Je;
          if (we === "ClassMethod" || we === "ClassPrivateMethod" || we === "ClassProperty" || we === "ClassAccessorProperty" || we === "PropertyDefinition" || we === "TSAbstractPropertyDefinition" || we === "ClassPrivateProperty" || we === "MethodDefinition" || we === "TSAbstractMethodDefinition" || we === "TSDeclareMethod")
            return xe;
          let Le = [xe], Ve = S(Te, Pe, Fe), be = Je.type === "ClassExpression" && Ve;
          if (Ve && (Le = [...Ve, xe], !be))
            return l(Le);
          if (!v(Te, Pe))
            return Ze && Ze.needsSemi && Le.unshift(";"), Le.length === 1 && Le[0] === xe ? xe : Le;
          if (be && (Le = [c([r, ...Le])]), Le.unshift("("), Ze && Ze.needsSemi && Le.unshift(";"), T(Je)) {
            let [Me] = Je.trailingComments;
            Le.push(" /*", Me.value.trimStart(), "*/"), Me.printed = true;
          }
          return be && Le.push(r), Le.push(")"), Le;
        }
        function te(Te, Pe, Fe, Ze) {
          let xe = Te.getValue(), Je = Pe.semi ? ";" : "";
          if (!xe)
            return "";
          if (typeof xe == "string")
            return xe;
          for (let Le of [ye, b, k, $, q, J]) {
            let Ve = Le(Te, Pe, Fe);
            if (typeof Ve < "u")
              return Ve;
          }
          let we = [];
          switch (xe.type) {
            case "JsExpressionRoot":
              return Fe("node");
            case "JsonRoot":
              return [Fe("node"), u];
            case "File":
              return xe.program && xe.program.interpreter && we.push(Fe(["program", "interpreter"])), we.push(Fe("program")), we;
            case "Program":
              return Be(Te, Pe, Fe);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (xe.directive)
                return [Ee(xe.expression, Pe), Je];
              if (Pe.parser === "__vue_event_binding" || Pe.parser === "__vue_ts_event_binding") {
                let Ve = Te.getParentNode();
                if (Ve.type === "Program" && Ve.body.length === 1 && Ve.body[0] === xe)
                  return [Fe("expression"), N(xe.expression) ? ";" : ""];
              }
              let Le = t(Te, Pe, true, (Ve) => {
                let { marker: be } = Ve;
                return be === o;
              });
              return [Fe("expression"), B(Pe, Te) ? "" : Je, Le ? [" ", Le] : ""];
            }
            case "ParenthesizedExpression":
              return !F(xe.expression) && (xe.expression.type === "ObjectExpression" || xe.expression.type === "ArrayExpression") ? ["(", Fe("expression"), ")"] : l(["(", c([i, Fe("expression")]), i, ")"]);
            case "AssignmentExpression":
              return ce(Te, Pe, Fe);
            case "VariableDeclarator":
              return ve(Te, Pe, Fe);
            case "BinaryExpression":
            case "LogicalExpression":
              return U(Te, Pe, Fe);
            case "AssignmentPattern":
              return [Fe("left"), " = ", Fe("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return De(Te, Pe, Fe);
            case "MetaProperty":
              return [Fe("meta"), ".", Fe("property")];
            case "BindExpression":
              return xe.object && we.push(Fe("object")), we.push(l(c([i, Y(Te, Pe, Fe)]))), we;
            case "Identifier":
              return [xe.name, L(Te), se(Te), V(Te, Pe, Fe)];
            case "V8IntrinsicIdentifier":
              return ["%", xe.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return K(Te, Pe, Fe);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return ge(Te, Fe, Pe, Ze);
            case "ArrowFunctionExpression":
              return Ce(Te, Pe, Fe, Ze);
            case "YieldExpression":
              return we.push("yield"), xe.delegate && we.push("*"), xe.argument && we.push(" ", Fe("argument")), we;
            case "AwaitExpression": {
              if (we.push("await"), xe.argument) {
                we.push(" ", Fe("argument"));
                let Le = Te.getParentNode();
                if (m(Le) && Le.callee === xe || E(Le) && Le.object === xe) {
                  we = [c([i, ...we]), i];
                  let Ve = Te.findAncestor((be) => be.type === "AwaitExpression" || be.type === "BlockStatement");
                  if (!Ve || Ve.type !== "AwaitExpression")
                    return l(we);
                }
              }
              return we;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return le(Te, Pe, Fe);
            case "ExportAllDeclaration":
              return W(Te, Pe, Fe);
            case "ImportDeclaration":
              return Q(Te, Pe, Fe);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return X(Te, Pe, Fe);
            case "ImportAttribute":
              return [Fe("key"), ": ", Fe("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return he(Te, Pe, Fe);
            case "ThrowStatement":
              return pe(Te, Pe, Fe);
            case "ReturnStatement":
              return Oe(Te, Pe, Fe);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return ie(Te, Pe, Fe);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return z(Te, Pe, Fe);
            case "ObjectProperty":
            case "Property":
              return xe.method || xe.kind === "get" || xe.kind === "set" ? _e(Te, Pe, Fe) : fe(Te, Pe, Fe);
            case "ObjectMethod":
              return _e(Te, Pe, Fe);
            case "Decorator":
              return ["@", Fe("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return Ae(Te, Pe, Fe);
            case "SequenceExpression": {
              let Le = Te.getParentNode(0);
              if (Le.type === "ExpressionStatement" || Le.type === "ForStatement") {
                let Ve = [];
                return Te.each((be, ke) => {
                  ke === 0 ? Ve.push(Fe()) : Ve.push(",", c([r, Fe()]));
                }, "expressions"), l(Ve);
              }
              return l(a([",", r], Te.map(Fe, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [Fe("value"), Je];
            case "DirectiveLiteral":
              return Ee(xe, Pe);
            case "UnaryExpression":
              return we.push(xe.operator), /[a-z]$/.test(xe.operator) && we.push(" "), F(xe.argument) ? we.push(l(["(", c([i, Fe("argument")]), i, ")"])) : we.push(Fe("argument")), we;
            case "UpdateExpression":
              return we.push(Fe("argument"), xe.operator), xe.prefix && we.reverse(), we;
            case "ConditionalExpression":
              return oe(Te, Pe, Fe);
            case "VariableDeclaration": {
              let Le = Te.map(Fe, "declarations"), Ve = Te.getParentNode(), be = Ve.type === "ForStatement" || Ve.type === "ForInStatement" || Ve.type === "ForOfStatement", ke = xe.declarations.some((ue) => ue.init), Me;
              return Le.length === 1 && !F(xe.declarations[0]) ? Me = Le[0] : Le.length > 0 && (Me = c(Le[0])), we = [xe.declare ? "declare " : "", xe.kind, Me ? [" ", Me] : "", c(Le.slice(1).map((ue) => [",", ke && !be ? u : r, ue]))], be && Ve.body !== xe || we.push(Je), l(we);
            }
            case "WithStatement":
              return l(["with (", Fe("object"), ")", O(xe.body, Fe("body"))]);
            case "IfStatement": {
              let Le = O(xe.consequent, Fe("consequent")), Ve = l(["if (", l([c([i, Fe("test")]), i]), ")", Le]);
              if (we.push(Ve), xe.alternate) {
                let be = F(xe.consequent, A.Trailing | A.Line) || R(xe), ke = xe.consequent.type === "BlockStatement" && !be;
                we.push(ke ? " " : u), F(xe, A.Dangling) && we.push(t(Te, Pe, true), be ? u : " "), we.push("else", l(O(xe.alternate, Fe("alternate"), xe.alternate.type === "IfStatement")));
              }
              return we;
            }
            case "ForStatement": {
              let Le = O(xe.body, Fe("body")), Ve = t(Te, Pe, true), be = Ve ? [Ve, i] : "";
              return !xe.init && !xe.test && !xe.update ? [be, l(["for (;;)", Le])] : [be, l(["for (", l([c([i, Fe("init"), ";", r, Fe("test"), ";", r, Fe("update")]), i]), ")", Le])];
            }
            case "WhileStatement":
              return l(["while (", l([c([i, Fe("test")]), i]), ")", O(xe.body, Fe("body"))]);
            case "ForInStatement":
              return l(["for (", Fe("left"), " in ", Fe("right"), ")", O(xe.body, Fe("body"))]);
            case "ForOfStatement":
              return l(["for", xe.await ? " await" : "", " (", Fe("left"), " of ", Fe("right"), ")", O(xe.body, Fe("body"))]);
            case "DoWhileStatement": {
              let Le = O(xe.body, Fe("body"));
              return we = [l(["do", Le])], xe.body.type === "BlockStatement" ? we.push(" ") : we.push(u), we.push("while (", l([c([i, Fe("test")]), i]), ")", Je), we;
            }
            case "DoExpression":
              return [xe.async ? "async " : "", "do ", Fe("body")];
            case "BreakStatement":
              return we.push("break"), xe.label && we.push(" ", Fe("label")), we.push(Je), we;
            case "ContinueStatement":
              return we.push("continue"), xe.label && we.push(" ", Fe("label")), we.push(Je), we;
            case "LabeledStatement":
              return xe.body.type === "EmptyStatement" ? [Fe("label"), ":;"] : [Fe("label"), ": ", Fe("body")];
            case "TryStatement":
              return ["try ", Fe("block"), xe.handler ? [" ", Fe("handler")] : "", xe.finalizer ? [" finally ", Fe("finalizer")] : ""];
            case "CatchClause":
              if (xe.param) {
                let Le = F(xe.param, (be) => !_(be) || be.leading && s(Pe.originalText, C(be)) || be.trailing && s(Pe.originalText, d(be), { backwards: true })), Ve = Fe("param");
                return ["catch ", Le ? ["(", c([i, Ve]), i, ") "] : ["(", Ve, ") "], Fe("body")];
              }
              return ["catch ", Fe("body")];
            case "SwitchStatement":
              return [l(["switch (", c([i, Fe("discriminant")]), i, ")"]), " {", xe.cases.length > 0 ? c([u, a(u, Te.map((Le, Ve, be) => {
                let ke = Le.getValue();
                return [Fe(), Ve !== be.length - 1 && P(ke, Pe) ? u : ""];
              }, "cases"))]) : "", u, "}"];
            case "SwitchCase": {
              xe.test ? we.push("case ", Fe("test"), ":") : we.push("default:"), F(xe, A.Dangling) && we.push(" ", t(Te, Pe, true));
              let Le = xe.consequent.filter((Ve) => Ve.type !== "EmptyStatement");
              if (Le.length > 0) {
                let Ve = de(Te, Pe, Fe);
                we.push(Le.length === 1 && Le[0].type === "BlockStatement" ? [" ", Ve] : c([u, Ve]));
              }
              return we;
            }
            case "DebuggerStatement":
              return ["debugger", Je];
            case "ClassDeclaration":
            case "ClassExpression":
              return H(Te, Pe, Fe);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return Z(Te, Pe, Fe);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
              return ne(Te, Pe, Fe);
            case "TemplateElement":
              return y(xe.value.raw);
            case "TemplateLiteral":
              return ae(Te, Fe, Pe);
            case "TaggedTemplateExpression":
              return [Fe("tag"), Fe("typeParameters"), Fe("quasi")];
            case "PrivateIdentifier":
              return ["#", Fe("name")];
            case "PrivateName":
              return ["#", Fe("id")];
            case "InterpreterDirective":
              return we.push("#!", xe.value, u), P(xe, Pe) && we.push(u), we;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              we.push("module {");
              let Le = Fe("body");
              return Le && we.push(c([u, Le]), u), we.push("}"), we;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(xe.type));
          }
        }
        function Ee(Te, Pe) {
          let Fe = f(Te), Ze = Fe.slice(1, -1);
          if (Ze.includes('"') || Ze.includes("'"))
            return Fe;
          let xe = Pe.singleQuote ? "'" : '"';
          return xe + Ze + xe;
        }
        function Re(Te) {
          return Te.type && !_(Te) && !I(Te) && Te.type !== "EmptyStatement" && Te.type !== "TemplateElement" && Te.type !== "Import" && Te.type !== "TSEmptyBodyFunctionExpression";
        }
        n.exports = { preprocess: w, print: G, embed: h, insertPragma: p, massageAstNode: g, hasPrettierIgnore(Te) {
          return x(Te) || M(Te);
        }, willPrintOwnComments: D.willPrintOwnComments, canAttachComment: Re, printComment: Se, isBlockComment: _, handleComments: { avoidAstMutation: true, ownLine: D.handleOwnLineComment, endOfLine: D.handleEndOfLineComment, remaining: D.handleRemainingComment }, getCommentChildNodes: D.getCommentChildNodes };
      } }), zm = ee({ "src/language-js/printer-estree-json.js"(e, n) {
        "use strict";
        re();
        var { builders: { hardline: t, indent: s, join: a } } = qe(), r = eo();
        function u(c, y, h) {
          let g = c.getValue();
          switch (g.type) {
            case "JsonRoot":
              return [h("node"), t];
            case "ArrayExpression": {
              if (g.elements.length === 0)
                return "[]";
              let p = c.map(() => c.getValue() === null ? "null" : h(), "elements");
              return ["[", s([t, a([",", t], p)]), t, "]"];
            }
            case "ObjectExpression":
              return g.properties.length === 0 ? "{}" : ["{", s([t, a([",", t], c.map(h, "properties"))]), t, "}"];
            case "ObjectProperty":
              return [h("key"), ": ", h("value")];
            case "UnaryExpression":
              return [g.operator === "+" ? "" : g.operator, h("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return g.value ? "true" : "false";
            case "StringLiteral":
            case "NumericLiteral":
              return JSON.stringify(g.value);
            case "Identifier": {
              let p = c.getParentNode();
              return p && p.type === "ObjectProperty" && p.key === g ? JSON.stringify(g.name) : g.name;
            }
            case "TemplateLiteral":
              return h(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(g.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(g.type));
          }
        }
        var i = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function l(c, y) {
          let { type: h } = c;
          if (h === "ObjectProperty" && c.key.type === "Identifier") {
            y.key = { type: "StringLiteral", value: c.key.name };
            return;
          }
          if (h === "UnaryExpression" && c.operator === "+")
            return y.argument;
          if (h === "ArrayExpression") {
            for (let [g, p] of c.elements.entries())
              p === null && y.elements.splice(g, 0, { type: "NullLiteral" });
            return;
          }
          if (h === "TemplateLiteral")
            return { type: "StringLiteral", value: c.quasis[0].value.cooked };
        }
        l.ignoredProperties = i, n.exports = { preprocess: r, print: u, massageAstNode: l };
      } }), qt = ee({ "src/common/common-options.js"(e, n) {
        "use strict";
        re();
        var t = "Common";
        n.exports = { bracketSpacing: { since: "0.0.0", category: t, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t, type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t, type: "choice", default: [{ since: "1.8.2", value: true }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t, type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t, type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      } }), Xm = ee({ "src/language-js/options.js"(e, n) {
        "use strict";
        re();
        var t = qt(), s = "JavaScript";
        n.exports = { arrowParens: { since: "1.9.0", category: s, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: s, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: s, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t.singleQuote, jsxSingleQuote: { since: "1.15.0", category: s, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: s, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: s, type: "choice", default: [{ since: "0.0.0", value: false }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t.singleAttributePerLine };
      } }), Km = ee({ "src/language-js/parse/parsers.js"() {
        re();
      } }), bn = ee({ "node_modules/linguist-languages/data/JavaScript.json"(e, n) {
        n.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
      } }), Ym = ee({ "node_modules/linguist-languages/data/TypeScript.json"(e, n) {
        n.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
      } }), Qm = ee({ "node_modules/linguist-languages/data/TSX.json"(e, n) {
        n.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
      } }), la = ee({ "node_modules/linguist-languages/data/JSON.json"(e, n) {
        n.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
      } }), Zm = ee({ "node_modules/linguist-languages/data/JSON with Comments.json"(e, n) {
        n.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
      } }), ed = ee({ "node_modules/linguist-languages/data/JSON5.json"(e, n) {
        n.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
      } }), td = ee({ "src/language-js/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = Jm(), a = zm(), r = Xm(), u = Km(), i = [t(bn(), (c) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...c.interpreters, "zx"], extensions: [...c.extensions.filter((y) => y !== ".jsx"), ".wxs"] })), t(bn(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), t(bn(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), t(Ym(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), t(Qm(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), t(la(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), t(la(), (c) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: c.extensions.filter((y) => y !== ".jsonl") })), t(Zm(), (c) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...c.filenames, ".eslintrc", ".swcrc"] })), t(ed(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], l = { estree: s, "estree-json": a };
        n.exports = { languages: i, options: r, printers: l, parsers: u };
      } }), rd = ee({ "src/language-css/clean.js"(e, n) {
        "use strict";
        re();
        var { isFrontMatterNode: t } = Ge(), s = lt(), a = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function r(i, l, c) {
          if (t(i) && i.lang === "yaml" && delete l.value, i.type === "css-comment" && c.type === "css-root" && c.nodes.length > 0 && ((c.nodes[0] === i || t(c.nodes[0]) && c.nodes[1] === i) && (delete l.text, /^\*\s*@(?:format|prettier)\s*$/.test(i.text)) || c.type === "css-root" && s(c.nodes) === i))
            return null;
          if (i.type === "value-root" && delete l.text, (i.type === "media-query" || i.type === "media-query-list" || i.type === "media-feature-expression") && delete l.value, i.type === "css-rule" && delete l.params, i.type === "selector-combinator" && (l.value = l.value.replace(/\s+/g, " ")), i.type === "media-feature" && (l.value = l.value.replace(/ /g, "")), (i.type === "value-word" && (i.isColor && i.isHex || ["initial", "inherit", "unset", "revert"].includes(l.value.replace().toLowerCase())) || i.type === "media-feature" || i.type === "selector-root-invalid" || i.type === "selector-pseudo") && (l.value = l.value.toLowerCase()), i.type === "css-decl" && (l.prop = l.prop.toLowerCase()), (i.type === "css-atrule" || i.type === "css-import") && (l.name = l.name.toLowerCase()), i.type === "value-number" && (l.unit = l.unit.toLowerCase()), (i.type === "media-feature" || i.type === "media-keyword" || i.type === "media-type" || i.type === "media-unknown" || i.type === "media-url" || i.type === "media-value" || i.type === "selector-attribute" || i.type === "selector-string" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "value-string") && l.value && (l.value = u(l.value)), i.type === "selector-attribute" && (l.attribute = l.attribute.trim(), l.namespace && typeof l.namespace == "string" && (l.namespace = l.namespace.trim(), l.namespace.length === 0 && (l.namespace = true)), l.value && (l.value = l.value.trim().replace(/^["']|["']$/g, ""), delete l.quoted)), (i.type === "media-value" || i.type === "media-type" || i.type === "value-number" || i.type === "selector-root-invalid" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "selector-tag") && l.value && (l.value = l.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (y, h, g) => {
            let p = Number(h);
            return Number.isNaN(p) ? y : p + g.toLowerCase();
          })), i.type === "selector-tag") {
            let y = i.value.toLowerCase();
            ["from", "to"].includes(y) && (l.value = y);
          }
          if (i.type === "css-atrule" && i.name.toLowerCase() === "supports" && delete l.value, i.type === "selector-unknown" && delete l.value, i.type === "value-comma_group") {
            let y = i.groups.findIndex((h) => h.type === "value-number" && h.unit === "...");
            y !== -1 && (l.groups[y].unit = "", l.groups.splice(y + 1, 0, { type: "value-word", value: "...", isColor: false, isHex: false }));
          }
        }
        r.ignoredProperties = a;
        function u(i) {
          return i.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        n.exports = r;
      } }), Kn = ee({ "src/utils/front-matter/print.js"(e, n) {
        "use strict";
        re();
        var { builders: { hardline: t, markAsRoot: s } } = qe();
        function a(r, u) {
          if (r.lang === "yaml") {
            let i = r.value.trim(), l = i ? u(i, { parser: "yaml" }, { stripTrailingHardline: true }) : "";
            return s([r.startDelimiter, t, l, l ? t : "", r.endDelimiter]);
          }
        }
        n.exports = a;
      } }), nd = ee({ "src/language-css/embed.js"(e, n) {
        "use strict";
        re();
        var { builders: { hardline: t } } = qe(), s = Kn();
        function a(r, u, i) {
          let l = r.getValue();
          if (l.type === "front-matter") {
            let c = s(l, i);
            return c ? [c, t] : "";
          }
        }
        n.exports = a;
      } }), lo = ee({ "src/utils/front-matter/parse.js"(e, n) {
        "use strict";
        re();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function s(a) {
          let r = a.match(t);
          if (!r)
            return { content: a };
          let { startDelimiter: u, language: i, value: l = "", endDelimiter: c } = r.groups, y = i.trim() || "yaml";
          if (u === "+++" && (y = "toml"), y !== "yaml" && u !== c)
            return { content: a };
          let [h] = r;
          return { frontMatter: { type: "front-matter", lang: y, value: l, startDelimiter: u, endDelimiter: c, raw: h.replace(/\n$/, "") }, content: h.replace(/[^\n]/g, " ") + a.slice(h.length) };
        }
        n.exports = s;
      } }), ud = ee({ "src/language-css/pragma.js"(e, n) {
        "use strict";
        re();
        var t = Qa(), s = lo();
        function a(u) {
          return t.hasPragma(s(u).content);
        }
        function r(u) {
          let { frontMatter: i, content: l } = s(u);
          return (i ? i.raw + `

` : "") + t.insertPragma(l);
        }
        n.exports = { hasPragma: a, insertPragma: r };
      } }), sd = ee({ "src/language-css/utils/index.js"(e, n) {
        "use strict";
        re();
        var t = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function s(z, H) {
          let Z = Array.isArray(H) ? H : [H], ne = -1, fe;
          for (; fe = z.getParentNode(++ne); )
            if (Z.includes(fe.type))
              return ne;
          return -1;
        }
        function a(z, H) {
          let Z = s(z, H);
          return Z === -1 ? null : z.getParentNode(Z);
        }
        function r(z) {
          var H;
          let Z = a(z, "css-decl");
          return Z == null || (H = Z.prop) === null || H === void 0 ? void 0 : H.toLowerCase();
        }
        var u = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
        function i(z) {
          return u.has(z.toLowerCase());
        }
        function l(z, H) {
          let Z = a(z, "css-atrule");
          return (Z == null ? void 0 : Z.name) && Z.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(H.toLowerCase());
        }
        function c(z) {
          return z.includes("$") || z.includes("@") || z.includes("#") || z.startsWith("%") || z.startsWith("--") || z.startsWith(":--") || z.includes("(") && z.includes(")") ? z : z.toLowerCase();
        }
        function y(z, H) {
          var Z;
          let ne = a(z, "value-func");
          return (ne == null || (Z = ne.value) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === H;
        }
        function h(z) {
          var H;
          let Z = a(z, "css-rule"), ne = Z == null || (H = Z.raws) === null || H === void 0 ? void 0 : H.selector;
          return ne && (ne.startsWith(":import") || ne.startsWith(":export"));
        }
        function g(z, H) {
          let Z = Array.isArray(H) ? H : [H], ne = a(z, "css-atrule");
          return ne && Z.includes(ne.name.toLowerCase());
        }
        function p(z) {
          let H = z.getValue(), Z = a(z, "css-atrule");
          return (Z == null ? void 0 : Z.name) === "import" && H.groups[0].value === "url" && H.groups.length === 2;
        }
        function D(z) {
          return z.type === "value-func" && z.value.toLowerCase() === "url";
        }
        function v(z, H) {
          var Z;
          let ne = (Z = z.getParentNode()) === null || Z === void 0 ? void 0 : Z.nodes;
          return ne && ne.indexOf(H) === ne.length - 1;
        }
        function w(z) {
          let { selector: H } = z;
          return H ? typeof H == "string" && /^@.+:.*$/.test(H) || H.value && /^@.+:.*$/.test(H.value) : false;
        }
        function T(z) {
          return z.type === "value-word" && ["from", "through", "end"].includes(z.value);
        }
        function F(z) {
          return z.type === "value-word" && ["and", "or", "not"].includes(z.value);
        }
        function A(z) {
          return z.type === "value-word" && z.value === "in";
        }
        function B(z) {
          return z.type === "value-operator" && z.value === "*";
        }
        function I(z) {
          return z.type === "value-operator" && z.value === "/";
        }
        function P(z) {
          return z.type === "value-operator" && z.value === "+";
        }
        function R(z) {
          return z.type === "value-operator" && z.value === "-";
        }
        function f(z) {
          return z.type === "value-operator" && z.value === "%";
        }
        function x(z) {
          return B(z) || I(z) || P(z) || R(z) || f(z);
        }
        function m(z) {
          return z.type === "value-word" && ["==", "!="].includes(z.value);
        }
        function E(z) {
          return z.type === "value-word" && ["<", ">", "<=", ">="].includes(z.value);
        }
        function o(z) {
          return z.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(z.name);
        }
        function d(z) {
          var H;
          return ((H = z.raws) === null || H === void 0 ? void 0 : H.params) && /^\(\s*\)$/.test(z.raws.params);
        }
        function C(z) {
          return z.name.startsWith("prettier-placeholder");
        }
        function _(z) {
          return z.prop.startsWith("@prettier-placeholder");
        }
        function b(z, H) {
          return z.value === "$$" && z.type === "value-func" && (H == null ? void 0 : H.type) === "value-word" && !H.raws.before;
        }
        function N(z) {
          var H, Z;
          return ((H = z.value) === null || H === void 0 ? void 0 : H.type) === "value-root" && ((Z = z.value.group) === null || Z === void 0 ? void 0 : Z.type) === "value-value" && z.prop.toLowerCase() === "composes";
        }
        function k(z) {
          var H, Z, ne;
          return ((H = z.value) === null || H === void 0 || (Z = H.group) === null || Z === void 0 || (ne = Z.group) === null || ne === void 0 ? void 0 : ne.type) === "value-paren_group" && z.value.group.group.open !== null && z.value.group.group.close !== null;
        }
        function $(z) {
          var H;
          return ((H = z.raws) === null || H === void 0 ? void 0 : H.before) === "";
        }
        function M(z) {
          var H, Z;
          return z.type === "value-comma_group" && ((H = z.groups) === null || H === void 0 || (Z = H[1]) === null || Z === void 0 ? void 0 : Z.type) === "value-colon";
        }
        function q(z) {
          var H;
          return z.type === "value-paren_group" && ((H = z.groups) === null || H === void 0 ? void 0 : H[0]) && M(z.groups[0]);
        }
        function J(z) {
          var H;
          let Z = z.getValue();
          if (Z.groups.length === 0)
            return false;
          let ne = z.getParentNode(1);
          if (!q(Z) && !(ne && q(ne)))
            return false;
          let fe = a(z, "css-decl");
          return !!(fe != null && (H = fe.prop) !== null && H !== void 0 && H.startsWith("$") || q(ne) || ne.type === "value-func");
        }
        function L(z) {
          return z.type === "value-comment" && z.inline;
        }
        function Y(z) {
          return z.type === "value-word" && z.value === "#";
        }
        function V(z) {
          return z.type === "value-word" && z.value === "{";
        }
        function O(z) {
          return z.type === "value-word" && z.value === "}";
        }
        function K(z) {
          return ["value-word", "value-atword"].includes(z.type);
        }
        function se(z) {
          return (z == null ? void 0 : z.type) === "value-colon";
        }
        function Q(z, H) {
          if (!M(H))
            return false;
          let { groups: Z } = H, ne = Z.indexOf(z);
          return ne === -1 ? false : se(Z[ne + 1]);
        }
        function le(z) {
          return z.value && ["not", "and", "or"].includes(z.value.toLowerCase());
        }
        function W(z) {
          return z.type !== "value-func" ? false : t.has(z.value.toLowerCase());
        }
        function X(z) {
          return /\/\//.test(z.split(/[\n\r]/).pop());
        }
        function oe(z) {
          return (z == null ? void 0 : z.type) === "value-atword" && z.value.startsWith("prettier-placeholder-");
        }
        function ae(z, H) {
          var Z, ne;
          if (((Z = z.open) === null || Z === void 0 ? void 0 : Z.value) !== "(" || ((ne = z.close) === null || ne === void 0 ? void 0 : ne.value) !== ")" || z.groups.some((fe) => fe.type !== "value-comma_group"))
            return false;
          if (H.type === "value-comma_group") {
            let fe = H.groups.indexOf(z) - 1, ge = H.groups[fe];
            if ((ge == null ? void 0 : ge.type) === "value-word" && ge.value === "with")
              return true;
          }
          return false;
        }
        function Ae(z) {
          var H, Z;
          return z.type === "value-paren_group" && ((H = z.open) === null || H === void 0 ? void 0 : H.value) === "(" && ((Z = z.close) === null || Z === void 0 ? void 0 : Z.value) === ")";
        }
        n.exports = { getAncestorCounter: s, getAncestorNode: a, getPropOfDeclNode: r, maybeToLowerCase: c, insideValueFunctionNode: y, insideICSSRuleNode: h, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: p, isKeyframeAtRuleKeywords: l, isWideKeywords: i, isLastNode: v, isSCSSControlDirectiveNode: o, isDetachedRulesetDeclarationNode: w, isRelationalOperatorNode: E, isEqualityOperatorNode: m, isMultiplicationNode: B, isDivisionNode: I, isAdditionNode: P, isSubtractionNode: R, isModuloNode: f, isMathOperatorNode: x, isEachKeywordNode: A, isForKeywordNode: T, isURLFunctionNode: D, isIfElseKeywordNode: F, hasComposesNode: N, hasParensAroundNode: k, hasEmptyRawBefore: $, isDetachedRulesetCallNode: d, isTemplatePlaceholderNode: C, isTemplatePropNode: _, isPostcssSimpleVarNode: b, isKeyValuePairNode: M, isKeyValuePairInParenGroupNode: q, isKeyInValuePairNode: Q, isSCSSMapItemNode: J, isInlineValueCommentNode: L, isHashNode: Y, isLeftCurlyBraceNode: V, isRightCurlyBraceNode: O, isWordNode: K, isColonNode: se, isMediaAndSupportsKeywords: le, isColorAdjusterFuncNode: W, lastLineHasInlineComment: X, isAtWordPlaceholderNode: oe, isConfigurationNode: ae, isParenGroupNode: Ae };
      } }), id = ee({ "src/utils/line-column-to-index.js"(e, n) {
        "use strict";
        re(), n.exports = function(t, s) {
          let a = 0;
          for (let r = 0; r < t.line - 1; ++r)
            a = s.indexOf(`
`, a) + 1;
          return a + t.column;
        };
      } }), ad = ee({ "src/language-css/loc.js"(e, n) {
        "use strict";
        re();
        var { skipEverythingButNewLine: t } = _r(), s = lt(), a = id();
        function r(p, D) {
          return typeof p.sourceIndex == "number" ? p.sourceIndex : p.source ? a(p.source.start, D) - 1 : null;
        }
        function u(p, D) {
          if (p.type === "css-comment" && p.inline)
            return t(D, p.source.startOffset);
          let v = p.nodes && s(p.nodes);
          return v && p.source && !p.source.end && (p = v), p.source && p.source.end ? a(p.source.end, D) : null;
        }
        function i(p, D) {
          p.source && (p.source.startOffset = r(p, D), p.source.endOffset = u(p, D));
          for (let v in p) {
            let w = p[v];
            v === "source" || !w || typeof w != "object" || (w.type === "value-root" || w.type === "value-unknown" ? l(w, c(p), w.text || w.value) : i(w, D));
          }
        }
        function l(p, D, v) {
          p.source && (p.source.startOffset = r(p, v) + D, p.source.endOffset = u(p, v) + D);
          for (let w in p) {
            let T = p[w];
            w === "source" || !T || typeof T != "object" || l(T, D, v);
          }
        }
        function c(p) {
          let D = p.source.startOffset;
          return typeof p.prop == "string" && (D += p.prop.length), p.type === "css-atrule" && typeof p.name == "string" && (D += 1 + p.name.length + p.raws.afterName.match(/^\s*:?\s*/)[0].length), p.type !== "css-atrule" && p.raws && typeof p.raws.between == "string" && (D += p.raws.between.length), D;
        }
        function y(p) {
          let D = "initial", v = "initial", w, T = false, F = [];
          for (let A = 0; A < p.length; A++) {
            let B = p[A];
            switch (D) {
              case "initial":
                if (B === "'") {
                  D = "single-quotes";
                  continue;
                }
                if (B === '"') {
                  D = "double-quotes";
                  continue;
                }
                if ((B === "u" || B === "U") && p.slice(A, A + 4).toLowerCase() === "url(") {
                  D = "url", A += 3;
                  continue;
                }
                if (B === "*" && p[A - 1] === "/") {
                  D = "comment-block";
                  continue;
                }
                if (B === "/" && p[A - 1] === "/") {
                  D = "comment-inline", w = A - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (B === "'" && p[A - 1] !== "\\" && (D = v, v = "initial"), B === `
` || B === "\r")
                  return p;
                continue;
              case "double-quotes":
                if (B === '"' && p[A - 1] !== "\\" && (D = v, v = "initial"), B === `
` || B === "\r")
                  return p;
                continue;
              case "url":
                if (B === ")" && (D = "initial"), B === `
` || B === "\r")
                  return p;
                if (B === "'") {
                  D = "single-quotes", v = "url";
                  continue;
                }
                if (B === '"') {
                  D = "double-quotes", v = "url";
                  continue;
                }
                continue;
              case "comment-block":
                B === "/" && p[A - 1] === "*" && (D = "initial");
                continue;
              case "comment-inline":
                (B === '"' || B === "'" || B === "*") && (T = true), (B === `
` || B === "\r") && (T && F.push([w, A]), D = "initial", T = false);
                continue;
            }
          }
          for (let [A, B] of F)
            p = p.slice(0, A) + p.slice(A, B).replace(/["'*]/g, " ") + p.slice(B);
          return p;
        }
        function h(p) {
          return p.source.startOffset;
        }
        function g(p) {
          return p.source.endOffset;
        }
        n.exports = { locStart: h, locEnd: g, calculateLoc: i, replaceQuotesInInlineComments: y };
      } }), od = ee({ "src/language-css/utils/is-less-parser.js"(e, n) {
        "use strict";
        re();
        function t(s) {
          return s.parser === "css" || s.parser === "less";
        }
        n.exports = t;
      } }), ld = ee({ "src/language-css/utils/is-scss.js"(e, n) {
        "use strict";
        re();
        function t(s, a) {
          return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(a);
        }
        n.exports = t;
      } }), cd = ee({ "src/language-css/utils/css-units.evaluate.js"(e, n) {
        n.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
      } }), pd = ee({ "src/language-css/utils/print-unit.js"(e, n) {
        "use strict";
        re();
        var t = cd();
        function s(a) {
          let r = a.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, r) ? t[r] : a;
        }
        n.exports = s;
      } }), fd = ee({ "src/language-css/printer-postcss.js"(e, n) {
        "use strict";
        re();
        var t = lt(), { printNumber: s, printString: a, hasNewline: r, isFrontMatterNode: u, isNextLineEmpty: i, isNonEmptyArray: l } = Ge(), { builders: { join: c, line: y, hardline: h, softline: g, group: p, fill: D, indent: v, dedent: w, ifBreak: T, breakParent: F }, utils: { removeLines: A, getDocParts: B } } = qe(), I = rd(), P = nd(), { insertPragma: R } = ud(), { getAncestorNode: f, getPropOfDeclNode: x, maybeToLowerCase: m, insideValueFunctionNode: E, insideICSSRuleNode: o, insideAtRuleNode: d, insideURLFunctionInImportAtRuleNode: C, isKeyframeAtRuleKeywords: _, isWideKeywords: b, isLastNode: N, isSCSSControlDirectiveNode: k, isDetachedRulesetDeclarationNode: $, isRelationalOperatorNode: M, isEqualityOperatorNode: q, isMultiplicationNode: J, isDivisionNode: L, isAdditionNode: Y, isSubtractionNode: V, isMathOperatorNode: O, isEachKeywordNode: K, isForKeywordNode: se, isURLFunctionNode: Q, isIfElseKeywordNode: le, hasComposesNode: W, hasParensAroundNode: X, hasEmptyRawBefore: oe, isKeyValuePairNode: ae, isKeyInValuePairNode: Ae, isDetachedRulesetCallNode: z, isTemplatePlaceholderNode: H, isTemplatePropNode: Z, isPostcssSimpleVarNode: ne, isSCSSMapItemNode: fe, isInlineValueCommentNode: ge, isHashNode: Ce, isLeftCurlyBraceNode: _e, isRightCurlyBraceNode: Oe, isWordNode: pe, isColonNode: ie, isMediaAndSupportsKeywords: ve, isColorAdjusterFuncNode: ce, lastLineHasInlineComment: U, isAtWordPlaceholderNode: de, isConfigurationNode: De, isParenGroupNode: he } = sd(), { locStart: Be, locEnd: Se } = ad(), ye = od(), S = ld(), G = pd();
        function te(be) {
          return be.trailingComma === "es5" || be.trailingComma === "all";
        }
        function Ee(be, ke, Me) {
          let ue = be.getValue();
          if (!ue)
            return "";
          if (typeof ue == "string")
            return ue;
          switch (ue.type) {
            case "front-matter":
              return [ue.raw, h];
            case "css-root": {
              let He = Re(be, ke, Me), Ue = ue.raws.after.trim();
              return [He, Ue ? ` ${Ue}` : "", B(He).length > 0 ? h : ""];
            }
            case "css-comment": {
              let He = ue.inline || ue.raws.inline, Ue = ke.originalText.slice(Be(ue), Se(ue));
              return He ? Ue.trimEnd() : Ue;
            }
            case "css-rule":
              return [Me("selector"), ue.important ? " !important" : "", ue.nodes ? [ue.selector && ue.selector.type === "selector-unknown" && U(ue.selector.value) ? y : " ", "{", ue.nodes.length > 0 ? v([h, Re(be, ke, Me)]) : "", h, "}", $(ue) ? ";" : ""] : ";"];
            case "css-decl": {
              let He = be.getParentNode(), { between: Ue } = ue.raws, Xe = Ue.trim(), at = Xe === ":", nt = W(ue) ? A(Me("value")) : Me("value");
              return !at && U(Xe) && (nt = v([h, w(nt)])), [ue.raws.before.replace(/[\s;]/g, ""), o(be) ? ue.prop : m(ue.prop), Xe.startsWith("//") ? " " : "", Xe, ue.extend ? "" : " ", ye(ke) && ue.extend && ue.selector ? ["extend(", Me("selector"), ")"] : "", nt, ue.raws.important ? ue.raws.important.replace(/\s*!\s*important/i, " !important") : ue.important ? " !important" : "", ue.raws.scssDefault ? ue.raws.scssDefault.replace(/\s*!default/i, " !default") : ue.scssDefault ? " !default" : "", ue.raws.scssGlobal ? ue.raws.scssGlobal.replace(/\s*!global/i, " !global") : ue.scssGlobal ? " !global" : "", ue.nodes ? [" {", v([g, Re(be, ke, Me)]), g, "}"] : Z(ue) && !He.raws.semicolon && ke.originalText[Se(ue) - 1] !== ";" ? "" : ke.__isHTMLStyleAttribute && N(be, ue) ? T(";") : ";"];
            }
            case "css-atrule": {
              let He = be.getParentNode(), Ue = H(ue) && !He.raws.semicolon && ke.originalText[Se(ue) - 1] !== ";";
              if (ye(ke)) {
                if (ue.mixin)
                  return [Me("selector"), ue.important ? " !important" : "", Ue ? "" : ";"];
                if (ue.function)
                  return [ue.name, Me("params"), Ue ? "" : ";"];
                if (ue.variable)
                  return ["@", ue.name, ": ", ue.value ? Me("value") : "", ue.raws.between.trim() ? ue.raws.between.trim() + " " : "", ue.nodes ? ["{", v([ue.nodes.length > 0 ? g : "", Re(be, ke, Me)]), g, "}"] : "", Ue ? "" : ";"];
              }
              return ["@", z(ue) || ue.name.endsWith(":") ? ue.name : m(ue.name), ue.params ? [z(ue) ? "" : H(ue) ? ue.raws.afterName === "" ? "" : ue.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ue.raws.afterName) ? [h, h] : /^\s*\n/.test(ue.raws.afterName) ? h : " " : " ", Me("params")] : "", ue.selector ? v([" ", Me("selector")]) : "", ue.value ? p([" ", Me("value"), k(ue) ? X(ue) ? " " : y : ""]) : ue.name === "else" ? " " : "", ue.nodes ? [k(ue) ? "" : ue.selector && !ue.selector.nodes && typeof ue.selector.value == "string" && U(ue.selector.value) || !ue.selector && typeof ue.params == "string" && U(ue.params) ? y : " ", "{", v([ue.nodes.length > 0 ? g : "", Re(be, ke, Me)]), g, "}"] : Ue ? "" : ";"];
            }
            case "media-query-list": {
              let He = [];
              return be.each((Ue) => {
                let Xe = Ue.getValue();
                Xe.type === "media-query" && Xe.value === "" || He.push(Me());
              }, "nodes"), p(v(c(y, He)));
            }
            case "media-query":
              return [c(" ", be.map(Me, "nodes")), N(be, ue) ? "" : ","];
            case "media-type":
              return Le(Je(ue.value, ke));
            case "media-feature-expression":
              return ue.nodes ? ["(", ...be.map(Me, "nodes"), ")"] : ue.value;
            case "media-feature":
              return m(Je(ue.value.replace(/ +/g, " "), ke));
            case "media-colon":
              return [ue.value, " "];
            case "media-value":
              return Le(Je(ue.value, ke));
            case "media-keyword":
              return Je(ue.value, ke);
            case "media-url":
              return Je(ue.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), ke);
            case "media-unknown":
              return ue.value;
            case "selector-root":
              return p([d(be, "custom-selector") ? [f(be, "css-atrule").customSelector, y] : "", c([",", d(be, ["extend", "custom-selector", "nest"]) ? y : h], be.map(Me, "nodes"))]);
            case "selector-selector":
              return p(v(be.map(Me, "nodes")));
            case "selector-comment":
              return ue.value;
            case "selector-string":
              return Je(ue.value, ke);
            case "selector-tag": {
              let He = be.getParentNode(), Ue = He && He.nodes.indexOf(ue), Xe = Ue && He.nodes[Ue - 1];
              return [ue.namespace ? [ue.namespace === true ? "" : ue.namespace.trim(), "|"] : "", Xe.type === "selector-nesting" ? ue.value : Le(_(be, ue.value) ? ue.value.toLowerCase() : ue.value)];
            }
            case "selector-id":
              return ["#", ue.value];
            case "selector-class":
              return [".", Le(Je(ue.value, ke))];
            case "selector-attribute": {
              var st;
              return ["[", ue.namespace ? [ue.namespace === true ? "" : ue.namespace.trim(), "|"] : "", ue.attribute.trim(), (st = ue.operator) !== null && st !== void 0 ? st : "", ue.value ? we(Je(ue.value.trim(), ke), ke) : "", ue.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
              if (ue.value === "+" || ue.value === ">" || ue.value === "~" || ue.value === ">>>") {
                let Xe = be.getParentNode();
                return [Xe.type === "selector-selector" && Xe.nodes[0] === ue ? "" : y, ue.value, N(be, ue) ? "" : " "];
              }
              let He = ue.value.trim().startsWith("(") ? y : "", Ue = Le(Je(ue.value.trim(), ke)) || y;
              return [He, Ue];
            }
            case "selector-universal":
              return [ue.namespace ? [ue.namespace === true ? "" : ue.namespace.trim(), "|"] : "", ue.value];
            case "selector-pseudo":
              return [m(ue.value), l(ue.nodes) ? p(["(", v([g, c([",", y], be.map(Me, "nodes"))]), g, ")"]) : ""];
            case "selector-nesting":
              return ue.value;
            case "selector-unknown": {
              let He = f(be, "css-rule");
              if (He && He.isSCSSNesterProperty)
                return Le(Je(m(ue.value), ke));
              let Ue = be.getParentNode();
              if (Ue.raws && Ue.raws.selector) {
                let at = Be(Ue), nt = at + Ue.raws.selector.length;
                return ke.originalText.slice(at, nt).trim();
              }
              let Xe = be.getParentNode(1);
              if (Ue.type === "value-paren_group" && Xe && Xe.type === "value-func" && Xe.value === "selector") {
                let at = Se(Ue.open) + 1, nt = Be(Ue.close), j = ke.originalText.slice(at, nt).trim();
                return U(j) ? [F, j] : j;
              }
              return ue.value;
            }
            case "value-value":
            case "value-root":
              return Me("group");
            case "value-comment":
              return ke.originalText.slice(Be(ue), Se(ue));
            case "value-comma_group": {
              let He = be.getParentNode(), Ue = be.getParentNode(1), Xe = x(be), at = Xe && He.type === "value-value" && (Xe === "grid" || Xe.startsWith("grid-template")), nt = f(be, "css-atrule"), j = nt && k(nt), me = ue.groups.some((ot) => ge(ot)), Ie = be.map(Me, "groups"), je = [], Ye = E(be, "url"), ut = false, ze = false;
              for (let ot = 0; ot < ue.groups.length; ++ot) {
                var rt;
                je.push(Ie[ot]);
                let tt = ue.groups[ot - 1], $e = ue.groups[ot], We = ue.groups[ot + 1], nr = ue.groups[ot + 2];
                if (Ye) {
                  (We && Y(We) || Y($e)) && je.push(" ");
                  continue;
                }
                if (d(be, "forward") && $e.type === "value-word" && $e.value && tt !== void 0 && tt.type === "value-word" && tt.value === "as" && We.type === "value-operator" && We.value === "*" || !We || $e.type === "value-word" && $e.value.endsWith("-") && de(We))
                  continue;
                let go = $e.type === "value-string" && $e.value.startsWith("#{"), yo = ut && We.type === "value-string" && We.value.endsWith("}");
                if (go || yo) {
                  ut = !ut;
                  continue;
                }
                if (ut || ie($e) || ie(We) || $e.type === "value-atword" && $e.value === "" || $e.value === "~" || $e.value && $e.value.includes("\\") && We && We.type !== "value-comment" || tt && tt.value && tt.value.indexOf("\\") === tt.value.length - 1 && $e.type === "value-operator" && $e.value === "/" || $e.value === "\\" || ne($e, We) || Ce($e) || _e($e) || Oe(We) || _e(We) && oe(We) || Oe($e) && oe(We) || $e.value === "--" && Ce(We))
                  continue;
                let Zn = O($e), eu = O(We);
                if ((Zn && Ce(We) || eu && Oe($e)) && oe(We) || !tt && L($e) || E(be, "calc") && (Y($e) || Y(We) || V($e) || V(We)) && oe(We))
                  continue;
                let ho = (Y($e) || V($e)) && ot === 0 && (We.type === "value-number" || We.isHex) && Ue && ce(Ue) && !oe(We), tu = nr && nr.type === "value-func" || nr && pe(nr) || $e.type === "value-func" || pe($e), ru = We.type === "value-func" || pe(We) || tt && tt.type === "value-func" || tt && pe(tt);
                if (!(!(J(We) || J($e)) && !E(be, "calc") && !ho && (L(We) && !tu || L($e) && !ru || Y(We) && !tu || Y($e) && !ru || V(We) || V($e)) && (oe(We) || Zn && (!tt || tt && O(tt))))) {
                  if (ge($e)) {
                    if (He.type === "value-paren_group") {
                      je.push(w(h));
                      continue;
                    }
                    je.push(h);
                    continue;
                  }
                  if (j && (q(We) || M(We) || le(We) || K($e) || se($e))) {
                    je.push(" ");
                    continue;
                  }
                  if (nt && nt.name.toLowerCase() === "namespace") {
                    je.push(" ");
                    continue;
                  }
                  if (at) {
                    $e.source && We.source && $e.source.start.line !== We.source.start.line ? (je.push(h), ze = true) : je.push(" ");
                    continue;
                  }
                  if (eu) {
                    je.push(" ");
                    continue;
                  }
                  if (!(We && We.value === "...") && !(de($e) && de(We) && Se($e) === Be(We))) {
                    if (de($e) && he(We) && Se($e) === Be(We.open)) {
                      je.push(g);
                      continue;
                    }
                    if ($e.value === "with" && he(We)) {
                      je.push(" ");
                      continue;
                    }
                    (rt = $e.value) !== null && rt !== void 0 && rt.endsWith("#") && We.value === "{" && he(We.group) || je.push(y);
                  }
                }
              }
              return me && je.push(F), ze && je.unshift(h), j ? p(v(je)) : C(be) ? p(D(je)) : p(v(D(je)));
            }
            case "value-paren_group": {
              let He = be.getParentNode();
              if (He && Q(He) && (ue.groups.length === 1 || ue.groups.length > 0 && ue.groups[0].type === "value-comma_group" && ue.groups[0].groups.length > 0 && ue.groups[0].groups[0].type === "value-word" && ue.groups[0].groups[0].value.startsWith("data:")))
                return [ue.open ? Me("open") : "", c(",", be.map(Me, "groups")), ue.close ? Me("close") : ""];
              if (!ue.open) {
                let Ye = be.map(Me, "groups"), ut = [];
                for (let ze = 0; ze < Ye.length; ze++)
                  ze !== 0 && ut.push([",", y]), ut.push(Ye[ze]);
                return p(v(D(ut)));
              }
              let Ue = fe(be), Xe = t(ue.groups), at = Xe && Xe.type === "value-comment", nt = Ae(ue, He), j = De(ue, He), me = j || Ue && !nt, Ie = j || nt, je = p([ue.open ? Me("open") : "", v([g, c([y], be.map((Ye, ut) => {
                let ze = Ye.getValue(), ot = ut === ue.groups.length - 1, tt = [Me(), ot ? "" : ","];
                if (ae(ze) && ze.type === "value-comma_group" && ze.groups && ze.groups[0].type !== "value-paren_group" && ze.groups[2] && ze.groups[2].type === "value-paren_group") {
                  let $e = B(tt[0].contents.contents);
                  return $e[1] = p($e[1]), p(w(tt));
                }
                if (!ot && ze.type === "value-comma_group" && l(ze.groups)) {
                  let $e = t(ze.groups);
                  $e.source && i(ke.originalText, $e, Se) && tt.push(h);
                }
                return tt;
              }, "groups"))]), T(!at && S(ke.parser, ke.originalText) && Ue && te(ke) ? "," : ""), g, ue.close ? Me("close") : ""], { shouldBreak: me });
              return Ie ? w(je) : je;
            }
            case "value-func":
              return [ue.value, d(be, "supports") && ve(ue) ? " " : "", Me("group")];
            case "value-paren":
              return ue.value;
            case "value-number":
              return [Ve(ue.value), G(ue.unit)];
            case "value-operator":
              return ue.value;
            case "value-word":
              return ue.isColor && ue.isHex || b(ue.value) ? ue.value.toLowerCase() : ue.value;
            case "value-colon": {
              let He = be.getParentNode(), Ue = He && He.groups.indexOf(ue), Xe = Ue && He.groups[Ue - 1];
              return [ue.value, Xe && typeof Xe.value == "string" && t(Xe.value) === "\\" || E(be, "url") ? "" : y];
            }
            case "value-comma":
              return [ue.value, " "];
            case "value-string":
              return a(ue.raws.quote + ue.value + ue.raws.quote, ke);
            case "value-atword":
              return ["@", ue.value];
            case "value-unicode-range":
              return ue.value;
            case "value-unknown":
              return ue.value;
            default:
              throw new Error(`Unknown postcss type ${JSON.stringify(ue.type)}`);
          }
        }
        function Re(be, ke, Me) {
          let ue = [];
          return be.each((st, rt, He) => {
            let Ue = He[rt - 1];
            if (Ue && Ue.type === "css-comment" && Ue.text.trim() === "prettier-ignore") {
              let Xe = st.getValue();
              ue.push(ke.originalText.slice(Be(Xe), Se(Xe)));
            } else
              ue.push(Me());
            rt !== He.length - 1 && (He[rt + 1].type === "css-comment" && !r(ke.originalText, Be(He[rt + 1]), { backwards: true }) && !u(He[rt]) || He[rt + 1].type === "css-atrule" && He[rt + 1].name === "else" && He[rt].type !== "css-comment" ? ue.push(" ") : (ue.push(ke.__isHTMLStyleAttribute ? y : h), i(ke.originalText, st.getValue(), Se) && !u(He[rt]) && ue.push(h)));
          }, "nodes"), ue;
        }
        var Te = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, Pe = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, Fe = /[A-Za-z]+/g, Ze = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, xe = new RegExp(Te.source + `|(${Ze.source})?(${Pe.source})(${Fe.source})?`, "g");
        function Je(be, ke) {
          return be.replace(Te, (Me) => a(Me, ke));
        }
        function we(be, ke) {
          let Me = ke.singleQuote ? "'" : '"';
          return be.includes('"') || be.includes("'") ? be : Me + be + Me;
        }
        function Le(be) {
          return be.replace(xe, (ke, Me, ue, st, rt) => !ue && st ? Ve(st) + m(rt || "") : ke);
        }
        function Ve(be) {
          return s(be).replace(/\.0(?=$|e)/, "");
        }
        n.exports = { print: Ee, embed: P, insertPragma: R, massageAstNode: I };
      } }), Dd = ee({ "src/language-css/options.js"(e, n) {
        "use strict";
        re();
        var t = qt();
        n.exports = { singleQuote: t.singleQuote };
      } }), md = ee({ "src/language-css/parsers.js"() {
        re();
      } }), dd = ee({ "node_modules/linguist-languages/data/CSS.json"(e, n) {
        n.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
      } }), gd = ee({ "node_modules/linguist-languages/data/PostCSS.json"(e, n) {
        n.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
      } }), yd = ee({ "node_modules/linguist-languages/data/Less.json"(e, n) {
        n.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
      } }), hd = ee({ "node_modules/linguist-languages/data/SCSS.json"(e, n) {
        n.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
      } }), vd = ee({ "src/language-css/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = fd(), a = Dd(), r = md(), u = [t(dd(), (l) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...l.extensions, ".wxss"] })), t(gd(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), t(yd(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), t(hd(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], i = { postcss: s };
        n.exports = { languages: u, options: a, printers: i, parsers: r };
      } }), Cd = ee({ "src/language-handlebars/loc.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return a.loc.start.offset;
        }
        function s(a) {
          return a.loc.end.offset;
        }
        n.exports = { locStart: t, locEnd: s };
      } }), Ed = ee({ "src/language-handlebars/clean.js"(e, n) {
        "use strict";
        re();
        function t(s, a) {
          if (s.type === "TextNode") {
            let r = s.chars.trim();
            if (!r)
              return null;
            a.chars = r.replace(/[\t\n\f\r ]+/g, " ");
          }
          s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete a.value;
        }
        t.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), n.exports = t;
      } }), Fd = ee({ "vendors/html-void-elements.json"(e, n) {
        n.exports = { htmlVoidElements: ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"] };
      } }), Ad = ee({ "src/language-handlebars/utils.js"(e, n) {
        "use strict";
        re();
        var { htmlVoidElements: t } = Fd(), s = lt();
        function a(A) {
          let B = A.getValue(), I = A.getParentNode(0);
          return !!(h(A, ["ElementNode"]) && s(I.children) === B || h(A, ["Block"]) && s(I.body) === B);
        }
        function r(A) {
          return A.toUpperCase() === A;
        }
        function u(A) {
          return y(A, ["ElementNode"]) && typeof A.tag == "string" && !A.tag.startsWith(":") && (r(A.tag[0]) || A.tag.includes("."));
        }
        var i = new Set(t);
        function l(A) {
          return i.has(A.tag) || u(A) && A.children.every((B) => c(B));
        }
        function c(A) {
          return y(A, ["TextNode"]) && !/\S/.test(A.chars);
        }
        function y(A, B) {
          return A && B.includes(A.type);
        }
        function h(A, B) {
          let I = A.getParentNode(0);
          return y(I, B);
        }
        function g(A, B) {
          let I = v(A);
          return y(I, B);
        }
        function p(A, B) {
          let I = w(A);
          return y(I, B);
        }
        function D(A, B) {
          var I, P, R, f;
          let x = A.getValue(), m = (I = A.getParentNode(0)) !== null && I !== void 0 ? I : {}, E = (P = (R = (f = m.children) !== null && f !== void 0 ? f : m.body) !== null && R !== void 0 ? R : m.parts) !== null && P !== void 0 ? P : [], o = E.indexOf(x);
          return o !== -1 && E[o + B];
        }
        function v(A) {
          let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return D(A, -B);
        }
        function w(A) {
          return D(A, 1);
        }
        function T(A) {
          return y(A, ["MustacheCommentStatement"]) && typeof A.value == "string" && A.value.trim() === "prettier-ignore";
        }
        function F(A) {
          let B = A.getValue(), I = v(A, 2);
          return T(B) || T(I);
        }
        n.exports = { getNextNode: w, getPreviousNode: v, hasPrettierIgnore: F, isLastNodeOfSiblings: a, isNextNodeOfSomeType: p, isNodeOfSomeType: y, isParentOfSomeType: h, isPreviousNodeOfSomeType: g, isVoid: l, isWhitespaceNode: c };
      } }), Sd = ee({ "src/language-handlebars/printer-glimmer.js"(e, n) {
        "use strict";
        re();
        var { builders: { dedent: t, fill: s, group: a, hardline: r, ifBreak: u, indent: i, join: l, line: c, softline: y }, utils: { getDocParts: h, replaceTextEndOfLine: g } } = qe(), { getPreferredQuote: p, isNonEmptyArray: D } = Ge(), { locStart: v, locEnd: w } = Cd(), T = Ed(), { getNextNode: F, getPreviousNode: A, hasPrettierIgnore: B, isLastNodeOfSiblings: I, isNextNodeOfSomeType: P, isNodeOfSomeType: R, isParentOfSomeType: f, isPreviousNodeOfSomeType: x, isVoid: m, isWhitespaceNode: E } = Ad(), o = 2;
        function d(U, de, De) {
          let he = U.getValue();
          if (!he)
            return "";
          if (B(U))
            return de.originalText.slice(v(he), w(he));
          let Be = de.singleQuote ? "'" : '"';
          switch (he.type) {
            case "Block":
            case "Program":
            case "Template":
              return a(U.map(De, "body"));
            case "ElementNode": {
              let Se = a(_(U, De)), ye = de.htmlWhitespaceSensitivity === "ignore" && P(U, ["ElementNode"]) ? y : "";
              if (m(he))
                return [Se, ye];
              let S = ["</", he.tag, ">"];
              return he.children.length === 0 ? [Se, i(S), ye] : de.htmlWhitespaceSensitivity === "ignore" ? [Se, i(b(U, de, De)), r, i(S), ye] : [Se, i(a(b(U, de, De))), i(S), ye];
            }
            case "BlockStatement": {
              let Se = U.getParentNode(1);
              return Se && Se.inverse && Se.inverse.body.length === 1 && Se.inverse.body[0] === he && Se.inverse.body[0].path.parts[0] === Se.path.parts[0] ? [se(U, De, Se.inverse.body[0].path.parts[0]), oe(U, De, de), ae(U, De, de)] : [O(U, De), a([oe(U, De, de), ae(U, De, de), Q(U, De, de)])];
            }
            case "ElementModifierStatement":
              return a(["{{", pe(U, De), "}}"]);
            case "MustacheStatement":
              return a([k(he), pe(U, De), $(he)]);
            case "SubExpression":
              return a(["(", Oe(U, De), y, ")"]);
            case "AttrNode": {
              let Se = he.value.type === "TextNode";
              if (Se && he.value.chars === "" && v(he.value) === w(he.value))
                return he.name;
              let S = Se ? p(he.value.chars, Be).quote : he.value.type === "ConcatStatement" ? p(he.value.parts.filter((te) => te.type === "TextNode").map((te) => te.chars).join(""), Be).quote : "", G = De("value");
              return [he.name, "=", S, he.name === "class" && S ? a(i(G)) : G, S];
            }
            case "ConcatStatement":
              return U.map(De, "parts");
            case "Hash":
              return l(c, U.map(De, "pairs"));
            case "HashPair":
              return [he.key, "=", De("value")];
            case "TextNode": {
              let Se = he.chars.replace(/{{/g, "\\{{"), ye = H(U);
              if (ye) {
                if (ye === "class") {
                  let xe = Se.trim().split(/\s+/).join(" "), Je = false, we = false;
                  return f(U, ["ConcatStatement"]) && (x(U, ["MustacheStatement"]) && /^\s/.test(Se) && (Je = true), P(U, ["MustacheStatement"]) && /\s$/.test(Se) && xe !== "" && (we = true)), [Je ? c : "", xe, we ? c : ""];
                }
                return g(Se);
              }
              let G = /^[\t\n\f\r ]*$/.test(Se), te = !A(U), Ee = !F(U);
              if (de.htmlWhitespaceSensitivity !== "ignore") {
                let xe = /^[\t\n\f\r ]*/, Je = /[\t\n\f\r ]*$/, we = Ee && f(U, ["Template"]), Le = te && f(U, ["Template"]);
                if (G) {
                  if (Le || we)
                    return "";
                  let ue = [c], st = Z(Se);
                  return st && (ue = ge(st)), I(U) && (ue = ue.map((rt) => t(rt))), ue;
                }
                let [Ve] = Se.match(xe), [be] = Se.match(Je), ke = [];
                if (Ve) {
                  ke = [c];
                  let ue = Z(Ve);
                  ue && (ke = ge(ue)), Se = Se.replace(xe, "");
                }
                let Me = [];
                if (be) {
                  if (!we) {
                    Me = [c];
                    let ue = Z(be);
                    ue && (Me = ge(ue)), I(U) && (Me = Me.map((st) => t(st)));
                  }
                  Se = Se.replace(Je, "");
                }
                return [...ke, s(Ae(Se)), ...Me];
              }
              let Re = Z(Se), Te = ne(Se), Pe = fe(Se);
              if ((te || Ee) && G && f(U, ["Block", "ElementNode", "Template"]))
                return "";
              G && Re ? (Te = Math.min(Re, o), Pe = 0) : (P(U, ["BlockStatement", "ElementNode"]) && (Pe = Math.max(Pe, 1)), x(U, ["BlockStatement", "ElementNode"]) && (Te = Math.max(Te, 1)));
              let Fe = "", Ze = "";
              return Pe === 0 && P(U, ["MustacheStatement"]) && (Ze = " "), Te === 0 && x(U, ["MustacheStatement"]) && (Fe = " "), te && (Te = 0, Fe = ""), Ee && (Pe = 0, Ze = ""), Se = Se.replace(/^[\t\n\f\r ]+/g, Fe).replace(/[\t\n\f\r ]+$/, Ze), [...ge(Te), s(Ae(Se)), ...ge(Pe)];
            }
            case "MustacheCommentStatement": {
              let Se = v(he), ye = w(he), S = de.originalText.charAt(Se + 2) === "~", G = de.originalText.charAt(ye - 3) === "~", te = he.value.includes("}}") ? "--" : "";
              return ["{{", S ? "~" : "", "!", te, he.value, te, G ? "~" : "", "}}"];
            }
            case "PathExpression":
              return he.original;
            case "BooleanLiteral":
              return String(he.value);
            case "CommentStatement":
              return ["<!--", he.value, "-->"];
            case "StringLiteral": {
              if (_e(U)) {
                let Se = de.singleQuote ? '"' : "'";
                return Ce(he.value, Se);
              }
              return Ce(he.value, Be);
            }
            case "NumberLiteral":
              return String(he.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(he.type));
          }
        }
        function C(U, de) {
          return v(U) - v(de);
        }
        function _(U, de) {
          let De = U.getValue(), he = ["attributes", "modifiers", "comments"].filter((Se) => D(De[Se])), Be = he.flatMap((Se) => De[Se]).sort(C);
          for (let Se of he)
            U.each((ye) => {
              let S = Be.indexOf(ye.getValue());
              Be.splice(S, 1, [c, de()]);
            }, Se);
          return D(De.blockParams) && Be.push(c, ce(De)), ["<", De.tag, i(Be), N(De)];
        }
        function b(U, de, De) {
          let Be = U.getValue().children.every((Se) => E(Se));
          return de.htmlWhitespaceSensitivity === "ignore" && Be ? "" : U.map((Se, ye) => {
            let S = De();
            return ye === 0 && de.htmlWhitespaceSensitivity === "ignore" ? [y, S] : S;
          }, "children");
        }
        function N(U) {
          return m(U) ? u([y, "/>"], [" />", y]) : u([y, ">"], ">");
        }
        function k(U) {
          let de = U.escaped === false ? "{{{" : "{{", De = U.strip && U.strip.open ? "~" : "";
          return [de, De];
        }
        function $(U) {
          let de = U.escaped === false ? "}}}" : "}}";
          return [U.strip && U.strip.close ? "~" : "", de];
        }
        function M(U) {
          let de = k(U), De = U.openStrip.open ? "~" : "";
          return [de, De, "#"];
        }
        function q(U) {
          let de = $(U);
          return [U.openStrip.close ? "~" : "", de];
        }
        function J(U) {
          let de = k(U), De = U.closeStrip.open ? "~" : "";
          return [de, De, "/"];
        }
        function L(U) {
          let de = $(U);
          return [U.closeStrip.close ? "~" : "", de];
        }
        function Y(U) {
          let de = k(U), De = U.inverseStrip.open ? "~" : "";
          return [de, De];
        }
        function V(U) {
          let de = $(U);
          return [U.inverseStrip.close ? "~" : "", de];
        }
        function O(U, de) {
          let De = U.getValue(), he = M(De), Be = q(De), Se = [ie(U, de)], ye = ve(U, de);
          if (ye && Se.push(c, ye), D(De.program.blockParams)) {
            let S = ce(De.program);
            Se.push(c, S);
          }
          return a([he, i(Se), y, Be]);
        }
        function K(U, de) {
          return [de.htmlWhitespaceSensitivity === "ignore" ? r : "", Y(U), "else", V(U)];
        }
        function se(U, de, De) {
          let he = U.getParentNode(1);
          return [Y(he), "else ", De, " ", ve(U, de), V(he)];
        }
        function Q(U, de, De) {
          let he = U.getValue();
          return De.htmlWhitespaceSensitivity === "ignore" ? [le(he) ? y : r, J(he), de("path"), L(he)] : [J(he), de("path"), L(he)];
        }
        function le(U) {
          return R(U, ["BlockStatement"]) && U.program.body.every((de) => E(de));
        }
        function W(U) {
          return X(U) && U.inverse.body.length === 1 && R(U.inverse.body[0], ["BlockStatement"]) && U.inverse.body[0].path.parts[0] === U.path.parts[0];
        }
        function X(U) {
          return R(U, ["BlockStatement"]) && U.inverse;
        }
        function oe(U, de, De) {
          let he = U.getValue();
          if (le(he))
            return "";
          let Be = de("program");
          return De.htmlWhitespaceSensitivity === "ignore" ? i([r, Be]) : i(Be);
        }
        function ae(U, de, De) {
          let he = U.getValue(), Be = de("inverse"), Se = De.htmlWhitespaceSensitivity === "ignore" ? [r, Be] : Be;
          return W(he) ? Se : X(he) ? [K(he, De), i(Se)] : "";
        }
        function Ae(U) {
          return h(l(c, z(U)));
        }
        function z(U) {
          return U.split(/[\t\n\f\r ]+/);
        }
        function H(U) {
          for (let de = 0; de < 2; de++) {
            let De = U.getParentNode(de);
            if (De && De.type === "AttrNode")
              return De.name.toLowerCase();
          }
        }
        function Z(U) {
          return U = typeof U == "string" ? U : "", U.split(`
`).length - 1;
        }
        function ne(U) {
          U = typeof U == "string" ? U : "";
          let de = (U.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return Z(de);
        }
        function fe(U) {
          U = typeof U == "string" ? U : "";
          let de = (U.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return Z(de);
        }
        function ge() {
          let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(U, o) }).fill(r);
        }
        function Ce(U, de) {
          let { quote: De, regex: he } = p(U, de);
          return [De, U.replace(he, `\\${De}`), De];
        }
        function _e(U) {
          let de = 0, De = U.getParentNode(de);
          for (; De && R(De, ["SubExpression"]); )
            de++, De = U.getParentNode(de);
          return !!(De && R(U.getParentNode(de + 1), ["ConcatStatement"]) && R(U.getParentNode(de + 2), ["AttrNode"]));
        }
        function Oe(U, de) {
          let De = ie(U, de), he = ve(U, de);
          return he ? i([De, c, a(he)]) : De;
        }
        function pe(U, de) {
          let De = ie(U, de), he = ve(U, de);
          return he ? [i([De, c, he]), y] : De;
        }
        function ie(U, de) {
          return de("path");
        }
        function ve(U, de) {
          let De = U.getValue(), he = [];
          if (De.params.length > 0) {
            let Be = U.map(de, "params");
            he.push(...Be);
          }
          if (De.hash && De.hash.pairs.length > 0) {
            let Be = de("hash");
            he.push(Be);
          }
          return he.length === 0 ? "" : l(c, he);
        }
        function ce(U) {
          return ["as |", U.blockParams.join(" "), "|"];
        }
        n.exports = { print: d, massageAstNode: T };
      } }), xd = ee({ "src/language-handlebars/parsers.js"() {
        re();
      } }), bd = ee({ "node_modules/linguist-languages/data/Handlebars.json"(e, n) {
        n.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
      } }), Td = ee({ "src/language-handlebars/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = Sd(), a = xd(), r = [t(bd(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], u = { glimmer: s };
        n.exports = { languages: r, printers: u, parsers: a };
      } }), Bd = ee({ "src/language-graphql/pragma.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(a);
        }
        function s(a) {
          return `# @format

` + a;
        }
        n.exports = { hasPragma: t, insertPragma: s };
      } }), Nd = ee({ "src/language-graphql/loc.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return typeof a.start == "number" ? a.start : a.loc && a.loc.start;
        }
        function s(a) {
          return typeof a.end == "number" ? a.end : a.loc && a.loc.end;
        }
        n.exports = { locStart: t, locEnd: s };
      } }), wd = ee({ "src/language-graphql/printer-graphql.js"(e, n) {
        "use strict";
        re();
        var { builders: { join: t, hardline: s, line: a, softline: r, group: u, indent: i, ifBreak: l } } = qe(), { isNextLineEmpty: c, isNonEmptyArray: y } = Ge(), { insertPragma: h } = Bd(), { locStart: g, locEnd: p } = Nd();
        function D(P, R, f) {
          let x = P.getValue();
          if (!x)
            return "";
          if (typeof x == "string")
            return x;
          switch (x.kind) {
            case "Document": {
              let m = [];
              return P.each((E, o, d) => {
                m.push(f()), o !== d.length - 1 && (m.push(s), c(R.originalText, E.getValue(), p) && m.push(s));
              }, "definitions"), [...m, s];
            }
            case "OperationDefinition": {
              let m = R.originalText[g(x)] !== "{", E = Boolean(x.name);
              return [m ? x.operation : "", m && E ? [" ", f("name")] : "", m && !E && y(x.variableDefinitions) ? " " : "", y(x.variableDefinitions) ? u(["(", i([r, t([l("", ", "), r], P.map(f, "variableDefinitions"))]), r, ")"]) : "", v(P, f, x), x.selectionSet ? !m && !E ? "" : " " : "", f("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", f("name"), y(x.variableDefinitions) ? u(["(", i([r, t([l("", ", "), r], P.map(f, "variableDefinitions"))]), r, ")"]) : "", " on ", f("typeCondition"), v(P, f, x), " ", f("selectionSet")];
            case "SelectionSet":
              return ["{", i([s, t(s, w(P, R, f, "selections"))]), s, "}"];
            case "Field":
              return u([x.alias ? [f("alias"), ": "] : "", f("name"), x.arguments.length > 0 ? u(["(", i([r, t([l("", ", "), r], w(P, R, f, "arguments"))]), r, ")"]) : "", v(P, f, x), x.selectionSet ? " " : "", f("selectionSet")]);
            case "Name":
              return x.value;
            case "StringValue": {
              if (x.block) {
                let m = x.value.replace(/"""/g, "\\$&").split(`
`);
                return m.length === 1 && (m[0] = m[0].trim()), m.every((E) => E === "") && (m.length = 0), t(s, ['"""', ...m, '"""']);
              }
              return ['"', x.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return x.value;
            case "BooleanValue":
              return x.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", f("name")];
            case "ListValue":
              return u(["[", i([r, t([l("", ", "), r], P.map(f, "values"))]), r, "]"]);
            case "ObjectValue":
              return u(["{", R.bracketSpacing && x.fields.length > 0 ? " " : "", i([r, t([l("", ", "), r], P.map(f, "fields"))]), r, l("", R.bracketSpacing && x.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [f("name"), ": ", f("value")];
            case "Directive":
              return ["@", f("name"), x.arguments.length > 0 ? u(["(", i([r, t([l("", ", "), r], w(P, R, f, "arguments"))]), r, ")"]) : ""];
            case "NamedType":
              return f("name");
            case "VariableDefinition":
              return [f("variable"), ": ", f("type"), x.defaultValue ? [" = ", f("defaultValue")] : "", v(P, f, x)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [f("description"), x.description ? s : "", x.kind === "ObjectTypeExtension" ? "extend " : "", "type ", f("name"), x.interfaces.length > 0 ? [" implements ", ...A(P, R, f)] : "", v(P, f, x), x.fields.length > 0 ? [" {", i([s, t(s, w(P, R, f, "fields"))]), s, "}"] : ""];
            case "FieldDefinition":
              return [f("description"), x.description ? s : "", f("name"), x.arguments.length > 0 ? u(["(", i([r, t([l("", ", "), r], w(P, R, f, "arguments"))]), r, ")"]) : "", ": ", f("type"), v(P, f, x)];
            case "DirectiveDefinition":
              return [f("description"), x.description ? s : "", "directive ", "@", f("name"), x.arguments.length > 0 ? u(["(", i([r, t([l("", ", "), r], w(P, R, f, "arguments"))]), r, ")"]) : "", x.repeatable ? " repeatable" : "", " on ", t(" | ", P.map(f, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [f("description"), x.description ? s : "", x.kind === "EnumTypeExtension" ? "extend " : "", "enum ", f("name"), v(P, f, x), x.values.length > 0 ? [" {", i([s, t(s, w(P, R, f, "values"))]), s, "}"] : ""];
            case "EnumValueDefinition":
              return [f("description"), x.description ? s : "", f("name"), v(P, f, x)];
            case "InputValueDefinition":
              return [f("description"), x.description ? x.description.block ? s : a : "", f("name"), ": ", f("type"), x.defaultValue ? [" = ", f("defaultValue")] : "", v(P, f, x)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [f("description"), x.description ? s : "", x.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", f("name"), v(P, f, x), x.fields.length > 0 ? [" {", i([s, t(s, w(P, R, f, "fields"))]), s, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", v(P, f, x), ...x.operationTypes.length > 0 ? [" {", i([s, t(s, w(P, R, f, "operationTypes"))]), s, "}"] : []];
            case "SchemaDefinition":
              return [f("description"), x.description ? s : "", "schema", v(P, f, x), " {", x.operationTypes.length > 0 ? i([s, t(s, w(P, R, f, "operationTypes"))]) : "", s, "}"];
            case "OperationTypeDefinition":
              return [f("operation"), ": ", f("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [f("description"), x.description ? s : "", x.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", f("name"), x.interfaces.length > 0 ? [" implements ", ...A(P, R, f)] : "", v(P, f, x), x.fields.length > 0 ? [" {", i([s, t(s, w(P, R, f, "fields"))]), s, "}"] : ""];
            case "FragmentSpread":
              return ["...", f("name"), v(P, f, x)];
            case "InlineFragment":
              return ["...", x.typeCondition ? [" on ", f("typeCondition")] : "", v(P, f, x), " ", f("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return u([f("description"), x.description ? s : "", u([x.kind === "UnionTypeExtension" ? "extend " : "", "union ", f("name"), v(P, f, x), x.types.length > 0 ? [" =", l("", " "), i([l([a, "  "]), t([a, "| "], P.map(f, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [f("description"), x.description ? s : "", x.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", f("name"), v(P, f, x)];
            case "NonNullType":
              return [f("type"), "!"];
            case "ListType":
              return ["[", f("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(x.kind));
          }
        }
        function v(P, R, f) {
          if (f.directives.length === 0)
            return "";
          let x = t(a, P.map(R, "directives"));
          return f.kind === "FragmentDefinition" || f.kind === "OperationDefinition" ? u([a, x]) : [" ", u(i([r, x]))];
        }
        function w(P, R, f, x) {
          return P.map((m, E, o) => {
            let d = f();
            return E < o.length - 1 && c(R.originalText, m.getValue(), p) ? [d, s] : d;
          }, x);
        }
        function T(P) {
          return P.kind && P.kind !== "Comment";
        }
        function F(P) {
          let R = P.getValue();
          if (R.kind === "Comment")
            return "#" + R.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(R));
        }
        function A(P, R, f) {
          let x = P.getNode(), m = [], { interfaces: E } = x, o = P.map((d) => f(d), "interfaces");
          for (let d = 0; d < E.length; d++) {
            let C = E[d];
            m.push(o[d]);
            let _ = E[d + 1];
            if (_) {
              let b = R.originalText.slice(C.loc.end, _.loc.start), N = b.includes("#"), k = b.replace(/#.*/g, "").trim();
              m.push(k === "," ? "," : " &", N ? a : " ");
            }
          }
          return m;
        }
        function B(P, R) {
          P.kind === "StringValue" && P.block && !P.value.includes(`
`) && (R.value = R.value.trim());
        }
        B.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function I(P) {
          var R;
          let f = P.getValue();
          return f == null || (R = f.comments) === null || R === void 0 ? void 0 : R.some((x) => x.value.trim() === "prettier-ignore");
        }
        n.exports = { print: D, massageAstNode: B, hasPrettierIgnore: I, insertPragma: h, printComment: F, canAttachComment: T };
      } }), _d = ee({ "src/language-graphql/options.js"(e, n) {
        "use strict";
        re();
        var t = qt();
        n.exports = { bracketSpacing: t.bracketSpacing };
      } }), Pd = ee({ "src/language-graphql/parsers.js"() {
        re();
      } }), Id = ee({ "node_modules/linguist-languages/data/GraphQL.json"(e, n) {
        n.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
      } }), kd = ee({ "src/language-graphql/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = wd(), a = _d(), r = Pd(), u = [t(Id(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], i = { graphql: s };
        n.exports = { languages: u, options: a, printers: i, parsers: r };
      } }), co = ee({ "src/language-markdown/loc.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        n.exports = { locStart: t, locEnd: s };
      } }), Ld = ee({ "src/language-markdown/constants.evaluate.js"(e, n) {
        n.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
      } }), Yn = ee({ "src/language-markdown/utils.js"(e, n) {
        "use strict";
        re();
        var { getLast: t } = Ge(), { locStart: s, locEnd: a } = co(), { cjkPattern: r, kPattern: u, punctuationPattern: i } = Ld(), l = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], c = [...l, "tableCell", "paragraph", "heading"], y = new RegExp(u), h = new RegExp(i);
        function g(F, A) {
          let B = "non-cjk", I = "cj-letter", P = "k-letter", R = "cjk-punctuation", f = [], x = (A.proseWrap === "preserve" ? F : F.replace(new RegExp(`(${r})
(${r})`, "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [E, o] of x.entries()) {
            if (E % 2 === 1) {
              f.push({ type: "whitespace", value: /\n/.test(o) ? `
` : " " });
              continue;
            }
            if ((E === 0 || E === x.length - 1) && o === "")
              continue;
            let d = o.split(new RegExp(`(${r})`));
            for (let [C, _] of d.entries())
              if (!((C === 0 || C === d.length - 1) && _ === "")) {
                if (C % 2 === 0) {
                  _ !== "" && m({ type: "word", value: _, kind: B, hasLeadingPunctuation: h.test(_[0]), hasTrailingPunctuation: h.test(t(_)) });
                  continue;
                }
                m(h.test(_) ? { type: "word", value: _, kind: R, hasLeadingPunctuation: true, hasTrailingPunctuation: true } : { type: "word", value: _, kind: y.test(_) ? P : I, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
              }
          }
          return f;
          function m(E) {
            let o = t(f);
            o && o.type === "word" && (o.kind === B && E.kind === I && !o.hasTrailingPunctuation || o.kind === I && E.kind === B && !E.hasLeadingPunctuation ? f.push({ type: "whitespace", value: " " }) : !d(B, R) && ![o.value, E.value].some((C) => /\u3000/.test(C)) && f.push({ type: "whitespace", value: "" })), f.push(E);
            function d(C, _) {
              return o.kind === C && E.kind === _ || o.kind === _ && E.kind === C;
            }
          }
        }
        function p(F, A) {
          let [, B, I, P] = A.slice(F.position.start.offset, F.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: B, marker: I, leadingSpaces: P };
        }
        function D(F, A) {
          if (!F.ordered || F.children.length < 2)
            return false;
          let B = Number(p(F.children[0], A.originalText).numberText), I = Number(p(F.children[1], A.originalText).numberText);
          if (B === 0 && F.children.length > 2) {
            let P = Number(p(F.children[2], A.originalText).numberText);
            return I === 1 && P === 1;
          }
          return I === 1;
        }
        function v(F, A) {
          let { value: B } = F;
          return F.position.end.offset === A.length && B.endsWith(`
`) && A.endsWith(`
`) ? B.slice(0, -1) : B;
        }
        function w(F, A) {
          return function B(I, P, R) {
            let f = Object.assign({}, A(I, P, R));
            return f.children && (f.children = f.children.map((x, m) => B(x, m, [f, ...R]))), f;
          }(F, null, []);
        }
        function T(F) {
          if ((F == null ? void 0 : F.type) !== "link" || F.children.length !== 1)
            return false;
          let [A] = F.children;
          return s(F) === s(A) && a(F) === a(A);
        }
        n.exports = { mapAst: w, splitText: g, punctuationPattern: i, getFencedCodeBlockValue: v, getOrderedListItemInfo: p, hasGitDiffFriendlyOrderedList: D, INLINE_NODE_TYPES: l, INLINE_NODE_WRAPPER_TYPES: c, isAutolink: T };
      } }), jd = ee({ "src/language-markdown/embed.js"(e, n) {
        "use strict";
        re();
        var { inferParserByLanguage: t, getMaxContinuousCount: s } = Ge(), { builders: { hardline: a, markAsRoot: r }, utils: { replaceEndOfLine: u } } = qe(), i = Kn(), { getFencedCodeBlockValue: l } = Yn();
        function c(y, h, g, p) {
          let D = y.getValue();
          if (D.type === "code" && D.lang !== null) {
            let v = t(D.lang, p);
            if (v) {
              let w = p.__inJsTemplate ? "~" : "`", T = w.repeat(Math.max(3, s(D.value, w) + 1)), F = { parser: v };
              D.lang === "tsx" && (F.filepath = "dummy.tsx");
              let A = g(l(D, p.originalText), F, { stripTrailingHardline: true });
              return r([T, D.lang, D.meta ? " " + D.meta : "", a, u(A), a, T]);
            }
          }
          switch (D.type) {
            case "front-matter":
              return i(D, g);
            case "importExport":
              return [g(D.value, { parser: "babel" }, { stripTrailingHardline: true }), a];
            case "jsx":
              return g(`<$>${D.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: true });
          }
          return null;
        }
        n.exports = c;
      } }), po = ee({ "src/language-markdown/pragma.js"(e, n) {
        "use strict";
        re();
        var t = lo(), s = ["format", "prettier"];
        function a(r) {
          let u = `@(${s.join("|")})`, i = new RegExp([`<!--\\s*${u}\\s*-->`, `{\\s*\\/\\*\\s*${u}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${u}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m"), l = r.match(i);
          return (l == null ? void 0 : l.index) === 0;
        }
        n.exports = { startWithPragma: a, hasPragma: (r) => a(t(r).content.trimStart()), insertPragma: (r) => {
          let u = t(r), i = `<!-- @${s[0]} -->`;
          return u.frontMatter ? `${u.frontMatter.raw}

${i}

${u.content}` : `${i}

${u.content}`;
        } };
      } }), Od = ee({ "src/language-markdown/print-preprocess.js"(e, n) {
        "use strict";
        re();
        var t = lt(), { getOrderedListItemInfo: s, mapAst: a, splitText: r } = Yn(), u = /^.$/su;
        function i(T, F) {
          return T = y(T, F), T = p(T), T = c(T, F), T = v(T, F), T = w(T, F), T = D(T, F), T = l(T), T = h(T), T;
        }
        function l(T) {
          return a(T, (F) => F.type !== "import" && F.type !== "export" ? F : Object.assign(Object.assign({}, F), {}, { type: "importExport" }));
        }
        function c(T, F) {
          return a(T, (A) => A.type !== "inlineCode" || F.proseWrap === "preserve" ? A : Object.assign(Object.assign({}, A), {}, { value: A.value.replace(/\s+/g, " ") }));
        }
        function y(T, F) {
          return a(T, (A) => A.type !== "text" || A.value === "*" || A.value === "_" || !u.test(A.value) || A.position.end.offset - A.position.start.offset === A.value.length ? A : Object.assign(Object.assign({}, A), {}, { value: F.originalText.slice(A.position.start.offset, A.position.end.offset) }));
        }
        function h(T) {
          return g(T, (F, A) => F.type === "importExport" && A.type === "importExport", (F, A) => ({ type: "importExport", value: F.value + `

` + A.value, position: { start: F.position.start, end: A.position.end } }));
        }
        function g(T, F, A) {
          return a(T, (B) => {
            if (!B.children)
              return B;
            let I = B.children.reduce((P, R) => {
              let f = t(P);
              return f && F(f, R) ? P.splice(-1, 1, A(f, R)) : P.push(R), P;
            }, []);
            return Object.assign(Object.assign({}, B), {}, { children: I });
          });
        }
        function p(T) {
          return g(T, (F, A) => F.type === "text" && A.type === "text", (F, A) => ({ type: "text", value: F.value + A.value, position: { start: F.position.start, end: A.position.end } }));
        }
        function D(T, F) {
          return a(T, (A, B, I) => {
            let [P] = I;
            if (A.type !== "text")
              return A;
            let { value: R } = A;
            return P.type === "paragraph" && (B === 0 && (R = R.trimStart()), B === P.children.length - 1 && (R = R.trimEnd())), { type: "sentence", position: A.position, children: r(R, F) };
          });
        }
        function v(T, F) {
          return a(T, (A, B, I) => {
            if (A.type === "code") {
              let P = /^\n?(?: {4,}|\t)/.test(F.originalText.slice(A.position.start.offset, A.position.end.offset));
              if (A.isIndented = P, P)
                for (let R = 0; R < I.length; R++) {
                  let f = I[R];
                  if (f.hasIndentedCodeblock)
                    break;
                  f.type === "list" && (f.hasIndentedCodeblock = true);
                }
            }
            return A;
          });
        }
        function w(T, F) {
          return a(T, (I, P, R) => {
            if (I.type === "list" && I.children.length > 0) {
              for (let f = 0; f < R.length; f++) {
                let x = R[f];
                if (x.type === "list" && !x.isAligned)
                  return I.isAligned = false, I;
              }
              I.isAligned = B(I);
            }
            return I;
          });
          function A(I) {
            return I.children.length === 0 ? -1 : I.children[0].position.start.column - 1;
          }
          function B(I) {
            if (!I.ordered)
              return true;
            let [P, R] = I.children;
            if (s(P, F.originalText).leadingSpaces.length > 1)
              return true;
            let x = A(P);
            if (x === -1)
              return false;
            if (I.children.length === 1)
              return x % F.tabWidth === 0;
            let m = A(R);
            return x !== m ? false : x % F.tabWidth === 0 ? true : s(R, F.originalText).leadingSpaces.length > 1;
          }
        }
        n.exports = i;
      } }), qd = ee({ "src/language-markdown/clean.js"(e, n) {
        "use strict";
        re();
        var { isFrontMatterNode: t } = Ge(), { startWithPragma: s } = po(), a = /* @__PURE__ */ new Set(["position", "raw"]);
        function r(u, i, l) {
          if ((u.type === "front-matter" || u.type === "code" || u.type === "yaml" || u.type === "import" || u.type === "export" || u.type === "jsx") && delete i.value, u.type === "list" && delete i.isAligned, (u.type === "list" || u.type === "listItem") && (delete i.spread, delete i.loose), u.type === "text" || (u.type === "inlineCode" && (i.value = u.value.replace(/[\t\n ]+/g, " ")), u.type === "wikiLink" && (i.value = u.value.trim().replace(/[\t\n]+/g, " ")), (u.type === "definition" || u.type === "linkReference") && (i.label = u.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), (u.type === "definition" || u.type === "link" || u.type === "image") && u.title && (i.title = u.title.replace(/\\(["')])/g, "$1")), l && l.type === "root" && l.children.length > 0 && (l.children[0] === u || t(l.children[0]) && l.children[1] === u) && u.type === "html" && s(u.value)))
            return null;
        }
        r.ignoredProperties = a, n.exports = r;
      } }), Md = ee({ "src/language-markdown/printer-markdown.js"(e, n) {
        "use strict";
        re();
        var { getLast: t, getMinNotPresentContinuousCount: s, getMaxContinuousCount: a, getStringWidth: r, isNonEmptyArray: u } = Ge(), { builders: { breakParent: i, join: l, line: c, literalline: y, markAsRoot: h, hardline: g, softline: p, ifBreak: D, fill: v, align: w, indent: T, group: F, hardlineWithoutBreakParent: A }, utils: { normalizeDoc: B, replaceTextEndOfLine: I }, printer: { printDocToString: P } } = qe(), R = jd(), { insertPragma: f } = po(), { locStart: x, locEnd: m } = co(), E = Od(), o = qd(), { getFencedCodeBlockValue: d, hasGitDiffFriendlyOrderedList: C, splitText: _, punctuationPattern: b, INLINE_NODE_TYPES: N, INLINE_NODE_WRAPPER_TYPES: k, isAutolink: $ } = Yn(), M = /* @__PURE__ */ new Set(["importExport"]), q = ["heading", "tableCell", "link", "wikiLink"], J = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function L(pe, ie, ve) {
          let ce = pe.getValue();
          if (fe(pe))
            return _(ie.originalText.slice(ce.position.start.offset, ce.position.end.offset), ie).map((U) => U.type === "word" ? U.value : U.value === "" ? "" : le(pe, U.value, ie));
          switch (ce.type) {
            case "front-matter":
              return ie.originalText.slice(ce.position.start.offset, ce.position.end.offset);
            case "root":
              return ce.children.length === 0 ? "" : [B(X(pe, ie, ve)), M.has(Ae(ce).type) ? "" : g];
            case "paragraph":
              return oe(pe, ie, ve, { postprocessor: v });
            case "sentence":
              return oe(pe, ie, ve);
            case "word": {
              let U = ce.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${b})(_+)`, `(_+)(${b}|$)`].join("|"), "g"), (he, Be, Se, ye, S) => (Se ? `${Be}${Se}` : `${ye}${S}`).replace(/_/g, "\\_")), de = (he, Be, Se) => he.type === "sentence" && Se === 0, De = (he, Be, Se) => $(he.children[Se - 1]);
              return U !== ce.value && (pe.match(void 0, de, De) || pe.match(void 0, de, (he, Be, Se) => he.type === "emphasis" && Se === 0, De)) && (U = U.replace(/^(\\?[*_])+/, (he) => he.replace(/\\/g, ""))), U;
            }
            case "whitespace": {
              let U = pe.getParentNode(), de = U.children.indexOf(ce), De = U.children[de + 1], he = De && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(De.value) ? "never" : ie.proseWrap;
              return le(pe, ce.value, { proseWrap: he });
            }
            case "emphasis": {
              let U;
              if ($(ce.children[0]))
                U = ie.originalText[ce.position.start.offset];
              else {
                let de = pe.getParentNode(), De = de.children.indexOf(ce), he = de.children[De - 1], Be = de.children[De + 1];
                U = he && he.type === "sentence" && he.children.length > 0 && t(he.children).type === "word" && !t(he.children).hasTrailingPunctuation || Be && Be.type === "sentence" && Be.children.length > 0 && Be.children[0].type === "word" && !Be.children[0].hasLeadingPunctuation || Q(pe, "emphasis") ? "*" : "_";
              }
              return [U, oe(pe, ie, ve), U];
            }
            case "strong":
              return ["**", oe(pe, ie, ve), "**"];
            case "delete":
              return ["~~", oe(pe, ie, ve), "~~"];
            case "inlineCode": {
              let U = s(ce.value, "`"), de = "`".repeat(U || 1), De = U && !/^\s/.test(ce.value) ? " " : "";
              return [de, De, ce.value, De, de];
            }
            case "wikiLink": {
              let U = "";
              return ie.proseWrap === "preserve" ? U = ce.value : U = ce.value.replace(/[\t\n]+/g, " "), ["[[", U, "]]"];
            }
            case "link":
              switch (ie.originalText[ce.position.start.offset]) {
                case "<": {
                  let U = "mailto:", de = ce.url.startsWith(U) && ie.originalText.slice(ce.position.start.offset + 1, ce.position.start.offset + 1 + U.length) !== U ? ce.url.slice(U.length) : ce.url;
                  return ["<", de, ">"];
                }
                case "[":
                  return ["[", oe(pe, ie, ve), "](", ge(ce.url, ")"), Ce(ce.title, ie), ")"];
                default:
                  return ie.originalText.slice(ce.position.start.offset, ce.position.end.offset);
              }
            case "image":
              return ["![", ce.alt || "", "](", ge(ce.url, ")"), Ce(ce.title, ie), ")"];
            case "blockquote":
              return ["> ", w("> ", oe(pe, ie, ve))];
            case "heading":
              return ["#".repeat(ce.depth) + " ", oe(pe, ie, ve)];
            case "code": {
              if (ce.isIndented) {
                let De = " ".repeat(4);
                return w(De, [De, ...I(ce.value, g)]);
              }
              let U = ie.__inJsTemplate ? "~" : "`", de = U.repeat(Math.max(3, a(ce.value, U) + 1));
              return [de, ce.lang || "", ce.meta ? " " + ce.meta : "", g, ...I(d(ce, ie.originalText), g), g, de];
            }
            case "html": {
              let U = pe.getParentNode(), de = U.type === "root" && t(U.children) === ce ? ce.value.trimEnd() : ce.value, De = /^<!--.*-->$/s.test(de);
              return I(de, De ? g : h(y));
            }
            case "list": {
              let U = O(ce, pe.getParentNode()), de = C(ce, ie);
              return oe(pe, ie, ve, { processor: (De, he) => {
                let Be = ye(), Se = De.getValue();
                if (Se.children.length === 2 && Se.children[1].type === "html" && Se.children[0].position.start.column !== Se.children[1].position.start.column)
                  return [Be, Y(De, ie, ve, Be)];
                return [Be, w(" ".repeat(Be.length), Y(De, ie, ve, Be))];
                function ye() {
                  let S = ce.ordered ? (he === 0 ? ce.start : de ? 1 : ce.start + he) + (U % 2 === 0 ? ". " : ") ") : U % 2 === 0 ? "- " : "* ";
                  return ce.isAligned || ce.hasIndentedCodeblock ? V(S, ie) : S;
                }
              } });
            }
            case "thematicBreak": {
              let U = se(pe, "list");
              return U === -1 ? "---" : O(pe.getParentNode(U), pe.getParentNode(U + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", oe(pe, ie, ve), "]", ce.referenceType === "full" ? ["[", ce.identifier, "]"] : ce.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (ce.referenceType) {
                case "full":
                  return ["![", ce.alt || "", "][", ce.identifier, "]"];
                default:
                  return ["![", ce.alt, "]", ce.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let U = ie.proseWrap === "always" ? c : " ";
              return F(["[", ce.identifier, "]:", T([U, ge(ce.url), ce.title === null ? "" : [U, Ce(ce.title, ie, false)]])]);
            }
            case "footnote":
              return ["[^", oe(pe, ie, ve), "]"];
            case "footnoteReference":
              return ["[^", ce.identifier, "]"];
            case "footnoteDefinition": {
              let U = pe.getParentNode().children[pe.getName() + 1], de = ce.children.length === 1 && ce.children[0].type === "paragraph" && (ie.proseWrap === "never" || ie.proseWrap === "preserve" && ce.children[0].position.start.line === ce.children[0].position.end.line);
              return ["[^", ce.identifier, "]: ", de ? oe(pe, ie, ve) : F([w(" ".repeat(4), oe(pe, ie, ve, { processor: (De, he) => he === 0 ? F([p, ve()]) : ve() })), U && U.type === "footnoteDefinition" ? p : ""])];
            }
            case "table":
              return W(pe, ie, ve);
            case "tableCell":
              return oe(pe, ie, ve);
            case "break":
              return /\s/.test(ie.originalText[ce.position.start.offset]) ? ["  ", h(y)] : ["\\", g];
            case "liquidNode":
              return I(ce.value, g);
            case "importExport":
              return [ce.value, g];
            case "esComment":
              return ["{/* ", ce.value, " */}"];
            case "jsx":
              return ce.value;
            case "math":
              return ["$$", g, ce.value ? [...I(ce.value, g), g] : "", "$$"];
            case "inlineMath":
              return ie.originalText.slice(x(ce), m(ce));
            case "tableRow":
            case "listItem":
            default:
              throw new Error(`Unknown markdown type ${JSON.stringify(ce.type)}`);
          }
        }
        function Y(pe, ie, ve, ce) {
          let U = pe.getValue(), de = U.checked === null ? "" : U.checked ? "[x] " : "[ ] ";
          return [de, oe(pe, ie, ve, { processor: (De, he) => {
            if (he === 0 && De.getValue().type !== "list")
              return w(" ".repeat(de.length), ve());
            let Be = " ".repeat(_e(ie.tabWidth - ce.length, 0, 3));
            return [Be, w(Be, ve())];
          } })];
        }
        function V(pe, ie) {
          let ve = ce();
          return pe + " ".repeat(ve >= 4 ? 0 : ve);
          function ce() {
            let U = pe.length % ie.tabWidth;
            return U === 0 ? 0 : ie.tabWidth - U;
          }
        }
        function O(pe, ie) {
          return K(pe, ie, (ve) => ve.ordered === pe.ordered);
        }
        function K(pe, ie, ve) {
          let ce = -1;
          for (let U of ie.children)
            if (U.type === pe.type && ve(U) ? ce++ : ce = -1, U === pe)
              return ce;
        }
        function se(pe, ie) {
          let ve = Array.isArray(ie) ? ie : [ie], ce = -1, U;
          for (; U = pe.getParentNode(++ce); )
            if (ve.includes(U.type))
              return ce;
          return -1;
        }
        function Q(pe, ie) {
          let ve = se(pe, ie);
          return ve === -1 ? null : pe.getParentNode(ve);
        }
        function le(pe, ie, ve) {
          if (ve.proseWrap === "preserve" && ie === `
`)
            return g;
          let ce = ve.proseWrap === "always" && !Q(pe, q);
          return ie !== "" ? ce ? c : " " : ce ? p : "";
        }
        function W(pe, ie, ve) {
          let ce = pe.getValue(), U = [], de = pe.map((S) => S.map((G, te) => {
            let Ee = P(ve(), ie).formatted, Re = r(Ee);
            return U[te] = Math.max(U[te] || 3, Re), { text: Ee, width: Re };
          }, "children"), "children"), De = Be(false);
          if (ie.proseWrap !== "never")
            return [i, De];
          let he = Be(true);
          return [i, F(D(he, De))];
          function Be(S) {
            let G = [ye(de[0], S), Se(S)];
            return de.length > 1 && G.push(l(A, de.slice(1).map((te) => ye(te, S)))), l(A, G);
          }
          function Se(S) {
            return `| ${U.map((te, Ee) => {
              let Re = ce.align[Ee], Te = Re === "center" || Re === "left" ? ":" : "-", Pe = Re === "center" || Re === "right" ? ":" : "-", Fe = S ? "-" : "-".repeat(te - 2);
              return `${Te}${Fe}${Pe}`;
            }).join(" | ")} |`;
          }
          function ye(S, G) {
            return `| ${S.map((Ee, Re) => {
              let { text: Te, width: Pe } = Ee;
              if (G)
                return Te;
              let Fe = U[Re] - Pe, Ze = ce.align[Re], xe = 0;
              Ze === "right" ? xe = Fe : Ze === "center" && (xe = Math.floor(Fe / 2));
              let Je = Fe - xe;
              return `${" ".repeat(xe)}${Te}${" ".repeat(Je)}`;
            }).join(" | ")} |`;
          }
        }
        function X(pe, ie, ve) {
          let ce = [], U = null, { children: de } = pe.getValue();
          for (let [De, he] of de.entries())
            switch (z(he)) {
              case "start":
                U === null && (U = { index: De, offset: he.position.end.offset });
                break;
              case "end":
                U !== null && (ce.push({ start: U, end: { index: De, offset: he.position.start.offset } }), U = null);
                break;
              default:
                break;
            }
          return oe(pe, ie, ve, { processor: (De, he) => {
            if (ce.length > 0) {
              let Be = ce[0];
              if (he === Be.start.index)
                return [ae(de[Be.start.index]), ie.originalText.slice(Be.start.offset, Be.end.offset), ae(de[Be.end.index])];
              if (Be.start.index < he && he < Be.end.index)
                return false;
              if (he === Be.end.index)
                return ce.shift(), false;
            }
            return ve();
          } });
        }
        function oe(pe, ie, ve) {
          let ce = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: U } = ce, de = ce.processor || (() => ve()), De = pe.getValue(), he = [], Be;
          return pe.each((Se, ye) => {
            let S = Se.getValue(), G = de(Se, ye);
            if (G !== false) {
              let te = { parts: he, prevNode: Be, parentNode: De, options: ie };
              H(S, te) && (he.push(g), Be && M.has(Be.type) || (Z(S, te) || ne(S, te)) && he.push(g), ne(S, te) && he.push(g)), he.push(G), Be = S;
            }
          }, "children"), U ? U(he) : he;
        }
        function ae(pe) {
          if (pe.type === "html")
            return pe.value;
          if (pe.type === "paragraph" && Array.isArray(pe.children) && pe.children.length === 1 && pe.children[0].type === "esComment")
            return ["{/* ", pe.children[0].value, " */}"];
        }
        function Ae(pe) {
          let ie = pe;
          for (; u(ie.children); )
            ie = t(ie.children);
          return ie;
        }
        function z(pe) {
          let ie;
          if (pe.type === "html")
            ie = pe.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let ve;
            pe.type === "esComment" ? ve = pe : pe.type === "paragraph" && pe.children.length === 1 && pe.children[0].type === "esComment" && (ve = pe.children[0]), ve && (ie = ve.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return ie ? ie[1] || "next" : false;
        }
        function H(pe, ie) {
          let ve = ie.parts.length === 0, ce = N.includes(pe.type), U = pe.type === "html" && k.includes(ie.parentNode.type);
          return !ve && !ce && !U;
        }
        function Z(pe, ie) {
          var ve, ce, U;
          let De = (ie.prevNode && ie.prevNode.type) === pe.type && J.has(pe.type), he = ie.parentNode.type === "listItem" && !ie.parentNode.loose, Be = ((ve = ie.prevNode) === null || ve === void 0 ? void 0 : ve.type) === "listItem" && ie.prevNode.loose, Se = z(ie.prevNode) === "next", ye = pe.type === "html" && ((ce = ie.prevNode) === null || ce === void 0 ? void 0 : ce.type) === "html" && ie.prevNode.position.end.line + 1 === pe.position.start.line, S = pe.type === "html" && ie.parentNode.type === "listItem" && ((U = ie.prevNode) === null || U === void 0 ? void 0 : U.type) === "paragraph" && ie.prevNode.position.end.line + 1 === pe.position.start.line;
          return Be || !(De || he || Se || ye || S);
        }
        function ne(pe, ie) {
          let ve = ie.prevNode && ie.prevNode.type === "list", ce = pe.type === "code" && pe.isIndented;
          return ve && ce;
        }
        function fe(pe) {
          let ie = Q(pe, ["linkReference", "imageReference"]);
          return ie && (ie.type !== "linkReference" || ie.referenceType !== "full");
        }
        function ge(pe) {
          let ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], ve = [" ", ...Array.isArray(ie) ? ie : [ie]];
          return new RegExp(ve.map((ce) => `\\${ce}`).join("|")).test(pe) ? `<${pe}>` : pe;
        }
        function Ce(pe, ie) {
          let ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
          if (!pe)
            return "";
          if (ve)
            return " " + Ce(pe, ie, false);
          if (pe = pe.replace(/\\(["')])/g, "$1"), pe.includes('"') && pe.includes("'") && !pe.includes(")"))
            return `(${pe})`;
          let ce = pe.split("'").length - 1, U = pe.split('"').length - 1, de = ce > U ? '"' : U > ce || ie.singleQuote ? "'" : '"';
          return pe = pe.replace(/\\/, "\\\\"), pe = pe.replace(new RegExp(`(${de})`, "g"), "\\$1"), `${de}${pe}${de}`;
        }
        function _e(pe, ie, ve) {
          return pe < ie ? ie : pe > ve ? ve : pe;
        }
        function Oe(pe) {
          let ie = Number(pe.getName());
          if (ie === 0)
            return false;
          let ve = pe.getParentNode().children[ie - 1];
          return z(ve) === "next";
        }
        n.exports = { preprocess: E, print: L, embed: R, massageAstNode: o, hasPrettierIgnore: Oe, insertPragma: f };
      } }), Rd = ee({ "src/language-markdown/options.js"(e, n) {
        "use strict";
        re();
        var t = qt();
        n.exports = { proseWrap: t.proseWrap, singleQuote: t.singleQuote };
      } }), $d = ee({ "src/language-markdown/parsers.js"() {
        re();
      } }), ca = ee({ "node_modules/linguist-languages/data/Markdown.json"(e, n) {
        n.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
      } }), Vd = ee({ "src/language-markdown/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = Md(), a = Rd(), r = $d(), u = [t(ca(), (l) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...l.filenames, "README"], extensions: l.extensions.filter((c) => c !== ".mdx") })), t(ca(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], i = { mdast: s };
        n.exports = { languages: u, options: a, printers: i, parsers: r };
      } }), Wd = ee({ "src/language-html/clean.js"(e, n) {
        "use strict";
        re();
        var { isFrontMatterNode: t } = Ge(), s = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function a(r, u) {
          if (r.type === "text" || r.type === "comment" || t(r) || r.type === "yaml" || r.type === "toml")
            return null;
          r.type === "attribute" && delete u.value, r.type === "docType" && delete u.value;
        }
        a.ignoredProperties = s, n.exports = a;
      } }), Hd = ee({ "src/language-html/constants.evaluate.js"(e, n) {
        n.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
      } }), Gd = ee({ "src/language-html/utils/is-unknown-namespace.js"(e, n) {
        "use strict";
        re();
        function t(s) {
          return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
        }
        n.exports = t;
      } }), Mt = ee({ "src/language-html/utils/index.js"(e, n) {
        "use strict";
        re();
        var { inferParserByLanguage: t, isFrontMatterNode: s } = Ge(), { builders: { line: a, hardline: r, join: u }, utils: { getDocParts: i, replaceTextEndOfLine: l } } = qe(), { CSS_DISPLAY_TAGS: c, CSS_DISPLAY_DEFAULT: y, CSS_WHITE_SPACE_TAGS: h, CSS_WHITE_SPACE_DEFAULT: g } = Hd(), p = Gd(), D = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), v = (S) => S.replace(/^[\t\n\f\r ]+/, ""), w = (S) => S.replace(/[\t\n\f\r ]+$/, ""), T = (S) => v(w(S)), F = (S) => S.replace(/^[\t\f\r ]*\n/g, ""), A = (S) => F(w(S)), B = (S) => S.split(/[\t\n\f\r ]+/), I = (S) => S.match(/^[\t\n\f\r ]*/)[0], P = (S) => {
          let [, G, te, Ee] = S.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: G, trailingWhitespace: Ee, text: te };
        }, R = (S) => /[\t\n\f\r ]/.test(S);
        function f(S, G) {
          return !!(S.type === "ieConditionalComment" && S.lastChild && !S.lastChild.isSelfClosing && !S.lastChild.endSourceSpan || S.type === "ieConditionalComment" && !S.complete || ne(S) && S.children.some((te) => te.type !== "text" && te.type !== "interpolation") || De(S, G) && !o(S) && S.type !== "interpolation");
        }
        function x(S) {
          return S.type === "attribute" || !S.parent || !S.prev ? false : m(S.prev);
        }
        function m(S) {
          return S.type === "comment" && S.value.trim() === "prettier-ignore";
        }
        function E(S) {
          return S.type === "text" || S.type === "comment";
        }
        function o(S) {
          return S.type === "element" && (S.fullName === "script" || S.fullName === "style" || S.fullName === "svg:style" || p(S) && (S.name === "script" || S.name === "style"));
        }
        function d(S) {
          return S.children && !o(S);
        }
        function C(S) {
          return o(S) || S.type === "interpolation" || _(S);
        }
        function _(S) {
          return _e(S).startsWith("pre");
        }
        function b(S, G) {
          let te = Ee();
          if (te && !S.prev && S.parent && S.parent.tagDefinition && S.parent.tagDefinition.ignoreFirstLf)
            return S.type === "interpolation";
          return te;
          function Ee() {
            return s(S) ? false : (S.type === "text" || S.type === "interpolation") && S.prev && (S.prev.type === "text" || S.prev.type === "interpolation") ? true : !S.parent || S.parent.cssDisplay === "none" ? false : ne(S.parent) ? true : !(!S.prev && (S.parent.type === "root" || ne(S) && S.parent || o(S.parent) || U(S.parent, G) || !ae(S.parent.cssDisplay)) || S.prev && !H(S.prev.cssDisplay));
          }
        }
        function N(S, G) {
          return s(S) ? false : (S.type === "text" || S.type === "interpolation") && S.next && (S.next.type === "text" || S.next.type === "interpolation") ? true : !S.parent || S.parent.cssDisplay === "none" ? false : ne(S.parent) ? true : !(!S.next && (S.parent.type === "root" || ne(S) && S.parent || o(S.parent) || U(S.parent, G) || !Ae(S.parent.cssDisplay)) || S.next && !z(S.next.cssDisplay));
        }
        function k(S) {
          return Z(S.cssDisplay) && !o(S);
        }
        function $(S) {
          return s(S) || S.next && S.sourceSpan.end && S.sourceSpan.end.line + 1 < S.next.sourceSpan.start.line;
        }
        function M(S) {
          return q(S) || S.type === "element" && S.children.length > 0 && (["body", "script", "style"].includes(S.name) || S.children.some((G) => Q(G))) || S.firstChild && S.firstChild === S.lastChild && S.firstChild.type !== "text" && V(S.firstChild) && (!S.lastChild.isTrailingSpaceSensitive || O(S.lastChild));
        }
        function q(S) {
          return S.type === "element" && S.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(S.name) || S.cssDisplay.startsWith("table") && S.cssDisplay !== "table-cell");
        }
        function J(S) {
          return K(S) || S.prev && L(S.prev) || Y(S);
        }
        function L(S) {
          return K(S) || S.type === "element" && S.fullName === "br" || Y(S);
        }
        function Y(S) {
          return V(S) && O(S);
        }
        function V(S) {
          return S.hasLeadingSpaces && (S.prev ? S.prev.sourceSpan.end.line < S.sourceSpan.start.line : S.parent.type === "root" || S.parent.startSourceSpan.end.line < S.sourceSpan.start.line);
        }
        function O(S) {
          return S.hasTrailingSpaces && (S.next ? S.next.sourceSpan.start.line > S.sourceSpan.end.line : S.parent.type === "root" || S.parent.endSourceSpan && S.parent.endSourceSpan.start.line > S.sourceSpan.end.line);
        }
        function K(S) {
          switch (S.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return true;
            case "element":
              return ["script", "select"].includes(S.name);
          }
          return false;
        }
        function se(S) {
          return S.lastChild ? se(S.lastChild) : S;
        }
        function Q(S) {
          return S.children && S.children.some((G) => G.type !== "text");
        }
        function le(S) {
          let { type: G, lang: te } = S.attrMap;
          if (G === "module" || G === "text/javascript" || G === "text/babel" || G === "application/javascript" || te === "jsx")
            return "babel";
          if (G === "application/x-typescript" || te === "ts" || te === "tsx")
            return "typescript";
          if (G === "text/markdown")
            return "markdown";
          if (G === "text/html")
            return "html";
          if (G && (G.endsWith("json") || G.endsWith("importmap")) || G === "speculationrules")
            return "json";
          if (G === "text/x-handlebars-template")
            return "glimmer";
        }
        function W(S, G) {
          let { lang: te } = S.attrMap;
          if (!te || te === "postcss" || te === "css")
            return "css";
          if (te === "scss")
            return "scss";
          if (te === "less")
            return "less";
          if (te === "stylus")
            return t("stylus", G);
        }
        function X(S, G) {
          if (S.name === "script" && !S.attrMap.src)
            return !S.attrMap.lang && !S.attrMap.type ? "babel" : le(S);
          if (S.name === "style")
            return W(S, G);
          if (G && De(S, G))
            return le(S) || !("src" in S.attrMap) && t(S.attrMap.lang, G);
        }
        function oe(S) {
          return S === "block" || S === "list-item" || S.startsWith("table");
        }
        function ae(S) {
          return !oe(S) && S !== "inline-block";
        }
        function Ae(S) {
          return !oe(S) && S !== "inline-block";
        }
        function z(S) {
          return !oe(S);
        }
        function H(S) {
          return !oe(S);
        }
        function Z(S) {
          return !oe(S) && S !== "inline-block";
        }
        function ne(S) {
          return _e(S).startsWith("pre");
        }
        function fe(S, G) {
          let te = 0;
          for (let Ee = S.stack.length - 1; Ee >= 0; Ee--) {
            let Re = S.stack[Ee];
            Re && typeof Re == "object" && !Array.isArray(Re) && G(Re) && te++;
          }
          return te;
        }
        function ge(S, G) {
          let te = S;
          for (; te; ) {
            if (G(te))
              return true;
            te = te.parent;
          }
          return false;
        }
        function Ce(S, G) {
          if (S.prev && S.prev.type === "comment") {
            let Ee = S.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (Ee)
              return Ee[1];
          }
          let te = false;
          if (S.type === "element" && S.namespace === "svg")
            if (ge(S, (Ee) => Ee.fullName === "svg:foreignObject"))
              te = true;
            else
              return S.name === "svg" ? "inline-block" : "block";
          switch (G.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return G.parser === "vue" && S.parent && S.parent.type === "root" ? "block" : S.type === "element" && (!S.namespace || te || p(S)) && c[S.name] || y;
          }
        }
        function _e(S) {
          return S.type === "element" && (!S.namespace || p(S)) && h[S.name] || g;
        }
        function Oe(S) {
          let G = Number.POSITIVE_INFINITY;
          for (let te of S.split(`
`)) {
            if (te.length === 0)
              continue;
            if (!D.has(te[0]))
              return 0;
            let Ee = I(te).length;
            te.length !== Ee && Ee < G && (G = Ee);
          }
          return G === Number.POSITIVE_INFINITY ? 0 : G;
        }
        function pe(S) {
          let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oe(S);
          return G === 0 ? S : S.split(`
`).map((te) => te.slice(G)).join(`
`);
        }
        function ie(S, G) {
          let te = 0;
          for (let Ee = 0; Ee < S.length; Ee++)
            S[Ee] === G && te++;
          return te;
        }
        function ve(S) {
          return S.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var ce = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function U(S, G) {
          return de(S, G) && !ce.has(S.fullName);
        }
        function de(S, G) {
          return G.parser === "vue" && S.type === "element" && S.parent.type === "root" && S.fullName.toLowerCase() !== "html";
        }
        function De(S, G) {
          return de(S, G) && (U(S, G) || S.attrMap.lang && S.attrMap.lang !== "html");
        }
        function he(S) {
          let G = S.fullName;
          return G.charAt(0) === "#" || G === "slot-scope" || G === "v-slot" || G.startsWith("v-slot:");
        }
        function Be(S, G) {
          let te = S.parent;
          if (!de(te, G))
            return false;
          let Ee = te.fullName, Re = S.fullName;
          return Ee === "script" && Re === "setup" || Ee === "style" && Re === "vars";
        }
        function Se(S) {
          let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.value;
          return S.parent.isWhitespaceSensitive ? S.parent.isIndentationSensitive ? l(G) : l(pe(A(G)), r) : i(u(a, B(G)));
        }
        function ye(S, G) {
          return de(S, G) && S.name === "script";
        }
        n.exports = { htmlTrim: T, htmlTrimPreserveIndentation: A, hasHtmlWhitespace: R, getLeadingAndTrailingHtmlWhitespace: P, canHaveInterpolation: d, countChars: ie, countParents: fe, dedentString: pe, forceBreakChildren: q, forceBreakContent: M, forceNextEmptyLine: $, getLastDescendant: se, getNodeCssStyleDisplay: Ce, getNodeCssStyleWhiteSpace: _e, hasPrettierIgnore: x, inferScriptParser: X, isVueCustomBlock: U, isVueNonHtmlBlock: De, isVueScriptTag: ye, isVueSlotAttribute: he, isVueSfcBindingsAttribute: Be, isVueSfcBlock: de, isDanglingSpaceSensitiveNode: k, isIndentationSensitiveNode: _, isLeadingSpaceSensitiveNode: b, isPreLikeNode: ne, isScriptLikeTag: o, isTextLikeNode: E, isTrailingSpaceSensitiveNode: N, isWhitespaceSensitiveNode: C, isUnknownNamespace: p, preferHardlineAsLeadingSpaces: J, preferHardlineAsTrailingSpaces: L, shouldPreserveContent: f, unescapeQuoteEntities: ve, getTextValueParts: Se };
      } }), Ud = ee({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function n(i) {
          return i >= e.$TAB && i <= e.$SPACE || i == e.$NBSP;
        }
        e.isWhitespace = n;
        function t(i) {
          return e.$0 <= i && i <= e.$9;
        }
        e.isDigit = t;
        function s(i) {
          return i >= e.$a && i <= e.$z || i >= e.$A && i <= e.$Z;
        }
        e.isAsciiLetter = s;
        function a(i) {
          return i >= e.$a && i <= e.$f || i >= e.$A && i <= e.$F || t(i);
        }
        e.isAsciiHexDigit = a;
        function r(i) {
          return i === e.$LF || i === e.$CR;
        }
        e.isNewLine = r;
        function u(i) {
          return e.$0 <= i && i <= e.$7;
        }
        e.isOctalDigit = u;
      } }), Jd = ee({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = class {
          constructor(s, a, r) {
            this.filePath = s, this.name = a, this.members = r;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        e.StaticSymbol = n;
        var t = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(s, a, r) {
            r = r || [];
            let u = r.length ? `.${r.join(".")}` : "", i = `"${s}".${a}${u}`, l = this.cache.get(i);
            return l || (l = new n(s, a, r), this.cache.set(i, l)), l;
          }
        };
        e.StaticSymbolCache = t;
      } }), zd = ee({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = /-+([a-z0-9])/g;
        function t(o) {
          return o.replace(n, function() {
            for (var d = arguments.length, C = new Array(d), _ = 0; _ < d; _++)
              C[_] = arguments[_];
            return C[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = t;
        function s(o, d) {
          return r(o, ":", d);
        }
        e.splitAtColon = s;
        function a(o, d) {
          return r(o, ".", d);
        }
        e.splitAtPeriod = a;
        function r(o, d, C) {
          let _ = o.indexOf(d);
          return _ == -1 ? C : [o.slice(0, _).trim(), o.slice(_ + 1).trim()];
        }
        function u(o, d, C) {
          return Array.isArray(o) ? d.visitArray(o, C) : F(o) ? d.visitStringMap(o, C) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? d.visitPrimitive(o, C) : d.visitOther(o, C);
        }
        e.visitValue = u;
        function i(o) {
          return o != null;
        }
        e.isDefined = i;
        function l(o) {
          return o === void 0 ? null : o;
        }
        e.noUndefined = l;
        var c = class {
          visitArray(o, d) {
            return o.map((C) => u(C, this, d));
          }
          visitStringMap(o, d) {
            let C = {};
            return Object.keys(o).forEach((_) => {
              C[_] = u(o[_], this, d);
            }), C;
          }
          visitPrimitive(o, d) {
            return o;
          }
          visitOther(o, d) {
            return o;
          }
        };
        e.ValueTransformer = c, e.SyncAsync = { assertSync: (o) => {
          if (P(o))
            throw new Error("Illegal state: value cannot be a promise");
          return o;
        }, then: (o, d) => P(o) ? o.then(d) : d(o), all: (o) => o.some(P) ? Promise.all(o) : o };
        function y(o) {
          throw new Error(`Internal Error: ${o}`);
        }
        e.error = y;
        function h(o, d) {
          let C = Error(o);
          return C[g] = true, d && (C[p] = d), C;
        }
        e.syntaxError = h;
        var g = "ngSyntaxError", p = "ngParseErrors";
        function D(o) {
          return o[g];
        }
        e.isSyntaxError = D;
        function v(o) {
          return o[p] || [];
        }
        e.getParseErrors = v;
        function w(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = w;
        var T = Object.getPrototypeOf({});
        function F(o) {
          return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === T;
        }
        function A(o) {
          let d = "";
          for (let C = 0; C < o.length; C++) {
            let _ = o.charCodeAt(C);
            if (_ >= 55296 && _ <= 56319 && o.length > C + 1) {
              let b = o.charCodeAt(C + 1);
              b >= 56320 && b <= 57343 && (C++, _ = (_ - 55296 << 10) + b - 56320 + 65536);
            }
            _ <= 127 ? d += String.fromCharCode(_) : _ <= 2047 ? d += String.fromCharCode(_ >> 6 & 31 | 192, _ & 63 | 128) : _ <= 65535 ? d += String.fromCharCode(_ >> 12 | 224, _ >> 6 & 63 | 128, _ & 63 | 128) : _ <= 2097151 && (d += String.fromCharCode(_ >> 18 & 7 | 240, _ >> 12 & 63 | 128, _ >> 6 & 63 | 128, _ & 63 | 128));
          }
          return d;
        }
        e.utf8Encode = A;
        function B(o) {
          if (typeof o == "string")
            return o;
          if (o instanceof Array)
            return "[" + o.map(B).join(", ") + "]";
          if (o == null)
            return "" + o;
          if (o.overriddenName)
            return `${o.overriddenName}`;
          if (o.name)
            return `${o.name}`;
          if (!o.toString)
            return "object";
          let d = o.toString();
          if (d == null)
            return "" + d;
          let C = d.indexOf(`
`);
          return C === -1 ? d : d.substring(0, C);
        }
        e.stringify = B;
        function I(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }
        e.resolveForwardRef = I;
        function P(o) {
          return !!o && typeof o.then == "function";
        }
        e.isPromise = P;
        var R = class {
          constructor(o) {
            this.full = o;
            let d = o.split(".");
            this.major = d[0], this.minor = d[1], this.patch = d.slice(2).join(".");
          }
        };
        e.Version = R;
        var f = typeof window < "u" && window, x = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, m = typeof globalThis < "u" && globalThis, E = m || f || x;
        e.global = E;
      } }), Xd = ee({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Jd(), t = zd(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function a(C) {
          return C.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = a;
        var r = 0;
        function u(C) {
          if (!C || !C.reference)
            return null;
          let _ = C.reference;
          if (_ instanceof n.StaticSymbol)
            return _.name;
          if (_.__anonymousType)
            return _.__anonymousType;
          let b = t.stringify(_);
          return b.indexOf("(") >= 0 ? (b = `anonymous_${r++}`, _.__anonymousType = b) : b = a(b), b;
        }
        e.identifierName = u;
        function i(C) {
          let _ = C.reference;
          return _ instanceof n.StaticSymbol ? _.filePath : `./${t.stringify(_)}`;
        }
        e.identifierModuleUrl = i;
        function l(C, _) {
          return `View_${u({ reference: C })}_${_}`;
        }
        e.viewClassName = l;
        function c(C) {
          return `RenderType_${u({ reference: C })}`;
        }
        e.rendererTypeName = c;
        function y(C) {
          return `HostView_${u({ reference: C })}`;
        }
        e.hostViewClassName = y;
        function h(C) {
          return `${u({ reference: C })}NgFactory`;
        }
        e.componentFactoryName = h;
        var g;
        (function(C) {
          C[C.Pipe = 0] = "Pipe", C[C.Directive = 1] = "Directive", C[C.NgModule = 2] = "NgModule", C[C.Injectable = 3] = "Injectable";
        })(g = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function p(C) {
          return C.value != null ? a(C.value) : u(C.identifier);
        }
        e.tokenName = p;
        function D(C) {
          return C.identifier != null ? C.identifier.reference : C.value;
        }
        e.tokenReference = D;
        var v = class {
          constructor() {
            let { moduleUrl: C, styles: _, styleUrls: b } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = C || null, this.styles = P(_), this.styleUrls = P(b);
          }
        };
        e.CompileStylesheetMetadata = v;
        var w = class {
          constructor(C) {
            let { encapsulation: _, template: b, templateUrl: N, htmlAst: k, styles: $, styleUrls: M, externalStylesheets: q, animations: J, ngContentSelectors: L, interpolation: Y, isInline: V, preserveWhitespaces: O } = C;
            if (this.encapsulation = _, this.template = b, this.templateUrl = N, this.htmlAst = k, this.styles = P($), this.styleUrls = P(M), this.externalStylesheets = P(q), this.animations = J ? f(J) : [], this.ngContentSelectors = L || [], Y && Y.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = Y, this.isInline = V, this.preserveWhitespaces = O;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = w;
        var T = class {
          static create(C) {
            let { isHost: _, type: b, isComponent: N, selector: k, exportAs: $, changeDetection: M, inputs: q, outputs: J, host: L, providers: Y, viewProviders: V, queries: O, guards: K, viewQueries: se, entryComponents: Q, template: le, componentViewType: W, rendererType: X, componentFactory: oe } = C, ae = {}, Ae = {}, z = {};
            L != null && Object.keys(L).forEach((ne) => {
              let fe = L[ne], ge = ne.match(s);
              ge === null ? z[ne] = fe : ge[1] != null ? Ae[ge[1]] = fe : ge[2] != null && (ae[ge[2]] = fe);
            });
            let H = {};
            q == null ? void 0 : q.forEach((ne) => {
              let fe = t.splitAtColon(ne, [ne, ne]);
              H[fe[0]] = fe[1];
            });
            let Z = {};
            return J == null ? void 0 : J.forEach((ne) => {
              let fe = t.splitAtColon(ne, [ne, ne]);
              Z[fe[0]] = fe[1];
            }), new T({ isHost: _, type: b, isComponent: !!N, selector: k, exportAs: $, changeDetection: M, inputs: H, outputs: Z, hostListeners: ae, hostProperties: Ae, hostAttributes: z, providers: Y, viewProviders: V, queries: O, guards: K, viewQueries: se, entryComponents: Q, template: le, componentViewType: W, rendererType: X, componentFactory: oe });
          }
          constructor(C) {
            let { isHost: _, type: b, isComponent: N, selector: k, exportAs: $, changeDetection: M, inputs: q, outputs: J, hostListeners: L, hostProperties: Y, hostAttributes: V, providers: O, viewProviders: K, queries: se, guards: Q, viewQueries: le, entryComponents: W, template: X, componentViewType: oe, rendererType: ae, componentFactory: Ae } = C;
            this.isHost = !!_, this.type = b, this.isComponent = N, this.selector = k, this.exportAs = $, this.changeDetection = M, this.inputs = q, this.outputs = J, this.hostListeners = L, this.hostProperties = Y, this.hostAttributes = V, this.providers = P(O), this.viewProviders = P(K), this.queries = P(se), this.guards = Q, this.viewQueries = P(le), this.entryComponents = P(W), this.template = X, this.componentViewType = oe, this.rendererType = ae, this.componentFactory = Ae;
          }
          toSummary() {
            return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = T;
        var F = class {
          constructor(C) {
            let { type: _, name: b, pure: N } = C;
            this.type = _, this.name = b, this.pure = !!N;
          }
          toSummary() {
            return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = F;
        var A = class {
        };
        e.CompileShallowModuleMetadata = A;
        var B = class {
          constructor(C) {
            let { type: _, providers: b, declaredDirectives: N, exportedDirectives: k, declaredPipes: $, exportedPipes: M, entryComponents: q, bootstrapComponents: J, importedModules: L, exportedModules: Y, schemas: V, transitiveModule: O, id: K } = C;
            this.type = _ || null, this.declaredDirectives = P(N), this.exportedDirectives = P(k), this.declaredPipes = P($), this.exportedPipes = P(M), this.providers = P(b), this.entryComponents = P(q), this.bootstrapComponents = P(J), this.importedModules = P(L), this.exportedModules = P(Y), this.schemas = P(V), this.id = K || null, this.transitiveModule = O || null;
          }
          toSummary() {
            let C = this.transitiveModule;
            return { summaryKind: g.NgModule, type: this.type, entryComponents: C.entryComponents, providers: C.providers, modules: C.modules, exportedDirectives: C.exportedDirectives, exportedPipes: C.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = B;
        var I = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(C, _) {
            this.providers.push({ provider: C, module: _ });
          }
          addDirective(C) {
            this.directivesSet.has(C.reference) || (this.directivesSet.add(C.reference), this.directives.push(C));
          }
          addExportedDirective(C) {
            this.exportedDirectivesSet.has(C.reference) || (this.exportedDirectivesSet.add(C.reference), this.exportedDirectives.push(C));
          }
          addPipe(C) {
            this.pipesSet.has(C.reference) || (this.pipesSet.add(C.reference), this.pipes.push(C));
          }
          addExportedPipe(C) {
            this.exportedPipesSet.has(C.reference) || (this.exportedPipesSet.add(C.reference), this.exportedPipes.push(C));
          }
          addModule(C) {
            this.modulesSet.has(C.reference) || (this.modulesSet.add(C.reference), this.modules.push(C));
          }
          addEntryComponent(C) {
            this.entryComponentsSet.has(C.componentType) || (this.entryComponentsSet.add(C.componentType), this.entryComponents.push(C));
          }
        };
        e.TransitiveCompileNgModuleMetadata = I;
        function P(C) {
          return C || [];
        }
        var R = class {
          constructor(C, _) {
            let { useClass: b, useValue: N, useExisting: k, useFactory: $, deps: M, multi: q } = _;
            this.token = C, this.useClass = b || null, this.useValue = N, this.useExisting = k, this.useFactory = $ || null, this.dependencies = M || null, this.multi = !!q;
          }
        };
        e.ProviderMeta = R;
        function f(C) {
          return C.reduce((_, b) => {
            let N = Array.isArray(b) ? f(b) : b;
            return _.concat(N);
          }, []);
        }
        e.flatten = f;
        function x(C) {
          return C.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function m(C, _, b) {
          let N;
          return b.isInline ? _.type.reference instanceof n.StaticSymbol ? N = `${_.type.reference.filePath}.${_.type.reference.name}.html` : N = `${u(C)}/${u(_.type)}.html` : N = b.templateUrl, _.type.reference instanceof n.StaticSymbol ? N : x(N);
        }
        e.templateSourceUrl = m;
        function E(C, _) {
          let b = C.moduleUrl.split(/\/\\/g), N = b[b.length - 1];
          return x(`css/${_}${N}.ngstyle.js`);
        }
        e.sharedStylesheetJitUrl = E;
        function o(C) {
          return x(`${u(C.type)}/module.ngfactory.js`);
        }
        e.ngModuleJitUrl = o;
        function d(C, _) {
          return x(`${u(C)}/${u(_.type)}.ngfactory.js`);
        }
        e.templateJitUrl = d;
      } }), Kd = ee({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        "use strict";
        re(), Object.defineProperty(e, "__esModule", { value: true });
        var n = Ud(), t = Xd(), s = class {
          constructor(y, h, g, p) {
            this.file = y, this.offset = h, this.line = g, this.col = p;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(y) {
            let h = this.file.content, g = h.length, p = this.offset, D = this.line, v = this.col;
            for (; p > 0 && y < 0; )
              if (p--, y++, h.charCodeAt(p) == n.$LF) {
                D--;
                let T = h.substr(0, p - 1).lastIndexOf(String.fromCharCode(n.$LF));
                v = T > 0 ? p - T : p;
              } else
                v--;
            for (; p < g && y > 0; ) {
              let w = h.charCodeAt(p);
              p++, y--, w == n.$LF ? (D++, v = 0) : v++;
            }
            return new s(this.file, p, D, v);
          }
          getContext(y, h) {
            let g = this.file.content, p = this.offset;
            if (p != null) {
              p > g.length - 1 && (p = g.length - 1);
              let D = p, v = 0, w = 0;
              for (; v < y && p > 0 && (p--, v++, !(g[p] == `
` && ++w == h)); )
                ;
              for (v = 0, w = 0; v < y && D < g.length - 1 && (D++, v++, !(g[D] == `
` && ++w == h)); )
                ;
              return { before: g.substring(p, this.offset), after: g.substring(this.offset, D + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = s;
        var a = class {
          constructor(y, h) {
            this.content = y, this.url = h;
          }
        };
        e.ParseSourceFile = a;
        var r = class {
          constructor(y, h) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = y, this.end = h, this.details = g;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = r, e.EMPTY_PARSE_LOCATION = new s(new a("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new r(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var u;
        (function(y) {
          y[y.WARNING = 0] = "WARNING", y[y.ERROR = 1] = "ERROR";
        })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var i = class {
          constructor(y, h) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
            this.span = y, this.msg = h, this.level = g;
          }
          contextualMessage() {
            let y = this.span.start.getContext(100, 3);
            return y ? `${this.msg} ("${y.before}[${u[this.level]} ->]${y.after}")` : this.msg;
          }
          toString() {
            let y = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${y}`;
          }
        };
        e.ParseError = i;
        function l(y, h) {
          let g = t.identifierModuleUrl(h), p = g != null ? `in ${y} ${t.identifierName(h)} in ${g}` : `in ${y} ${t.identifierName(h)}`, D = new a("", p);
          return new r(new s(D, -1, -1, -1), new s(D, -1, -1, -1));
        }
        e.typeSourceSpan = l;
        function c(y, h, g) {
          let p = `in ${y} ${h} in ${g}`, D = new a("", p);
          return new r(new s(D, -1, -1, -1), new s(D, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = c;
      } }), Yd = ee({ "src/language-html/print-preprocess.js"(e, n) {
        "use strict";
        re();
        var { ParseSourceSpan: t } = Kd(), { htmlTrim: s, getLeadingAndTrailingHtmlWhitespace: a, hasHtmlWhitespace: r, canHaveInterpolation: u, getNodeCssStyleDisplay: i, isDanglingSpaceSensitiveNode: l, isIndentationSensitiveNode: c, isLeadingSpaceSensitiveNode: y, isTrailingSpaceSensitiveNode: h, isWhitespaceSensitiveNode: g, isVueScriptTag: p } = Mt(), D = [w, T, A, I, P, x, R, f, m, B, E];
        function v(o, d) {
          for (let C of D)
            C(o, d);
          return o;
        }
        function w(o) {
          o.walk((d) => {
            if (d.type === "element" && d.tagDefinition.ignoreFirstLf && d.children.length > 0 && d.children[0].type === "text" && d.children[0].value[0] === `
`) {
              let C = d.children[0];
              C.value.length === 1 ? d.removeChild(C) : C.value = C.value.slice(1);
            }
          });
        }
        function T(o) {
          let d = (C) => C.type === "element" && C.prev && C.prev.type === "ieConditionalStartComment" && C.prev.sourceSpan.end.offset === C.startSourceSpan.start.offset && C.firstChild && C.firstChild.type === "ieConditionalEndComment" && C.firstChild.sourceSpan.start.offset === C.startSourceSpan.end.offset;
          o.walk((C) => {
            if (C.children)
              for (let _ = 0; _ < C.children.length; _++) {
                let b = C.children[_];
                if (!d(b))
                  continue;
                let N = b.prev, k = b.firstChild;
                C.removeChild(N), _--;
                let $ = new t(N.sourceSpan.start, k.sourceSpan.end), M = new t($.start, b.sourceSpan.end);
                b.condition = N.condition, b.sourceSpan = M, b.startSourceSpan = $, b.removeChild(k);
              }
          });
        }
        function F(o, d, C) {
          o.walk((_) => {
            if (_.children)
              for (let b = 0; b < _.children.length; b++) {
                let N = _.children[b];
                if (N.type !== "text" && !d(N))
                  continue;
                N.type !== "text" && (N.type = "text", N.value = C(N));
                let k = N.prev;
                !k || k.type !== "text" || (k.value += N.value, k.sourceSpan = new t(k.sourceSpan.start, N.sourceSpan.end), _.removeChild(N), b--);
              }
          });
        }
        function A(o) {
          return F(o, (d) => d.type === "cdata", (d) => `<![CDATA[${d.value}]]>`);
        }
        function B(o) {
          let d = (C) => C.type === "element" && C.attrs.length === 0 && C.children.length === 1 && C.firstChild.type === "text" && !r(C.children[0].value) && !C.firstChild.hasLeadingSpaces && !C.firstChild.hasTrailingSpaces && C.isLeadingSpaceSensitive && !C.hasLeadingSpaces && C.isTrailingSpaceSensitive && !C.hasTrailingSpaces && C.prev && C.prev.type === "text" && C.next && C.next.type === "text";
          o.walk((C) => {
            if (C.children)
              for (let _ = 0; _ < C.children.length; _++) {
                let b = C.children[_];
                if (!d(b))
                  continue;
                let N = b.prev, k = b.next;
                N.value += `<${b.rawName}>` + b.firstChild.value + `</${b.rawName}>` + k.value, N.sourceSpan = new t(N.sourceSpan.start, k.sourceSpan.end), N.isTrailingSpaceSensitive = k.isTrailingSpaceSensitive, N.hasTrailingSpaces = k.hasTrailingSpaces, C.removeChild(b), _--, C.removeChild(k);
              }
          });
        }
        function I(o, d) {
          if (d.parser === "html")
            return;
          let C = /{{(.+?)}}/s;
          o.walk((_) => {
            if (u(_))
              for (let b of _.children) {
                if (b.type !== "text")
                  continue;
                let N = b.sourceSpan.start, k = null, $ = b.value.split(C);
                for (let M = 0; M < $.length; M++, N = k) {
                  let q = $[M];
                  if (M % 2 === 0) {
                    k = N.moveBy(q.length), q.length > 0 && _.insertChildBefore(b, { type: "text", value: q, sourceSpan: new t(N, k) });
                    continue;
                  }
                  k = N.moveBy(q.length + 4), _.insertChildBefore(b, { type: "interpolation", sourceSpan: new t(N, k), children: q.length === 0 ? [] : [{ type: "text", value: q, sourceSpan: new t(N.moveBy(2), k.moveBy(-2)) }] });
                }
                _.removeChild(b);
              }
          });
        }
        function P(o) {
          o.walk((d) => {
            if (!d.children)
              return;
            if (d.children.length === 0 || d.children.length === 1 && d.children[0].type === "text" && s(d.children[0].value).length === 0) {
              d.hasDanglingSpaces = d.children.length > 0, d.children = [];
              return;
            }
            let C = g(d), _ = c(d);
            if (!C)
              for (let b = 0; b < d.children.length; b++) {
                let N = d.children[b];
                if (N.type !== "text")
                  continue;
                let { leadingWhitespace: k, text: $, trailingWhitespace: M } = a(N.value), q = N.prev, J = N.next;
                $ ? (N.value = $, N.sourceSpan = new t(N.sourceSpan.start.moveBy(k.length), N.sourceSpan.end.moveBy(-M.length)), k && (q && (q.hasTrailingSpaces = true), N.hasLeadingSpaces = true), M && (N.hasTrailingSpaces = true, J && (J.hasLeadingSpaces = true))) : (d.removeChild(N), b--, (k || M) && (q && (q.hasTrailingSpaces = true), J && (J.hasLeadingSpaces = true)));
              }
            d.isWhitespaceSensitive = C, d.isIndentationSensitive = _;
          });
        }
        function R(o) {
          o.walk((d) => {
            d.isSelfClosing = !d.children || d.type === "element" && (d.tagDefinition.isVoid || d.startSourceSpan === d.endSourceSpan);
          });
        }
        function f(o, d) {
          o.walk((C) => {
            C.type === "element" && (C.hasHtmComponentClosingTag = C.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(d.originalText.slice(C.endSourceSpan.start.offset, C.endSourceSpan.end.offset)));
          });
        }
        function x(o, d) {
          o.walk((C) => {
            C.cssDisplay = i(C, d);
          });
        }
        function m(o, d) {
          o.walk((C) => {
            let { children: _ } = C;
            if (_) {
              if (_.length === 0) {
                C.isDanglingSpaceSensitive = l(C);
                return;
              }
              for (let b of _)
                b.isLeadingSpaceSensitive = y(b, d), b.isTrailingSpaceSensitive = h(b, d);
              for (let b = 0; b < _.length; b++) {
                let N = _[b];
                N.isLeadingSpaceSensitive = (b === 0 || N.prev.isTrailingSpaceSensitive) && N.isLeadingSpaceSensitive, N.isTrailingSpaceSensitive = (b === _.length - 1 || N.next.isLeadingSpaceSensitive) && N.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function E(o, d) {
          if (d.parser === "vue") {
            let C = o.children.find((b) => p(b, d));
            if (!C)
              return;
            let { lang: _ } = C.attrMap;
            (_ === "ts" || _ === "typescript") && (d.__should_parse_vue_template_with_ts = true);
          }
        }
        n.exports = v;
      } }), Qd = ee({ "src/language-html/pragma.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(a);
        }
        function s(a) {
          return `<!-- @format -->

` + a.replace(/^\s*\n/, "");
        }
        n.exports = { hasPragma: t, insertPragma: s };
      } }), Qn = ee({ "src/language-html/loc.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return a.sourceSpan.start.offset;
        }
        function s(a) {
          return a.sourceSpan.end.offset;
        }
        n.exports = { locStart: t, locEnd: s };
      } }), rr = ee({ "src/language-html/print/tag.js"(e, n) {
        "use strict";
        re();
        var t = Yt(), { isNonEmptyArray: s } = Ge(), { builders: { indent: a, join: r, line: u, softline: i, hardline: l }, utils: { replaceTextEndOfLine: c } } = qe(), { locStart: y, locEnd: h } = Qn(), { isTextLikeNode: g, getLastDescendant: p, isPreLikeNode: D, hasPrettierIgnore: v, shouldPreserveContent: w, isVueSfcBlock: T } = Mt();
        function F(L, Y) {
          return [L.isSelfClosing ? "" : A(L, Y), B(L, Y)];
        }
        function A(L, Y) {
          return L.lastChild && o(L.lastChild) ? "" : [I(L, Y), R(L, Y)];
        }
        function B(L, Y) {
          return (L.next ? m(L.next) : E(L.parent)) ? "" : [f(L, Y), P(L, Y)];
        }
        function I(L, Y) {
          return E(L) ? f(L.lastChild, Y) : "";
        }
        function P(L, Y) {
          return o(L) ? R(L.parent, Y) : d(L) ? q(L.next) : "";
        }
        function R(L, Y) {
          if (t(!L.isSelfClosing), x(L, Y))
            return "";
          switch (L.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (L.hasHtmComponentClosingTag)
                return "<//";
            default:
              return `</${L.rawName}`;
          }
        }
        function f(L, Y) {
          if (x(L, Y))
            return "";
          switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (L.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function x(L, Y) {
          return !L.isSelfClosing && !L.endSourceSpan && (v(L) || w(L.parent, Y));
        }
        function m(L) {
          return L.prev && L.prev.type !== "docType" && !g(L.prev) && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces;
        }
        function E(L) {
          return L.lastChild && L.lastChild.isTrailingSpaceSensitive && !L.lastChild.hasTrailingSpaces && !g(p(L.lastChild)) && !D(L);
        }
        function o(L) {
          return !L.next && !L.hasTrailingSpaces && L.isTrailingSpaceSensitive && g(p(L));
        }
        function d(L) {
          return L.next && !g(L.next) && g(L) && L.isTrailingSpaceSensitive && !L.hasTrailingSpaces;
        }
        function C(L) {
          let Y = L.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return Y ? Y[1] ? Y[1].split(/\s+/) : true : false;
        }
        function _(L) {
          return !L.prev && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces;
        }
        function b(L, Y, V) {
          let O = L.getValue();
          if (!s(O.attrs))
            return O.isSelfClosing ? " " : "";
          let K = O.prev && O.prev.type === "comment" && C(O.prev.value), se = typeof K == "boolean" ? () => K : Array.isArray(K) ? (ae) => K.includes(ae.rawName) : () => false, Q = L.map((ae) => {
            let Ae = ae.getValue();
            return se(Ae) ? c(Y.originalText.slice(y(Ae), h(Ae))) : V();
          }, "attrs"), le = O.type === "element" && O.fullName === "script" && O.attrs.length === 1 && O.attrs[0].fullName === "src" && O.children.length === 0, X = Y.singleAttributePerLine && O.attrs.length > 1 && !T(O, Y) ? l : u, oe = [a([le ? " " : u, r(X, Q)])];
          return O.firstChild && _(O.firstChild) || O.isSelfClosing && E(O.parent) || le ? oe.push(O.isSelfClosing ? " " : "") : oe.push(Y.bracketSameLine ? O.isSelfClosing ? " " : "" : O.isSelfClosing ? u : i), oe;
        }
        function N(L) {
          return L.firstChild && _(L.firstChild) ? "" : J(L);
        }
        function k(L, Y, V) {
          let O = L.getValue();
          return [$(O, Y), b(L, Y, V), O.isSelfClosing ? "" : N(O)];
        }
        function $(L, Y) {
          return L.prev && d(L.prev) ? "" : [M(L, Y), q(L)];
        }
        function M(L, Y) {
          return _(L) ? J(L.parent) : m(L) ? f(L.prev, Y) : "";
        }
        function q(L) {
          switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${L.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (L.condition)
                return `<!--[if ${L.condition}]><!--><${L.rawName}`;
            default:
              return `<${L.rawName}`;
          }
        }
        function J(L) {
          switch (t(!L.isSelfClosing), L.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (L.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        n.exports = { printClosingTag: F, printClosingTagStart: A, printClosingTagStartMarker: R, printClosingTagEndMarker: f, printClosingTagSuffix: P, printClosingTagEnd: B, needsToBorrowLastChildClosingTagEndMarker: E, needsToBorrowParentClosingTagStartMarker: o, needsToBorrowPrevClosingTagEndMarker: m, printOpeningTag: k, printOpeningTagStart: $, printOpeningTagPrefix: M, printOpeningTagStartMarker: q, printOpeningTagEndMarker: J, needsToBorrowNextOpeningTagStartMarker: d, needsToBorrowParentOpeningTagEndMarker: _ };
      } }), Zd = ee({ "node_modules/parse-srcset/src/parse-srcset.js"(e, n) {
        re(), function(t, s) {
          typeof define == "function" && define.amd ? define([], s) : typeof n == "object" && n.exports ? n.exports = s() : t.parseSrcset = s();
        }(e, function() {
          return function(t, s) {
            var a = s && s.logger || console;
            function r(R) {
              return R === " " || R === "	" || R === `
` || R === "\f" || R === "\r";
            }
            function u(R) {
              var f, x = R.exec(t.substring(A));
              if (x)
                return f = x[0], A += f.length, f;
            }
            for (var i = t.length, l = /^[ \t\n\r\u000c]+/, c = /^[, \t\n\r\u000c]+/, y = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, g = /^\d+$/, p = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D, v, w, T, F, A = 0, B = []; ; ) {
              if (u(c), A >= i)
                return B;
              D = u(y), v = [], D.slice(-1) === "," ? (D = D.replace(h, ""), P()) : I();
            }
            function I() {
              for (u(l), w = "", T = "in descriptor"; ; ) {
                if (F = t.charAt(A), T === "in descriptor")
                  if (r(F))
                    w && (v.push(w), w = "", T = "after descriptor");
                  else if (F === ",") {
                    A += 1, w && v.push(w), P();
                    return;
                  } else if (F === "(")
                    w = w + F, T = "in parens";
                  else if (F === "") {
                    w && v.push(w), P();
                    return;
                  } else
                    w = w + F;
                else if (T === "in parens")
                  if (F === ")")
                    w = w + F, T = "in descriptor";
                  else if (F === "") {
                    v.push(w), P();
                    return;
                  } else
                    w = w + F;
                else if (T === "after descriptor" && !r(F))
                  if (F === "") {
                    P();
                    return;
                  } else
                    T = "in descriptor", A -= 1;
                A += 1;
              }
            }
            function P() {
              var R = false, f, x, m, E, o = {}, d, C, _, b, N;
              for (E = 0; E < v.length; E++)
                d = v[E], C = d[d.length - 1], _ = d.substring(0, d.length - 1), b = parseInt(_, 10), N = parseFloat(_), g.test(_) && C === "w" ? ((f || x) && (R = true), b === 0 ? R = true : f = b) : p.test(_) && C === "x" ? ((f || x || m) && (R = true), N < 0 ? R = true : x = N) : g.test(_) && C === "h" ? ((m || x) && (R = true), b === 0 ? R = true : m = b) : R = true;
              R ? a && a.error && a.error("Invalid srcset descriptor found in '" + t + "' at '" + d + "'.") : (o.url = D, f && (o.w = f), x && (o.d = x), m && (o.h = m), B.push(o));
            }
          };
        });
      } }), eg = ee({ "src/language-html/syntax-attribute.js"(e, n) {
        "use strict";
        re();
        var t = Zd(), { builders: { ifBreak: s, join: a, line: r } } = qe();
        function u(l) {
          let c = t(l, { logger: { error(I) {
            throw new Error(I);
          } } }), y = c.some((I) => {
            let { w: P } = I;
            return P;
          }), h = c.some((I) => {
            let { h: P } = I;
            return P;
          }), g = c.some((I) => {
            let { d: P } = I;
            return P;
          });
          if (y + h + g > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let p = y ? "w" : h ? "h" : "d", D = y ? "w" : h ? "h" : "x", v = (I) => Math.max(...I), w = c.map((I) => I.url), T = v(w.map((I) => I.length)), F = c.map((I) => I[p]).map((I) => I ? I.toString() : ""), A = F.map((I) => {
            let P = I.indexOf(".");
            return P === -1 ? I.length : P;
          }), B = v(A);
          return a([",", r], w.map((I, P) => {
            let R = [I], f = F[P];
            if (f) {
              let x = T - I.length + 1, m = B - A[P], E = " ".repeat(x + m);
              R.push(s(E, " "), f + D);
            }
            return R;
          }));
        }
        function i(l) {
          return l.trim().split(/\s+/).join(" ");
        }
        n.exports = { printImgSrcset: u, printClassNames: i };
      } }), tg = ee({ "src/language-html/syntax-vue.js"(e, n) {
        "use strict";
        re();
        var { builders: { group: t } } = qe();
        function s(i, l) {
          let { left: c, operator: y, right: h } = a(i);
          return [t(l(`function _(${c}) {}`, { parser: "babel", __isVueForBindingLeft: true })), " ", y, " ", l(h, { parser: "__js_expression" }, { stripTrailingHardline: true })];
        }
        function a(i) {
          let l = /(.*?)\s+(in|of)\s+(.*)/s, c = /,([^,\]}]*)(?:,([^,\]}]*))?$/, y = /^\(|\)$/g, h = i.match(l);
          if (!h)
            return;
          let g = {};
          if (g.for = h[3].trim(), !g.for)
            return;
          let p = h[1].trim().replace(y, ""), D = p.match(c);
          D ? (g.alias = p.replace(c, ""), g.iterator1 = D[1].trim(), D[2] && (g.iterator2 = D[2].trim())) : g.alias = p;
          let v = [g.alias, g.iterator1, g.iterator2];
          if (!v.some((w, T) => !w && (T === 0 || v.slice(T + 1).some(Boolean))))
            return { left: v.filter(Boolean).join(","), operator: h[2], right: g.for };
        }
        function r(i, l) {
          return l(`function _(${i}) {}`, { parser: "babel", __isVueBindings: true });
        }
        function u(i) {
          let l = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, c = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, y = i.trim();
          return l.test(y) || c.test(y);
        }
        n.exports = { isVueEventBindingExpression: u, printVueFor: s, printVueBindings: r };
      } }), fo = ee({ "src/language-html/get-node-content.js"(e, n) {
        "use strict";
        re();
        var { needsToBorrowParentClosingTagStartMarker: t, printClosingTagStartMarker: s, needsToBorrowLastChildClosingTagEndMarker: a, printClosingTagEndMarker: r, needsToBorrowParentOpeningTagEndMarker: u, printOpeningTagEndMarker: i } = rr();
        function l(c, y) {
          let h = c.startSourceSpan.end.offset;
          c.firstChild && u(c.firstChild) && (h -= i(c).length);
          let g = c.endSourceSpan.start.offset;
          return c.lastChild && t(c.lastChild) ? g += s(c, y).length : a(c) && (g -= r(c.lastChild, y).length), y.originalText.slice(h, g);
        }
        n.exports = l;
      } }), rg = ee({ "src/language-html/embed.js"(e, n) {
        "use strict";
        re();
        var { builders: { breakParent: t, group: s, hardline: a, indent: r, line: u, fill: i, softline: l }, utils: { mapDoc: c, replaceTextEndOfLine: y } } = qe(), h = Kn(), { printClosingTag: g, printClosingTagSuffix: p, needsToBorrowPrevClosingTagEndMarker: D, printOpeningTagPrefix: v, printOpeningTag: w } = rr(), { printImgSrcset: T, printClassNames: F } = eg(), { printVueFor: A, printVueBindings: B, isVueEventBindingExpression: I } = tg(), { isScriptLikeTag: P, isVueNonHtmlBlock: R, inferScriptParser: f, htmlTrimPreserveIndentation: x, dedentString: m, unescapeQuoteEntities: E, isVueSlotAttribute: o, isVueSfcBindingsAttribute: d, getTextValueParts: C } = Mt(), _ = fo();
        function b(k, $, M) {
          let q = (Q) => new RegExp(Q.join("|")).test(k.fullName), J = () => E(k.value), L = false, Y = (Q, le) => {
            let W = Q.type === "NGRoot" ? Q.node.type === "NGMicrosyntax" && Q.node.body.length === 1 && Q.node.body[0].type === "NGMicrosyntaxExpression" ? Q.node.body[0].expression : Q.node : Q.type === "JsExpressionRoot" ? Q.node : Q;
            W && (W.type === "ObjectExpression" || W.type === "ArrayExpression" || le.parser === "__vue_expression" && (W.type === "TemplateLiteral" || W.type === "StringLiteral")) && (L = true);
          }, V = (Q) => s(Q), O = function(Q) {
            let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            return s([r([l, Q]), le ? l : ""]);
          }, K = (Q) => L ? V(Q) : O(Q), se = (Q, le) => $(Q, Object.assign({ __onHtmlBindingRoot: Y, __embeddedInHtml: true }, le));
          if (k.fullName === "srcset" && (k.parent.fullName === "img" || k.parent.fullName === "source"))
            return O(T(J()));
          if (k.fullName === "class" && !M.parentParser) {
            let Q = J();
            if (!Q.includes("{{"))
              return F(Q);
          }
          if (k.fullName === "style" && !M.parentParser) {
            let Q = J();
            if (!Q.includes("{{"))
              return O(se(Q, { parser: "css", __isHTMLStyleAttribute: true }));
          }
          if (M.parser === "vue") {
            if (k.fullName === "v-for")
              return A(J(), se);
            if (o(k) || d(k, M))
              return B(J(), se);
            let Q = ["^@", "^v-on:"], le = ["^:", "^v-bind:"], W = ["^v-"];
            if (q(Q)) {
              let X = J(), oe = I(X) ? "__js_expression" : M.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return K(se(X, { parser: oe }));
            }
            if (q(le))
              return K(se(J(), { parser: "__vue_expression" }));
            if (q(W))
              return K(se(J(), { parser: "__js_expression" }));
          }
          if (M.parser === "angular") {
            let Q = (z, H) => se(z, Object.assign(Object.assign({}, H), {}, { trailingComma: "none" })), le = ["^\\*"], W = ["^\\(.+\\)$", "^on-"], X = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], oe = ["^i18n(-.+)?$"];
            if (q(W))
              return K(Q(J(), { parser: "__ng_action" }));
            if (q(X))
              return K(Q(J(), { parser: "__ng_binding" }));
            if (q(oe)) {
              let z = J().trim();
              return O(i(C(k, z)), !z.includes("@@"));
            }
            if (q(le))
              return K(Q(J(), { parser: "__ng_directive" }));
            let ae = /{{(.+?)}}/s, Ae = J();
            if (ae.test(Ae)) {
              let z = [];
              for (let [H, Z] of Ae.split(ae).entries())
                if (H % 2 === 0)
                  z.push(y(Z));
                else
                  try {
                    z.push(s(["{{", r([u, Q(Z, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), u, "}}"]));
                  } catch {
                    z.push("{{", y(Z), "}}");
                  }
              return s(z);
            }
          }
          return null;
        }
        function N(k, $, M, q) {
          let J = k.getValue();
          switch (J.type) {
            case "element": {
              if (P(J) || J.type === "interpolation")
                return;
              if (!J.isSelfClosing && R(J, q)) {
                let L = f(J, q);
                if (!L)
                  return;
                let Y = _(J, q), V = /^\s*$/.test(Y), O = "";
                return V || (O = M(x(Y), { parser: L, __embeddedInHtml: true }, { stripTrailingHardline: true }), V = O === ""), [v(J, q), s(w(k, q, $)), V ? "" : a, O, V ? "" : a, g(J, q), p(J, q)];
              }
              break;
            }
            case "text": {
              if (P(J.parent)) {
                let L = f(J.parent, q);
                if (L) {
                  let Y = L === "markdown" ? m(J.value.replace(/^[^\S\n]*\n/, "")) : J.value, V = { parser: L, __embeddedInHtml: true };
                  if (q.parser === "html" && L === "babel") {
                    let O = "script", { attrMap: K } = J.parent;
                    K && (K.type === "module" || K.type === "text/babel" && K["data-type"] === "module") && (O = "module"), V.__babelSourceType = O;
                  }
                  return [t, v(J, q), M(Y, V, { stripTrailingHardline: true }), p(J, q)];
                }
              } else if (J.parent.type === "interpolation") {
                let L = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
                return q.parser === "angular" ? (L.parser = "__ng_interpolation", L.trailingComma = "none") : q.parser === "vue" ? L.parser = q.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : L.parser = "__js_expression", [r([u, M(J.value, L, { stripTrailingHardline: true })]), J.parent.next && D(J.parent.next) ? " " : u];
              }
              break;
            }
            case "attribute": {
              if (!J.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(q.originalText.slice(J.valueSpan.start.offset, J.valueSpan.end.offset)))
                return [J.rawName, "=", J.value];
              if (q.parser === "lwc" && /^{.*}$/s.test(q.originalText.slice(J.valueSpan.start.offset, J.valueSpan.end.offset)))
                return [J.rawName, "=", J.value];
              let L = b(J, (Y, V) => M(Y, Object.assign({ __isInHtmlAttribute: true, __embeddedInHtml: true }, V), { stripTrailingHardline: true }), q);
              if (L)
                return [J.rawName, '="', s(c(L, (Y) => typeof Y == "string" ? Y.replace(/"/g, "&quot;") : Y)), '"'];
              break;
            }
            case "front-matter":
              return h(J, M);
          }
        }
        n.exports = N;
      } }), Do = ee({ "src/language-html/print/children.js"(e, n) {
        "use strict";
        re();
        var { builders: { breakParent: t, group: s, ifBreak: a, line: r, softline: u, hardline: i }, utils: { replaceTextEndOfLine: l } } = qe(), { locStart: c, locEnd: y } = Qn(), { forceBreakChildren: h, forceNextEmptyLine: g, isTextLikeNode: p, hasPrettierIgnore: D, preferHardlineAsLeadingSpaces: v } = Mt(), { printOpeningTagPrefix: w, needsToBorrowNextOpeningTagStartMarker: T, printOpeningTagStartMarker: F, needsToBorrowPrevClosingTagEndMarker: A, printClosingTagEndMarker: B, printClosingTagSuffix: I, needsToBorrowParentClosingTagStartMarker: P } = rr();
        function R(m, E, o) {
          let d = m.getValue();
          return D(d) ? [w(d, E), ...l(E.originalText.slice(c(d) + (d.prev && T(d.prev) ? F(d).length : 0), y(d) - (d.next && A(d.next) ? B(d, E).length : 0))), I(d, E)] : o();
        }
        function f(m, E) {
          return p(m) && p(E) ? m.isTrailingSpaceSensitive ? m.hasTrailingSpaces ? v(E) ? i : r : "" : v(E) ? i : u : T(m) && (D(E) || E.firstChild || E.isSelfClosing || E.type === "element" && E.attrs.length > 0) || m.type === "element" && m.isSelfClosing && A(E) ? "" : !E.isLeadingSpaceSensitive || v(E) || A(E) && m.lastChild && P(m.lastChild) && m.lastChild.lastChild && P(m.lastChild.lastChild) ? i : E.hasLeadingSpaces ? r : u;
        }
        function x(m, E, o) {
          let d = m.getValue();
          if (h(d))
            return [t, ...m.map((_) => {
              let b = _.getValue(), N = b.prev ? f(b.prev, b) : "";
              return [N ? [N, g(b.prev) ? i : ""] : "", R(_, E, o)];
            }, "children")];
          let C = d.children.map(() => Symbol(""));
          return m.map((_, b) => {
            let N = _.getValue();
            if (p(N)) {
              if (N.prev && p(N.prev)) {
                let Y = f(N.prev, N);
                if (Y)
                  return g(N.prev) ? [i, i, R(_, E, o)] : [Y, R(_, E, o)];
              }
              return R(_, E, o);
            }
            let k = [], $ = [], M = [], q = [], J = N.prev ? f(N.prev, N) : "", L = N.next ? f(N, N.next) : "";
            return J && (g(N.prev) ? k.push(i, i) : J === i ? k.push(i) : p(N.prev) ? $.push(J) : $.push(a("", u, { groupId: C[b - 1] }))), L && (g(N) ? p(N.next) && q.push(i, i) : L === i ? p(N.next) && q.push(i) : M.push(L)), [...k, s([...$, s([R(_, E, o), ...M], { id: C[b] })]), ...q];
          }, "children");
        }
        n.exports = { printChildren: x };
      } }), ng = ee({ "src/language-html/print/element.js"(e, n) {
        "use strict";
        re();
        var { builders: { breakParent: t, dedentToRoot: s, group: a, ifBreak: r, indentIfBreak: u, indent: i, line: l, softline: c }, utils: { replaceTextEndOfLine: y } } = qe(), h = fo(), { shouldPreserveContent: g, isScriptLikeTag: p, isVueCustomBlock: D, countParents: v, forceBreakContent: w } = Mt(), { printOpeningTagPrefix: T, printOpeningTag: F, printClosingTagSuffix: A, printClosingTag: B, needsToBorrowPrevClosingTagEndMarker: I, needsToBorrowLastChildClosingTagEndMarker: P } = rr(), { printChildren: R } = Do();
        function f(x, m, E) {
          let o = x.getValue();
          if (g(o, m))
            return [T(o, m), a(F(x, m, E)), ...y(h(o, m)), ...B(o, m), A(o, m)];
          let d = o.children.length === 1 && o.firstChild.type === "interpolation" && o.firstChild.isLeadingSpaceSensitive && !o.firstChild.hasLeadingSpaces && o.lastChild.isTrailingSpaceSensitive && !o.lastChild.hasTrailingSpaces, C = Symbol("element-attr-group-id"), _ = ($) => a([a(F(x, m, E), { id: C }), $, B(o, m)]), b = ($) => d ? u($, { groupId: C }) : (p(o) || D(o, m)) && o.parent.type === "root" && m.parser === "vue" && !m.vueIndentScriptAndStyle ? $ : i($), N = () => d ? r(c, "", { groupId: C }) : o.firstChild.hasLeadingSpaces && o.firstChild.isLeadingSpaceSensitive ? l : o.firstChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive ? s(c) : c, k = () => (o.next ? I(o.next) : P(o.parent)) ? o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? " " : "" : d ? r(c, "", { groupId: C }) : o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? l : (o.lastChild.type === "comment" || o.lastChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${m.tabWidth * v(x, (M) => M.parent && M.parent.type !== "root")}}$`).test(o.lastChild.value) ? "" : c;
          return o.children.length === 0 ? _(o.hasDanglingSpaces && o.isDanglingSpaceSensitive ? l : "") : _([w(o) ? t : "", b([N(), R(x, m, E)]), k()]);
        }
        n.exports = { printElement: f };
      } }), ug = ee({ "src/language-html/printer-html.js"(e, n) {
        "use strict";
        re();
        var { builders: { fill: t, group: s, hardline: a, literalline: r }, utils: { cleanDoc: u, getDocParts: i, isConcat: l, replaceTextEndOfLine: c } } = qe(), y = Wd(), { countChars: h, unescapeQuoteEntities: g, getTextValueParts: p } = Mt(), D = Yd(), { insertPragma: v } = Qd(), { locStart: w, locEnd: T } = Qn(), F = rg(), { printClosingTagSuffix: A, printClosingTagEnd: B, printOpeningTagPrefix: I, printOpeningTagStart: P } = rr(), { printElement: R } = ng(), { printChildren: f } = Do();
        function x(m, E, o) {
          let d = m.getValue();
          switch (d.type) {
            case "front-matter":
              return c(d.raw);
            case "root":
              return E.__onHtmlRoot && E.__onHtmlRoot(d), [s(f(m, E, o)), a];
            case "element":
            case "ieConditionalComment":
              return R(m, E, o);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [P(d), B(d)];
            case "interpolation":
              return [P(d, E), ...m.map(o, "children"), B(d, E)];
            case "text": {
              if (d.parent.type === "interpolation") {
                let _ = /\n[^\S\n]*$/, b = _.test(d.value), N = b ? d.value.replace(_, "") : d.value;
                return [...c(N), b ? a : ""];
              }
              let C = u([I(d, E), ...p(d), A(d, E)]);
              return l(C) || C.type === "fill" ? t(i(C)) : C;
            }
            case "docType":
              return [s([P(d, E), " ", d.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), B(d, E)];
            case "comment":
              return [I(d, E), ...c(E.originalText.slice(w(d), T(d)), r), A(d, E)];
            case "attribute": {
              if (d.value === null)
                return d.rawName;
              let C = g(d.value), _ = h(C, "'"), b = h(C, '"'), N = _ < b ? "'" : '"';
              return [d.rawName, "=", N, ...c(N === '"' ? C.replace(/"/g, "&quot;") : C.replace(/'/g, "&apos;")), N];
            }
            default:
              throw new Error(`Unexpected node type ${d.type}`);
          }
        }
        n.exports = { preprocess: D, print: x, insertPragma: v, massageAstNode: y, embed: F };
      } }), sg = ee({ "src/language-html/options.js"(e, n) {
        "use strict";
        re();
        var t = qt(), s = "HTML";
        n.exports = { bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: s, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: s, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
      } }), ig = ee({ "src/language-html/parsers.js"() {
        re();
      } }), Tn = ee({ "node_modules/linguist-languages/data/HTML.json"(e, n) {
        n.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
      } }), ag = ee({ "node_modules/linguist-languages/data/Vue.json"(e, n) {
        n.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
      } }), og = ee({ "src/language-html/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = ug(), a = sg(), r = ig(), u = [t(Tn(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), t(Tn(), (l) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...l.extensions, ".mjml"] })), t(Tn(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), t(ag(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], i = { html: s };
        n.exports = { languages: u, printers: i, options: a, parsers: r };
      } }), lg = ee({ "src/language-yaml/pragma.js"(e, n) {
        "use strict";
        re();
        function t(r) {
          return /^\s*@(?:prettier|format)\s*$/.test(r);
        }
        function s(r) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(r);
        }
        function a(r) {
          return `# @format

${r}`;
        }
        n.exports = { isPragma: t, hasPragma: s, insertPragma: a };
      } }), cg = ee({ "src/language-yaml/loc.js"(e, n) {
        "use strict";
        re();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        n.exports = { locStart: t, locEnd: s };
      } }), pg = ee({ "src/language-yaml/embed.js"(e, n) {
        "use strict";
        re();
        function t(s, a, r, u) {
          if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(u.filepath))
            return r(u.originalText, Object.assign(Object.assign({}, u), {}, { parser: "json" }));
        }
        n.exports = t;
      } }), Rt = ee({ "src/language-yaml/utils.js"(e, n) {
        "use strict";
        re();
        var { getLast: t, isNonEmptyArray: s } = Ge();
        function a(f, x) {
          let m = 0, E = f.stack.length - 1;
          for (let o = 0; o < E; o++) {
            let d = f.stack[o];
            r(d) && x(d) && m++;
          }
          return m;
        }
        function r(f, x) {
          return f && typeof f.type == "string" && (!x || x.includes(f.type));
        }
        function u(f, x, m) {
          return x("children" in f ? Object.assign(Object.assign({}, f), {}, { children: f.children.map((E) => u(E, x, f)) }) : f, m);
        }
        function i(f, x, m) {
          Object.defineProperty(f, x, { get: m, enumerable: false });
        }
        function l(f, x) {
          let m = 0, E = x.length;
          for (let o = f.position.end.offset - 1; o < E; o++) {
            let d = x[o];
            if (d === `
` && m++, m === 1 && /\S/.test(d))
              return false;
            if (m === 2)
              return true;
          }
          return false;
        }
        function c(f) {
          switch (f.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return false;
          }
          let m = f.stack.length;
          for (let E = 1; E < m; E++) {
            let o = f.stack[E], d = f.stack[E - 1];
            if (Array.isArray(d) && typeof o == "number" && o !== d.length - 1)
              return false;
          }
          return true;
        }
        function y(f) {
          return s(f.children) ? y(t(f.children)) : f;
        }
        function h(f) {
          return f.value.trim() === "prettier-ignore";
        }
        function g(f) {
          let x = f.getValue();
          if (x.type === "documentBody") {
            let m = f.getParentNode();
            return A(m.head) && h(t(m.head.endComments));
          }
          return v(x) && h(t(x.leadingComments));
        }
        function p(f) {
          return !s(f.children) && !D(f);
        }
        function D(f) {
          return v(f) || w(f) || T(f) || F(f) || A(f);
        }
        function v(f) {
          return s(f == null ? void 0 : f.leadingComments);
        }
        function w(f) {
          return s(f == null ? void 0 : f.middleComments);
        }
        function T(f) {
          return f == null ? void 0 : f.indicatorComment;
        }
        function F(f) {
          return f == null ? void 0 : f.trailingComment;
        }
        function A(f) {
          return s(f == null ? void 0 : f.endComments);
        }
        function B(f) {
          let x = [], m;
          for (let E of f.split(/( +)/))
            E !== " " ? m === " " ? x.push(E) : x.push((x.pop() || "") + E) : m === void 0 && x.unshift(""), m = E;
          return m === " " && x.push((x.pop() || "") + " "), x[0] === "" && (x.shift(), x.unshift(" " + (x.shift() || ""))), x;
        }
        function I(f, x, m) {
          let E = x.split(`
`).map((o, d, C) => d === 0 && d === C.length - 1 ? o : d !== 0 && d !== C.length - 1 ? o.trim() : d === 0 ? o.trimEnd() : o.trimStart());
          return m.proseWrap === "preserve" ? E.map((o) => o.length === 0 ? [] : [o]) : E.map((o) => o.length === 0 ? [] : B(o)).reduce((o, d, C) => C !== 0 && E[C - 1].length > 0 && d.length > 0 && !(f === "quoteDouble" && t(t(o)).endsWith("\\")) ? [...o.slice(0, -1), [...t(o), ...d]] : [...o, d], []).map((o) => m.proseWrap === "never" ? [o.join(" ")] : o);
        }
        function P(f, x) {
          let { parentIndent: m, isLastDescendant: E, options: o } = x, d = f.position.start.line === f.position.end.line ? "" : o.originalText.slice(f.position.start.offset, f.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], C;
          if (f.indent === null) {
            let N = d.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            C = N ? N.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            C = f.indent - 1 + m;
          let _ = d.split(`
`).map((N) => N.slice(C));
          if (o.proseWrap === "preserve" || f.type === "blockLiteral")
            return b(_.map((N) => N.length === 0 ? [] : [N]));
          return b(_.map((N) => N.length === 0 ? [] : B(N)).reduce((N, k, $) => $ !== 0 && _[$ - 1].length > 0 && k.length > 0 && !/^\s/.test(k[0]) && !/^\s|\s$/.test(t(N)) ? [...N.slice(0, -1), [...t(N), ...k]] : [...N, k], []).map((N) => N.reduce((k, $) => k.length > 0 && /\s$/.test(t(k)) ? [...k.slice(0, -1), t(k) + " " + $] : [...k, $], [])).map((N) => o.proseWrap === "never" ? [N.join(" ")] : N));
          function b(N) {
            if (f.chomping === "keep")
              return t(N).length === 0 ? N.slice(0, -1) : N;
            let k = 0;
            for (let $ = N.length - 1; $ >= 0 && N[$].length === 0; $--)
              k++;
            return k === 0 ? N : k >= 2 && !E ? N.slice(0, -(k - 1)) : N.slice(0, -k);
          }
        }
        function R(f) {
          if (!f)
            return true;
          switch (f.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return true;
            default:
              return false;
          }
        }
        n.exports = { getLast: t, getAncestorCount: a, isNode: r, isEmptyNode: p, isInlineNode: R, mapNode: u, defineShortcut: i, isNextLineEmpty: l, isLastDescendantNode: c, getBlockValueLineContents: P, getFlowScalarLineContents: I, getLastDescendantNode: y, hasPrettierIgnore: g, hasLeadingComments: v, hasMiddleComments: w, hasIndicatorComment: T, hasTrailingComment: F, hasEndComments: A };
      } }), fg = ee({ "src/language-yaml/print-preprocess.js"(e, n) {
        "use strict";
        re();
        var { defineShortcut: t, mapNode: s } = Rt();
        function a(u) {
          return s(u, r);
        }
        function r(u) {
          switch (u.type) {
            case "document":
              t(u, "head", () => u.children[0]), t(u, "body", () => u.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(u, "content", () => u.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              t(u, "key", () => u.children[0]), t(u, "value", () => u.children[1]);
              break;
          }
          return u;
        }
        n.exports = a;
      } }), qr = ee({ "src/language-yaml/print/misc.js"(e, n) {
        "use strict";
        re();
        var { builders: { softline: t, align: s } } = qe(), { hasEndComments: a, isNextLineEmpty: r, isNode: u } = Rt(), i = /* @__PURE__ */ new WeakMap();
        function l(h, g) {
          let p = h.getValue(), D = h.stack[0], v;
          return i.has(D) ? v = i.get(D) : (v = /* @__PURE__ */ new Set(), i.set(D, v)), !v.has(p.position.end.line) && (v.add(p.position.end.line), r(p, g) && !c(h.getParentNode())) ? t : "";
        }
        function c(h) {
          return a(h) && !u(h, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function y(h, g) {
          return s(" ".repeat(h), g);
        }
        n.exports = { alignWithSpaces: y, shouldPrintEndComments: c, printNextEmptyLine: l };
      } }), Dg = ee({ "src/language-yaml/print/flow-mapping-sequence.js"(e, n) {
        "use strict";
        re();
        var { builders: { ifBreak: t, line: s, softline: a, hardline: r, join: u } } = qe(), { isEmptyNode: i, getLast: l, hasEndComments: c } = Rt(), { printNextEmptyLine: y, alignWithSpaces: h } = qr();
        function g(D, v, w) {
          let T = D.getValue(), F = T.type === "flowMapping", A = F ? "{" : "[", B = F ? "}" : "]", I = a;
          F && T.children.length > 0 && w.bracketSpacing && (I = s);
          let P = l(T.children), R = P && P.type === "flowMappingItem" && i(P.key) && i(P.value);
          return [A, h(w.tabWidth, [I, p(D, v, w), w.trailingComma === "none" ? "" : t(","), c(T) ? [r, u(r, D.map(v, "endComments"))] : ""]), R ? "" : I, B];
        }
        function p(D, v, w) {
          let T = D.getValue();
          return D.map((A, B) => [v(), B === T.children.length - 1 ? "" : [",", s, T.children[B].position.start.line !== T.children[B + 1].position.start.line ? y(A, w.originalText) : ""]], "children");
        }
        n.exports = { printFlowMapping: g, printFlowSequence: g };
      } }), mg = ee({ "src/language-yaml/print/mapping-item.js"(e, n) {
        "use strict";
        re();
        var { builders: { conditionalGroup: t, group: s, hardline: a, ifBreak: r, join: u, line: i } } = qe(), { hasLeadingComments: l, hasMiddleComments: c, hasTrailingComment: y, hasEndComments: h, isNode: g, isEmptyNode: p, isInlineNode: D } = Rt(), { alignWithSpaces: v } = qr();
        function w(B, I, P, R, f) {
          let { key: x, value: m } = B, E = p(x), o = p(m);
          if (E && o)
            return ": ";
          let d = R("key"), C = F(B) ? " " : "";
          if (o)
            return B.type === "flowMappingItem" && I.type === "flowMapping" ? d : B.type === "mappingItem" && T(x.content, f) && !y(x.content) && (!I.tag || I.tag.value !== "tag:yaml.org,2002:set") ? [d, C, ":"] : ["? ", v(2, d)];
          let _ = R("value");
          if (E)
            return [": ", v(2, _)];
          if (l(m) || !D(x.content))
            return ["? ", v(2, d), a, u("", P.map(R, "value", "leadingComments").map((q) => [q, a])), ": ", v(2, _)];
          if (A(x.content) && !l(x.content) && !c(x.content) && !y(x.content) && !h(x) && !l(m.content) && !c(m.content) && !h(m) && T(m.content, f))
            return [d, C, ": ", _];
          let b = Symbol("mappingKey"), N = s([r("? "), s(v(2, d), { id: b })]), k = [a, ": ", v(2, _)], $ = [C, ":"];
          l(m.content) || h(m) && m.content && !g(m.content, ["mapping", "sequence"]) || I.type === "mapping" && y(x.content) && D(m.content) || g(m.content, ["mapping", "sequence"]) && m.content.tag === null && m.content.anchor === null ? $.push(a) : m.content && $.push(i), $.push(_);
          let M = v(f.tabWidth, $);
          return T(x.content, f) && !l(x.content) && !c(x.content) && !h(x) ? t([[d, M]]) : t([[N, r(k, M, { groupId: b })]]);
        }
        function T(B, I) {
          if (!B)
            return true;
          switch (B.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return true;
            default:
              return false;
          }
          if (I.proseWrap === "preserve")
            return B.position.start.line === B.position.end.line;
          if (/\\$/m.test(I.originalText.slice(B.position.start.offset, B.position.end.offset)))
            return false;
          switch (I.proseWrap) {
            case "never":
              return !B.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(B.value);
            default:
              return false;
          }
        }
        function F(B) {
          return B.key.content && B.key.content.type === "alias";
        }
        function A(B) {
          if (!B)
            return true;
          switch (B.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return B.position.start.line === B.position.end.line;
            case "alias":
              return true;
            default:
              return false;
          }
        }
        n.exports = w;
      } }), dg = ee({ "src/language-yaml/print/block.js"(e, n) {
        "use strict";
        re();
        var { builders: { dedent: t, dedentToRoot: s, fill: a, hardline: r, join: u, line: i, literalline: l, markAsRoot: c }, utils: { getDocParts: y } } = qe(), { getAncestorCount: h, getBlockValueLineContents: g, hasIndicatorComment: p, isLastDescendantNode: D, isNode: v } = Rt(), { alignWithSpaces: w } = qr();
        function T(F, A, B) {
          let I = F.getValue(), P = h(F, (E) => v(E, ["sequence", "mapping"])), R = D(F), f = [I.type === "blockFolded" ? ">" : "|"];
          I.indent !== null && f.push(I.indent.toString()), I.chomping !== "clip" && f.push(I.chomping === "keep" ? "+" : "-"), p(I) && f.push(" ", A("indicatorComment"));
          let x = g(I, { parentIndent: P, isLastDescendant: R, options: B }), m = [];
          for (let [E, o] of x.entries())
            E === 0 && m.push(r), m.push(a(y(u(i, o)))), E !== x.length - 1 ? m.push(o.length === 0 ? r : c(l)) : I.chomping === "keep" && R && m.push(s(o.length === 0 ? r : l));
          return I.indent === null ? f.push(t(w(B.tabWidth, m))) : f.push(s(w(I.indent - 1 + P, m))), f;
        }
        n.exports = T;
      } }), gg = ee({ "src/language-yaml/printer-yaml.js"(e, n) {
        "use strict";
        re();
        var { builders: { breakParent: t, fill: s, group: a, hardline: r, join: u, line: i, lineSuffix: l, literalline: c }, utils: { getDocParts: y, replaceTextEndOfLine: h } } = qe(), { isPreviousLineEmpty: g } = Ge(), { insertPragma: p, isPragma: D } = lg(), { locStart: v } = cg(), w = pg(), { getFlowScalarLineContents: T, getLastDescendantNode: F, hasLeadingComments: A, hasMiddleComments: B, hasTrailingComment: I, hasEndComments: P, hasPrettierIgnore: R, isLastDescendantNode: f, isNode: x, isInlineNode: m } = Rt(), E = fg(), { alignWithSpaces: o, printNextEmptyLine: d, shouldPrintEndComments: C } = qr(), { printFlowMapping: _, printFlowSequence: b } = Dg(), N = mg(), k = dg();
        function $(O, K, se) {
          let Q = O.getValue(), le = [];
          Q.type !== "mappingValue" && A(Q) && le.push([u(r, O.map(se, "leadingComments")), r]);
          let { tag: W, anchor: X } = Q;
          W && le.push(se("tag")), W && X && le.push(" "), X && le.push(se("anchor"));
          let oe = "";
          x(Q, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !f(O) && (oe = d(O, K.originalText)), (W || X) && (x(Q, ["sequence", "mapping"]) && !B(Q) ? le.push(r) : le.push(" ")), B(Q) && le.push([Q.middleComments.length === 1 ? "" : r, u(r, O.map(se, "middleComments")), r]);
          let ae = O.getParentNode();
          return R(O) ? le.push(h(K.originalText.slice(Q.position.start.offset, Q.position.end.offset).trimEnd(), c)) : le.push(a(M(Q, ae, O, K, se))), I(Q) && !x(Q, ["document", "documentHead"]) && le.push(l([Q.type === "mappingValue" && !Q.content ? "" : " ", ae.type === "mappingKey" && O.getParentNode(2).type === "mapping" && m(Q) ? "" : t, se("trailingComment")])), C(Q) && le.push(o(Q.type === "sequenceItem" ? 2 : 0, [r, u(r, O.map((Ae) => [g(K.originalText, Ae.getValue(), v) ? r : "", se()], "endComments"))])), le.push(oe), le;
        }
        function M(O, K, se, Q, le) {
          switch (O.type) {
            case "root": {
              let { children: W } = O, X = [];
              se.each((ae, Ae) => {
                let z = W[Ae], H = W[Ae + 1];
                Ae !== 0 && X.push(r), X.push(le()), J(z, H) ? (X.push(r, "..."), I(z) && X.push(" ", le("trailingComment"))) : H && !I(H.head) && X.push(r, "---");
              }, "children");
              let oe = F(O);
              return (!x(oe, ["blockLiteral", "blockFolded"]) || oe.chomping !== "keep") && X.push(r), X;
            }
            case "document": {
              let W = K.children[se.getName() + 1], X = [];
              return L(O, W, K, Q) === "head" && ((O.head.children.length > 0 || O.head.endComments.length > 0) && X.push(le("head")), I(O.head) ? X.push(["---", " ", le(["head", "trailingComment"])]) : X.push("---")), q(O) && X.push(le("body")), u(r, X);
            }
            case "documentHead":
              return u(r, [...se.map(le, "children"), ...se.map(le, "endComments")]);
            case "documentBody": {
              let { children: W, endComments: X } = O, oe = "";
              if (W.length > 0 && X.length > 0) {
                let ae = F(O);
                x(ae, ["blockFolded", "blockLiteral"]) ? ae.chomping !== "keep" && (oe = [r, r]) : oe = r;
              }
              return [u(r, se.map(le, "children")), oe, u(r, se.map(le, "endComments"))];
            }
            case "directive":
              return ["%", u(" ", [O.name, ...O.parameters])];
            case "comment":
              return ["#", O.value];
            case "alias":
              return ["*", O.value];
            case "tag":
              return Q.originalText.slice(O.position.start.offset, O.position.end.offset);
            case "anchor":
              return ["&", O.value];
            case "plain":
              return Y(O.type, Q.originalText.slice(O.position.start.offset, O.position.end.offset), Q);
            case "quoteDouble":
            case "quoteSingle": {
              let W = "'", X = '"', oe = Q.originalText.slice(O.position.start.offset + 1, O.position.end.offset - 1);
              if (O.type === "quoteSingle" && oe.includes("\\") || O.type === "quoteDouble" && /\\[^"]/.test(oe)) {
                let Ae = O.type === "quoteDouble" ? X : W;
                return [Ae, Y(O.type, oe, Q), Ae];
              }
              if (oe.includes(X))
                return [W, Y(O.type, O.type === "quoteDouble" ? oe.replace(/\\"/g, X).replace(/'/g, W.repeat(2)) : oe, Q), W];
              if (oe.includes(W))
                return [X, Y(O.type, O.type === "quoteSingle" ? oe.replace(/''/g, W) : oe, Q), X];
              let ae = Q.singleQuote ? W : X;
              return [ae, Y(O.type, oe, Q), ae];
            }
            case "blockFolded":
            case "blockLiteral":
              return k(se, le, Q);
            case "mapping":
            case "sequence":
              return u(r, se.map(le, "children"));
            case "sequenceItem":
              return ["- ", o(2, O.content ? le("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return O.content ? le("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return N(O, K, se, le, Q);
            case "flowMapping":
              return _(se, le, Q);
            case "flowSequence":
              return b(se, le, Q);
            case "flowSequenceItem":
              return le("content");
            default:
              throw new Error(`Unexpected node type ${O.type}`);
          }
        }
        function q(O) {
          return O.body.children.length > 0 || P(O.body);
        }
        function J(O, K) {
          return I(O) || K && (K.head.children.length > 0 || P(K.head));
        }
        function L(O, K, se, Q) {
          return se.children[0] === O && /---(?:\s|$)/.test(Q.originalText.slice(v(O), v(O) + 4)) || O.head.children.length > 0 || P(O.head) || I(O.head) ? "head" : J(O, K) ? false : K ? "root" : false;
        }
        function Y(O, K, se) {
          let Q = T(O, K, se);
          return u(r, Q.map((le) => s(y(u(i, le)))));
        }
        function V(O, K) {
          if (x(K))
            switch (delete K.position, K.type) {
              case "comment":
                if (D(K.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                K.type = "quote";
                break;
            }
        }
        n.exports = { preprocess: E, embed: w, print: $, massageAstNode: V, insertPragma: p };
      } }), yg = ee({ "src/language-yaml/options.js"(e, n) {
        "use strict";
        re();
        var t = qt();
        n.exports = { bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap };
      } }), hg = ee({ "src/language-yaml/parsers.js"() {
        re();
      } }), vg = ee({ "node_modules/linguist-languages/data/YAML.json"(e, n) {
        n.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
      } }), Cg = ee({ "src/language-yaml/index.js"(e, n) {
        "use strict";
        re();
        var t = wt(), s = gg(), a = yg(), r = hg(), u = [t(vg(), (i) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...i.filenames.filter((l) => l !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
        n.exports = { languages: u, printers: { yaml: s }, options: a, parsers: r };
      } }), Eg = ee({ "src/languages.js"(e, n) {
        "use strict";
        re(), n.exports = [td(), vd(), Td(), kd(), Vd(), og(), Cg()];
      } });
      re();
      var { version: Fg } = fa(), kt = vm(), { getSupportInfo: Ag } = Rn(), Sg = Cm(), xg = Eg(), bg = qe();
      function Bt(e) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
            s[a] = arguments[a];
          let r = s[n] || {}, u = r.plugins || [];
          return s[n] = Object.assign(Object.assign({}, r), {}, { plugins: [...xg, ...Array.isArray(u) ? u : Object.values(u)] }), e(...s);
        };
      }
      var Bn = Bt(kt.formatWithCursor);
      mo.exports = { formatWithCursor: Bn, format(e, n) {
        return Bn(e, n).formatted;
      }, check(e, n) {
        let { formatted: t } = Bn(e, n);
        return t === e;
      }, doc: bg, getSupportInfo: Bt(Ag, 0), version: Fg, util: Sg, __debug: { parse: Bt(kt.parse), formatAST: Bt(kt.formatAST), formatDoc: Bt(kt.formatDoc), printToDoc: Bt(kt.printToDoc), printDocToString: Bt(kt.printDocToString) } };
    });
    return Tg();
  });
} });
var import_parser_html = __toESM2(require_parser_html());
var import_standalone = __toESM2(require_standalone());
function dedent(templ) {
  for (var values = [], _i = 1; _i < arguments.length; _i++)
    values[_i - 1] = arguments[_i];
  var strings = Array.from(typeof templ == "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    return matches ? arr.concat(matches.map(function(match) {
      var _a, _b;
      return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    })) : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(`
[	 ]{` + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, `
`);
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  return values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/), endentation = endentations ? endentations[1] : "", indentedValue = value;
    typeof value == "string" && value.includes(`
`) && (indentedValue = String(value).split(`
`).map(function(str, i2) {
      return i2 === 0 ? str : "" + endentation + str;
    }).join(`
`)), string += indentedValue + strings[i + 1];
  }), string;
}
var formatter = (0, import_memoizerific.default)(2)((type, source) => type === false ? source : type === "dedent" || type === true ? dedent(source) : import_standalone.default.format(source, { parser: type, plugins: [import_parser_html.default], htmlWhitespaceSensitivity: "ignore" }).trim());
export {
  formatter
};
