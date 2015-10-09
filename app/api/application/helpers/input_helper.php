<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function get_post()
{
	$data = object_to_array (json_decode(file_get_contents("php://input")));
	
	if (!in_array('csrf_test_name', $data)<0) 
	{
		$message = json_encode(array(
		                       'success' => false,
		                       'message' => 'You are not allowed to submit data!'
		                       ));
		echo $message;
		exit();
	}
	
	unset($data['csrf_test_name']);
	return $data;
}

function object_to_array($obj) {
	if(is_object($obj)) $obj = (array) $obj;
	if(is_array($obj)) {
		$new = array();
		foreach($obj as $key => $val) {
			$new[$key] = object_to_array($val);
		}
	}
	else $new = $obj;
	return $new;       
}

/* End of file input_helper.php */
/* Location: ./application/helpers/input_helper.php */