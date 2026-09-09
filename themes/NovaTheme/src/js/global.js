/*
|--------------------------------------------------------------------------
| DYNAMIC MODULES LOADING
|--------------------------------------------------------------------------
| This section handles lazy-loading for JS components.
| Modules are only imported if their corresponding HTML element exists.
*/

const handleDynamicModules = async () => {
	// --- Top Banner ---
	if ( document.querySelector( '.top-banner' ) ) {
		const { initTopBanner } = await import( './modules/TopBanner' );
		initTopBanner();
	}

	// --- Swiper: Hero Slider ---
	// Loads the slider logic only on pages with the .js-hero-slider class
	if ( document.querySelector( '.js-hero-slider' ) ) {
		const { initHeroSlider } = await import( './modules/HeroSlider' );
		initHeroSlider();
	}
};

document.addEventListener( 'DOMContentLoaded', handleDynamicModules );