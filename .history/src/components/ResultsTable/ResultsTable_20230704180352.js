const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => {
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>
              {props.initialInvestment +
                yearData.yearlyContribution * yearData.year}
            </td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
