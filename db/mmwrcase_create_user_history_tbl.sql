CREATE TABLE `user_history` (
  `user_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `date_completed` timestamp NULL DEFAULT NULL,
  `cme_credit` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`case_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;