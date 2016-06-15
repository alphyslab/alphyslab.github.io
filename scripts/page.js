var page;
if (document.cookie){
  page = document.cookie.substring(5);
}
function nextPage(){
  page++;
  document.location.reload();
}
function prevPage(){
  page--;
  document.location.reload()
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
if (document.cookie !== "page=" + page) {
  document.cookie = "page=" + page;
}
if (page == undefined){
  page = 1;
}
