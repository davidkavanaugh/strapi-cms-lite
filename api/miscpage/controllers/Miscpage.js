'use strict';

/**
 * Miscpage.js controller
 *
 * @description: A set of functions called "actions" for managing `Miscpage`.
 */

module.exports = {

  /**
   * Retrieve miscpage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.miscpage.search(ctx.query);
    } else {
      return strapi.services.miscpage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a miscpage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.miscpage.fetch(ctx.params);
  },

  /**
   * Count miscpage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.miscpage.count(ctx.query);
  },

  /**
   * Create a/an miscpage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.miscpage.add(ctx.request.body);
  },

  /**
   * Update a/an miscpage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.miscpage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an miscpage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.miscpage.remove(ctx.params);
  }
};
