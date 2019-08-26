const db = require("../models");

module.exports = function(app){

  app.post('/api/client', (req, res) => {
    const {firstName, lastName, streetAddress1, streetAddress2, city, state, ZIP, phone1, phone1Type, phone2, phone2Type, email, notes} = req.body
    console.log("this is the client post route: ", req.body);
				const newClient = {
                    'firstName': firstName,
                    'lastName': lastName,
                    'streetAddress1': streetAddress1,
                    'streetAddress2': streetAddress2,
                    'city': city,
                    'state': state,
                    'ZIP': ZIP,
                    'phone1': phone1,
                    'phone1Type': phone1Type,
                    'phone2': phone2,
                    'phone2Type': phone2Type,
                    'notes': notes,
                    'email': email
				}
				db.clients.create(newClient).then(function(client) {
					return res.json(client);
				}).catch(function (err) {
    console.log("findOne Error: ", err);
    });
  });

  app.post('/api/clientContact', (req, res) => {
    const {contactDate, expressedNeed, helpProvided, dollarAmount, giftCards, notes, clientId, userId} = req.body
    console.log("this is the client post route: ", req.body);
				const newClientContact = {
                    'contactDate': contactDate,
                    'expressedNeed': expressedNeed,
                    'helpProvided': helpProvided,
                    'dollarAmount': dollarAmount,
                    'giftCards': giftCards,
                    'notes': notes,
                    'clientId': clientId,
                    'userId': userId
				}
				db.clientContacts.create(newClientContact).then(function(clientContact) {
					return res.json(clientContact);
				}).catch(function (err) {
    console.log("findOne Error: ", err);
    });
  });

  // app.post('/api/commentRoute', (req, res) => {
  //   const {content, isRebuttal, userId, isChild, postId} = req.body
  //   console.log("this is the comment route: ", req.body);
  //     const newComment = {
  //                 'content': content,
  //                 'isRebuttal': isRebuttal,
  //                 'userId': userId,
  //                 'postId': postId,
  //                 isChild: isChild
  //     }
  //     db.comments.create(newComment).then(function(comment) {
  //       return res.json(comment);
  //     }).catch(function (err) {
  //       console.log("findOne Error: ", err);
  //     });
  // })

}
