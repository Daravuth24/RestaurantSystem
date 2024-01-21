import styles from "./styles.module.css";

const Cuisine = ({ Cuisines, filterCuisine, setFilterCuisine }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCuisine, input.value];
      setFilterCuisine(state);
    } else {
      const state = filterCuisine.filter((val) => val !== input.value);
      setFilterCuisine(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Filter By Cuisine</h1>
      <div className={styles.Cuisine_container}>
        {Cuisines.map((CuisineItem) => (
          <div className={styles.Cuisine} key={CuisineItem}>
            <input
              className={styles.Cuisine_input}
              type="checkbox"
              value={CuisineItem}
              onChange={onChange}
            />
            <p className={styles.Cuisine_label}>{CuisineItem}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
