var Underlay = {% include js/Underlay.js %}
var PopupGallery = {% include js/PopupGallery.js %}

function init() {
  $(".project .btn-project").each(function(index, element) {
    var node = $(element);
    var template = $("#" + node.data("template") + "-template").text();
    if(!template) { return; }

    var gallery = new PopupGallery(template, Underlay.getDefault());
    node.click(function() {
      gallery.show();
    });
  });

  $(".project").on("mouseenter", function(event) {
    $(event.target).closest(".project").find("button.btn-project").addClass("btn-info");
  });

  $(".project").on("mouseleave", function(event) {
    $(event.target).closest(".project").find("button.btn-project").removeClass("btn-info");
  });
}

init();