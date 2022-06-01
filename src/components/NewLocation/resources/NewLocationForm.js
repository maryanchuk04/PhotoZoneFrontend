import React,{useState} from 'react';
import {Stepper, Step, StepLabel} from "@mui/material";
import Menu from "../../Shared/Menu/Menu";
import './NewLocationForm.css'
import {Rating} from '@mui/material';
import {Button,TextField} from "@mui/material";
import FirstSteps from './steps/firstSteps';
import {Box, Typography,} from '@mui/material'
import SecondSteps from './steps/secondSteps';
import ThirdSteps from './steps/thirdSteps';

const NewLocationForm = (props) => {
    const NewLocationObject = {
        userName : "",
        title : "",
        description : "",
        rating : 0,
        images : [],
        location : {
            lng : 0,
            lat : 0,
            locationString : ""
        },
    }
    const steps = [
        'Main information',
        'Location information',
        'Images',
        'Complete'
    ]
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    
    const isStepOptional = (step) => {
        return step === 1;
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        console.log(activeStep);


        
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
    return(
            <div className="form_newLocation">
                <div className="title">
                    <div className="title_form">
                        <img src="https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzE4MDIwMiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/TmV3IEludHJlc3RpbmcgTG9jYXRpb24/vegan-style-personal-use.png" alt=""/>
                    </div>
                    <div className="stepper">
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {
                                steps.map((step,index)=>(
                                    <Step key = {step}>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))
                            }
                        </Stepper>
                    </div>
                </div>
                <>
                    <div className ="form_info">
                        
                        {/*  */}
                        {activeStep === steps.length-1 ? (
                            <div className = 'done'>
                                <img src={"https://cdn.iconscout.com/icon/free/png-256/done-circle-symbol-downloaded-31357.png"} alt="done" />
                            </div>     
                                ) : (
                                    activeStep ===0 ?
                                        <FirstSteps NewLocationObject ={NewLocationObject}/>  
                                    : activeStep===1  ? 
                                        <SecondSteps NewLocationObject ={NewLocationObject}/>
                                    : activeStep===2 ?
                                        <ThirdSteps NewLocationObject = {NewLocationObject}/>
                                    :<></>
                        )}
                        <div className="navigate_buttons">
                           <Button
                           color="inherit"
                           disabled={activeStep === 0}
                           onClick={handleBack}
                           sx={{ mr: 1 }}
                           >
                           Back
                           </Button>
                           <Box sx={{ flex: '1 1 auto' }} />
                           <Button onClick={activeStep === steps.length-1 ? handleReset : handleNext}>
                           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                           </Button>
                        </div>
                        {/*  */}
                    </div>
                </>
            </div>
    )
};

export default NewLocationForm;