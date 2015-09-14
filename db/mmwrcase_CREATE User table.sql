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
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;