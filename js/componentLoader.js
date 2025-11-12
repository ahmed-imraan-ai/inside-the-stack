$(document).ready(function () {
    function loadComponent(componentUrl, targetSelector, method, callback) {
        fetch(componentUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then((html) => {
                const $target = $(targetSelector);

                if ($target.length === 0) {
                    console.error(
                        `Target element not found: ${targetSelector}`,
                    );
                    return;
                }

                if (method === 'prepend') {
                    $target.prepend(html);
                } else if (method === 'append') {
                    $target.append(html);
                } else {
                    $target.append(html);
                }

                $(document).trigger('componentLoaded', {
                    component: componentUrl,
                });
                if (callback) {
                    setTimeout(() => {
                        callback();
                    }, 10);
                }
            })
            .catch((error) => {
                console.error(
                    `Error loading component ${componentUrl}:`,
                    error,
                );
            });
    }

    loadComponent('/components/header.html', 'main', 'prepend');
    loadComponent('/components/footer.html', 'main', 'append');
});
