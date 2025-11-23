function initHeader() {
    const $menuToggle = $('#menuToggle');
    const $mainNav = $('#mainNav');
    if (PAGE) {
        const pageId = '#hnav-' + PAGE;
        $(pageId).addClass('active');
    }
    $menuToggle.on('click', function () {
        $(this).toggleClass('is-active');
        $mainNav.toggleClass('is-open');

        const isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !isExpanded);

        $('body').toggleClass('no-scroll');
    });
}
function initFooter() {
    const $scrollTopBtn = $('#scrollTopBtn');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $scrollTopBtn.fadeIn();
        } else {
            $scrollTopBtn.fadeOut();
        }
    });

    $scrollTopBtn.on('click', function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            500,
        );
        return false;
    });
}
function hideLoader() {
    const $loader = $('#loaderWrapper');
    if ($loader.length) {
        $loader.css('opacity', 0);
        setTimeout(function () {
            $loader.remove();
            $('body').css('overflow', 'visible');
        }, 500);
    }
}
$(document).on('componentLoaded', function (event, data) {
    if (data.component === '/components/header.html') {
        initHeader();
        setTimeout(() => {
            hideLoader();
        }, 300);
    }
    if (data.component === '/components/footer.html') {
        initFooter();
    }
});
