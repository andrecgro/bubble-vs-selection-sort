function animatedBubbleSort(bubble, selection, drawBubble, drawSelection) {
  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  var steps = 0;
  var length = bubble.length;
  (function selectionSort() {
    if (l >= length - k - 1) {
      l = 0;
      k++;
    }
    if (k < length) {
      if (selection[l] > selection[l+1]) {
        // swap itens
        var temp = selection[l];
        selection[l] = selection[l+1];
        selection[l+1] = temp;
        drawSelection(selection, l+1);
      }
      l++;
      setTimeout(bubbleSort, 100);
    } else //fim
      drawSelection(selection);
  })();
  (function bubbleSort() {
    if (j >= length - i - 1) {
      j = 0;
      i++;
    }
    if (i < length) {
      if (bubble[j] > bubble[j+1]) {
        // swap itens
        var temp = bubble[j];
        bubble[j] = bubble[j+1];
        bubble[j+1] = temp;
        drawBubble(bubble, j+1);
      }
      j++;
      setTimeout(selectionSort, 100);
    } else //fim
      drawBubble(bubble);
  })();
}

function ordenaRandom(){
  var bubble = [];
  var selection = [];
  for (var i = 0; i < 20; i++) {
    bubble.push(Math.floor((Math.random() * 100) + 1));
  }
  selection = bubble;
  animatedBubbleSort(bubble, selection, function draw(bubble, j) {
    document.getElementById("bubble-sort").innerHTML = bubble.map(function(v, i) { return i===j ? "<span>" + v + "</span>" : v; }).join(", ");
  }, function draw(selection, l) {
    document.getElementById("selection-sort").innerHTML = selection.map(function(s, k) { return k===l ? "<span>" + s + "</span>" : s; }).join(", ");
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
}

//alert("Você pode escolher entre ordenar uma lista de valores randômicos, ou uma lista com elementos de sua escolha!");
