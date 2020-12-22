CREATE TABLE IF NOT EXISTS  'results' ( "id" INTEGER PRIMARY KEY AUTOINCREMENT, "goodsType" VARCHAR NOT NULL, "searchNum" INTEGER);

INSERT INTO 'results' (goodsType, searchNum) select  "bakegoods", 16 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 1);
INSERT INTO 'results' (goodsType, searchNum) select  "cheese", 6 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 2);
INSERT INTO 'results' (goodsType, searchNum) select  "eggs", 15 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 3);
INSERT INTO 'results' (goodsType, searchNum) select  "seafood", 4 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 4);
INSERT INTO 'results' (goodsType, searchNum) select  "herbs", 13 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 5);
INSERT INTO 'results' (goodsType, searchNum) select  "honey", 13 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 6);
INSERT INTO 'results' (goodsType, searchNum) select  "jams", 14 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 7);
INSERT INTO 'results' (goodsType, searchNum) select  "vegetables", 17 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 8);
INSERT INTO 'results' (goodsType, searchNum) select  "maple", 2 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 9);
INSERT INTO 'results' (goodsType, searchNum) select  "meat", 7 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 10);
INSERT INTO 'results' (goodsType, searchNum) select  "nuts", 4 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 11);
INSERT INTO 'results' (goodsType, searchNum) select  "wine", 6 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 12);