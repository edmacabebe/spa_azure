'use strict';
angular.module('todoApp')

// TODO: Load ADAL for use in view
.controller('userDataCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
        console.log("ent user: ",$scope.userInfo);
    }]);
