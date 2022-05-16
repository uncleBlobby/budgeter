import Transaction from './Transaction.jsx';
import './TransactionList.css';

const TransactionList = ( {props, getTotalIncome, getTotalExpense, getTotalSmokes, getTotalBeerAlcohol} ) => {
    //console.log(`props in front end: ${JSON.stringify(props)}`);

    const totalExpense      = getTotalExpense.toFixed(2);
    const totalIncome       = getTotalIncome.toFixed(2);
    const totalSmokes       = getTotalSmokes.toFixed(2);
    const totalBeerAlcohol  = getTotalBeerAlcohol.toFixed(2);
    const totalNonEssential = (Number(totalBeerAlcohol) + Number(totalSmokes)).toFixed(2);
    
    const percentNonEssentialExpense    = ((Number(totalNonEssential) / Number(totalExpense)) * 100).toFixed(2);
    const percentEssentialExpense       = (((Number(totalExpense) - Number(totalNonEssential)) / Number(totalExpense)) * 100).toFixed(2);

    return (
        <div>
            <div id='transactionListContainer'>

                {props.map((transaction) => {
                    return (
                        <div>
                        <Transaction key={transaction.id} props={transaction}/>
                        </div>
                    )             
                })}
            </div>
            <div id='totalExpenses'>
                <p>Total Expenses: ${totalExpense}</p>
                <p>Total Smokes: ${totalSmokes}</p>
                <p>Total Beer & Alcohol: ${totalBeerAlcohol}</p>
                <p>Total Non-Essentials: ${totalNonEssential}</p>
                <p>{percentNonEssentialExpense}% Non-Essential vs {percentEssentialExpense}% Essential</p>
            
            </div>
            <div id='totalIncomes'>
                Total Incomes: ${totalIncome}
            </div>
        </div>
    )
}

export default TransactionList;
