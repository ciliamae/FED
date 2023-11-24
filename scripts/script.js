// JavaScript Document

// in en uitklap menus
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleButton');
    var targetElement = document.getElementById('Over-Transavia-elements');

    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      targetElement.style.display = expanded ? 'none' : 'block';
    });
  });

  // The === operator in JavaScript is called the "strict equality" 
  // operator. It is used for comparing two values for equality without performing type coercion. 

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleButton-reis');
    var targetElement = document.getElementById('Jouw-reis-elements');

    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      targetElement.style.display = expanded ? 'none' : 'block';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleButton-informatie');
    var targetElement = document.getElementById('ReisInspiratie-elements');

    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      targetElement.style.display = expanded ? 'none' : 'block';
    });
  });
// If expanded is true, then the expression evaluates to 'none', and it sets targetElement.style.display to 'none'.
// If expanded is false, then the expression evaluates to 'block', and it sets targetElement.style.display to 'block'

// HAMBURGER MENU
const MenuItems = document.getElementById('mobile-menu')
const Menu = document.getElementsByClassName('hamburger-menu')




//TRAVEL CONTAINER
// VLUCHT BOEKEN
const travelBoxButton = document.getElementsByClassName('vlucht-boeken-container')
document.addEventListener('DOMContentLoaded', function(){

})


