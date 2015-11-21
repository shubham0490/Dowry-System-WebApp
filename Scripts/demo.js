/*
 * Bootstrap Image Gallery JS Demo 3.0.1
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global blueimp, $ */

$(function () {
    'use strict';

    //// Load demo images from flickr:
    //$.ajax({
    //    // Flickr API is SSL only:
    //    // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
    //    url: 'https://api.flickr.com/services/rest/',
    //    data: {
    //        format: 'json',
    //        method: 'flickr.interestingness.getList',
    //        api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
    //    },
    //    dataType: 'jsonp',
    //    jsonp: 'jsoncallback'
    //}).done(function (result) {
    //    var linksContainer = $('#links'),
    //        baseUrl;
    //    // Add the demo images as links with thumbnails to the page:
    //    $.each(result.photos.photo, function (index, photo) {
    //        baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
    //            photo.server + '/' + photo.id + '_' + photo.secret;
    //        $('<a/>')
    //            .append($('<img>').prop('src', baseUrl + '_s.jpg'))
    //            .prop('href', baseUrl + '_b.jpg')
    //            .prop('title', photo.title)
    //            .attr('data-gallery', '')
    //            .appendTo(linksContainer);
    //    });
    //});

    $('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
    });

    $('#fullscreen-checkbox').on('change', function () {
        $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
    });

    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    });

    $('#video-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery([
            {
                title: 'Dowry System Details',
                href: '../Videos/Dowry_system.mp4',
                type: 'video/mp4',
                poster: '../img/poster/img1 (1).jpg'
            },
            {
                title: 'Dowry System Video 2',
                href: '../Videos/video_2.mp4',
                type: 'video/mp4',
                poster: '../img/poster/img1 (2).jpg'
            },
            {
                title: 'Dowry System Video 3',
                href: '../Videos/video_3.mp4',
                type: 'video/mp4',
                poster: '../img/poster/img1 (1).png'
            },
            {
                title: 'Dowry System Video 4',
                href: '../Videos/video_4.mp4',
                type: 'video/mp4',
                poster: '../img/poster/img1 (2).jpg'
            }
        ], $('#blueimp-gallery').data());
    });

});
