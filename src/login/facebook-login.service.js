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
var core_1 = require('@angular/core');
var FacebookLoginService = (function () {
    function FacebookLoginService() {
    }
    FacebookLoginService.prototype.statusChangeCallback = function (response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected')
            this.testAPI();
        else if (response.status === 'not_authorized')
            document.getElementById('status').innerHTML = 'Please log into this app.';
        else
            document.getElementById('status').innerHTML = 'Please log into Facebook';
    };
    FacebookLoginService.prototype.testAPI = function () {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', { fields: 'name, email' }, function (response) {
            console.log('Successful login for: ' + response.email);
            console.log('Thanks for logging in, ' + response.name + '!');
        });
    };
    FacebookLoginService.prototype.login = function () {
        var loginService = this;
        FB.getLoginStatus(function (response) {
            loginService.statusChangeCallback(response);
        });
    };
    FacebookLoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginService);
    return FacebookLoginService;
}());
exports.FacebookLoginService = FacebookLoginService;
//# sourceMappingURL=facebook-login.service.js.map