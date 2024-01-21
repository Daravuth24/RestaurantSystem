import styles from "./styles.module.css";

const Sort = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sortBy: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sortBy: sort.sortBy, order: "desc" });
    } else {
      setSort({ sortBy: sort.sortBy, order: "asc" });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.sort_by}>Sort</p>
      <select
        onChange={onSelectChange}
        className={styles.select}
        defaultValue={sort.sortBy}
      >
        <option value="Price range">Price</option>
        <option value="Aggregate rating">Rating</option>
      </select>
      <button className={styles.arrow_btn} onClick={onArrowChange}>
        <p className={styles.up_arrow}>&uarr;</p>
        <p className={styles.down_arrow}>&darr;</p>
      </button>
    </div>
  );
};

export default Sort;
