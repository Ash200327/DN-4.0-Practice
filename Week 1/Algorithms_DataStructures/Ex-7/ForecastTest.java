public class ForecastTest {
    public static void main(String[] args) {
        double initial = 10000; // starting capital
        double rate = 0.08;     // 8% annual growth
        int years = 10;

        System.out.println("=== Recursive Forecast ===");
        double futureValue = FinancialForecaster.calculateFutureValue(initial, rate, years);
        System.out.printf("Future Value after %d years: %.2f%n", years, futureValue);

        System.out.println("\n=== Memoized Forecast ===");
        double[] memo = new double[years + 1];
        double futureValueMemo = FinancialForecaster.calculateFutureValueMemo(initial, rate, years, memo);
        System.out.printf("Future Value after %d years (memoized): %.2f%n", years, futureValueMemo);
    }
}
