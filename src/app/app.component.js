"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./rxjs-operators');
var core_1 = require('@angular/core');
require('../../public/css/styles.scss');
var boundary_service_1 = require('./boundary.service');
var login_component_1 = require('../login/login.component');
var AppComponent = (function () {
    function AppComponent(boundaryService) {
        this.boundaryService = boundaryService;
        this.visibleText = "ping";
    }
    AppComponent.prototype.ping = function () {
        var _this = this;
        this.boundaryService.ping()
            .subscribe(function (visibleString) { return _this.visibleText = visibleString; }, function (error) { return _this.logError(error); });
    };
    AppComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require('./app.component.jade'),
            styles: [require('./app.component.scss')],
            providers: [boundary_service_1.BoundaryService],
            directives: [login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [boundary_service_1.BoundaryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map