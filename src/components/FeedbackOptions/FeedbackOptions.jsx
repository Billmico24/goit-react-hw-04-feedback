import {Wrapper, Button} from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   
    return (
        <Wrapper>
                    {options.map(el => (
                        <Button
                            onClick={() => onLeaveFeedback(el)}
                            key={el}>{el}</Button>
                    ))}
        </Wrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}