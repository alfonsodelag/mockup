import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faSearch} />

function CoordinatorResidents() {
    return (
        <>
            <div className="wrapper">
                <div className="residents-wrapper">
                    <h1 className="text-center">Residents</h1>
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
                                <th>Renter Info</th>
                                <th>Active</th>
                                <th>Station</th>
                            </tr>
                            <tr>
                                <td>9457</td>
                                <td><button className="btn btn-primary btn-block">Update</button></td>
                                <td><button className="btn btn-primary btn-block">Update</button></td>
                                <td><button className="btn btn-primary btn-block">Update</button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="inline">
                        <h3>Add a new Resident</h3>
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

export default CoordinatorResidents;
