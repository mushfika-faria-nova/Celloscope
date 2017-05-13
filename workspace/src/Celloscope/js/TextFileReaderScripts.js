//read from textfiles when DOMContent is loaded
document.addEventListener('DOMContentLoaded', function() {
  readInfo("content/solution.txt","solution-text","bottom-part");
  readInfo("content/platform.txt","platform-text");
  readInfo("content/about.txt","about-text");
  readInfo("content/contact.txt","contact-text");
  readNavBar("content/nav.txt");
  readAboutPart("content/about_part.txt");
  readPlatformPart("content/platform_part.txt");
  show_left_btn();


});

// function for reading text file

function readTextModal(filePath,divpath)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filePath, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        var lines = allText.split('\n');
        var text = allText.split(/[\n:]+/);
        for (var i = 0; i < text.length; i++) {
          switch(text[i].trim())
          {
            case "Title":
            var node = document.createElement("H1");
            var textnode = document.createTextNode(text[i+1]);
            node.appendChild(textnode);
            document.getElementById(divpath).appendChild(node); 
            break;

            case "Description": 
            while(text[i+1]!=null )
            {
              var node = document.createElement("P");
              var textnode = document.createTextNode(text[i+1]);
              node.appendChild(textnode);
              console.log(textnode);
              var br = document.createElement("br");
              node.appendChild(br);
              document.getElementById(divpath).appendChild(node);
              i++;
            }
            break;
            default:  
            break;
          }
        }
      }
    }
  }
  rawFile.send(null);
}
function readNavBar(filePath,divid)
{ 
  navbarlist1=document.getElementById("home");
  navbarlist2=document.getElementById("aboutt");
  navbarlist3=document.getElementById("about");
  navbarlist4=document.getElementById("contact");
  nav=[navbarlist1, navbarlist2, navbarlist3, navbarlist4];
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filePath, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;  
        var lines = allText.split('\n');
        for(var i=0;i<lines.length;i++)
        {
          nav[i].innerHTML=lines[i];
        }       
      }
    }
  }
  rawFile.send(null);
}
function readText(filePath,divid)
{ 
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filePath, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;  
        document.getElementById(divid).innerHTML = allText;        
      }
    }
  }
  rawFile.send(null);
}
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}




