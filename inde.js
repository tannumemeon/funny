

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yes, I do!');
  });

  document.getElementById('noButton').addEventListener('mouseover', function() {
    moveButton();
  });

  function moveButton() {
    var button = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';