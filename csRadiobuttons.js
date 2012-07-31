(function ($) {
    $.widget("cs.radiobuttons", {
        options: {
            checkboxClass: '',       
            activeClass: 'active',         
            onChange: function (radio) {   

            }
        },
        _create: function () {
            var widget = this,
                element = this.element;

            widget.checkboxes = element.find("." + widget.options.checkboxClass);

            widget.checkboxes.click(function () {
                var chkBox = $(this);

                if (widget.active !== chkBox) {
                    widget.options.onChange(chkBox);
                }

                widget.checkboxes.removeClass(widget.options.activeClass);
                chkBox.addClass(widget.options.activeClass);
                widget.active = chkBox;
            });

            widget.checkboxes.first().click();
        },
        getActiveCheckbox: function () {
            return this.active;
        },
        destroy: function () {
            var widget = this;

            widget.checkboxes.unbind();
        }
    });
})(jQuery);​