function animatedBubbleSort(items, drawCallback) {
  var i = 0;
  var j = 0;
  var length = items.length;
  (function nextIteration() {
    if (j >= length - i - 1) {
      j = 0;
      i++;
    }
    if (i < length) {
      if (items[j] > items[j+1]) {
        // swap itens
        var temp = items[j];
        items[j] = items[j+1];
        items[j+1] = temp;
        drawCallback(items, j+1);
      }
      j++;
      setTimeout(nextIteration, 100);
    } else //fim
      drawCallback(items);
  })();
}

function ordenaRandom(){
  var list = [];
  for (var i = 0; i < 20; i++) {
    list.push(Math.floor((Math.random() * 100) + 1));
  }
  animatedBubbleSort(list, function draw(items, j) {
    document.getElementById("bubble-sort").innerHTML = items.map(function(v, i) { return i===j ? "<span>" + v + "</span>" : v; }).join(", ");
  });
}

function ordenaCustom(){
  var listAux = document.getElementById("orderingVector").value.split(",");
  if(listAux[0] === ""){
    return alert("Favor inserir números no campo de texto");
  }
  var list = [];
  for (var i = 0; i < listAux.length; i++) {
    list.push(parseInt(listAux[i]));
  }
  animatedBubbleSort(list, function draw(items, j) {
    document.getElementById("bubble-sort").innerHTML = items.map(function(v, i) { return i===j ? "<span>" + v + "</span>" : v; }).join(", ");
  });
}

//alert("Você pode escolher entre ordenar uma lista de valores randômicos, ou uma lista com elementos de sua escolha!");
