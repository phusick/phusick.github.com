(function($) {

  var Underlay = function() {
    this.create();
  }

  Underlay.prototype.create = function() {
    this.domNode = $('<div class="underlay" style="display:none;"></div>');
    $("body").prepend(this.domNode);
  }

  Underlay.prototype.show = function() {
    this.domNode.css({ display: "block" });
    $("body").addClass("no-scroll");
  }

  Underlay.prototype.hide = function() {
    this.domNode.css({ display: "none" });
    $("body").removeClass("no-scroll");
  }

  Underlay._instance = null;

  Underlay.getDefault = function() {
    if (Underlay._instance === null) {
      Underlay._instance = new Underlay();
    }
    return Underlay._instance;
  }

  return Underlay;

})(jQuery);