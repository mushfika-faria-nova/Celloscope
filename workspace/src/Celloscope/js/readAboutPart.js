function readAboutPart(filePath)
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
        for (var i = 0; i < text.length; i++) 
        {
          switch(text[i].trim())
          {
            case "Paragraph":
            var item = document.createElement("DIV");           
            item.className="rows"  ;               
            document.getElementById("about-fig").appendChild(item);

            break;
            case "Title":
            var fig_row_text = document.createElement("DIV");
            fig_row_text.className="about_divs";

            var node = document.createElement("H3");
            var textnode = document.createTextNode(text[i+1]);
            node.appendChild(textnode);
            fig_row_text.appendChild(node);
            item.appendChild(fig_row_text);
            break;

            case "Image":
            var fig_part = document.createElement("DIV");
            fig_part.className="about_img_divs";

            var node = document.createElement("IMG");
            node.setAttribute("src", text[i+1]);
            node.className="about_img";
            fig_part.appendChild(node);
            item.appendChild(fig_part);
            break;

            case "Description":                          
            while(text[i+1]!=null && text[i+1]!="Paragraph")
            {
              var node = document.createElement("P");
              var textnode = document.createTextNode(text[i+1]);
              node.appendChild(textnode);
              fig_row_text.appendChild(node);
              item.appendChild(fig_row_text);
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