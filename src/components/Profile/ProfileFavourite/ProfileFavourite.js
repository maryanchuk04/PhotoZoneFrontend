import React from 'react';
import './ProfileFavourite.css'
import ProfileMenu from "../ProfilePage/profileMenu";
import FavouriteBlock from "../ProfilePage/FavouriteBlock";
import Menu from "../../Shared/Menu/Menu";

const ProfileFavourite = (props) => {
    return (
        <>
            <div className="favmenu">
                <div className="favcontainer">
                    <ProfileMenu/>
                    <FavouriteBlock/>
                </div>
            </div>
        </>
    );
}
export default ProfileFavourite;