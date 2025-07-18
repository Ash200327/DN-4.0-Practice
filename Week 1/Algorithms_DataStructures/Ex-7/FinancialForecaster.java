public class FinancialForecaster {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return calculateFutureValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    // Optimized with memoization 
    public static double calculateFutureValueMemo(double initialValue, double growthRate, int years, double[] memo) {
        if (years == 0) return initialValue;
        if (memo[years] != 0) return memo[years];
        return memo[years] = calculateFutureValueMemo(initialValue, growthRate, years - 1, memo) * (1 + growthRate);
    }
}
