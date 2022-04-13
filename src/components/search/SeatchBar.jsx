import React from "react";

const SearchBar = ({
    query,
    setQuery,
    isLoading,
    handleSubmit
    }) => {

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Meals, Dishes Or Recipes with ingredients"
                className="form-control"
                />
                <input 
                disabled={isLoading || !query}
                type="submit" 
                className="btn"
                value="Search"
                />
        </form>
    )
};

export default SearchBar;