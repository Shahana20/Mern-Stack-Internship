CREATE TABLE csk (
  jno INTEGER PRIMARY KEY,
  name varchar(100),
  role varchar(100),
  runs_scored int,
  wkts_taken int
);

INSERT INTO csk VALUES (7,"Dhoni","Captain/Wicket keeper",96,0);
INSERT INTO csk VALUES (9,"Rayudu","Batsman",230,0);
INSERT INTO csk VALUES (11,"Ali","All rounder",160,10);
INSERT INTO csk VALUES (27,"Rahane","Batsman",380,0);
INSERT INTO csk VALUES (31,"Gaikwad","Batsman",564,0);
INSERT INTO csk VALUES (55,"Stokes","All rounder",16,0);
INSERT INTO csk VALUES (61,"Theekshana","Bowler",5,20);
INSERT INTO csk VALUES (74,"Santner","All rounder",12,8);
INSERT INTO csk VALUES (81,"Pathirana","Bowler",0,23);
INSERT INTO csk VALUES (88,"Conway","Batsman",605,0);

SELECT "*******CSK table*******" AS statement;

SELECT * FROM csk;

SELECT "*******Sponsor table*******" AS statement;

CREATE TABLE sponsor(
  jno INTEGER PRIMARY KEY,
  bat_spo varchar(100));
  
INSERT INTO sponsor VALUES (7,"Reebok");
INSERT INTO sponsor VALUES (11,"Ton");
INSERT INTO sponsor VALUES (31,"SS");
INSERT INTO sponsor VALUES (55,"GM");
INSERT INTO sponsor VALUES (74,"NB");

SELECT * FROM sponsor;

SELECT "*****Sorting Ascending Order*****" AS statement;

SELECT * from csk order by name;

SELECT "*****Sorting Descending Order*****" AS statement;

SELECT * from sponsor order by jno desc;

SELECT "*****AGGREGATE FUNCTIONS*****" AS statement;

SELECT "*******COUNT*******" AS statement;

select count(role) as No_of_bowlers from csk where role = "Bowler";

SELECT "*******SUM*******" AS statement;

select sum(runs_scored) as Total_runs_scored from csk;

SELECT "*******AVERAGE*******" AS statement;

select avg(runs_scored) from csk as avg_allrounders_runs where jno in(11,55,74);

SELECT "*******MAX*******" AS statement;

select * from csk where wkts_taken = (select max(wkts_taken) from csk);

SELECT "*******MIN*******" AS statement;

select * from sponsor where jno=(select min(jno) from csk);

SELECT "*******JOINS*******" AS statement;

SELECT "*******INNER JOIN*******" AS statement;

select csk.jno,csk.name,csk.runs_scored,sponsor.bat_spo from csk inner join sponsor on csk.jno=sponsor.jno;
 
SELECT "*******LEFT JOIN*******" AS statement;
 
select csk.jno,csk.name,csk.runs_scored,sponsor.bat_spo from csk left join sponsor on csk.jno=sponsor.jno;

SELECT "*******RIGHT JOIN*******" AS statement;

select csk.jno,csk.name,csk.runs_scored,sponsor.bat_spo from csk right join sponsor on csk.jno=sponsor.jno;

SELECT "*******FULL JOIN********" AS statement;

select * from csk left join sponsor on csk.jno=sponsor.jno union select * from csk right join sponsor on csk.jno=sponsor.jno
