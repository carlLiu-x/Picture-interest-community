import * as React from "react";
import UserInfo from "./userInfo";
import UserContent from "./userContent";
import { useParams } from "react-router-dom";

export default function UserPage(props:any): JSX.Element {
    const {user} =useParams();

    return (
        <> 
            <UserInfo uid={user}/>
            <UserContent uid={user} />
        </>
    );
}
