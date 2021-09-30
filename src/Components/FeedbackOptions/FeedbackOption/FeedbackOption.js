import s from './FeedbackOption.module.css';

export default function FeedbackOption({ name, onFeedbackLeave }) {
  return (
    <li className={s.item}>
      <button type="button" className={s.button} onClick={onFeedbackLeave}>
        {name.toUpperCase()}
      </button>
    </li>
  );
}
