/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
 
module.exports.routes = {
  //USERS
  'POST /create-user': 'Users/createUser',
  'PUT /update-user/:id': 'Users/updateUser',
  'DELETE /delete-user/:id': 'Users/deleteUser',
  'GET /get-users': 'Users/getUser',
  'GET /get-user/:id': 'UsersController.findOne',
  'POST /login/': 'Users/login',
  'POST /verify-user/': 'Users/veryfyUser',
  'POST /verify-password/':'Users/veryfyToChangePassword',

  //PRODUCT
  'POST /create-product': 'Products/createProduct',
  'PUT /update-product/:id': 'Products/updateProduct',
  'DELETE /delete-product/:id': 'Products/deleteProduct',
  'GET /get-products': 'Products/getProduct',
  'GET /get-product/:id': 'ProductsController.findOne',
  'GET /get-product-by-category/:category': 'ProductsController.findByCategory',
  'GET /get-product-by-brand/:brand': 'ProductsController.findByBrand',
  'GET /product-by-name/:name': 'ProductsController.findByName',

  //CATEGORY
  'POST /create-category': 'Category/createCategory',
  'PUT /update-category/:id': 'Category/updateCategory',
  'DELETE /delete-category/:id': 'Category/deleteCategory',
  'GET /get-categories': 'Category/getCategory',
  'GET /get-category/:id': 'CategoryController.findOne',
  'GET /get-product-by-name/:name': 'CategoryController.findByName',

  //ADMIN
  'POST /create-admin/': 'Admin/createAdmin',
  'PUT /update-admin/:id': 'Admin/updateAdmin',
  'DELETE /delete-Admin/:id': 'Admin/deleteAdmin',
  'GET /get-admins': 'Admin/getAdmin',
  'GET /get-admin/:id': 'AdminController.findOne',
  'GET /get-admin-by-name/:name': 'AdminController.findByName',
  'GET /get-admin-by-password/:password': 'AdminController.findByPassword',
  'POST /login-admin/': 'Admin/loginAdmin',

//coment
  'POST /post-comment/': 'Comment/createComment',
  'PUT /update-comment/:id': 'Comment/updateComment',
  'DELETE /delete-comment/:id': 'Comment/deleteComment',
  'GET /get-comments': 'Comment/getComment',
  'GET /get-comment/:id': 'CommentController.findOne',
  'GET /get-comment-by-product-id/:productId': 'CommentController.getCommentByProductId',
  'DELETE /delete-comments/:productId': 'Comment/deleteCommentByProductId',
  'GET /get-comment-by-name/:name': 'CommentController.findOneByName',
  // 'POST /upload-img/': 'Img/upload',


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
