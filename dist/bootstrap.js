System.register(["aurelia-router", "./boom"], function (_export) {
  "use strict";

  var AppRouter, Boom, _classCallCheck, Bootstrap;
  return {
    setters: [function (_aureliaRouter) {
      AppRouter = _aureliaRouter.AppRouter;
    }, function (_boom) {
      Boom = _boom.Boom;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Bootstrap = _export("Bootstrap", function Bootstrap() {
        _classCallCheck(this, Bootstrap);

        var container = document.body.aurelia.container;


        var router = container.get(Router);
        router.addRoute({ route: "boom", moduleId: "boom", title: "Boom!!!" });

        router.navigate("boom");
      });
    }
  };
});