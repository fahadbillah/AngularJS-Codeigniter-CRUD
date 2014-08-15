<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('token'))
{
	function token($length = 40)
	{
		$string = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$token = "";
		for ($i=0; $i < 40; $i++) { 
			$token .= $string[rand(0,35)];
		}

		return $token;
	} 
}