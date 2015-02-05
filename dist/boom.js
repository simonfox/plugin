System.register([], function (_export) {
  "use strict";

  var _classCallCheck, Boom;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Boom = _export("Boom", function Boom() {
        _classCallCheck(this, Boom);

        this.heading = "This module was loaded dynamically!";
      });
    }
  };
});