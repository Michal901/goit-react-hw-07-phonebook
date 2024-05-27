import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filterValue, setFilterValue }) => {
  return (
    <div className={styles.filter}>
      <div>
        <label htmlFor="filter">Find contact by name:</label>
      </div>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={setFilterValue}
        placeholder="Search..."
      />
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired,
};

export default Filter;
