import {Component} from 'angular2/core';
import {CodeToHTMLParser} from '../../../../utils/CodeToHTMLParser';

declare var $ : any;
declare var ace : any;
declare var convolute : any;
declare var resultColorMap : any;
declare var Materialize : any;

function loadImageFromFileInput(event, callback)
{
  let image = new Image();
  let self = this;

  let input = event.target;

  if(input.files && input.files[0])
  {
    var reader = new FileReader();

    reader.onload = function(e)
    {
      image.src = e.target['result'];
      callback(image);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

@Component({
    selector: 'chapter-linear-filter',
    directives: [],
    providers: [],
    templateUrl: 'js/presentation/components/chapters/linear filter/linear-filter.html'
})


export class LinearFilterComponent
{
  constructor()
  {

  }

  ngAfterViewInit()
  {
    $(document).ready(function()
    {
      $('.code-box').each(function(index, element)
      {
        $.get($(element).attr('data'), function(data)
        {
          $(element).html((new CodeToHTMLParser()).parse(data));
        });
      });

      $('.button-collapse').sideNav();

      $('.collapsible').collapsible(
      {
        accordion : false
      });

      $('.materialboxed').materialbox();


      // Code Editor Part
      var sourceColorMap = new ColorMap(1, 1);

      var editor = ace.edit("editor");
      editor.setTheme("ace/theme/textmate");
      editor.getSession().setMode("ace/mode/javascript");

      $('#source-image').on('load', function()
      {
        sourceColorMap = ImageToColorMapParser.parse($('#source-image').get(0));
      });

      $('.code-box').each(function(index, element)
      {
        $.get($(element).attr('data'), function(data)
        {
          $(element).html((new CodeToHTMLParser()).parse(data));
        });
      });

      $('#image-file-input').on('change', function(event)
      {
        loadImageFromFileInput(event, function(image)
        {
          $('#loading-bar').show();

          sourceColorMap = ImageToColorMapParser.parse(image);
          $('#source-image').attr('src', image.src);
          let resultColorMap = new ColorMap(1, 1);
          eval(editor.getValue());
          let resultImage = ColorMapToImageParser.parse(resultColorMap);
          $('#result-image').attr("src", resultImage.src);

          $('#loading-bar').hide();
        });
      });

      $('#btn-calculate').click(function()
      {
        $('#loading-bar').show();
        setTimeout(function()
        {
          try
          {
            sourceColorMap = ImageToColorMapParser.parse($('#source-image').get(0));
            var resultColorMap = new ColorMap(1, 1);
            eval(editor.getValue());
            let resultImage = ColorMapToImageParser.parse(resultColorMap);
            $('#result-image').attr("src", resultImage.src);
          }
          catch(exception)
          {
            var toastContent = $('<b>' + exception + '</b>');
            Materialize.toast(toastContent, 3000);
          }
          finally
          {
            $('#loading-bar').hide();
          }
        }, 50);
      });
    });
  }
}
