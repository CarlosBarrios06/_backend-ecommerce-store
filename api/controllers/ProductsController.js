/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    createProduct: async (req, res) => {
        const data = req.body;

        try {
            const product = await Products.create({
                name: data.name,
                brand: data.brand,
                category: data.category,
                price: data.price,
                discount: data.discount,
                details: data.details,
                imgfront: data.imgfront,
                imgback: data.imgback,
                imgright: data.imgright,
                imgleft: data.imgleft,
            }).fetch();
            res.send(product);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    updateProduct: async (req, res) => {
        const data = req.allParams();

        try {
            const product = await Products.update({ id: data.id }).set({
                name: data.name,
                brand: data.brand,
                category: data.category,
                price: data.price,
                discount: data.discount,
                details: data.details,
                imgfront: data.imgfront,
                imgback: data.imgback,
                imgright: data.imgright,
                imgleft: data.imgleft,
            }).fetch();
            res.send(product);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    deleteProduct: async (req, res) => {
        const data = req.params;

        try {
            const product = await Products.destroy({
                id: data.id
            }).fetch();
            res.send(product);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    getProduct: function (req, res) {
        Products.find()
            .then(function (products) {
                if (!products || products.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': products
                })
            })
            .catch(function (error) {
                sails.log.debug(error)

                return res.send({
                    'succes': false,
                    'message': 'unable to fetch records'
                })
            });
    },
    async findOne(req, res) {
        try {
            const product = await Products.findOne({
                id: req.params.id
            });
            return res.ok(product);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async findByCategory(req, res) {
        try {
            const product = await Products.find({
                category: req.params.category
            });
            return res.ok(product);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async findByBrand(req, res) {
        try {
            const product = await Products.find({
                brand: req.params.brand
            });
            return res.ok(product);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async findByName(req, res) {
        try {
            const product = await Products.find({
            name: req.params.name
            });
            return res.ok(product);
        } catch (error) {
            return res.serverError(error);
        }
    },
    


};

