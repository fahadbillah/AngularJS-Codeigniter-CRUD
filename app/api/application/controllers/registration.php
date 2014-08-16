<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
error_reporting(-1);

class Registration extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		echo "dogeee";
	}

	public function signup()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		if ($data['password'] !== $data['repassword']) {
			$this->jsonify(array(
				'success' => false, 
				'message' => 'Password mismatch!'
				));
			exit();
		}

		$this->load->helper('misc_helper');

		$user = array(
			'username' => $data['username'],
			'email' => $data['email'],
			'activated' => false,
			'activation_code' => token(),
			'password' => do_hash($data['password'])
			);

		$this->load->model('User');
		if($this->User->add_user($user) === true){
			$this->jsonify(array(
				'success' => true, 
				'message' => 'User created successfully!',
				'url' => 'login'
				));
			exit();
		}
		else{
			$this->jsonify(array(
				'success' => false, 
				'message' => 'User create failed!'
				));
			exit();
		}
	}

	public function check_username()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		$this->username_available($data['username']);
	}

	public function check_email()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		$this->email_available($data['email']);
	}

	public function username_available($username)
	{
		$this->load->model('User');

		if ($this->User->check_email_username_available('username', $username) >0) {
			$this->jsonify(array(
				'success' => true, 
				'message' => 'Username is not available!'
				));
		}else{
			$this->jsonify(array(
				'success' => false, 
				'message' => 'Username is available!'
				));
		}
	}

	public function email_available($email)
	{
		$this->load->model('User');

		if ($this->User->check_email_username_available('email',$email) >0) {
			$this->jsonify(array(
				'success' => true, 
				'message' => 'Email is not available!'
				));
		}else{
			$this->jsonify(array(
				'success' => false, 
				'message' => 'Email is available!'
				));
		}

	}

	public function jsonify($data)
	{
		print_r(json_encode($data));
	}

}

/* End of file registration.php */
/* Location: ./application/controllers/registration.php */