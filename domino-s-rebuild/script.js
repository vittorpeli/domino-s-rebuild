function abrirCard(categoryID) {

  var foods;

  foods = document.querySelectorAll('.food');
  foods.forEach(function (food) {
    food.style.display = 'none';
  })

  var selected = document.getElementById(categoryID);
  if (selected) {
    selected.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {

  var pizzaLink = document.querySelector('.menu-col:nth-child(1)');
  var sanduichesLink = document.querySelector('.menu-col:nth-child(2)');
  var acompanhamentosLink = document.querySelector('.menu-col:nth-child(3)');

  pizzaLink.addEventListener('click', function() {
    abrirCard('pizza');
  })

  sanduichesLink.addEventListener('click', function() {
    abrirCard('sandu');
  })

  acompanhamentosLink.addEventListener('click', function() {
    abrirCard('acomp')
  })

  abrirCard('pizza');
})