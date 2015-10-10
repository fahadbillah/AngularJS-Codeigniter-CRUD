<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();

	}

	public function registration($user)
	{
		return $this->db->insert('users', $user);
	}

	public function login($user)
	{
		$this->db->select('*');
		$this->db->from('users');
		$this->db->where('username', $user['username']);
		$this->db->where('password', sha1($user['password']));
		$this->db->limit(1);
		return $this->db->get()->row_array();
	}

}

/* End of file User_model.php */
/* Location: ./application/models/User_model.php */