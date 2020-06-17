function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-survey-survey-module"], {
  /***/
  "./src/app/components/survey/form/form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/survey/form/form.component.ts ***!
    \**********************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppComponentsSurveyFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormComponent_div_4_input_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 3);
      }

      if (rf & 2) {
        var f_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", f_r1.placeholder);
      }
    }

    function FormComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_4_input_1_Template, 1, 1, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r1.type === "Input");
      }
    }

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent() {
        _classCallCheck(this, FormComponent);
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormComponent;
    }();

    FormComponent.ɵfac = function FormComponent_Factory(t) {
      return new (t || FormComponent)();
    };

    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormComponent,
      selectors: [["app-form"]],
      inputs: {
        info: "info"
      },
      decls: 7,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], [1, "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded"], ["class", "bg-white border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal", "type", "text", 3, "placeholder", 4, "ngIf"], ["type", "text", 1, "bg-white", "border", "border-gray-300", "rounded-lg", "py-2", "px-4", "appearance-none", "leading-normal", 3, "placeholder"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormComponent_div_4_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.nodeTemplateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.submit.text);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form',
          templateUrl: './form.component.html',
          styleUrls: ['./form.component.scss']
        }]
      }], function () {
        return [];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/interstitial/interstitial.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/survey/interstitial/interstitial.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InterstitialComponent */

  /***/
  function srcAppComponentsSurveyInterstitialInterstitialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterstitialComponent", function () {
      return InterstitialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _state_survey_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state/survey.store */
    "./src/app/components/survey/state/survey.store.ts");

    var InterstitialComponent = /*#__PURE__*/function () {
      function InterstitialComponent(router, surveyStore) {
        _classCallCheck(this, InterstitialComponent);

        this.router = router;
        this.surveyStore = surveyStore;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(InterstitialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var that = this;
          this.forwardToId = '';
          this.forwardToId = this.info.forwardToNode;
          this.surveyStore.updateActiveQ(this.forwardToId);
          setTimeout(function () {
            // console.log(this.pastIds);
            if (that.router.url === "/survey/quiz1") {
              that.router.navigate(['survey/quiz2']);
            } else {
              that.router.navigate(['survey/quiz1']);
            }
          }, 2000);
        }
      }]);

      return InterstitialComponent;
    }();

    InterstitialComponent.ɵfac = function InterstitialComponent_Factory(t) {
      return new (t || InterstitialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_store__WEBPACK_IMPORTED_MODULE_2__["SurveyStore"]));
    };

    InterstitialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InterstitialComponent,
      selectors: [["app-interstitial"]],
      inputs: {
        info: "info"
      },
      outputs: {
        next: "next"
      },
      decls: 4,
      vars: 1,
      template: function InterstitialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "interstitial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.text);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L2ludGVyc3RpdGlhbC9pbnRlcnN0aXRpYWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterstitialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-interstitial',
          templateUrl: './interstitial.component.html',
          styleUrls: ['./interstitial.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _state_survey_store__WEBPACK_IMPORTED_MODULE_2__["SurveyStore"]
        }];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/logic/logic.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/survey/logic/logic.component.ts ***!
    \************************************************************/

  /*! exports provided: LogicComponent */

  /***/
  function srcAppComponentsSurveyLogicLogicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogicComponent", function () {
      return LogicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _state_survey_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state/survey.store */
    "./src/app/components/survey/state/survey.store.ts");

    var LogicComponent = /*#__PURE__*/function () {
      function LogicComponent(router, surveyStore) {
        _classCallCheck(this, LogicComponent);

        this.router = router;
        this.surveyStore = surveyStore;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LogicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var that = this;
          this.forwardToId = '';
          this.forwardToId = this.info.forwardToNodeDefault;
          this.surveyStore.updateActiveQ(this.forwardToId);
          setTimeout(function () {
            // console.log(this.pastIds);
            if (that.router.url === "/survey/quiz1") {
              that.router.navigate(['survey/quiz2']);
            } else {
              that.router.navigate(['survey/quiz1']);
            }
          }, 0);
        }
      }]);

      return LogicComponent;
    }();

    LogicComponent.ɵfac = function LogicComponent_Factory(t) {
      return new (t || LogicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_store__WEBPACK_IMPORTED_MODULE_2__["SurveyStore"]));
    };

    LogicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogicComponent,
      selectors: [["app-logic"]],
      inputs: {
        info: "info"
      },
      outputs: {
        next: "next"
      },
      decls: 4,
      vars: 1,
      template: function LogicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.rules[0].attribute);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L2xvZ2ljL2xvZ2ljLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logic',
          templateUrl: './logic.component.html',
          styleUrls: ['./logic.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _state_survey_store__WEBPACK_IMPORTED_MODULE_2__["SurveyStore"]
        }];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/multiple-choice/multiple-choice.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/survey/multiple-choice/multiple-choice.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MultipleChoiceComponent */

  /***/
  function srcAppComponentsSurveyMultipleChoiceMultipleChoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultipleChoiceComponent", function () {
      return MultipleChoiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MultipleChoiceComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.text);
      }
    }

    var MultipleChoiceComponent = /*#__PURE__*/function () {
      function MultipleChoiceComponent() {
        _classCallCheck(this, MultipleChoiceComponent);
      }

      _createClass(MultipleChoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MultipleChoiceComponent;
    }();

    MultipleChoiceComponent.ɵfac = function MultipleChoiceComponent_Factory(t) {
      return new (t || MultipleChoiceComponent)();
    };

    MultipleChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultipleChoiceComponent,
      selectors: [["app-multiple-choice"]],
      inputs: {
        info: "info"
      },
      decls: 5,
      vars: 2,
      consts: [[4, "ngFor", "ngForOf"], [1, "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded"]],
      template: function MultipleChoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "multiple-choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultipleChoiceComponent_div_4_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.answers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L211bHRpcGxlLWNob2ljZS9tdWx0aXBsZS1jaG9pY2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultipleChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-multiple-choice',
          templateUrl: './multiple-choice.component.html',
          styleUrls: ['./multiple-choice.component.scss']
        }]
      }], function () {
        return [];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/question/question.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/survey/question/question.component.ts ***!
    \******************************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppComponentsSurveyQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function QuestionComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.text);
      }
    }

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent() {
        _classCallCheck(this, QuestionComponent);
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
      return new (t || QuestionComponent)();
    };

    QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionComponent,
      selectors: [["app-question"]],
      inputs: {
        info: "info"
      },
      decls: 5,
      vars: 2,
      consts: [[4, "ngFor", "ngForOf"], [1, "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded"]],
      template: function QuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionComponent_div_4_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.answers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-question',
          templateUrl: './question.component.html',
          styleUrls: ['./question.component.scss']
        }]
      }], function () {
        return [];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/quiz/quiz.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/survey/quiz/quiz.component.ts ***!
    \**********************************************************/

  /*! exports provided: QuizComponent */

  /***/
  function srcAppComponentsSurveyQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
    /* harmony import */


    var _state_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state/survey.service */
    "./src/app/components/survey/state/survey.service.ts");
    /* harmony import */


    var _state_survey_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state/survey.query */
    "./src/app/components/survey/state/survey.query.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../form/form.component */
    "./src/app/components/survey/form/form.component.ts");
    /* harmony import */


    var _logic_logic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../logic/logic.component */
    "./src/app/components/survey/logic/logic.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../question/question.component */
    "./src/app/components/survey/question/question.component.ts");
    /* harmony import */


    var _interstitial_interstitial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../interstitial/interstitial.component */
    "./src/app/components/survey/interstitial/interstitial.component.ts");
    /* harmony import */


    var _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../multiple-choice/multiple-choice.component */
    "./src/app/components/survey/multiple-choice/multiple-choice.component.ts");

    function QuizComponent_article_3_app_form_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form", 2);
      }

      if (rf & 2) {
        var nodeObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", nodeObj_r1);
      }
    }

    function QuizComponent_article_3_app_logic_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logic", 2);
      }

      if (rf & 2) {
        var nodeObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", nodeObj_r1);
      }
    }

    function QuizComponent_article_3_app_question_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question", 2);
      }

      if (rf & 2) {
        var nodeObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", nodeObj_r1);
      }
    }

    function QuizComponent_article_3_app_interstitial_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-interstitial", 2);
      }

      if (rf & 2) {
        var nodeObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", nodeObj_r1);
      }
    }

    function QuizComponent_article_3_app_multiple_choice_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multiple-choice", 2);
      }

      if (rf & 2) {
        var nodeObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", nodeObj_r1);
      }
    }

    function QuizComponent_article_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_article_3_app_form_1_Template, 1, 1, "app-form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuizComponent_article_3_app_logic_2_Template, 1, 1, "app-logic", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizComponent_article_3_app_question_3_Template, 1, 1, "app-question", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuizComponent_article_3_app_interstitial_4_Template, 1, 1, "app-interstitial", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_article_3_app_multiple_choice_5_Template, 1, 1, "app-multiple-choice", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nodeObj_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded && nodeObj_r1.nodeType === "Form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded && nodeObj_r1.nodeType === "Logic");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded && nodeObj_r1.nodeType === "Question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded && nodeObj_r1.nodeType === "Interstitial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loaded && nodeObj_r1.nodeType === "MultipleChoice");
      }
    }

    var QuizComponent = /*#__PURE__*/function () {
      function QuizComponent( // private router: ActivatedRoute,
      surveyService, surveyQuery) {
        _classCallCheck(this, QuizComponent);

        this.surveyService = surveyService;
        this.surveyQuery = surveyQuery;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.loaded = false;
      }

      _createClass(QuizComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.nodes$ = this.surveyQuery.selectAll();
          this.selectLoading$ = this.surveyQuery.selectLoading();
          this.subscriptions.add(this.selectLoading$.subscribe(function (res) {
            _this.goTime(res);
          }));
        }
      }, {
        key: "goTime",
        value: function goTime(res) {
          var _this2 = this;

          if (!res) {
            var activeId = this.surveyQuery.getActive();
            this.nodes$ = this.surveyQuery.selectEntity(activeId.id, 'nodes');
            this.subscriptions.add(this.nodes$.subscribe(function (res) {
              _this2.nodes = res;
            }));
            this.activeQ$ = this.surveyQuery.selectActiveQ$;
            this.subscriptions.add(this.activeQ$.pipe(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["filterNil"]).subscribe(function (res) {
              _this2.activeQ = res;
              console.log(_this2.activeQ);
            }));
            this.node = this.surveyQuery.selectEntity(activeId.id, 'nodes').pipe(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["arrayFind"])(this.activeQ));
            console.log(this.activeQ);
            this.loaded = true;
          }
        }
      }]);

      return QuizComponent;
    }();

    QuizComponent.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_query__WEBPACK_IMPORTED_MODULE_4__["SurveyQuery"]));
    };

    QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf"], [3, "info", 4, "ngIf"], [3, "info"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizComponent_article_3_Template, 6, 5, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.node));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _logic_logic_component__WEBPACK_IMPORTED_MODULE_7__["LogicComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_8__["QuestionComponent"], _interstitial_interstitial_component__WEBPACK_IMPORTED_MODULE_9__["InterstitialComponent"], _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_10__["MultipleChoiceComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXQvZGV2L2dpdGh1Yi9uZy1mb3JtLXdpemFyZC9zcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvcXVpei9xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvcXVpei9xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quiz',
          templateUrl: './quiz.component.html',
          styleUrls: ['./quiz.component.scss']
        }]
      }], function () {
        return [{
          type: _state_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]
        }, {
          type: _state_survey_query__WEBPACK_IMPORTED_MODULE_4__["SurveyQuery"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/router.animations.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/survey/router.animations.ts ***!
    \********************************************************/

  /*! exports provided: routerTransition */

  /***/
  function srcAppComponentsSurveyRouterAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routerTransition", function () {
      return routerTransition;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
    /* 1 */
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }),
    /* 2 */
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }))], {
      optional: true
    })])])]);
    /***/
  },

  /***/
  "./src/app/components/survey/state/survey.query.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/survey/state/survey.query.ts ***!
    \*********************************************************/

  /*! exports provided: SurveyQuery */

  /***/
  function srcAppComponentsSurveyStateSurveyQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyQuery", function () {
      return SurveyQuery;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
    /* harmony import */


    var _survey_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./survey.store */
    "./src/app/components/survey/state/survey.store.ts");

    var SurveyQuery = /*#__PURE__*/function (_datorama_akita__WEBP) {
      _inherits(SurveyQuery, _datorama_akita__WEBP);

      var _super = _createSuper(SurveyQuery);

      function SurveyQuery(store) {
        var _this3;

        _classCallCheck(this, SurveyQuery);

        _this3 = _super.call(this, store);
        _this3.store = store; // ui: EntityUIQuery<SuerveyUIState>;

        _this3.selectActiveQ$ = _this3.select(function (state) {
          return state.ui.activeQ;
        }); // this.createUIQuery();

        return _this3;
      }

      return SurveyQuery;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]);

    SurveyQuery.ɵfac = function SurveyQuery_Factory(t) {
      return new (t || SurveyQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_survey_store__WEBPACK_IMPORTED_MODULE_2__["SurveyStore"]));
    };

    SurveyQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SurveyQuery,
      factory: SurveyQuery.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _survey_store__WEBPACK_IMPORTED_MODULE_2__["SurveyStore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/state/survey.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/survey/state/survey.service.ts ***!
    \***********************************************************/

  /*! exports provided: SurveyService */

  /***/
  function srcAppComponentsSurveyStateSurveyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
      return SurveyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _survey_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./survey.store */
    "./src/app/components/survey/state/survey.store.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SurveyService = /*#__PURE__*/function () {
      function SurveyService(surveyStore, http) {
        _classCallCheck(this, SurveyService);

        this.surveyStore = surveyStore;
        this.http = http;
      }

      _createClass(SurveyService, [{
        key: "get",
        value: function get() {
          var _this4 = this;

          return this.http.get('http://localhost:3000/surveys').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (entities) {
            return _this4.surveyStore.set(entities);
          }));
        } // get2() {
        //   return this.http.get<Survey[]>('http://localhost:3000/surveys').pipe(
        //     tap(entities => {this.surveyStore.set(entities);})
        //   );
        // }

      }, {
        key: "getSurveys",
        value: function getSurveys() {
          var _this5 = this;

          return this.http.get('http://localhost:3000/surveys').subscribe(function (entities) {
            _this5.surveyStore.set(entities, {
              activeId: entities[0].id
            });
          });
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.get('http://localhost:3000/surveys').toPromise();

                  case 2:
                    res = _context.sent;
                    this.surveyStore.set(res);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return SurveyService;
    }();

    SurveyService.ɵfac = function SurveyService_Factory(t) {
      return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_survey_store__WEBPACK_IMPORTED_MODULE_3__["SurveyStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    SurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SurveyService,
      factory: SurveyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SurveyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _survey_store__WEBPACK_IMPORTED_MODULE_3__["SurveyStore"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/state/survey.store.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/survey/state/survey.store.ts ***!
    \*********************************************************/

  /*! exports provided: SurveyStore */

  /***/
  function srcAppComponentsSurveyStateSurveyStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyStore", function () {
      return SurveyStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js"); // export interface SuerveyUIState extends EntityState<SuerveyUI> {}


    var initialState = {
      ui: {
        activeQ: ''
      }
    };

    var SurveyStore = /*#__PURE__*/function (_datorama_akita__WEBP2) {
      _inherits(SurveyStore, _datorama_akita__WEBP2);

      var _super2 = _createSuper(SurveyStore);

      // ui: EntityUIStore<SuerveyUIState>;
      function SurveyStore() {
        _classCallCheck(this, SurveyStore);

        return _super2.call(this, initialState);
      }

      _createClass(SurveyStore, [{
        key: "updateActiveQ",
        value: function updateActiveQ(nid) {
          this.update({
            ui: {
              activeQ: nid
            }
          });
        }
      }]);

      return SurveyStore;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]);

    SurveyStore.ɵfac = function SurveyStore_Factory(t) {
      return new (t || SurveyStore)();
    };

    SurveyStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SurveyStore,
      factory: SurveyStore.ɵfac,
      providedIn: 'root'
    });
    SurveyStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
      name: 'survey'
    })], SurveyStore);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SurveyStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/survey-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/survey/survey-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SurveyRoutingModule */

  /***/
  function srcAppComponentsSurveySurveyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyRoutingModule", function () {
      return SurveyRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./quiz/quiz.component */
    "./src/app/components/survey/quiz/quiz.component.ts");
    /* harmony import */


    var _survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./survey.component */
    "./src/app/components/survey/survey.component.ts");

    var routes = [{
      path: '',
      component: _survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"],
      data: {
        state: 'survey'
      },
      children: [{
        path: 'quiz1',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizComponent"]
      }, {
        path: 'quiz2',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizComponent"]
      }]
    }];

    var SurveyRoutingModule = function SurveyRoutingModule() {
      _classCallCheck(this, SurveyRoutingModule);
    };

    SurveyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SurveyRoutingModule
    });
    SurveyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SurveyRoutingModule_Factory(t) {
        return new (t || SurveyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SurveyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/survey.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/survey/survey.component.ts ***!
    \*******************************************************/

  /*! exports provided: SurveyComponent */

  /***/
  function srcAppComponentsSurveySurveyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyComponent", function () {
      return SurveyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./router.animations */
    "./src/app/components/survey/router.animations.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _state_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./state/survey.service */
    "./src/app/components/survey/state/survey.service.ts");
    /* harmony import */


    var _state_survey_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./state/survey.store */
    "./src/app/components/survey/state/survey.store.ts");
    /* harmony import */


    var _state_survey_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./state/survey.query */
    "./src/app/components/survey/state/survey.query.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SurveyComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurveyComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.nodeNext(null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SurveyComponent = /*#__PURE__*/function () {
      // surveys = this.surveyQuery.selectFirst().subscribe(obj => obj);
      function SurveyComponent(router, // private route:ActivatedRoute,
      surveyService, surveyStore, surveyQuery) {
        _classCallCheck(this, SurveyComponent);

        this.router = router;
        this.surveyService = surveyService;
        this.surveyStore = surveyStore;
        this.surveyQuery = surveyQuery;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.loaded = false;
        this.pastIds = [];
      }

      _createClass(SurveyComponent, [{
        key: "getState",
        value: function getState() {
          return this.router.url === "/survey/quiz1" ? 'quiz1' : 'quiz2';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.surveyService.getSurveys();
          this.selectLoading$ = this.surveyQuery.selectLoading();
          this.selectLoading$.subscribe(function (res) {
            if (!res) {
              _this6.firstSurvey = _this6.surveyQuery.selectFirst(); //.pipe(switchMap(value => value !== undefined ? of(value) : EMPTY))

              _this6.firstSurvey.subscribe(function (obj) {
                _this6.activeSurveyId = obj.id;

                _this6.surveyStore.setActive(obj.id);

                _this6.nodes$ = _this6.surveyQuery.selectEntity(obj.id, 'nodes');

                _this6.nodes$.subscribe(function (res) {
                  _this6.nodes = res;
                }); // this.nodes = this.surveyQuery.selectEntity(obj.id, ({ nodes }) => nodes);


                _this6.nodes$.pipe(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["arrayFind"])(obj.nodeRootId)).subscribe(function (obj) {
                  _this6.node = obj;
                });

                _this6.surveyStore.updateActiveQ(obj.nodeRootId);
              });

              _this6.loaded = true;
            }
          }); // this.nodes = this.surveyQuery.selectFirst();
        }
      }, {
        key: "nodeNext",
        value: function nodeNext(ev) {
          var _this7 = this;

          this.forwardToId = '';

          if (this.node.nodeType === "Form") {
            this.forwardToId = this.node.submit.forwardToNode;
            this.pastIds.push(this.node.id);
          }

          if (this.node.nodeType === "Interstitial") {
            this.forwardToId = this.node.forwardToNode;
          }

          if (this.node.nodeType === "Question") {
            this.forwardToId = this.node.answers[0].forwardToNode;
            this.pastIds.push(this.node.id);
          }

          if (this.node.nodeType === "MultipleChoice") {
            this.forwardToId = this.node.submit.forwardToNode;
            this.pastIds.push(this.node.id);
          }

          if (this.node.nodeType === "Logic") {
            this.forwardToId = this.node.forwardToNodeDefault;
          }

          var nextNode = this.nodes.find(function (node) {
            return node.id === _this7.forwardToId;
          });

          if (nextNode && nextNode.nodeType) {
            // this.surveyStore.update(this.activeSurveyId, ({ nodes }) => ({
            //   nodes: arrayUpdate(nodes, this.forwardToId, { active: true })
            // }));
            this.surveyStore.updateActiveQ(this.forwardToId);
            this.node = nextNode; // console.log(this.pastIds);

            if (this.router.url === "/survey/quiz1") {
              this.router.navigate(['survey/quiz2']);
            } else {
              this.router.navigate(['survey/quiz1']);
            }
          } else {
            console.log(nextNode);
          }
        }
      }, {
        key: "nodePrev",
        value: function nodePrev() {
          var pastId = this.pastIds[this.pastIds.length - 1];
          this.surveyStore.updateActiveQ(pastId);

          if (this.router.url === "/survey/quiz1") {
            this.router.navigate(['survey/quiz2']);
          } else {
            this.router.navigate(['survey/quiz1']);
          }

          var prevNode = this.nodes.find(function (node) {
            return node.id === pastId;
          });

          if (prevNode && prevNode.nodeType) {
            this.node = prevNode;
            this.pastIds.pop();
          } else {
            console.log(prevNode);
          }
        }
      }]);

      return SurveyComponent;
    }();

    SurveyComponent.ɵfac = function SurveyComponent_Factory(t) {
      return new (t || SurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_store__WEBPACK_IMPORTED_MODULE_6__["SurveyStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_survey_query__WEBPACK_IMPORTED_MODULE_7__["SurveyQuery"]));
    };

    SurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SurveyComponent,
      selectors: [["app-survey"]],
      decls: 8,
      vars: 2,
      consts: [[1, "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", 3, "click"], ["class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", 3, "click", 4, "ngIf"]],
      template: function SurveyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "survey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurveyComponent_Template_button_click_4_listener() {
            return ctx.nodePrev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SurveyComponent_button_7_Template, 2, 0, "button", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", ctx.getState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXQvZGV2L2dpdGh1Yi9uZy1mb3JtLXdpemFyZC9zcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5L3N1cnZleS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXkvc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"],
      data: {
        animation: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-survey',
          templateUrl: './survey.component.html',
          styleUrls: ['./survey.component.scss'],
          animations: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _state_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"]
        }, {
          type: _state_survey_store__WEBPACK_IMPORTED_MODULE_6__["SurveyStore"]
        }, {
          type: _state_survey_query__WEBPACK_IMPORTED_MODULE_7__["SurveyQuery"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/survey/survey.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/survey/survey.module.ts ***!
    \****************************************************/

  /*! exports provided: SurveyModule */

  /***/
  function srcAppComponentsSurveySurveyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyModule", function () {
      return SurveyModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _survey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./survey.component */
    "./src/app/components/survey/survey.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/components/survey/form/form.component.ts");
    /* harmony import */


    var _logic_logic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./logic/logic.component */
    "./src/app/components/survey/logic/logic.component.ts");
    /* harmony import */


    var _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./multiple-choice/multiple-choice.component */
    "./src/app/components/survey/multiple-choice/multiple-choice.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/components/survey/question/question.component.ts");
    /* harmony import */


    var _interstitial_interstitial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./interstitial/interstitial.component */
    "./src/app/components/survey/interstitial/interstitial.component.ts");
    /* harmony import */


    var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./quiz/quiz.component */
    "./src/app/components/survey/quiz/quiz.component.ts");
    /* harmony import */


    var _survey_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./survey-routing.module */
    "./src/app/components/survey/survey-routing.module.ts");

    var SurveyModule = function SurveyModule() {
      _classCallCheck(this, SurveyModule);
    };

    SurveyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SurveyModule
    });
    SurveyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SurveyModule_Factory(t) {
        return new (t || SurveyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _survey_routing_module__WEBPACK_IMPORTED_MODULE_9__["SurveyRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SurveyModule, {
        declarations: [_survey_component__WEBPACK_IMPORTED_MODULE_2__["SurveyComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"], _logic_logic_component__WEBPACK_IMPORTED_MODULE_4__["LogicComponent"], _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_5__["MultipleChoiceComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"], _interstitial_interstitial_component__WEBPACK_IMPORTED_MODULE_7__["InterstitialComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _survey_routing_module__WEBPACK_IMPORTED_MODULE_9__["SurveyRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_survey_component__WEBPACK_IMPORTED_MODULE_2__["SurveyComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"], _logic_logic_component__WEBPACK_IMPORTED_MODULE_4__["LogicComponent"], _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_5__["MultipleChoiceComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"], _interstitial_interstitial_component__WEBPACK_IMPORTED_MODULE_7__["InterstitialComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _survey_routing_module__WEBPACK_IMPORTED_MODULE_9__["SurveyRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-survey-survey-module-es5.js.map