function readInfo(filePath,divpath,divpathli)
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
            var a=1;

            var node = document.createElement("P");
            var textnode = document.createTextNode(text[i+1]);
            node.appendChild(textnode);
            document.getElementById(divpath).appendChild(node);
            break;
            case "List":
            while(text[i+1] !=null)
            {
              var node2 = document.createElement("LI");
              var textnode2 = document.createTextNode(text[i+1]);
              console.log(textnode2);
              node2.appendChild(textnode2);
              document.getElementById(divpathli).appendChild(node2);
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