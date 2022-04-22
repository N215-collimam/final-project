import * as MODEL from "../model/model.js";

function route(){
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";
    //diplays page name in the search bar
    
    if(pageName == ""){
        pageContent = "homeContent";
    }
//loads this page first
    MODEL.modelPageName(pageContent);
}



function initListeners(){
    $(window).on("hashchange",route);
    route();
}


$(document).ready(function () {
    initListeners();
});

