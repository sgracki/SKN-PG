angular.module('sknPg.index', ['ui.carousel'])
    .controller('IndexCtrl', function (PostsService) {
        var that = this;
        this.carouselLoading = true;
        this.postShown = false;
        
        PostsService.getAllPosts((posts) => {
            this.slides = posts;

            this.slides.forEach((item, index) => {
                item.showPost = (post) => {
                    that.postShown = true;
                    that.readingPost = post;
                }
            })
        })

        this.hidePost = (post) => {
            this.postShown = false;
        }

        this.onCarouselInit = function () {
            this.carouselLoading = false;
        }
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
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                    //Also remove . and , so its gives a cleaner result.
                    if (value.charAt(lastspace - 1) === '.' || value.charAt(lastspace - 1) === ',') {
                        lastspace = lastspace - 1;
                    }
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || '...');
        };
    })
    .service('PostsService', function ($http) {
        this.getAllPosts = function (successFunc, failFunc) {
            return $http.get("/api/posts").then(function (resp) {
                successFunc(resp.data);
            }, failFunc);
        };
    });