'use strict';

$(function(){
    //call after DOM built

    //chrome.tabs.query({tab info}, callback)
    chrome.tabs.query({}, function(tabs){

        for(var i = 0; i < tabs.length; i++) {

            var tab = tabs[i];

            var list_ul = document.getElementById("list_ul");
            var li = document.createElement("li");
            list_ul.appendChild(li);

            var favicon = document.createElement("img");
            favicon.src = tab.favIconUrl;
            favicon.id = "favicon";

            var liTitle = document.createElement("span")
            liTitle.innerHTML = tab.title;

            var spanNewLine = document.createElement("span");
            spanNewLine.id = "newLine";

            var a = document.createElement("a");
            a.href = tab.url;
            a.id = "link";
            a.innerHTML = tab.url;

            li.appendChild(favicon);
            li.appendChild(liTitle);
            li.appendChild(spanNewLine);
            
            li.appendChild(a);
        }
    });

    $('#list_ul').on('click', '#link', function(e){
        chrome.tabs.create({url: $(this).attr("href")});
    });
});