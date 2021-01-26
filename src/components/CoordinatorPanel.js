import React from 'react';
import { Link } from "react-router-dom";


// rent a bike
// see list of actual rentings
// list of residents and renting history
// see and update list of bikes and renting history

function CoordinatorPanel() {

    return (
        <div className="wrapper">
            <div className="form-signin flex justify-content-between">
                <h1 className="text-center mb-5">Options</h1>
                <div>
                    <Link to={'/coordinatorbikes'}>
                        <button className="btn btn-primary btn-block" type="submit">Bikes</button>
                    </Link>
                    <br />
                    <Link to={'/coordinatorresidents'}>
                        <button className="btn btn-primary btn-block" type="submit">Residents</button>
                    </Link>
                </div>
                <div className="mt-4">
                    <Link to={'/coordinatorrecord'}>
                        <button className="btn btn-primary btn-block" type="submit">Record</button>
                    </Link>
                    <br />
                    <Link to={'/coordinatorcheckout'}>
                        <button className="btn btn-primary btn-block" type="submit">Checkout Time</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoordinatorPanel





