import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';

/**
 * Knowledge base component.
 */
@Component({
  selector: 'training-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: [
    './knowledge-base.component.less'
  ]
})
export class KnowledgeBaseComponent implements OnInit {
  /**
   * Gists.
   */
  public gists: string;

  /**
   * Repositories.
   */
  public repositories: string;

  /**
   * Declares should GitHub gists be shown or not.
   */
  public shouldGistsBeShown: boolean;

  /**
   * Declares should GitHub repositories be shown or not.
   */
  public shouldRepositoriesBeShown: boolean;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.gists = language.knowledgeBase.gists;
    this.repositories = language.knowledgeBase.repositories;
    this.shouldGistsBeShown = false;
    this.shouldRepositoriesBeShown = true;
  }

  /**
   * Show gists and hide repositories.
   */
  public showGists(): void {
    this.shouldGistsBeShown = true;
    this.shouldRepositoriesBeShown = false;
  }

  /**
   * Show repositories and hide gists.
   */
  public showRepositories(): void {
    this.shouldGistsBeShown = false;
    this.shouldRepositoriesBeShown = true;
  }
}
