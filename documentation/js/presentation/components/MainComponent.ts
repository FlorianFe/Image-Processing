import {Component} from 'angular2/core';
import {IntroductionComponent} from './chapters/introduction/IntroductionComponent';
import {LinearFilterComponent} from './chapters/linear filter/LinearFilterComponent';

@Component({
    selector: 'app',
    directives: [LinearFilterComponent, IntroductionComponent],
    providers: [],
    template: `
      <main>
        <div class="documentation">
          <div class="container">
            <chapter-introduction *ngIf="selectedChapter === INTRODUCTION_CHAPTER"></chapter-introduction>
            <chapter-linear-filter *ngIf="selectedChapter === LINEAR_FILTER_CHAPTER"></chapter-linear-filter>
            <!--<chapter-introduction *ngIf="selectedChapter === 'introduction'"></chapter-introduction>
            <chapter-introduction *ngIf="selectedChapter === 'introduction'"></chapter-introduction>-->
            <div id="loading-bar" style="position: fixed; display: none; top : 50px; right: 50px;">
              <i class="material-icons">av_timer</i> Lädt...
            </div>
          </div>
        </div>
      </main>

      <ul id="slide-out" class="side-nav fixed">
        <li class="no-padding">
         <ul class="collapsible collapsible-accordion">
          <li><a class="nav-item" [class]="(selectedChapter === INTRODUCTION_CHAPTER) ? 'light-blue white-text' : ''" (click)="selectIntroduction()" href="#!introduction">Einleitung</a></li>
          <li><a class="nav-item" [class]="(selectedChapter === LINEAR_FILTER_CHAPTER) ? 'light-blue white-text' : ''" (click)="selectLinearFilter()" href="#!linear-filter">Lineare Filter</a></li>
          <li><a class="nav-item" (click)="selectMorphologicFilter()" id="nav-item-morphologic-filter" href="#!morphologic-filter">Morphologische Filter</a></li>
          <li><a class="nav-item" (click)="selectTransformations()" id="nav-item-transformations" href="#!transformations">Transformationen</a></li>
        </ul>
      </ul>
    `
})

export class MainComponent
{
  private selectedChapter : number;

  private INTRODUCTION_CHAPTER = 0;
  private LINEAR_FILTER_CHAPTER = 1;
  private MORPHOLOGIC_FILTER_CHAPTER = 2;
  private TRANSFORMATIONS_CHAPTER = 3;

  constructor()
  {
    this.selectedChapter = this.INTRODUCTION_CHAPTER;
  }

  selectIntroduction()
  {
    this.selectedChapter = this.INTRODUCTION_CHAPTER;
  }

  selectLinearFilter()
  {
    this.selectedChapter = this.LINEAR_FILTER_CHAPTER;
  }

  selectMorphologicFilter()
  {
    this.selectedChapter = this.INTRODUCTION_CHAPTER;
  }

  selectTransformations()
  {
    this.selectedChapter = this.INTRODUCTION_CHAPTER;
  }
}
