angular.module('sknPg.index', ['ui.carousel'])
    .controller('IndexCtrl', function () {
        var that = this;
        this.carouselLoading = true;
        this.postShown = false;
        this.slides = [
            {
                _id: "78b9689076bn08791b6897mn",
                title: "Lorem ipsum dolor sit amet",
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros.',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

                Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros. Pellentesque lobortis eleifend eros, sit amet tincidunt leo mollis vel. Aenean eu sapien nulla. Nulla rutrum est tortor, vitae pretium augue sagittis id. Donec nec lacinia est. Phasellus nisi arcu, fermentum a arcu ut, efficitur iaculis neque. Ut non felis consectetur, efficitur risus ac, feugiat felis.

Cras eget nulla magna. Sed egestas vel elit vel tincidunt. Suspendisse bibendum magna tortor, ac fringilla est consequat vel. Praesent at massa dapibus, vestibulum ante eu, auctor nibh. Donec in dictum odio. Curabitur at dignissim eros. Suspendisse massa nulla, efficitur id risus eu, ultricies fermentum ante. In dapibus porta tortor, eget condimentum augue vulputate et. Sed ante augue, imperdiet nec lacinia bibendum, egestas viverra felis. Aenean metus augue, venenatis ac magna ut, consequat feugiat quam. Aenean mattis semper mauris, imperdiet aliquet nisi placerat sit amet. Donec eleifend ante eget dolor accumsan pellentesque. Etiam tristique faucibus magna, eu interdum tortor sollicitudin sit amet.

Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.
                Nullam pellentesque leo at felis euismod blandit. Proin interdum at sem congue auctor. Nulla eu hendrerit sapien, ut efficitur tortor. Morbi eu vehicula metus. Proin vitae elit felis. Pellentesque scelerisque lectus non imperdiet eleifend. Donec ultricies rutrum tortor quis viverra.`
            },
            {
                title: "Lorem ipsum dolor sit amet",
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros.'
            },
            {
                title: "Lorem ipsum dolor sit amet",
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros.'
            },
            {
                title: "Lorem ipsum dolor sit amet",
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros.'
            },
            {
                title: "Lorem ipsum dolor sit amet",
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie id mi sit amet tristique. Aenean quis luctus mauris, eu pellentesque eros.'
            },
        ];

        this.slides.forEach((item, index) => {
            item.showPost = (post) => {
                that.postShown = true;
                that.readingPost = post;
            }
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
    });