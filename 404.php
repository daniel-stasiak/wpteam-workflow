<?php
    /**
    *   The template for displaying 404 pages (not found)
    *
    *   @package Crunch
    *   @since Crunch 2.0.0
    */
?>

<?php get_header(); ?>

<main id="main" class="error-404-page-template">

    <section class="error-404">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="error-404__title">Page Not Found</h1><!-- /.error-404__title -->
                    <div class="error-404__content content element-small-margin-top">
                        <p>Sorry, but the page you were trying to view does not exist.</p>
                    </div><!-- /.error-404__content content element-small-margin-top -->
                </div><!-- /.col-12 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><!-- /.error-404 -->

</main><!-- /#main.error-404-page-template -->

<?php get_footer(); ?>