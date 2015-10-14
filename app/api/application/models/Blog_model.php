<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Blog_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function get_all_categories()
	{
		// $this->db->select('child.*, parent.category_name as p');
		// $this->db->from('categories as child');
		// $this->db->join('categories as parent', 'parent.category_id = child.category_id', 'left');
		// $this->db->group_by('child.category_id');
		return $this->db->get('categories')->result_array();
	}

}

/* End of file Blog_model.php */
/* Location: ./application/models/Blog_model.php */