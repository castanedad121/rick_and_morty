//! import hooks
import { useState } from "react";
//! import styles
import styles from "./SearchBar.module.css";
//! impor icons
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const SearchBar = (props) => {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
    
  };
  const { onSearch } = props;
  const randomId = Math.trunc(Math.random() * 826) + 1;
  
  return (
    <div className={styles.container} >
      <button
        onClick={() => onSearch(randomId)}
        className={styles.buttonRandom}
      >
        <GiPerspectiveDiceSixFacesRandom />
      </button>

      <input
        type="number"
        placeholder="Write ID"  
        onChange={handleChange}
        min="1" max="826"
        value={id}
        className={styles.search}
      />
      <button onClick={() => onSearch(id)} className={styles.buttonAdd} >
        <HiOutlineViewGridAdd  />
      </button>
    </div>
  );
};

export default SearchBar;
