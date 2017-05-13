//toggle function is for toggling left menu bar
function toggleClass()
{
  var leftmenubar = document.querySelector('.left-bar') 
  leftmenubar.classList.toggle('visible');
}

//function for creating img src and reading the source from text
var slideimg;
document.addEventListener('DOMContentLoaded', function() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "content/slideshow.txt", false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
       slideimg = rawFile.responseText; 
     }
   }
 }
 rawFile.send(null);
 var x = document.createElement("IMG");
 x.setAttribute("src", slideimg);
 x.setAttribute("id", "image");
 x.setAttribute("width", "900");
 x.setAttribute("height", "500");
 x.setAttribute("onerror", "src='images/Slideshow/slideend.jpg';disable_next_key()");
 document.getElementById("images").appendChild(x); 
});

// function for image slideshow
//function for going to next images

var i=0;
function change_next_img()
{
  var imgsrc=document.getElementById("image").getAttribute("src");
  console.log(imgsrc);
  var nextImage="images/Slideshow/slide" +(++i)+".jpg"
  var img= document.getElementById("image").setAttribute("src",nextImage );
  if(i==2)
  {
    var previousImageKey= document.getElementById("down");
    previousImageKey.style.display="block";
  }
}
//function for going to previous images
function change_previous_img()
{
  if(i==2)
  {
    disable_previous_key();
  }
  var previousImage="images/slideshow/slide" +(--i)+".jpg"
  document.getElementById("image").setAttribute("src",previousImage );
  
}
//function for disabling up button when image is not found
function disable_next_key() 
{
  var nextImageKey= document.getElementById("up");
  nextImageKey.style.display="none";
  var previousImageKey= document.getElementById("down");
  previousImageKey.onclick=function(){
  nextImageKey.style.display="block";
  }; 
}
//function for disabling up button when image is not found
function disable_previous_key()
{
  var nextImageKey= document.getElementById("down");
  nextImageKey.style.display="none";
  var previousImageKey= document.getElementById("up");
  previousImageKey.onclick=function(){
  nextImageKey.style.display="block";
  };

}

//on "enter" key press search function is called
function handleKeyPress(e,id)
{
 var key=e.keyCode || e.which;
  if (key==13)
  {
     search(id);
  }
  else 
  {
    remove_highlight();
  }
  
}

//search function for full word search 
function search(id)
{
  var div_ids = document.querySelectorAll("p");
  console.log(div_ids);
  var div_h3 = document.querySelectorAll("h3");
  console.log(div_ids);
  var searchtext = document.getElementById(id).value;
  console.log(searchtext);
  if(searchtext.length !=0)
  {
    var query = new RegExp("(\\b" + searchtext + ")", "gim");
    console.log(query);
    for(var i=0; i<div_ids.length;i++)
    {
      var textpart = div_ids[i].innerHTML;
      var spantext = textpart.replace(/(<span class="clr">|<\/span>)/igm, "");
      div_ids[i].innerHTML = spantext;
      var highlight = spantext.replace(query, "<span class='clr'>$1</span>");
      div_ids[i].innerHTML = highlight;
    }

    for(var i=0; i<div_h3.length;i++)
    {
      var textpart = div_h3[i].innerHTML;
      var spantext = textpart.replace(/(<span class="clr">|<\/span>)/igm, "");
      div_h3[i].innerHTML = spantext;
      var highlight = spantext.replace(query, "<span class='clr'>$1</span>");
      div_h3[i].innerHTML = highlight;
    }

        var textpart = document.getElementById("bottom-part").innerHTML;
        var spantext = textpart.replace(/(<span class="clr">|<\/span>)/igm, "");
        document.getElementById("bottom-part").innerHTML = spantext;
        var highlight = spantext.replace(query, "<span class='clr'>$1</span>");
        document.getElementById("bottom-part").innerHTML = highlight;
  }
  else
  {
    alert("search string is empty!");
  }
  
}


function remove_highlight()
{
  var highlightclasses=document.querySelectorAll(".clr"), i;

  for (i = 0; i < highlightclasses.length; ++i) 
  {
    highlightclasses[i].classList.remove("clr");
  }

}

function show_left_btn()
{

  var left_btn=document.getElementById('leftbar-btn');
  var top = document.getElementById('header');
  var logos=document.getElementById('logo');
  var navs=document.getElementById('nav');
  var w=window.innerWidth;
  if(w <800)
  {
    left_btn.style.display="block";
  }
  else 
  {
    left_btn.style.display="none";
    //logos.style.paddingLeft="20px";
  }
  
}
//function for shrinking navbar
function shrinkNav()
{
  var top = document.getElementById('header');
  var logos=document.getElementById('logo');
  var navs=document.getElementById('nav');
  var left_btn=document.getElementById('leftbar-btn');
  var w=window.innerWidth;

  var ypos = window.pageYOffset;

  if(ypos >200 )
  {
    top.style.height="65px";
    top.style.backgroundColor="#3b3333";
    top.style.opacity="0.9";
    logos.style.fontSize="25px";
    logos.style.paddingLeft="60px";
    navs.style.height="65px"; 
  }
  else
  {
    top.style.height="80px";
    top.style.backgroundColor="transparent";
    logos.style.fontSize="40px";
    logos.style.paddingLeft="20px";
    navs.style.height="80px";
  }
}
window.addEventListener("scroll",shrinkNav);

