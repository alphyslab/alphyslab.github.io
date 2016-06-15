var page = 1;
function nextPage(){
  page++;
}
function prevPage(){
  page--;
}
for (i=0; document.getElementById("page" + i) ; i++){
  document.getElementById("page" + i).style.visibility = "none";
}
function update(element){
  document.location = "?page=" + page;
  if (document.getElementById(element) && document.getElementById(element).style.visibility = "none"){
    document.getElementById(element).style.visibility = "visible";
  }else{
    document.getElementById(element).style.visibility = "none";
  }
}
update("page" + page);
