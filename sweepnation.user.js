// ==UserScript==
// @name         sweephvh Button
// @description  Script that adds a button that redirects to sweephvh profile
// @version      1.0
// @author       sweephvh
// @match        https://gamesense.pub/forums/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gamesense.pub
// ==/UserScript==

(function() {
    'use strict';

    function addsweepButton() {
        var sweepLink = document.createElement("li");
        sweepLink.id = "navsweep";
        sweepLink.innerHTML = '<a class="usergroup-1" href="https://gamesense.pub/forums/profile.php?id=15297" id="sweepButton">sweephvh</a>';

        var premiumElement = document.getElementById("navpremium");
        if (premiumElement) {
            premiumElement.parentNode.insertBefore(sweepLink, premiumElement.nextSibling);
        }
    }

    addsweepButton();
})();
