CREATE TABLE `temp_image` (
  `image_id` int(11) ,
  `case_id` int(11) ,
  `sequence_id` varchar(45) ,
  `image_url` varchar(250) ,
  `featured` tinyint(1) ,
  `title` varchar(140) NOT NULL,
  `caption` varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
