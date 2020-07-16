import React from 'react';

export const WizardConfirmStep = ({ data, onConfirm }) => {
    return (
        <div>
            <p>¿Are you sure you want to create this data?</p>
            <ul>
                {Object.keys(data).map((key) => {
                    return <li key={key}>{key}: {data[key]}</li>
                })}
            </ul>
            <button onClick={() => onConfirm()}>Accept</button>
        </div>
    )
}