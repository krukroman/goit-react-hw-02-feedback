import FeedbackOption from './FeedbackOption';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onFeedbackleave }) {
  return (
    <ul className={s.list}>
      {Object.keys(options).map(key => {
        return (
          <FeedbackOption
            key={key}
            name={key}
            onFeedbackLeave={onFeedbackleave}
          />
        );
      })}
    </ul>
  );
}
