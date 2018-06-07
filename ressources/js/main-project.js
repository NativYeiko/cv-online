var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// var retour;
// jQuery.ajax({url:"test.txt",success:function(result){ // url incorect
// var ma_variable = result;
// if( ma_variable =="ok" ){
// retour = false;
// }else{
// retour = true;
// }
// }});
// alert(retour);

var valeur =  5+'5';
console.log(valeur);
