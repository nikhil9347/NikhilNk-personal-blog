if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    var counter = document.getElementById('visitCounter');
    var count = parseInt(counter.innerText) || 0;
    counter.innerText = count + 1;
  }
