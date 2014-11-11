$('document').ready(function(){
  $('#menues').click(changeNav);
});

function changeNav()
{
var mylist=document.getElementById("menues")
var selection=mylist.options[mylist.selectedIndex].text;

switch (selection)
  {
  case "top":
    document.getElementById("mTop").style.display="block";
  document.getElementById("mBottom").style.display="none";
  document.getElementById("mLeft").style.display="none";
  document.getElementById("mRight").style.display="none";
    break;
  case "bottom":
  document.getElementById("mTop").style.display="none";
  document.getElementById("mBottom").style.display="block";
  document.getElementById("mLeft").style.display="none";
  document.getElementById("mRight").style.display="none";
  
    break;
  case "left":
  document.getElementById("mTop").style.display="none";
  document.getElementById("mBottom").style.display="none";
  document.getElementById("mLeft").style.display="block";
  document.getElementById("mRight").style.display="none";
  
   
    break;
  case "right":
    document.getElementById("mTop").style.display="none";
  document.getElementById("mBottom").style.display="none";
  document.getElementById("mLeft").style.display="none";
  document.getElementById("mRight").style.display="block";
   
    break;

  }

}