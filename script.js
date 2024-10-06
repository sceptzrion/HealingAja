function myFunction() {
    var x = document.getElementById("mynav_links");
    if (x.className === "nav__links") {
      x.className += " responsive";
    } else {
      x.className = "nav__links";
    }
  }