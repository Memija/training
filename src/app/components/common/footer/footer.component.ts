import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { DateUtility } from 'src/app/utils/date.utility';

/**
 * Footer component.
 */
@Component({
  selector: 'training-common-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.less'
  ]
})
export class FooterComponent implements OnInit {
  /**
   * Application version.
   */
  public version: string;

  /**
   * Current year.
   */
  public year: number;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.version = configuration.version;
    this.year = DateUtility.getCurrentYearValue();
  }
}
