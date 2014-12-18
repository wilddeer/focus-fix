/* focus-fix | https://github.com/wilddeer/focus-fix/ | CC0 */
(function() {
    var mouseFocusedClass = 'is-mouse-focused';
    
    document.body.addEventListener('mousedown', function(event) {
        //wait for `document.activeElement` to change
        setTimeout(function() {
            //find focused element
            var activeElement = document.activeElement;

            //if found and it's not body...
            if (activeElement && activeElement !== document.body) {
                //add special class, remove it after `blur`
                activeElement.className += ' ' + mouseFocusedClass;
                
                activeElement.addEventListener('blur', function(e) {
                    e.target.removeEventListener(e.type, arguments.callee);

                    activeElement.className = activeElement.className.replace(new RegExp('(\\s+|^)'+mouseFocusedClass+'(\\s+|$)', 'g'), ' ').replace(/^\s+|\s+$/g, '');
                });
            }
        }, 0);
    });
})();
