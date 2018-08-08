MathJax.Hub.Config({
  jax: ["input/TeX", "output/CommonHTML"],
  extensions: ["tex2jax.js", "MathMenu.js", "MathZoom.js"],
  tex2jax: {      // Preprocessor
    inlineMath: [['$','$']],
    displayMath: [['$$','$$']],
  },
  TeX: {          // Input
    extensions: ["AMSmath.js", "AMSsymbols.js",
                 "noErrors.js", "noUndefined.js"]
  },
  CommonHTML: {   // Output
    scale: 90,
  },
  messageStyle: "none",
  MathMenu: {
    showRenderer: false,
    showFontMenu: false,
    showLocale: false,
    showMathPlayer: false,
  }
});

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX;

  TEX.Definitions.Add({
    macros: {
      argmin: ['NamedOp','arg&thinsp;min'],
      argmax: ['NamedOp','arg&thinsp;max'],
      Adj: ['NamedOp'],
      rank: ['NamedOp'],
      tr: ['NamedOp'],
      proj: ['NamedOp'],
    }
  });

  TEX.Macro("Mb", "\\mathbf{#1}", 1);
  TEX.Macro("Mr", "\\mathrm{#1}", 1);
  TEX.Macro("Mc", "\\mathcal{#1}", 1);
  TEX.Macro("Mt", "\\mathtt{#1}", 1);
  TEX.Macro("Md", "\\mathbb{#1}", 1);
  TEX.Macro("Ms", "\\mathsf{#1}", 1);
  TEX.Macro("Bs", "\\boldsymbol{#1}", 1);
  TEX.Macro("RR", "\\mathbb{R}");
  TEX.Macro("ZZ", "\\mathbb{Z}");
  TEX.Macro("NN", "\\mathbb{N}");
  TEX.Macro("QQ", "\\mathbb{Q}");
  TEX.Macro("CC", "\\mathbb{C}");
  TEX.Macro("FF", "\\mathbb{F}");
  TEX.Macro("II", "\\mathbb{I}");
  TEX.Macro("norm", "\\left\\| #1\\right\\|", 1);
  TEX.Macro("set", "\\left\\{ #1 \\right\\}", 1);
  TEX.Macro("abs", "\\left| #1\\right|", 1);
  TEX.Macro("card", "\\left| #1\\right|", 1);
  TEX.Macro("floor", "\\left\\lfloor #1 \\right\\rfloor", 1);
  TEX.Macro("ceil", "\\left\\lceil #1 \\right\\rceil", 1);
  TEX.Macro("ang", "\\left\\langle #1 \\right\\rangle", 1);
  TEX.Macro("moom", "\\left\\langle #1 \\right\\rangle", 1);
  TEX.Macro("crab", "\\left[ #1 \\right]", 1);
  TEX.Macro("crow", "\\left\\{ #1 \\right\\}", 1);
  TEX.Macro("nail", "\\left( #1 \\right)", 1);
  TEX.Macro("prob", "P_{#1}\\left( #2 \\right)", 2, "");
  TEX.Macro("probb", "P_{#1}( #2 )", 2, "");
  TEX.Macro("ex", "\\operatorname{E}_{#1}\\left[ #2 \\right]", 2, "");
  TEX.Macro("exx", "\\operatorname{E}_{#1}[ #2 ]", 2, "");
  TEX.Macro("var", "\\operatorname{Var}_{#1}\\left[ #2 \\right]", 2, "");
  TEX.Macro("varr", "\\operatorname{Var}_{#1}[ #2 ]", 2, "");
  TEX.Macro("cov", "\\operatorname{Cov}_{#1}\\left[ #2 \\right]", 2, "");
  TEX.Macro("covv", "\\operatorname{Cov}_{#1}[ #2 ]", 2, "");
  TEX.Macro("choose", "{\\binom{#1}{#2}}", 2);
  TEX.Macro("matx", "\\crab{\\,\\begin{matrix}#1\\end{matrix}\\,}", 1);
  TEX.Macro("trps", "^\\mathrm{T}");
  TEX.Macro("amor", "\\widehat{#1}", 1);
  TEX.Macro("cases", "\\left\\{ \\begin{array}{ll}#1\\end{array}\\right.", 1);
  TEX.Macro("cif", "\\mbox{if $#1$}", 1);
  TEX.Macro("cwhen", "\\mbox{when $#1$}", 1);
  TEX.Macro("cotherw", "\\mbox{otherwise}");
  TEX.Macro("Re", "\\operatorname{Re}");
  TEX.Macro("Im", "\\operatorname{Im}");
  
  TEX.Macro("i", "^{(i)}");
  TEX.Macro("j", "^{(j)}");
  TEX.Macro("k", "^{(k)}");
  TEX.Macro("t", "^{(t)}");
  TEX.Macro("imod", "\\!\\pmod{#1}", 1);
  TEX.Macro("baa", "\\overline");
  TEX.Macro("midd", "\\;\\middle|\\;");
  TEX.Macro("fracd", "\\frac{d#1}{d#2}", 2);
  TEX.Macro("fracp", "\\frac{\\partial#1}{\\partial#2}", 2);
  TEX.Macro("ci", "\\perp\\!\\!\\!\\perp");
});

MathJax.Ajax.loadComplete("[MathJax]/config/local.js");
