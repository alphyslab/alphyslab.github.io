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
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block'){
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
}
function update(element){
  document.location.reload;
  toggle_visibility(element);
}
update("page" + page);
