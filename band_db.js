// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Main Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE IF EXISTS bands_2016_v1');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands_2016_v1 (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		
		//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Muse", "PYRAMID Stage", 20160624, 2215, 2345, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Foals", "PYRAMID Stage", 20160624, 2000, 2115, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Zz Top", "PYRAMID Stage", 20160624, 1815, 1915, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Jess Glynne", "PYRAMID Stage", 20160624, 1630, 1730, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Two Door Cinema Club", "PYRAMID Stage", 20160624, 1500, 1600, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Skepta", "PYRAMID Stage", 20160624, 1345, 1430, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Rokia TraorÉ", "PYRAMID Stage", 20160624, 1215, 1300, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "The Orchestra Of Syrian Musicians With Damon Albarn & Guests", "PYRAMID Stage", 20160624, 1100, 1145, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Adele", "PYRAMID Stage", 20160625, 2215, 2345, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Tame Impala", "PYRAMID Stage", 20160625, 2000, 2115, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "The Last Shadow Puppets", "PYRAMID Stage", 20160625, 1815, 1915, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Madness", "PYRAMID Stage", 20160625, 1630, 1730, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Wolf Alice", "PYRAMID Stage", 20160625, 1500, 1600, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Baaba Maal", "PYRAMID Stage", 20160625, 1340, 1430, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Squeeze", "PYRAMID Stage", 20160625, 1225, 1315, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Lewisham And Greenwich Nhs Choir", "PYRAMID Stage", 20160625, 1130, 1200, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Coldplay", "PYRAMID Stage", 20160626, 2130, 2315, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Beck", "PYRAMID Stage", 20160626, 1915, 2030, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Ellie Goulding", "PYRAMID Stage", 20160626, 1745, 1845, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Jeff Lynnes Elo", "PYRAMID Stage", 20160626, 1600, 1715, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Laura Mvula", "PYRAMID Stage", 20160626, 1430, 1515, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Gregory Porter", "PYRAMID Stage", 20160626, 1300, 1400, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Caravan Palace", "PYRAMID Stage", 20160626, 1200, 1240, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Burnham And Highbridge Band", "PYRAMID Stage", 20160626, 1100, 1130, 0, 0, "Sunday")');
		
	
	
	//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Disclosure", "OTHER Stage", 20160624, 2230, 2345, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Bastille", "OTHER Stage", 20160624, 2040, 2140, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Bring Me The Horizon", "OTHER Stage", 20160624, 1910, 2010, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Editors", "OTHER Stage", 20160624, 1740, 1840, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "The Lumineers", "OTHER Stage", 20160624, 1610, 1710, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Frightened Rabbit", "OTHER Stage", 20160624, 1450, 1540, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Christine And The Queens", "OTHER Stage", 20160624, 1340, 1430, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Blossoms", "OTHER Stage", 20160624, 1230, 1320, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "James", "OTHER Stage", 20160624, 1100, 1200, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "New Order", "OTHER Stage", 20160625, 2230, 2345, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Chvrches", "OTHER Stage", 20160625, 2045, 2145, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "The 1975", "OTHER Stage", 20160625, 1915, 2015, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Tom Odell", "OTHER Stage", 20160625, 1745, 1845, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Band Of Skulls", "OTHER Stage", 20160625, 1615, 1715, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Hurts", "OTHER Stage", 20160625, 1445, 1545, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "St. Paul And The Broken Bones", "OTHER Stage", 20160625, 1315, 1415, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Shura", "OTHER Stage", 20160625, 1200, 1245, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Haelos", "OTHER Stage", 20160625, 1100, 1140, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Lcd Soundsystem", "OTHER Stage", 20160626, 2145, 2315, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Pj Harvey", "OTHER Stage", 20160626, 1950, 2100, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Catfish And The Bottlemen", "OTHER Stage", 20160626, 1820, 1920, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Years & Years", "OTHER Stage", 20160626, 1650, 1750, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Jamie Lawson", "OTHER Stage", 20160626, 1530, 1620, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Paul Heaton + Jacqui Abbott", "OTHER Stage", 20160626, 1420, 1510, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Bears Den", "OTHER Stage", 20160626, 1320, 1400, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Newton Faulkner", "OTHER Stage", 20160626, 1220, 1300, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Anteros", "OTHER Stage", 20160626, 1130, 1200, 0, 1, "Sunday")');
	
	
	//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Underworld", "WEST HOLTS Stage", 20160624, 2215, 2345, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "RÓisÍn Murphy", "WEST HOLTS Stage", 20160624, 2030, 2130, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "White Denim", "WEST HOLTS Stage", 20160624, 1900, 2000, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Protoje", "WEST HOLTS Stage", 20160624, 1730, 1830, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Vince Staples", "WEST HOLTS Stage", 20160624, 1600, 1700, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Dakhabrakha", "WEST HOLTS Stage", 20160624, 1430, 1530, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Bixiga 70", "WEST HOLTS Stage", 20160624, 1300, 1400, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Paradise Bangkok Molam International Band", "WEST HOLTS Stage", 20160624, 1130, 1230, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "James Blake", "WEST HOLTS Stage", 20160625, 2215, 2345, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Santigold", "WEST HOLTS Stage", 20160625, 2030, 2130, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "The Very Best With Special Guests", "WEST HOLTS Stage", 20160625, 1900, 2000, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Shibusashirazu Orchestra", "WEST HOLTS Stage", 20160625, 1730, 1830, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Mbongwana Star", "WEST HOLTS Stage", 20160625, 1600, 1700, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Little Simz", "WEST HOLTS Stage", 20160625, 1430, 1530, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Oddisee & Good Compny", "WEST HOLTS Stage", 20160625, 1300, 1400, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Anna Meredith", "WEST HOLTS Stage", 20160625, 1130, 1230, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Earth, Wind And Fire", "WEST HOLTS Stage", 20160626, 2145, 2315, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Gary Clark Jr", "WEST HOLTS Stage", 20160626, 2000, 2100, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Quantic All Stars", "WEST HOLTS Stage", 20160626, 1830, 1930, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Anoushka Shankar", "WEST HOLTS Stage", 20160626, 1700, 1800, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Michael Kiwanuka", "WEST HOLTS Stage", 20160626, 1530, 1630, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Kamasi Washington", "WEST HOLTS Stage", 20160626, 1400, 1500, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Eska", "WEST HOLTS Stage", 20160626, 1230, 1330, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Human Pyramids", "WEST HOLTS Stage", 20160626, 1115, 1200, 0, 2, "Sunday")');
	
	
	//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Sigur Ros", "JOHN PEEL Stage", 20160624, 2230, 2345, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Alunageorge", "JOHN PEEL Stage", 20160624, 2100, 2200, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Explosions In The Sky", "JOHN PEEL Stage", 20160624, 1930, 2030, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Jack Garratt", "JOHN PEEL Stage", 20160624, 1810, 1900, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Half Moon Run", "JOHN PEEL Stage", 20160624, 1650, 1740, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Aurora", "JOHN PEEL Stage", 20160624, 1530, 1620, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Rat Boy", "JOHN PEEL Stage", 20160624, 1410, 1500, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Elle King", "JOHN PEEL Stage", 20160624, 1300, 1340, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "X Ambassadors", "JOHN PEEL Stage", 20160624, 1200, 1240, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Dan Stuart With Twin Tones", "JOHN PEEL Stage", 20160624, 1100, 1140, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "M83", "JOHN PEEL Stage", 20160625, 2230, 2345, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Fatboy Slim", "JOHN PEEL Stage", 20160625, 2030, 2200, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Example", "JOHN PEEL Stage", 20160625, 1920, 2010, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "John Grant", "JOHN PEEL Stage", 20160625, 1750, 1850, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "MØ", "JOHN PEEL Stage", 20160625, 1640, 1730, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "LÅpsley", "JOHN PEEL Stage", 20160625, 1510, 1610, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Alessia Cara", "JOHN PEEL Stage", 20160625, 1350, 1440, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Dua Lipa", "JOHN PEEL Stage", 20160625, 1245, 1325, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Nothing But Thieves", "JOHN PEEL Stage", 20160625, 1150, 1220, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Palace", "JOHN PEEL Stage", 20160625, 1100, 1130, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Jake Bugg", "JOHN PEEL Stage", 20160626, 2200, 2315, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Mac Demarco", "JOHN PEEL Stage", 20160626, 2030, 2130, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Of Monsters And Men", "JOHN PEEL Stage", 20160626, 1900, 2000, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Band Of Horses", "JOHN PEEL Stage", 20160626, 1730, 1830, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Bat For Lashes", "JOHN PEEL Stage", 20160626, 1600, 1700, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Mystery Jets", "JOHN PEEL Stage", 20160626, 1430, 1530, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Matt Corby", "JOHN PEEL Stage", 20160626, 1300, 1400, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Tired Lion", "JOHN PEEL Stage", 20160626, 1150, 1230, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "She Drew The Gun", "JOHN PEEL Stage", 20160626, 1100, 1130, 0, 3, "Sunday")');
		
		
		//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Richard Hawley", "THE PARK Stage", 20160624, 2300, 0015, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Savages", "THE PARK Stage", 20160624, 2130, 2230, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Ronnie Spector", "THE PARK Stage", 20160624, 2000, 2100, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Daughter", "THE PARK Stage", 20160624, 1830, 1930, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Ezra Furman", "THE PARK Stage", 20160624, 1700, 1800, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Unknown Mortal Orchestra", "THE PARK Stage", 20160624, 1530, 1630, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Nao", "THE PARK Stage", 20160624, 1415, 1500, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Night Beats", "THE PARK Stage", 20160624, 1300, 1345, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Declan Mckenna", "THE PARK Stage", 20160624, 1200, 1245, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Gwenno", "THE PARK Stage", 20160624, 1100, 1130, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Philip Glass Heroes Symphony", "THE PARK Stage", 20160625, 2345, 0030, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Mercury Rev", "THE PARK Stage", 20160625, 2130, 2230, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Floating Points (live)", "THE PARK Stage", 20160625, 2000, 2100, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Ernest Ranglin & Friends", "THE PARK Stage", 20160625, 1830, 1930, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Kurt Vile", "THE PARK Stage", 20160625, 1700, 1800, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Jagwar Ma", "THE PARK Stage", 20160625, 1530, 1630, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Lady Leshurr", "THE PARK Stage", 20160625, 1410, 1500, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Izzy Bizu", "THE PARK Stage", 20160625, 1300, 1345, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Cats Eyes", "THE PARK Stage", 20160625, 1200, 1240, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Car Seat Headrest", "THE PARK Stage", 20160625, 1100, 1130, 0, 4, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Grimes", "THE PARK Stage", 20160626, 2100, 2200, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Guy Garvey", "THE PARK Stage", 20160626, 1930, 2030, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Saint Etienne", "THE PARK Stage", 20160626, 1800, 1900, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Kwabs", "THE PARK Stage", 20160626, 1630, 1730, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Nathaniel Rateliff & The Night Sweats", "THE PARK Stage", 20160626, 1510, 1600, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Hinds", "THE PARK Stage", 20160626, 1400, 1445, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "C Duncan", "THE PARK Stage", 20160626, 1300, 1340, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Holly Macve", "THE PARK Stage", 20160626, 1200, 1240, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Khruangbin", "THE PARK Stage", 20160626, 1100, 1130, 0, 4, "Sunday")');


//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "John Lees Barclay James Harvest", "ACOUSTIC Stage", 20160624, 2130, 2300, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "Hothouse Flowers", "ACOUSTIC Stage", 20160624, 2000, 2100, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Sharon Shannon", "ACOUSTIC Stage", 20160624, 1830, 1930, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Ed Harcourt", "ACOUSTIC Stage", 20160624, 1725, 1810, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "The Alarm", "ACOUSTIC Stage", 20160624, 1625, 1705, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Goitse", "ACOUSTIC Stage", 20160624, 1530, 1610, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Michele Stodart (the Magic Numbers)", "ACOUSTIC Stage", 20160624, 1430, 1510, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Ward Thomas", "ACOUSTIC Stage", 20160624, 1335, 1420, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Monty Taft", "ACOUSTIC Stage", 20160624, 1245, 1320, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Roxanne De Bastion", "ACOUSTIC Stage", 20160624, 1200, 1230, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "The Shires", "ACOUSTIC Stage", 20160625, 2145, 2300, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Art Garfunkel", "ACOUSTIC Stage", 20160625, 2010, 2125, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Paul Carrack", "ACOUSTIC Stage", 20160625, 1845, 1945, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Ralph Mctell", "ACOUSTIC Stage", 20160625, 1720, 1815, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Nine Below Zero", "ACOUSTIC Stage", 20160625, 1620, 1705, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Glen Matlock", "ACOUSTIC Stage", 20160625, 1525, 1605, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Sam Lee", "ACOUSTIC Stage", 20160625, 1430, 1510, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Lewis & Leigh", "ACOUSTIC Stage", 20160625, 1335, 1415, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Hardwicke Circus", "ACOUSTIC Stage", 20160625, 1240, 1320, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Monty Taft", "ACOUSTIC Stage", 20160625, 1200, 1230, 0, 5, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Cyndi Lauper", "ACOUSTIC Stage", 20160626, 2130, 2300, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Gabrielle Aplin", "ACOUSTIC Stage", 20160626, 2000, 2100, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "The Bootleg Beatles", "ACOUSTIC Stage", 20160626, 1830, 1930, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Fishermans Friends", "ACOUSTIC Stage", 20160626, 1725, 1815, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Patty Griffin", "ACOUSTIC Stage", 20160626, 1620, 1705, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "The High Kings", "ACOUSTIC Stage", 20160626, 1525, 1605, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Hattie Whitehead", "ACOUSTIC Stage", 20160626, 1430, 1510, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Applewood Road", "ACOUSTIC Stage", 20160626, 1335, 1415, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "The Cornshed Sisters", "ACOUSTIC Stage", 20160626, 1245, 1320, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "Blair Dunlop", "ACOUSTIC Stage", 20160626, 1200, 1230, 0, 5, "Sunday")');
	
	
	
	//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "The Feeling", "AVALON Stage", 20160624, 2315, 0020, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Blackberry Smoke", "AVALON Stage", 20160624, 2145, 2245, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Corinne Bailey Rae", "AVALON Stage", 20160624, 2015, 2115, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Edward Ii", "AVALON Stage", 20160624, 1845, 1945, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Foy Vance", "AVALON Stage", 20160624, 1715, 1815, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Ben Miller Band", "AVALON Stage", 20160624, 1545, 1645, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "The Drystones", "AVALON Stage", 20160624, 1420, 1515, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Hobo Jones & The Junkyard Dogs", "AVALON Stage", 20160624, 1300, 1355, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Treacherous Orchestra", "AVALON Stage", 20160625, 2325, 0025, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Turin Brakes", "AVALON Stage", 20160625, 2155, 2255, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Will Young", "AVALON Stage", 20160625, 2015, 2125, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Larkin Poe", "AVALON Stage", 20160625, 1845, 1945, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "This Is The Kit", "AVALON Stage", 20160625, 1715, 1815, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "The Destroyers", "AVALON Stage", 20160625, 1545, 1645, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Beans On Toast", "AVALON Stage", 20160625, 1415, 1515, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Police Dog Hogan", "AVALON Stage", 20160625, 1250, 1350, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "King Eider", "AVALON Stage", 20160625, 1130, 1220, 0, 6, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Newton Faulkner", "AVALON Stage", 20160626, 2250, 2350, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Kt Tunstall", "AVALON Stage", 20160626, 2120, 2220, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Show Of Hands", "AVALON Stage", 20160626, 1950, 2050, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "Joanne Shaw Taylor", "AVALON Stage", 20160626, 1820, 1920, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "Seafret", "AVALON Stage", 20160626, 1650, 1750, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Rob Heron And The Tea Pad Orchestra", "AVALON Stage", 20160626, 1520, 1620, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Mitch Benn", "AVALON Stage", 20160626, 1400, 1455, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "The Elephant Sessions", "AVALON Stage", 20160626, 1245, 1340, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "Holy Moly And The Crackers", "AVALON Stage", 20160626, 1130, 1220, 0, 6, "Sunday")');
		
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "A Guy Called Gerald", "GLADE", 20160623, 0050, 0250, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Will White (propellerheads)", "GLADE", 20160623, 2250, 0050, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Be One", "GLADE", 20160623, 2155, 2245, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Bill Brewster", "GLADE", 20160623, 1940, 2140, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "Funktion One Experimental Soundfield", "GLADE", 20160623, 1740, 1940, 0, 7, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Dave Seaman", "GLADE", 20160624, 0130, 0250, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Get Down Edits", "GLADE", 20160624, 0035, 0130, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Roni Size & Dj Krust:full Cycle Ft Dynamite Mc", "GLADE", 20160624, 2225, 0025, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Drumsound & Bassline Smith Hosted By Youngman", "GLADE", 20160624, 2125, 2225, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "North Base", "GLADE", 20160624, 2025, 2125, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Fred V & Grafix", "GLADE", 20160624, 1925, 2025, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Example & Dj Wire", "GLADE", 20160624, 1825, 1925, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (202, "Dub Pistols", "GLADE", 20160624, 1710, 1810, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (203, "Don Letts", "GLADE", 20160624, 1640, 1710, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (204, "Gentlemans Dub Club", "GLADE", 20160624, 1540, 1640, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (205, "Don Letts", "GLADE", 20160624, 1440, 1540, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (206, "Gringo Ska", "GLADE", 20160624, 1325, 1425, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (207, "Youth", "GLADE", 20160624, 1200, 1325, 0, 7, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (208, "Danny Howells", "GLADE", 20160625, 0035, 0250, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (209, "Carl Cox", "GLADE", 20160625, 2125, 0025, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (210, "A Guy Called Gerald", "GLADE", 20160625, 1955, 2125, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (211, "Funktion One Experimental Soundfield", "GLADE", 20160625, 1855, 1955, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (212, "Vessels", "GLADE", 20160625, 1755, 1855, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (213, "Emily Dust", "GLADE", 20160625, 1725, 1755, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (214, "Braids", "GLADE", 20160625, 1625, 1725, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (215, "Ozric Tentacles", "GLADE", 20160625, 1425, 1555, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (216, "Hypnocoustics (live)", "GLADE", 20160625, 1315, 1415, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (217, "Tristan", "GLADE", 20160625, 1145, 1315, 0, 7, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (218, "Kayla Painter", "GLADE", 20160626, 0045, 0230, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (219, "Plaid", "GLADE", 20160626, 0015, 0130, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (220, "Dubfire:live Hybrid", "GLADE", 20160626, 2235, 2350, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (221, "Simon Shackleton", "GLADE", 20160626, 2135, 2235, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (222, "Henry Saiz", "GLADE", 20160626, 2035, 2135, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (223, "Stereo Mcs", "GLADE", 20160626, 1905, 2005, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (224, "Dreadzone", "GLADE", 20160626, 1720, 1820, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (225, "Stanton Warriors", "GLADE", 20160626, 1600, 1700, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (226, "Sona Jobarteh", "GLADE", 20160626, 1430, 1530, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (227, "Cassetteboy Vs Dj Rubbish", "GLADE", 20160626, 1325, 1410, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (228, "Touretteshero And Captain Hotknives", "GLADE", 20160626, 1250, 1320, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (229, "Davos", "GLADE", 20160626, 1200, 1245, 0, 7, "Sunday")');
		
		
		//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (230, "Kano", "SONIC", 20160624, 2345, 0030, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (231, "Charlie Sloth", "SONIC", 20160624, 2230, 2345, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (232, "Stormzy", "SONIC", 20160624, 2130, 2230, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (233, "Lady Leshurr", "SONIC", 20160624, 2015, 2115, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (234, "Section Boyz", "SONIC", 20160624, 1900, 2000, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (235, "Kurupt Fm", "SONIC", 20160624, 1730, 1845, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (236, "Swindle Live", "SONIC", 20160624, 1600, 1700, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (237, "Novelist", "SONIC", 20160624, 1500, 1545, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (238, "J Hus", "SONIC", 20160624, 1415, 1445, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (239, "Bugzy Malone", "SONIC", 20160624, 1315, 1400, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (240, "Ksi", "SONIC", 20160624, 1215, 1300, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (241, "Charlie Sloth", "SONIC", 20160624, 1200, 1215, 0, 8, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (242, "Oliver Heldens", "SONIC", 20160625, 2300, 0030, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (243, "Tensnake", "SONIC", 20160625, 2130, 2245, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (244, "Idris Elba", "SONIC", 20160625, 1945, 2115, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (245, "Disciples", "SONIC", 20160625, 1830, 1930, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (246, "Snakehips", "SONIC", 20160625, 1700, 1800, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (247, "Blonde", "SONIC", 20160625, 1530, 1630, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (248, "Lion Babe", "SONIC", 20160625, 1450, 1520, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (249, "Claptone", "SONIC", 20160625, 1330, 1450, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (250, "Dj Von", "SONIC", 20160625, 1230, 1330, 0, 8, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (251, "Dj Premier", "SONIC", 20160626, 2230, 0000, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (252, "Netsky Live", "SONIC", 20160626, 2130, 2230, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (253, "Craig Davids Ts5", "SONIC", 20160626, 2000, 2100, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (254, "Wstrn", "SONIC", 20160626, 1900, 1930, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (255, "Dua Lipa", "SONIC", 20160626, 1730, 1830, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (256, "Raleigh Richie", "SONIC", 20160626, 1600, 1700, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (257, "Rejjie Snow", "SONIC", 20160626, 1430, 1530, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (258, "Maya Jama", "SONIC", 20160626, 1330, 1430, 0, 8, "Sunday")');
		
		
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (259, "Paranoid London", "WOW", 20160623, 0200, 0300, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (260, "Felix Dickinson", "WOW", 20160623, 0100, 0200, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (261, "Formation", "WOW", 20160623, 0000, 0100, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (262, "Pbr Streetgang", "WOW", 20160623, 2300, 0000, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (263, "Mura Masa", "WOW", 20160623, 2200, 2300, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (264, "Moxie", "WOW", 20160623, 2100, 2200, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (265, "Bonzai", "WOW", 20160623, 2000, 2100, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (266, "Normski", "WOW", 20160623, 1945, 2000, 0, 9, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (267, "Kowton", "WOW", 20160624, 0200, 0300, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (268, "Four Tet", "WOW", 20160624, 0100, 0200, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (269, "Annie Mac", "WOW", 20160624, 0000, 0100, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (270, "Julio Bashmore", "WOW", 20160624, 2230, 0000, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (271, "Palms Trax", "WOW", 20160624, 2100, 2230, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (272, "Will Saul", "WOW", 20160624, 2000, 2100, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (273, "Red Axes", "WOW", 20160624, 1900, 2000, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (274, "Fatima Yamaha", "WOW", 20160624, 1800, 1900, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (275, "Bicep Outdoor Party Ft Bicep, Leon Vynehall, Man Power, Park Ranger, Mr Solid Gold", "WOW", 20160624, 1300, 1800, 0, 9, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (276, "Sian Anderson & Madam X", "WOW", 20160625, 0200, 0300, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (277, "Melody Kane & Siobhan Bell", "WOW", 20160625, 0100, 0200, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (278, "Jamz Supernova & Amy Becker", "WOW", 20160625, 0000, 0100, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (279, "Culture Shock With Mc Id", "WOW", 20160625, 2300, 0000, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (280, "Dimension With Mc Id", "WOW", 20160625, 2200, 2300, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (281, "Butterz Showcase : Elijah & Skilliam, Royal T, Dj Q And Swindle", "WOW", 20160625, 2100, 2200, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (282, "Ivy Lab", "WOW", 20160625, 2000, 2100, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (283, "Levelz", "WOW", 20160625, 1900, 2000, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (284, "Rude Kid With Youngman", "WOW", 20160625, 1800, 1900, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (285, "Gutterfunk Outdoor Party Ft Dj Die, Dismantle, Addison Groove, Chimpo, Drs, Dj Kahnage And White Bully Soundsystem", "WOW", 20160625, 1300, 1800, 0, 9, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (286, "Welfare Unit (ft. Kate Tempest, Kwake Bass, Dan Carey & Alex Gent)", "WOW", 20160626, 0100, 0230, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (287, "Slipmatt", "WOW", 20160626, 0000, 0100, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (288, "Danny L Harle", "WOW", 20160626, 2300, 0000, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (289, "Bob Moses", "WOW", 20160626, 2200, 2300, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (290, "Akase", "WOW", 20160626, 2100, 2200, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (291, "Maribou State", "WOW", 20160626, 2000, 2100, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (292, "A Sagittariun", "WOW", 20160626, 1900, 2000, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (293, "Khruangbin", "WOW", 20160626, 1800, 1900, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (294, "My Nu Leng And M8s Outdoor Party Ft My Nu Leng, Redlight, Beating Heart, Barely Legal And Monki", "WOW", 20160626, 1300, 1800, 0, 9, "Sunday")');


//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (295, "Protoje", "GULLY", 20160624, 2300, 0030, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (296, "Dezzi Rankin", "GULLY", 20160624, 2230, 2300, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (297, "Soom T", "GULLY", 20160624, 2130, 2230, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (298, "Natty", "GULLY", 20160624, 2000, 2100, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (299, "Baloji & L Orchestre De La Katuba", "GULLY", 20160624, 1830, 1940, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (300, "Suming", "GULLY", 20160624, 1700, 1800, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (301, "Mydy Rabycad", "GULLY", 20160624, 1530, 1630, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (302, "Yoyo Borobia", "GULLY", 20160624, 1400, 1500, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (303, "Dj Doctor D.", "GULLY", 20160624, 1300, 1400, 0, 10, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (304, "Lee Scratch Perry", "GULLY", 20160625, 2300, 0030, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (305, "Graham Candy", "GULLY", 20160625, 2130, 2230, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (306, "Hollie Cook", "GULLY", 20160625, 2000, 2100, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (307, "Kiko Bun", "GULLY", 20160625, 1830, 1930, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (308, "Dende & Band", "GULLY", 20160625, 1700, 1800, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (309, "Broadway Sounds", "GULLY", 20160625, 1530, 1630, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (310, "True Vibenation", "GULLY", 20160625, 1400, 1500, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (311, "Lounge Cat Ideals", "GULLY", 20160625, 1230, 1330, 0, 10, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (312, "Dj Casswarrior", "GULLY", 20160625, 1200, 1230, 0, 10, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (313, "Slamboree", "GULLY", 20160626, 2245, 0000, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (314, "Dele Sosimi", "GULLY", 20160626, 2045, 2215, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (315, "Jungle By Night", "GULLY", 20160626, 1900, 2015, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (316, "Yakumo Orchestra", "GULLY", 20160626, 1730, 1830, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (317, "Oka", "GULLY", 20160626, 1545, 1700, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (318, "Rag N Bone Man", "GULLY", 20160626, 1430, 1515, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (319, "Yo Yo Borobia", "GULLY", 20160626, 1300, 1400, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (320, "Russ Ryan", "GULLY", 20160626, 1230, 1300, 0, 10, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (321, "Dj Farmer", "GULLY", 20160626, 1200, 1230, 0, 10, "Sunday")');


//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (322, "Eats Everything", "THE BLUES", 20160623, 0130, 0300, 0, 11, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (323, "Redlight", "THE BLUES", 20160623, 0000, 0130, 0, 11, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (324, "Gotsome", "THE BLUES", 20160623, 2230, 0000, 0, 11, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (325, "Feel The Real Soundsystem", "THE BLUES", 20160623, 2000, 2230, 0, 11, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (326, "Maceo Plex", "THE BLUES", 20160624, 0130, 0300, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (327, "Mungos Hifi", "THE BLUES", 20160624, 0030, 0130, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (328, "Dj Luck And Mc Neat", "THE BLUES", 20160624, 2300, 0030, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (329, "Smith And Mighty", "THE BLUES", 20160624, 2130, 2300, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (330, "Ms Ko", "THE BLUES", 20160624, 2030, 2130, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (331, "Mr Vegas", "THE BLUES", 20160624, 1900, 2030, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (332, "Radiola Serra Alta", "THE BLUES", 20160624, 1730, 1900, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (333, "Isaiah Dreads", "THE BLUES", 20160624, 1630, 1730, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (334, "Original Paradise Bangkok Djs Maft Sai & Chris Menist", "THE BLUES", 20160624, 1500, 1630, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (335, "Lionstar Soundz", "THE BLUES", 20160624, 1330, 1500, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (336, "Mungos Hifi", "THE BLUES", 20160624, 1300, 1330, 0, 11, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (337, "Mungos Hifi", "THE BLUES", 20160625, 0130, 0300, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (338, "Preditah", "THE BLUES", 20160625, 0000, 0130, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (339, "Section Boyz", "THE BLUES", 20160625, 2230, 0000, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (340, "Ms Dynamite", "THE BLUES", 20160625, 2100, 2230, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (341, "Yungen", "THE BLUES", 20160625, 2000, 2100, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (342, "Lady Lykez", "THE BLUES", 20160625, 1900, 2000, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (343, "Nadia Rose", "THE BLUES", 20160625, 1800, 1900, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (344, "Stefflon Don", "THE BLUES", 20160625, 1700, 1800, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (345, "Sub Luna City", "THE BLUES", 20160625, 1600, 1700, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (346, "Lady Sanity", "THE BLUES", 20160625, 1500, 1600, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (347, "Trellion And Sniff", "THE BLUES", 20160625, 1400, 1500, 0, 11, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (348, "Mungos Hifi", "THE BLUES", 20160625, 1300, 1400, 0, 11, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (349, "Mungos Hifi", "THE BLUES", 20160626, 0100, 0230, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (350, "Dj Badly", "THE BLUES", 20160626, 2330, 0100, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (351, "Mr Bongo Soundsystem", "THE BLUES", 20160626, 2200, 2330, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (352, "Neville Staple Jah Baddis Dj", "THE BLUES", 20160626, 2100, 2200, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (353, "2 Kings Soundsystem", "THE BLUES", 20160626, 1930, 2100, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (354, "Dj Queen Bee", "THE BLUES", 20160626, 1800, 1930, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (355, "Generals Hi Fi", "THE BLUES", 20160626, 1630, 1800, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (356, "Bliss Zion And Tickles", "THE BLUES", 20160626, 1500, 1630, 0, 11, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (357, "Dj Dapper Dan", "THE BLUES", 20160626, 1330, 1500, 0, 11, "Sunday")');


//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (358, "Dj Poshratz", "THE RABBIT HOLE", 20160622, 2100, 0300, 0, 12, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (359, "Bite The Buffalo", "THE RABBIT HOLE", 20160623, 0200, 0300, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (360, "The Mad Cows", "THE RABBIT HOLE", 20160623, 0000, 0115, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (361, "Curious Little Big Band", "THE RABBIT HOLE", 20160623, 2200, 2300, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (362, "Lekiddo Lord Of The Lobsters!", "THE RABBIT HOLE", 20160623, 2100, 2130, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (363, "Marcus Mccoan", "THE RABBIT HOLE", 20160623, 1930, 2015, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (364, "Bossy Love", "THE RABBIT HOLE", 20160623, 1815, 1845, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (365, "Gillbanks", "THE RABBIT HOLE", 20160623, 1715, 1745, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (366, "She Drew The Gun", "THE RABBIT HOLE", 20160623, 1600, 1645, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (367, "Lady Sanity", "THE RABBIT HOLE", 20160623, 1500, 1530, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (368, "Henry Green", "THE RABBIT HOLE", 20160623, 1400, 1430, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (369, "Early Ghost", "THE RABBIT HOLE", 20160623, 1300, 1330, 0, 12, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (370, "Jack Robert Hardman", "THE RABBIT HOLE", 20160623, 1200, 1230, 0, 12, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (371, "Baldo Verdu Y Su Tonto Malenbe", "THE RABBIT HOLE", 20160624, 0230, 0400, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (372, "Sultans Of Disco", "THE RABBIT HOLE", 20160624, 0030, 0145, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (373, "Dermot Oleary", "THE RABBIT HOLE", 20160624, 2300, 0030, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (374, "Formation", "THE RABBIT HOLE", 20160624, 2200, 2300, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (375, "Billington And Quinn", "THE RABBIT HOLE", 20160624, 2000, 2100, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (376, "Longy", "THE RABBIT HOLE", 20160624, 1815, 1915, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (377, "Hannah Lou Clark", "THE RABBIT HOLE", 20160624, 1700, 1745, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (378, "Toothless", "THE RABBIT HOLE", 20160624, 1545, 1630, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (379, "Mik Artistik", "THE RABBIT HOLE", 20160624, 1415, 1515, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (380, "Gemma And The Mil Men", "THE RABBIT HOLE", 20160624, 1300, 1345, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (381, "Eliza Jane", "THE RABBIT HOLE", 20160624, 1200, 1230, 0, 12, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (382, "The Egg", "THE RABBIT HOLE", 20160625, 0230, 0400, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (383, "Solid State Disco", "THE RABBIT HOLE", 20160625, 0030, 0115, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (384, "Vangoffey", "THE RABBIT HOLE", 20160625, 2200, 2330, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (385, "Jack T Charles", "THE RABBIT HOLE", 20160625, 2000, 2100, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (386, "Jake Morrell", "THE RABBIT HOLE", 20160625, 1830, 1915, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (387, "Body Clocks", "THE RABBIT HOLE", 20160625, 1715, 1800, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (388, "Duncan Disorderly And The Scallywags", "THE RABBIT HOLE", 20160625, 1600, 1645, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (389, "The Bespoke", "THE RABBIT HOLE", 20160625, 1500, 1530, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (390, "Lorkin Oreilly", "THE RABBIT HOLE", 20160625, 1400, 1430, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (391, "Sam Piper", "THE RABBIT HOLE", 20160625, 1300, 1330, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (392, "Aya", "THE RABBIT HOLE", 20160625, 1200, 1230, 0, 12, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (393, "Bob Moses", "THE RABBIT HOLE", 20160626, 0300, 0400, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (394, "Charlotte Churchs Pop Dungeon", "THE RABBIT HOLE", 20160626, 0100, 0200, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (395, "Man And The Echo", "THE RABBIT HOLE", 20160626, 2300, 0000, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (396, "Palace", "THE RABBIT HOLE", 20160626, 2100, 2200, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (397, "Big Moon", "THE RABBIT HOLE", 20160626, 1900, 2000, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (398, "Bless", "THE RABBIT HOLE", 20160626, 1715, 1815, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (399, "The Drystones", "THE RABBIT HOLE", 20160626, 1600, 1645, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (400, "Harry Pane", "THE RABBIT HOLE", 20160626, 1500, 1530, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (401, "Suspect Alibi", "THE RABBIT HOLE", 20160626, 1400, 1430, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (402, "Adam Scott Glasspool", "THE RABBIT HOLE", 20160626, 1300, 1330, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (403, "Back Before Breakfast", "THE RABBIT HOLE", 20160626, 1200, 1230, 0, 12, "Sunday")');
		
		
		
		//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (404, "Nacho", "LONDON UNDERGROUND", 20160622, 0100, 0300, 0, 13, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (405, "Charlie Mcfarley", "LONDON UNDERGROUND", 20160622, 2300, 0100, 0, 13, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (406, "4tunecookie", "LONDON UNDERGROUND", 20160622, 2130, 2300, 0, 13, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (407, "Sonwah", "LONDON UNDERGROUND", 20160622, 2000, 2130, 0, 13, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (408, "Sexyrubbersoul", "LONDON UNDERGROUND", 20160623, 0200, 0300, 0, 13, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (409, "Tasty Lopez", "LONDON UNDERGROUND", 20160623, 0030, 0200, 0, 13, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (410, "Quatermass", "LONDON UNDERGROUND", 20160623, 2300, 0030, 0, 13, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (411, "Nicky Blackmarket", "LONDON UNDERGROUND", 20160623, 2130, 2300, 0, 13, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (412, "Jim Bitch", "LONDON UNDERGROUND", 20160623, 2000, 2130, 0, 13, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (413, "Appleblim", "LONDON UNDERGROUND", 20160624, 0430, 0600, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (414, "Artwork", "LONDON UNDERGROUND", 20160624, 0300, 0430, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (415, "Youngsta", "LONDON UNDERGROUND", 20160624, 0130, 0300, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (416, "Hodge", "LONDON UNDERGROUND", 20160624, 0000, 0130, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (417, "Horsepower Productions", "LONDON UNDERGROUND", 20160624, 2200, 0000, 0, 13, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (418, "Mark Solution", "LONDON UNDERGROUND", 20160625, 0400, 0600, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (419, "Yt", "LONDON UNDERGROUND", 20160625, 0230, 0400, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (420, "Manasseh", "LONDON UNDERGROUND", 20160625, 0100, 0230, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (421, "Steve Bedlam", "LONDON UNDERGROUND", 20160625, 2330, 0100, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (422, "Nacho", "LONDON UNDERGROUND", 20160625, 2200, 2330, 0, 13, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (423, "Jstar", "LONDON UNDERGROUND", 20160626, 0200, 0330, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (424, "Shy Fx & Stamina", "LONDON UNDERGROUND", 20160626, 0100, 0200, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (425, "Lmk", "LONDON UNDERGROUND", 20160626, 2330, 0100, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (426, "Raggs", "LONDON UNDERGROUND", 20160626, 2200, 2330, 0, 13, "Sunday")');
		
});
db.transaction(function (tx) {	


		set_up_main_page();
	});
}













