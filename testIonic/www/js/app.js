// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ngMaps'])

.run(function($ionicPlatform, $cordovaGeolocation) {
  $ionicPlatform.ready(function() {

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function () {
      })

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})




.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

// Fonction qui créer l'accès de nos routes


                              // Ionic uses AngularUI Router which uses the concept of states
                              // Learn more here: https://github.com/angular-ui/ui-router
                              // Set up the various states which the app can be in.
                              // Each state's controller can be found in controllers.js


  // ( $stateProvider permet de créer les routes via .state)
  $stateProvider


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    // Nom de notre route 

    url: '/dash',
    // L'url dans le navigateur qui nous donne accès à la page

    views: {
      'tab-dash': {
    // Nom de notre page dans la view

        templateUrl: 'templates/tab-dash.html',
    // La route pour accèder a notre page

        controller: 'DashCtrl'
    // Le controller de notre page 
 }
    }
  })

// Page de chat
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

// Page de chat spécifique 
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

// Page account
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

// Page de login
  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html',
        controller: 'LoginCtrl'
      }
    }
  })

// Page de test API / Geocalisation 
  .state('tab.mytab', {
    url: '/mytab',
    views: {
      'tab-mytab': {
        templateUrl: 'templates/tab-mytab.html',
        controller: 'TestCtrl'
      }
    }
  })


    .state('tab.geoloc', {
    url: '/geoloc',
    views: {
      'tab-geoloc': {
        templateUrl: 'templates/tab-geoloc.html',
        controller: 'geolocCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');



  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

});




