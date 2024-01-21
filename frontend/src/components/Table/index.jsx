import styles from "./styles.module.css";

const Table = ({ Restaurants }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.name_tab}>Name</p>
        <p className={styles.Cuisines_tab}>Cuisines</p>
        <p className={styles.rating_tab}>Rating</p>
      </div>
      {Restaurants.map((Restaurant) => (
        <div className={styles.Restaurant} key={Restaurant['Restaurant ID']}>
          <div className={styles.name_container}>
            <p className={styles.Restaurant_name}>
              {Restaurant['Restaurant Name']} ({Restaurant['Restaurant ID']})
            </p>
          </div>
          <div className={styles.Cuisines_container}>
			
            {Restaurant.Cuisines.map((Cuisine, index) => (
              <p key={index} className={styles.Restaurant_Cuisines}>
                {Cuisine}
                {index !== Restaurant.Cuisines.length - 1 && "/"}
              </p>
            ))}
          </div>
          <div className={styles.rating_container}>
            <img
              src="./images/star.png"
              alt="star"
              className={styles.star_img}
            />
            <p className={styles.Restaurant_rating}>{Restaurant['Aggregate rating']}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
