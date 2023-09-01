package main

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"
)

type Product struct {
	ID       int     `json:"id"`
	Name     string  `json:"name"`
	Price    float64 `json:"price"`
	Category string  `json:"category"`
}

var products = []Product{
	{ID: 1, Name: "Laptop", Price: 999.99, Category: "Electronics"},
	{ID: 2, Name: "Coffee Maker", Price: 49.99, Category: "Home Appliances"},
	{ID: 3, Name: "Book: The Great Gatsby", Price: 9.99, Category: "Books"},
	{ID: 4, Name: "Slow Cooker", Price: 149.99, Category: "Home Appliances"},
	{ID: 5, Name: "Book: Haunting in Venice", Price: 19.99, Category: "Books"},
	{ID: 6, Name: "Black & Decker Rice Cooker", Price: 49.99, Category: "Home Appliances"},
	{ID: 7, Name: "Book: Murder on the Orient Express", Price: 19.99, Category: "Books"},
	{ID: 8, Name: "iPhone GAN Charger", Price: 49.99, Category: "Electronics"},
	{ID: 9, Name: "Book: Murder on the Nile", Price: 19.99, Category: "Books"},
	{ID: 10, Name: "iPad", Price: 649.99, Category: "Electronics"},
	{ID: 11, Name: "Book: Great Expectations", Price: 19.99, Category: "Books"},
	{ID: 12, Name: "Book: A Tale of Two Cities", Price: 19.99, Category: "Books"},
	{ID: 13, Name: "Book: Oliver Twist", Price: 19.99, Category: "Books"},
	{ID: 14, Name: "Book: David Copperfield", Price: 19.99, Category: "Books"},
}
var mu sync.Mutex

// had to manually add CORS

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	mu.Lock()
	defer mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}
func main() {
	http.HandleFunc("/api/products", getProducts)
	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
