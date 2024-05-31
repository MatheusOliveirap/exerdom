function adicionaritem(){
   var item = document.getElementById("item");
   var lista = document.getElementById("lista");
   var novoitem = document.createElement("li")
   novoitem.textContent = item.value;
   lista.appendChild(novoitem);

}