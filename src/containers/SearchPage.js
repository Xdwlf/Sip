import React from 'react'
import "../components/SearchBar"
import SearchBar from '../components/SearchBar';
import DrinkList from './DrinkList';

const SearchPage = () => (
    <div>
        <SearchBar />
        <DrinkList />
    </div>
)

export default SearchPage