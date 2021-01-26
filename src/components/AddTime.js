import React from 'react'

function AddTime() {
    return (
        <div className="wrapper">
            <div className="form-signin">
                <h1 className="text-center">Time Left</h1>
                <img className="clock" src="https://reactjsexample.com/content/images/2017/03/ReactJS-Clock-with-different-formats.gif" />
                <h1 className="text-center mt-5">Add Time</h1>
                <div>
                    Add More Time   <select className="select">
                        <option>-- Select --</option>
                        <option value="0">0.5 hour</option>
                        <option value="1">1 hour</option>
                        <option value="1">1.5 hours</option>
                        <option value="1">2 hours</option>
                    </select>
                </div>
                <button className="mt-5 btn btn-primary w-100" type="submit">Submit</button>
            </div>
        </div>
    )
}

export default AddTime
