/* focus-fix | https://github.com/wilddeer/focus-fix/ | CC0 */
(function() {
    var mouseFocusedClass = 'is-mouse-focused';

    $(document.body).on('mousedown', function() {
        //wait for `document.activeElement` to change
        setTimeout(function() {
            //find focused element
            var activeElement = document.activeElement,
                $activeElement = $(activeElement);

            //if found and it's not body...
            if (activeElement && activeElement !== document.body) {
                //add special class, remove it after `blur`
                $activeElement.addClass(mouseFocusedClass).one('blur', function() {
                    $activeElement.removeClass(mouseFocusedClass);
                });
            }
        }, 0);
    });
})();
