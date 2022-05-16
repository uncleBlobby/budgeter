const TransactionList = ( {props} ) => {
    console.log(`props in front end: ${JSON.stringify(props)}`);

    return (
        <div id='transactionListContainer'>
            Hello Transaction List
            {props.map((transaction) => {
                return (
                    <div key={transaction.id}>
                        <span>{transaction.class} {transaction.type} {transaction.amount} {transaction.date}</span>
                    </div>
                )             
            })}
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