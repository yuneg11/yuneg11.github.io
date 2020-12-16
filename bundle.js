(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    document.addEventListener("DOMContentLoaded", function () {
        document.body.innerHTML += "<p>Hello NineA</p>";
    });

})));
