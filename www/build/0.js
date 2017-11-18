webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyselfPageModule", function() { return MyselfPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myself__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyselfPageModule = (function () {
    function MyselfPageModule() {
    }
    return MyselfPageModule;
}());
MyselfPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__myself__["a" /* MyselfPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myself__["a" /* MyselfPage */]),
        ],
    })
], MyselfPageModule);

//# sourceMappingURL=myself.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.outerSlideToNext = function () {
        this.outerSlides.slideNext();
    };
    LoginPage.prototype.outerSlideToPrev = function () {
        this.outerSlides.slidePrev();
    };
    LoginPage.prototype.innerSlideToNext = function () {
        this.innerSlides.slideNext();
    };
    LoginPage.prototype.innerSlideToPrev = function () {
        this.innerSlides.slidePrev();
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("outerSlides"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], LoginPage.prototype, "outerSlides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("innerSlides"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], LoginPage.prototype, "innerSlides", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar transparent>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content [ngStyle]="{\'background-image\': \'url(assets/img/login_background.jpg)\'}">\n\n  <ion-slides direction="vertical" #outerSlides>\n\n    <ion-slide>\n      <ion-slides #innerSlides>\n        <ion-slide>\n          <div class="slide-inner">\n            <ion-item>\n              <ion-label floating color="light">电子邮件</ion-label>\n              <ion-input type="email" clearInput="true"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating color="light">密码</ion-label>\n              <ion-input type="password" clearInput="true"></ion-input>\n            </ion-item>\n\n            <button ion-button block round color="light">登录</button>\n\n            <button ion-button clear color="light" class="forget-button" (click)="innerSlideToNext()">忘记密码？</button>\n          </div>\n\n          <button ion-button clear color="light" class="bottom-button" (click)="outerSlideToNext()">去注册&nbsp;&nbsp;\n            <ion-icon name="arrow-down"></ion-icon>\n          </button>\n        </ion-slide>\n\n        <ion-slide>\n          <div class="slide-inner">\n            <ion-item>\n              <ion-label floating color="light">电子邮件</ion-label>\n              <ion-input type="email" clearInput="true"></ion-input>\n            </ion-item>\n\n            <button ion-button block round color="light">重置密码</button>\n\n            <button ion-button clear color="light" class="go-back-button" (click)="innerSlideToPrev()">\n              <ion-icon name="arrow-back"></ion-icon>\n              &nbsp;&nbsp;返回\n            </button>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-slide>\n\n    <ion-slide>\n      <button ion-button clear color="light" class="top-button" (click)="outerSlideToPrev()">去登录&nbsp;&nbsp;\n        <ion-icon name="arrow-up"></ion-icon>\n      </button>\n\n      <div class="slide-inner">\n        <ion-item>\n          <ion-label floating color="light">电子邮件</ion-label>\n          <ion-input type="email" clearInput="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating color="light">密码</ion-label>\n          <ion-input type="password" clearInput="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating color="light">确认密码</ion-label>\n          <ion-input type="password" clearInput="true"></ion-input>\n        </ion-item>\n\n        <button ion-button block round color="light">注册</button>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyselfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyselfPage = (function () {
    function MyselfPage(navCtrl, navParams, userDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userDataProvider = userDataProvider;
    }
    MyselfPage.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MyselfPage.prototype.openProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    return MyselfPage;
}());
MyselfPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-myself',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/myself/myself.html"*/'<!--\n  Generated template for the MyselfPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item tappable *ngIf="!userDataProvider.hasLoggedIn" (click)="openLoginPage()">\n      <ion-thumbnail item-start>\n        <img src="assets/avatar/avatar.png">\n      </ion-thumbnail>\n      <h2>登录 / 注册</h2>\n      <p>你还没有登录或注册呢</p>\n      <button ion-button clear icon-only item-end>\n        <ion-icon name="arrow-forward" color="dark"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item tappable *ngIf="userDataProvider.hasLoggedIn" (click)="openProfilePage()">\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/myself/myself.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */]])
], MyselfPage);

//# sourceMappingURL=myself.js.map

/***/ })

});
//# sourceMappingURL=0.js.map