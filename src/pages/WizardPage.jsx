import React, { useState } from 'react';
import "./WizardPage.css";
import { WizardFormStep } from '../components/WizardFormStep';
import { WizardConfirmStep } from '../components/WizardConfirmStep';

export const WizardPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formState, setFormState] = useState({ name: '', email: '' });

    return <div className="container h-100">
        <div className="wizard-content">
            <div className="wizard-navigation">
                <div className="row">
                    <div className="col-md-2">
                        <button onClick={() => {
                            setCurrentStep(0);
                        }} className="btn btn-secondary">{"<"}</button>
                    </div>
                    <div className="col-md-8">
                        <div className="progress mt-2">
                            <div className="progress-bar" style={{ width: getPercentageFromStep(currentStep) }}></div>
                        </div>
                    </div>
                    <div className="col-md-2 text-right">
                        <button onClick={() => {
                            setCurrentStep(1);
                        }} className="btn btn-secondary">{">"}</button>
                    </div>
                </div>

            </div>
            <div className="wizard-step-container">
                {currentStep === 0 && <WizardFormStep state={formState} setState={(state) => {
                    console.log(state)
                    setFormState(state);
                }}></WizardFormStep>}
                {currentStep === 1 && <WizardConfirmStep data={formState} onConfirm={() => {
                    alert('confirmed!');
                }}></WizardConfirmStep>}
            </div>
        </div>
    </div>
}

const getPercentageFromStep = (step) => {
    switch (step) {
        case 0: return '0';
        case 1: return '75%';
    }
}