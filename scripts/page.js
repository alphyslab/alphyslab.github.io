var page = 1;
function nextPage(){
  page++;
}
function prevPage(){
  page--;
}
function update(element){
  document.location = "?page=" + page;
  if (document.getElementById(element) && document.getElementById(element).style.visibility = "none"){
    document.getElementById(element).style.visibility = "visible";
  }else{
    document.getElementById(element).style.visibility = "none";
  }
}
update("page" + 1);
