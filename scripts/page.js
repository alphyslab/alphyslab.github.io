var page;
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
  if (document.cookie){
    page = document.cookie.substring(5);
  }
  toggle_visibility(element);
}
if (document.cookie != "page=" + page) {
  document.cookie = "page=" + page;
}
if (page == undefined){
  page = 1;
}
update("page" + page);
