<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Menus extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		if($this->session->userdata('logged_in') !== true){
			$this->jsonify(
				array(
					'success' => false,
					'menu' => array(
						array(
							'active' => true, 
							'href' => '#/login', 
							'label' => 'Login'
							),
						array(
							'active' => false, 
							'href' => '#/registration', 
							'label' => 'Registration'
							)
						)
					)
				);
			exit();
		}
	}

	public function index()
	{
		$this->jsonify(
			array(
				'success' => true,
				'menu' => array(
					array(
						'active' => true, 
						'href' => '#/home', 
						'label' => 'Home'
						),
					array(
						'active' => false, 
						'href' => '#/profile', 
						'label' => 'Profile'
						),
					array(
						'active' => false, 
						'href' => '#/logout', 
						'label' => 'Logout'
						)
					)
				)
			);
		exit();
	}

	public function jsonify($data)
	{
		print_r(json_encode($data));
	}	

}

/* End of file menus.php */
/* Location: ./application/controllers/menus.php */