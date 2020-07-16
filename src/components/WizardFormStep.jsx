import React from 'react';

export const WizardFormStep = ({ state, setState }) => {
    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <input value={state.name} onChange={(e) => { setState({ ...state, name: e.target.value }) }} type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input value={state.email} onChange={(e) => { setState({ ...state, email: e.target.value }) }} type="email" className="form-control" placeholder="Enter email" />
            </div>
        </div>
    )
}