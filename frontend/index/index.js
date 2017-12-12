angular.module('sknPg.index', ['ui.carousel'])
    .controller('IndexCtrl', function () {
        this.slides = [
            {
              title: "1 title",
              desc: 'http://lorempixel.com/560/400/sports/1', 
            },
            {
              title: "2 title",
              desc: 'http://lorempixel.com/560/400/sports/2', 
            },
            {
              title: "3 title",
              desc: 'http://lorempixel.com/560/400/sports/3', 
            },
            {
              title: "4 title",
              desc: 'http://lorempixel.com/560/400/sports/4',
            },
            {
              title: "5 title",
              desc: 'http://lorempixel.com/560/400/sports/5', 
            },
          ];
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