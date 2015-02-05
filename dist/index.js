System.register(["./bootstrap", "./boom"], function (_export) {
  "use strict";

  return {
    setters: [function (_bootstrap) {
      _export("Bootstrap", _bootstrap.Bootstrap);
    }, function (_boom) {
      _export("Boom", _boom.Boom);
    }],
    execute: function () {}
  };
});