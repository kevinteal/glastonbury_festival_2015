// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		
		
		//friday pyramid
		
		//sat pyramid
		
		//sun pyramid
		
		//fri other
		
		//sat other
		
		//sun other
		
		//fri west holts
		
		//sat west holts
		
		//sun west holts
		
		//fri park stage
		
		//sat park stage
		
		//sun park stage
		
		//fri john peel stage
		
		//sat john peel stage
		
		//sun john peel stage
		
		//fri acoustic stage
		
		//sat acoustic stage
		
		//sun acoustic stage
		
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (1, "Foo Fighters", "Main Stage", 20150624, 1700, 1740, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (2, "Kanye West", "Main Stage", 20150624, 1755, 1835, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (3, "Florence and the Machine", "Main Stage", 20150624, 1850, 1935, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (4, "Pharrell Williams", "Main Stage", 20150624, 1950, 2035, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (5, "Alt J", "Main Stage", 20150624, 2050, 2130, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (6, "Lionel Richie", "Main Stage", 20150624, 2145, 2245, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (7, "Motorhead", "Main Stage", 20150624, 2300, 0000, 0, 0, "Friday", "video_link_HERE")');
	
		//saturday Main Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (8, "Mary J Blige", "Main Stage", 20150624, 1200, 1340, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (9, "Alabama Shakes", "Main Stage", 20150624, 1355, 1435, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (10, "Paloma Faith", "Main Stage", 20150624, 1450, 1535, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (11, "Patti Smith", "Main Stage", 20150624, 1550, 1635, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (12, "The Chemical Brothers", "Main Stage", 20150624, 1650, 1730, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (13, "Rudimental", "Main Stage", 20150624, 1745, 1845, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (14, "Deadmau5", "Main Stage", 20150624, 1900, 2000, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (15, "Jamie T", "Main Stage", 20150624, 2045, 2145, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (16, "Ben Howard", "Main Stage", 20150624, 2200, 2300, 0, 0, "Saturday", "video_link_HERE")');
		
		//sunday Main Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (17, "Hot Chip", "Main Stage", 20150624, 1200, 1340, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (18, "The Mothership Returns", "Main Stage", 20150624, 1355, 1435, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (19, "Stone", "Main Stage", 20150624, 1450, 1535, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (20, "Flying Lotus", "Main Stage", 20150624, 1550, 1635, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (21, "FKA Twigs", "Main Stage", 20150624, 1650, 1730, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (22, "Caribou", "Main Stage", 20150624, 1745, 1845, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (23, "Roy Ayers", "Main Stage", 20150624, 1900, 2000, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (24, "Run the Jewels", "Main Stage", 20150624, 2045, 2145, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (25, "Mark Ronson", "Main Stage", 20150624, 2200, 2300, 0, 0, "Sunday", "video_link_HERE")');
		
		
		//friday zippo encore
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (26, "Super Furry Animals", "Zippo Encore", 20150624, 1700, 1740, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (27, "Belle and Sebastian", "Zippo Encore", 20150624, 1755, 1835, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (28, "The Vaccines", "Zippo Encore", 20150624, 1850, 1935, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (29, "Ryan Adams", "Zippo Encore", 20150624, 1950, 2035, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (30, "Chronixx", "Zippo Encore", 20150624, 2050, 2130, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (31, "Future Islands", "Zippo Encore", 20150624, 2145, 2245, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (32, "George Ezra", "Zippo Encore", 20150624, 2300, 2330, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (33, "The Waterboys", "Zippo Encore", 20150624, 2350, 0010, 0, 1, "Friday", "video_link_HERE")');
		
		
		//saturday Zippo Encore
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (34, "The Moody Blues", "Zippo Encore", 20150624, 1200, 1340, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (35, "Suede", "Zippo Encore", 20150624, 1355, 1435, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (36, "Franz Ferdinand and Sparks", "Zippo Encore", 20150624, 1450, 1535, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (37, "The Maccabees", "Zippo Encore", 20150624, 1550, 1635, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (38, "Enter Shikari", "Zippo Encore", 20150624, 1650, 1730, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (39, "Modestep", "Zippo Encore", 20150624, 1745, 1845, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (40, "Clean Bandit", "Zippo Encore", 20150624, 1900, 2000, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (41, "Jessie Ware", "Zippo Encore", 20150624, 2045, 2145, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (42, "Courtney Barnett", "Zippo Encore", 20150624, 2200, 2300, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (43, "Jon Hopkins", "Zippo Encore", 20150624, 2310, 0050, 0, 1, "Saturday", "video_link_HERE")');
		
		
		//sunday Zippo Encore
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (44, "Spiritualized", "Zippo Encore", 20150624, 1200, 1340, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (45, "Jamie xx", "Zippo Encore", 20150624, 1355, 1435, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (46, "Mavis Staples", "Zippo Encore", 20150624, 1450, 1535, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (47, "Hozier", "Zippo Encore", 20150624, 1550, 1635, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (48, "Father John Misty", "Zippo Encore", 20150624, 1650, 1730, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (49, "The Fall", "Zippo Encore", 20150624, 1745, 1845, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (50, "Todd Terje", "Zippo Encore", 20150624, 1900, 2000, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (51, "Gregory Porter", "Zippo Encore", 20150624, 2045, 2145, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (52, "Jungle", "Zippo Encore", 20150624, 2200, 2300, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (53, "Sleaford Mods", "Zippo Encore", 20150624, 2330, 0010, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (54, "Catfish andthe Bottlemen", "Zippo Encore", 20150624, 0100, 0200, 0, 1, "Sunday", "video_link_HERE")');
		
		
		//friday 3rdstage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (55, "Azealia Banks", "3rdstage", 20150624, 1700, 1740, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (56, "Young Fathers", "3rdstage", 20150624, 1755, 1835, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (57, "Charli XCX", "3rdstage", 20150624, 1850, 1935, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (58, "Kasai Allstars", "3rdstage", 20150624, 1950, 2035, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (59, "Sharon Van Etten", "3rdstage", 20150624, 2050, 2130, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (60, "Kate Tempest", "3rdstage", 20150624, 2145, 2245, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (61, "Goat", "3rdstage", 20150624, 2300, 2330, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (62, "Wolf Alice", "3rdstage", 20150624, 2350, 0010, 0, 2, "Friday", "video_link_HERE")');
		
		
		//saturday 3rdstage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (63, "Perfume Genius", "3rdstage", 20150624, 1200, 1340, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (64, "Fat White Family", "3rdstage", 20150624, 1355, 1435, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (65, "Years and Years", "3rdstage", 20150624, 1450, 1535, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (66, "La Roux", "3rdstage", 20150624, 1550, 1635, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (67, "Death Cab for Cutie", "3rdstage", 20150624, 1650, 1730, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (68, "Lianne La Havas", "3rdstage", 20150624, 1745, 1845, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (69, "Death from Above 1979", "3rdstage", 20150624, 1900, 2000, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (70, "Circa Waves", "3rdstage", 20150624, 2045, 2145, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (71, "Peace", "3rdstage", 20150624, 2200, 2300, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (72, "The Pop Group", "3rdstage", 20150624, 2310, 0050, 0, 2, "Saturday", "video_link_HERE")');
		
		//sunday 3rdstage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (73, "Ibeyi", "3rdstage", 20150624, 1200, 1340, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (74, "Ella Eyre", "3rdstage", 20150624, 1355, 1435, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (75, "Rae Morris", "3rdstage", 20150624, 1450, 1535, 0, 2, "Sunday", "video_link_HERE")');
		
	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		
		set_up_main_page();
	});
}













