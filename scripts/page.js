var page = 1;
function nextPage(){
  page++;
}
function prevPage(){
  page--;
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
  toggle_visibility(element);
}
update("page" + page);
if (document.location != "?page=" + page) {
  document.location = "?page=" + page;
}
