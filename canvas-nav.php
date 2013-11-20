<?php
/*
Plugin Name: Canvas Mobile Menu Addition
Plugin URI: http://github.com/LiranCohen/canvas-menu-add/
Description: WooThemes' Canvas Mobile Menu Addition. Hides sub-menus in mobile mode and shows them only when clicked.
Version: 1.1
Author: Liran Cohen
Author URI: http://www.liranco.info
License: GPL2
*/

function canvas_nav_scripts(){
    wp_register_script('canvas_nav_script',plugin_dir_url( __FILE__ ).'js/canvas-nav.js');
    wp_enqueue_script('canvas_nav_script');
}
add_action('wp_enqueue_scripts','canvas_nav_scripts');

?>