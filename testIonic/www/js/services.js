angular.module('starter.services', [])



// Exemple d'une factory + Injection 
.factory('NomDeMaFactory', function() {

  return "Je suis bien injecté mon grand !";

})


// Factory getJson 

// .factory('getJson', function($http) {
//   var getJson = {
//     async: function() {
//       // $http returns a promise, which has a then function, which also returns a promise
//       var promise = $http.get('http://carbillet.net/api-digitalGrenoble/users/').then(function (response) {
//         // The then function here is an opportunity to modify the response
//         // The return value gets picked up by the then in the controller.
//         return response.data;
//       });
//       // Return the promise to the controller
//       return promise;
//     }
//   };
//   return getJson;
// })


// Autre factory getJson

.factory('jeJson', function($http) {

  console.log("yep !")
  
 return $http.get('http://carbillet.net/api-digitalGrenoble/users/').then(function(donnees) {

    console.log("je suis la ");
    return donnees;

  }), function(error) {
    console.log("t'es mauvais ");
  }

})





.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
