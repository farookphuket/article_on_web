
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


//  test jquery

function kicker(tag,url=null){
    tag = $(tag);

    let home = new URL('/',location.href).href;
    let goUrl = home;
    if(url !== null){
        goUrl = url;
    }
    return tag.on('click',function(){
        location.href=goUrl;
    }); 
}


/*

const $ = function(selector) {
  const nodeList = document.querySelectorAll(selector);
  return new Proxy(nodeList, {
    set: function(target, property, value) {
      for (let i = 0; i < target.length; i++) {
        target[i][property] = value;
      }
    },
    get: function(target, property) {
      return target[0] && target[0][property];
    }
  });
};
*/
