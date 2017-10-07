webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamPageModule", function() { return ExamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExamPageModule = (function () {
    function ExamPageModule() {
    }
    return ExamPageModule;
}());
ExamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__exam__["a" /* ExamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exam__["a" /* ExamPage */]),
        ],
    })
], ExamPageModule);

//# sourceMappingURL=exam.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
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
 * Generated class for the CatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogPage = (function () {
    function CatalogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.exam_year = this.navParams.get('exam_year');
    }
    return CatalogPage;
}());
CatalogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-catalog',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/catalog/catalog.html"*/'<!--\n  Generated template for the CatalogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{exam_year}}年真题</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light">01</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">02</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">03</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">04</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">05</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light">06</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">07</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">08</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">09</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">10</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light">11</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">12</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">13</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">14</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">15</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light">16</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">17</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">18</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">19</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">20</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light">21</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">22</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">23</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">24</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">25</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light">26</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">27</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">28</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">29</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light">30</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3>\n        <button ion-button color="light">31</button>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button color="light">32</button>\n      </ion-col>\n      <ion-col  col-3>\n        <button ion-button color="light">33</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/catalog/catalog.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], CatalogPage);

var _a, _b;
//# sourceMappingURL=catalog.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_catalog__ = __webpack_require__(269);
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
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamPage = (function () {
    function ExamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.exams = [];
        for (var i = 0; i < 10; i++) {
            this.exams.push({
                backgroundImg: "assets/img/card/card-" + (2017 - i) + ".jpg",
                year: 2017 - i,
                problemNum: 0,
                collectionNum: 0,
                finishedTime: "00:00:00"
            });
        }
        this.exam_year = this.navParams.data.exam_year;
    }
    ExamPage.prototype.openCatalogPage = function (exam_year) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__catalog_catalog__["a" /* CatalogPage */], { exam_year: exam_year });
    };
    return ExamPage;
}());
ExamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        priority: 'high'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exam',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/exam/exam.html"*/'<!--\n  Generated template for the ExamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>历年真题</ion-title>\n\n    <ion-buttons end>\n      <button ion-button color="dark">模拟练习</button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let exam of exams" (click)="openCatalogPage(exam.year)">\n\n    <img src="{{exam.backgroundImg}}">\n\n    <div class="card-title">{{exam.year}}年考研政治真题</div>\n\n    <div class="card-subtitle">选择题</div>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-3>\n          <button ion-button icon-left clear small color="light">\n            <ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon>\n            <div>{{exam.problemNum}}题</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-3>\n          <button ion-button icon-left clear small color="light">\n            <ion-icon name="star"></ion-icon>\n            <div>{{exam.collectionNum}}题</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button ion-button clear small color="light">用时：{{exam.finishedTime}}</button>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/exam/exam.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ExamPage);

//# sourceMappingURL=exam.js.map

/***/ })

});
//# sourceMappingURL=0.js.map