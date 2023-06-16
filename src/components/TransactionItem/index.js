// Write your code here
import './index.css'

const TransactionItem = props => {
  // eslint-disable-next-line
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transactionItemContainer">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" className="button" onClick={onDeleteTransaction}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteIcon"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
