
use deaconLog_db;

drop table IF EXISTS clientContacts;
drop table IF EXISTS clients;
drop table IF EXISTS users;

/* Add user table w/o Administrator */
SELECT * FROM deaconLog_db.users;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `passwordHashSalt` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `aboutMe` varchar(255) DEFAULT NULL,
  `googleId` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

ALTER TABLE `users`
ADD COLUMN administrator boolean not null default 0 AFTER PasswordHashSalt;

INSERT INTO users (username, firstName, lastName, passwordHashSalt, email)
VALUES ("edfeld", "ed", "einfeld", "$2a$10$UbJfsKl2EJsIXWZJ4UZHD.sIpQWQsrPD3jgyh1jiCb49JSgc1VEti", "edfeld@gmail.com");

INSERT INTO users (username, firstName, lastName, googleId, email)
VALUES ("dardin-dale", "Logan", "Crecraft", "5c3bcfc11f47fc8c57a5e868", "dardinsouffle@gmail.com");

INSERT INTO users (username, firstName, lastName, googleId, email)
VALUES ("hamburder", "dave", "hamberder", "5c3bcfc11f47fc8c57a5e868", "fakeyfake@gmail.com");

INSERT INTO users (username, firstName, lastName, googleId, email)
VALUES ("gaffney", "jeff", "foxworthy", "5c3bcfc11f47fc8c57a5e868", "applehorsepie@gmail.com");

INSERT INTO users (username, firstName, lastName, googleId, email)
VALUES ("ussrbotnet", "petrov", "usbladevik", "5c3bcfc11f47fc8c57a5e868", "bitiditls@gmail.com");

INSERT INTO Clients  (firstName, lastName, streetAddress1, city, state, ZIP, phone1, email) 
VALUE ("Ben", "Cartright", "999 Ponderosa Pine St", "Cheynne", "Wyoming", "98765", "2063629974", "fakey@gmail.com");

INSERT INTO Clients  (firstName, lastName, streetAddress1, city, state, ZIP, phone1, email) 
VALUE ("April", "Gardener", "999 Rosegarden St", "Humptulips", "Washington", "98625", "2053628811", "aprilfake@gmail.com");

INSERT INTO clientContacts (contactDate, expressedNeed, helpProvided, dollarAmount, giftCards, userId, clientId)
VALUE ("20190628", "Needed Help with food.  Struggling with extra Med bills", "Gift Cards", 50, 2, 1, 2)
