import HistoryExpression from "./HistoryExpression";
import styles from "./ShowHistory.module.css"

function ShowHistory({ history, showHistory }) {
    if (showHistory) {
        return (
            <ul>
                {history.map((expression, index) => { return <HistoryExpression expression={expression} key={index} >  </HistoryExpression> })}
            </ul>
        )
    }
    return null;
}

export default ShowHistory;