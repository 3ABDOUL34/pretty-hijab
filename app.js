function myFunction() {
    var navigation = document.getElementById("myLinks");
    var headerMenu = document.querySelector(".topnav");

    if (navigation.className === "nav") {
      navigation.className += " responsive";
    //   headerMenu.className += " header-menu";
    } else {
      navigation.className = "nav";
    //   headerMenu.className = "header";
    }
  }