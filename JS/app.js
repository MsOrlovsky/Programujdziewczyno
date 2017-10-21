console.log("OK!");

'use strict';

document.addEventListener('DOMContentLoaded', function() {



  var forDropdown = document.querySelector('.for-dropdown');
  var dropdownMenu = document.querySelector('.dropdown');
  console.log(forDropdown, dropdownMenu);

  forDropdown.addEventListener('mouseover', function(){
    console.log("mouse");
    dropdownMenu.style.display = 'block';
  });
  forDropdown.addEventListener('mouseout', function(){
    console.log("mouse");
    dropdownMenu.style.display = 'none';});
});
