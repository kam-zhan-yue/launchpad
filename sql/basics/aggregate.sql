SELECT max(temp_lo) FROM weather;

SELECT city FROM weather
  WHERE temp_lo = (SELECT max(temp_lo) FROM weather);

SELECT city, count(*), max(temp_lo)
  FROM weather
  GROUP BY city;

SELECT city, count(*), max(temp_lo)
  FROM weather
  GROUP BY city
  HAVING max(temp_lo) < 40;

SELECT city, count(*) FILTER (WHERE temp_lo < 45), max(temp_lo)
  FROM weather
  GROUP BY city;
