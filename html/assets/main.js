$(document).ready(function() {
  // Tooltips
  $(".tooltip").tooltipster();

  // Click rows
  $(".clickableRow").click(function() {
    if (event.which == 1) {
      window.document.location = $(this).attr("href");
    }
  });
});
