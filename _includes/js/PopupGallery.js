(function($) {

  var PopupGallery = function(template, underlay) {
    this.template = template;
    this.underlay = underlay;
    this.wrapper = null;
    this.carousel = null;
  }

  PopupGallery.prototype.create = function() {
    this.carouselNode = $(this.template);
    this.closeNode = $('<button class="btn btn-warning btn-large btn-close">Close</button>');

    this.wrapper = $('<div class="popup-wrapper" style="display:none;"></div>');
    this.wrapper.append(this.carouselNode);
    this.wrapper.append(this.closeNode);

    var self = this;
    this.wrapper.click(function(e) {
      if (e.target === this) {
        self.hide();
      }
    });

    this.closeNode.click(function(e) {
      self.hide();
    });
  }

  PopupGallery.prototype.destroy = function() {
    // TODO: implement
  }

  PopupGallery.prototype.show = function() {
    if (this.wrapper === null) { this.create(); }

    $("body").prepend(this.wrapper);
    this.wrapper.css({ display: "block" });

    if (this.carousel === null) {
      this.carousel = this.carouselNode.touchCarousel({       
        itemsPerPage: 1,        
        scrollbar: true,
        scrollbarAutoHide: true,
        scrollbarTheme: "dark",       
        pagingNav: false,
        snapToItems: false,
        scrollToLast: true,
        useWebkit3d: true,        
        loopItems: false
      }).data('touchCarousel');
    }

    this.underlay.show();
    this.center();

    var self = this;
    $(window).resize(function() {
      self.center();
    });
  }

  PopupGallery.prototype.hide = function() {
    this.wrapper.detach();
    this.underlay.hide();
    $(window).off("resize");
  }

  PopupGallery.prototype.center = function() {
    var node = this.carouselNode;
    var viewport = $(window).height();
    var carousel = node.outerHeight();

    var top = Math.floor((viewport - carousel) / 2);
    if (top < 0) { top = 0; }

    node.css("top", top + "px");
  }

  return PopupGallery;

})(jQuery);