ALTER TABLE `mmwr_case`.`case_main` 
CHANGE COLUMN `created_date` `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '' ,
CHANGE COLUMN `publication_date` `publication_date` TIMESTAMP COMMENT '' ;