import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

/**
 * Navigation component.
 */
@Component({
  selector: 'training-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.less'
  ]
})
export class NavigationComponent implements OnInit {
  /**
   * Home route name.
   */
  public homeRouteName: string;

  /**
   * Home route value.
   */
  public homeRouteValue: string;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.homeRouteName = configuration.route.name.home;
    this.homeRouteValue = configuration.route.value.home;
  }
}
