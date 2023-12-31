// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <ul className="moneyDetailsOverallContainer">
      <li className="moneyDetailsCardContainer green">
        <div className="moneyImageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="moneyDetailsImage"
          />
        </div>
        <div className="moneyContainer">
          <p className="moneyCategory">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>

      <li className="moneyDetailsCardContainer blue">
        <div className="moneyImageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="moneyDetailsImage"
          />
        </div>
        <div className="moneyContainer">
          <p className="moneyCategory">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>

      <li className="moneyDetailsCardContainer purple">
        <div className="moneyImageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="moneyDetailsImage"
          />
        </div>
        <div className="moneyContainer">
          <p className="moneyCategory">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
