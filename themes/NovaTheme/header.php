<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<div class="top-banner">
		<div class="container top-banner__wrapper">
			<p class="top-banner__text">
				Free delivery on all orders over £50 with code easter checkout
			</p>
			<button class="top-banner__close" type="button" aria-label="close">&times;</button>
		</div>
	</div>

	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__logo">
					<?php the_custom_logo(); ?>
				</div>

				<nav id="site-navigation" class="header__menu">
					<?php
					wp_nav_menu( array(
						'theme_location' => 'main-menu',
						'menu_id' => 'primary-menu',
						'menu_class' => 'header__menu-list',
						'container' => false,
					) );
					?>
					<div class="header__actions">
						<a class="header__action-btn header__action-btn--search" href="#" aria-label="Search"></a>

						<a class="header__action-btn header__action-btn--cart" href="<?php echo 'test'; ?>"
							aria-label="Cart">

						</a>

						<a class="header__action-btn header__action-btn--account"
							href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) ); ?>"
							aria-label="Account">

						</a>
					</div>
				</nav>

			</div>
		</div>
	</header>