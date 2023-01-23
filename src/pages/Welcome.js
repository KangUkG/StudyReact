import React from "react";
import { Route } from "react-router";

const Welcome = () => {

    return (
        <div>
            <h1>Welcome!</h1>
            <Route path='/welcome/new-user'>Welcome New User!!</Route>
        </div>
    );
}
export default Welcome;