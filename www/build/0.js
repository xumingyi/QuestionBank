webpackJsonp([0],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamPageModule", function() { return ExamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam__ = __webpack_require__(273);
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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
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
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = (function () {
    function QuestionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.examYear = this.navParams.get('examYear');
        this.questionNum = this.navParams.get('questionNum');
    }
    return QuestionPage;
}());
QuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{examYear}}年 第{{questionNum}}题</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/question/question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], QuestionPage);

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(270);
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
        this.rows = [[1, ['01', '02', '03', '04', '05']], [2, ['06', '07', '08', '09', '10']], [3, ['11', '12', '13', '14', '15']], [4, ['16', '17', '18', '19', '20']], [5, ['21', '22', '23', '24', '25']], [6, ['26', '27', '28', '29', '30']], [7, ['31', '32', '33']]];
        this.examYear = this.navParams.get('examYear');
        this.questionNum = this.navParams.data.questionNum;
    }
    CatalogPage.prototype.openQuestionPage = function (examYear, questionNum) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */], { examYear: examYear, questionNum: questionNum });
    };
    return CatalogPage;
}());
CatalogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-catalog',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/catalog/catalog.html"*/'<!--\n  Generated template for the CatalogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{examYear}}年真题</ion-title>\n\n    <ion-buttons end>\n      <button ion-button color="dark">重做</button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngFor="let row of rows">\n\n      <ion-col col-3 *ngFor="let questionNum of row[1]">\n\n        <button class="animated swing" ion-button color="light" (click)="openQuestionPage(examYear,questionNum)">\n          {{questionNum}}\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/catalog/catalog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CatalogPage);

//# sourceMappingURL=catalog.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_catalog__ = __webpack_require__(271);
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
                examYear: 2017 - i,
                problemNum: 0,
                collectionNum: 0,
                finishedTime: "00:00:00"
            });
        }
        this.examYear = this.navParams.data.examYear;
    }
    ExamPage.prototype.openCatalogPage = function (examYear) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__catalog_catalog__["a" /* CatalogPage */], { examYear: examYear });
    };
    return ExamPage;
}());
ExamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        priority: 'high'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exam',template:/*ion-inline-start:"/Users/xi/Ionic/QuestionBank/src/pages/exam/exam.html"*/'<!--\n  Generated template for the ExamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>历年真题</ion-title>\n\n    <ion-buttons end>\n      <button ion-button color="dark">模拟练习</button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="animated bounceIn" tappable *ngFor="let exam of exams" (click)="openCatalogPage(exam.examYear)">\n\n    <img src="{{exam.backgroundImg}}">\n\n    <div class="card-title">{{exam.examYear}}年考研政治真题</div>\n\n    <div class="card-subtitle">选择题</div>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-3>\n          <button ion-button icon-left clear small color="light">\n            <ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon>\n            <div>{{exam.problemNum}}题</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-3>\n          <button ion-button icon-left clear small color="light">\n            <ion-icon name="star"></ion-icon>\n            <div>{{exam.collectionNum}}题</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button ion-button clear small color="light">用时: {{exam.finishedTime}}</button>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xi/Ionic/QuestionBank/src/pages/exam/exam.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ExamPage);

//# sourceMappingURL=exam.js.map

/***/ })

});
//# sourceMappingURL=0.js.map