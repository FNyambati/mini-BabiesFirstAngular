var app = angular.module('friendsList');
app.controller("mainCtrl", function($scope) {
    $scope.name = "Fred";
    $scope.friends = [
        "Arnold", "Miles", "Elisha", "Denzel", "JB"
    ];
    $scope.addFriend = function(key) {
        $scope.friends.push(key);
        
        
    }
});