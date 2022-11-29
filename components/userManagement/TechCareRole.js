import { Button, ButtonGroup, Checkbox, Divider, FormControlLabel, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, TextField, Typography, Box } from '@mui/material'
import { useState } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useRouter } from 'next/router';

// import { Box } from '@mui/system'


export default function TakeCareRole() {



    const [checkBoxValue, setCheckBoxValue] = useState({
        TechCareRole: "",
        UserManagement: false,
        ServiceRequest: false,
        RecentAlarms: false,
        Cycles: false,
        Insights: false,
        DeviceData: false,
        TroubleShoot: false,
        Events: false,
        id: "sddd"
    })
    const Router = useRouter()
    // useEffect(() => {
    //     if (updateObj) {
    //         setCheckBoxValue({ ...updateObj })

    //     }
    // }, [updateObj])



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
        console.log(checkBoxValue.TechCareRole.length);
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

                    <TextField id="standard-basic" label="TechCare Roll" required variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={handleTechRoleChange} name='TechCareRole' />

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

                                    name='UserManagement'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="User Management"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='ServiceRequest'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Service Request"

                            /></TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='RecentAlarms'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Recent Alarms"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='TroubleShoot'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="TroubleShoot"

                            />
                        </TableCell>


                    </TableRow>

                    <TableRow >
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='Cycles'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Cycles"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='Insights'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Insights"

                            /></TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='DeviceData'
                                    onChange={handleCheckBoxValues}
                                />}
                                label="Device Data"

                            />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel

                                control={<Checkbox name='Events'
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
                <Button sx={{
                    marginRight: '10px',
                    padding: '10px',
                    minWidth: '150px',
                }}
                    disabled={checkBoxValue.TechCareRole.length < 3 ? true : false}

                    variant="contained">Add</Button>
            </Box>
        </Box>
    )
}