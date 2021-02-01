

function bClear(){
    return localStorage.clear();
}


function kick(tag,kick_url=null){
    tag = _(tag);
    let homeUrl = new URL("/",location.href).href;
    let whereTo = "";
    if(kick_url === null){
        whereTo = homeUrl;
    }else{
        whereTo = kick_url;
    }
    return tag.addEventListener("click",function(){
        goToPage(whereTo);
    });
}
function _(tag){
    return document.querySelector(tag);
}


function goToPage(page){
    return location.href=page;
}






