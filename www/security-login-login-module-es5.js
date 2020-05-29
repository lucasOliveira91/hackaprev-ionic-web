function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/security/login/login.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/login/login.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecurityLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <img src=\"assets/image/logo.png\" alt=\"logo\">\n\n  <br>\n  <br>\n  <br>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" novalidate>\n\n    <input type=\"text\" placeholder=\"CPF\" formControlName=\"cpf\" maxLength=\"11\">\n    <input type=\"password\" placeholder=\"Senha\" formControlName=\"password\">\n\n    <button ion-buttom class=\"login\" type=\"submit\" [disabled]=\"loginForm.invalid\">Acessar</button>\n  </form>\n</ion-content>\n\n<!-- <ion-content color=\"primary\" padding>\n  <form [formGroup]=\"loginForm\"  (ngSubmit)=\"login()\" novalidate>\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Login</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"cpf\" type=\"text\" placeholder=\"CPF\" formControlName=\"cpf\" maxLength=\"11\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Senha\" formControlName=\"password\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"loginForm.invalid\" expand=\"block\">Login</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/security/login/login-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/security/login/login-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppSecurityLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/security/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/security/login/login.module.ts":
  /*!************************************************!*\
    !*** ./src/app/security/login/login.module.ts ***!
    \************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppSecurityLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/security/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/security/login/login.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }, {
      path: ':to',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/security/login/login.page.scss":
  /*!************************************************!*\
    !*** ./src/app/security/login/login.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecurityLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url('login-background.jpg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\nimg {\n  margin-top: 30px;\n  width: 240px;\n}\n\nbutton {\n  box-shadow: 0 10px 30px rgba(95, 186, 233, 0.4);\n  margin: 0px;\n}\n\n.login {\n  margin-top: 10px;\n  text-align: center;\n  border: none;\n  padding: 15px 80px;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  transition: all 0.3s ease-in-out;\n  width: 85%;\n  height: 35px;\n  color: #ffffff;\n  background-color: blue;\n}\n\ninput[type=text], input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #535353;\n  padding: 15px 32px;\n  text-decoration: none;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.3s ease-in-out;\n  height: 35px;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n\nion-button {\n  --background: #062f77;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdXJpdHkvbG9naW4vQzpcXFVzZXJzXFxsdWNhc1xcRG9jdW1lbnRzXFxQcm9qZXRvc1xcaGFja2FwcmV2LWZyb25lbmQvc3JjXFxhcHBcXHNlY3VyaXR5XFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zZWN1cml0eS9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREdJO0VBRUksK0NBQUE7RUFDQSxXQUFBO0FDQVI7O0FER0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNBUjs7QURHSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FSOztBRFFBO0VBQ0kscUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2lue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9dGV4dF0gLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzUzNTM1MztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogIGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vLyBpb24taXRlbXtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuLy8gICAgIC0tY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MmY3NztcclxufVxyXG5cclxuLy8gYXtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMjQwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg5NSwgMTg2LCAyMzMsIDAuNCk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubG9naW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCA4MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNTM1MzUzO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA2MmY3Nztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/security/login/login.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/security/login/login.page.ts ***!
    \**********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppSecurityLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/security/auth.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(activatedRoute, fb, menu, authService, navCtrl) {
        _classCallCheck(this, LoginPage);

        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
          this.loginForm = this.fb.group({
            cpf: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(false);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.menu.enable(true);
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          if (this.loginForm.valid) {
            // this.loading.showLoader();
            this.authService.authenticate(this.loginForm.value.cpf, this.loginForm.value.password).subscribe(function (response) {
              _this.authService.successfulLogin(response.headers.get('Authorization')); // this.loading.hideLoader()


              _this.navCtrl.navigateRoot('/');
            });
          }
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/security/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/security/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=security-login-login-module-es5.js.map