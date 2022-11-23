import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

export function SearchBar() {
    return (
        <TextField
        id="input-with-icon-textfield"
        placeholder='Търсене'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    )
}
