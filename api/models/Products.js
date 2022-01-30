/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'String', required: true, columnName: 'name' },
    brand: { type: 'String', required: true, columnName: 'brand' },
    category: { type: 'String', required: true, columnName: 'category' },
    price: { type: 'Number', required: true, columnName: 'price' },
    discount: { type: 'Number', columnName: 'discount' },
    details: { type: 'String', columnName: 'details' },
    imgfront: { type: 'String', required: true, columnName: 'imgfront' },
    imgback: { type: 'String', required: true, columnName: 'imgback' },
    imgright: { type: 'String', required: true, columnName: 'imgright' },
    imgleft: { type: 'String', required: false, columnName: 'imgleft' },


    


    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

