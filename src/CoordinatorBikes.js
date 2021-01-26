import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faSearch} />

function CoordinatorBikes() {
    return (
        <>
            <div className="wrapper">
                <div className="residents-wrapper">
                    <h1 className="text-center">Bikes</h1>
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
                                <th>Bike Info</th>
                                <th>Rents/Day</th>
                                <th>Station</th>
                            </tr>
                            <tr>
                                <td>2740</td>
                                <td><button className="btn btn-primary btn-block">Update</button></td>
                                <td>3</td>
                                <td><button className="btn btn-primary btn-block">Update</button></td>
                            </tr>
                        </table>
                    </div>
                    <h3 className="mt-4">Add new bike</h3>
                    <div className="inline">
                        <input type="text" className="form-control mb-4" name="username" placeholder="Insert New" required="" autofocus="" />
                        <Link to={'/findbike'}>
                            <button className="mt-5 btn btn-primary w-100" type="submit">Submit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoordinatorBikes
