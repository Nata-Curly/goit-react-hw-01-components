import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (<section className={css.stat}>
        {title && <h2 className={css.title}>{ title }</h2>}

            <ul className={css.list}>
            {stats.map(({ id, label, percentage }) =>
                (<li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage} %</span>
                </li>)               
            )}
            </ul>
        </section>)
}

const getRandomHexColor = () => {
  const r = Math.floor(Math.random() * 225);
  const g = Math.floor(Math.random() * 225);
  const b = Math.floor(Math.random() * 225);

  return `rgb(${r},${g},${b})`;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};