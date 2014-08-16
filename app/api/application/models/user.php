<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function add_user($user)
	{
		return $this->db->insert('users', $user);
	}

	public function login_check($user)
	{
		$this->db->select('*');
		$this->db->where('username', $user['username']);
		$this->db->where('password', $user['password']);
		$q = $this->db->get('users',1);
		return $q->result_array();
	}

	public function get_all_post($limit, $offset)
	{
		$this->db->select('posts.id_posts,posts.title,posts.details,posts.date_created,users.id_users,users.username,users.first_name,users.last_name,users.email');
		$this->db->from('posts');
		$this->db->join('users', 'users.id_users = posts.id_users', 'left');
		$this->db->limit($limit, $offset);
		$q = $this->db->get();
		return $q->result_array();
	}

	public function add_new_post($data)
	{
		return $this->db->insert('posts', $data);
	}

	public function get_user_details($id_users)
	{
		$this->db->select('id_users,username,first_name,last_name,email,date_created,date_updated');
		$this->db->where('id_users', $id_users);
		$q = $this->db->get('users', 1);
		return $q->result_array();
	}

	public function get_post_details($id_posts = NULL)
	{
		if ($id_posts === NULL) {
			return array();
		}
		$this->db->select('posts.id_posts,posts.title,posts.details,posts.date_created,users.id_users,users.username,users.first_name,users.last_name,users.email');
		$this->db->from('posts');
		$this->db->join('users', 'users.id_users = posts.id_users', 'left');
		$this->db->where('id_posts', $id_posts);
		$this->db->limit(1);
		$q = $this->db->get();
		return $q->result_array();
	}

	public function add_comment($comment)
	{
		return $this->db->insert('comments', $comment);
	}

	public function get_all_comments($id_posts)
	{
		$this->db->select('users.id_users,comments.id_comments,comments.comment,users.username,comments.date_created');
		$this->db->from('comments');
		$this->db->join('users', 'users.id_users = comments.id_users', 'left');
		$this->db->where('id_posts', $id_posts);
		$q = $this->db->get();
		return $q->result_array();
	}

	public function add_like_favorite($data)
	{
		$likes_favorites = $this->db->insert('likes_favorites', $data);
		if ($likes_favorites === true) {
			return array(
				'success' => true, 
				'likes_favorites' => $this->get_post_likes_favorites($data['id_posts'])
				);
		}else{
			return array(
				'success' => false
				);			
		}

	}

	public function get_post_likes_favorites($id_posts)
	{
		$this->db->where('id_posts', $id_posts);
		$this->db->where('type', 'l');
		$likes = $this->db->count_all_results('likes_favorites');

		$this->db->where('id_posts', $id_posts);
		$this->db->where('type', 'f');
		$favorites = $this->db->count_all_results('likes_favorites');
		
		return array(
			'likes' => $likes, 
			'favorites' => $favorites
			);
	}

	public function liked($id_posts,$id_users)
	{
		$this->db->where('type', 'l');
		$this->db->where('id_posts', $id_posts);
		$this->db->where('id_users', $id_users);
		return ($this->db->count_all_results('likes_favorites') > 0) ? true : false;
	}

	public function added_to_favorite($id_posts,$id_users)
	{
		$this->db->where('type', 'f');
		$this->db->where('id_posts', $id_posts);
		$this->db->where('id_users', $id_users);
		return ($this->db->count_all_results('likes_favorites') > 0) ? true : false;
	}

	public function remove_likes_favorites($data)
	{
		$this->db->where('id_posts', $data['id_posts']);
		$this->db->where('id_users', $data['id_users']);
		$this->db->where('type', $data['type']);
		return $this->db->delete('likes_favorites');
	}

	public function check_email_username_available($type,$data)
	{
		if ($type == 'email') {
			$this->db->where('email', $data);
			return $this->db->count_all_results('users');
		}else{
			$this->db->where('username', $data);
			return $this->db->count_all_results('users');
		}
	}

}

/* End of file user.php */
/* Location: ./application/models/user.php */