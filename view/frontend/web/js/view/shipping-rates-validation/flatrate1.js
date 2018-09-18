/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-rates-validation-rules',
        '../../model/shipping-rates-validator/flatrate1',
        '../../model/shipping-rates-validation-rules/flatrate1'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        flatrateShippingRatesValidator,
        flatrateShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('flatrate1', flatrateShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('flatrate1', flatrateShippingRatesValidationRules);
        defaultShippingRatesValidator.registerValidator('flatrate2', flatrateShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('flatrate2', flatrateShippingRatesValidationRules);
        return Component;
    }
);
