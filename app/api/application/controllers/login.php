<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		if ($this->session->userdata('logged_in') === true) {
			$this->jsonify(array(
				'success' => true, 
				'message' => 'Already logged_in! Redirecting to homepage.', 
				'url' => 'home'
				));	
			exit();
		}
	}

	public function index()
	{
		
	}

	public function get_header_footer_data()
	{
		$menu['success'] = false;
		$menu['menu'] = array();
		array_push($menu['menu'], array(
			'label' => 'Login',
			'active' => '',
			'href' => '#/login'));
		array_push($menu['menu'], array(
			'label' => 'Registration',
			'active' => 'active',
			'href' => '#/registration'));

		$this->jsonify($menu);

	}

	public function login_check()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		$user['username'] = $data['username'];
		$user['password'] = do_hash($data['password']);
		// var_dump($user);
		$this->load->model('User');
		$login = $this->User->login_check($user);
		// var_dump($login);
		// exit();
		if (count($login)>0) {
			$session = array(
				'id_users' => $login[0]['id_users'],
				'first_name' => $login[0]['first_name'],
				'last_name' => $login[0]['last_name'],
				'username' => $login[0]['username'],
				'logged_in' => true
				);
			
			$this->session->set_userdata( $session );
			$this->jsonify(array(
				'success' => true, 
				'message' => 'Login attempt successfull! Redirecting to your home.', 
				'url' => 'home'
				));		
		}else{
			$this->jsonify(array(
				'success' => false, 
				'message' => 'Login attempt failed! Username or password wrong!', 
				));					
		}
	}

	public function jsonify($data)
	{
		print_r(json_encode($data));
	}

}

/* End of file login.php */
/* Location: ./application/controllers/login.php */