'use strict';

/**
 * Deal.js controller
 *
 * @description: A set of functions called "actions" for managing `Deal`.
 */

module.exports = {

  /**
   * Retrieve deal records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.deal.search(ctx.query);
    } else {
      return strapi.services.deal.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a deal record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.deal.fetch(ctx.params);
  },

  /**
   * Count deal records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.deal.count(ctx.query);
  },

  /**
   * Create a/an deal record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.deal.add(ctx.request.body);
  },

  /**
   * Update a/an deal record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.deal.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an deal record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.deal.remove(ctx.params);
  }
};
