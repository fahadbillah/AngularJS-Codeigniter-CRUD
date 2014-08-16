<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Users extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		if($this->session->userdata('logged_in') != true){
			$this->jsonify(array('success' => false, 'message'=> 'Not logged in')); 
			exit();
		}

		$this->load->model('User');
	}

	public function index()
	{
		$this->jsonify(array('session_id' => $this->session->userdata('session_id')));
	}

	public function get_header_footer_data($type = 1)
	{
		$menu = array();
		switch ($type) {
			case 1:
			array_push($menu, array(
				'label' => 'Home',
				'active' => 'active',
				'href' => '#/home'));
			array_push($menu, array(
				'label' => 'Profile',
				'active' => '',
				'href' => '#/profile'));
			array_push($menu, array(
				'label' => 'Logout',
				'active' => '',
				'href' => '#/logout'));
			break;

			case 0:
			array_push($menu, array(
				'label' => 'Login',
				'active' => '',
				'href' => '#/login'));
			array_push($menu, array(
				'label' => 'Registration',
				'active' => 'active',
				'href' => '#/registration'));
			break;

			default:
			array_push($menu, array(
				'label' => 'Login',
				'active' => '',
				'href' => '#/login'));
			array_push($menu, array(
				'label' => 'Registration',
				'active' => 'active',
				'href' => '#/registration'));
			break;
		}

		$this->jsonify($menu);

	}

	public function submit_new_post()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		$data['id_users'] = $this->session->userdata('id_users');
		$posts = $this->User->add_new_post($data);
		if ($posts === true) {
			$return = array(
				'success' => true,
				'message' => 'Post successful!',
				);
			$this->jsonify($return);
		} else {
			$return = array(
				'success' => false,
				'message' => 'Post failed!',
				);
			$this->jsonify($return);
		}
		
	}

	public function get_all_home_post($limit = 5,$offset = 0)
	{
		$posts = $this->User->get_all_post($limit, $offset);
		$this->jsonify($posts);
	}

	public function user_details($id_users = NULL)
	{
		if ($id_users == NULL) {
			$userdata = $this->User->get_user_details($this->session->userdata('id_users'));
		}else{
			$userdata = $this->User->get_user_details($id_users);
		}

		if (count($userdata)>0) {
			$data = array(
				'success' => true, 
				'message' => 'Userdata retrived successfully!', 
				'userdata' => $userdata[0]
				);
			$this->jsonify($data);
		}else{
			$data = array(
				'success' => false, 
				'message' => 'No user found under this id!'
				);
			$this->jsonify($data);			
		}
	}

	public function post_details($id_posts = NULL)
	{
		if ($id_posts === NULL) {
			$data = array(
				'success' => false, 
				'message' => 'No post id provided!'
				);
			$this->jsonify($data);
			exit();
		}
		$id_users = $this->session->userdata('id_users');

		$post = $this->User->get_post_details($id_posts);
		$post[0]['liked'] = $this->User->liked($id_posts,$id_users);
		$post[0]['added_to_favorite'] = $this->User->added_to_favorite($id_posts,$id_users);
		$post_likes_favorites = $this->User->get_post_likes_favorites($id_posts);
		if (count($post)>0) {
			$data = array(
				'success' => true, 
				'message' => 'Postdata retrived successfully!', 
				'post' => $post[0],
				'likes_favorites' => $post_likes_favorites
				);
			$this->jsonify($data);			
		}else{
			$data = array(
				'success' => false, 
				'message' => 'No postdata found under this id!'
				);
			$this->jsonify($data);			
		}
	}

	public function test()
	{
		var_dump($this->User->liked(2,2));
		var_dump($this->User->added_to_favorite(2,2));
	}

	public function submit_comment()
	{
		$data = (array)json_decode(file_get_contents("php://input"));
		$data['id_users'] = $this->session->userdata('id_users');

		$comment = $this->User->add_comment($data);
		if ($comment === true) {
			$data = array(
				'success' => true, 
				'message' => 'Comment added successfully!'
				);
			$this->jsonify($data);			
		}else{
			$data = array(
				'success' => false, 
				'message' => 'Comment submission failed!'
				);
			$this->jsonify($data);			
		}
	}
	
	public function all_comments($id_posts)
	{
		$comments = $this->User->get_all_comments($id_posts);
		if (count($comments) > 0) {
			$data = array(
				'success' => true, 
				'message' => 'Comment load successfully!',
				'comments' => $comments
				);
			$this->jsonify($data);			
		}else{
			$data = array(
				'success' => false, 
				'message' => 'No comment found for this post. Please be the first to comment!'
				);
			$this->jsonify($data);			
		}
	}

	public function submit_like_favorite($id_posts,$type)
	{
		$data['id_posts'] = $id_posts;
		$data['id_users'] = $this->session->userdata('id_users');
		$data['type'] = $type;

		$like_favorite = $this->User->add_like_favorite($data);
		if ($like_favorite['success'] === true) {
			$data = array(
				'success' => true, 
				'message' => 'like_favorite added successfully!',
				'likes_favorites' => $like_favorite['likes_favorites']
				);
			$this->jsonify($data);			
		}else{
			$data = array(
				'success' => false, 
				'message' => 'like_favorite submission failed!'
				);
			$this->jsonify($data);			
		}
	}

	public function post_likes_favorites($id_posts)
	{
		$likes_favorites = $this->User->get_post_likes_favorites($id_posts);		
		var_dump($likes_favorites);
	}

	public function remove_likes_favorites($id_posts,$type)
	{
		$data = array('id_posts' => $id_posts, 'id_users' => $this->session->userdata('id_users'), 'type' => $type);
		$delete = $this->User->remove_likes_favorites($data);		
		if ($delete === true) {
			$this->jsonify(array('success' => true, 'message' => 'Post unliked'));
		}else{
			$this->jsonify(array('success' => false, 'message' => 'Failed unliking'));
		}
	}












	public function logout()
	{
		$this->session->sess_destroy();
	}

	public function jsonify($data)
	{
		print_r(json_encode($data));
	}

}

/* End of file users.php */
/* Location: ./application/controllers/users.php */