import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faSearch} />

function CoordinatorRecord() {
    return (
        <>
            <div className="wrapper">
                <div className="residents-wrapper">
                    <h1 className="text-center">Record</h1>
                    <div className="inline">
                        <button className="btn btn-primary btn-block">Get Historic Information about Bikes</button>
                        <button className="btn btn-primary btn-block">Get Historic Information about Renters</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoordinatorRecord;
