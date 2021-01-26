import React from 'react'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Rentings() {
    const icon = <FontAwesomeIcon icon={faSearch} />

    return (
        <>
            <div className="wrapper">
                <div className="rentings-wrapper">
                    <h1 className="text-center">Rentings</h1>
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
                                <th>Station</th>
                                <th>Rented By</th>
                                <th>Time Left</th>
                            </tr>
                            <tr>
                                <td>9457</td>
                                <td>2</td>
                                <td>Alfonso De La Guardia</td>
                                <td>2 hours</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rentings