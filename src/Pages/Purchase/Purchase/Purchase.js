import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Purchase = ({ openPurchase, explore, handlePurchaseClose, setPurchaseSuccess }) => {
    const { name, Price } = explore;
    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, phone: '' }
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const handlePurchaseSubmit = e => {
        // collect data
        const purchase = {
            ...purchaseInfo,
            serviceName: name,
            price: Price

        }
        // send to the server
        fetch('https://whispering-shore-11998.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPurchaseSuccess(true);
                    alert("Ready to Order?")
                    handlePurchaseClose();
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openPurchase}
                onClose={handlePurchaseClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openPurchase}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handlePurchaseSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="Name"
                                name="userName"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                variant="standard"
                                size="small"
                            />

                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                label="Email"
                                variant="standard"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                disabled
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="address"
                                onBlur={handleOnBlur}
                                label="Address"
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}

                                size="small"
                                label="Phone Number"
                                variant="standard"
                            />

                            <Button type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Purchase;