// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		
		
		//friday pyramid
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (1, "Foo Fighters", "Pyramid Stage", 20150626, 2115, 2345, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (2, "Florence and the Machine", "Pyramid Stage", 20150626, 1915, 2025, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (3, "Motorhead", "Pyramid Stage", 20150626, 1730, 1830, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (4, "Mary J Blige", "Pyramid Stage", 20150626, 1600, 1700, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (5, "Alabama Shakes", "Pyramid Stage", 20150626, 1430, 1530, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (6, "James Bay", "Pyramid Stage", 20150626, 1300, 1400, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (7, "Chronixx", "Pyramid Stage", 20150626, 1200, 1240, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (8, "Michael Clark Company", "Pyramid Stage", 20150626, 1100, 1130, 0, 0, "Friday", "video_link_HERE")');
		
		
		
		//sat pyramid
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (9, "Kanye West", "Pyramid Stage", 20150627, 2215, 2345, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (10, "Pharrell Williams", "Pyramid Stage", 20150627, 2000, 2115, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (11, "Paloma Faith", "Pyramid Stage", 20150627, 1815, 1915, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (12, "Burt Bacharach", "Pyramid Stage", 20150627, 1630, 1730, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (13, "George Ezra", "Pyramid Stage", 20150627, 1500, 1600, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (14, "The Waterboys", "Pyramid Stage", 20150627, 1330, 1430, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (15, "Courtney Barnett", "Pyramid Stage", 20150627, 1210, 1300, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (16, "The Unthanks", "Pyramid Stage", 20150627, 1100, 1145, 0, 0, "Saturday", "video_link_HERE")');
		
		//sun pyramid
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (17, "The Who", "Pyramid Stage", 20150628, 2145, 2315, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (18, "Paul Weller", "Pyramid Stage", 20150628, 1930, 2045, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (19, "Alt J", "Pyramid Stage", 20150628, 1745, 1845, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (20, "Lionel Richie", "Pyramid Stage", 20150628, 1600, 1715, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (21, "Patti Smith", "Pyramid Stage", 20150628, 1415, 1515, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (22, "Hozier", "Pyramid Stage", 20150628, 1300, 1345, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (23, "Songhoy Blues", "Pyramid Stage", 20150628, 1200, 1240, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (24, "Burtle Silver Band", "Pyramid Stage", 20150628, 1100, 1140, 0, 0, "Sunday", "video_link_HERE")');
		
		
		//fri other
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (25, "Rudimental", "Other Stage", 20150626, 2230, 2345, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (26, "Mark Ronson", "Other Stage", 20150626, 2100, 2200, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (27, "Courteeners", "Other Stage", 20150626, 1930, 2030, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (28, "The Vaccines", "Other Stage", 20150626, 1800, 1900, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (29, "Jungle", "Other Stage", 20150626, 1630, 1730, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (30, "Catfish And The Bottlemen", "Other Stage", 20150626, 1500, 1600, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (31, "Everything Everything", "Other Stage", 20150626, 1350, 1430, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (32, "The Cribs", "Other Stage", 20150626, 1230, 1320, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (33, "Special Guest", "Other Stage", 20150626, 1100, 1200, 0, 1, "Friday", "video_link_HERE")');
		
		
		//sat other
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (34, "Deadmau5", "Other Stage", 20150627, 2230, 2345, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (35, "Ben Howard", "Other Stage", 20150627, 2040, 2155, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (36, "The Maccabees", "Other Stage", 20150627, 1905, 2005, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (37, "Clean Bandit", "Other Stage", 20150627, 1735, 1835, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (38, "Ella Eyre", "Other Stage", 20150627, 1605, 1705, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (39, "Young Fathers", "Other Stage", 20150627, 1445, 1545, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (40, "Azealia Bands", "Other Stage", 20150627, 1325, 1415, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (41, "Frank Turner", "Other Stage", 20150627, 1200, 1300, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (42, "Swim Deep", "Other Stage", 20150627, 1100, 1140, 0, 1, "Saturday", "video_link_HERE")');
		
		
		//sun other
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (43, "The Chemical Brothers", "Other Stage", 20150628, 2145, 2315, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (44, "Jamie T", "Other Stage", 20150628, 2015, 2115, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (45, "Belle And Sebastian", "Other Stage", 20150628, 1845, 1945, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (46, "Future Islands", "Other Stage", 20150628, 1715, 1815, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (47, "Twin Atlantic", "Other Stage", 20150628, 1545, 1645, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (48, "Palma Violets", "Other Stage", 20150628, 1415, 1515, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (49, "Adam Cohen", "Other Stage", 20150628, 1300, 1350, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (50, "Soak", "Other Stage", 20150628, 1200, 1240, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (51, "Rival Sons", "Other Stage", 20150628, 1100, 1140, 0, 1, "Sunday", "video_link_HERE")');
		
		//fri west holts
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (52, "Hot Chip", "West Holts", 20150626, 2215, 2345, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (53, "Caribou", "West Holts", 20150626, 2030, 2130, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (54, "Run The Jewels", "West Holts", 20150626, 1900, 2000, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (55, "The Gaslamp Killer Experience", "West Holts", 20150626, 1730, 1830, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (56, "Kasia Allstars", "West Holts", 20150626, 1600, 1700, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (57, "Marcos Valle", "West Holts", 20150626, 1430, 1530, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (58, "Dorian Concept", "West Holts", 20150626, 1300, 1400, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (59, "The Cambodian Space Project", "West Holts", 20150626, 1130, 1230, 0, 2, "Friday", "video_link_HERE")');
		
		
		//sat west holts
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (60, "The Mothership Returns", "West Holts", 20150627, 2145, 2345, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (61, "Todd Terje And The Olsens", "West Holts", 20150627, 2000, 2100, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (62, "Vintage Trouble", "West Holts", 20150627, 1830, 1930, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (63, "Gregory Porter", "West Holts", 20150627, 1700, 1800, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (64, "Soil and Pimp Sessions", "West Holts", 20150627, 1530, 1630, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (65, "Sinkane", "West Holts", 20150627, 1400, 1500, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (66, "Jane Weaver", "West Holts", 20150627, 1230, 1330, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (67, "KOG And The Zongo Brigade", "West Holts", 20150627, 1100, 1200, 0, 2, "Saturday", "video_link_HERE")');
		
		//sun west holts
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (68, "Flying Lotus", "West Holts", 20150628, 2200, 2315, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (69, "FKA Twigs", "West Holts", 20150628, 2030, 2130, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (70, "Roy Ayers", "West Holts", 20150628, 1900, 2000, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (71, "Steel Pulse", "West Holts", 20150628, 1730, 1830, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (72, "Cumbia All Stars", "West Holts", 20150628, 1600, 1700, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (73, "Hiatus Kaiyote", "West Holts", 20150628, 1430, 1530, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (74, "Ibibio Sound Machine", "West Holts", 20150628, 1300, 1400, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (75, "Flamingods", "West Holts", 20150628, 1130, 1230, 0, 2, "Sunday", "video_link_HERE")');
		
		
		//fri park stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (76, "Super Furry Animals", "The Park Stage", 20150626, 2300, 0015, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (77, "Jamie XX", "The Park Stage", 20150626, 2130, 2230, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (78, "Sharon Van Etten", "The Park Stage", 20150626, 2000, 2100, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (79, "Benjamin Booker", "The Park Stage", 20150626, 1830, 1930, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (80, "Wolf Alice", "The Park Stage", 20150626, 1700, 1800, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (81, "Glass Animals", "The Park Stage", 20150626, 1530, 1630, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (82, "Shlomo", "The Park Stage", 20150626, 1415, 1500, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (83, "King Gizzard And The Lizard Wizard", "The Park Stage", 20150626, 1300, 1345, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (84, "Pussy Riot In Conversation", "The Park Stage", 20150626, 1200, 1240, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (85, "Rhodes", "The Park Stage", 20150626, 1100, 1140, 0, 3, "Friday", "video_link_HERE")');
		
		//sat park stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (86, "Jon Hopkins", "The Park Stage", 20150627, 2300, 0015, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (87, "Spiritualized", "The Park Stage", 20150627, 2130, 2230, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (88, "Mavis Staples", "The Park Stage", 20150627, 2000, 2100, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (89, "Father John Misty", "The Park Stage", 20150627, 1830, 1930, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (90, "Kate Tempest", "The Park Stage", 20150627, 1700, 1800, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (91, "Gaz Coombes", "The Park Stage", 20150627, 1530, 1630, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (92, "Giant Sand", "The Park Stage", 20150627, 1410, 1500, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (93, "Ibeyi", "The Park Stage", 20150627, 1300, 1345, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (94, "Eaves", "The Park Stage", 20150627, 1200, 1240, 0, 3, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (95, "Flo Morrissey", "The Park Stage", 20150627, 1100, 1140, 0, 3, "Saturday", "video_link_HERE")');
		
		//sun park stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (96, "Ryan Adams", "The Park Stage", 20150628, 2230, 2345, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (97, "Goat", "The Park Stage", 20150628, 2100, 2215, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (98, "The Fall", "The Park Stage", 20150628, 1930, 2030, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (99, "Perfume Genius", "The Park Stage", 20150628, 1800, 1900, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (100, "Fat White Family", "The Park Stage", 20150628, 1630, 1730, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (101, "The Staves", "The Park Stage", 20150628, 1510, 1600, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (102, "Rae Morris", "The Park Stage", 20150628, 1400, 1445, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (103, "Jack Garratt", "The Park Stage", 20150628, 1300, 1340, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (104, "Denai Moore", "The Park Stage", 20150628, 1200, 1240, 0, 3, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (105, "Rag N Bone Man", "The Park Stage", 20150628, 1100, 1140, 0, 3, "Sunday", "video_link_HERE")');
		
		//fri john peel stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (106, "Enter Shikari", "John Peel Stage", 20150626, 2245, 2345, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (107, "Modestep", "John Peel Stage", 20150626, 2115, 2215, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (108, "Sbtrkt", "John Peel Stage", 20150626, 1945, 2045, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (109, "Circa Waves", "John Peel Stage", 20150626, 1825, 1920, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (110, "Peace", "John Peel Stage", 20150626, 1700, 1800, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (111, "Chet Faker", "John Peel Stage", 20150626, 1600, 1640, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (112, "The Districts", "John Peel Stage", 20150626, 1500, 1540, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (113, "Leon Bridges", "John Peel Stage", 20150626, 1400, 1440, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (114, "Rainy Boy Sleep", "John Peel Stage", 20150626, 1300, 1340, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (115, "Hinds", "John Peel Stage", 20150626, 1200, 1240, 0, 4, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (116, "Weaves", "John Peel Stage", 20150626, 1100, 1140, 0, 4, "Friday", "video_link_HERE")');
		
		//sat john peel stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (117, "Suede", "John Peel Stage", 20150627, 22435, 2345, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (118, "La Roux", "John Peel Stage", 20150627, 2105, 2205, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (119, "Death From Above 1979", "John Peel Stage", 20150627, 1935, 2035, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (120, "Jessie Ware", "John Peel Stage", 20150627, 1815, 1910, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (121, "Years And Years", "John Peel Stage", 20150627, 1700, 1750, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (122, "The Pop Group", "John Peel Stage", 20150627, 1600, 1640, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (123, "Sleafords", "John Peel Stage", 20150627, 1500, 1540, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (124, "Slaves", "John Peel Stage", 20150627, 1400, 1440, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (125, "Coasts", "John Peel Stage", 20150627, 1300, 1340, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (126, "Sunset Sons", "John Peel Stage", 20150627, 1200, 1240, 0, 4, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (127, "Isaac Lee Kronkick", "John Peel Stage", 20150627, 1100, 1140, 0, 4, "Saturday", "video_link_HERE")');
		
		//sun john peel stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (128, "FFS Franz Ferdinand And Sparks", "John Peel Stage", 20150628, 2205, 2315, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (129, "Death Cab For Cutie", "John Peel Stage", 20150628, 2035, 2135, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (130, "Lianne La Havas", "John Peel Stage", 20150628, 1905, 2005, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (131, "Charli XCX", "John Peel Stage", 20150628, 1750, 1835, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (132, "Django Django", "John Peel Stage", 20150628, 1640, 1730, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (133, "Alvvays", "John Peel Stage", 20150628, 1540, 1620, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (134, "Prides", "John Peel Stage", 20150628, 1440, 1520, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (135, "Saint Raymond", "John Peel Stage", 20150628, 1340, 1420, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (136, "Mini Mansions", "John Peel Stage", 20150628, 1240, 1320, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (137, "Gengahr", "John Peel Stage", 20150628, 1140, 1220, 0, 4, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (138, "Lucy Kitchen", "John Peel Stage", 20150628, 1100, 1120, 0, 4, "Sunday", "video_link_HERE")');
		
		//fri acoustic stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (139, "Christy Moore", "Acoustic Stage", 20150626, 2130, 2300, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (140, "The Proclaimers", "Acoustic Stage", 20150626, 2000, 2100, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (141, "Wilko Johnson", "Acoustic Stage", 20150626, 1830, 1930, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (142, "JD Mcpherson", "Acoustic Stage", 20150626, 1725, 1810, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (143, "Duke Special", "Acoustic Stage", 20150626, 1625, 1705, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (144, "Stornoway", "Acoustic Stage", 20150626, 1530, 1610, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (145, "Red Sky July", "Acoustic Stage", 20150626, 1430, 1510, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (146, "My Darling Clementine", "Acoustic Stage", 20150626, 1340, 1420, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (147, "Ben Poole", "Acoustic Stage", 20150626, 1255, 1325, 0, 5, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (148, "Terry And Gerry", "Acoustic Stage", 20150626, 1200, 1240, 0, 5, "Friday", "video_link_HERE")');
		
		//sat acoustic stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (149, "The Moody Blues", "Acoustic Stage", 20150627, 2130, 2300, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (150, "Nick Lowe Paul Carrack and Andy Fairweather Low", "Acoustic Stage", 20150627, 2000, 2100, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (151, "Texas", "Acoustic Stage", 20150627, 1830, 1930, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (152, "Tom Robinson", "Acoustic Stage", 20150627, 1725, 1810, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (153, "Tommy Emmanuel", "Acoustic Stage", 20150627, 1620, 1705, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (154, "Kitty Daisy And Lewis", "Acoustic Stage", 20150627, 1525, 1605, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (155, "The Lost Brothers", "Acoustic Stage", 20150627, 1430, 1510, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (156, "Jarrod Dickenson", "Acoustic Stage", 20150627, 1335, 1415, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (157, "Bobby Long", "Acoustic Stage", 20150627, 1250, 1320, 0, 5, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (158, "Chelsey Chambers", "Acoustic Stage", 20150627, 1200, 1240, 0, 5, "Saturday", "video_link_HERE")');
		
		//sun acoustic stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (159, "Donovan", "Acoustic Stage", 20150628, 2130, 2300, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (160, "Jack Savoretti", "Acoustic Stage", 20150628, 2000, 2100, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (161, "Eric Bibb", "Acoustic Stage", 20150628, 1830, 1930, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (162, "The Bootleg Beatles", "Acoustic Stage", 20150628, 1725, 1810, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (163, "Gretchen Peters", "Acoustic Stage", 20150628, 1620, 1705, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (164, "Ron Sexsmith", "Acoustic Stage", 20150628, 1525, 1605, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (165, "Grant Lee Phillips", "Acoustic Stage", 20150628, 1430, 1510, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (166, "The Shires", "Acoustic Stage", 20150628, 1335, 1415, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (167, "Olivia Chaney", "Acoustic Stage", 20150628, 1245, 1320, 0, 5, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (168, "Lucas And King", "Acoustic Stage", 20150628, 1200, 1230, 0, 5, "Sunday", "video_link_HERE")');
		
		
		
	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		
		
		
		//fri avalon
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (169, "Lamb", "Avalon Stage", 20150626, 2315, 0025, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (170, "Molotov Jukebox", "Avalon Stage", 20150626, 2145, 2245, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (171, "King Creosote", "Avalon Stage", 20150626, 2015, 2115, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (172, "Lulu", "Avalon Stage", 20150626, 1845, 1945, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (173, "Cara Dillon", "Avalon Stage", 20150626, 1715, 1815, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (174, "Raghu Dixit", "Avalon Stage", 20150626, 1545, 1645, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (175, "Bare Knuckle Parade", "Avalon Stage", 20150626, 1420, 1515, 0, 6, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (176, "Hobo Jones And The Junkyard Dogs", "Avalon Stage", 20150626, 1300, 1355, 0, 6, "Friday", "video_link_HERE")');
		
		//sat avalon
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (177, "Neville Staple Band", "Avalon Stage", 20150627, 2315, 0025, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (178, "I Am Kloot", "Avalon Stage", 20150627, 2145, 2245, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (179, "Dreadzone", "Avalon Stage", 20150627, 2015, 2115, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (180, "Yiddish Twist Orchestra", "Avalon Stage", 20150627, 1845, 1945, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (181, "The Jive Aces", "Avalon Stage", 20150627, 1715, 1815, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (182, "Habadekuk", "Avalon Stage", 20150627, 1545, 1645, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (183, "Moulettes", "Avalon Stage", 20150627, 1415, 1515, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (184, "Coco And The Butterfields", "Avalon Stage", 20150627, 1250, 1345, 0, 6, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (185, "The Drystones", "Avalon Stage", 20150627, 1130, 1225, 0, 6, "Saturday", "video_link_HERE")');
		
		//sun avalon
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (186, "The Electric Swing Circus", "Avalon Stage", 20150628, 2255, 2355, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (187, "Idlewild", "Avalon Stage", 20150628, 2125, 2225, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (188, "Seth Lakeman", "Avalon Stage", 20150628, 1955, 2055, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (189, "The Zombies", "Avalon Stage", 20150628, 1825, 1925, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (190, "Bears Den", "Avalon Stage", 20150628, 1655, 1755, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (191, "Manran", "Avalon Stage", 20150628, 1525, 1625, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (192, "Ferocious Dog", "Avalon Stage", 20150628, 1400, 1455, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (193, "Keston Cobblers Club", "Avalon Stage", 20150628, 1235, 1330, 0, 6, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (194, "KOG And The Zongo Brigade", "Avalon Stage", 20150628, 1130, 1210, 0, 6, "Sunday", "video_link_HERE")');
		
		//fri left
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (195, "Billy Bragg", "Left Field", 20150626, 2100, 2200, 0, 7, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (196, "Thea Gilmore", "Left Field", 20150626, 1930, 2030, 0, 7, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (197, "Martha", "Left Field", 20150626, 1800, 1900, 0, 7, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (198, "Phil Jupitus", "Left Field", 20150626, 1700, 1730, 0, 7, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (199, "Big Bills Radical Round Up", "Left Field", 20150626, 1500, 1630, 0, 7, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (200, "Panel Pussy Riot In Conversation", "Left Field", 20150626, 1330, 1430, 0, 7, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (201, "Panel Venceremos The Radical Movements", "Left Field", 20150626, 1200, 1300, 0, 7, "Friday", "video_link_HERE")');
		
		//sat left
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (202, "Enter Shikari", "Left Field", 20150627, 2100, 2200, 0, 7, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (203, "Akala", "Left Field", 20150627, 1930, 2030, 0, 7, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (204, "Thee Faction", "Left Field", 20150627, 1800, 1900, 0, 7, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (205, "Shappi Khorsandi", "Left Field", 20150627, 1700, 1730, 0, 7, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (206, "Radical Round Up Frank Turner Billy Bragg", "Left Field", 20150627, 1500, 1630, 0, 7, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (207, "Panel New Frontiers Fracking TTIP", "Left Field", 20150627, 1330, 1430, 0, 7, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (208, "Panel Feminism Without Borders", "Left Field", 20150627, 1200, 1300, 0, 7, "Saturday", "video_link_HERE")');
		
		//sun left
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (209, "Buzzcocks", "Left Field", 20150628, 2100, 2200, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (210, "Sam Duckworth And The Brackets", "Left Field", 20150628, 1930, 2030, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (211, "47Soul", "Left Field", 20150628, 1800, 1900, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (212, "Steve Gribbin", "Left Field", 20150628, 1700, 1730, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (213, "Big Bills Radical Round Up", "Left Field", 20150628, 1500, 1630, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (214, "Panel 2015 WTF", "Left Field", 20150628, 1330, 1430, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (215, "Panel Organise Workers Rights", "Left Field", 20150628, 1200, 1300, 0, 7, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (216, "Opening The Sunday Assembly", "Left Field", 20150628, 1100, 1200, 0, 7, "Sunday", "video_link_HERE")');
		
		//thurs glade
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (217, "Nic Fanciulli", "Glade", 20150625, 2200, 0030, 0, 8, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (218, "Jon Rundell", "Glade", 20150625, 2100, 2200, 0, 8, "Thursday", "video_link_HERE")');
		
		//fri glade
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (219, "Lucas Live And Raja Ram DJ Set", "Glade", 20150626, 0035, 0255, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (220, "Alabama 3", "Glade", 20150626, 2255, 0025, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (221, "Eat Static", "Glade", 20150626, 2100, 2215, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (222, "Freestylers", "Glade", 20150626, 1935, 2035, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (223, "Akua Naru", "Glade", 20150626, 1805, 1905, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (224, "Don Letts", "Glade", 20150626, 1635, 1735, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (225, "Dub Pistols", "Glade", 20150626, 1525, 1625, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (226, "Lewah", "Glade", 20150626, 1445, 1525, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (227, "Sentient", "Glade", 20150626, 1355, 1445, 0, 8, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (228, "The Egg", "Glade", 20150626, 1225, 1325, 0, 8, "Friday", "video_link_HERE")');
		
		//sat glade
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (229, "Quivver", "Glade", 20150627, 0145, 0255, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (230, "Annie Nightingale", "Glade", 20150627, 0035, 0145, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (231, "Public Service Broadcasting", "Glade", 20150627, 2255, 0025, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (232, "Paul Woolford", "Glade", 20150627, 2100, 2215, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (233, "Way Out West", "Glade", 20150627, 1945, 2055, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (234, "Emika", "Glade", 20150627, 1830, 1930, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (235, "Kidnap Kid", "Glade", 20150627, 1715, 1815, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (236, "Indee Styla", "Glade", 20150627, 1600, 1700, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (237, "John Fairhurst", "Glade", 20150627, 1440, 1530, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (238, "Monkey Pilot", "Glade", 20150627, 1410, 1440, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (239, "Tom E Lewis", "Glade", 20150627, 1320, 1410, 0, 8, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (240, "Matuki And The Doctors Of Rhythm", "Glade", 20150627, 1210, 1300, 0, 8, "Saturday", "video_link_HERE")');
		
		
		//sun glade
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (241, "Gaudi", "Glade", 20150628, 0005, 0155, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (242, "Slamboree", "Glade", 20150628, 2240, 0000, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (243, "Krafty Kuts Vs A Skillz", "Glade", 20150628, 2100, 2210, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (244, "Sherwood And Pinch", "Glade", 20150628, 1940, 2050, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (245, "Too Many Zooz", "Glade", 20150628, 1840, 1925, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (246, "Dubioza Kolektiv", "Glade", 20150628, 1710, 1810, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (247, "Dr Meaker", "Glade", 20150628, 1550, 1640, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (248, "DJ Yoda", "Glade", 20150628, 1420, 1520, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (249, "Cassetteboy And DJ Rubbish", "Glade", 20150628, 1320, 1400, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (250, "Davos", "Glade", 20150628, 1240, 1310, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (251, "Breakfast With Howard Marks", "Glade", 20150628, 1200, 1230, 0, 8, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (252, "The Green Kids Band", "Glade", 20150628, 1140, 1155, 0, 8, "Sunday", "video_link_HERE")');
		
		
		//fri sonic
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (253, "Borgore", "Sonic", 20150626, 2300, 0030, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (254, "Fuse Odg", "Sonic", 20150626, 2200, 2245, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (255, "Sigma", "Sonic", 20150626, 2030, 2130, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (256, "Flight Facilities", "Sonic", 20150626, 1845, 2000, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (257, "Damian Lazarus And The Ancients Moons", "Sonic", 20150626, 1715, 1815, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (258, "Wilkinson", "Sonic", 20150626, 1530, 1645, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (259, "Gotsome", "Sonic", 20150626, 1400, 1530, 0, 9, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (260, "The Blast DJs Feat Koast", "Sonic", 20150626, 1300, 1400, 0, 9, "Friday", "video_link_HERE")');
		
		//sat sonic
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (261, "LeftField", "Sonic", 20150627, 2300, 0030, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (262, "Gorgon City", "Sonic", 20150627, 2115, 2215, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (263, "Roni Size Reprazent", "Sonic", 20150627, 1945, 2045, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (264, "Idris Elba", "Sonic", 20150627, 1745, 1915, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (265, "Indiana", "Sonic", 20150627, 1645, 1730, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (266, "Herbert Live", "Sonic", 20150627, 1500, 1615, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (267, "Andreya Triana", "Sonic", 20150627, 1330, 1430, 0, 9, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (268, "Anton Maskeliade", "Sonic", 20150627, 1200, 1300, 0, 9, "Saturday", "video_link_HERE")');
		
		//sun sonic
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (269, "Grandmaster Flash", "Sonic", 20150628, 2300, 0000, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (270, "Tricky", "Sonic", 20150628, 2115, 2230, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (271, "Krept And Konan", "Sonic", 20150628, 2015, 2045, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (272, "Bonkaz", "Sonic", 20150628, 1915, 1945, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (273, "Jess Glynne", "Sonic", 20150628, 1800, 1845, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (274, "George The Poet", "Sonic", 20150628, 1630, 1730, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (275, "The Purist", "Sonic", 20150628, 1500, 1600, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (276, "Pearls Negras", "Sonic", 20150628, 1330, 1430, 0, 9, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (277, "Doomtree", "Sonic", 20150628, 1200, 1300, 0, 9, "Sunday", "video_link_HERE")');
		
		
	});
	
	
	db.transaction(function(tx){
		
		tx.executeSql('DELETE FROM bands WHERE id=1');
		tx.executeSql('UPDATE bands SET start_time=2215, finish_time=2345 WHERE id=2');
		
		//fri gully
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (278, "Jus Now And Bunji Garlin", "Gully", 20150626, 2130, 2300, 0, 10, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (279, "The Skints", "Gully", 20150626, 2000, 2100, 0, 10, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (280, "Mo Kalamity And The Wizards", "Gully", 20150626, 1815, 1930, 0, 10, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (281, "Zoobazar", "Gully", 20150626, 1630, 1745, 0, 10, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (282, "Juck Juck Grunzie", "Gully", 20150626, 1500, 1600, 0, 10, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (283, "Gonne Choi", "Gully", 20150626, 1330, 1430, 0, 10, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (284, "Manaia", "Gully", 20150626, 1215, 1315, 0, 10, "Friday", "video_link_HERE")');
		
		//sat gullly
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (285, "Palenke Soultribe", "Gully", 20150627, 2300, 0030, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (286, "Andy Kershaw", "Gully", 20150627, 2130, 2300, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (287, "Rag N Bone Man", "Gully", 20150627, 2030, 2130, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (288, "Mendetz", "Gully", 20150627, 1845, 2000, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (289, "Acollective", "Gully", 20150627, 1715, 1815, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (290, "Tahuna Breaks", "Gully", 20150627, 1545, 1645, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (291, "Digging Roots", "Gully", 20150627, 1415, 1515, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (292, "Sentimentalists", "Gully", 20150627, 1245, 1345, 0, 10, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (293, "The Brass Funkeys", "Gully", 20150627, 1200, 1245, 0, 10, "Saturday", "video_link_HERE")');
		
		//sun gully
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (294, "Milky Chance", "Gully", 20150628, 2245, 0000, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (295, "Raleigh Ritchie", "Gully", 20150628, 2045, 2200, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (296, "Kiko Bun", "Gully", 20150628, 1915, 2015, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (297, "Long Shen Dao", "Gully", 20150628, 1745, 1845, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (298, "Kuenta I Tambu", "Gully", 20150628, 1615, 1715, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (299, "Profetas", "Gully", 20150628, 1445, 1545, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (300, "47Soul", "Gully", 20150628, 1315, 1415, 0, 10, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (301, "Free Like Me", "Gully", 20150628, 1145, 1245, 0, 10, "Sunday", "video_link_HERE")');
		
		//thurs wow
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (302, "Jesus", "Wow", 20150625, 2300, 0300, 0, 11, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (303, "Hodge", "Wow", 20150625, 2200, 2300, 0, 11, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (304, "Patrick Topping", "Wow", 20150625, 2030, 2200, 0, 11, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (305, "Kero Kero Bonito", "Wow", 20150625, 2000, 2030, 0, 11, "Thursday", "video_link_HERE")');
		
		//fri wow
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (306, "Gerd Janson", "Wow", 20150626, 0100, 0300, 0, 11, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (307, "Catz n Dogz", "Wow", 20150626, 2300, 0100, 0, 11, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (308, "The Revenge", "Wow", 20150626, 2200, 2300, 0, 11, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (309, "Leon Vynehall", "Wow", 20150626, 2030, 2200, 0, 11, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (310, "Session Victim Live", "Wow", 20150626, 1900, 2030, 0, 11, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (311, "Real Lies", "Wow", 20150626, 1800, 1900, 0, 11, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (312, "Hessle Audio Boat Party", "Wow", 20150626, 1400, 1800, 0, 11, "Friday", "video_link_HERE")');
		
		
		//sat wow
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (313, "Shy Fx", "Wow", 20150627, 0200, 0300, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (314, "DJ EZ", "Wow", 20150627, 0100, 0200, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (315, "B Traits", "Wow", 20150627, 0000, 0100, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (316, "Matt Jam Lamont", "Wow", 20150627, 2300, 0000, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (317, "Secondcity", "Wow", 20150627, 2200, 2300, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (318, "Sam Binga", "Wow", 20150627, 2100, 2200, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (319, "Skepta", "Wow", 20150627, 2020, 2100, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (320, "DJ Target", "Wow", 20150627, 2000, 2020, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (321, "Big Narstie", "Wow", 20150627, 1920, 2000, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (322, "DJ Target", "Wow", 20150627, 1900, 1920, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (323, "Rene Lavice", "Wow", 20150627, 1800, 1900, 0, 11, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (324, "What Hannah Wants Boat Party", "Wow", 20150627, 1400, 1800, 0, 11, "Saturday", "video_link_HERE")');
		
		//sun wow
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (325, "Siriusmodeselekor", "Wow", 20150628, 0100, 0230, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (326, "Mumdance And Novelist B2B The Square", "Wow", 20150628, 0000, 0100, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (327, "The Bug FT Manga Plus Miss Red", "Wow", 20150628, 2300, 0000, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (328, "George Fitzgerald", "Wow", 20150628, 2200, 2300, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (329, "Four Tet", "Wow", 20150628, 2000, 2200, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (330, "Kate Tempest", "Wow", 20150628, 1900, 2000, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (331, "Dark Sky", "Wow", 20150628, 1800, 1900, 0, 11, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (332, "Craig Richards And Friends Boat Party", "Wow", 20150628, 1400, 1800, 0, 11, "Sunday", "video_link_HERE")');
		
		//thurs la pussy
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (333, "Balthazar", "La Pussy Parlure", 20150625, 0200, 0300, 0, 12, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (334, "Juck Juck grunzie", "La Pussy Parlure", 20150625, 0040, 0140, 0, 12, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (335, "Waa Wei", "La Pussy Parlure", 20150625, 2320, 0020, 0, 12, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (336, "Idiotape", "La Pussy Parlure", 20150625, 2200, 2250, 0, 12, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (337, "Free Like Me", "La Pussy Parlure", 20150625, 2100, 2150, 0, 12, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (338, "Gonne Choi", "La Pussy Parlure", 20150625, 1930, 2045, 0, 12, "Thursday", "video_link_HERE")');

//fri la pussy
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (339, "Work It", "La Pussy Parlure", 20150626, 0145, 0300, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (340, "Selah Sue", "La Pussy Parlure", 20150626, 0030, 0145, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (341, "Tba", "La Pussy Parlure", 20150626, 2330, 0030, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (342, "Tourist", "La Pussy Parlure", 20150626, 2230, 2330, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (343, "M.o", "La Pussy Parlure", 20150626, 2100, 2200, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (344, "Jake Isaac", "La Pussy Parlure", 20150626, 1930, 2030, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (345, "Nova Heart", "La Pussy Parlure", 20150626, 1800, 1900, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (346, "Astronomyy", "La Pussy Parlure", 20150626, 1630, 1730, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (347, "My Skin Against Your Skin", "La Pussy Parlure", 20150626, 1500, 1600, 0, 12, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (348, "Eclectic Ballroom", "La Pussy Parlure", 20150626, 1300, 1430, 0, 12, "Friday", "video_link_HERE")');

//sat la pussy
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (349, "Hiatus Kaiyote", "La Pussy Parlure", 20150627, 0145, 0300, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (350, "Mzrikz", "La Pussy Parlure", 20150627, 0030, 0145, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (351, "Rita Satch", "La Pussy Parlure", 20150627, 2330, 0030, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (352, "Tall Black Guy", "La Pussy Parlure", 20150627, 2200, 2330, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (353, "Whilk & Misky", "La Pussy Parlure", 20150627, 2100, 2200, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (354, "Taylor Mcferrin", "La Pussy Parlure", 20150627, 1930, 2030, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (355, "Akua naru", "La Pussy Parlure", 20150627, 1800, 1900, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (356, "Anushka", "La Pussy Parlure", 20150627, 1630, 1730, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (357, "Dornik", "La Pussy Parlure", 20150627, 1500, 1600, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (358, "Izzy Bizu", "La Pussy Parlure", 20150627, 1330, 1430, 0, 12, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (359, "Jamz Supernova", "La Pussy Parlure", 20150627, 1200, 1330, 0, 12, "Saturday", "video_link_HERE")');

//sun la pussy
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (360, "El Hijo De La Cumbia", "La Pussy Parlure", 20150628, 0145, 0230, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (361, "Alo Wala", "La Pussy Parlure", 20150628, 0045, 0145, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (362, "Kuenta I Tambu", "La Pussy Parlure", 20150628, 2315, 0015, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (363, "Profetas", "La Pussy Parlure", 20150628, 2145, 2245, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (364, "Indee Styla", "La Pussy Parlure", 20150628, 2015, 2115, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (365, "Duchess DJs", "La Pussy Parlure", 20150628, 1945, 2015, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (366, "Batida", "La Pussy Parlure", 20150628, 1845, 1945, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (367, "Seinabo Sey", "La Pussy Parlure", 20150628, 1715, 1815, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (368, "Chelsea Wilson", "La Pussy Parlure", 20150628, 1545, 1645, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (369, "Too Many Zooz", "La Pussy Parlure", 20150628, 1415, 1515, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (370, "Ruth Royall", "La Pussy Parlure", 20150628, 1245, 1345, 0, 12, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (371, "Soultrain v. Avonsoularmy", "La Pussy Parlure", 20150628, 1200, 1245, 0, 12, "Sunday", "video_link_HERE")');
		
		//thurs blues
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (372, "Circoloco Presents", "The Blues", 20150625, 1940, 0300, 0, 13, "Thursday", "video_link_HERE")');
		
		//fri blues
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (373, "Sledgehead", "The Blues", 20150626, 0100, 0300, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (374, "Mungos Hifi", "The Blues", 20150626, 2330, 0100, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (375, "Goldie", "The Blues", 20150626, 2200, 2330, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (376, "Silvastone", "The Blues", 20150626, 2100, 2200, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (377, "Robbo Ranx", "The Blues", 20150626, 1900, 2100, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (378, "Rsd Meets Joe Peng In A Dub Warz", "The Blues", 20150626, 1700, 1900, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (379, "Jamz Supernova", "The Blues", 20150626, 1500, 1700, 0, 13, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (380, "Bliss Zion", "The Blues", 20150626, 1300, 1430, 0, 13, "Friday", "video_link_HERE")');

//sat blyues
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (381, "Fatboy Slim", "The Blues", 20150627, 0130, 0300, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (382, "Don Letts", "The Blues", 20150627, 0000, 0130, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (383, "Mungos Hifi", "The Blues", 20150627, 2230, 0000, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (384, "DJ Hype", "The Blues", 20150627, 2100, 2230, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (385, "DJ Ace", "The Blues", 20150627, 1930, 2100, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (386, "My Nu Leng", "The Blues", 20150627, 1800, 1930, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (387, "Newham Generals & Logan Sama", "The Blues", 20150627, 1700, 1800, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (388, "DJ Code", "The Blues", 20150627, 1530, 1700, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (389, "Hazel Soze", "The Blues", 20150627, 1400, 1530, 0, 13, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (390, "DJ Badly", "The Blues", 20150627, 1230, 1400, 0, 13, "Saturday", "video_link_HERE")');

//sun blues
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (391, "Feel The Real Soundsystem", "The Blues", 20150628, 0100, 0230, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (392, "Jazzuelle", "The Blues", 20150628, 2330, 0100, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (393, "Smith And Mighty", "The Blues", 20150628, 2200, 2330, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (394, "Henry & Louis Feat Peter Culture", "The Blues", 20150628, 2030, 2200, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (395, "Mungos Hifi", "The Blues", 20150628, 1800, 2030, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (396, "Soultrain V. Avonsoularmy", "The Blues", 20150628, 1600, 1800, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (397, "DJ Skt", "The Blues", 20150628, 1430, 1600, 0, 13, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (398, "Hype & Fever", "The Blues", 20150628, 1300, 1430, 0, 13, "Sunday", "video_link_HERE")');

//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (399, "Dj Danny Disc", "Heds Party In Sonic", 20150625, 0400, 0659, 0, 14, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (400, "Jalapeno Sound System", "Heds Party In Sonic", 20150625, 0000, 0400, 0, 14, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (401, "Afficoman", "Heds Party In Sonic", 20150625, 2000, 0000, 0, 14, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (402, "Soultrain V. Avonsoularmy", "Heds Party In Sonic", 20150625, 2000, 0659, 0, 14, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (403, "Propaganda Djs", "Heds Party In Sonic", 20150625, 2000, 0659, 0, 14, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (404, "Afficoman", "Heds Party In Sonic", 20150626, 0400, 0659, 0, 14, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (405, "Dj Origi", "Heds Party In Sonic", 20150626, 0100, 0400, 0, 14, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (406, "Feel The Real Soundsystem", "Heds Party In Sonic", 20150626, 0100, 0659, 0, 14, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (407, "Mixnots", "Heds Party In Sonic", 20150626, 0100, 0659, 0, 14, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (408, "Greenpeace  Vantoosh", "Heds Party In Sonic", 20150627, 0500, 0659, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (409, "Greenpeace Racuba", "Heds Party In Sonic", 20150627, 0400, 0500, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (410, "Greenpeace Cal Jader", "Heds Party In Sonic", 20150627, 0300, 0400, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (411, "Greenpeace Ezy Rider", "Heds Party In Sonic", 20150627, 0100, 0300, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (412, "Greenpeace Mi7 Djs", "Heds Party In Sonic", 20150627, 0500, 0659, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (413, "Greenpeace Dj Mag All Stars", "Heds Party In Sonic", 20150627, 0300, 0500, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (414, "Greenpeace Peeping Tom", "Heds Party In Sonic", 20150627, 0100, 0300, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (415, "Greenpeace 12 Tree", "Heds Party In Sonic", 20150627, 0500, 0659, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (416, "Greenpeace Small Change", "Heds Party In Sonic", 20150627, 0300, 0500, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (417, "Greenpeace Decadent Times Djs", "Heds Party In Sonic", 20150627, 0200, 0300, 0, 14, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (418, "Greenpeace Trampolene Djs", "Heds Party In Sonic", 20150627, 0100, 0200, 0, 14, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (419, "Russ Ryan", "Heds Party In Sonic", 20150628, 0400, 0659, 0, 14, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (420, "You Me Groovy Train", "Heds Party In Sonic", 20150628, 0030, 0400, 0, 14, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (421, "Eclectic Ballroom", "Heds Party In Sonic", 20150628, 0400, 0659, 0, 14, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (422, "You Me Groovy Train", "Heds Party In Sonic", 20150628, 0030, 0400, 0, 14, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (423, "Mista Mento", "Heds Party In Sonic", 20150628, 0400, 0659, 0, 14, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (424, "You Me Groovy Train", "Heds Party In Sonic", 20150628, 0030, 0400, 0, 14, "Sunday", "video_link_HERE")');
		
		
		//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (425, "Monki", "BBC Introducing", 20150625, 2300, 0030, 0, 15, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (426, "Jamz Supernova", "BBC Introducing", 20150625, 2130, 2300, 0, 15, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (427, "Yasser", "BBC Introducing", 20150625, 2000, 2130, 0, 15, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (428, "Annie Mac Live Broadcast", "BBC Introducing", 20150626, 1900, 2220, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (429, "Bearcubs", "BBC Introducing", 20150626, 1730, 1755, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (430, "Milly Hirst", "BBC Introducing", 20150626, 1645, 1710, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (431, "Azekel", "BBC Introducing", 20150626, 1600, 1625, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (432, "Loyle Carner", "BBC Introducing", 20150626, 1515, 1540, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (433, "Cold Fever", "BBC Introducing", 20150626, 1430, 1455, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (434, "Hms Morris", "BBC Introducing", 20150626, 1345, 1410, 0, 15, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (435, "Matthew And Me", "BBC Introducing", 20150626, 1300, 1325, 0, 15, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (436, "Pretty Vicious", "BBC Introducing", 20150627, 1900, 1925, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (437, "Will Joseph Cook", "BBC Introducing", 20150627, 1805, 1830, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (438, "Ekkah", "BBC Introducing", 20150627, 1720, 1745, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (439, "Tuff Love", "BBC Introducing", 20150627, 1635, 1700, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (440, "Asylums", "BBC Introducing", 20150627, 1550, 1615, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (441, "Robyn Sherwell", "BBC Introducing", 20150627, 1415, 1440, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (442, "Maid Of Ace", "BBC Introducing", 20150627, 1330, 1355, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (443, "Ellie Rose", "BBC Introducing", 20150627, 1240, 1305, 0, 15, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (444, "Mod", "BBC Introducing", 20150627, 1200, 1225, 0, 15, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (445, "Zibra", "BBC Introducing", 20150628, 1935, 2000, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (446, "Meadowlark", "BBC Introducing", 20150628, 1850, 1915, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (447, "Nao", "BBC Introducing", 20150628, 1715, 1740, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (448, "Mic Lowry", "BBC Introducing", 20150628, 1630, 1655, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (449, "Field Studies", "BBC Introducing", 20150628, 1545, 1610, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (450, "Alfie Connor", "BBC Introducing", 20150628, 1415, 1440, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (451, "Rukhsana Merrise", "BBC Introducing", 20150628, 1330, 1355, 0, 15, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (452, "Princess Slayer", "BBC Introducing", 20150628, 1200, 1225, 0, 15, "Sunday", "video_link_HERE")');
		
		
		
		//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (453, "Diemantle Aka Die & Dismantle", "The Spaceport", 20150625, 0145, 0300, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (454, "Wonka B2b Syn", "The Spaceport", 20150625, 0030, 0145, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (455, "My Nu Leng", "The Spaceport", 20150625, 2300, 0030, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (456, "Monki B2b Mele", "The Spaceport", 20150625, 2130, 2300, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (457, "Mella Dee", "The Spaceport", 20150625, 2015, 2130, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (458, "Amy Becker", "The Spaceport", 20150625, 1900, 2000, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (459, "The Heatwave", "The Spaceport", 20150625, 1745, 1900, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (460, "Asbo Disco & Gardna", "The Spaceport", 20150625, 1630, 1745, 0, 16, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (461, "Red Eye Hi Fi", "The Spaceport", 20150625, 1500, 1630, 0, 16, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (462, "Fred V & Grafix", "The Spaceport", 20150626, 0200, 0300, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (463, "High Contrast", "The Spaceport", 20150626, 0100, 0200, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (464, "London Elektricity", "The Spaceport", 20150626, 0000, 0100, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (465, "Dephect", "The Spaceport", 20150626, 2300, 0000, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (466, "Jack Diggerz", "The Spaceport", 20150626, 2200, 2300, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (467, "Ed Solo", "The Spaceport", 20150626, 2100, 2200, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (468, "Kitsch & Sync", "The Spaceport", 20150626, 1830, 2100, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (469, "Davos", "The Spaceport", 20150626, 1730, 1830, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (470, "K.b.s", "The Spaceport", 20150626, 1500, 1730, 0, 16, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (471, "Glastonbury Film Challenge", "The Spaceport", 20150626, 1400, 1500, 0, 16, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (472, "Nick Warren", "The Spaceport", 20150627, 0130, 0300, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (473, "Richy Ahmed", "The Spaceport", 20150627, 0000, 0130, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (474, "Tongue And Groove", "The Spaceport", 20150627, 2300, 0000, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (475, "Tigerlight", "The Spaceport", 20150627, 2200, 2300, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (476, "Audio Stud", "The Spaceport", 20150627, 2030, 2200, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (477, "Gotsome", "The Spaceport", 20150627, 1915, 2030, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (478, "Tigger", "The Spaceport", 20150627, 1800, 1915, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (479, "Dj Antz", "The Spaceport", 20150627, 1500, 1800, 0, 16, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (480, "Glastonbury Film Challenge", "The Spaceport", 20150627, 1400, 1500, 0, 16, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (481, "Tba", "The Spaceport", 20150628, 0130, 0300, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (482, "Hotcakes Deekline Ed Solo Mc Ivory", "The Spaceport", 20150628, 0000, 0130, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (483, "Freerange Djs", "The Spaceport", 20150628, 2300, 0000, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (484, "Dj Detta", "The Spaceport", 20150628, 2200, 2300, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (485, "7 Deadly Breaks", "The Spaceport", 20150628, 2100, 2200, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (486, "Mini Da Minx", "The Spaceport", 20150628, 2000, 2100, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (487, "Pythagasaurus", "The Spaceport", 20150628, 1900, 2000, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (488, "Dj Chamber", "The Spaceport", 20150628, 1800, 1900, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (489, "Old Man Corner", "The Spaceport", 20150628, 1500, 1800, 0, 16, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (490, "Glastonbury Film Challenge", "The Spaceport", 20150628, 1400, 1500, 0, 16, "Sunday", "video_link_HERE")');
		
		
		
		//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (491, "Mixmaster Morris", "Glade Lounge", 20150625, 1800, 1930, 0, 17, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (492, "Kafkr", "Glade Lounge", 20150625, 2100, 2230, 0, 17, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (493, "Hari Mau Matt", "Glade Lounge", 20150625, 1930, 2100, 0, 17, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (494, "Tom Real", "Glade Lounge", 20150625, 0130, 0300, 0, 17, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (495, "Ben & Lex", "Glade Lounge", 20150625, 1200, 0130, 0, 17, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (496, "Dj Pony", "Glade Lounge", 20150625, 2230, 0000, 0, 17, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (497, "Dave Seaman", "Glade Lounge", 20150626, 0115, 0300, 0, 17, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (498, "James Monro", "Glade Lounge", 20150626, 2330, 0115, 0, 17, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (499, "Ipcress", "Glade Lounge", 20150626, 2200, 2330, 0, 17, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (500, "Aliji", "Glade Lounge", 20150626, 2100, 2200, 0, 17, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (501, "Tarka", "Glade Lounge", 20150626, 1930, 2100, 0, 17, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (502, "Tba", "Glade Lounge", 20150626, 1800, 1930, 0, 17, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (503, "Dickster", "Glade Lounge", 20150627, 0115, 0300, 0, 17, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (504, "Tristan", "Glade Lounge", 20150627, 2345, 0115, 0, 17, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (505, "Pogo", "Glade Lounge", 20150627, 2200, 2345, 0, 17, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (506, "Bumbling Loons", "Glade Lounge", 20150627, 2100, 2200, 0, 17, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (507, "Grantly", "Glade Lounge", 20150627, 1930, 2100, 0, 17, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (508, "Tba", "Glade Lounge", 20150627, 1800, 1930, 0, 17, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (509, "Tba", "Glade Lounge", 20150628, 0130, 0300, 0, 17, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (510, "Monkey Pilot", "Glade Lounge", 20150628, 0000, 0130, 0, 17, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (511, "Dropsteady Freddy", "Glade Lounge", 20150628, 2230, 0000, 0, 17, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (512, "Manasseh", "Glade Lounge", 20150628, 2100, 2230, 0, 17, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (513, "Greg Dread B2b Lewah", "Glade Lounge", 20150628, 1930, 2100, 0, 17, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (514, "Eat Static", "Glade Lounge", 20150628, 1800, 1930, 0, 17, "Sunday", "video_link_HERE")');
		
		
	//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (515, "The Spike Accoustic Sessions", "The Spike", 20150624, 2000, 0200, 0, 18, "Wednesday", "video_link_HERE")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (516, "The Spike Sessions", "The Spike", 20150625, 0000, 0300, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (517, "Gringo Ska", "The Spike", 20150625, 2300, 0000, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (518, "The Spike Sessions", "The Spike", 20150625, 2200, 2300, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (519, "Soul Stew", "The Spike", 20150625, 2000, 2200, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (520, "To Be Announced", "The Spike", 20150625, 1900, 2000, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (521, "Samuel Jack", "The Spike", 20150625, 1800, 1900, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (522, "The Spike Sessions", "The Spike", 20150625, 1500, 1800, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (523, "To Be Announced", "The Spike", 20150625, 1400, 1500, 0, 18, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (524, "To Be Announced", "The Spike", 20150625, 1100, 1400, 0, 18, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (525, "Plaid", "The Spike", 20150626, 0000, 0300, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (526, "My Baby", "The Spike", 20150626, 2300, 0000, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (527, "Rimskis Piano", "The Spike", 20150626, 2200, 2300, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (528, "Soul Stew", "The Spike", 20150626, 2000, 2200, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (529, "To Be Announced", "The Spike", 20150626, 1900, 2000, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (530, "To Be Announced", "The Spike", 20150626, 1800, 1900, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (531, "The Spike Sessions", "The Spike", 20150626, 1500, 1800, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (532, "To Be Announced", "The Spike", 20150626, 1400, 1500, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (533, "To Be Announced", "The Spike", 20150626, 1300, 1400, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (534, "To Be Announced", "The Spike", 20150626, 1200, 1300, 0, 18, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (535, "To Be Announced", "The Spike", 20150626, 1100, 1200, 0, 18, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (536, "Will White", "The Spike", 20150627, 0100, 0300, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (537, "Banco De Gaia", "The Spike", 20150627, 0000, 0100, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (538, "The Spike Sessions", "The Spike", 20150627, 2300, 0000, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (539, "Mutanta", "The Spike", 20150627, 2200, 2300, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (540, "Soul Stew", "The Spike", 20150627, 2030, 2200, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (541, "#sonofbangers", "The Spike", 20150627, 1900, 2030, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (542, "Captain Catcus & The Screaming Harlots", "The Spike", 20150627, 1800, 1900, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (543, "Invisible System", "The Spike", 20150627, 1600, 1800, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (544, "To Be Announced", "The Spike", 20150627, 1500, 1600, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (545, "To Be Announced", "The Spike", 20150627, 1400, 1500, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (546, "The Great Xar (magic Show)", "The Spike", 20150627, 1200, 1300, 0, 18, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (547, "The Green Kids Band", "The Spike", 20150627, 1100, 1200, 0, 18, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (548, "To Be Announced", "The Spike", 20150628, 0000, 0230, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (549, "The Spike Sessions", "The Spike", 20150628, 2200, 2300, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (550, "Rimksis Piano", "The Spike", 20150628, 2000, 2200, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (551, "To Be Announced", "The Spike", 20150628, 1700, 2000, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (552, "Djs Harri Pepper And Mr Pinks", "The Spike", 20150628, 1600, 1700, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (553, "Plume", "The Spike", 20150628, 1400, 1600, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (554, "Soul Stew", "The Spike", 20150628, 1300, 1400, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (555, "The Great Xar", "The Spike", 20150628, 1300, 1400, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (556, "To Be Announced", "The Spike", 20150628, 1200, 1300, 0, 18, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (557, "To Be Announced", "The Spike", 20150628, 1100, 1200, 0, 18, "Sunday", "video_link_HERE")');
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (558, "Double Agent 7", "Rabbit Hole", 20150625, 0145, 0300, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (559, "Special Guest", "Rabbit Hole", 20150625, 0030, 0145, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (560, "Shields", "Rabbit Hole", 20150625, 2230, 2330, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (561, "Lekiddo Lord Of The Lobsters", "Rabbit Hole", 20150625, 2100, 2130, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (562, "Jakl", "Rabbit Hole", 20150625, 2000, 2030, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (563, "Declan Mckenna", "Rabbit Hole", 20150625, 1900, 1930, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (564, "Isaac Lee-kronick", "Rabbit Hole", 20150625, 1800, 1830, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (565, "Lyza Jane", "Rabbit Hole", 20150625, 1700, 1730, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (566, "Mod", "Rabbit Hole", 20150625, 1600, 1630, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (567, "Princess Slayer", "Rabbit Hole", 20150625, 1500, 1530, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (568, "Lucy Kitchen", "Rabbit Hole", 20150625, 1400, 1430, 0, 19, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (569, "Hamish Isla & Brother", "Rabbit Hole", 20150625, 1245, 1330, 0, 19, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (570, "Oui Ja Yes", "Rabbit Hole", 20150626, 0300, 0400, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (571, "Ramona Flowers", "Rabbit Hole", 20150626, 0130, 0230, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (572, "Dermot Oleary", "Rabbit Hole", 20150626, 2330, 0130, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (573, "Jack Tyson Charles", "Rabbit Hole", 20150626, 2200, 2245, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (574, "Peace", "Rabbit Hole", 20150626, 2030, 2130, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (575, "House Of Commoners", "Rabbit Hole", 20150626, 1900, 1945, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (576, "Mik Artistic", "Rabbit Hole", 20150626, 1730, 1830, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (577, "Jake Isaac", "Rabbit Hole", 20150626, 1615, 1700, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (578, "Gecko", "Rabbit Hole", 20150626, 1500, 1530, 0, 19, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (579, "Tba", "Rabbit Hole", 20150626, 1300, 1330, 0, 19, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (580, "Age Of Glass", "Rabbit Hole", 20150627, 0300, 0400, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (581, "Guy Thompson Air Guitar Champion", "Rabbit Hole", 20150627, 0145, 0215, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (582, "Mad Cows", "Rabbit Hole", 20150627, 0000, 0115, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (583, "Van Goffey", "Rabbit Hole", 20150627, 2200, 2230, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (584, "Black Peaches", "Rabbit Hole", 20150627, 2030, 2130, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (585, "Piney Gir", "Rabbit Hole", 20150627, 1900, 2000, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (586, "Longy", "Rabbit Hole", 20150627, 1730, 1830, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (587, "Gemma Rogers", "Rabbit Hole", 20150627, 1630, 1700, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (588, "Body Clocks", "Rabbit Hole", 20150627, 1500, 1530, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (589, "Simeyu", "Rabbit Hole", 20150627, 1400, 1430, 0, 19, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (590, "Jack Robert Hardman", "Rabbit Hole", 20150627, 1300, 1330, 0, 19, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (591, "Secret Massive Finale", "Rabbit Hole", 20150628, 0245, 0400, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (592, "The Egg", "Rabbit Hole", 20150628, 2345, 0145, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (593, "Mini Mansions", "Rabbit Hole", 20150628, 2200, 2300, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (594, "Chelsea Wilson", "Rabbit Hole", 20150628, 2000, 2100, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (595, "Mann Friday", "Rabbit Hole", 20150628, 1830, 1930, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (596, "Djanan Turan", "Rabbit Hole", 20150628, 1700, 1800, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (597, "Thrill Collins", "Rabbit Hole", 20150628, 1545, 1630, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (598, "John Fairhurst", "Rabbit Hole", 20150628, 1445, 1515, 0, 19, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (599, "The Portraits", "Rabbit Hole", 20150628, 1330, 1400, 0, 19, "Sunday", "video_link_HERE")');
		
		
		//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (600, "Snufkin 7 The Devils Dooorbell", "Small World Stage", 20150624, 0030, 0130, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (601, "Jez Hellard & Alastair Caplin", "Small World Stage", 20150624, 2315, 0015, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (602, "Foghorn Leghorn", "Small World Stage", 20150624, 2145, 2300, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (603, "Seize The Day Tba", "Small World Stage", 20150624, 2000, 2115, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (604, "Hattie Hatstar", "Small World Stage", 20150624, 1830, 1930, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (605, "October", "Small World Stage", 20150624, 1715, 1815, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (606, "Rodney Brannigan", "Small World Stage", 20150624, 1600, 1700, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (607, "Kuki & The Bard", "Small World Stage", 20150624, 1500, 1545, 0, 20, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (608, "Love And The Daisy Petals", "Small World Stage", 20150624, 1400, 1445, 0, 20, "Wednesday", "video_link_HERE")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (609, "Tell Tale Tusk", "Small World Stage", 20150625, 0130, 0230, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (610, "Tankus The Henge", "Small World Stage", 20150625, 2345, 0100, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (611, "Billy Rowan The Undercover Hippy", "Small World Stage", 20150625, 2200, 2315, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (612, "Duncan Disorderly & The Scallywags", "Small World Stage", 20150625, 2015, 2130, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (613, "Rum Buffalo", "Small World Stage", 20150625, 1845, 1945, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (614, "47soul", "Small World Stage", 20150625, 1720, 1820, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (615, "De Fuego", "Small World Stage", 20150625, 1600, 1500, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (616, "Heal The Last Stand", "Small World Stage", 20150625, 1445, 1545, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (617, "The Little Unsaid", "Small World Stage", 20150625, 1315, 1415, 0, 20, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (618, "Kezia", "Small World Stage", 20150625, 1200, 1300, 0, 20, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (619, "The Turbans", "Small World Stage", 20150626, 0215, 0300, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (620, "Tarantism", "Small World Stage", 20150626, 0100, 0200, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (621, "Loonaloop", "Small World Stage", 20150626, 2315, 0030, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (622, "Bloco Olfi", "Small World Stage", 20150626, 2145, 2245, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (623, "Calico Jack", "Small World Stage", 20150626, 2015, 2115, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (624, "Tess Of The Circle", "Small World Stage", 20150626, 1845, 1945, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (625, "Jess Goyder", "Small World Stage", 20150626, 1715, 1815, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (626, "Stevie P Ensemble", "Small World Stage", 20150626, 1545, 1645, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (627, "John Fairhurst", "Small World Stage", 20150626, 1430, 1530, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (628, "Jez Hellard & Alastair Caplin", "Small World Stage", 20150626, 1315, 1415, 0, 20, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (629, "Tobias Jacob & Lukas Drinkwalker", "Small World Stage", 20150626, 1200, 1300, 0, 20, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (630, "Duncan Disorderly & The Scallywags", "Small World Stage", 20150627, 0200, 0300, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (631, "Carnival Collective", "Small World Stage", 20150627, 1245, 0145, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (632, "My Baby", "Small World Stage", 20150627, 2315, 0015, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (633, "Buffos Wake", "Small World Stage", 20150627, 2145, 2245, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (634, "Django Untuned", "Small World Stage", 20150627, 2015, 2115, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (635, "Theo Bard", "Small World Stage", 20150627, 1845, 1945, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (636, "Dila V & The Oddbeats", "Small World Stage", 20150627, 1730, 1830, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (637, "The Sea Kings", "Small World Stage", 20150627, 1615, 1715, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (638, "Martha Tilston", "Small World Stage", 20150627, 1445, 1600, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (639, "Heal The Last Stand", "Small World Stage", 20150627, 1315, 1415, 0, 20, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (640, "The Little Unsaid", "Small World Stage", 20150627, 1200, 1300, 0, 20, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (641, "Nathan Ball", "Small World Stage", 20150628, 0215, 0300, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (642, "Martha Tilston", "Small World Stage", 20150628, 0100, 0200, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (643, "Kangaroo Moon", "Small World Stage", 20150628, 2315, 0030, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (644, "Voodo Jukebox", "Small World Stage", 20150628, 2145, 2245, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (645, "The Portraits", "Small World Stage", 20150628, 2015, 2115, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (646, "Aaron Douglas", "Small World Stage", 20150628, 1845, 1945, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (647, "Sculpture Music", "Small World Stage", 20150628, 1715, 1815, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (648, "Boxcar Joe Strouzer", "Small World Stage", 20150628, 1600, 1700, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (649, "Mel & Magnus", "Small World Stage", 20150628, 1445, 1545, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (650, "Tobias Jacob & Lukas Drinkwalker", "Small World Stage", 20150628, 1315, 1415, 0, 20, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (651, "Elise Yuill", "Small World Stage", 20150628, 1200, 1300, 0, 20, "Sunday", "video_link_HERE")');
		
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (652, "Hot Tin Roofs", "Croissant Neuf", 20150625, 2345, 0100, 0, 21, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (653, "Elle And The Pocket Belles", "Croissant Neuf", 20150625, 2230, 2315, 0, 21, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (654, "Rusty Shackle", "Croissant Neuf", 20150625, 2100, 2200, 0, 21, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (655, "Chainska Brassika", "Croissant Neuf", 20150626, 0100, 0200, 0, 21, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (656, "New York Brass Band", "Croissant Neuf", 20150626, 2330, 0030, 0, 21, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (657, "Shakti Sings Choir", "Croissant Neuf", 20150626, 1900, 2000, 0, 21, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (658, "Dry White Bones", "Croissant Neuf", 20150626, 1730, 1830, 0, 21, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (659, "Fos Brothers", "Croissant Neuf", 20150626, 1600, 1700, 0, 21, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (660, "The Johnsons", "Croissant Neuf", 20150626, 1430, 1530, 0, 21, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (661, "Steve Knightley And Friends", "Croissant Neuf", 20150626, 1230, 1400, 0, 21, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (662, "Cut Capers", "Croissant Neuf", 20150627, 0100, 0200, 0, 21, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (663, "Tankus The Henge", "Croissant Neuf", 20150627, 2300, 0030, 0, 21, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (664, "Screamin Miss Jackson And The Slap Ya Mama Big Band", "Croissant Neuf", 20150627, 1900, 2000, 0, 21, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (665, "Rory Mcleod", "Croissant Neuf", 20150627, 1730, 1830, 0, 21, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (666, "White City Shakers", "Croissant Neuf", 20150627, 1600, 1700, 0, 21, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (667, "The Cadbury Sisters", "Croissant Neuf", 20150627, 1430, 1530, 0, 21, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (668, "Nizlopi", "Croissant Neuf", 20150627, 1300, 1400, 0, 21, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (669, "Banco De Gaia", "Croissant Neuf", 20150628, 0100, 0200, 0, 21, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (670, "Rhythmites", "Croissant Neuf", 20150628, 2330, 0030, 0, 21, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (671, "The Little Unsaid", "Croissant Neuf", 20150628, 1900, 2000, 0, 21, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (672, "Batch Gueye Band", "Croissant Neuf", 20150628, 1730, 1830, 0, 21, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (673, "Biggles Wartime Band", "Croissant Neuf", 20150628, 1600, 1700, 0, 21, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (674, "Special Guests", "Croissant Neuf", 20150628, 1445, 1530, 0, 21, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (675, "Bimm Sessions", "Croissant Neuf", 20150628, 1245, 1415, 0, 21, "Sunday", "video_link_HERE")');



//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (676, "Guilty Pleasures Presents Maximum Hoopla", "Williams Green", 20150625, 2330, 0230, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (677, "Live Band", "Williams Green", 20150625, 2230, 2330, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (678, "Live Band", "Williams Green", 20150625, 2130, 2210, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (679, "Live Band", "Williams Green", 20150625, 2030, 2110, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (680, "Seafret", "Williams Green", 20150625, 1930, 2010, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (681, "Guilty Pleasures Presents Maximum Hoopla", "Williams Green", 20150625, 1700, 1930, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (682, "Amy Sneak Preview", "Williams Green", 20150625, 1445, 1700, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (683, "Asif Kapadia Qa", "Williams Green", 20150625, 1420, 1445, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (684, "The Ecstasy Of Wilko Johnson", "Williams Green", 20150625, 1220, 1410, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (685, "Julien Temple Qa", "Williams Green", 20150625, 1200, 1220, 0, 22, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (686, "Wilko Johnson", "Williams Green", 20150625, 1130, 1150, 0, 22, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (687, "Club De Fromage", "Williams Green", 20150626, 2330, 0300, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (688, "Django Django", "Williams Green", 20150626, 2030, 2115, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (689, "Toy", "Williams Green", 20150626, 1930, 2010, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (690, "King Gizzard And The Lizard Wizard", "Williams Green", 20150626, 1830, 1910, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (691, "The Voyeurs", "Williams Green", 20150626, 1730, 1810, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (692, "Stealing Sheep", "Williams Green", 20150626, 1630, 1710, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (693, "Hooton Tennis Club", "Williams Green", 20150626, 1530, 1610, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (694, "Other Lives", "Williams Green", 20150626, 1430, 1510, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (695, "Live Band", "Williams Green", 20150626, 1330, 1410, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (696, "Lonelady", "Williams Green", 20150626, 1230, 1310, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (697, "The Burning Hell", "Williams Green", 20150626, 1130, 1210, 0, 22, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (698, "Declan Mckenna", "Williams Green", 20150626, 1045, 1115, 0, 22, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (699, "Keep The Faith Northern Soul Party With Eddie Piller", "Williams Green", 20150627, 2330, 0300, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (700, "Palma Violets", "Williams Green", 20150627, 2030, 2115, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (701, "Swim Deep", "Williams Green", 20150627, 1930, 2010, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (702, "Courtney Barnett", "Williams Green", 20150627, 1830, 1910, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (703, "La Femme", "Williams Green", 20150627, 1730, 1810, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (704, "The Jacques", "Williams Green", 20150627, 1630, 1710, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (705, "Spector", "Williams Green", 20150627, 1530, 1610, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (706, "Everything Everything", "Williams Green", 20150627, 1430, 1510, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (707, "Childhood", "Williams Green", 20150627, 1330, 1410, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (708, "Leon Bridges", "Williams Green", 20150627, 1230, 1310, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (709, "Nadine Shah", "Williams Green", 20150627, 1130, 1210, 0, 22, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (710, "Furs", "Williams Green", 20150627, 1030, 1110, 0, 22, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (711, "Buttoned Down Disco", "Williams Green", 20150628, 2300, 0230, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (712, "Sunset Sons", "Williams Green", 20150628, 2000, 2045, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (713, "East India Youth", "Williams Green", 20150628, 1900, 1940, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (714, "The Phantom Band", "Williams Green", 20150628, 1800, 1840, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (715, "The Bevis Frond", "Williams Green", 20150628, 1700, 1740, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (716, "Jack Garratt", "Williams Green", 20150628, 1600, 1640, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (717, "Jane Weaver", "Williams Green", 20150628, 1500, 1540, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (718, "All We Are", "Williams Green", 20150628, 1400, 1440, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (719, "The Guardian Debate", "Williams Green", 20150628, 1300, 1350, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (720, "Tora", "Williams Green", 20150628, 1200, 1240, 0, 22, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (721, "The Smyths", "Williams Green", 20150628, 1100, 1140, 0, 22, "Sunday", "video_link_HERE")');


//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (722, "Bladerunner Final Cut", "Pilton Palais Cinema", 20150624, 2030, 2227, 0, 23, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (723, "Kingsman", "Pilton Palais Cinema", 20150624, 1800, 2009, 0, 23, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (724, "Keane Concert", "Pilton Palais Cinema", 20150624, 1615, 1732, 0, 23, "Wednesday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (725, "Big Hero 6", "Pilton Palais Cinema", 20150624, 1400, 1542, 0, 23, "Wednesday", "video_link_HERE")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (726, "Babadook", "Pilton Palais Cinema", 20150625, 0230, 0405, 0, 23, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (727, "Kurt Cobain Montage Of Heck", "Pilton Palais Cinema", 20150625, 0015, 0230, 0, 23, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (728, "Lambert & Stamp", "Pilton Palais Cinema", 20150625, 2215, 0012, 0, 23, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (729, "Hobbit Battle Of Five Armys", "Pilton Palais Cinema", 20150625, 1915, 2139, 0, 23, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (730, "Laura Mvula Concert", "Pilton Palais Cinema", 20150625, 1730, 1847, 0, 23, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (731, "Goonies", "Pilton Palais Cinema", 20150625, 1515, 1709, 0, 23, "Thursday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (732, "Penguins Of Madagascar", "Pilton Palais Cinema", 20150625, 1315, 1447, 0, 23, "Thursday", "video_link_HERE")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (733, "The Terminator", "Pilton Palais Cinema", 20150626, 0215, 0402, 0, 23, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (734, "Nosferatu Minima", "Pilton Palais Cinema", 20150626, 0030, 0202, 0, 23, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (735, "We Are Many", "Pilton Palais Cinema", 20150626, 1730, 1930, 0, 23, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (736, "Ex Machina", "Pilton Palais Cinema", 20150626, 1545, 1733, 0, 23, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (737, "Tomorrow Land", "Pilton Palais Cinema", 20150626, 1315, 1515, 0, 23, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (738, "Paddington", "Pilton Palais Cinema", 20150626, 1115, 1250, 0, 23, "Friday", "video_link_HERE")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (739, "Rocky Horror Picture Show", "Pilton Palais Cinema", 20150627, 0215, 0355, 0, 23, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (740, "Phantom Of The Opera Minima", "Pilton Palais Cinema", 20150627, 0030, 0147, 0, 23, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (741, "Theory Of Everything", "Pilton Palais Cinema", 20150627, 1730, 1948, 0, 23, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (742, "Whiplash", "Pilton Palais Cinema", 20150627, 1545, 1732, 0, 23, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (743, "Avengers Age Of Ultron", "Pilton Palais Cinema", 20150627, 1300, 1521, 0, 23, "Saturday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (744, "Shaun The Sheep", "Pilton Palais Cinema", 20150627, 1115, 1240, 0, 23, "Saturday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (745, "The Cabinet Of Dr Caligari Minima", "Pilton Palais Cinema", 20150628, 0030, 0142, 0, 23, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (746, "Operation Solstice", "Pilton Palais Cinema", 20150628, 1730, 1815, 0, 23, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (747, "Pride", "Pilton Palais Cinema", 20150628, 1530, 1727, 0, 23, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (748, "Big Hero 6", "Pilton Palais Cinema", 20150628, 1315, 1457, 0, 23, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (749, "Screening Tba", "Pilton Palais Cinema", 20150628, 1115, 1248, 0, 23, "Sunday", "video_link_HERE")');

		set_up_main_page();
	});
}













