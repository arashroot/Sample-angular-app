// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'angular-sample-app';
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';


/**
 * Angular component is a basic building block of a UI application
 *
 * It is the combination of template - HTML Page, CSS- Style File ,
 *
 * TS File - Type script file  handles below
 *
 * 1. Lifecycle of a component
 *
 * 2. Property bindings and Event handlings of a view - HTML Partial.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/**
 * Angular root component
 */
export class AppComponent {
  /**
   * title
   */
  title = 'Sample FrontEnd Engine';

  /**
   * is authenticated
   */
  isAuthenticated: boolean;
  /**
   * idle state
   */
  idleState = 'Not started.';
  /**
   * timed out
   */
  timedOut = false;
  /**
   * last ping (optonal)
   */
  lastPing?: Date = null;
  /**
   * AppComponent constructor
   * @param router
   */
  constructor(
    private router: Router,
  ) {}
  /**
   * ngOnInit verify the user is authenticated or not on page load..
   */
  async ngOnInit() {}

  /**
   * Log in method.
   */
  login() {

  }
  /**
   * Log out method.
   */
  logout() {
    sessionStorage.clear();
    location.href = '/login';
  }
}
