function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.li-item')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function dropdownFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.li-item')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function dropdownFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.li-item')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }