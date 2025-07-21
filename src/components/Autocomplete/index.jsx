import React from "react";

import {
  Autocomplete,
  TextField,
} from "@mui/material";

import data from "./data";
import ListboxComponent from "./ListboxComponent";


const top100Films = [
  { product_name: "The Shawshank Redemption", year: 1994 },
  { product_name: "The Godfather", year: 1972 },
  { product_name: "The Godfather: Part II", year: 1974 },
  { product_name: "The Dark Knight", year: 2008 },
  { product_name: "12 Angry Men", year: 1957 },
  { product_name: "Schindler's List", year: 1993 },
  { product_name: "Pulp Fiction", year: 1994 },
  {
    product_name: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

export const AutocompleteDemo = () => {
  return (
    <Autocomplete
      style={{ width: '50%' }}
      disableListWrap
      options={data}
      getOptionLabel={(option) =>
      {
        return option.product_name;
      }
      }
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          <img src={option?.images} height={50} width={50} />{option.product_name}
        </li>
      )}
      ListboxComponent={ListboxComponent}
      id="autocomplete"
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Label" fullWidth />
      )}
    />
  );
};
