var page = 1;
function nextPage(){
  page++;
}
function prevPage(){
  page--;
}
document.location = "?page=" + page;
if (document.getElementById("page" + page) && document.getElementById("page" + page).style.visibility = "none"){
  document.getElementById("page" + page).style.visibility = "visible";
}else{
  document.getElementById("page" + page).style.visibility = "none"
}
