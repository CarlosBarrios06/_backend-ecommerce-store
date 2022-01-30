/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createCategory: async (req, res) => {
        const data = req.body;

        try {
            const category = await Category.create({
                name: data.name,
                
            }).fetch();
            res.send(category);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    updateCategory: async (req, res) => {
        const data = req.allParams();

        try {
            const category = await Category.update({ id: data.id }).set({
                name: data.name,
                
            }).fetch();
            res.send(category);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    deleteCategory: async (req, res) => {
        const data = req.params;

        try {
            const category = await Category.destroy({
                id: data.id
            }).fetch();
            res.send(category);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    getCategory: function (req, res) {
        Category.find()
            .then(function (category) {
                if (!category || category.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': category
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
            const category = await Category.findOne({
                id: req.params.id
            });
            return res.ok(category);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async findByName(req, res) {
        try {
            const category = await Category.find({
                name: req.params.name
            });
            return res.ok(category);
        } catch (error) {
            return res.serverError(error);
        }
    },
    // async findByBrand(req, res) {
    //     try {
    //         const product = await Products.find({
    //             brand: req.params.brand
    //         });
    //         return res.ok(product);
    //     } catch (error) {
    //         return res.serverError(error);
    //     }
    // },

};

