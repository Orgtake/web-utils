const webutilsbytes = {
  kB(x) {
    return x*10**3;
  },
  mB(x) {
    return x*10**6;
  },
  gB(x) {
    return x*10**9;
  },
  tB(x) {
    return x*10**12;
  },
  pB(x) {
    return x*10**15;
  },
  eB(x) {
    return x*10**18;
  },
  zB(x) {
    return x*10**21;
  },
  yB(x) {
    return x*10**24;
  },
  rB(x) {
    return x*10**27;
  },
  qB(x) {
    return x*10**30;
  },
  B(k, m, g, t, p, e, z, y, r, q) {
    return [
      k*10**3,
      m*10**6,
      g*10**9,
      t*10**12,
      p*10**15,
      e*10**18,
      z*10**21,
      y*10**24,
      r*10**27,
      q*10**30
    ];
  }
}
