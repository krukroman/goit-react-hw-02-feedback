import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

export default function FeedbackOption({ name, onLeaveFeedback }) {
  return (
    <li className={s.item}>
      <button type="button" className={s.button} onClick={onLeaveFeedback}>
        {name.toUpperCase()}
      </button>
    </li>
  );
}

FeedbackOption.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
