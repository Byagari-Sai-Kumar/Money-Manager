import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: 0,
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {transactionList, titleInput, amountInput, optionId} = this.state

    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bgContainer">
        <div className="nameContainer">
          <h1 className="userName">Hi, Richard</h1>
          <p className="welcomeMessage">
            Welcome back to your <span className="spanBlue">Money Manager</span>
          </p>
        </div>
        <div className="moneyDetailsOverallContainer">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="transactionOverallContainer">
          <div className="transactionFullContainer">
            <h1 className="addTransactionHeading">Add Transaction</h1>
            <form
              className="transactionContainer"
              onSubmit={this.onAddTransaction}
            >
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITTLE"
                className="titleInput"
                onChange={this.onChangeTitleInput}
                value={titleInput}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="titleInput"
                onChange={this.onChangeAmountInput}
                value={amountInput}
              />
              <label htmlFor="options" className="label">
                TYPE
              </label>
              <select
                id="options"
                className="titleInput"
                onChange={this.onChangeOptionId}
                value={optionId}
              >
                <option value="INCOME" defaultValue>
                  Income
                </option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <button type="submit" className="submitButton">
                Add
              </button>
            </form>
          </div>
          <div className="historyOverallContainer">
            <h1 className="historyHeading">History</h1>
            <div className="historyContainer">
              <ul className="historyHeadings">
                <li>
                  <p className="heading">Title</p>
                  <p className="heading">Amount</p>
                  <p className="heading">Type</p>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
