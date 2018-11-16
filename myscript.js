// Copyright 2018 Abhishek Balam. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.
//chrome.tabs.executeScript(null,{file:'myscript.js'});
    
'use strict';

// var actualCode = 'window.document.getElementsByClassName("boards-page-board-section")[1].parentNode.style.display="none";';
var actualCode1= 'var a=window.document.getElementsByClassName("boards-page-board-section")[1];if(a){try{a.parentNode.style.display="none";}catch(err){}}';

var script = document.createElement('script');
script.textContent = actualCode1;
(document.head||document.documentElement).appendChild(script);
script.remove();