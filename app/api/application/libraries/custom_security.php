<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Custom_security {

	private $CI =& get_instance();

	public function __construct()
	{
		$cookie = array(
			'name'   => 'csrf_cookie_name',
			'value'  => $this->token(),
			'expire' => 7200,
			'domain' => base_url(),
			'path'   => '/',
			'secure' => TRUE
			);

		var_dump($CI->input->set_cookie($cookie));
	}

	public function token($length = 40)
	{
		$string = "1234567890abcdefghijklmnopqrstuvwxyz";
		$token = "";
		for ($i=0; $i < 40; $i++) { 
			$token .= $string[rand(0,35)];
		}

		return $token;
	}

}