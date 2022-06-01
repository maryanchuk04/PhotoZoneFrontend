import React from 'react';
import {places} from "../../Test";
import PlacePreviewCard from "../../Shared/PlacePreviewCard/PlacePreviewCard";
import './ProfilePage.css'
import ProfileMenu from "./profileMenu";

const FavouriteBlock = (props) => {
    return(
        <>

            <div id = "favourite" className="favourite_block" >
                <div className="title">Favourite</div>
                <div className="favourite">
                    {
                        places.map((place,index) => (
                            <PlacePreviewCard place = {place} />
                        ))
                    }
                </div>
            </div>
        </>
    )
    };

export default FavouriteBlock;