// Sticky Navbar
window.onscroll = function() {stickyFunction()};
        
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        
        function stickyFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }

//Responsive Navbar
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }