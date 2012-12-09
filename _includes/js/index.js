var Underlay = {% include js/Underlay.js %}
var PopupGallery = {% include js/PopupGallery.js %}

function init() {
  $(".project .btn[data-template]").each(function(index, element) {
    var node = $(element);
    var template = $("#" + node.data("template") + "-template").text();
    if(!template) { return; }

    var gallery = new PopupGallery(template, Underlay.getDefault());
    node.click(function() {
      gallery.show();
    });
  });
}

init();