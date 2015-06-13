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
		
		set_up_main_page();
	});
}













