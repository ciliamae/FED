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
//   hamburger menu