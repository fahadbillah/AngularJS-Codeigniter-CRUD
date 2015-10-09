<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Function Name
 *
 * Function description
 *
 * @access	public
 * @param	type	name
 * @return	type	
 */

if (! function_exists('generate_random_string'))
{
	function generate_random_string($length = 10){
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}
}

/**
 * Function Name
 *
 * Function description
 *
 * @access	public
 * @param	type	name
 * @return	type	
 */

if (! function_exists('string_to_date_format'))
{
	function string_to_date_format($string_date,$format)
	{
		$date = new DateTime($string_date);
		return $date->format($format);
	}
}


/**
 * Function remove_sensitive_column
 *
 * Function remove sensitive column form query result
 *
 * @access	public
 * @param	array	$data
 * @param	array	$columns
 * @return	array	
 */

if (! function_exists('remove_sensitive_column'))
{
	function remove_sensitive_column($data,$columns)
	{
		foreach ($data as $key => $value) {
			foreach ($columns as $k => $v) {
				unset($data[$key][$v]);
			}
		}
		return $data;
	}
}

/* End of file utility_helper.php */
/* Location: ./application/helpers/utility_helper.php */