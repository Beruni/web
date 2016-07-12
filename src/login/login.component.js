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
var core_1 = require("@angular/core");
var facebook_login_service_1 = require('./facebook-login.service');
var LoginComponent = (function () {
    function LoginComponent(facebookLoginService) {
        this.facebookLoginService = facebookLoginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        (function (s, id) {
            var js;
            var fjs = document.getElementsByTagName(s)[0];
            if (document.getElementById(id))
                return;
            js = document.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }('script', 'facebook-jssdk'));
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        this.facebookLoginService.login();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: require('./login.component.jade'),
            providers: [facebook_login_service_1.FacebookLoginService]
        }), 
        __metadata('design:paramtypes', [facebook_login_service_1.FacebookLoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map