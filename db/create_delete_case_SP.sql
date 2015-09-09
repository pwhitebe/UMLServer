DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_case`(in caseId int)
BEGIN
	start transaction;
		delete from answer where case_id = caseId;
        delete from question where case_id = caseId;
        delete from case_main where case_id = caseId;
     commit;
END$$
DELIMITER ;
