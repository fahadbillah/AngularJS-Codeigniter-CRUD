-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2014 at 02:04 PM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ngci`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('d1468632c1de6c47f1af30dab57479f0', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36', 1408101940, ''),
('f27636bb64b9eee2387e11878daa991b', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36', 1408102512, 'a:6:{s:9:"user_data";s:0:"";s:8:"id_users";s:1:"1";s:10:"first_name";s:0:"";s:9:"last_name";s:0:"";s:8:"username";s:11:"fahadbillah";s:9:"logged_in";b:1;}');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id_comments` int(11) NOT NULL AUTO_INCREMENT,
  `id_users` int(11) NOT NULL,
  `comment` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_posts` int(11) NOT NULL,
  PRIMARY KEY (`id_comments`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id_comments`, `id_users`, `comment`, `date_created`, `id_posts`) VALUES
(1, 2, '', '2014-08-15 09:18:10', 0),
(2, 2, 'wow post', '2014-08-15 09:19:15', 0),
(3, 2, 'much post', '2014-08-15 09:20:35', 0),
(4, 2, 'wow wow', '2014-08-15 09:28:17', 1),
(5, 2, 'new wow', '2014-08-15 09:44:01', 1),
(6, 2, 'new wow', '2014-08-15 09:44:26', 1),
(7, 2, 'killa wow', '2014-08-15 09:45:12', 1),
(8, 2, 'lets see how it works', '2014-08-15 09:51:47', 3),
(9, 2, 'wow', '2014-08-15 09:52:49', 2),
(10, 1, 'mammaaa', '2014-08-15 11:29:59', 3);

-- --------------------------------------------------------

--
-- Table structure for table `likes_favorites`
--

CREATE TABLE IF NOT EXISTS `likes_favorites` (
  `id_likes_favorites` int(11) NOT NULL AUTO_INCREMENT,
  `id_posts` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `type` char(1) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_likes_favorites`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `likes_favorites`
--

INSERT INTO `likes_favorites` (`id_likes_favorites`, `id_posts`, `id_users`, `type`, `date_created`) VALUES
(1, 1, 2, 'l', '2014-08-15 10:30:58'),
(2, 1, 2, 'l', '2014-08-15 10:32:07'),
(3, 1, 2, 'l', '2014-08-15 10:32:31'),
(4, 1, 2, 'f', '2014-08-15 10:49:26'),
(5, 1, 2, 'f', '2014-08-15 10:49:53'),
(6, 2, 2, 'f', '2014-08-15 10:56:28'),
(7, 8, 2, 'f', '2014-08-15 10:56:44'),
(8, 1, 2, 'f', '2014-08-15 10:57:12'),
(9, 1, 2, 'f', '2014-08-15 10:57:51'),
(10, 1, 2, 'l', '2014-08-15 11:01:17'),
(11, 1, 2, 'f', '2014-08-15 11:01:24'),
(12, 1, 2, 'l', '2014-08-15 11:01:52'),
(13, 1, 2, 'f', '2014-08-15 11:02:01'),
(14, 1, 2, 'l', '2014-08-15 11:03:39'),
(15, 1, 2, 'f', '2014-08-15 11:05:18'),
(16, 1, 2, 'l', '2014-08-15 11:05:23'),
(17, 1, 2, 'l', '2014-08-15 11:09:15'),
(18, 3, 2, 'l', '2014-08-15 11:23:16'),
(19, 3, 2, 'f', '2014-08-15 11:23:45'),
(20, 2, 2, 'l', '2014-08-15 11:24:02'),
(21, 2, 1, 'l', '2014-08-15 11:28:44');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id_posts` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `details` text NOT NULL,
  `id_users` int(11) NOT NULL,
  `liked` int(11) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_posts`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id_posts`, `title`, `details`, `id_users`, `liked`, `date_created`, `date_updated`) VALUES
(1, 'fahads post', 'wow much details', 2, 0, '2014-08-14 21:20:34', '0000-00-00 00:00:00'),
(2, 'wow post', 'much details', 2, 0, '2014-08-14 21:42:37', '0000-00-00 00:00:00'),
(3, 'looki looki', 'shibe wow', 2, 0, '2014-08-14 22:00:45', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id_users` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `activated` tinyint(1) NOT NULL,
  `activation_code` varchar(200) NOT NULL,
  PRIMARY KEY (`id_users`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `first_name`, `last_name`, `email`, `username`, `password`, `date_created`, `date_updated`, `activated`, `activation_code`) VALUES
(1, '', '', 'fahadbillah@yahoo.com', 'fahadbillah', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2014-08-13 06:55:41', '0000-00-00 00:00:00', 0, '40y7ixlcqmz2ipkd33dx4ztttcvlyg2dr70sww1v'),
(2, '', '', 'fahad@fahad.com', 'fahad', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2014-08-13 07:01:59', '0000-00-00 00:00:00', 0, '4j8ia4isxpa9wy99qzkkdd1ma7r9g2lqc2nzxrpb');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
