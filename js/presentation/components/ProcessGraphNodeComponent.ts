import {NodeIdToPositionMap} from '../view model/NodeIdToPositionMap';
import {Vector2d} from '../view model/Vector2d';

import {Component, ElementRef, Output, EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';

declare var $ : any;

@Component({
    selector: 'process-graph-node',
    directives: [],
    providers: [],
    template: `
      <style>

        .card
        {
          left: 0px;
          top: 60px;
          margin: 40px;
          width: 200px;
          height: 200px;
          border-color: black;
          text-align: center;
          float: left;
        }

        .draggable
        {
          cursor: move;
        }

      </style>

      <div class="card draggable">
        <div *ngIf="processGraphNode.isFinished()">
          <img width="200" height="150" class="materialboxed" [attr.src]="processGraphNode.displayImage.src" (load)="imageLoaded()">
        </div>

        <div *ngIf="!processGraphNode.isFinished()">
          <img width="200" height="150">
        </div>

        <div class="card-content">
          <b>{{processGraphNode.name}}</b>
        </div>
      </div>
    `
})

export class ProcessGraphNodeComponent
{
  @Input("process-graph-node") processGraphNode;
  @Input("node-positions-map") nodePositionsMap;
  @Input('update-event') updateEvent;

  constructor(public element: ElementRef)
  {

  }

  setPosition()
  {
    if(this.nodePositionsMap)
    {
      var el = this.element.nativeElement;
      this.nodePositionsMap.setPosition(
        this.processGraphNode.getId(),
        new Vector2d(
          $(el).children().offset().left,
          $(el).children().offset().top
        )
      );
    }
  }

  ngAfterViewInit()
  {
    let self = this;

    console.log("view init!");

    this.updateEvent.subscribe(function()
    {
      self.setPosition();
    });

    this.setPosition();

    $(drag);

    function drag()
    {
      $('.draggable').draggable(
      {
        cursor: "move",
        grid: [20,20],
        drag: function( event, ui )
        {
          self.updateEvent.emit({});
          self.setPosition();
          $('.draggable').click();
        }
      });
    }

    self.updateEvent.emit({});
  }

  ngOnInit()
  {
   var el = this.element.nativeElement;
   this.setPosition();
  }

  imageLoaded()
  {
    $(document).ready(function()
    {
      $('.materialboxed').materialbox();
    });
  }
}
