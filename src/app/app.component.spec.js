"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var boundary_service_1 = require('./boundary.service');
var core_1 = require('@angular/core');
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var MockBoundaryService = (function (_super) {
    __extends(MockBoundaryService, _super);
    function MockBoundaryService() {
        _super.apply(this, arguments);
    }
    MockBoundaryService.prototype.ping = function () {
        return Rx_1.Observable.of('Pong');
    };
    return MockBoundaryService;
}(boundary_service_1.BoundaryService));
testing_1.describe('App', function () {
    testing_1.beforeEachProviders(function () { return [
        http_1.HTTP_PROVIDERS,
        core_1.provide(boundary_service_1.BoundaryService, { useClass: MockBoundaryService }),
        app_component_1.AppComponent
    ]; });
    testing_1.it('should work', testing_1.inject([app_component_1.AppComponent], function (app) {
        // Add real test here
        testing_1.expect(2).toBe(2);
    }));
});
//# sourceMappingURL=app.component.spec.js.map