angular.module('sknPg', ['ngRoute','sknPg.index', 'sknPg.addPost', 'ngAnimate'])
    // .run(['', () => {

    // }])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/index', {
                    templateUrl: 'index/index.html',
                    controller: 'IndexCtrl',
                    controllerAs: 'main'
                }).
                when('/add/post', {
                    templateUrl: 'add/post/index.html',
                    controller: 'IndexCtrl',
                    controllerAs: 'main'
                }).
                when('/elo', {
                    templateUrl: 'elo/index.html',
                    controller: 'IndexCtrl',
                    controllerAs: 'main'
                }).
                otherwise({
                    redirectTo: '/index'
                });
        }])
    .controller('MainCtrl', function () {
        this.menu = [{
            href:'#!/index',
            title:`Panel`
        },{
            href:'/',
            title:`Strona główna`
        },{
            href:'#!/add/post',
            title:`Dodaj post`
        },{
            href:'#!/elo',
            title:`Elo`
        }]
    })
    .directive('ahrefActiveLink', ['$location', function ($location) {
        return {
            restrict: 'A', //use as attribute
            replace: false,
            link: function (scope, elem) {
                console.log('#/' + $location.path().split("/")[1]);

                //after the route has changed
                scope.$on("$routeChangeSuccess", function () {
                    var hrefs = ['/#' + $location.path(),
                        '#' + $location.path(), //html5: false
                        '#/' + $location.path().split("/")[1],  //!NOTE wykorzystanie tez podmodulow
                        $location.path()]; //html5: true
                    angular.forEach(elem.find('a'), function (a) {
                        a = angular.element(a);
                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
                            a.addClass('active');
                        } else {
                            a.removeClass('active');
                        }
                        ;
                    });
                });
            }
        }
    }])
    .directive('ulActiveLink', ['$location', function ($location) {
        return {
            restrict: 'A', //use as attribute
            replace: false,
            link: function (scope, elem) {
                console.log('#/' + $location.path().split("/")[1]);

                //after the route has changed
                scope.$on("$routeChangeSuccess", function () {
                    var hrefs = ['/#' + $location.path(),
                        '#' + $location.path(), //html5: false
                        '#/' + $location.path().split("/")[1],  //!NOTE wykorzystanie tez podmodulow
                        $location.path()]; //html5: true

                    angular.forEach(elem.find('a'), function (a) {
                        a = angular.element(a);
                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
                            a.parent().addClass('active');
                        } else {
                            a.parent().removeClass('active');
                        }
                        ;
                    });
                });
            }
        }
    }])
    .directive('loader', function() {
        return {
            scope: { show: '=' },
            template: `<div class="loader" ng-show="show">
                <svg viewBox="0 0 32 32" width="32" height="32">
                    <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
                </svg>
            </div>`
        }
    });