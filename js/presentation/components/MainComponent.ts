import {Component} from 'angular2/core';
import {ProcessGraphComponent} from './ProcessGraphComponent';

@Component({
    selector: 'app',
    directives: [ProcessGraphComponent],
    providers: [],
    template: `
        <process-graph></process-graph>
    `
})

export class MainComponent
{
  constructor()
  {
    
  }
}
