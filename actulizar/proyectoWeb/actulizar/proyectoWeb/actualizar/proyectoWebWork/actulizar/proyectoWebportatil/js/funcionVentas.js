function easyTabs(){
  hora()
  //ocultarform();
}

function allowDrop(ev) {
  ev.preventDefault();
  
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  document.getElementById("erasetab").style.visibility= 'visible';
} 

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  eratabform(data);
  document.getElementById(data).remove();
  document.getElementById("erasetab").style.visibility= 'hidden';
  
}

function eratabform(indetab){
  var groups = document.querySelectorAll('.t-tab');
  let forera = document.querySelectorAll('.t-form');
  var quit;
  
    if (groups.length > 0) {
      for (i = 0; i < groups.length; i++) {
        if(groups[i].id == indetab){
          forera[i].remove();
        }
      }
  
      for(j=0; j< forera.length; j++){
          if(quit == j){
            alert("equals");
      }
    }
}
}




function hora(){
  let hoy = new Date();
  let dhoy = hoy.getDate();
   let mhoy =hoy.getMonth()+1;
   let ahoy = hoy.getFullYear();
   let hour = hoy.getHours();
   let min = hoy.getMinutes();
   if(mhoy < 10){ mhoy = "0" + mhoy};
   if(min < 10){ min = "0" + min};

  document.getElementById("dia").innerHTML = dhoy + "/" + mhoy + "/" + ahoy ;
  document.getElementById("hora").innerHTML =   hour + ":" + min;
  var time = setTimeout(function(){ hora() }, 500);
}

function ocultarform(){
  document.getElementById("formulario").style.visibility ="hidden";
}

function newtab(){
  
  if ( typeof nta == 'undefined' ) {
    nta = 4;
  }

  const newli = document.createElement("li");
  newli.setAttribute('class','t-tab');
  newli.id="tab" +nta;
  newli.draggable="true";
  newli.setAttribute("ondragstart","drag(event)");
  const textNode = document.createTextNode("Venta " + nta);
  newli.appendChild(textNode);

  const newul = document.querySelector('#ulmain');
  newul.insertBefore(newli,newul.children[newul.children.length-1]);
  creaform(nta);
  
  ++nta;

}


function creaform(inc){
  let formu = document.getElementById("formulario");
  let newformu=formu.cloneNode(true);
  newformu.setAttribute('class','t-form');
  newformu.id= "form" + inc;

  const newsel = document.querySelector('#forms');
  newsel.insertBefore(newformu,newsel.children[newsel.children.length-1]);
}


function enlistar(selectid, tableid){
  let entrada = document.getElementById(selectid).value;
  if ( typeof aux == 'undefined' ) {
    aux = 0;
  }
  if(entrada != ""){
  const tr = document.createElement("tr");
  tr.id= "fila" + aux;

  const table = document.querySelector(tableid);
  table.appendChild(tr);

  document.getElementById(tr.id).innerHTML= "<td id='column" + aux+1 +"'></td> <td id ='column"+ aux+2 +"'></td> <td id='column"+ aux+3 +"'></td>"
 
  document.getElementById('column' +aux+1).innerHTML= entrada;
  document.getElementById('column' + aux+2).innerHTML= 'precio here';
  document.getElementById('column' + aux+3).innerHTML= "<input type='number' class='price' value='1'> ";

  }
  document.getElementById(selectid).value= "";
  ++aux;
  
}

function eraseall(){
  eraseall1("tablesnack");
  eraseall1("drinkTable");

}

function eraseall1( valor4) {
  const list = document.getElementById(valor4);
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function erase(valor3){
  if (valor3.length > 0) {
    for (i = 0; i < valor3.length; i++) {      
      valor3[i].removeChild();
    }
  }
}



















































/*function easyTabs() {
    var groups = document.querySelectorAll('.t-container');
    if (groups.length > 0) {
      for (i = 0; i < groups.length; i++) {
        var tabs = groups[i].querySelectorAll('.t-tab');
        for (t = 0; t < tabs.length; t++) {
          tabs[t].setAttribute("index", t+1);
          if (t == 0) tabs[t].className = "t-tab selected";
        }
        var contents = groups[i].querySelectorAll('.t-content');
        for (c = 0; c < contents.length; c++) {
          contents[c].setAttribute("index", c+1);
          if (c == 0) contents[c].className = "t-content selected";
        }
      }
      var clicks = document.querySelectorAll('.t-tab');
      for (i = 0; i < clicks.length; i++) {
        clicks[i].onclick = function() {
          var tSiblings = this.parentElement.children;
          for (i = 0; i < tSiblings.length; i++) {
            tSiblings[i].className = "t-tab";
          }
          this.className = "t-tab selected";
          var idx = this.getAttribute("index");
          var cSiblings = this.parentElement.parentElement.querySelectorAll('.t-content');
          for (i = 0; i < cSiblings.length; i++) {
            cSiblings[i].className = "t-content";
            if (cSiblings[i].getAttribute("index") == idx) {
              cSiblings[i].className = "t-content selected";
            }
          }
        };
      }
    }

   hora();
  }*/


  
 
  


