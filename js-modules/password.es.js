;(function($) {
    'use strict';

    /**
     *  Form account settings
     */
    class SettingsForm extends FormValidation {

        /**
         *  form initialize
         */
        init() {
            super.init();
            this.$form.find('.ujs-change-password-button').on('click', () => this.toggleChangeYourPassword());
            this.$form.find('.ujs-settings-input').on('click', () => this.clearErrors());
        }

        /**
         * Get constraints form
         * @returns {{email: {presence: {message: string}, email: {message: (function(*=))}}, firstname: {presence: {message: string}}, lastname: {presence: {message: string}}}}
         */
        getConstraints() {
            const constraints = {
                email: {
                    presence: {
                        message: 'can not be empty'
                    },
                    email: {
                        message: (value) => {
                            return validate.format(`Invalid email address ${value}`, {num: value})
                        }
                    }
                },
                firstname: {
                    presence: {
                        message: 'can not be empty'
                    }
                },
                lastname: {
                    presence: {
                        message: 'can not be empty'
                    }
                }
            };

            if (this.isPasswordActive()) {
                constraints.current_password = {
                    presence: true
                };

                constraints.password = {
                    presence: true
                };

                constraints.confirmation = {
                    presence: true,
                    equality: "password"
                };
            }

            return constraints;
        }

        /**
         * Toggle visible password form
         */
        toggleChangeYourPassword() {
            const $changeButton = this.$form.find('.ujs-change-password-button');
            const $block = this.$form.find('.ujs-wrapper-inputs');

            $block.slideToggle(100);
            $changeButton.toggleClass('active');
            $block.find('.ujs-change_password').val(this.isPasswordActive() ? 1 : 0);

            if (!this.isPasswordActive() && !this.isValid()) {
                this.setSaveButtonEnabled(false);
            }
        }

        /**
         * Check visible password form
         * @returns {*}
         */
        isPasswordActive() {
            return this.$form.find('.ujs-change-password-button').hasClass('active');
        }

        /**
         * Send form
         */
        submit() {
            const data = {};
            const formData = this.$form.serializeArray();

            for (const index in formData) {
                data[formData[index].name] = formData[index].value;
            }

            this.setSaveButtonEnabled(false);

            window.SDK.Customer.save(data)
                .done(() => location.reload())
                .fail((response) => this.renderErrors(response.responseJSON.error))
                .always(() => this.setSaveButtonEnabled(true));
        }
    }

    $(() => {
        new SettingsForm($('.ujs-form-settings'))
    });
    /**
     * End of MyAccount Settings form
     */

})(jQuery);
