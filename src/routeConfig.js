angular.module('modRouter', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	
	// 全站路由设置
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('index',{
        url: '/',
        views: {
            'container': {
                templateUrl: '/views/index.html'
            },
            'header@index': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'main@index': {
                templateUrl: '/views/home.html',
                controller: 'homeController'
            },
            'aboutNew@index': {
                templateUrl: '/views/about_new.html'
            },
            'footer@index': {
                templateUrl: '/views/footer.html'
            }
        }
    })
    .state('character',{
        url: '/character',
        views: {
            'container': {
                templateUrl: '/views/index.html'
            },
            'header@character': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'main@character': {
                templateUrl: '/views/character.html',
                controller: 'characterController'
            },
            'aboutNew@character': {
                templateUrl: '/views/about_new.html'
            },
            'footer@character': {
                templateUrl: '/views/footer.html'
            }
        }
    })
    .state('tamashii',{
        url: '/tamashii',
        views: {
            'container': {
                templateUrl: '/views/index.html'
            },
            'header@tamashii': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'main@tamashii': {
                templateUrl: '/views/tamashii.html',
                controller: 'tamashiiController'
            },
            'aboutNew@tamashii': {
                templateUrl: '/views/about_new.html'
            },
            'footer@tamashii': {
                templateUrl: '/views/footer.html'
            }
        }
    })
    .state('story',{
        url: '/story',
        views: {
            'container': {
                templateUrl: '/views/index.html'
            },
            'header@story': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'main@story': {
                templateUrl: '/views/story.html',
                controller: 'storyController'
            },
            'aboutNew@story': {
                templateUrl: '/views/about_new.html'
            },
            'footer@story': {
                templateUrl: '/views/footer.html'
            }
        }
    })
    .state('news',{
        url: '/news',
        views: {
            'container': {
                templateUrl: '/views/index.html'
            },
            'header@news': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'main@news': {
                templateUrl: '/views/news.html',
                controller: 'newsController'
            },
            'footer@news': {
                templateUrl: '/views/footer.html'
            }
        }
    })
    .state('detail',{
        url: '/detail/:id/',
        views: {
        	'container': {
                templateUrl: '/views/index.html'
            },
            'header@detail': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'main@detail': {
                templateUrl: '/views/detail.html',
                controller: 'newsController'
            },
            'footer@detail': {
            	templateUrl: '/views/footer.html'
            }
        }
    })
}])