import * as React from "react";
import UserInfo from "./userInfo";
import UserContent from "./userContent";

export default function UserPage(props:any): JSX.Element {
    
    return (
        <> 
            
            <UserInfo />
            <UserContent />
        </>
    );
}
