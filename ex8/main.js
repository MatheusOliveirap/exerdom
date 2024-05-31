function atualizarStatus() {
    var checkbox = document.getElementById('checkbox');
    var statusParagrafo = document.getElementById('status');
    
    if (checkbox.checked) {
      statusParagrafo.textContent = 'Checkbox marcada';
    } else {
      statusParagrafo.textContent = 'Checkbox desmarcada';
    }
  }