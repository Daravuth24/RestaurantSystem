import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Cuisine from "./components/Cuisines";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const [data, setData] = useState({});
  const [sort, setSort] = useState({ sortBy: "Aggregate rating", order: "desc" });
  const [filterCuisines, setFilterCuisines] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sortBy},${sort.order}&Cuisines=${filterCuisines.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRestaurants();
  }, [sort, filterCuisines, page, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table_container">
            <Table Restaurants={data.restaurants ? data.restaurants : []} />
            <Pagination
              page={page}
              limit={data.limit ? data.limit : 0}
              total={data.total ? data.total : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
          <div className="filter_container">
            <Sort sort={sort} setSort={(sort) => setSort(sort)} />
            <Cuisine
              Cuisines={data.Cuisines ? data.Cuisines : []}
              filterCuisines={filterCuisines}
              setFilterCuisines={(Cuisines) => setFilterCuisines(Cuisines)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
