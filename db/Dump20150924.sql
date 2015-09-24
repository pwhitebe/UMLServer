-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 127.0.0.1    Database: mmwr_case
-- ------------------------------------------------------
-- Server version	5.6.26

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
  `hit_counter` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`case_id`,`question_id`,`answer_id`),
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
INSERT INTO `answer` VALUES (1,1,1,'No special precautions are necessary because transmission of Hepatitis B from mother to child is very rare.',1,0),(2,1,1,'The risk to her child of hepatitis B infection and its various sequelae can be virtually eliminated by administration of a single dose of hepatitis B immune globulin shortly after birth ',0,0),(3,1,1,'The current recommendation for prevention of maternal fetal hepatitis B transmission consists of one dose of hepatitis B immune globulin and HepB vaccine at birth followed by completion of the 3 or 4 dose series by age 6 months. ',0,0),(4,1,1,'In addition to receiving hepatitis B immune globulin and a complete, 3-4 dose HepB vaccine series, the baby should undergo serological testing at 9-12 months to determine the need for repeat vaccination.  ',0,0),(5,2,1,'No special precautions are necessary because transmission of Hepatitis B from mother to child is very rare.',0,0),(6,2,1,'The risk to her child of hepatitis B infection and its various sequelae can be virtually eliminated by administration of a single dose of hepatitis B immune globulin shortly after birth ',1,0),(7,2,1,'The current recommendation for prevention of maternal fetal hepatitis B transmission consists of one dose of hepatitis B immune globulin and HepB vaccine at birth followed by completion of the 3 or 4 dose series by age 6 months. ',0,0),(8,2,1,'In addition to receiving hepatitis B immune globulin and a complete, 3-4 dose HepB vaccine series, the baby should undergo serological testing at 9-12 months to determine the need for repeat vaccination.  ',0,0),(9,3,2,'It is more likely than not, given his family history, that your patient’s former primary care physician in Milwaukee counseled him on reducing dietary sodium.',0,2),(10,3,2,'Advising your patient on reducing sodium intake would only be necessary if he were diagnosed with hypertension.',1,1),(11,3,2,'Because she has hypertension, your patient’s wife is more likely to have received advice from her doctor to reduce sodium intake. ',0,0),(12,3,2,'A diagnosis of hypertension would not have changed the likelihood that your patient had taken action to reduce his sodium intake. ',0,0),(13,4,2,'It is more likely than not, given his family history, that your patient’s former primary care physician in Milwaukee counseled him on reducing dietary sodium.',0,0),(14,4,2,'Advising your patient on reducing sodium intake would only be necessary if he were diagnosed with hypertension.',1,0),(15,4,2,'Because she has hypertension, your patient’s wife is more likely to have received advice from her doctor to reduce sodium intake. ',0,1),(16,4,2,'A diagnosis of hypertension would not have changed the likelihood that your patient had taken action to reduce his sodium intake. ',0,0),(17,5,3,'The older son can disregard the letter from his college health service as he is already fully protected from meningitis, having been fully vaccinated with MenACWY',0,4),(18,5,3,'In addition to the second dose of MenACWY, the younger son should also receive a MenB vaccine as part of routine pre-college preventive health care. ',0,12),(19,5,3,'Only the older son requires vaccination with the MenB vaccine as part of his college’s response to an ongoing outbreak of serogroup b meningococcal disease.',1,2),(20,5,3,'The younger son should receive the 2015 formulation of the meningitis vaccine, which now also confers immunity against serogroup b meningococcal disease.',0,0),(21,6,3,'The older son can disregard the letter from his college health service as he is already fully protected from meningitis, having been fully vaccinated with MenACWY',0,0),(22,6,3,'In addition to the second dose of MenACWY, the younger son should also receive a MenB vaccine as part of routine pre-college preventive health care. ',1,1),(23,6,3,'Only the older son requires vaccination with the MenB vaccine as part of his college’s response to an ongoing outbreak of serogroup b meningococcal disease.',0,0),(24,6,3,'The younger son should receive the 2015 formulation of the meningitis vaccine, which now also confers immunity against serogroup b meningococcal disease.',0,6);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

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
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `publication_date` timestamp NULL DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_main`
--

LOCK TABLES `case_main` WRITE;
/*!40000 ALTER TABLE `case_main` DISABLE KEYS */;
INSERT INTO `case_main` VALUES (1,'Hepatitis B','A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She has had excellent prenatal care and fetal development has been normal based on standard, non-invasive measures. ','0000-00-00 00:00:00','2015-08-20 04:00:00','<p><title></title></p><p class=\"p1\"><span class=\"s1\">A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She <b>has had excellent</b> prenatal care and fetal development has been normal based on standard, non-invasive measures.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\"><title></title></span></p><p class=\"p1\"><span class=\"s1\">During your conversation, she reports that she was found during prenatal screening to be infected with Hepatitis B. Based on follow-up testing, she was told that she did not have active infection, but was a chronic carrier of the virus. <i>Although she is asymptomatic and her liver enzymes</i> have been normal throughout pregnancy, the diagnosis has been a source of anxiety because she had a cousin who died in infancy in rural China from jaundice and is now believed to have had <u>neonatal viral hepatitis</u>.<span class=\"Apple-converted-space\"> </span></span></p><p></p>\n','<p><title></title></p><p class=\"p1\"><span class=\"s1\"></span></p><p><title></title></p><p><title></title></p><p class=\"p1\"><span class=\"s1\"><b></b></span></p><p><title></title></p><p class=\"p1\"><span class=\"s1\">The current recommendations from the Advisory Committee on Immunization Practices (ACIP) for infants born to hepatitis B-infected mothers include postexposure prophylaxis consisting of hepatitis B (HepB) vaccine and hepatitis B immune globulin administered within 12 hours of birth, followed by completion of the 3- or 4-dose HepB vaccine series (1). To identify infants who need revaccination as well as those who need follow-up medical care for hepatitis B virus (HBV) infection, ACIP currently recommends HepB post-vaccination serologic testing (PVST) at age 9–18 months (1). This report provides CDC guidance for shortening the interval for PVST to age 9–12 months to reduce the need for unnecessary revaccination and was prompted by new data from the Enhanced Perinatal Hepatitis B Prevention Program (EPHBPP).</span></p><p class=\"p1\"><span class=\"s1\"><span class=\"Apple-converted-space\"></span></span></p><p class=\"p1\"><span class=\"s1\"></span></p><p class=\"p1\"><span class=\"s1\"><span class=\"Apple-converted-space\"></span></span></p><p></p>\n','',1,0,4,5,NULL,2,1,NULL,NULL,3,'A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. '),(2,'Sodium Intake','A 36yo white male comes in for a new patient visit in order to establish care. He and his wife recently moved to your community from a suburb of Milwaukee where they were under the care of a residency classmate of yours. He has no specific complaints and no prior major illnesses or surgeries. A careful review of his records suggests that he is up to date on all recommended clinical preventive services. Your colleague recently administered the TD vaccine and screened him for hypertension and cholesterol abnormalities. He is in excellent physical shape and reports being physically active, running 4-5 times a week. He has a BMI of 21.  \n','0000-00-00 00:00:00','2015-08-20 04:00:00','<p><title></title></p><p class=\"p1\"><span class=\"s1\"></span></p><p><title></title></p><p class=\"p1\"><span class=\"s1\">A 36yo white male comes in for a new patient visit in order to establish care. He and his wife recently moved to your community from a suburb of Milwaukee where they were under the care of a residency classmate of yours. He has no specific complaints and no prior major illnesses or surgeries. A careful review of his records suggests that he is up to date on all recommended clinical preventive services. Your colleague recently administered the TD vaccine and screened him for hypertension and cholesterol abnormalities. He is in excellent physical shape and reports being physically active, running 4-5 times a week. He has a BMI of 21. <span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\">After asking about his use of tobacco, alcohol, and other drugs, all of which he denied, you ask about his regular diet. He beams with pride as he explains that he and his wife are very careful to eat a balanced and nutritious diet, despite the challenges of their busy professional lives. He explains in great detail that since his wife was told she had prehypertension, they have tried to adopt more of a Mediterranean-style diet, rich in fruits and vegetables, lean meats, and healthy oils. They avoid foods that are high in refined carbohydrates. He does admit to a weakness for salty snacks but has tried to switch from his favorite brand of potato chips to salted peanuts and almonds, which he heard are rich in healthy fats. While he and his wife try to cook dinner at home at least twice a week, he reports that his long work hours often force him to eat carry out meals at his desk. You conclude after hearing his description that his dietary sodium intake is at or above the average daily intake of 3600 mg.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\"></span></p><p class=\"p1\"><span class=\"s1\"><span class=\"Apple-converted-space\"></span></span></p><p></p>\n','<p><title></title></p><p class=\"p1\"><span class=\"s1\"></span></p><p><title></title></p><p><title></title></p><p class=\"p1\"><span class=\"s1\"><b>What is already known on this topic?</b></span></p><p class=\"p1\"><span class=\"s1\">National surveillance data show that current sodium intake in the United States is substantially higher than recommended. Excess sodium intake is an important risk factor for hypertension.</span></p><p class=\"p1\"><span class=\"s1\"><b>What is added by this report?</b></span></p><p class=\"p1\"><span class=\"s1\">In 2013, among 26 states, the District of Columbia, and Puerto Rico, the median prevalence of taking action to reduce sodium intake was 51%, ranging from 39% to 73%. The median prevalence of receiving health professional advice to reduce sodium intake was 22%, ranging from 14% to 41%. Although action and advice were higher among hypertensive participants across locations, 20%–50% did not report taking action, and 38%–68% reported not receiving advice to reduce sodium intake.</span></p><p class=\"p1\"><span class=\"s1\"><b>What are the implications for public health practice?</b></span></p><p class=\"p1\"><span class=\"s1\">These data highlight the opportunity to increase the proportion of health professionals who advise their patients to reduce sodium intake and the proportion of U.S. adults who take action to reduce sodium intake.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\"></span></p><p class=\"p1\"><span class=\"s1\"><span class=\"Apple-converted-space\"></span></span></p><p></p>\n','<p><title></title></p><p><title></title></p><p><title></title></p><p class=\"p1\"><span class=\"s1\">To learn more about action taken by Americans to address sodium consumption, see the full article summarizing<span class=\"Apple-converted-space\">  </span>results from the 2013 Behavioral Risk Factor Surveillance System:</span></p><p class=\"p1\"><span class=\"s1\"><b><a href=\"http://www.cdc.gov/mmwr/preview/mmwrhtml/mm6425a3.htm?s_cid=mm6425a3_w\" target=\"\">http://www.cdc.gov/mmwr/preview/mmwrhtml/mm6425a3.htm?s_cid=mm6425a3_w</a></b></span></p>\n',0,0,5,5,NULL,2,NULL,NULL,NULL,4,'A 36yo white male comes in for a new patient visit in order to establish care. '),(3,'Meningitis','A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment. He and his family are very well known to you as you have cared for him and his older brother, now a 19-yo college sophomore, since they were young children. He and his mother report no specific complaints, and his physical examination is completely normal. He is looking forward to starting classes at a large university about 200 miles away in a neighboring state. He reports with excitement that he got a spot at the most popular residence hall and will be sharing a suite with three other freshman. ','0000-00-00 00:00:00','2015-08-20 04:00:00','<p><title></title></p><p><title></title></p><p class=\"p1\"><span class=\"s1\">A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment. He and his family are very well known to you as you have cared for him and his older brother, now a 19-yo college sophomore, since they were young children. He and his mother report no specific complaints, and his physical examination is completely normal. He is looking forward to starting classes at a large university about 200 miles away in a neighboring state. He reports with excitement that he got a spot at the most popular residence hall and will be sharing a suite with three other freshman. He’s not yet sure what his major will be, but is hoping to use his first year to sample a variety of classes and extracurricular activities and really experience college life.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\"><span class=\"Apple-converted-space\"> </span>In addition to completing a standard health history and physical examination form, the University requires that you provide a detailed immunization record. According to your records, he is up to date on all of his childhood vaccines. When he was 12yo, you administered the Tdap, HPV-4 series, and one dose of the meningococcal conjugate (MenACWY) vaccine. You advise that he receive a second dose of the MenACWY vaccine as a booster today. As you go over this history and recommendation with him, his mother remarks that she had some questions about the meningitis vaccine.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\">As she retrieves an envelope from her bag, she reports that her older son, who attends a small college on the other side of the country and is home for the summer, recently received this letter from the student health service. The letter states that early in the summer term, two students became ill with meningitis due to <i>N. meningitides, </i>serogroup B. In an effort to prevent additional cases, the college is strongly advising that all new and returning students receive the new MenB vaccine prior to starting classes in the fall.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p1\"><span class=\"s1\">Understandably confused, the mother asks whether her older son is already protected against meningitis since, just as you recommended for his younger brother today, he received a MenACWY booster vaccine prior to entering college a year ago. If not and he indeed requires another vaccination, she wants to understand the differences between the two vaccines and whether the vaccine her younger son is to receive today will cover all forms of meningitis. <span class=\"Apple-converted-space\"> </span></span></p>\n','<p><title></title></p><p class=\"p1\"><span class=\"s1\"><b>Use of Serogroup B Meningococcal Vaccines in Persons Aged ≥10 Years at Increased Risk for Serogroup B Meningococcal Disease: Recommendations of the Advisory Committee on Immunization Practices, 2015</b></span></p><p class=\"p2\"><span class=\"s2\"><b>Morbidity and Mortality Weekly Report (MMWR) June 12, 2015 / 64(22);608-612. </b></span><span class=\"s1\">Temitope Folaranmi, MBChB1; Lorry Rubin, MD2; Stacey W. Martin, MSc3; Manisha Patel, MD3; Jessica R. MacNeil, MPH3<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p3\"><span class=\"s1\"><b>What is currently recommended?</b></span></p><p class=\"p3\"><span class=\"s1\">The Advisory Committee on Immunization Practices recommends routine vaccination with quadrivalent meningococcal conjugate vaccine (MenACWY) of certain groups of persons at increased risk for meningococcal disease: persons who have persistent complement component deficiencies; persons who have anatomic or functional asplenia; microbiologists who routinely are exposed to isolates of Neisseria meningitidis; persons identified to be at increased risk because of a meningococcal disease outbreak attributable to serogroup A, C, W, or Y; military recruits; first-year college students living in residence halls; and persons who travel to or reside in areas in which meningococcal disease is hyperendemic or epidemic.</span></p><p class=\"p3\"><span class=\"s1\"><b>Why are the recommendations being modified now?</b></span></p><p class=\"p3\"><span class=\"s1\">Two serogroup B meningococcal (MenB) vaccines were recently licensed by the Food and Drug Administration and approved for use in persons aged 10–25 years. The evidence supporting the use of MenB vaccines in persons at increased risk for serogroup B meningococcal disease was evaluated using the Grading of Recommendations, Assessment, Development, and Evaluation framework and determined to be type 2 (moderate level of evidence) for use in outbreak settings and type 3 (low level of evidence) for use in persons at increased risk for serogroup B meningococcal disease. The recommendation was designated as Category A (recommended for all persons in an age- or risk-factor–based group).</span></p><p class=\"p3\"><span class=\"s1\"><b>What are the new recommendations?</b></span></p><p class=\"p3\"><span class=\"s1\">Certain persons aged ≥10 years at increased risk for meningococcal disease should receive MenB vaccine. These persons include those with persistent complement component deficiencies; persons with anatomic or functional asplenia; microbiologists routinely exposed to isolates of Neisseria meningitidis; and persons identified to be at increased risk because of a serogroup B meningococcal disease outbreak.<span class=\"Apple-converted-space\"> </span></span></p><p class=\"p4\"><span class=\"s1\"></span><br/></p><p class=\"p3\"><span class=\"s1\">Note:<span class=\"Apple-converted-space\">  </span>Recommendations for routine use of vaccines in children, adolescents and adults are developed by the Advisory Committee on Immunization Practices (ACIP). ACIP is chartered as a federal advisory committee to provide expert external advice and guidance to the Director of the Centers for Disease Control and Prevention (CDC) on use of vaccines and related agents for the control of vaccine-preventable diseases in the civilian population of the United States. Recommendations for routine use of vaccines in children and adolescents are harmonized to the greatest extent possible with recommendations made by the American Academy of Pediatrics (AAP), the American Academy of Family Physicians (AAFP), and the American College of Obstetricians and Gynecologists (ACOG). Recommendations for routine use of vaccines in adults are harmonized with recommendations of AAFP, ACOG, and the American College of Physicians (ACP). ACIP recommendations approved by the CDC Director become agency guidelines on the date published in the Morbidity and Mortality Weekly Report (MMWR). Additional information is available at http://www.cdc.gov/vaccines/acip/.</span></p>\n','<p><br/>To learn more about meningococcal vaccination, see the full article summarizing the 2015 recommendations of the Advisory Committee on Immunization Practices at: </p><p><br/></p><p><a href=\"To learn more about meningococcal vaccination, see the full article summarizing the 2015 recommendations of the Advisory Committee on Immunization Practices at: http://www.cdc.gov/mmwr/preview/mmwrhtml/mm6422a3.htm?s_cid=mm6422a3_w\" target=\"\">http://www.cdc.gov/mmwr/preview/mmwrhtml/mm6422a3.htm?s_cid=mm6422a3_w</a></p>\n',0,0,4,5,NULL,0,NULL,NULL,NULL,2,'A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment.'),(6,'Influenza in Atlanta','A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment. He and his family are very well known to you as you have cared for him and his older brother, now a 19-yo college sophomore, since they were young children. He and his mother report no specific complaints, and his physical examination is completely normal. He is looking forward to starting classes at a large university about 200 miles away in a neighboring state. He reports with excitement that he got a spot at the most popular residence hall and will be sharing a suite with three other freshman. He’s not yet sure what his major will be, but is hoping to use his first year to sample a variety of classes and extracurricular activities and really experience college life.','2015-08-20 04:00:00','2015-08-20 04:00:00','A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment. He and his family are very well known to you as you have cared for him and his older brother, now a 19-yo college sophomore, since they were young children. He and his mother report no specific complaints, and his physical examination is completely normal. He is looking forward to starting classes at a large university about 200 miles away in a neighboring state. He reports with excitement that he got a spot at the most popular residence hall and will be sharing a suite with three other freshman. He’s not yet sure what his major will be, but is hoping to use his first year to sample a variety of classes and extracurricular activities and really experience college life.\nIn addition to completing a standard health history and physical examination form, the University requires that you provide a detailed immunization record. According to your records, he is up to date on all of his childhood vaccines. When he was 12yo, you administered the Tdap, HPV-4 series, and one dose of the meningococcal conjugate (MenACWY) vaccine. You advise that he receive a second dose of the MenACWY vaccine as a booster today.\nAs she retrieves an envelope from her bag, she reports that her older son, who attends a small college on the other side of the country and is home for the summer, recently received this letter from the student health service. The letter states that early in the summer term, two students became ill with meningitis due to N. meningitides, serogroup B. In an effort to prevent additional cases, the college is strongly advising that all new and returning students receive the new MenB vaccine prior to starting classes in the fall.\nUnderstandably confused, the mother asks whether her older son is already protected against meningitis since, just as you recommended for his younger brother today, he received a MenACWY booster vaccine prior to entering college a year ago. If not and he indeed requires another vaccination, she wants to understand the differences between the two vaccines and whether the vaccine her younger son is to receive today will cover all forms of meningitis.\n','Use of Serogroup B Meningococcal Vaccines in Persons Aged ≥10 Years at Increased Risk for Serogroup B  Meningococcal Disease: Recommendations of the Advisory Committee on Immunization Practices, 2015\nMorbidity and Mortality Weekly Report (MMWR) June 12, 2015 / 64(22);608-612. Temitope Folaranmi, MBChB1; Lorry Rubin, MD2; Stacey W. Martin, MSc3; Manisha Patel, MD3; Jessica R. MacNeil, MPH3\nWhat is currently recommended?\nThe Advisory Committee on Immunization Practices recommends routine vaccination with quadrivalent meningococcal conjugate vaccine (MenACWY) of certain groups of persons at increased risk for meningococcal disease: persons who have persistent complement component deficiencies; persons who have anatomic or functional asplenia; microbiologists who routinely are exposed to isolates of Neisseria meningitidis; persons identified to be at increased risk because of a meningococcal disease outbreak attributable to serogroup A, C, W, or Y; military recruits; first-year college students living in residence halls; and persons who travel to or reside in areas in which meningococcal disease is hyperendemic or epidemic.\nWhy are the recommendations being modified now?\nTwo serogroup B meningococcal (MenB) vaccines were recently licensed by the Food and Drug Administration and approved for use in persons aged 10–25 years. The evidence supporting the use of MenB vaccines in persons at increased risk for serogroup B meningococcal disease was evaluated using the Grading of Recommendations, Assessment, Development, and Evaluation framework and determined to be type 2 (moderate level of evidence).\nWhat are the new recommendations?\nCertain persons aged ≥10 years at increased risk for meningococcal disease should receive MenB vaccine. These persons include those with persistent complement component deficiencies; persons with anatomic or functional asplenia; microbiologists routinely exposed to isolates of Neisseria meningitidis; and persons identified to be at increased risk because of a serogroup B meningococcal disease outbreak persons with anatomic or functional asplenia; microbiologists routinely exposed to isolates of Neisseria meningitidis; and persons identified to be at increased risk because of a serogroup B meningococcal.\n',NULL,0,0,3,5,NULL,1,NULL,NULL,NULL,NULL,'A 17yo young man comes to see you, accompanied by his mother, for a pre-college health assessment.');
/*!40000 ALTER TABLE `case_main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `development_Status`
--

DROP TABLE IF EXISTS `development_Status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `development_Status` (
  `development_status_id` int(11) NOT NULL,
  `description` varchar(45) NOT NULL,
  PRIMARY KEY (`development_status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `development_Status`
--

LOCK TABLES `development_Status` WRITE;
/*!40000 ALTER TABLE `development_Status` DISABLE KEYS */;
INSERT INTO `development_Status` VALUES (0,'In Development'),(1,'On Hold'),(2,'Completed'),(3,'Awaiting CME Accreditation'),(4,'Approved for Publication'),(5,'Published');
/*!40000 ALTER TABLE `development_Status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `display_Status`
--

DROP TABLE IF EXISTS `display_Status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `display_Status` (
  `display_status_id` int(11) NOT NULL,
  `description` varchar(45) NOT NULL,
  PRIMARY KEY (`display_status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `display_Status`
--

LOCK TABLES `display_Status` WRITE;
/*!40000 ALTER TABLE `display_Status` DISABLE KEYS */;
INSERT INTO `display_Status` VALUES (0,'Current Case of the Week'),(1,'Upcoming Case'),(2,'Previously Case Archive'),(3,'Do not Display Case');
/*!40000 ALTER TABLE `display_Status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,3,'1','img/bb8.jpg',0,'BB-8 Droid'),(2,3,'2','img/bb8.jpg',0,'BB-8 Droid'),(3,3,'3','img/influenza.jpg',1,'Menigitis'),(4,3,'4','img/bb8.jpg',0,'BB-8 Droid'),(5,3,'5','img/bb8.jpg',0,'BB-8 Droid');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,1,1,'pre','Which of the following should be included in your advice to this anxious mother to be:'),(2,1,1,'post','Which of the following should be included in your advice to this anxious mother to be:'),(3,2,1,'pre','Based your knowledge of sodium intake among Americans, which of the following statements is most correct? '),(4,2,1,'post','Based your knowledge of sodium intake among Americans, which of the following statements is most correct? '),(5,3,1,'pre','Which of the following would be the most appropriate response to the questions your patient’s mother has posed regarding meningitis vaccination of her two college-student sons. '),(6,3,1,'post','Which of the following would be the most appropriate response to the questions your patient’s mother has posed regarding meningitis vaccination of her two college-student sons. ');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rating` (
  `rating_id` int(11) DEFAULT NULL,
  `case_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT '0',
  `rating_1` int(11) DEFAULT '0',
  `rating_2` int(11) DEFAULT '0',
  `rating_3` int(11) DEFAULT '0',
  `rating_4` int(11) DEFAULT '0',
  `rating_5` int(11) DEFAULT '0',
  PRIMARY KEY (`case_id`),
  KEY `fk_Rating_Case_Main1_idx` (`case_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (NULL,1,NULL,0,0,0,0,0,0),(NULL,2,NULL,0,0,0,0,0,0),(NULL,3,NULL,0,0,1,0,2,2),(NULL,4,NULL,0,0,0,0,0,0);
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(10) unsigned NOT NULL,
  `email` varchar(320) NOT NULL,
  `salt` char(64) NOT NULL,
  `hash_password` char(255) NOT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `display_name` varchar(80) DEFAULT NULL,
  `enabled` tinyint(4) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'kta@cdc.gov','1','kta',NULL,'admin','Michael','Ta','Michael Ta',1,NULL),(2,'user@cdc.gov','2','user',NULL,'user','User','Test','User Test',1,NULL),(3,'tsavel@cdc.gov','3','tsavel',NULL,'admin','Tom ','Savel','Tom Savel',1,NULL),(4,'sdavid@cdc.gov','4','sdavid',NULL,'admin','Sanjith','David','Sanjith David',1,NULL),(5,'tnguyrn@cdc.gov','5','tnguyen',NULL,'admin','Trung ','Nguyen','Trung Nguyen',1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_history`
--

DROP TABLE IF EXISTS `user_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_history` (
  `user_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `date_completed` timestamp NULL DEFAULT NULL,
  `cme_credit` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`case_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_history`
--

LOCK TABLES `user_history` WRITE;
/*!40000 ALTER TABLE `user_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-24 15:06:49
