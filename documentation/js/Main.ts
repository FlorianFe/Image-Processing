import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {MainComponent} from './presentation/components/MainComponent';

//enableProdMode();
bootstrap(MainComponent);

var worker = new Worker('js/web workers/LinearFilterWebWorker.js');

worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

worker.postMessage('Hello World'); // Send data to our worker.
console.log("hi");
