'use strict';


(function( $ ) {
	
	// remove unused slides
	
	$('.__item_to_be_removed__').remove();
	$('.btSingleItemColumnInner:empty').remove();
	$('.slick-slider').each(function( i, slider ) {
		$(slider).addClass( 'bt_slider_childs_' + $(slider).find('.bt_bb_content_slider_item').length );
	});
	
	// Load images on scroll
	
	function isOnScreen( elem ) {
		var element = elem.get( 0 );
		if ( element == undefined ) return false;
		var bounds = element.getBoundingClientRect();
		return bounds.top + 75 < window.innerHeight && bounds.bottom > 0;
	}
	
	function bt_load_images () {
		var $images = $( '.btPostImageHolder > a > img.bt_src_load:not(.bt_src_loading):not(.bt_src_loaded)' );
		$images.each(function() {
			var $image = $( this );
			if ( isOnScreen( $image ) ) {
				var downloadingImage = new Image();
				downloadingImage.onload = function () {
					$image.attr( 'src', this.src );
					$image.addClass( 'bt_src_loaded' );      
				};
				downloadingImage.src = $image.data( 'src' );
				$image.addClass( 'bt_src_loading' );
			}
		});		
	}
	
	$( window ).on( 'scroll', function() {
		bt_load_images ();
	});
	
	bt_load_images ();

})( jQuery );

