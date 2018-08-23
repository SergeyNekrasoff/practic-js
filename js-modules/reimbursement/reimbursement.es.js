;(($) => {
    'use strict';

    /**
     *  Form Reimbursement settings
     */
    class Reimbursement extends FormValidation {

        /**
         *  Form initialize
         */
        init() {
            super.init();
            this.$form.find(this.inputs).on('focus', () => this.clearErrors());

            // Validate Options
            this.optionsValidate = {
                fullMessages: false
            };

            this.file = undefined;
            this.maxFileSize = 5*1024*1024;
            this.uploaderBox = '.ujs-uploader-box';
            this.submitBtn = '.js-submit-form';
            this.inputFileSelector = '.js-file-form';
            this.fakePlaceholderSelector = '.ujs-fake-placeholder';
            this.blockMessageSelector = '.ujs-block-message';
            this.$successMessage = '.js-success-form';
            this.formNoteSelector = '.ujs-form-note';

            this.flagFilled = 'flag-filled';
            this.flagError = 'flag-error';

            this.blockMessageFailedClass   = 'failed';
            this.blockMessageSuccessClass  = 'success';

            $(document)
                .on('change', this.inputFileSelector, (e) => {
                    this._changeFile(e);
                });
        }

        /**
         * Get constraints form
         * @returns {{username: {presence: {message: string}, email: {message: (function(*=))}}, password: {presence: {message: string}}}}
         */
        getConstraints() {
            return {
                'firstname': {
                    presence: {
                        message: 'Firstname is a required field.'
                    }
                },

                'lastname': {
                    presence: {
                        message: 'Lastname is a required field.'
                    }
                },

                'phone': {
                    presence: {
                        message: 'Phone is a required field.'
                    }
                },

                'email': {
                    presence: {
                        message: 'Email is a required field.'
                    },
                    email: {
                        message: function(value) {
                            return validate.format("%{num} is not a valid.", {num: value})
                        }
                    }
                }
            };
        }

        /**
         * Clear all errors
         */
        clearErrors() {
            this.$form.find('.error-text').removeClass('error-active').empty();
            this.$form.find('.js-error-form').html('');
            this.setSaveButtonEnabled(true);
        }

        /**
         * Change uploading file and input placeholder.
         *
         * @param e {event}
         */
        _changeFile(e) {
            $(this.fakePlaceholderSelector).html(
                (this.file = $(e.target).get(0).files[0])
                    ? this.file.name
                    : ''
            );

            this._setUploaderStatus();
        }

        /**
         * Check uploaded file and file size.
         *
         * @returns {boolean}
         */
        _isValidFile() {
            let $validFile = !!(this.file && this.file.size < this.maxFileSize);

            return ($validFile && this._isValidExtFile());
        }

        /**
         * Check file extension
         *
         * @returns {boolean}
         */
        _isValidExtFile() {
            const $extFile = $(this.inputFileSelector).val();

            let ext = $extFile.split('.').pop().toLowerCase(),
                extArr = ['jpg', 'jpeg', 'pdf', 'doc', 'docx', 'gif', 'bmp', 'png'];

            return !($.inArray(ext, extArr) == -1);
        }

        /**
         * Set uploader box status.
         */
        _setUploaderStatus() {
            $(this.uploaderBox).toggleClass(this.flagError, !this._isValidFile());
            $(this.uploaderBox).toggleClass(this.flagFilled, this._isValidFile());
        }

        /**
         * Before submit form to server
         */
        beforeSubmit() {
            if (this.isValid() && this._isValidFile()) {
                this.submit();
            } else {
                this._setUploaderStatus();
            }
        }

        /**
         * Clear all errors
         */
        clearErrors() {
            this.$form.find('.error-text').removeClass('error-active').empty();
            this.$form.find('.js-error-form').html('');
            this.setSaveButtonEnabled(true);
        }

        /**
         * Send form
         */
        submit() {
            const data = new FormData(document.getElementById(this.$form.attr('id')));
            const formData = this.$form.serializeArray();
            const $fileInput = $(this.inputFileSelector);
            const file = $fileInput.get(0).files[0];

            for (const index in formData) {
                data[formData[index].name] = formData[index].value;
            }

            this.clearErrors();

            if (file && file.name) {
                data.append(
                    $fileInput.attr('name'),
                    file,
                    file.name
                );
            }

            this.setSaveButtonEnabled(false);

            // Check is pending login ajax request
            (typeof this.xhr == 'undefined' || this.xhr.state() != 'pending')
                ? this.xhr = this._sendAjax(data)
                : '';
        }

        /**
         * Send ajax to controller
         *
         * @param data
         * @returns {promise}
         */
        _sendAjax(data) {
            window.Loader.show();

            return window.SDK.Customer.submitReimbursement(data)
                .done((response) => {
                    $(this.blockMessageSelector).addClass(this.blockMessageSuccessClass).html('');
                    $(this.formNoteSelector).html(response.message);

                    setTimeout(() => {
                        (data.redirect)
                            ? location.href = data.redirect
                            : location.reload();
                    }, 2000);
                })
                .fail((response) => {
                    this._showErrorForm(response.message);
                    this._showMessages(response.message);
                    $(this.blockMessageSelector).addClass(this.blockMessageFailedClass).html('');
                })
                .always(() => {
                    window.Loader.hide();
                    localStorage.removeItem('plan_details');
                    this.setSaveButtonEnabled(false);
                });
        }

        /**
         * Show message from controller
         *
         * @param message
         */
        _showErrorForm(message) {
            this.$form.find('.js-error-form').html(message);
        }

        /**
         * Method display messages
         *
         * @param messages {object}
         * @returns {string}
         */
        _showMessages(messages) {
            let html = '',
                template = '<p>${message}</p>';

            $.each(messages, (indx, message) => {
                html += template.replace('{message}', message);
            });

            return html;
        };
    }

    $(() => {
        new Reimbursement($('.ujs-reimbursement-form'));
    });

})(jQuery);
