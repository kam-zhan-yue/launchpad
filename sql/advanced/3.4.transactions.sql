DROP TABLE accounts;

CREATE TABLE accounts (
  name      varchar(80) primary key,
  balance   real
);

INSERT INTO accounts (name, balance)
  VALUES
  ('Alice', 500.0),
  ('Bob', 400.0),
  ('Wally', 300.0);

BEGIN;
UPDATE accounts SET balance = balance - 100.00
	WHERE name = 'Alice';
SAVEPOINT my_savepoint;
UPDATE accounts SET balance = balance + 100.00
	WHERE name = 'Bob';
-- oops, meant to use Wally's account
ROLLBACK TO my_savepoint;
UPDATE accounts SET balance = balance + 100.00
	WHERE name = 'Wally';
COMMIT;

SELECT * FROM accounts;
