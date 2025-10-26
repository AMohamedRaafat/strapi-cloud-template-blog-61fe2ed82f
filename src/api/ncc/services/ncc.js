'use strict';

/**
 * ncc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ncc.ncc');
