import React from "react";
import { MDBCol } from "mdbreact";


const SearchPage = ({setNameSearch}) => {
  return (
    <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" name="name"
        onChange={(e)=>setNameSearch(e.target.value)}
        type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default SearchPage;