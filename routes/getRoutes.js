const db = require("../models");

module.exports = function(app) {
    //Searches for all Users 
    app.get("/api/users", function(req, res) {
        db.users
            .findAll({
                attributes: ['username', 'firstName', 'lastName', 'createdAt']
            })
            .then(function(searchResults){
                console.log(searchResults);
                res.json(searchResults);
            })
            .catch(err=> console.log("error: ", err));
    });

    
    //retrieves info for all info for a single user
    app.get("/api/user/:id", function(req, res) {
        db.users.findOne(
            {
                //need to adjust to exclude personal info
                attributes: [ 'id', 'username', 'firstName', 'lastName', 'createdAt'],
                where: {id: req.params.id}
                
            }).then(function(result) {
                res.json(result);
            })
            .catch(err=> console.log("error: ", err));
    });

    app.get("/api/clients", function(req, res) {
        db.clients.findAll({
            attributes: [
                'id',
                'firstName', 
                'lastName', 
                'streetAddress1',
                'streetAddress2',
                'city',
                'state',
                'ZIP',
                'phone1',
                'phone1Type',
                'phone2',
                'phone2Type',
                'notes',
                'createdAt'
            ]
        })
            .then( function (result) {res.json(result)})
            .catch(err=> console.log("error: ", err));
    })

    //retrieves info for all info for a single user
    // app.get("/api/user/:id", function(req, res) {
    //     db.users.findOne(
    //         {
    //             //need to adjust to exclude personal info
    //             attributes: ['username', 'createdAt'],
    //             where: {id: req.params.id},
    //             include: [{model: db.posts, as: 'posts'}, // [ere] prefix with db.
    //                       {model: db.comments, as: 'comments'}]
    //         }).then(function(result) {
    //             res.json(result);
    //         });
    // });

    //gets n posts with an offset of j support for pagination
    // app.get("/api/search/:n/:j", function(req, res) {
    //     db.posts.findAll({
    //         limit: parseInt(req.params.n), // [ere] add parseInt
    //         offset: parseInt(req.params.j) // [ere] add parseInt
    //     }).then(function(result){
    //         res.json(result);
    //     });
    // });


    //Get post and then get all top level associated comments
    // app.get("/api/post/:id", function(req, res) {
    //     db.posts.findOne({
    //         where: {id: req.params.id},
    //         //only get certain user attributes for security
    //         include: [{
    //             model: db.users, as: 'user', 
    //             attributes: ['username', 'userType', 'badges', 'createdAt']
    //         }]
    //     }).then(function(result) {
    //         let post = result;
    //         db.comments.findAll({
    //             where: {
    //                       postId: req.params.id,
    //                       isChild: false
    //                    },
    //             include: [{
    //                 model: db.users, as: 'user', 
    //                 attributes: ['username', 'userType', 'badges', 'createdAt']
    //             }]
    //         }).then(function(result) {
    //             let fin = {post: post, comments: result};
    //             res.json(fin);
    //         });
    //     });
    // })


    //gets n posts with an offset of j support for pagination orders by upvotes
    // app.get("/api/top-posts/:n/:j", function(req, res) {
    //     const { n, j } = req.params
    //     // console.log("n , J: ", n + " " + j)
    //     db.posts.findAll({
    //         order: [
    //         ['upVotes', 'DESC'], // Order by upvotes descending
    //         ]
    //     }).then(function(result){
    //         // console.log("slice results: ", result.slice(j, parseInt(j) + parseInt(n))); 
    //         res.json( result.slice(j, parseInt(j) + parseInt(n))); // slice the array to start at j and capture n elements
    //     });
    // });
    // [ERE] function copy
    // app.get("/api/top-posts/:n/:j", function(req, res) {
    //     db.posts.findAll({
    //         limit: parseInt(req.params.n), 
    //         offset: parseInt(req.params.j),
    //         order:  sequelize.fn('max', sequelize.col('upVotes'))
    //     }).then(function(result){
    //         res.json(result);
    //     });
    // });

    //gets the children specified for a comment
    // app.get("/api/comments/children/:children", function (req, res) {
    //     let children = req.params.children.split(':');
    //     children = children.map(id => parseInt(id));
    //     db.comments.findAll(
    //         {
    //             where: {
    //                 isChild: true,
    //                 id : {$in: children}
    //             },
    //             include: [{
    //                 model: db.users, as: 'user', 
    //                 attributes: ['username', 'userType', 'badges', 'createdAt']
    //             }],
    //             order: [
    //                 ['upVotes', 'DESC'], // Order by upvotes descending
    //                 ]
    //         }).then(function(result) {
    //             res.json(result);
    //         })
    // });


}