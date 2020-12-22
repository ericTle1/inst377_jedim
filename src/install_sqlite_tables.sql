CREATE TABLE IF NOT EXISTS  'results' ( "id" INTEGER PRIMARY KEY AUTOINCREMENT, "goodsType" VARCHAR NOT NULL, "searchNum" INTEGER);

INSERT INTO 'results' (goodsType, searchNum) select  "bakegoods", 16 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 1);
INSERT INTO 'results' (goodsType, searchNum) select  "cheese", 6 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 2);
INSERT INTO 'results' (goodsType, searchNum) select  "eggs", 15 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 3);
INSERT INTO 'results' (goodsType, searchNum) select  "seafood", 4 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 4);
INSERT INTO 'results' (goodsType, searchNum) select  "herbs", 13 WHERE NOT EXISTS (SELECT * FROM 'results' WHERE id = 5);
