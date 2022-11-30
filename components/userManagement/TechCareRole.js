import { Button, ButtonGroup, Checkbox, Divider, FormControlLabel, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, TextField, Typography, Box } from '@mui/material'
import { useState, useEffect } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useRouter } from 'next/router';

// import { Box } from '@mui/system'

// const TestUser = [{
//     role_name: "Admin",
//     allow_user_management: true,
//     allow_service_request: true,
//     allow_recent_alarms: true,
//     allow_troubleshoot: false,
//     allow_cycles: true,
//     allow_insights: true,
//     allow_device_data: true,
//     allow_events: true,

// }]

export default function TakeCareRole({ id }) {



    const [checkBoxValue, setCheckBoxValue] = useState({
        role_name: "",
        allow_user_management: false,
        allow_service_request: false,
        allow_recent_alarms: false,
        allow_troubleshoot: false,
        allow_cycles: false,
        allow_insights: false,
        allow_device_data: false,
        allow_events: false,
    })
    const Router = useRouter()

    useEffect(() => {
        if (!id) {
            return
        }

        const getTechCareRoleData = async () => {
            let url = `https/fakeUrl/${id}`
            const req = await fetch(url)
            const data = await req.json()
            setCheckBoxValue([...data])

        }

        // getTechCareRoleData()

    }, [])




    const handleCheckBoxValues = (event) => {
        setCheckBoxValue({
            ...checkBoxValue,
            [event.target.name]: event.target.checked,
        });
    }
    const handleTechRoleChange = (event) => {
        setCheckBoxValue({
            ...checkBoxValue,
            [event.target.name]: event.target.value,
        });
    }
    const handleAddButtonClick = () => {

        console.log(checkBoxValue);
        console.log(checkBoxValue.role_name.length);
    }
    const handleUpdateButtonClick = () => {

        console.log(id)
        //Write logic for update existing user
    }

    return (
        <Box>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography variant='h6' component='h6' sx={{ padding: '15px', fontWeight: 'bold', marginLeft: '10px' }}>
                    Add Tech Role
                </Typography>
                <IconButton onClick={() => {


                    Router.push("/user-management")

                }} aria-label="delete">
                    <CancelOutlinedIcon />
                </IconButton>
            </Box>

            <Divider />
            <Box sx={{ border: '0.5px solid #d9d9d9', padding: '10px', display: 'flex', justifyContent: 'space-between', marginTop: '15px', flexWrap: 'wrap' }} >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <TextField id="standard-basic" label="TechCare Roll" required variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={handleTechRoleChange} name='role_name' />

                </Box>
            </Box>
            <Table stickyHeader aria-label="sticky table" sx={{
                marginTop: '10px',
                border: '0.5px solid #d9d9d9',
                padding: '10px',

            }}>
                <TableHead>
                    <TableRow>

                        <TableCell colSpan={4} sx={{ fontWeight: 'bold' }}>Assign Module</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>


                    <TableRow >
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox

                                    name='allow_user_management'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="User Management"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_service_request'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Service Request"

                            /></TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_recent_alarms'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Recent Alarms"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_troubleshoot'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="TroubleShoot"

                            />
                        </TableCell>


                    </TableRow>

                    <TableRow >
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_cycles'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Cycles"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_insights'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Insights"

                            /></TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_device_data'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Device Data"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='allow_events'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Events"

                            />
                        </TableCell>


                    </TableRow>
                </TableBody>
            </Table>
            <Box sx={{
                marginTop: '10px',
                border: '0.5px solid #d9d9d9',
                padding: '10px',
                textAlign: 'right',

            }}>
                {!id ? <Button sx={{
                    marginRight: '10px',
                    padding: '10px',
                    minWidth: '150px',
                }}
                    disabled={checkBoxValue.role_name.length < 3 ? true : false}

                    variant="contained" onClick={handleAddButtonClick}>Add</Button> : <Button sx={{
                        marginRight: '10px',
                        padding: '10px',
                        minWidth: '150px',
                    }}
                        disabled={checkBoxValue.role_name.length < 3 ? true : false}

                        variant="contained" onClick={handleUpdateButtonClick}>Update</Button>}
            </Box>
        </Box>
    )
}