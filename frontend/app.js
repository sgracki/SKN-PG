angular.module('sknPg', ['ngRoute','sknPg.index'])

    .run(function($rootScope) {
        $rootScope.$on('$viewContentLoaded', function(){
            $rootScope.viewLoaded = true;
        });

        $rootScope.$on('$routeChangeStart', function() { 
            $rootScope.viewLoaded = false;
        });

    })
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/index', {
                    templateUrl: 'index/index.html',
                    controller: 'IndexCtrl'
                }).
                otherwise({
                    redirectTo: '/index'
                });
        }])
    .controller('MainCtrl', function () {
        this.menu = [{
            href:`/#/articles`,
            title:`Artykuły`
        },{
            href:`/#/contact`,
            title:`Kontakt`
        }]
    })
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