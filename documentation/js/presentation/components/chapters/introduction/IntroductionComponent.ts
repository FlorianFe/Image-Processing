import {Component} from 'angular2/core';
import {CodeToHTMLParser} from '../../../../utils/CodeToHTMLParser';

declare var $ : any;

@Component({
    selector: 'chapter-introduction',
    directives: [],
    providers: [],
    templateUrl: 'js/presentation/components/chapters/introduction/introduction.html'
})


export class IntroductionComponent
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
    });
  }
}
