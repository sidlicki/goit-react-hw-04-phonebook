import css from './Filter.module.css';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
