import React from 'react'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function RentingHistory() {
    const icon = <FontAwesomeIcon icon={faSearch} />

    return (
        <>
            <div className="wrapper">
                <div className="rentings-wrapper">
                    <h1 className="text-center">Renting History</h1>
                    <div className="search">
                        <input className="input" type="text" class="searchTerm" placeholder="What are you looking for?" />
                        <button type="submit" class="searchButton">
                            {icon}
                        </button>
                    </div>
                    <div className="inline">
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>State</th>
                                <th>History</th>
                                <th>Update Condition</th>
                            </tr>
                            <tr>
                                <td>3010</td>
                                <td>Broken</td>
                                <td><button className="btn btn-primary btn-block">See History</button></td>
                                <td><button className="btn btn-primary btn-block">Update Condition</button></td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <Link to={'/findbike'}>
                            <button className="mt-5 btn btn-primary w-100" type="submit">Update Status</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentingHistory;