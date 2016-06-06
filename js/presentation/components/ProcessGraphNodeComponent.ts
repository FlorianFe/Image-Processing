import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

declare var $ : any;

@Component({
    selector: 'process-graph-node',
    directives: [],
    providers: [],
    template: `
      <style>

        .thumbnail
        {
          left: 0px;
          top: 0px;
          width: 200px;
          height: 200px;
          border-color: black;
          text-align: center;
        }

        .draggable
        {
          cursor: move;
        }

      </style>
<!--
      <div class="draggable">
        {{processGraphNode.name}}
      </div>
-->
      <div class="thumbnail draggable">
        <div *ngIf="processGraphNode.finished">
          <img src="{{processGraphNode.displayElement.src}}" width="150" height="100">
        </div>
       <div class="caption">
         <h3>{{processGraphNode.name}}</h3>
       </div>
      </div>
    `
})

export class ProcessGraphNodeComponent
{
  @Input("process-graph-node") processGraphNode;

  constructor()
  {

  }

  ngAfterViewInit()
  {
    $( drag );

    function drag() {
    $('.draggable').draggable(
    {
      cursor: "move",
      grid: [20,20]
    });
    }
  }
}
