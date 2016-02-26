(function($) {
  $.fn.extend({
    floater: function(options) {
      var opts = $.extend({}, $.fn.floster.defaults, options);
      
      opt.wait = $(this).outerHeight() - $(window).height() * opt.wait;

      $(this).each(function() {
        var self = $(this);
        var d = $(document).height();
        var h = self.outerHeight();

        if (config.fixed === true) {
          self._fixed(config);
          return true;
        }
        self.css("position", "absolute");

        var timer = null;
        $(window).on('scroll', function() {

          clearTimeout(timer);
          timer = setTimeout(function() {
            var s = $(window).scrollTop();
            var w = $(window).height();

            if (Math.abs(s - self.offset().top) < opt.wait) {
              return;
            }
            if(opt.scrollTop.length() >= 1 || opt.scrollFrom.length() >= 1 ) {
              if( s > opt.scrollFrom && s < opt.scrollTo ) {  
                self.stop(true).animate({
                  top: s  - opt.scrollFrom
                }, {
                  duration: opt.speed,
                  easing: opt.easing
                });
              }else if ( s < opt.scrollFrom ) {
                self.stop(true).animate({
                  top: 0
                }, {
                  duration: opt.speed,
                  easing: opt.easing
                });      
              }else if( s > opt.scrollTo ) {
              self.stop(true).animate({
                top: opt.scrollTo - opt.scrollFrom
                }, {
                  duration: opt.speed,
                  easing: opt.easing
                });
              }
            }
          }, 200);
        }).scroll();
      });
      return this;
    },

    _fixed: function(config) {
      if ($.browser.msie && $.browser.version < 7) {
        $(this).css("position", "absolute");
          this[0].style.cssText = "top: expression(documentElement.scrollTop + " + config.marginTop + " + 'px')";
          document.body.style.background = "url(null) fixed";
      } else {
        $(this).css("position", "fixed").css("top", config.marginTop);
      }
    }

  });

  $.fn.showsize.defaults = {
    wait: 1,
    speed: 1000,
    easing: 'swing',
    scrollTop：null,
    scrollFrom: null
  }

})(jQuery);
