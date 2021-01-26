import React from 'react';
import Table from "./Rentings/kitrentings/rentingsTable";
import { data } from "./Rentings/data";
import { Center } from "./Rentings/styles/mixins/Center";
import { Link } from 'react-router-dom';

function FindBike() {
    return (
        <div className="wrapper">
            <div className="form-signin">
                <h1 className="text-center">Bikes</h1>
                <Center V H>
                    <Table data={data} />
                </Center>
                <Link to={'/addtime'}>
                    <button className="mt-5 btn btn-primary w-100" type="submit">Assign Time</button>
                </Link>
            </div>
        </div>
    )
}

export default FindBike
