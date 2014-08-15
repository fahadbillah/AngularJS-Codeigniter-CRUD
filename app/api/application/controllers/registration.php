<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Registration extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$data = array(
			'csrf_cookie_name' => $this->input->cookie('csrf_cookie_name')
			);

		print_r(json_encode($data));
	}

	public function signup()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		if ($data['password'] !== $data['repassword']) {
			$this->jsonify(array(
				'success' => false, 
				'message' => 'Password mismatch!'
				));
			return false;
		}

		$this->load->helper('misc_helper');

		$user = array(
			'username' => $data['username'],
			'email' => $data['email'],
			'activated' => false,
			'activation_code' => token(),
			'password' => do_hash($data['password'])
			);
		// var_dump($user);
		$this->load->model('User');
		if($this->User->add_user($user) == true){
			$this->jsonify(array(
				'success' => true, 
				'message' => 'User created successfully!',
				'url' => 'login'
				));
			return 0;
		}
		else{
			$this->jsonify(array(
				'success' => false, 
				'message' => 'User create failed!'
				));
		}
	}

	public function test()
	{
		// var_dump($this->load->library('Custom_security'));
		// var_dump($this->input->cookie('csrf_cookie_name'));
	}

	public function jsonify($data)
	{
		print_r(json_encode($data));
	}

}

/* End of file registration.php */
/* Location: ./application/controllers/registration.php */