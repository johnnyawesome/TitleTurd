// ==UserScript==
// @name         Title Turd
// @namespace    https://github.com/johnnyawesome
// @version      1.1
// @description  Adds a little PooP to the title of your Tab!
// @author       JohnnyAwesome
// @match        *://*/*
// @grant        none
// @icon         https://cdn0.iconfinder.com/data/icons/pixelo/32/skull.png
// @updateURL    https://github.com/johnnyawesome/TitleTurd/raw/master/Title%20Turd.user.js
// @downloadURL  https://github.com/johnnyawesome/TitleTurd/raw/master/Title%20Turd.user.js
// ==/UserScript==

//lalala

(function() {
    'use strict';

    setTimeout(poopTitle, 1000);

    function poopTitle(){

        var title = document.title;

        document.title = "💩" + title;

    }

})();
