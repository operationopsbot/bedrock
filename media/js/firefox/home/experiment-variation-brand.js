/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var body = document.getElementsByTagName('body')[0];
    var variation = body.getAttribute('data-variant') || false;

    if (variation) {
        window.dataLayer.push({
            'data-ex-name': 'firefox_desktop_brand',
            'data-ex-variant': 'v_' + variation
        });
    }

})();
