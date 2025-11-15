if ($('#toolGrid').length) {
    const $grid = $('#toolGrid');
    let isFirstLoad = true;
    // Function to update the detail view
    function updateToolDetail($item) {
        const title = $item.data('title');
        const desc = $item.data('desc');
        const link = $item.data('link');
        const icon = $item.data('icon');

        // Update the Detail area
        $('#detailTitle').text(title);
        $('#detailDescription').text(desc);
        $('#detailLink')
            .attr('href', link)
            .text('Visit ' + title + ' →');
        $('#detailIcon img')
            .attr('src', icon)
            .attr('alt', title + ' icon');

        // Update the active state on the grid items
        $grid.find('.tool-item').removeClass('active');
        $item.addClass('active');
        if (!isFirstLoad) {
            $('html, body').animate(
                {
                    scrollTop: $('#toolDetailView').offset().top - 50,
                },
                500,
            );
        } else {
            isFirstLoad = false;
        }
    }

    // Initialize with the first active item
    const $initialItem = $grid.find('.tool-item.active').first();
    if ($initialItem.length) {
        updateToolDetail($initialItem);
    }

    // Click handler for the grid items
    $grid.on('click', '.tool-item', function () {
        updateToolDetail($(this));
    });
}
