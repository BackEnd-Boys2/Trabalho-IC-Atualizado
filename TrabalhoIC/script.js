/*! This file is auto-generated */
var t = {
  d: (e, n) => {
      for (var r in n)
          t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
              enumerable: !0,
              get: n[r]
          })
  }
  ,
  o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
}
, e = {};
t.d(e, {
  zj: () => we,
  SD: () => je,
  V6: () => He,
  jb: () => Tn,
  yT: () => Ke,
  M_: () => ke,
  hb: () => en,
  vJ: () => Ze,
  ip: () => Ye,
  Nf: () => tn,
  Kr: () => nn,
  li: () => _t,
  J0: () => it,
  FH: () => Xe,
  v4: () => Qe
});
var n, r, o, i, s, u, _, c, a, l, f, p, h = {}, d = [], v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y = Array.isArray;
function g(t, e) {
  for (var n in e)
      t[n] = e[n];
  return t
}
function m(t) {
  var e = t.parentNode;
  e && e.removeChild(t)
}
function w(t, e, r) {
  var o, i, s, u = {};
  for (s in e)
      "key" == s ? o = e[s] : "ref" == s ? i = e[s] : u[s] = e[s];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? n.call(arguments, 2) : r),
  "function" == typeof t && null != t.defaultProps)
      for (s in t.defaultProps)
          void 0 === u[s] && (u[s] = t.defaultProps[s]);
  return b(t, u, o, i, null)
}
function b(t, e, n, i, s) {
  var u = {
      type: t,
      props: e,
      key: n,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: null == s ? ++o : s,
      __i: -1,
      __u: 0
  };
  return null == s && null != r.vnode && r.vnode(u),
  u
}
function k(t) {
  return t.children
}
function x(t, e) {
  this.props = t,
  this.context = e
}
function S(t, e) {
  if (null == e)
      return t.__ ? S(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++)
      if (null != (n = t.__k[e]) && null != n.__e)
          return n.__e;
  return "function" == typeof t.type ? S(t) : null
}
function E(t) {
  var e, n;
  if (null != (t = t.__) && null != t.__c) {
      for (t.__e = t.__c.base = null,
      e = 0; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break
          }
      return E(t)
  }
}
function P(t) {
  (!t.__d && (t.__d = !0) && s.push(t) && !C.__r++ || u !== r.debounceRendering) && ((u = r.debounceRendering) || _)(C)
}
function C() {
  var t, e, n, o, i, u, _, a;
  for (s.sort(c); t = s.shift(); )
      t.__d && (e = s.length,
      o = void 0,
      u = (i = (n = t).__v).__e,
      _ = [],
      a = [],
      n.__P && ((o = g({}, i)).__v = i.__v + 1,
      r.vnode && r.vnode(o),
      U(n.__P, o, i, n.__n, n.__P.namespaceURI, 32 & i.__u ? [u] : null, _, null == u ? S(i) : u, !!(32 & i.__u), a),
      o.__v = i.__v,
      o.__.__k[o.__i] = o,
      W(_, o, a),
      o.__e != u && E(o)),
      s.length > e && s.sort(c));
  C.__r = 0
}
function $(t, e, n, r, o, i, s, u, _, c, a) {
  var l, f, p, v, y, g = r && r.__k || d, m = e.length;
  for (n.__d = _,
  M(n, e, g),
  _ = n.__d,
  l = 0; l < m; l++)
      null != (p = n.__k[l]) && "boolean" != typeof p && "function" != typeof p && (f = -1 === p.__i ? h : g[p.__i] || h,
      p.__i = l,
      U(t, p, f, o, i, s, u, _, c, a),
      v = p.__e,
      p.ref && f.ref != p.ref && (f.ref && A(f.ref, null, p),
      a.push(p.ref, p.__c || v, p)),
      null == y && null != v && (y = v),
      65536 & p.__u || f.__k === p.__k ? (_ && !_.isConnected && (_ = S(f)),
      _ = O(p, _, t)) : "function" == typeof p.type && void 0 !== p.__d ? _ = p.__d : v && (_ = v.nextSibling),
      p.__d = void 0,
      p.__u &= -196609);
  n.__d = _,
  n.__e = y
}
function M(t, e, n) {
  var r, o, i, s, u, _ = e.length, c = n.length, a = c, l = 0;
  for (t.__k = [],
  r = 0; r < _; r++)
      s = r + l,
      null != (o = t.__k[r] = null == (o = e[r]) || "boolean" == typeof o || "function" == typeof o ? null : "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? b(null, o, null, null, null) : y(o) ? b(k, {
          children: o
      }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? b(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) ? (o.__ = t,
      o.__b = t.__b + 1,
      u = N(o, n, s, a),
      o.__i = u,
      i = null,
      -1 !== u && (a--,
      (i = n[u]) && (i.__u |= 131072)),
      null == i || null === i.__v ? (-1 == u && l--,
      "function" != typeof o.type && (o.__u |= 65536)) : u !== s && (u === s + 1 ? l++ : u > s ? a > _ - s ? l += u - s : l-- : u < s ? u == s - 1 && (l = u - s) : l = 0,
      u !== r + l && (o.__u |= 65536))) : (i = n[s]) && null == i.key && i.__e && 0 == (131072 & i.__u) && (i.__e == t.__d && (t.__d = S(i)),
      F(i, i, !1),
      n[s] = null,
      a--);
  if (a)
      for (r = 0; r < c; r++)
          null != (i = n[r]) && 0 == (131072 & i.__u) && (i.__e == t.__d && (t.__d = S(i)),
          F(i, i))
}
function O(t, e, n) {
  var r, o;
  if ("function" == typeof t.type) {
      for (r = t.__k,
      o = 0; r && o < r.length; o++)
          r[o] && (r[o].__ = t,
          e = O(r[o], e, n));
      return e
  }
  t.__e != e && (n.insertBefore(t.__e, e || null),
  e = t.__e);
  do {
      e = e && e.nextSibling
  } while (null != e && 8 === e.nodeType);
  return e
}
function N(t, e, n, r) {
  var o = t.key
    , i = t.type
    , s = n - 1
    , u = n + 1
    , _ = e[n];
  if (null === _ || _ && o == _.key && i === _.type && 0 == (131072 & _.__u))
      return n;
  if (r > (null != _ && 0 == (131072 & _.__u) ? 1 : 0))
      for (; s >= 0 || u < e.length; ) {
          if (s >= 0) {
              if ((_ = e[s]) && 0 == (131072 & _.__u) && o == _.key && i === _.type)
                  return s;
              s--
          }
          if (u < e.length) {
              if ((_ = e[u]) && 0 == (131072 & _.__u) && o == _.key && i === _.type)
                  return u;
              u++
          }
      }
  return -1
}
function T(t, e, n) {
  "-" === e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || v.test(e) ? n : n + "px"
}
function j(t, e, n, r, o) {
  var i;
  t: if ("style" === e)
      if ("string" == typeof n)
          t.style.cssText = n;
      else {
          if ("string" == typeof r && (t.style.cssText = r = ""),
          r)
              for (e in r)
                  n && e in n || T(t.style, e, "");
          if (n)
              for (e in n)
                  r && n[e] === r[e] || T(t.style, e, n[e])
      }
  else if ("o" === e[0] && "n" === e[1])
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")),
      e = e.toLowerCase()in t || "onFocusOut" === e || "onFocusIn" === e ? e.toLowerCase().slice(2) : e.slice(2),
      t.l || (t.l = {}),
      t.l[e + i] = n,
      n ? r ? n.u = r.u : (n.u = a,
      t.addEventListener(e, i ? f : l, i)) : t.removeEventListener(e, i ? f : l, i);
  else {
      if ("http://www.w3.org/2000/svg" == o)
          e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && e in t)
          try {
              t[e] = null == n ? "" : n;
              break t
          } catch (t) {}
      "function" == typeof n || (null == n || !1 === n && "-" !== e[4] ? t.removeAttribute(e) : t.setAttribute(e, n))
  }
}
function H(t) {
  return function(e) {
      if (this.l) {
          var n = this.l[e.type + t];
          if (null == e.t)
              e.t = a++;
          else if (e.t < n.u)
              return;
          return n(r.event ? r.event(e) : e)
      }
  }
}
function U(t, e, n, o, i, s, u, _, c, a) {
  var l, f, p, h, d, v, m, w, b, S, E, P, C, M, O, N = e.type;
  if (void 0 !== e.constructor)
      return null;
  128 & n.__u && (c = !!(32 & n.__u),
  s = [_ = e.__e = n.__e]),
  (l = r.__b) && l(e);
  t: if ("function" == typeof N)
      try {
          if (w = e.props,
          b = (l = N.contextType) && o[l.__c],
          S = l ? b ? b.props.value : l.__ : o,
          n.__c ? m = (f = e.__c = n.__c).__ = f.__E : ("prototype"in N && N.prototype.render ? e.__c = f = new N(w,S) : (e.__c = f = new x(w,S),
          f.constructor = N,
          f.render = R),
          b && b.sub(f),
          f.props = w,
          f.state || (f.state = {}),
          f.context = S,
          f.__n = o,
          p = f.__d = !0,
          f.__h = [],
          f._sb = []),
          null == f.__s && (f.__s = f.state),
          null != N.getDerivedStateFromProps && (f.__s == f.state && (f.__s = g({}, f.__s)),
          g(f.__s, N.getDerivedStateFromProps(w, f.__s))),
          h = f.props,
          d = f.state,
          f.__v = e,
          p)
              null == N.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
              null != f.componentDidMount && f.__h.push(f.componentDidMount);
          else {
              if (null == N.getDerivedStateFromProps && w !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(w, S),
              !f.__e && (null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(w, f.__s, S) || e.__v === n.__v)) {
                  for (e.__v !== n.__v && (f.props = w,
                  f.state = f.__s,
                  f.__d = !1),
                  e.__e = n.__e,
                  e.__k = n.__k,
                  e.__k.forEach((function(t) {
                      t && (t.__ = e)
                  }
                  )),
                  E = 0; E < f._sb.length; E++)
                      f.__h.push(f._sb[E]);
                  f._sb = [],
                  f.__h.length && u.push(f);
                  break t
              }
              null != f.componentWillUpdate && f.componentWillUpdate(w, f.__s, S),
              null != f.componentDidUpdate && f.__h.push((function() {
                  f.componentDidUpdate(h, d, v)
              }
              ))
          }
          if (f.context = S,
          f.props = w,
          f.__P = t,
          f.__e = !1,
          P = r.__r,
          C = 0,
          "prototype"in N && N.prototype.render) {
              for (f.state = f.__s,
              f.__d = !1,
              P && P(e),
              l = f.render(f.props, f.state, f.context),
              M = 0; M < f._sb.length; M++)
                  f.__h.push(f._sb[M]);
              f._sb = []
          } else
              do {
                  f.__d = !1,
                  P && P(e),
                  l = f.render(f.props, f.state, f.context),
                  f.state = f.__s
              } while (f.__d && ++C < 25);
          f.state = f.__s,
          null != f.getChildContext && (o = g(g({}, o), f.getChildContext())),
          p || null == f.getSnapshotBeforeUpdate || (v = f.getSnapshotBeforeUpdate(h, d)),
          $(t, y(O = null != l && l.type === k && null == l.key ? l.props.children : l) ? O : [O], e, n, o, i, s, u, _, c, a),
          f.base = e.__e,
          e.__u &= -161,
          f.__h.length && u.push(f),
          m && (f.__E = f.__ = null)
      } catch (t) {
          e.__v = null,
          c || null != s ? (e.__e = _,
          e.__u |= c ? 160 : 32,
          s[s.indexOf(_)] = null) : (e.__e = n.__e,
          e.__k = n.__k),
          r.__e(t, e, n)
      }
  else
      null == s && e.__v === n.__v ? (e.__k = n.__k,
      e.__e = n.__e) : e.__e = L(n.__e, e, n, o, i, s, u, c, a);
  (l = r.diffed) && l(e)
}
function W(t, e, n) {
  e.__d = void 0;
  for (var o = 0; o < n.length; o++)
      A(n[o], n[++o], n[++o]);
  r.__c && r.__c(e, t),
  t.some((function(e) {
      try {
          t = e.__h,
          e.__h = [],
          t.some((function(t) {
              t.call(e)
          }
          ))
      } catch (t) {
          r.__e(t, e.__v)
      }
  }
  ))
}
function L(t, e, r, o, i, s, u, _, c) {
  var a, l, f, p, d, v, g, w = r.props, b = e.props, k = e.type;
  if ("svg" === k ? i = "http://www.w3.org/2000/svg" : "math" === k ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"),
  null != s)
      for (a = 0; a < s.length; a++)
          if ((d = s[a]) && "setAttribute"in d == !!k && (k ? d.localName === k : 3 === d.nodeType)) {
              t = d,
              s[a] = null;
              break
          }
  if (null == t) {
      if (null === k)
          return document.createTextNode(b);
      t = document.createElementNS(i, k, b.is && b),
      s = null,
      _ = !1
  }
  if (null === k)
      w === b || _ && t.data === b || (t.data = b);
  else {
      if (s = s && n.call(t.childNodes),
      w = r.props || h,
      !_ && null != s)
          for (w = {},
          a = 0; a < t.attributes.length; a++)
              w[(d = t.attributes[a]).name] = d.value;
      for (a in w)
          if (d = w[a],
          "children" == a)
              ;
          else if ("dangerouslySetInnerHTML" == a)
              f = d;
          else if ("key" !== a && !(a in b)) {
              if ("value" == a && "defaultValue"in b || "checked" == a && "defaultChecked"in b)
                  continue;
              j(t, a, null, d, i)
          }
      for (a in b)
          d = b[a],
          "children" == a ? p = d : "dangerouslySetInnerHTML" == a ? l = d : "value" == a ? v = d : "checked" == a ? g = d : "key" === a || _ && "function" != typeof d || w[a] === d || j(t, a, d, w[a], i);
      if (l)
          _ || f && (l.__html === f.__html || l.__html === t.innerHTML) || (t.innerHTML = l.__html),
          e.__k = [];
      else if (f && (t.innerHTML = ""),
      $(t, y(p) ? p : [p], e, r, o, "foreignObject" === k ? "http://www.w3.org/1999/xhtml" : i, s, u, s ? s[0] : r.__k && S(r, 0), _, c),
      null != s)
          for (a = s.length; a--; )
              null != s[a] && m(s[a]);
      _ || (a = "value",
      void 0 !== v && (v !== t[a] || "progress" === k && !v || "option" === k && v !== w[a]) && j(t, a, v, w[a], i),
      a = "checked",
      void 0 !== g && g !== t[a] && j(t, a, g, w[a], i))
  }
  return t
}
function A(t, e, n) {
  try {
      "function" == typeof t ? t(e) : t.current = e
  } catch (t) {
      r.__e(t, n)
  }
}
function F(t, e, n) {
  var o, i;
  if (r.unmount && r.unmount(t),
  (o = t.ref) && (o.current && o.current !== t.__e || A(o, null, e)),
  null != (o = t.__c)) {
      if (o.componentWillUnmount)
          try {
              o.componentWillUnmount()
          } catch (t) {
              r.__e(t, e)
          }
      o.base = o.__P = null
  }
  if (o = t.__k)
      for (i = 0; i < o.length; i++)
          o[i] && F(o[i], e, n || "function" != typeof t.type);
  n || null == t.__e || m(t.__e),
  t.__c = t.__ = t.__e = t.__d = void 0
}
function R(t, e, n) {
  return this.constructor(t, n)
}
function D(t, e, o) {
  var i, s, u, _;
  r.__ && r.__(t, e),
  s = (i = "function" == typeof o) ? null : o && o.__k || e.__k,
  u = [],
  _ = [],
  U(e, t = (!i && o || e).__k = w(k, null, [t]), s || h, h, e.namespaceURI, !i && o ? [o] : s ? null : e.firstChild ? n.call(e.childNodes) : null, u, !i && o ? o : s ? s.__e : e.firstChild, i, _),
  W(u, t, _)
}
function I(t, e) {
  D(t, e, I)
}
function V(t, e, r) {
  var o, i, s, u, _ = g({}, t.props);
  for (s in t.type && t.type.defaultProps && (u = t.type.defaultProps),
  e)
      "key" == s ? o = e[s] : "ref" == s ? i = e[s] : _[s] = void 0 === e[s] && void 0 !== u ? u[s] : e[s];
  return arguments.length > 2 && (_.children = arguments.length > 3 ? n.call(arguments, 2) : r),
  b(t.type, _, o || t.key, i || t.ref, null)
}
n = d.slice,
r = {
  __e: function(t, e, n, r) {
      for (var o, i, s; e = e.__; )
          if ((o = e.__c) && !o.__)
              try {
                  if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(t)),
                  s = o.__d),
                  null != o.componentDidCatch && (o.componentDidCatch(t, r || {}),
                  s = o.__d),
                  s)
                      return o.__E = o
              } catch (e) {
                  t = e
              }
      throw t
  }
},
o = 0,
i = function(t) {
  return null != t && null == t.constructor
}
,
x.prototype.setState = function(t, e) {
  var n;
  n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = g({}, this.state),
  "function" == typeof t && (t = t(g({}, n), this.props)),
  t && g(n, t),
  null != t && this.__v && (e && this._sb.push(e),
  P(this))
}
,
x.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0,
  t && this.__h.push(t),
  P(this))
}
,
x.prototype.render = k,
s = [],
_ = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
c = function(t, e) {
  return t.__v.__b - e.__v.__b
}
,
C.__r = 0,
a = 0,
l = H(!1),
f = H(!0),
p = 0;
var B, z, J, q, K = 0, G = [], Q = [], X = r, Y = X.__b, Z = X.__r, tt = X.diffed, et = X.__c, nt = X.unmount, rt = X.__;
function ot(t, e) {
  X.__h && X.__h(z, t, K || e),
  K = 0;
  var n = z.__H || (z.__H = {
      __: [],
      __h: []
  });
  return t >= n.__.length && n.__.push({
      __V: Q
  }),
  n.__[t]
}
function it(t) {
  return K = 1,
  function(t, e, n) {
      var r = ot(B++, 2);
      if (r.t = t,
      !r.__c && (r.__ = [n ? n(e) : gt(void 0, e), function(t) {
          var e = r.__N ? r.__N[0] : r.__[0]
            , n = r.t(e, t);
          e !== n && (r.__N = [n, r.__[1]],
          r.__c.setState({}))
      }
      ],
      r.__c = z,
      !z.u)) {
          var o = function(t, e, n) {
              if (!r.__c.__H)
                  return !0;
              var o = r.__c.__H.__.filter((function(t) {
                  return !!t.__c
              }
              ));
              if (o.every((function(t) {
                  return !t.__N
              }
              )))
                  return !i || i.call(this, t, e, n);
              var s = !1;
              return o.forEach((function(t) {
                  if (t.__N) {
                      var e = t.__[0];
                      t.__ = t.__N,
                      t.__N = void 0,
                      e !== t.__[0] && (s = !0)
                  }
              }
              )),
              !(!s && r.__c.props === t) && (!i || i.call(this, t, e, n))
          };
          z.u = !0;
          var i = z.shouldComponentUpdate
            , s = z.componentWillUpdate;
          z.componentWillUpdate = function(t, e, n) {
              if (this.__e) {
                  var r = i;
                  i = void 0,
                  o(t, e, n),
                  i = r
              }
              s && s.call(this, t, e, n)
          }
          ,
          z.shouldComponentUpdate = o
      }
      return r.__N || r.__
  }(gt, t)
}
function st(t, e) {
  var n = ot(B++, 3);
  !X.__s && yt(n.__H, e) && (n.__ = t,
  n.i = e,
  z.__H.__h.push(n))
}
function ut(t, e) {
  var n = ot(B++, 4);
  !X.__s && yt(n.__H, e) && (n.__ = t,
  n.i = e,
  z.__h.push(n))
}
function _t(t) {
  return K = 5,
  ct((function() {
      return {
          current: t
      }
  }
  ), [])
}
function ct(t, e) {
  var n = ot(B++, 7);
  return yt(n.__H, e) ? (n.__V = t(),
  n.i = e,
  n.__h = t,
  n.__V) : n.__
}
function at(t, e) {
  return K = 8,
  ct((function() {
      return t
  }
  ), e)
}
function lt(t) {
  var e = z.context[t.__c]
    , n = ot(B++, 9);
  return n.c = t,
  e ? (null == n.__ && (n.__ = !0,
  e.sub(z)),
  e.props.value) : t.__
}
function ft() {
  for (var t; t = G.shift(); )
      if (t.__P && t.__H)
          try {
              t.__H.__h.forEach(dt),
              t.__H.__h.forEach(vt),
              t.__H.__h = []
          } catch (e) {
              t.__H.__h = [],
              X.__e(e, t.__v)
          }
}
X.__b = function(t) {
  z = null,
  Y && Y(t)
}
,
X.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m),
  rt && rt(t, e)
}
,
X.__r = function(t) {
  Z && Z(t),
  B = 0;
  var e = (z = t.__c).__H;
  e && (J === z ? (e.__h = [],
  z.__h = [],
  e.__.forEach((function(t) {
      t.__N && (t.__ = t.__N),
      t.__V = Q,
      t.__N = t.i = void 0
  }
  ))) : (e.__h.forEach(dt),
  e.__h.forEach(vt),
  e.__h = [],
  B = 0)),
  J = z
}
,
X.diffed = function(t) {
  tt && tt(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (1 !== G.push(e) && q === X.requestAnimationFrame || ((q = X.requestAnimationFrame) || ht)(ft)),
  e.__H.__.forEach((function(t) {
      t.i && (t.__H = t.i),
      t.__V !== Q && (t.__ = t.__V),
      t.i = void 0,
      t.__V = Q
  }
  ))),
  J = z = null
}
,
X.__c = function(t, e) {
  e.some((function(t) {
      try {
          t.__h.forEach(dt),
          t.__h = t.__h.filter((function(t) {
              return !t.__ || vt(t)
          }
          ))
      } catch (n) {
          e.some((function(t) {
              t.__h && (t.__h = [])
          }
          )),
          e = [],
          X.__e(n, t.__v)
      }
  }
  )),
  et && et(t, e)
}
,
X.unmount = function(t) {
  nt && nt(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach((function(t) {
      try {
          dt(t)
      } catch (t) {
          e = t
      }
  }
  )),
  n.__H = void 0,
  e && X.__e(e, n.__v))
}
;
var pt = "function" == typeof requestAnimationFrame;
function ht(t) {
  var e, n = function() {
      clearTimeout(r),
      pt && cancelAnimationFrame(e),
      setTimeout(t)
  }, r = setTimeout(n, 100);
  pt && (e = requestAnimationFrame(n))
}
function dt(t) {
  var e = z
    , n = t.__c;
  "function" == typeof n && (t.__c = void 0,
  n()),
  z = e
}
function vt(t) {
  var e = z;
  t.__c = t.__(),
  z = e
}
function yt(t, e) {
  return !t || t.length !== e.length || e.some((function(e, n) {
      return e !== t[n]
  }
  ))
}
function gt(t, e) {
  return "function" == typeof e ? e(t) : e
}
var mt = Symbol.for("preact-signals");
function wt() {
  if (Et > 1)
      Et--;
  else {
      for (var t, e = !1; void 0 !== St; ) {
          var n = St;
          for (St = void 0,
          Pt++; void 0 !== n; ) {
              var r = n.o;
              if (n.o = void 0,
              n.f &= -3,
              !(8 & n.f) && Nt(n))
                  try {
                      n.c()
                  } catch (n) {
                      e || (t = n,
                      e = !0)
                  }
              n = r
          }
      }
      if (Pt = 0,
      Et--,
      e)
          throw t
  }
}
function bt(t) {
  if (Et > 0)
      return t();
  Et++;
  try {
      return t()
  } finally {
      wt()
  }
}
var kt = void 0;
var xt, St = void 0, Et = 0, Pt = 0, Ct = 0;
function $t(t) {
  if (void 0 !== kt) {
      var e = t.n;
      if (void 0 === e || e.t !== kt)
          return e = {
              i: 0,
              S: t,
              p: kt.s,
              n: void 0,
              t: kt,
              e: void 0,
              x: void 0,
              r: e
          },
          void 0 !== kt.s && (kt.s.n = e),
          kt.s = e,
          t.n = e,
          32 & kt.f && t.S(e),
          e;
      if (-1 === e.i)
          return e.i = 0,
          void 0 !== e.n && (e.n.p = e.p,
          void 0 !== e.p && (e.p.n = e.n),
          e.p = kt.s,
          e.n = void 0,
          kt.s.n = e,
          kt.s = e),
          e
  }
}
function Mt(t) {
  this.v = t,
  this.i = 0,
  this.n = void 0,
  this.t = void 0
}
function Ot(t) {
  return new Mt(t)
}
function Nt(t) {
  for (var e = t.s; void 0 !== e; e = e.n)
      if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i)
          return !0;
  return !1
}
function Tt(t) {
  for (var e = t.s; void 0 !== e; e = e.n) {
      var n = e.S.n;
      if (void 0 !== n && (e.r = n),
      e.S.n = e,
      e.i = -1,
      void 0 === e.n) {
          t.s = e;
          break
      }
  }
}
function jt(t) {
  for (var e = t.s, n = void 0; void 0 !== e; ) {
      var r = e.p;
      -1 === e.i ? (e.S.U(e),
      void 0 !== r && (r.n = e.n),
      void 0 !== e.n && (e.n.p = r)) : n = e,
      e.S.n = e.r,
      void 0 !== e.r && (e.r = void 0),
      e = r
  }
  t.s = n
}
function Ht(t) {
  Mt.call(this, void 0),
  this.x = t,
  this.s = void 0,
  this.g = Ct - 1,
  this.f = 4
}
function Ut(t) {
  return new Ht(t)
}
function Wt(t) {
  var e = t.u;
  if (t.u = void 0,
  "function" == typeof e) {
      Et++;
      var n = kt;
      kt = void 0;
      try {
          e()
      } catch (e) {
          throw t.f &= -2,
          t.f |= 8,
          Lt(t),
          e
      } finally {
          kt = n,
          wt()
      }
  }
}
function Lt(t) {
  for (var e = t.s; void 0 !== e; e = e.n)
      e.S.U(e);
  t.x = void 0,
  t.s = void 0,
  Wt(t)
}
function At(t) {
  if (kt !== this)
      throw new Error("Out-of-order effect");
  jt(this),
  kt = t,
  this.f &= -2,
  8 & this.f && Lt(this),
  wt()
}
function Ft(t) {
  this.x = t,
  this.u = void 0,
  this.s = void 0,
  this.o = void 0,
  this.f = 32
}
function Rt(t) {
  var e = new Ft(t);
  try {
      e.c()
  } catch (t) {
      throw e.d(),
      t
  }
  return e.d.bind(e)
}
function Dt(t, e) {
  r[t] = e.bind(null, r[t] || function() {}
  )
}
function It(t) {
  xt && xt(),
  xt = t && t.S()
}
function Vt(t) {
  var e = this
    , n = t.data
    , r = function(t) {
      return ct((function() {
          return Ot(t)
      }
      ), [])
  }(n);
  r.value = n;
  var o = ct((function() {
      for (var t = e.__v; t = t.__; )
          if (t.__c) {
              t.__c.__$f |= 4;
              break
          }
      return e.__$u.c = function() {
          var t;
          i(o.peek()) || 3 !== (null == (t = e.base) ? void 0 : t.nodeType) ? (e.__$f |= 1,
          e.setState({})) : e.base.data = o.peek()
      }
      ,
      Ut((function() {
          var t = r.value.value;
          return 0 === t ? 0 : !0 === t ? "" : t || ""
      }
      ))
  }
  ), []);
  return o.value
}
function Bt(t, e, n, r) {
  var o = e in t && void 0 === t.ownerSVGElement
    , i = Ot(n);
  return {
      o: function(t, e) {
          i.value = t,
          r = e
      },
      d: Rt((function() {
          var n = i.value.value;
          r[e] !== n && (r[e] = n,
          o ? t[e] = n : n ? t.setAttribute(e, n) : t.removeAttribute(e))
      }
      ))
  }
}
Mt.prototype.brand = mt,
Mt.prototype.h = function() {
  return !0
}
,
Mt.prototype.S = function(t) {
  this.t !== t && void 0 === t.e && (t.x = this.t,
  void 0 !== this.t && (this.t.e = t),
  this.t = t)
}
,
Mt.prototype.U = function(t) {
  if (void 0 !== this.t) {
      var e = t.e
        , n = t.x;
      void 0 !== e && (e.x = n,
      t.e = void 0),
      void 0 !== n && (n.e = e,
      t.x = void 0),
      t === this.t && (this.t = n)
  }
}
,
Mt.prototype.subscribe = function(t) {
  var e = this;
  return Rt((function() {
      var n = e.value
        , r = kt;
      kt = void 0;
      try {
          t(n)
      } finally {
          kt = r
      }
  }
  ))
}
,
Mt.prototype.valueOf = function() {
  return this.value
}
,
Mt.prototype.toString = function() {
  return this.value + ""
}
,
Mt.prototype.toJSON = function() {
  return this.value
}
,
Mt.prototype.peek = function() {
  var t = kt;
  kt = void 0;
  try {
      return this.value
  } finally {
      kt = t
  }
}
,
Object.defineProperty(Mt.prototype, "value", {
  get: function() {
      var t = $t(this);
      return void 0 !== t && (t.i = this.i),
      this.v
  },
  set: function(t) {
      if (t !== this.v) {
          if (Pt > 100)
              throw new Error("Cycle detected");
          this.v = t,
          this.i++,
          Ct++,
          Et++;
          try {
              for (var e = this.t; void 0 !== e; e = e.x)
                  e.t.N()
          } finally {
              wt()
          }
      }
  }
}),
(Ht.prototype = new Mt).h = function() {
  if (this.f &= -3,
  1 & this.f)
      return !1;
  if (32 == (36 & this.f))
      return !0;
  if (this.f &= -5,
  this.g === Ct)
      return !0;
  if (this.g = Ct,
  this.f |= 1,
  this.i > 0 && !Nt(this))
      return this.f &= -2,
      !0;
  var t = kt;
  try {
      Tt(this),
      kt = this;
      var e = this.x();
      (16 & this.f || this.v !== e || 0 === this.i) && (this.v = e,
      this.f &= -17,
      this.i++)
  } catch (t) {
      this.v = t,
      this.f |= 16,
      this.i++
  }
  return kt = t,
  jt(this),
  this.f &= -2,
  !0
}
,
Ht.prototype.S = function(t) {
  if (void 0 === this.t) {
      this.f |= 36;
      for (var e = this.s; void 0 !== e; e = e.n)
          e.S.S(e)
  }
  Mt.prototype.S.call(this, t)
}
,
Ht.prototype.U = function(t) {
  if (void 0 !== this.t && (Mt.prototype.U.call(this, t),
  void 0 === this.t)) {
      this.f &= -33;
      for (var e = this.s; void 0 !== e; e = e.n)
          e.S.U(e)
  }
}
,
Ht.prototype.N = function() {
  if (!(2 & this.f)) {
      this.f |= 6;
      for (var t = this.t; void 0 !== t; t = t.x)
          t.t.N()
  }
}
,
Object.defineProperty(Ht.prototype, "value", {
  get: function() {
      if (1 & this.f)
          throw new Error("Cycle detected");
      var t = $t(this);
      if (this.h(),
      void 0 !== t && (t.i = this.i),
      16 & this.f)
          throw this.v;
      return this.v
  }
}),
Ft.prototype.c = function() {
  var t = this.S();
  try {
      if (8 & this.f)
          return;
      if (void 0 === this.x)
          return;
      var e = this.x();
      "function" == typeof e && (this.u = e)
  } finally {
      t()
  }
}
,
Ft.prototype.S = function() {
  if (1 & this.f)
      throw new Error("Cycle detected");
  this.f |= 1,
  this.f &= -9,
  Wt(this),
  Tt(this),
  Et++;
  var t = kt;
  return kt = this,
  At.bind(this, t)
}
,
Ft.prototype.N = function() {
  2 & this.f || (this.f |= 2,
  this.o = St,
  St = this)
}
,
Ft.prototype.d = function() {
  this.f |= 8,
  1 & this.f || Lt(this)
}
,
Vt.displayName = "_st",
Object.defineProperties(Mt.prototype, {
  constructor: {
      configurable: !0,
      value: void 0
  },
  type: {
      configurable: !0,
      value: Vt
  },
  props: {
      configurable: !0,
      get: function() {
          return {
              data: this
          }
      }
  },
  __b: {
      configurable: !0,
      value: 1
  }
}),
Dt("__b", (function(t, e) {
  if ("string" == typeof e.type) {
      var n, r = e.props;
      for (var o in r)
          if ("children" !== o) {
              var i = r[o];
              i instanceof Mt && (n || (e.__np = n = {}),
              n[o] = i,
              r[o] = i.peek())
          }
  }
  t(e)
}
)),
Dt("__r", (function(t, e) {
  It();
  var n, r = e.__c;
  r && (r.__$f &= -2,
  void 0 === (n = r.__$u) && (r.__$u = n = function(t) {
      var e;
      return Rt((function() {
          e = this
      }
      )),
      e.c = function() {
          r.__$f |= 1,
          r.setState({})
      }
      ,
      e
  }())),
  r,
  It(n),
  t(e)
}
)),
Dt("__e", (function(t, e, n, r) {
  It(),
  void 0,
  t(e, n, r)
}
)),
Dt("diffed", (function(t, e) {
  var n;
  if (It(),
  void 0,
  "string" == typeof e.type && (n = e.__e)) {
      var r = e.__np
        , o = e.props;
      if (r) {
          var i = n.U;
          if (i)
              for (var s in i) {
                  var u = i[s];
                  void 0 === u || s in r || (u.d(),
                  i[s] = void 0)
              }
          else
              n.U = i = {};
          for (var _ in r) {
              var c = i[_]
                , a = r[_];
              void 0 === c ? (c = Bt(n, _, a, o),
              i[_] = c) : c.o(a, o)
          }
      }
  }
  t(e)
}
)),
Dt("unmount", (function(t, e) {
  if ("string" == typeof e.type) {
      var n = e.__e;
      if (n) {
          var r = n.U;
          if (r)
              for (var o in n.U = void 0,
              r) {
                  var i = r[o];
                  i && i.d()
              }
      }
  } else {
      var s = e.__c;
      if (s) {
          var u = s.__$u;
          u && (s.__$u = void 0,
          u.d())
      }
  }
  t(e)
}
)),
Dt("__h", (function(t, e, n, r) {
  (r < 3 || 9 === r) && (e.__$f |= 2),
  t(e, n, r)
}
)),
x.prototype.shouldComponentUpdate = function(t, e) {
  var n = this.__$u;
  if (!(n && void 0 !== n.s || 4 & this.__$f))
      return !0;
  if (3 & this.__$f)
      return !0;
  for (var r in e)
      return !0;
  for (var o in t)
      if ("__source" !== o && t[o] !== this.props[o])
          return !0;
  for (var i in this.props)
      if (!(i in t))
          return !0;
  return !1
}
;
var zt = new WeakMap
, Jt = new WeakMap
, qt = new WeakMap
, Kt = new WeakSet
, Gt = new WeakMap
, Qt = /^\$/
, Xt = Object.getOwnPropertyDescriptor
, Yt = !1
, Zt = function(t) {
  if (!_e(t))
      throw new Error("This object can't be observed.");
  return Jt.has(t) || Jt.set(t, ee(t, oe)),
  Jt.get(t)
}
, te = function(t, e) {
  Yt = !0;
  var n = t[e];
  try {
      Yt = !1
  } catch (t) {}
  return n
};
var ee = function(t, e) {
  var n = new Proxy(t,e);
  return Kt.add(n),
  n
}
, ne = function() {
  throw new Error("Don't mutate the signals directly.")
}
, re = function(t) {
  return function(e, n, r) {
      var o;
      if (Yt)
          return Reflect.get(e, n, r);
      var i = t || "$" === n[0];
      if (!t && i && Array.isArray(e)) {
          if ("$" === n)
              return qt.has(e) || qt.set(e, ee(e, ie)),
              qt.get(e);
          i = "$length" === n
      }
      zt.has(r) || zt.set(r, new Map);
      var s = zt.get(r)
        , u = i ? n.replace(Qt, "") : n;
      if (s.has(u) || "function" != typeof (null == (o = Xt(e, u)) ? void 0 : o.get)) {
          var _ = Reflect.get(e, u, r);
          if (i && "function" == typeof _)
              return;
          if ("symbol" == typeof u && se.has(u))
              return _;
          s.has(u) || (_e(_) && (Jt.has(_) || Jt.set(_, ee(_, oe)),
          _ = Jt.get(_)),
          s.set(u, Ot(_)))
      } else
          s.set(u, Ut((function() {
              return Reflect.get(e, u, r)
          }
          )));
      return i ? s.get(u) : s.get(u).value
  }
}
, oe = {
  get: re(!1),
  set: function(t, e, n, r) {
      var o;
      if ("function" == typeof (null == (o = Xt(t, e)) ? void 0 : o.set))
          return Reflect.set(t, e, n, r);
      zt.has(r) || zt.set(r, new Map);
      var i = zt.get(r);
      if ("$" === e[0]) {
          n instanceof Mt || ne();
          var s = e.replace(Qt, "");
          return i.set(s, n),
          Reflect.set(t, s, n.peek(), r)
      }
      var u = n;
      _e(n) && (Jt.has(n) || Jt.set(n, ee(n, oe)),
      u = Jt.get(n));
      var _ = !(e in t)
        , c = Reflect.set(t, e, n, r);
      return i.has(e) ? i.get(e).value = u : i.set(e, Ot(u)),
      _ && Gt.has(t) && Gt.get(t).value++,
      Array.isArray(t) && i.has("length") && (i.get("length").value = t.length),
      c
  },
  deleteProperty: function(t, e) {
      "$" === e[0] && ne();
      var n = zt.get(Jt.get(t))
        , r = Reflect.deleteProperty(t, e);
      return n && n.has(e) && (n.get(e).value = void 0),
      Gt.has(t) && Gt.get(t).value++,
      r
  },
  ownKeys: function(t) {
      return Gt.has(t) || Gt.set(t, Ot(0)),
      Gt._ = Gt.get(t).value,
      Reflect.ownKeys(t)
  }
}
, ie = {
  get: re(!0),
  set: ne,
  deleteProperty: ne
}
, se = new Set(Object.getOwnPropertyNames(Symbol).map((function(t) {
  return Symbol[t]
}
)).filter((function(t) {
  return "symbol" == typeof t
}
)))
, ue = new Set([Object, Array])
, _e = function(t) {
  return "object" == typeof t && null !== t && ue.has(t.constructor) && !Kt.has(t)
};
const ce = t => Boolean(t && "object" == typeof t && t.constructor === Object)
, ae = (t, e) => {
  if (ce(t) && ce(e))
      for (const n in e) {
          const r = Object.getOwnPropertyDescriptor(e, n)?.get;
          if ("function" == typeof r)
              Object.defineProperty(t, n, {
                  get: r
              });
          else if (ce(e[n]))
              t[n] || (t[n] = {}),
              ae(t[n], e[n]);
          else
              try {
                  t[n] = e[n]
              } catch (t) {}
      }
}
, le = new Map
, fe = new Map
, pe = new Map
, he = new Map
, de = new WeakMap
, ve = new WeakMap
, ye = new WeakMap
, ge = (t, e) => {
  if (!de.has(t)) {
      const n = new Proxy(t,me);
      de.set(t, n),
      ve.set(n, e)
  }
  return de.get(t)
}
, me = {
  get: (t, e, n) => {
      const r = ve.get(n)
        , o = Object.getOwnPropertyDescriptor(t, e)?.get;
      if (o) {
          const e = Ue();
          if (e) {
              const n = ye.get(e) || ye.set(e, new Map).get(e);
              return n.has(o) || n.set(o, Ut(( () => {
                  Fe(r),
                  We(e);
                  try {
                      return o.call(t)
                  } finally {
                      Le(),
                      Re()
                  }
              }
              ))),
              n.get(o).value
          }
      }
      const i = Reflect.get(t, e);
      if (void 0 === i && n === le.get(r)) {
          const n = {};
          return Reflect.set(t, e, n),
          ge(n, r)
      }
      return "GeneratorFunction" === i?.constructor?.name ? async (...t) => {
          const e = Ue()
            , n = i(...t);
          let o, s;
          for (; ; ) {
              Fe(r),
              We(e);
              try {
                  s = n.next(o)
              } finally {
                  Le(),
                  Re()
              }
              try {
                  o = await s.value
              } catch (t) {
                  Fe(r),
                  We(e),
                  n.throw(t)
              } finally {
                  Le(),
                  Re()
              }
              if (s.done)
                  break
          }
          return o
      }
      : "function" == typeof i ? (...t) => {
          Fe(r);
          try {
              return i(...t)
          } finally {
              Re()
          }
      }
      : ce(i) ? ge(i, r) : i
  }
  ,
  set: (t, e, n) => Reflect.set(t, e, n)
}
, we = t => he.get(t || Ae()) || {}
, be = "I acknowledge that using a private store means my plugin will inevitably break on the next store release.";
function ke(t, {state: e={}, ...n}={}, {lock: r=!1}={}) {
  if (le.has(t)) {
      if (r === be || pe.has(t)) {
          const e = pe.get(t);
          if (!(r === be || !0 !== r && r === e))
              throw e ? Error("Cannot unlock a private store with an invalid lock code") : Error("Cannot lock a public store")
      } else
          pe.set(t, r);
      const o = fe.get(t);
      ae(o, n),
      ae(o.state, e)
  } else {
      r !== be && pe.set(t, r);
      const o = {
          state: Zt(ce(e) ? e : {}),
          ...n
      }
        , i = new Proxy(o,me);
      fe.set(t, o),
      le.set(t, i),
      ve.set(i, t)
  }
  return le.get(t)
}
const xe = (t=document) => {
  var e;
  const n = null !== (e = t.getElementById("wp-script-module-data-@wordpress/interactivity")) && void 0 !== e ? e : t.getElementById("wp-interactivity-data");
  if (n?.textContent)
      try {
          return JSON.parse(n.textContent)
      } catch {}
  return {}
}
, Se = t => {
  ce(t?.state) && Object.entries(t.state).forEach(( ([t,e]) => {
      ke(t, {
          state: e
      }, {
          lock: be
      })
  }
  )),
  ce(t?.config) && Object.entries(t.config).forEach(( ([t,e]) => {
      he.set(t, e)
  }
  ))
}
, Ee = xe();
Se(Ee);
const Pe = function(t, e) {
  var n = {
      __c: e = "__cC" + p++,
      __: t,
      Consumer: function(t, e) {
          return t.children(e)
      },
      Provider: function(t) {
          var n, r;
          return this.getChildContext || (n = [],
          (r = {})[e] = this,
          this.getChildContext = function() {
              return r
          }
          ,
          this.shouldComponentUpdate = function(t) {
              this.props.value !== t.value && n.some((function(t) {
                  t.__e = !0,
                  P(t)
              }
              ))
          }
          ,
          this.sub = function(t) {
              n.push(t);
              var e = t.componentWillUnmount;
              t.componentWillUnmount = function() {
                  n.splice(n.indexOf(t), 1),
                  e && e.call(t)
              }
          }
          ),
          t.children
      }
  };
  return n.Provider.__ = n.Consumer.contextType = n
}({})
, Ce = new WeakMap
, $e = () => {
  throw new Error("Please use `data-wp-bind` to modify the attributes of an element.")
}
, Me = {
  get(t, e, n) {
      const r = Reflect.get(t, e, n);
      return r && "object" == typeof r ? Oe(r) : r
  },
  set: $e,
  deleteProperty: $e
}
, Oe = t => (Ce.has(t) || Ce.set(t, new Proxy(t,Me)),
Ce.get(t))
, Ne = []
, Te = []
, je = t => Ue()?.context[t || Ae()]
, He = () => {
  if (!Ue())
      throw Error("Cannot call `getElement()` outside getters and actions used by directives.");
  const {ref: t, attributes: e} = Ue();
  return Object.freeze({
      ref: t.current,
      attributes: Oe(e)
  })
}
, Ue = () => Ne.slice(-1)[0]
, We = t => {
  Ne.push(t)
}
, Le = () => {
  Ne.pop()
}
, Ae = () => Te.slice(-1)[0]
, Fe = t => {
  Te.push(t)
}
, Re = () => {
  Te.pop()
}
, De = {}
, Ie = {}
, Ve = (t, e, {priority: n=10}={}) => {
  De[t] = e,
  Ie[t] = n
}
, Be = ({scope: t}) => (e, ...n) => {
  let {value: r, namespace: o} = e;
  if ("string" != typeof r)
      throw new Error("The `value` prop should be a string path");
  const i = "!" === r[0] && !!(r = r.slice(1));
  We(t);
  const s = ( (t, e) => {
      if (!e)
          return void rn(`Namespace missing for "${t}". The value for that path won't be resolved.`);
      let n = le.get(e);
      void 0 === n && (n = ke(e, void 0, {
          lock: be
      }));
      const r = {
          ...n,
          context: Ue().context[e]
      };
      try {
          return t.split(".").reduce(( (t, e) => t[e]), r)
      } catch (t) {}
  }
  )(r, o)
    , u = "function" == typeof s ? s(...n) : s;
  return Le(),
  i ? !u : u
}
, ze = ({directives: t, priorityLevels: [e,...n], element: r, originalProps: o, previousScope: i}) => {
  const s = _t({}).current;
  s.evaluate = at(Be({
      scope: s
  }), []),
  s.context = lt(Pe),
  s.ref = i?.ref || _t(null),
  r = V(r, {
      ref: s.ref
  }),
  s.attributes = r.props;
  const u = n.length > 0 ? w(ze, {
      directives: t,
      priorityLevels: n,
      element: r,
      originalProps: o,
      previousScope: s
  }) : r
    , _ = {
      ...o,
      children: u
  }
    , c = {
      directives: t,
      props: _,
      element: r,
      context: Pe,
      evaluate: s.evaluate
  };
  We(s);
  for (const t of e) {
      const e = De[t]?.(c);
      void 0 !== e && (_.children = e)
  }
  return Le(),
  _.children
}
, Je = r.vnode;
r.vnode = t => {
  if (t.props.__directives) {
      const e = t.props
        , n = e.__directives;
      n.key && (t.key = n.key.find(( ({suffix: t}) => "default" === t)).value),
      delete e.__directives;
      const r = (t => {
          const e = Object.keys(t).reduce(( (t, e) => {
              if (De[e]) {
                  const n = Ie[e];
                  (t[n] = t[n] || []).push(e)
              }
              return t
          }
          ), {});
          return Object.entries(e).sort(( ([t], [e]) => parseInt(t) - parseInt(e))).map(( ([,t]) => t))
      }
      )(n);
      r.length > 0 && (t.props = {
          directives: n,
          priorityLevels: r,
          originalProps: e,
          type: t.type,
          element: w(t.type, e),
          top: !0
      },
      t.type = ze)
  }
  Je && Je(t)
}
;
const qe = t => new Promise((e => {
  const n = () => {
      clearTimeout(r),
      window.cancelAnimationFrame(o),
      setTimeout(( () => {
          t(),
          e()
      }
      ))
  }
    , r = setTimeout(n, 100)
    , o = window.requestAnimationFrame(n)
}
))
, Ke = () => new Promise((t => {
  setTimeout(t, 0)
}
));
function Ge(t) {
  st(( () => {
      let e = null
        , n = !1;
      return e = function(t, e) {
          let n = () => {}
          ;
          const r = Rt((function() {
              return n = this.c.bind(this),
              this.x = t,
              this.c = e,
              t()
          }
          ));
          return {
              flush: n,
              dispose: r
          }
      }(t, (async () => {
          e && !n && (n = !0,
          await qe(e.flush),
          n = !1)
      }
      )),
      e.dispose
  }
  ), [])
}
function Qe(t) {
  const e = Ue()
    , n = Ae();
  return "GeneratorFunction" === t?.constructor?.name ? async (...r) => {
      const o = t(...r);
      let i, s;
      for (; ; ) {
          Fe(n),
          We(e);
          try {
              s = o.next(i)
          } finally {
              Re(),
              Le()
          }
          try {
              i = await s.value
          } catch (t) {
              o.throw(t)
          }
          if (s.done)
              break
      }
      return i
  }
  : (...r) => {
      Fe(n),
      We(e);
      try {
          return t(...r)
      } finally {
          Re(),
          Le()
      }
  }
}
function Xe(t) {
  Ge(Qe(t))
}
function Ye(t) {
  st(Qe(t), [])
}
function Ze(t, e) {
  st(Qe(t), e)
}
function tn(t, e) {
  ut(Qe(t), e)
}
function en(t, e) {
  return at(Qe(t), e)
}
function nn(t, e) {
  return ct(Qe(t), e)
}
new Set;
const rn = t => {
  0
}
, on = new WeakMap
, sn = new WeakMap
, un = new WeakMap
, _n = new WeakMap
, cn = t => Boolean(t && "object" == typeof t && t.constructor === Object)
, an = Reflect.getOwnPropertyDescriptor
, ln = (t, e={}) => {
  if (_n.set(t, e),
  !sn.has(t)) {
      const e = new Proxy(t,{
          get: (e, n) => {
              const r = _n.get(t)
                , o = e[n];
              return !(n in e) && n in r ? r[n] : n in e && !on.get(e)?.has(n) && cn(te(e, n)) ? ln(o, r[n]) : sn.has(o) ? sn.get(o) : n in e ? o : r[n]
          }
          ,
          set: (e, n, r) => {
              const o = _n.get(t)
                , i = n in e || !(n in o) ? e : o;
              if (r && "object" == typeof r && (on.has(i) || on.set(i, new Set),
              on.get(i).add(n)),
              un.has(r)) {
                  const t = un.get(r);
                  i[n] = t
              } else
                  i[n] = r;
              return !0
          }
          ,
          ownKeys: e => [...new Set([...Object.keys(_n.get(t)), ...Object.keys(e)])],
          getOwnPropertyDescriptor: (e, n) => an(e, n) || an(_n.get(t), n)
      });
      sn.set(t, e),
      un.set(e, t)
  }
  return sn.get(t)
}
, fn = (t, e) => {
  for (const n in e)
      cn(te(t, n)) && cn(te(e, n)) ? fn(t[`$${n}`].peek(), e[n]) : t[n] = e[n]
}
;
function pn(t) {
  return cn(t) ? Object.fromEntries(Object.entries(t).map(( ([t,e]) => [t, pn(e)]))) : Array.isArray(t) ? t.map((t => pn(t))) : t
}
const hn = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
, dn = /\/\*[^]*?\*\/|  +/g
, vn = /\n+/g
, yn = t => ({directives: e, evaluate: n}) => {
  e[`on-${t}`].filter(( ({suffix: t}) => "default" !== t)).forEach((e => {
      const r = e.suffix.split("--", 1)[0];
      Ye(( () => {
          const o = t => n(e, t)
            , i = "window" === t ? window : document;
          return i.addEventListener(r, o),
          () => i.removeEventListener(r, o)
      }
      ))
  }
  ))
}
, gn = t => ({directives: e, evaluate: n}) => {
  e[`on-async-${t}`].filter(( ({suffix: t}) => "default" !== t)).forEach((e => {
      const r = e.suffix.split("--", 1)[0];
      Ye(( () => {
          const o = async t => {
              await Ke(),
              n(e, t)
          }
            , i = "window" === t ? window : document;
          return i.addEventListener(r, o, {
              passive: !0
          }),
          () => i.removeEventListener(r, o)
      }
      ))
  }
  ))
}
, mn = () => {
  Ve("context", ( ({directives: {context: t}, props: {children: e}, context: n}) => {
      const {Provider: r} = n
        , o = lt(n)
        , i = _t(Zt({}))
        , s = t.find(( ({suffix: t}) => "default" === t));
      return w(r, {
          value: ct(( () => {
              if (s) {
                  const {namespace: t, value: e} = s;
                  cn(e) || rn(`The value of data-wp-context in "${t}" store must be a valid stringified JSON object.`),
                  fn(i.current, {
                      [t]: pn(e)
                  })
              }
              return ln(i.current, o)
          }
          ), [s, o])
      }, e)
  }
  ), {
      priority: 5
  }),
  Ve("watch", ( ({directives: {watch: t}, evaluate: e}) => {
      t.forEach((t => {
          Xe(( () => e(t)))
      }
      ))
  }
  )),
  Ve("init", ( ({directives: {init: t}, evaluate: e}) => {
      t.forEach((t => {
          Ye(( () => e(t)))
      }
      ))
  }
  )),
  Ve("on", ( ({directives: {on: t}, element: e, evaluate: n}) => {
      const r = new Map;
      t.filter(( ({suffix: t}) => "default" !== t)).forEach((t => {
          const e = t.suffix.split("--")[0];
          r.has(e) || r.set(e, new Set),
          r.get(e).add(t)
      }
      )),
      r.forEach(( (t, r) => {
          const o = e.props[`on${r}`];
          e.props[`on${r}`] = e => {
              t.forEach((t => {
                  o && o(e),
                  n(t, e)
              }
              ))
          }
      }
      ))
  }
  )),
  Ve("on-async", ( ({directives: {"on-async": t}, element: e, evaluate: n}) => {
      const r = new Map;
      t.filter(( ({suffix: t}) => "default" !== t)).forEach((t => {
          const e = t.suffix.split("--")[0];
          r.has(e) || r.set(e, new Set),
          r.get(e).add(t)
      }
      )),
      r.forEach(( (t, r) => {
          const o = e.props[`on${r}`];
          e.props[`on${r}`] = e => {
              o && o(e),
              t.forEach((async t => {
                  await Ke(),
                  n(t, e)
              }
              ))
          }
      }
      ))
  }
  )),
  Ve("on-window", yn("window")),
  Ve("on-document", yn("document")),
  Ve("on-async-window", gn("window")),
  Ve("on-async-document", gn("document")),
  Ve("class", ( ({directives: {class: t}, element: e, evaluate: n}) => {
      t.filter(( ({suffix: t}) => "default" !== t)).forEach((t => {
          const r = t.suffix
            , o = n(t)
            , i = e.props.class || ""
            , s = new RegExp(`(^|\\s)${r}(\\s|$)`,"g");
          o ? s.test(i) || (e.props.class = i ? `${i} ${r}` : r) : e.props.class = i.replace(s, " ").trim(),
          Ye(( () => {
              o ? e.ref.current.classList.add(r) : e.ref.current.classList.remove(r)
          }
          ))
      }
      ))
  }
  )),
  Ve("style", ( ({directives: {style: t}, element: e, evaluate: n}) => {
      t.filter(( ({suffix: t}) => "default" !== t)).forEach((t => {
          const r = t.suffix
            , o = n(t);
          e.props.style = e.props.style || {},
          "string" == typeof e.props.style && (e.props.style = (t => {
              const e = [{}];
              let n, r;
              for (; n = hn.exec(t.replace(dn, "")); )
                  n[4] ? e.shift() : n[3] ? (r = n[3].replace(vn, " ").trim(),
                  e.unshift(e[0][r] = e[0][r] || {})) : e[0][n[1]] = n[2].replace(vn, " ").trim();
              return e[0]
          }
          )(e.props.style)),
          o ? e.props.style[r] = o : delete e.props.style[r],
          Ye(( () => {
              o ? e.ref.current.style[r] = o : e.ref.current.style.removeProperty(r)
          }
          ))
      }
      ))
  }
  )),
  Ve("bind", ( ({directives: {bind: t}, element: e, evaluate: n}) => {
      t.filter(( ({suffix: t}) => "default" !== t)).forEach((t => {
          const r = t.suffix
            , o = n(t);
          e.props[r] = o,
          Ye(( () => {
              const t = e.ref.current;
              if ("style" !== r) {
                  if ("width" !== r && "height" !== r && "href" !== r && "list" !== r && "form" !== r && "tabIndex" !== r && "download" !== r && "rowSpan" !== r && "colSpan" !== r && "role" !== r && r in t)
                      try {
                          return void (t[r] = null == o ? "" : o)
                      } catch (t) {}
                  null == o || !1 === o && "-" !== r[4] ? t.removeAttribute(r) : t.setAttribute(r, o)
              } else
                  "string" == typeof o && (t.style.cssText = o)
          }
          ))
      }
      ))
  }
  )),
  Ve("ignore", ( ({element: {type: t, props: {innerHTML: e, ...n}}}) => w(t, {
      dangerouslySetInnerHTML: {
          __html: ct(( () => e), [])
      },
      ...n
  }))),
  Ve("text", ( ({directives: {text: t}, element: e, evaluate: n}) => {
      const r = t.find(( ({suffix: t}) => "default" === t));
      if (r)
          try {
              const t = n(r);
              e.props.children = "object" == typeof t ? null : t.toString()
          } catch (t) {
              e.props.children = null
          }
      else
          e.props.children = null
  }
  )),
  Ve("run", ( ({directives: {run: t}, evaluate: e}) => {
      t.forEach((t => e(t)))
  }
  )),
  Ve("each", ( ({directives: {each: t, "each-key": e}, context: n, element: r, evaluate: o}) => {
      if ("template" !== r.type)
          return;
      const {Provider: i} = n
        , s = lt(n)
        , [u] = t
        , {namespace: _, suffix: c} = u;
      return o(u).map((t => {
          const n = "default" === c ? "item" : c.replace(/^-+|-+$/g, "").toLowerCase().replace(/-([a-z])/g, (function(t, e) {
              return e.toUpperCase()
          }
          ));
          const o = Zt({
              [_]: {}
          })
            , u = ln(o, s);
          u[_][n] = t;
          const a = {
              ...Ue(),
              context: u
          }
            , l = e ? Be({
              scope: a
          })(e[0]) : t;
          return w(i, {
              value: u,
              key: l
          }, r.props.content)
      }
      ))
  }
  ), {
      priority: 20
  }),
  Ve("each-child", ( () => null), {
      priority: 1
  })
}
, wn = "wp"
, bn = `data-${wn}-ignore`
, kn = `data-${wn}-interactive`
, xn = `data-${wn}-`
, Sn = []
, En = new RegExp(`^data-${wn}-([a-z0-9]+(?:-[a-z0-9]+)*)(?:--([a-z0-9_-]+))?$`,"i")
, Pn = /^([\w_\/-]+)::(.+)$/
, Cn = new WeakSet;
function $n(t) {
  const e = document.createTreeWalker(t, 205);
  return function t(n) {
      const {nodeType: r} = n;
      if (3 === r)
          return [n.data];
      if (4 === r) {
          var o;
          const t = e.nextSibling();
          return n.replaceWith(new window.Text(null !== (o = n.nodeValue) && void 0 !== o ? o : "")),
          [n.nodeValue, t]
      }
      if (8 === r || 7 === r) {
          const t = e.nextSibling();
          return n.remove(),
          [null, t]
      }
      const i = n
        , {attributes: s} = i
        , u = i.localName
        , _ = {}
        , c = []
        , a = [];
      let l = !1
        , f = !1;
      for (let t = 0; t < s.length; t++) {
          const e = s[t].name
            , n = s[t].value;
          if (e[xn.length] && e.slice(0, xn.length) === xn)
              if (e === bn)
                  l = !0;
              else {
                  var p, h;
                  const t = Pn.exec(n)
                    , r = null !== (p = t?.[1]) && void 0 !== p ? p : null;
                  let o = null !== (h = t?.[2]) && void 0 !== h ? h : n;
                  try {
                      const t = JSON.parse(o);
                      d = t,
                      o = Boolean(d && "object" == typeof d && d.constructor === Object) ? t : o
                  } catch {}
                  if (e === kn) {
                      f = !0;
                      const t = "string" == typeof o ? o : "string" == typeof o?.namespace ? o.namespace : null;
                      Sn.push(t)
                  } else
                      a.push([e, r, o])
              }
          else if ("ref" === e)
              continue;
          _[e] = n
      }
      var d;
      if (l && !f)
          return [w(u, {
              ..._,
              innerHTML: i.innerHTML,
              __directives: {
                  ignore: !0
              }
          })];
      if (f && Cn.add(i),
      a.length && (_.__directives = a.reduce(( (t, [e,n,r]) => {
          const o = En.exec(e);
          if (null === o)
              return rn(`Found malformed directive name: ${e}.`),
              t;
          const i = o[1] || ""
            , s = o[2] || "default";
          var u;
          return t[i] = t[i] || [],
          t[i].push({
              namespace: null != n ? n : null !== (u = Sn[Sn.length - 1]) && void 0 !== u ? u : null,
              value: r,
              suffix: s
          }),
          t
      }
      ), {})),
      "template" === u)
          _.content = [...i.content.childNodes].map((t => $n(t)));
      else {
          let n = e.firstChild();
          if (n) {
              for (; n; ) {
                  const [r,o] = t(n);
                  r && c.push(r),
                  n = o || e.nextSibling()
              }
              e.parentNode()
          }
      }
      return f && Sn.pop(),
      [w(u, _, c)]
  }(e.currentNode)
}
const Mn = new WeakMap
, On = t => {
  if (!t.parentElement)
      throw Error("The passed region should be an element with a parent.");
  return Mn.has(t) || Mn.set(t, ( (t, e) => {
      const n = (e = [].concat(e))[e.length - 1].nextSibling;
      function r(e, r) {
          t.insertBefore(e, r || n)
      }
      return t.__k = {
          nodeType: 1,
          parentNode: t,
          firstChild: e[0],
          childNodes: e,
          insertBefore: r,
          appendChild: r,
          removeChild(e) {
              t.removeChild(e)
          }
      }
  }
  )(t.parentElement, t)),
  Mn.get(t)
}
, Nn = new WeakMap
, Tn = t => {
  if ("I acknowledge that using private APIs means my theme or plugin will inevitably break in the next version of WordPress." === t)
      return {
          directivePrefix: wn,
          getRegionRootFragment: On,
          initialVdom: Nn,
          toVdom: $n,
          directive: Ve,
          getNamespace: Ae,
          h: w,
          cloneElement: V,
          render: D,
          deepSignal: Zt,
          parseInitialData: xe,
          populateInitialData: Se,
          batch: bt
      };
  throw new Error("Forbidden access.")
}
;
document.addEventListener("DOMContentLoaded", (async () => {
  mn(),
  await (async () => {
      const t = document.querySelectorAll(`[data-${wn}-interactive]`);
      for (const e of t)
          if (!Cn.has(e)) {
              await Ke();
              const t = On(e)
                , n = $n(e);
              Nn.set(e, n),
              await Ke(),
              I(n, t)
          }
  }
  )()
}
));
var jn = e.zj
, Hn = e.SD
, Un = e.V6
, Wn = e.jb
, Ln = e.yT
, An = e.M_
, Fn = e.hb
, Rn = e.vJ
, Dn = e.ip
, In = e.Nf
, Vn = e.Kr
, Bn = e.li
, zn = e.J0
, Jn = e.FH
, qn = e.v4;
export {jn as getConfig, Hn as getContext, Un as getElement, Wn as privateApis, Ln as splitTask, An as store, Fn as useCallback, Rn as useEffect, Dn as useInit, In as useLayoutEffect, Vn as useMemo, Bn as useRef, zn as useState, Jn as useWatch, qn as withScope};
