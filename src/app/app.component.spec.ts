import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BoundaryService } from './boundary.service';
import { provide } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {HTTP_PROVIDERS} from "@angular/http";

class MockBoundaryService extends BoundaryService {
  ping() {
    return Observable.of('Pong');
  }
}

describe('App', () => {
  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide(BoundaryService, {useClass: MockBoundaryService}),
    AppComponent
  ]);
  it ('should work', inject([AppComponent], (app: AppComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
