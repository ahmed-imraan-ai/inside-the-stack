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

    // Check if the loader exists before attempting to hide
    if ($loader.length) {
        // 1. Set opacity to 0 to start the CSS fade-out transition
        $loader.css('opacity', 0);

        // 2. After the transition time (500ms), remove the element from the DOM
        setTimeout(function () {
            $loader.remove();
            // Ensure body overflow is visible after loading
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
