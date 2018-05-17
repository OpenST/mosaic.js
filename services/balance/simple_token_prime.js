"use strict";

/**
 * Get simple token prime Balance of an address
 *
 * @module services/balance/simple_token_prime
 */

const rootPrefix = '../..'
  , coreAddresses = require(rootPrefix + '/config/core_addresses')
  , StPrimeKlass = require(rootPrefix + '/lib/contract_interact/st_prime')
  , responseHelper = require(rootPrefix + '/lib/formatter/response')
  , basicHelper = require(rootPrefix + '/helpers/basic_helper')
;

const stPrimeContractAddress = coreAddresses.getAddressForContract('stPrime')
  , stPrime = new StPrimeKlass(stPrimeContractAddress)
;

/**
 * simple token prime balance
 *
 * @param {object} params -
 * @param {string} params.address - Account address
 *
 * @constructor
 */
const SimpleTokenPrimeBalanceKlass = function (params) {
  const oThis = this;

  params = params || {};
  oThis.address = params.address;
};

SimpleTokenPrimeBalanceKlass.prototype = {

  perform: function () {
    const oThis = this;

    try {
      //Validations
      if (!basicHelper.isAddressValid(oThis.address)) {
        let errObj = responseHelper.error({
          internal_error_identifier: 's_b_stp_1',
          api_error_identifier: 'invalid_address',
          error_config: basicHelper.fetchErrorConfig()
        });

        return Promise.resolve(errObj);
      }

      return stPrime.getBalanceOf(oThis.address);
    } catch (err) {
      let errObj = responseHelper.error({
        internal_error_identifier: 's_b_stp_2',
        api_error_identifier: 'something_went_wrong',
        error_config: basicHelper.fetchErrorConfig()
      });

      return Promise.resolve(errObj);
    }
  }
};

module.exports = SimpleTokenPrimeBalanceKlass;