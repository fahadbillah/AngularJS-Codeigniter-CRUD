<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function jsonify($data)
{
	echo json_encode($data);
	exit();
}

function json($success = false, $title = '', $body = '', $data = array())
{
	$returned_data = array(
		'success' => $success,
		'message' => array(
			'title' => $title,
			'body' => $body,
			)
		);

	if (count($data) > 0) {
		$returned_data['data'] = $data;
	}

	echo json_encode($returned_data);
	exit();
}

function vd($data){
	echo "<pre>";
	var_dump($data);
	echo "</pre>";
}

function pr($data){
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}

/* End of file output_helper.php */
/* Location: ./application/helpers/output_helper.php */