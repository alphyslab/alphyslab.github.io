$(document).ready(function(){
 var p=$("#preview").contents().find("body");
 p.css("margin","2px");
 p.html('<span id="subinsbdotcomhtmlpr"></span><style id="subinsbdotcomcsspr"></style>');
 $("#html").on('keyup',function(){
  p.find("#subinsbdotcomhtmlpr").html($(this).val());
 });
 $("#css").on('keyup',function(){
  p.find("#subinsbdotcomcsspr").html($(this).val());
 });
 $("#js").on('change',function(){
  p.find("#subinsbdotcomjspr").remove();
  var app = document.createElement('<script>'); add.id = 'subinsbdotcomjspr'; document.getElementById('subinsbdotcomjspr').innerHtml = $("#js").val(); p.append(app);;
 });
 $("#upjs").on('click',function(){
  p.find("#subinsbdotcomjspr").remove();
  p.append('<script id="subinsbdotcomjspr">'+$("#js").val()+'</script>');
 });
});
