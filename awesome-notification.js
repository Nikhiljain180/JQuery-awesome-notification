(function ($) {

    $.fn.textNotification = function (text, options) {

        /* Defult Text */
        text = text || 'Loading Please Wait...';

       /* Defult time interval for showing notification */
        var defaults = {
            timeInterval: 0
        };

        $.extend(defaults, options);

        /* Function for showing Status Notification */

        this.show = function () {
            if(this.find('.status-text').length === 0) {
                $(this).prepend('<div class="status-design">' + '<div class="status-text">' + '</div>' + '</div>');
            }
            $(this).find('.status-text').text(text);

            if (defaults.timeInterval > 0) {

                var interval = setTimeout(function () {
                        $(this).find('status-design').css('display', 'none');

                }, defaults.timeInterval)
            }
        };

        /* Function for hiding Status Notification */

        this.hide=function(){
            console.log('nikhil');
            $(this).find('.status-design').css('display', 'none');
        };

        return this;
    };
}(jQuery));

/* Execution for JQuery plugin */
/* Example */
/***********************************************************/
$(document).ready(function () {
    $('body').textNotification('Please Wait...').show();

});
/***********************************************************/



