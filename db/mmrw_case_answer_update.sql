ALTER TABLE `mmwr_case`.`answer` 
CHANGE COLUMN `hit_counter` `hit_counter` INT UNSIGNED NULL DEFAULT 0 COMMENT '' ;
DROP PRIMARY KEY,
ADD PRIMARY KEY (`case_id`, `question_id`, `answer_id`)  COMMENT '';
