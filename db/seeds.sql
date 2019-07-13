
use deaconLog_db;

drop table IF EXISTS clientContacts;
drop table IF EXISTS clients;
drop table IF EXISTS users;

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
VALUE ("April", "Gardener", "999 Rosegarden St", "Humptulips", "Washington", "98625", "2053628811", "fakeout@gmail.com");

INSERT INTO clientContacts (contactDate, expressedNeed, helpProvided, dollarAmount, giftCards, userId, clientId)
VALUE ("20190628", "Needed Help with food.  Struggling with extra Med bills", "Gift Cards", 50, 2, 1, 2)
