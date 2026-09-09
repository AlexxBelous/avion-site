export const initTopBanner = () => {
	const topBannerEl = document.querySelector( '.top-banner' );
	const btnCloseEl = document.querySelector( '.top-banner__close' );

	if ( !topBannerEl || !btnCloseEl ) return;

	btnCloseEl.addEventListener( 'click', () => {
		topBannerEl.classList.add( 'is-hidden' );
	} );
};