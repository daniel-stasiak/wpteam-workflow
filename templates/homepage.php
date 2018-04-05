<?php
    /*
    	Template Name: Homepage
    *
    *   @package Crunch
    *   @since Crunch 2.0.0
    */
?>

<?php get_header(); ?>

<main id="main" class="homepage-template">

	<section class="intro">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="intro__title">Hello World!</h1><!-- /.intro__title -->
					<div class="intro__content content element-small-margin-top">
						<?php the_content(); ?>
					</div><!-- /.intro__content content element-small-margin-top -->
				</div><!-- /.col-12 -->
			</div><!-- /.row -->
		</div><!-- /.container -->
	</section><!-- /.intro -->

</main><!-- /#main.homepage-template -->

<?php get_footer(); ?>