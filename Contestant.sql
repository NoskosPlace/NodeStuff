CREATE schema storee;
USE storee;
CREATE TABLE `contestant` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `birthday` date,
  `entry_text` text NOT NULL,
  `created_date` TIMESTAMP DEFAULT NOW(), 
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
INSERT INTO `storee`.`contact` (`first_name`,`last_name`,`email`)
VALUES
('test1', 'one', 'test@example.com'),
('test2', 'two', 'test2@example.com'),
('test3', 'three', 'test3@example.com'),
('test4', 'four', 'test4@example.com'),
('test5', 'five', 'test4@example.com'),
('test6', 'six', 'test6@example.com'),
('test7', 'seven', 'test8@example.com'),
('test8', 'eight', 'test8@example.com'),
('test9', 'nine', 'test9@example.com'),
('John1', 'Doe', 'john@example.com'),
('John2', 'Doe2', 'john2@example.com'),
('John3', 'Doe3', 'john3@example.com'),
('John4', 'Doe4', 'john4@example.com'),
('John5', 'Doe5', 'john5@example.com'),
('John6', 'Doe6', 'john6@example.com'),
('John7', 'Doe7', 'john7@example.com'),
('test8', 'order', 'orderMan@example.com@example.com');