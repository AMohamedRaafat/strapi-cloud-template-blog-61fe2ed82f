'use strict';

/**
 * ncc router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ncc.ncc');
