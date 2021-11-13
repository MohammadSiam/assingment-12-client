import { TextField, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';

const CustomerReview = () => {
    const [rateValue, setRateValue] = React.useState(0);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("data :", data.Description)
        console.log("rate :", rateValue);

        fetch('https://whispering-shore-11998.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ Description: data.Description, Rate: rateValue })
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Thanks For Ratting")
                    reset();
                }
            })
    };






    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8, textAlign: "center" }} xs={12} md={12} lg={12} >
                        <h3>Please Review Our Product</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <textarea style={{ width: "40%", height: "200px" }} placeholder="Description" {...register("Description", {})} />
                            <br /><br />

                            <Rating
                                name="simple-controlled"
                                rateValue={rateValue}
                                onChange={(event, newValue) => {
                                    setRateValue(newValue);
                                }}
                            />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <br /> <br />

                            <input type="submit" />
                        </form>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
};

export default CustomerReview;