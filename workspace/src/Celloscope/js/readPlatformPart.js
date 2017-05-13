function readPlatformPart(filePath,divpath1,imgpath1,divpath2,imgpath2,divpath3,imgpath3)
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
        var count =0, count_img=0;
        for (var i = 0; i < text.length; i++) 
        {
          switch(text[i].trim())
          {
            case "Title":
            var node = document.createElement("H3");
            var textnode = document.createTextNode(text[i+1]);
            node.appendChild(textnode);
            if(text[i-1].trim()=="01")
            {
             document.getElementById("platform-col-text1").appendChild(node);
            }
            else if (text[i-1].trim()=="02")
            {
              document.getElementById("platform-col-text2").appendChild(node);
            }
            else
            {
              document.getElementById("platform-col-text3").appendChild(node);
            }  
            break;
            case "Image":
            var node = document.createElement("IMG");
            node.setAttribute("src", text[i+1]);
            node.setAttribute("width", "300");
            node.setAttribute("height", "200");
            if(count_img==0)
            {
             document.getElementById("image1").appendChild(node);
             }
             else if (count_img==1)
             {
              document.getElementById("image2").appendChild(node);
            }
            else
            {
              document.getElementById("image3").appendChild(node);
            }
            count_img++;
            break;
            case "Description":
            var node = document.createElement("P");
            var textnode = document.createTextNode(text[i+1]);
            node.appendChild(textnode);
            if(count==0)
            {
             document.getElementById("platform-col-text1").appendChild(node);
             }
             else if (count==1)
             {
              document.getElementById("platform-col-text2").appendChild(node);
            }
            else
            {
              document.getElementById("platform-col-text3").appendChild(node);
            } 
            count++;
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