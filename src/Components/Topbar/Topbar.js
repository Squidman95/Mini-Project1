function loadNavBar() {
    $.get("/topMenu/navigationBar.html", function (data) {
        $("#nav-placeholder").replaceWith(data);
      });
}