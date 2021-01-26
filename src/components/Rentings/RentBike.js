import React from 'react'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function RentBike() {
    const icon = <FontAwesomeIcon icon={faSearch} />


    return (
        <>
            <div className="wrapper">
                <div className="residents-wrapper">
                    <h1 className="text-center">Rent a Bike</h1>
                    <div className="search">
                        <input className="input" type="text" class="searchTerm" placeholder="What are you looking for?" />
                        <button type="submit" class="searchButton">
                            {icon}
                        </button>
                    </div>
                    <div className="inline">
                        <table>
                            <tr>
                                <th>User_ID</th>
                                <th>User_Name</th>
                                <th>Eligible</th>
                            </tr>
                            <tr>
                                <td>9817</td>
                                <td>Alfonso De La Guardia</td>
                                <td>Yes</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <Link to={'/findbike'}>
                            <button className="mt-5 btn btn-primary w-100" type="submit">Find Bike</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentBike
