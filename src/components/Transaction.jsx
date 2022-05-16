import './Transaction.css'

const Transaction = ({props}) => {
    const TXCLASS = props.class;
    return (
        <div className={TXCLASS}>
                <span>{props.type}</span>
                <span>${props.amount}</span>
                <span>{props.date}</span>
        </div>
    )
}

export default Transaction;