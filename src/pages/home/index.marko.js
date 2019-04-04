// Compiled using marko@4.16.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "$/src\\pages\\home\\index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"zxx\"><head><title>Photo Gallery HTML Template</title><meta charset=\"UTF-8\"><meta name=\"description\" content=\"Photo Gallery HTML Template\"><meta name=\"keywords\" content=\"endGam,gGaming, magazine, html\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href=\"img/favicon.ico\" rel=\"shortcut icon\"><link href=\"https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"css/owl.carousel.min.css\"><link rel=\"stylesheet\" href=\"css/animate.css\"><link rel=\"stylesheet\" href=\"css/style.css\"><!--[if lt IE 9]>\r\n\t\t  <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\r\n\t  <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\r\n\t<![endif]--></head><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"preloder\"><div class=\"loader\"></div></div><div class=\"spacial-controls\"><div class=\"search-switch\"><img src=\"img/search-icon.png\" alt=\"\"></div><div class=\"nav-switch-warp\"><div class=\"nav-switch\"><div class=\"ns-bar\"></div></div></div></div><div class=\"main-warp\"><header class=\"header-section\"><div class=\"header-close\"><i class=\"fa fa-times\"></i></div><div class=\"header-warp\"><a href=\"\" class=\"site-logo\"><img src=\"./img/logo.png\" alt=\"\"></a><img src=\"img/menu-icon.png\" alt=\"\" class=\"menu-icon\"><ul class=\"main-menu\"><li class=\"active\"><a href=\"./home.html\">Home</a></li><li><a href=\"./gallery.html\">Gallery</a></li><li><a href=\"./gallery-single.html\">Single gallery</a></li><li><a href=\"./blog.html\">Blog</a></li><li><a href=\"./contact.html\">Contact</a></li></ul><div class=\"social-links-warp\"><div class=\"social-links\"><a href=\"\"><i class=\"fa fa-behance\"></i></a><a href=\"\"><i class=\"fa fa-dribbble\"></i></a><a href=\"\"><i class=\"fa fa-twitter\"></i></a><a href=\"\"><i class=\"fa fa-facebook\"></i></a><a href=\"\"><i class=\"fa fa-pinterest\"></i></a></div><div class=\"social-text\">Find us on</div></div></div><div class=\"copyright\">Colorlib 2018 @ All rights reserved</div></header><div class=\"page-section home-page\"><div class=\"hero-slider owl-carousel\"><div class=\"slider-item d-flex align-items-center set-bg\" data-setbg=\"img/slider-bg-1.jpg\" data-hash=\"slide-1\"><div class=\"si-text-box\"><span>Photography</span><h2>Project No. 1</h2><p>Ut pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor nunc non nulla euismod consequat. Pellentesque non mattis nulla. Fusce quis tempor risus, non elemen tum dui. Curabitur et mattis ex, a ultrices.</p><a href=\"\" class=\"site-btn\">Read More</a></div><div class=\"next-slide-show set-bg\" data-setbg=\"img/slider-bg-2.jpg\"><a href=\"#slide-2\" class=\"ns-btn\">Next</a></div></div><div class=\"slider-item d-flex align-items-center set-bg\" data-setbg=\"img/slider-bg-2.jpg\" data-hash=\"slide-2\"><div class=\"si-text-box\"><span>Photography</span><h2>Project No. 2</h2><p>Ut pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor nunc non nulla euismod consequat. Pellentesque non mattis nulla. Fusce quis tempor risus, non elemen tum dui. Curabitur et mattis ex, a ultrices.</p><a href=\"\" class=\"site-btn\">Read More</a></div><div class=\"next-slide-show set-bg\" data-setbg=\"img/slider-bg-1.jpg\"><a href=\"#slide-1\" class=\"ns-btn\">Next</a></div></div></div><div id=\"snh-1\"></div></div></div><div class=\"search-model\"><div class=\"h-100 d-flex align-items-center justify-content-center\"><div class=\"search-close-switch\">x</div><form class=\"search-moderl-form\"><input type=\"text\" id=\"search-input\" placeholder=\"Search here.....\"></form></div></div><script src=\"js/jquery-3.2.1.min.js\"></script><script src=\"js/bootstrap.min.js\"></script><script src=\"js/owl.carousel.min.js\"></script><script src=\"js/jquery.nicescroll.min.js\"></script><script src=\"js/isotope.pkgd.min.js\"></script><script src=\"js/imagesloaded.pkgd.min.js\"></script><script src=\"js/circle-progress.min.js\"></script><script src=\"js/main.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "88");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "$/src\\pages\\home\\index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
