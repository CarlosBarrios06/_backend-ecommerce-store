/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {  

    createComment: async (req, res) => {
        const data = req.body;

        try {
            const comment = await Comment.create({
            comment: data.comment,
            genre: data.genre,
            name: data.name,
            productId: data.productId
                
            }).fetch();
            res.send(comment);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    updateComment: async (req, res) => {
        const data = req.allParams();

        try {
            const comment = await Comment.update({ id: data.id }).set({
                comment: data.comment
                
            }).fetch();
            res.send(comment);
        } catch (error) {
            res.status(200).send(error);
        }
    },

    deleteComment: async (req, res) => {
        const data = req.params;

        try {
            const comment = await Comment.destroy({
                id: data.id
            }).fetch();
            res.send(comment);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    getComment: function (req, res) {
        Comment.find()
            .then(function (comment) {
                if (!comment || comment.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': comment
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
    getCommentByProductId: function (req, res) {
        Comment.find({
            productId: req.params.productId
        })
            .then(function (comment) {
                if (!comment || comment.lenght === 0) {
                    return res.send({
                        'succes': false,
                        'message': 'no records found'
                    })
                }
                return res.send({
                    'succes': true,
                    'message': 'records fetched',
                    'data': comment
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
            const comment = await Comment.findOne({
                id: req.params.id
            });
            return res.ok(comment);
        } catch (error) {
            return res.serverError(error);
        }
    },
    
    deleteCommentByProductId: async (req, res) => {
        const data = req.params;

        try {
            const comment = await Comment.destroy({
                productId: data.productId
            }).fetch();
            res.send(comment);
        } catch (error) {
            res.status(200).send(error);
        }
    },
    async findOneByName(req, res) {
        try {
            const comment = await Comment.findOne({
                name: req.params.name
            });
            return res.ok(comment);
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


