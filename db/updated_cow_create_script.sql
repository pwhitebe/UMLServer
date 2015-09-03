SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mmwr_case
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mmwr_case
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mmwr_case` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `mmwr_case` ;

-- -----------------------------------------------------
-- Table `mmwr_case`.`Case_Main`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`case_main` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`case_main` (
  `case_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(140) NOT NULL,
  `overview` text,
  `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  `publication_date` TIMESTAMP NULL COMMENT '',
  `case_text` longtext,
  `abstract_text` longtext,
  `additional_information` mediumtext,
  `current` tinyint(1) NOT NULL,
  `archived` tinyint(1) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `development_status` int(11) NOT NULL,
  `development_status_notes` text,
  `display_status` int(11) NOT NULL,
  `available_cme_credits` tinyint(1) DEFAULT NULL,
  `cme_release_date` datetime DEFAULT NULL,
  `cme_valid_until` datetime DEFAULT NULL,
  `number_cme_credits_available` int(11) DEFAULT NULL,
  `tag_line` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`case_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `mmwr_case`.`Question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`question` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`question` (
  `question_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `sequence_id` int(11) NOT NULL,
  `post_pre` varchar(5) NOT NULL,
  `question` text NOT NULL,
  PRIMARY KEY (`question_id`),
  UNIQUE KEY `quesiton_id_UNIQUE` (`question_id`),
  KEY `fk_Question_Case_Main_idx` (`case_id`),
  CONSTRAINT `fk_Question_Case_Main` FOREIGN KEY (`case_id`) REFERENCES `case_main` (`case_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- -----------------------------------------------------
-- Table `mmwr_case`.`Answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`answer` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`answer` (
  `answer_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `answer` varchar(250) NOT NULL,
  `correct` tinyint(1) NOT NULL,
  `hit_counter` INT UNSIGNED NULL,
  PRIMARY KEY (`answer_id`),
  UNIQUE KEY `answer_id_UNIQUE` (`answer_id`),
  KEY `fk_Answer_Question1_idx` (`question_id`),
  KEY `fk_Answer_Case_Main1_idx` (`case_id`),
  CONSTRAINT `fk_Answer_Case_Main1` FOREIGN KEY (`case_id`) REFERENCES `case_main` (`case_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Answer_Question1` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `mmwr_case`.`Rating`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`rating` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`rating` (
  `rating_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`rating_id`),
  UNIQUE KEY `rating_id_UNIQUE` (`rating_id`),
  KEY `fk_Rating_Case_Main1_idx` (`case_id`),
  CONSTRAINT `fk_Rating_Case_Main1` FOREIGN KEY (`case_id`) REFERENCES `case_Main` (`case_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `mmwr_case`.`Image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`image` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`image` (
  `image_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `sequence_id` varchar(45) NOT NULL,
  `image_url` varchar(250) NOT NULL,
  `featured` tinyint(1) NOT NULL,
  `title` varchar(140) NOT NULL,
  PRIMARY KEY (`image_id`),
  UNIQUE KEY `image_id_UNIQUE` (`image_id`),
  KEY `fk_Image_Case_Main1_idx` (`case_id`),
  CONSTRAINT `fk_Image_Case_Main1` FOREIGN KEY (`case_id`) REFERENCES `case_main` (`case_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `mmwr_case`.`Development_Status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`development_Status` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`development_Status` (
  `development_status_id` INT NOT NULL COMMENT '',
  `description` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`development_status_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mmwr_case`.`Display_Status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mmwr_case`.`display_Status` ;

CREATE TABLE IF NOT EXISTS `mmwr_case`.`display_Status` (
  `display_status_id` INT NOT NULL COMMENT '',
  `description` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`display_status_id`)  COMMENT '')
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

