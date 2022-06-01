import React from 'react';
import NewLocationForm from "./resources/NewLocationForm";
import './NewLocationPage.css'


const NewLocationPage = (props) => {
    return (
        <div className={"new_location_container"}>
            <NewLocationForm/>
        </div>
    )
};

export default NewLocationPage;