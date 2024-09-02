// ==UserScript==
// @name         sweephvh Button
// @description  Script that adds a button that redirects to sweephvh profile
// @version      1.1
// @author       sweephvh
// @match        https://gamesense.pub/forums/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gamesense.pub
// ==/UserScript==

(function() {
    'use strict';

    function addsweepButton() {
        // Create the new button element
        var sweepLink = document.createElement("li");
        sweepLink.id = "navsweep";
        sweepLink.innerHTML = '<a class="usergroup-1" href="https://gamesense.pub/forums/profile.php?id=15297" id="sweepButton">sweephvh</a>';

        // Insert the new button after the premium element
        var premiumElement = document.getElementById("navpremium");
        if (premiumElement) {
            premiumElement.parentNode.insertBefore(sweepLink, premiumElement.nextSibling);
        }

        // Apply custom styling to the button text
        var style = document.createElement('style');
        style.textContent = `
            #sweepButton {
                font-size: 20px;
            }
        `;
        document.head.appendChild(style);
    }

    addsweepButton();
})();
