var CodeToHTMLParser = (function () {
    function CodeToHTMLParser() {
    }
    CodeToHTMLParser.prototype.parse = function (code) {
        code = code.split('&').join('&amp;');
        code = code.split('<').join('&lt;');
        code = code.split('>').join('&gt;');
        code = code.split('\t').join('&nbsp;&nbsp;');
        code = code.split('\n').join('<br>');
        code = code.split(' ').join('&nbsp;&nbsp;');
        code = code.split('class').join('<span class="light-blue-text text-darken-2">class</span>');
        code = code.split('let').join('<span class="light-blue-text text-darken-2">let</span>');
        code = code.split('return').join('<span class="light-blue-text text-darken-2">return</span>');
        code = code.split('private').join('<span class="light-blue-text text-darken-2">private</span>');
        code = code.split('public').join('<span class="light-blue-text text-darken-2">public</span>');
        code = code.split('extends').join('<span class="light-blue-text text-darken-2">extends</span>');
        code = code.split('implements').join('<span class="light-blue-text text-darken-2">implements</span>');
        code = code.split('constructor').join('<span class="light-blue-text text-darken-2">constructor</span>');
        code = code.split('this').join('<span class="light-blue-text text-darken-2">this</span>');
        code = code.split('number').join('<span class="orange-text">number</span>');
        code = code.split('string').join('<span class="orange-text">string</span>');
        return code;
    };
    return CodeToHTMLParser;
}());
//# sourceMappingURL=CodeToHTMLParser.js.map