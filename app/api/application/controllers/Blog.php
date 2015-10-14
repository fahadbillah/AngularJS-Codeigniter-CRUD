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
		jsonify($this->blog_model->get_all_categories());
	}

}

/* End of file Blog.php */
/* Location: ./application/controllers/Blog.php */