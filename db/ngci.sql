-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema ngci
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ngci
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ngci` DEFAULT CHARACTER SET utf8 ;
USE `ngci` ;

-- -----------------------------------------------------
-- Table `ngci`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ngci`.`users` ;

CREATE TABLE IF NOT EXISTS `ngci`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `f_name` VARCHAR(100) NULL,
  `l_name` VARCHAR(100) NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `user_type` ENUM('user','admin') NULL DEFAULT 'user',
  `update_date` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` ENUM('not activated', 'activated', 'closed') NULL DEFAULT 'not activated',
  `activation_code` VARCHAR(45) NULL,
  `create_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ngci`.`posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ngci`.`posts` ;

CREATE TABLE IF NOT EXISTS `ngci`.`posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `blog` LONGTEXT NULL,
  `user_id` INT NULL,
  `create_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`post_id`),
  INDEX `fk_posts_users_idx` (`user_id` ASC),
  CONSTRAINT `fk_posts_users`
  FOREIGN KEY (`user_id`)
  REFERENCES `ngci`.`users` (`user_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ngci`.`comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ngci`.`comments` ;

CREATE TABLE IF NOT EXISTS `ngci`.`comments` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `comment` TEXT NOT NULL,
  `commenter_name` VARCHAR(100) NOT NULL COMMENT '	',
  `commenter_email` VARCHAR(100) NULL,
  `create_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `post_id` INT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `fk_comments_posts1_idx` (`post_id` ASC),
  CONSTRAINT `fk_comments_posts1`
  FOREIGN KEY (`post_id`)
  REFERENCES `ngci`.`posts` (`post_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ngci`.`ci_sessions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ngci`.`ci_sessions` ;

CREATE TABLE IF NOT EXISTS `ngci`.`ci_sessions` (
  `id` VARCHAR(40) NOT NULL,
  `ip_address` VARCHAR(45) NOT NULL,
  `timestamp` INT(10) UNSIGNED NOT NULL DEFAULT 0,
  `data` BLOB NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `ci_sessions_timestamp` (`timestamp` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
