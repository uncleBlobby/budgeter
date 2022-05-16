import Transaction from './Transaction.jsx';
import './TransactionList.css';

const TransactionList = ( {props, getTotalIncome, getTotalExpense} ) => {
    //console.log(`props in front end: ${JSON.stringify(props)}`);

    return (
        <div id='transactionListContainer'>
            Hello Transaction List
            {props.map((transaction) => {
                return (
                    <div>
                    <Transaction key={transaction.id} props={transaction}/>
                    </div>
                )             
            })}
        <div id='totalExpenses'>
            Total Expenses: ${getTotalExpense}
        </div>
        <div id='totalIncomes'>
            Total Incomes: ${getTotalIncome}
        </div>
        </div>
    )
}

export default TransactionList;

/*

{data.transactions.map(transaction => {
                <div key={transaction.id}>
                    <p>{transaction.class}</p>
                    <p>{transaction.type}</p>
                    <p>{transaction.amount}</p>
                    <p>{transaction.date}</p>
                </div>
            })}
            
*/