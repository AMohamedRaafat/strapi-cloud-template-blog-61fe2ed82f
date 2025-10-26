'use strict';

/**
 * ncc controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ncc.ncc');
