/**
 * ComentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    createComent: async (req, res) => {
        const data = req.body;

        try {
            const coment = await Coment.create({
            coment: data.coment,
            genre: data.genre,
            name: data.name,
            productId: data.productId
                
            }).fetch();
            res.send(coment);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    updateComent: async (req, res) => {
        const data = req.allParams();

        try {
            const coment = await Coment.update({ id: data.id }).set({
                coment: data.coment
                
            }).fetch();
            res.send(coment);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    deleteComent: async (req, res) => {
        const data = req.params;

        try {
            const coment = await Coment.destroy({
                id: data.id
            }).fetch();
            res.send(coment);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    getComent: function (req, res) {
        Coment.find()
            .then(function (coment) {
                if (!coment || coment.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': coment
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
    getComentByProductId: function (req, res) {
        Coment.find({
            productId: req.params.productId
        })
            .then(function (coment) {
                if (!coment || coment.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': coment
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
            const coment = await Coment.findOne({
                id: req.params.id
            });
            return res.ok(coment);
        } catch (error) {
            return res.serverError(error);
        }
    },
    
    deleteComentByProductId: async (req, res) => {
        const data = req.params;

        try {
            const coment = await Coment.destroy({
                productId: data.productId
            }).fetch();
            res.send(coment);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    async findOneByName(req, res) {
        try {
            const coment = await Coment.findOne({
                name: req.params.name
            });
            return res.ok(coment);
        } catch (error) {
            return res.serverError(error);
        }
    },
   
    
    // upload : function (req, res) {
    //     req.file('file').upload({
    //         dirname: 'C:\Users\50587\Documents\Proyectos\Proyecto-de-ecomerce\ecomerce-store-backend\ecomerce-back-end\assets\images',
    //         maxBytes:100000
    //     },
    //         function (err, file) {
    //         if(err) console.log(err);
    //         res.json({
    //             "status":"file upload succsessfully", "file":file
    //         })
    //       })
    // }
        
};


