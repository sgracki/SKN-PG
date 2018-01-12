angular.module('sknPg.index', ['ui.carousel'])
    .controller('IndexCtrl', function (AdminService) {
        var that = this;

        AdminService.getAllPosts((posts) => {
            that.posts = posts;
        });

        that.removePost = (post, index) => {
            if(confirm(`Na pewno chcesz usunąć post pt. ${post.title}`) == true) {
                that.posts.splice(index, 1);
                AdminService.removePost(post._id, () => {
                    alert('Post usunięty.');
                });
            }
        }

        AdminService.getAllUsers((users) => {
            that.users = users;
        })

        AdminService.getUser((user) => {
            console.log('elo');
            that.user = user;
        })
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
    .service('AdminService', function ($http) {
        this.getAllUsers = function (successFunc, failFunc) {
            return $http.get("/api/admin/users").then(function (resp) {
                successFunc(resp.data);
            }, failFunc);
        };
        this.getAllPosts = function (successFunc, failFunc) {
            return $http.get("/api/posts/").then(function (resp) {
                successFunc(resp.data);
            }, failFunc);
        };
        this.removePost = function ($postId, successFunc, failFunc) {
            return $http.delete(`/api/admin/post/${$postId}`).then(function (resp) {
                successFunc(resp.data);
            }, failFunc);
        };
        this.getUser = function (successFunc, failFunc) {
            return $http.get("/api/admin/user").then(function (resp) {
                successFunc(resp.data);
            }, failFunc);
        };
        this.addPost = function (post, successFunc, failFunc) {
            return $http.post("/api/admin/post", post).then(function (resp) {
                successFunc(resp.data);
            }, failFunc);
        };
    });