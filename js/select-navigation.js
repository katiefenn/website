;(function ( $, window, document, undefined ) {

    var pluginName = "selectNavigation",
        defaults = {
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Basic redirect based on selected option value
            $(this.element).on('change', function () {
                if($(this).val() != 'Go to...') {
                    window.location.href = $(this).val();
                }
            });
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );