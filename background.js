'use strict';

var showMainPage = function(){
    chrome.tabs.create({
        url: "main.html"
    });
};

$(function(){
    //open new tab
    chrome.browserAction.onClicked.addListener(showMainPage);
});