'use strict';

$(function(){
    //call after DOM built

    var currentPage = 1;
    var list_ul = document.getElementById("list_ul");
    
    chrome.windows.getAll(null, function(windows){

        for (var i = 0; i < windows.length; i++) {

            var windowId = windows[i].id;

            //chrome.tabs.query({tab info}, callback)
            chrome.tabs.getAllInWindow(windowId, function(tabs){

                var windowHeader = document.createElement("h3");
                windowHeader.innerHTML = "window: " + currentPage++;
                windowHeader.id = "windowHeader";
                list_ul.appendChild(windowHeader);
                
                // console.log(windows);
                // console.log(windowId);
        
                for(var j = 0; j < tabs.length; j++) {
                    var tab = tabs[j];
        
                    // var list_ul = document.getElementById("list_ul");
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
        }
    });


    $('#list_ul').on('click', '#link', function(e){
        chrome.tabs.create({url: $(this).attr("href")});
    });
});