var hasEntered = false;

window.addEventListener('scroll', function () {
    let section = document.querySelector('.counter');

    var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

    if (shouldAnimate && !hasEntered) {
        hasEntered = true;
        $('.counter').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'easeOutCirc',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }
});