'use strict';

/**
 * philosophy-quote service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::philosophy-quote.philosophy-quote');
