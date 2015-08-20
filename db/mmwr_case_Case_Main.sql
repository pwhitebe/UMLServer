-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 127.0.0.1    Database: mmwr_case
-- ------------------------------------------------------
-- Server version	5.5.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `case_main`
--

DROP TABLE IF EXISTS `case_main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `case_main` (
  `case_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(140) NOT NULL,
  `overview` text,
  `created_date` datetime NOT NULL,
  `publication_date` datetime NOT NULL,
  `case_text` longtext,
  `abstract_text` longtext,
  `additional_information` mediumtext,
  `rating` int(11) DEFAULT NULL,
  `development_status` int(11) NOT NULL,
  `development_status_notes` text,
  `display_status` int(11) NOT NULL,
  `available_cme_credits` tinyint(1) DEFAULT NULL,
  `cme_release_date` datetime DEFAULT NULL,
  `cme_valid_until` datetime DEFAULT NULL,
  `number_cme_credits_available` int(11) DEFAULT NULL,
  `tag_line` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`case_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_main`
--

LOCK TABLES `case_main` WRITE;
/*!40000 ALTER TABLE `case_main` DISABLE KEYS */;
INSERT INTO `case_main` VALUES (1,'Hepatitis B','A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She has had excellent prenatal care and fetal development has been normal based on standard, non-invasive measures.','2014-11-11 12:45:34','2014-11-11 12:45:34','A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She has had excellent prenatal care and fetal development has been normal based on standard, non-invasive measures. ','The current recommendations from the Advisory Committee on Immunization Practices (ACIP) for infants born to hepatitis B-infected mothers include postexposure prophylaxis consisting of hepatitis B (HepB) vaccine and hepatitis B immune globulin administered within 12 hours of birth, followed by completion of the 3- or 4-dose HepB vaccine series (1). To identify infants who need revaccination as well as those who need follow-up medical care for hepatitis B virus (HBV) infection, ACIP currently recommends HepB post-vaccination serologic testing (PVST) at age 9–18 months (1). This report provides CDC guidance for shortening the interval for PVST to age 9–12 months to reduce the need for unnecessary revaccination and was prompted by new data from the Enhanced Perinatal Hepatitis B Prevention Program (EPHBPP).','',NULL,5,NULL,0,1,NULL,NULL,3,NULL),(2,'Sodium Intake','A 36yo white male comes in for a new patient visit in order to establish care. He and his wife recently moved to your community from a suburb of Milwaukee where they were under the care of a residency classmate of yours. He has no specific complaints and no prior major illnesses or surgeries. A careful review of his records suggests that he is up to date on all recommended clinical preventive services. Your colleague recently administered the TD vaccine and screened him for hypertension and cholesterol abnormalities. He is in excellent physical shape and reports being physically active, running 4-5 times a week. He has a BMI of 21.  ','0000-00-00 00:00:00','2015-08-21 00:00:00','A 36yo white male comes in for a new patient visit in order to establish care. He and his wife recently moved to your community from a suburb of Milwaukee where they were under the care of a residency classmate of yours. He has no specific complaints and no prior major illnesses or surgeries. A careful review of his records suggests that he is up to date on all recommended clinical preventive services. Your colleague recently administered the TD vaccine and screened him for hypertension and cholesterol abnormalities. He is in excellent physical shape and reports being physically active, running 4-5 times a week. He has a BMI of 21.  ','What is already known on this topic?',NULL,NULL,5,NULL,3,NULL,NULL,NULL,4,NULL),(3,'Meningitis','A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment. He and his family are very well known to you as you have cared for him and his older brother, now a 19-yo college sophomore, since they were young children. He and his mother report no specific complaints, and his physical examination is completely normal. He is looking forward to starting classes at a large university about 200 miles away in a neighboring state. He reports with excitement that he got a spot at the most popular residence hall and will be sharing a suite with three other freshman. He’s not yet sure what his major will be, but is hoping to use his first year to sample a variety of classes and extracurricular activities and really experience college life. ','0000-00-00 00:00:00','2015-08-19 13:10:25','A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment. He and his family are very well known to you as you have cared for him and his older brother, now a 19-yo college sophomore, since they were young children. He and his mother report no specific complaints, and his physical examination is completely normal. He is looking forward to starting classes at a large university about 200 miles away in a neighboring state. He reports with excitement that he got a spot at the most popular residence hall and will be sharing a suite with three other freshman. He’s not yet sure what his major will be, but is hoping to use his first year to sample a variety of classes and extracurricular activities and really experience college life. ','Use of Serogroup B Meningococcal Vaccines in Persons Aged ≥10 Years at Increased Risk for Serogroup B Meningococcal Disease: Recommendations of the Advisory Committee on Immunization Practices, 2015','To learn more about meningococcal vaccination, see the full article summarizing the 2015 recommendations of the Advisory Committee on Immunization Practices at: http://www.cdc.gov/mmwr/preview/mmwrhtml/mm6422a3.htm?s_cid=mm6422a3_w',NULL,5,NULL,1,NULL,NULL,NULL,2,NULL);
/*!40000 ALTER TABLE `case_main` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-20 14:44:05
