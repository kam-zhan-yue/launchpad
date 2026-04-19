CREATE TABLE weather (
  city    varchar(80),
  temp_lo int,
  temp_hi int,
  prcp    real,
  date    date
);

CREATE TABLE cities (
  name    varchar(80),
  location point
);
