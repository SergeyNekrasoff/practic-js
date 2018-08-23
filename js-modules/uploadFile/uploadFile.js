    /**
     * add fileItem to list
     * @param {MouseEvent} e - event for click on change file
     * @private
     */
    function _addFileItem(e) {
        const $currentInput = $(e.currentTarget),
            $currentButton = $currentInput.closest('.ujs-ub-button'),
            files = $('.ujs-ub-button').length,
            value = $currentInput.val(),
            size = $currentInput.context.files[0].size,
            $messageBlock = $('.ujs-validation-error');

        if (value && size <= MAX_FILE_SIZE) {
            $currentButton.addClass('flag-uploaded');
            $currentInput.prop('disabled', true);
            $messageBlock.find('.js-size-message').remove();
            $messageBlock.toggle($messageBlock.children().length > 0);
        } else {
            if (!$messageBlock.toggle(true).find('.js-size-message').length) {
                $messageBlock.append(`<li class="js-size-message">Maximum file size is ${String(MAX_FILE_SIZE).charAt(0)} mb</li>`);
            }
            $currentInput.val('');
        }

        if (files < 5) {
            _createFileItem();
        }
    }

    /**
     * Event delegation
     */
    Gevent
        .subscribe('change', '.ujs-ub-input', _addFileItem)