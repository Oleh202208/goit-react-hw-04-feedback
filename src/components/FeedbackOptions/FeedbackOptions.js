import PropTypes from 'prop-types';
import { SetButton, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <SetButton>
      {options.map((option, index) => (
        <Btn key={index} type="button" onClick={() => onLeaveFeedBack(option)}>
          {option}
        </Btn>
      ))}
    </SetButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
