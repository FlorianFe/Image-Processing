import {Component, ElementRef, Output, EventEmitter} from 'angular2/core';
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

      <div #draggableElement class="thumbnail draggable" (load)="onLoad(event)">
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
  @Input("node-positions") nodePositions;
  @Input("node-index") nodeIndex;
  @Input('update-event') updateEvent;

  constructor(public element: ElementRef)
   {
    this.element.nativeElement // <- your direct element reference
  }

  setPosition()
  {
    var el = this.element.nativeElement;
    this.nodePositions[this.nodeIndex] = {x: $(el).children().offset().left, y: $(el).children().offset().top};
  }

  ngAfterViewInit()
  {
    let self = this;

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
}
