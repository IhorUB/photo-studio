import '../../node_modules/jquery/dist/jquery.min.js';
import $ from 'jquery';
/*add library*/


/* bootstrap */
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
/* main slider-carousel init, index.html */
$('.carousel').carousel();
/* end bootstrap */
import '../css/main.scss';
/* gridGallery */
// import '../gridGallerySlider/modernizr.custom';
import '../gridGallerySlider/imagesloaded.pkgd.min';
import '../gridGallerySlider/masonry.pkgd.min';
import '../gridGallerySlider/classie';
import '../gridGallerySlider/cbpGridGallery';
import './gridGallery';
new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
/* end gridGallery */

import './scroll-nav';

/* tilt.jquery property for pesonal-card animate*/
import './tilt.jquery';
$(document).ready(function () {
    $('.team-card').tilt({
        maxTilt: 10,
        glare: true,
        maxGlare: 0.4
    })
});
/* end tilt.jquery property for pesonal-card animate*/



/*if (typeof jQuery == 'undefined') {
    alert('jQuery is not installed');
} else {
    alert('ok');
}*/









