'use strict';

/**
 * crepe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crepe.crepe');
