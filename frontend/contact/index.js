angular.module('sknPg.contact', ['ngMap'])
    .controller('ContactCtrl', function ($scope, NgMap) {
        NgMap.getMap().then(function(map) {
            // console.log(map.getCenter());
            // console.log('markers', map.markers);
            // console.log('shapes', map.shapes);
        });

        this.mapLoading = true;
        
        $scope.$on('mapInitialized', function (event, map) {
            this.mapLoading = false;
        });
    })
    .directive('postSlider', function ($location, $http) {
        return {
            restrict: 'E',
            scope: {
                slides: "=",
            },
            templateUrl: './index/templates/post-carousel.html',
            link: function ($scope, element, attr) {
                // var ease = document.querySelector('.js_ease');

                // lory(ease, {
                //     slidesToScroll: 1
                // });
            }
        }
    })