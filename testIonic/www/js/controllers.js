angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})




// start Géocalisation  -----------------------------------------------------------







.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicModal) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.list = [
  { id : 1, title : 'Titre 1'   },
  { id : 2, title : 'Titre 2'   },
  { id : 3, title : 'Titre 3'   },
  { id : 4, title : 'Titre 4'   },
  { id : 5, title : 'Titre 5'   },
  { id : 6, title : 'Titre 6'   },
  ];
  // define create account view 
  $ionicModal.fromTemplateUrl('templates/tab-login.html', {
   scope: $scope,
   animation: 'slide-in-up'
 }).then(function(modal) {
  $scope.loginModal = modal;
});

})

.controller('TestCtrl', function($scope, $ionicPopup, $http, $cordovaGeolocation) {
  // Triggered on a button click, or some other target


  // $scope.info = {
  //  platform: ionic.Platform.platform(),
  //  version: ionic.Platform.version()
  // }

   var posOptions = {timeout: 10000, enableHighAccuracy: false};
 $cordovaGeolocation
 .getCurrentPosition(posOptions)
 .then(function (position) {
  var lat = position.coords.latitude
  var long = position.coords.longitude
  console.log(long);
  console.log(lat);

  $scope.marker = {
    position : [lat, long]
  }

}, function(err) {
      // error
    });





   // Simple GET request 

// $http({
//   method: 'GET',
//   url: 'http://carbillet.net/api-digitalGrenoble/users/'
// }).then(function successCallback(response, status) {
//     // this callback will be called asynchronously
//     // when the response is available
//     $scope.users = response.data.users;
//     console.log($scope.users);

//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.

//   });


// $scope.map = {
//   center: [39, -121],
//   options: function() {
//     return {
//       streetViewControl: false,
//       scrollwheel: false
//     }
//   }
// };

// $scope.marker = {
//   position: [39, -121],
//   decimals: 4,
//   options: function() {
//     return { draggable: true };
//   }
  
// }
$scope.showPopup = function() {
  $scope.data = {};

    // popup perso
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.wifi">',
      title: 'Saisir le mot de passe Wi-Fi',
      scope: $scope,
      buttons: [
      { text: 'Annuler' },
      {
        text: '<b>Enregistrer</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
              //ne pas autoriser la fermeture si le mot de passe n'est pas saisi
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }
        ]

      });

    myPopup.then(function(res) {
      console.log('Saisi!', res);
    });

    $timeout(function() {
       myPopup.close(); //fermeture de la popup après 3 secondes
     }, 3000);
  };

   // popup de confirmations
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Manger une glace',
       template: 'Etes-vous sûr de vouloir manger cette glace?'
     });

     confirmPopup.then(function(res) {
       if(res) {
         console.log('Vous êtes sûr');
       } else {
         console.log('Vous n\'êtes pas sûr');
       }
     });
   };

   // popup d'alerte
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Ne mangez pas ça!',
       template: 'Le goût semble bon'
     });

     alertPopup.then(function(res) {
       console.log('Merci de ne pas avoir mangé ce cône glacé!');
     });
   };

 })





.controller('LoginCtrl', function($scope, $http, NomDeMaFactory) {

  console.log(NomDeMaFactory);

  $scope.loginData = 
  {
  };

  $scope.go = function () {

    var username = $scope.loginData.username;
    var password = $scope.loginData.password;

    console.log(username);
    console.log(password);



    var data = $scope.loginData;
    console.log(data);



    $http.post('http://carbillet.net/api-digitalGrenoble/credentials/', {
      json : {
        username : username,
        password : password
      }


    }).then(function(response) {

      console.log(response);

    });

  };


});











