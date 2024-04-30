import { StatWrapper, StatHeader } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
            <StatWrapper>
                    <StatHeader>Statistics</StatHeader>
                    <br></br>
                <div>
                    <p>Good: {good}</p>
                    <p>Netural: {neutral}</p>
                <p>Bad: {bad}</p>
                <br></br>
                    <p>Total: {total}</p>
                        <p>Positive feedback: {positivePercentage}%</p>
                </div>
            </StatWrapper>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}