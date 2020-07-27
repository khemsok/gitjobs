import React, { useEffect } from "react";

function SearchJobs() {
  useEffect(() => {
    console.log("hey");
  }, []);

  return (
    <div>
      <h1>Search Bar</h1>
    </div>
  );
}

export default SearchJobs;
