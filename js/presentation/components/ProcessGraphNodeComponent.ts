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

      </style>

      <div class="card draggable">
        <div *ngIf="processGraphNode.isFinished()">
          <img width="200" height="125" class="materialboxed" [attr.src]="processGraphNode.displayImage.src" (load)="imageLoaded()">
        </div>

        <div class="card-content">
          <b>{{processGraphNode.name}}</b>
          <span>
            <div [hidden]="!(processGraphNode.name === 'Image Loading' && !processGraphNode.isFinished())" class="form-input">
              <div class="file-field input-field">
                <input type="file" (change)="onFileSelected($event)">
                <div class="file-path-wrapper">
                  <input class="file-path" type="text">
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    `
})

export class ProcessGraphNodeComponent
{
  @Input("process-graph-node") processGraphNode;
  @Input('update-event') updateEvent;

  constructor(public element: ElementRef)
  {

  }

  setPosition()
  {
    var el = this.element.nativeElement;
    let x = $(el).children().offset().left;
    let y = $(el).children().offset().top;
    this.processGraphNode.setDisplayPosition(x, y);
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

  onFileSelected(event)
  {
    let image = new Image();
    let self = this;

    let input = event.target;

    if (input.files && input.files[0])
    {
        var reader = new FileReader();

        reader.onload = function (e)
        {
            image.src = e.target['result'];
            (<ImageLoadingNode>(self.processGraphNode.processGraphNode)).setImage(image);
        }

        reader.readAsDataURL(input.files[0]);
    }
  }
}
