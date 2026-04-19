package main

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5"
)
func main() {
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close(context.Background())

	var city string
	var temp_lo int64

	err = conn.QueryRow(context.Background(), "SELECT city, temp_lo FROM weather").Scan(&city, &temp_lo)
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	fmt.Println(city, temp_lo)
}
