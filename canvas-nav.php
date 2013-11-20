<?php
/*
Plugin Name: Canvas Navigation Addition
Plugin URI: http://yes
Description: A brief description of the Plugin.
Version: The Plugin's Version Number, e.g.: 1.0
Author: Name Of The Plugin Author
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

function canvas_nav_scripts(){
    wp_register_script('canvas_nav_script',plugin_dir_url( __FILE__ ).'js/canvas-nav.js');
    wp_enqueue_script('canvas_nav_script');
}
add_action('wp_enqueue_scripts','canvas_nav_scripts');

?>