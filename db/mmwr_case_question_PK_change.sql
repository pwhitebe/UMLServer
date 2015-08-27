ALTER TABLE `mmwr_case`.`question` 
DROP PRIMARY KEY,
ADD PRIMARY KEY (`case_id`, `question_id`),
DROP INDEX `quesiton_id_UNIQUE` ,
DROP FOREIGN KEY fk_Question_Case_Main;
CREATE UNIQUE INDEX case_question_PK ON question (case_id, question_id);

