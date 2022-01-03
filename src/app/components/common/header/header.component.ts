import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

/**
 * Header component.
 */
@Component({
  selector: 'training-common-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.less'
  ]
})
export class HeaderComponent implements OnInit {
  /**
   * Application name.
   */
  public name: string;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.name = configuration.gitHub.username.concat(' ', configuration.application.title);
  }
}
