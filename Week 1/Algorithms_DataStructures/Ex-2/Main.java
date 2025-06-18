public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shampoo", "Personal Care"),
            new Product(3, "Notebook", "Stationery"),
            new Product(4, "Headphones", "Electronics"),
            new Product(5, "Keyboard", "Electronics")
        };

        System.out.println("=== Linear Search ===");
        Product result1 = ProductSearch.linearSearch(products, "Notebook");
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\n=== Binary Search ===");
        ProductSearch.sortByName(products);
        Product result2 = ProductSearch.binarySearch(products, "Headphones");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
