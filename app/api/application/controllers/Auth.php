<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		echo $this->input->cookie('csrf_cookie_name');
	}

	public function login()
	{
		$data = $this->input->post();
		$this->load->model('user_model');
		$result = $this->user_model->login($data);
		if(count($result) > 0){
			$session_data = array(
				'user_id' => $result['user_id'],
				'f_name' => $result['f_name'],
				'l_name' => $result['l_name'],
				'username' => $result['username'],
				'email' => $result['email'],
				'status' => $result['status'],
				'user_type' => $result['user_type'],
				'logged_in' => true,
				);

			$this->session->set_userdata( $session_data );

			$returned_data = array(
				'success' => true,
				'message' => 'Login successful!',
				'data' => $session_data
				);
		}else{
			$returned_data = array(
				'success' => false,
				'message' => 'Login failed! Username or password wrong.',
				);
		}
		echo json_encode($returned_data);
	}

	public function registration()
	{
		$data = $this->input->post();

		$data['activation_code'] = generate_random_string(40);
		$data['status'] = 'not activated';
		$data['user_type'] = 'user';
		$data['password'] = sha1($data['password']);
		unset($data['confirm_password']);


		$this->load->model('user_model');
		if($this->user_model->registration($data)){
			$returned_data = array(
				'success' => true,
				'message' => 'Registration successful!',
				);
		}else{
			$returned_data = array(
				'success' => false,
				'message' => 'Registration failed! Try later.',
				);
		}
		echo json_encode($returned_data);
	}

	public function logout()
	{
		$this->session->sess_destroy();
		$returned_data = array(
			'success' => true,
			'message' => 'Successfully logout',
			);
		jsonify($returned_data);
	}

	public function test($value='')
	{
		echo "wow";
	}

}

/* End of file Auth.php */
/* Location: ./application/controllers/Auth.php */