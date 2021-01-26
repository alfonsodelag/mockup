import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faSearch} />

const availableNumber = 10;

// rent a bike
// see list of actual rentings
// list of residents and renting history
// see and update list of bikes and renting history

function VolunteerPanel() {
    return (
        <div className="wrapper">
            <div className="form-signin flex justify-content-between">
                <h1 className="text-center mb-5">Options</h1>
                <div>
                    <Link to={'/rentbike'}>
                        <button className="btn btn-primary btn-block" type="submit">Rent a Bike</button>
                    </Link>
                    <br />
                    <Link to={'/rentings'}>
                        <button className="btn btn-primary btn-block" type="submit">Rentings</button>
                    </Link>
                </div>
                <div className="mt-4">
                    <Link to={'/residents'}>
                        <button className="btn btn-primary btn-block" type="submit">Residents</button>
                    </Link>
                    <br />
                    <Link to={'/rentinghistory'}>
                        <button className="btn btn-primary btn-block" type="submit">Renting History</button>
                    </Link>
                </div>
            </div>
            {/* <h2 className="form-signin-heading">Rent a Bike</h2>

                    <div className="wrap">
                        <div className="search">
                            <input className="input" type="text" class="searchTerm" placeholder="What are you looking for?" />
                            <button type="submit" class="searchButton">
                                {icon}
                            </button>
                        </div>
                    </div>

                    Select User<select className="select">
                        <option value="0">Alfonso De La Guardia</option>
                        <option value="1">Manuel Rodriguez</option>
                    </select>
                    <h1 className="volunteer-available-bikes">Available Bikes: {availableNumber}</h1>
                    <label class="checkbox">
                        <input className="input" type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Assign Bike
                    </label>
                    <div>
                        Add More Time <select className="select">
                            <option>-- Select --</option>
                            <option value="0">0.5 hour</option>
                            <option value="1">1 hour</option>
                            <option value="1">1.5 hours</option>
                            <option value="1">2 hours</option>
                        </select>
                    </div>
                    <div className="rentings-residents">
                        <Link to={'/rentings'}>
                            <button className="mr-2 btn btn-primary btn-block" type="submit">Rentings</button>
                        </Link>
                        <br />
                        <Link to={'/residents'}>
                            <button className="ml-2 btn btn-primary btn-block" type="submit">Residents</button>
                        </Link>
                    </div>

                    <Link to={'/volunteerpanel'}>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Done</button>
                    </Link> */}
        </div>
    )
}

export default VolunteerPanel





