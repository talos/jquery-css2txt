/**
   Copyright 2012 John Krauss. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

   1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above
   copyright notice, this list of conditions and the following
   disclaimer in the documentation and/or other materials provided
   with the distribution.

   THIS SOFTWARE IS PROVIDED BY JOHN KRAUSS ''AS IS'' AND ANY EXPRESS
   OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   ARE DISCLAIMED. IN NO EVENT SHALL JOHN KRAUSS OR CONTRIBUTORS BE
   LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
   OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
   BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
   USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
   DAMAGE.

   The views and conclusions contained in the software and
   documentation are those of the authors and should not be
   interpreted as representing official policies, either expressed or
   implied, of John Krauss.
**/

/*globals define, jQuery, CSSStyleSheet*/

(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    "use strict";
    /**
       Convert a single stylesheet to text.

       @param stylesheet the CSSStyleSheet to convert to text.

       @return The stylesheet as text.
    **/
    var css2txt = function (stylesheet) {
        var i,
            rules = stylesheet.cssRules,
            text = '';

        if (rules) {
            for (i = 0; i < rules.length; i += 1) {
                text += rules[i].cssText + "\r\n";
            }
        }
        return text;
    };

    /**
       Convert any number of CSSStyleSheet elements back to their
       textual representation.

       The length of the returned array will be the same as the passed
       array.  Each CSSStyleSheet will be replaced with a String that
       is its textual representation.  Any non-CSSStyleSheets will be
       empty strings.
     **/
    $.fn.css2txt = function () {
        var ary = [];
        $.each(this, function (i, el) {
            if (el instanceof CSSStyleSheet) {
                ary.push(css2txt(el));
            } else {
                ary.push('');
            }
        });
        return ary;
    };
}));
