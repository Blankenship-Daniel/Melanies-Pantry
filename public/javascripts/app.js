var app = angular.module('MelaniesRecipesApp', []);

app.controller('MainController', function($scope, $http) {

    // sets the fruits radio button to be preselected
    $scope.foodType = "fruit";

    $scope.submitForm = function(formIsValid) {

        if (formIsValid) {
            $http.post('/api/c', {
                foodName: $scope.foodName,
                foodType: $scope.foodType
            }).
            success(function(data, status, headers, config) {
                console.log('success: ' + data);

                $scope.getFood();
            }).
            error(function(data, status, headers, config) {
                console.log('error: ' + data);
            });
        }
    };

    $scope.getFood = function() {
        $http.get('/api/r/all').
        success(function(data, status, headers, config) {
            console.log(data);
            $scope._foods = data;
        }).
        error(function(data, status, headers, config) {
            console.log('error: ' + data);
        });
    }

    $scope.deleteFood = function(type, id) {

        console.log('type: ' + type);
        console.log('id: ' + id);

        $http.delete('/api/d', {

        }).
        success(function(data, status, headers, config) {

        }).
        error(function(data, status, headers, config) {
            console.log('error: ' + data);
        });
    }
});
