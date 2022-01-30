/**
 * BrandsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    createAdmin: async (req, res) => {
        const data = req.body;

        try {
            const admin = await Admin.create({
                name: data.name,
                password: data.password

            }).fetch();
            res.send(admin);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    updateAdmin: async (req, res) => {
        const data = req.allParams();

        try {
            const admin = await Admin.update({ id: data.id }).set({
                name: data.name,
                password: data.password,

            }).fetch();
            res.send(admin);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    deleteAdmin: async (req, res) => {
        const data = req.params;

        try {
            const admin = await Admin.destroy({
                id: data.id
            }).fetch();
            res.send(admin);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    getAdmin: function (req, res) {
        Admin.find()
            .then(function (admin) {
                if (!admin || admin.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': admin
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
            const admin = await Admin.findOne({
                id: req.params.id
            });
            return res.ok(admin);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async findByName(req, res) {
        try {
            const admin = await Admin.find({
                name: req.params.name
            });
            return res.ok(admin);
        } catch (error) {
            return res.serverError(error);

        };
    },
    async findByPassword(req, res) {
        try {
            const admin = await Admin.findOne({
                password: req.params.password
            });
            return res.ok(admin);
        } catch (error) {
            return res.serverError(error);
        }
    },
    loginAdmin: async (req, res) => {
        let data = req.body;
        try {
            const existingAdmin = await Admin.find({
                name: data.name,
                password: data.password,
            });
            res.send(existingAdmin);
        } catch (error) {
            res.status(200).send(error);
        }
    }
};
