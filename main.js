document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = nav.style.display === 'block';
      nav.style.display = open ? 'none' : 'block';
    });
  }
});
