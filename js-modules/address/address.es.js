;(($, _) => {
    'use strict';

    /**
     * Shipping address functional and validation
     */
    class ShippingAddress extends FormValidation {
        /**
         * Constructor (init events)
         */
        constructor(form, options) {
            super(form, options);

            // Validate Options
            this.optionsValidate = {
                fullMessages: false
            };

            // Constants
            this.ADDRESS_TEMPLATE = $('#template-checkout-address').html();
            this.addressStorage = Object.keys(jsConfig.checkout.customerAddresses).length > 0
                ? jsConfig.checkout.customerAddresses
                : {};

            this.renderInitialAddresses();

            $(document)
                .on('click', '.ujs-add-address, .ujs-hide-new-address-form', (e) => {
                    this.toggleAddAddressForm(e.currentTarget);
                })
                .on('click', '.ujs-edit-address', (e) => {
                    const $target = $(e.currentTarget);
                    $target.hide();
                    $target.parent().find('.ujs-address-delete-trigger').hide();
                    this.insertEditAddressForm($target);
                })
                .on('click', '.ujs-save-new-address', (e) => {
                    const $form = $(e.currentTarget).closest('.ujs-co-shipping-form'),
                        $formData = $form.serializeArray(),
                        type = $(e.currentTarget).closest('.ujs-addresses-wrapper').data('type');

                    window.Loader.show();
                    window.SDK.Checkout.saveCustomerAddress($formData)
                        .done((response) => {
                            this.toggleAddAddressForm($(e.currentTarget).closest('.ujs-new-address-form').prev('.ujs-hide-new-address-form').get());
                            this.insertOrUpdateAddress(response, type);
                        })
                        .fail((response) => {
                            $.each(response.responseJSON.message, (i, val) => {
                                $form.find('[data-error="' + i + '"]').text(val);
                            });
                        });

                    this.checkExistAddress();
                })
                .on('click', '.ujs-save-address', (e) => {
                    const $form = $(e.currentTarget).closest('.ujs-co-shipping-form'),
                           type = $(e.currentTarget).closest('.ujs-addresses-wrapper').data('type');

                    window.Loader.show();
                    window.SDK.Checkout.saveCustomerAddress($(e.currentTarget).closest('form').serializeArray())
                        .done((response) => this.insertOrUpdateAddress(response, type))
                        .fail((response) => {
                            $.each(response.responseJSON.message, function (i, val) {
                                $form.find('[data-error="' + i + '"]').text(val);
                            });
                        });
                })
                .on('click', '.ojs-cancel-update-address', (e) => {
                    let $form = $(e.currentTarget).closest('form');
                    $form.slideUp('fast');
                    $form.prev().show();
                    $form.prev().parent().find('.ujs-address-delete-trigger').show();
                })
                .on('click', '.ujs-address-delete-trigger', (e) => {
                    $('.js-delete-address').find('.js-error-form').html('');
                    $('.ujs-delete-address').data('address-id', $(e.currentTarget).data('address-id'));
                })
                .on('click', '.ujs-delete-address', (e) => {
                    this.deleteAddress($(e.currentTarget).data('address-id'));
                    this.checkExistAddress();
                })
                .on('change', '.ujs-customer-shipping-address-radio', (e) => {
                    if ($(e.currentTarget).prop('checked')) {
                        this.loadShippingMethods($(e.currentTarget).val());
                    }
                })
                .on('click', '.ujs-button-shipping-save-logged-in', () => this.renderAddresses('billing'));
        }

        getConstraints() {
            return {
                'firstname': {
                    presence: {
                        message: 'Please fill the field'
                    }
                },

                'lastname': {
                    presence: {
                        message: 'Please fill the field'
                    }
                },

                'telephone': {
                    presence: {
                        message: 'Please fill the field'
                    }
                },

                'street[]': {
                    presence: {
                        message: 'Please fill the field'
                    }
                },

                'city': {
                    presence: {
                        message: 'Please fill the field'
                    }
                },

                'postcode': {
                    presence: {
                        message: 'Please fill the field'
                    }
                }
            };
        }

        /**
         * Render errors
         *
         * @param error {object}
         */
        renderErrors(error) {
            super.renderErrors(error);
            const $firstErrorEl = this.$form.find('.flag-error').first();

            $('body').scrollTop($firstErrorEl.offset().top - 120);
            $firstErrorEl.focus();
        }

        /**
         * Check if we are on shipping step now. If not, then step is billing
         *
         * @returns {boolean}
         */
        _isShippingStep() {
            return $('.ojs-tab-target[data-rel="checkout-shipping"]').is(':visible');
        }

        /**
         * Return wrapper element of addresses based on current step (shipping or billing)
         *
         * @returns {jQuery}
         */
        getStepAddressWrapper() {
            return this._isShippingStep() ? $('.ujs-shipping-addresses-wrapper') : $('.ujs-billing-addresses-wrapper');
        }

        /**
         * Return existing form for address or false if form is not created yet
         *
         * @param {int|string|null} addressId
         * @returns {jQuery|boolean}
         */
        getExistingForm(addressId) {
            const $wrapper = this.getStepAddressWrapper();
            const $form = addressId ? $wrapper.find('.ojs-address-form-' + addressId) : $wrapper.find('.ujs-new-address-form');

            if (!$form.length) {
                return false;
            }

            $form.slideDown('fast');
            $form.find('input').val('');
            return $form;
        }

        /**
         * Make address form and insert it after target element
         *
         * @param {jQuery} $target Target element, e.g. "Edit" or "Add address" links
         * @returns {jQuery}
         */
        insertAddressForm($target) {
            const $form = $('#ojs-checkout-shipping-form').clone();

            $form.removeAttr('id');

            // Clear form values
            $form.find('input').val('');

            // Remove "shiping" from input names
            $.each($form.find('input, select'), (index, element) => {
                let name = $(element).attr('name');

                name = name.replace('shipping[', '')
                           .replace(']', '');

                $(element).attr('name', name);
            });

            // Remove unneeded elements
            $form.find('.ujs-shipping-methods, .ujs-button-shipping-save, .select2').remove();

            // Insert form
            $form.insertAfter($target);
            $form.slideDown('fast');

            // Instantiate Select2
            $form.find('.ojs-country-select-element, .ojs-region-select-element')
                .removeClass('select2-hidden-accessible')
                .select2();

            return $form;
        }

        /**
         * Insert form for new address
         *
         * @param {jQuery} $target
         */
        insertAddAddressForm($target) {
            let $form = this.getExistingForm(null);

            if ($form) {
                return false;
            }

            $form = this.insertAddressForm($target);
            $form.addClass('ujs-new-address-form');

            // Add save button
            $form.append(
                `<div class="actions">
                    <div class="btn btn-dark-purple ch-btn-send-new-address ujs-save-new-address js-submit-form">${(this._isShippingStep() ? 'Send to this address' : 'Add billing address')}</div>
                </div>`
            );

            // Init Validation
            this.$form = $form;
            this.init();
        }

        /**
         * Insert edit form for address
         *
         * @param {jQuery} $target
         */
        insertEditAddressForm($target) {
            const addressId = $target.closest('.ujs-address-container').find('.ujs-customer-address-radio').val();
            let $form = this.getExistingForm(addressId);

            if ($form) {
                return false;
            }

            $form = this.insertAddressForm($target);
            $form.addClass('ojs-address-form-' + addressId);

            /** @param {object} AddressStorage */
            if (!this.addressStorage.hasOwnProperty(addressId)) {
                return false;
            }

            /**
             * Fill form with values
             *
             * @param {{country_id: string, region_id: int}} address
             */
            const address = this.addressStorage[addressId];

            $.each(address, (name, value) => {
                $form.find(name === 'street' ? 'input[name="' + name + '[]"]' : 'input[name="' + name + '"]').val(value);
            });

            // Select country and region
            $form.find('.ojs-country-select-element').val(address.country_id).change();

            if (address.region_id) {
                $form.find('.ojs-region-select-element').val(address.region_id).change();
            }

            // Add address ID
            $form.append('<input type="hidden" name="id" value="' + addressId + '">');

            // Add update and cancel buttons
            $form.append(`<div class="actions">
                             <div class="btn btn-dark-purple ch-btn-send-new-address js-submit-form ujs-save-address">Update address</div>
                             <div class="btn btn-white ch-btn-cancel-update-address ojs-cancel-update-address">Cancel ></div>
                         </div>`);

            // Init Validation
            this.$form = $form;
            this.init();
        }

        /**
         * Render template with address object and return address html
         *
         * @param {object} address
         * @param {string} type
         * @returns {string}
         */
        getAddressHtml(address, type) {
            return _.template(this.ADDRESS_TEMPLATE)({address: address, type: type});
        }

        /**
         * Render existing customer addresses
         */
        renderInitialAddresses() {
            this.renderAddresses('shipping');

            const $checkoutBtn = $('.js-btn-continue-checkout'),
                   assignedAddressId = $('.ujs-shipping-addresses-wrapper').data('current-address-id'),
                   isChangedAddressExist = ($(`#shipping-address-${assignedAddressId}`).length > 0),
                   $address = assignedAddressId && isChangedAddressExist ? $(`#shipping-address-${assignedAddressId}`) : $('.ujs-customer-shipping-address-radio').first();

            if ($address.length === 0) {
                $checkoutBtn.prop('disabled', true);
                this.toggleAddAddressForm('.ujs-add-shipping-address');
                return false;
            }

            $address.prop('checked', true).change();
            this.checkExistAddress();

            // if customer didn't choose some address
            if (assignedAddressId !== "" && isChangedAddressExist) {
                window.SDK.Checkout.getAvailableShippingMethods(null, $address.val())
                    .done((response) => Gevent.publish('checkout:shipping_methods:received', response))
                    .always(() => window.Loader.hide());
            } else {
                this.loadShippingMethods($address.val());
            }
        }

        /**
         * Render list of addresses shipping/billing
         * @param {string} type
         */
        renderAddresses(type) {
            $.each(this.addressStorage, (id, address) => {
                $(this.getAddressHtml(address, type)).insertBefore($(`.ujs-add-${type}-address`));
            });
        }

        /**
         * Load shipping methods for an address
         *
         * @param addressId
         */
        loadShippingMethods(addressId) {
            window.SDK.Checkout.assignCustomerAddressToShipping($('.ujs-customer-address-radio:checked').val())
                .done(() => {
                    let address = $('.ujs-customer-address-radio:checked').parent().find('.chs-data-list').html();
                    $('#shipping_address .chs-data-list').html(address);
                    window.SDK.Checkout.getAvailableShippingMethods(null, addressId)
                        .done((response) => Gevent.publish('checkout:shipping_methods:received', response));
                    })
                .always(() => window.Loader.hide());
        }

        /**
         * Show or hide address form
         */
        toggleAddAddressForm(element) {
            let $triggerElement = $(element),
                $form = $triggerElement.next('.ujs-new-address-form');

            if ($form.length && $form.is(':visible')) {
                $triggerElement
                    .text($triggerElement.text().replace('-', '+'))
                    .removeClass('ujs-hide-new-address-form')
                    .addClass('ujs-add-address');

                $form.slideUp('fast');
            } else {
                $triggerElement
                    .text($triggerElement.text().replace('+', '-'))
                    .removeClass('ujs-add-address')
                    .addClass('ujs-hide-new-address-form');

                this.insertAddAddressForm($triggerElement);
            }
        }

        /**
         * Update edited address or insert new one
         *
         * @param {{address: object, isNew: boolean, success: int}} response
         * @param {string} type
         */
        insertOrUpdateAddress(response, type) {
            if (!response.success) {
                return false;
            }

            let $wrapper = this.getStepAddressWrapper(),
                address = response.address;

            if (response.isNew) {
                $(this.getAddressHtml(address, type)).insertBefore($(`.ujs-add-${type}-address`));
            } else {
                $(`.ujs-address-${address.entity_id}`).replaceWith(this.getAddressHtml(address, type));
            }

            // Updating or adding address to addresses list
            this.addressStorage[address.entity_id] = address;

            $wrapper
                .find('.ujs-address-' + address.entity_id)
                .find('.ujs-customer-address-radio')
                .prop('checked', true)
                .change();

            this.checkExistAddress();
        }

        /**
         * Delete customer address by id
         *
         * @param id {string}
         */
        deleteAddress(id) {
            const address = this.addressStorage;

            $.each(Object.keys(address), (i, val) => {
                if (val !== id) {
                    delete address[id];
                }
            });

            window.Loader.show();
            window.SDK.Customer.deleteAddress(id)
                .done(() => {
                    $(`.ujs-address-${id}`).remove();
                    this.checkExistAddress();
                    window.Popup.hideAllPopups();

                    if ($('.ujs-customer-shipping-address-radio:checked').length === 0) {
                        $('.ujs-customer-shipping-address-radio').first().prop('checked', true);
                    }
                })
                .fail((response) => {
                    $('.js-delete-address').find('.js-error-form').html(response.responseJSON.message);
                })
                .always(() => window.Loader.hide());
        }

        /**
         * Check existing addresses
         */
        checkExistAddress() {
            const $triggerDrop = $('.ujs-hide-new-address-form');

            if ($('.ujs-address-container').length >= 1) {
                $('.ujs-new-address-form').hide();
                $triggerDrop.text($triggerDrop.text().replace('-', '+'));
            } else {
                $('.ujs-new-address-form').show();
                $('.js-btn-continue-checkout').prop('disabled', true);
            }
        }
    }

    $(() => new ShippingAddress($('.js-form-shipping-address')));

})(jQuery, _u);