import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../assets/Search icon.svg";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { useNavigate } from "react-router-dom";

function Search({ searchData, placeholder }) {
  // MUI autocomplete supplies keyboard navigation and matching suggestions.
  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    // A selected album opens its route instead of submitting a page reload.
    if (value) navigate(`/album/${value.slug}`);
  };

  // Render the suggestion list only while matching albums are available.
  return (
    <div className={styles.container}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button
            className={styles.searchButton}
            type="submit"
            aria-label="Search"
          >
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <ul className={styles.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                className={styles.listElement}
                {...getOptionProps({ option, index })}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>

                  <p className={styles.albumArtists}>
                    {artists.join(", ").slice(0, 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Search;
