var navs = array(
  array(
    "/", 
    "Home"
  )
);

document.write("<ul>");
navs.forEach(function(entry){
  document.write("<li><a href=\"" + entry[0] + "\">" + entry[1] + "</a></li>");
}
document.write("</ul>");
