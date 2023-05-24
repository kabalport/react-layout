import React from 'react';
import { InputAdornment, TextField, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

interface SearchBarProps {
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onSearch(value);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
        <TextField
            variant="outlined"
            placeholder="검색"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
            onChange={handleSearch}
        />
        </Box>
    );
};

export default SearchBar;
