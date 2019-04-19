// ==UserScript==
// @name         Title Turd
// @namespace    https://github.com/johnnyawesome
// @version      1.1.2
// @description  Adds a little PooP to the title of your Tab!
// @author       JohnnyAwesome
// @match        *://*/*
// @grant        none
// @icon         https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull32.ico
// @icon64		 https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull64.ico
// @updateURL    https://github.com/johnnyawesome/TitleTurd/raw/master/Title%20Turd.user.js
// @downloadURL  https://github.com/johnnyawesome/TitleTurd/raw/master/Title%20Turd.user.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(poopTitle, 1000);

    function poopTitle(){

        var title = document.title;

        document.title = "💩" + title;

    }

})();
