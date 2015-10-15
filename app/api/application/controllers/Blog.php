<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Blog extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('blog_model');
	}

	public function index()
	{
		
	}

	public function get_all_categories()
	{
		$data = $this->blog_model->get_all_categories();
		// array_unshift($data, array(
		//               'category_id' => null,
		//               'category_name' => 'Select a category',
		//               'parent_category' => null,
		//               'create_date' => null,
		//               'update_date' => null,
		//               ));
		jsonify($data);
	}

}

/* End of file Blog.php */
/* Location: ./application/controllers/Blog.php */