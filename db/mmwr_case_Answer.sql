-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: localhost    Database: mmwr_case
-- ------------------------------------------------------
-- Server version	5.6.26-log

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
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `answer_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `answer` varchar(250) NOT NULL,
  `correct` tinyint(1) NOT NULL,
  PRIMARY KEY (`answer_id`),
  UNIQUE KEY `answer_id_UNIQUE` (`answer_id`),
  KEY `fk_Answer_Question1_idx` (`question_id`),
  KEY `fk_Answer_Case_Main1_idx` (`case_id`),
  CONSTRAINT `fk_Answer_Case_Main1` FOREIGN KEY (`case_id`) REFERENCES `case_main` (`case_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Answer_Question1` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,1,1,'No special precautions are necessary because transmission of Hepatitis B from mother to child is very rare.',0),(2,1,1,'The risk to her child of hepatitis B infection and its various sequelae can be virtually eliminated by administration of a single dose of hepatitis B immune globulin shortly after birth ',0),(3,1,1,'The current recommendation for prevention of maternal fetal hepatitis B transmission consists of one dose of hepatitis B immune globulin and HepB vaccine at birth followed by completion of the 3 or 4 dose series by age 6 months. ',0),(4,1,1,'In addition to receiving hepatitis B immune globulin and a complete, 3-4 dose HepB vaccine series, the baby should undergo serological testing at 9-12 months to determine the need for repeat vaccination.  ',0),(5,2,1,'No special precautions are necessary because transmission of Hepatitis B from mother to child is very rare.',0),(6,2,1,'The risk to her child of hepatitis B infection and its various sequelae can be virtually eliminated by administration of a single dose of hepatitis B immune globulin shortly after birth ',0),(7,2,1,'The current recommendation for prevention of maternal fetal hepatitis B transmission consists of one dose of hepatitis B immune globulin and HepB vaccine at birth followed by completion of the 3 or 4 dose series by age 6 months. ',0),(8,2,1,'In addition to receiving hepatitis B immune globulin and a complete, 3-4 dose HepB vaccine series, the baby should undergo serological testing at 9-12 months to determine the need for repeat vaccination.  ',0),(9,3,2,'It is more likely than not, given his family history, that your patient’s former primary care physician in Milwaukee counseled him on reducing dietary sodium.',0),(10,3,2,'Advising your patient on reducing sodium intake would only be necessary if he were diagnosed with hypertension.',0),(11,3,2,'Because she has hypertension, your patient’s wife is more likely to have received advice from her doctor to reduce sodium intake. ',0),(12,3,2,'A diagnosis of hypertension would not have changed the likelihood that your patient had taken action to reduce his sodium intake. ',0),(13,4,2,'It is more likely than not, given his family history, that your patient’s former primary care physician in Milwaukee counseled him on reducing dietary sodium.',0),(14,4,2,'Advising your patient on reducing sodium intake would only be necessary if he were diagnosed with hypertension.',0),(15,4,2,'Because she has hypertension, your patient’s wife is more likely to have received advice from her doctor to reduce sodium intake. ',0),(16,4,2,'A diagnosis of hypertension would not have changed the likelihood that your patient had taken action to reduce his sodium intake. ',0),(17,5,3,'The older son can disregard the letter from his college health service as he is already fully protected from meningitis, having been fully vaccinated with MenACWY',0),(18,5,3,'In addition to the second dose of MenACWY, the younger son should also receive a MenB vaccine as part of routine pre-college preventive health care. ',0),(19,5,3,'Only the older son requires vaccination with the MenB vaccine as part of his college’s response to an ongoing outbreak of serogroup b meningococcal disease.',0),(20,5,3,'The younger son should receive the 2015 formulation of the meningitis vaccine, which now also confers immunity against serogroup b meningococcal disease.',0),(21,6,3,'The older son can disregard the letter from his college health service as he is already fully protected from meningitis, having been fully vaccinated with MenACWY',0),(22,6,3,'In addition to the second dose of MenACWY, the younger son should also receive a MenB vaccine as part of routine pre-college preventive health care. ',0),(23,6,3,'Only the older son requires vaccination with the MenB vaccine as part of his college’s response to an ongoing outbreak of serogroup b meningococcal disease.',0),(24,6,3,'The younger son should receive the 2015 formulation of the meningitis vaccine, which now also confers immunity against serogroup b meningococcal disease.',0);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-19 11:39:34
