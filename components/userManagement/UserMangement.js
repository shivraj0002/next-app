import { Box, Button, ButtonGroup, Checkbox, Divider, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/router";

const TestUser = [{
    TechCareRole: "Admin",
    UserManagement: true,
    ServiceRequest: true,
    RecentAlarms: true,
    Cycles: true,
    Insights: true,
    DeviceData: true,
    TroubleShoot: true,
    Events: true,
    id: "sdd0"

}, {
    TechCareRole: "Management",
    UserManagement: true,
    ServiceRequest: true,
    RecentAlarms: true,
    Cycles: true,
    Insights: true,
    DeviceData: true,
    TroubleShoot: true,
    Events: true,
    id: "sdd1"

}, {
    TechCareRole: "Boss",
    UserManagement: true,
    ServiceRequest: true,
    RecentAlarms: true,
    Cycles: true,
    Insights: true,
    DeviceData: true,
    TroubleShoot: true,
    Events: true,
    id: "sdd2"

}]

const AddRole = ["Add Role", "TechRole", "Action"]
const DummyAddRole = [{
    id: 5478,
    AddedRole: "Admin",
    TechCareRole: "Fixed Some Issues1"
},
{
    id: 6542,
    AddedRole: "Admin2",
    TechCareRole: "Fixed Some Issues"
}, {
    id: 8784,
    AddedRole: "Admin3",
    TechCareRole: "Fixed Some Issues2"
}]

export default function UserManagement() {
    const [tabValue, setTabValue] = useState(1)
    const [roleTitle, setRoleTitle] = useState('');
    const [addRoleTitle, setAddRoleTitle] = useState('');
    const [techRoleTitle, setTechRoleTitle] = useState('');
    const [techCareRoleFilter, setTechCareRoleFilter] = useState("")
    const [roleMapFilter, setRoleMapFilter] = useState("")


    useEffect(() => {
        if (roleTitle.length <= 0) {
            setTechCareRoleFilter([...TestUser])
        } else {
            var fltrArr = TestUser.filter((value) => {
                if (value.TechCareRole.includes(roleTitle, 0)) {
                    return value;
                }
            }

            )
            setTechCareRoleFilter([...fltrArr])
        }
    }, [TestUser, roleTitle])

    useEffect(() => {
        if (addRoleTitle.length <= 0 && techRoleTitle.length <= 0) {
            setRoleMapFilter([...DummyAddRole])
        } else {
            var fltrArr = DummyAddRole.filter((value) => {
                if (value.AddedRole.includes(addRoleTitle) && value.TechCareRole.includes(techRoleTitle)) {
                    return value;
                }
            }

            )
            setRoleMapFilter([...fltrArr])
        }
    }, [DummyAddRole, addRoleTitle, techRoleTitle])


    const Router = useRouter()
    const tabSwitchHandler = (event, newValue) => {
        setTabValue(newValue)
    }

    return (
        <Box>
            <Typography variant='h6' component='h6' sx={{ padding: '15px' }}>
                User Management
            </Typography>
            <Divider />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={tabSwitchHandler} aria-label="basic tabs example" sx={{ marginBottom: '10px' }}>
                        <Tab label="Tech Care Role Management" value={1} sx={{ fontWeight: '20px', color: '#000000', padding: '15px' }} />
                        <Tab label="Add Role Mapping" value={2} sx={{ fontWeight: '20px', color: '#000000', padding: '15px' }} />
                    </Tabs>
                </Box>
            </Box>


            {/*  
            // ! Second group 
            */}

            <Box sx={{ border: '0.5px solid #d9d9d9', padding: '10px', display: 'flex', justifyContent: 'space-between', marginTop: '15px', flexWrap: 'wrap' }} >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Typography variant='subtitle1' sx={{ fontWeight: '20px', padding: '15px' }}>
                        Filters
                    </Typography>
                    <Divider orientation="vertical" flexItem />

                    {
                        (tabValue === 1) && <TextField id="standard-basic" label="Role Title" variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={(e) => setRoleTitle(e.target.value)} value={roleTitle} />
                    }

                    {
                        (tabValue === 2) && <><TextField id="standard-basic" label="Add Role" variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={(e) => setAddRoleTitle(e.target.value)} value={addRoleTitle} />
                            <TextField id="standard-basic" label="TechCare Role" variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={(e) => setTechRoleTitle(e.target.value)} value={techRoleTitle} /></>
                    }

                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Divider orientation="vertical" flexItem />


                    {
                        (tabValue === 1) && <Button variant="contained" startIcon={<AddIcon />} sx={{ marginLeft: '15px' }} onClick={() => Router.push("user-management/techcare-role")} >
                            Add TechCare Role
                        </Button>
                    }
                    {
                        (tabValue === 2) &&
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{ marginLeft: '15px' }}
                            onClick={() => Router.push("user-management/role-mapping")}
                        >
                            Role Mapping
                        </Button>
                    }


                </Box>
            </Box>

            {/* 
             // ! Third group
             */}
            {
                (tabValue === 1) && <Table stickyHeader aria-label="sticky table" sx={{
                    marginTop: '10px',
                    border: '0.5px solid #d9d9d9'

                }}>
                    <TableHead>
                        <TableRow>
                            {
                                ["Role Title", "User Management", "Service Request", "Recent Alarms", "Troubleshoot", "Cycles", "Insights", "Device Data", "Events", "Action"].map(value => <TableCell sx={{
                                    fontWeight: 'bold'
                                }} key={value}>{value}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (roleTitle.length > 0 ? techCareRoleFilter : TestUser).map(value => {
                                return (
                                    <TableRow key={value.id}>
                                        <TableCell>{value.TechCareRole}</TableCell>
                                        <TableCell><Checkbox checked={value.UserManagement} /></TableCell>
                                        <TableCell><Checkbox checked={value.ServiceRequest} /></TableCell>
                                        <TableCell><Checkbox checked={value.RecentAlarms} /></TableCell>
                                        <TableCell><Checkbox checked={value.Cycles} /></TableCell>
                                        <TableCell><Checkbox checked={value.Insights} /></TableCell>
                                        <TableCell><Checkbox checked={value.DeviceData} /></TableCell>
                                        <TableCell><Checkbox checked={value.TroubleShoot} /></TableCell>
                                        <TableCell><Checkbox checked={value.Events} /></TableCell>
                                        <TableCell>
                                            <ButtonGroup
                                                variant="text"
                                                sx={{
                                                    translate: '-12px 0'
                                                }}
                                            >
                                                <Button onClick={() => Router.push(`/user-management/techcare-role/${value.id}`)}><EditIcon /></Button>
                                                <Button><DeleteIcon /></Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            }

            {/* 
            // ! Fourth group
            */}

            {
                (tabValue === 2) && <Table stickyHeader aria-label="sticky table" sx={{
                    marginTop: '10px',
                    border: '0.5px solid #d9d9d9'

                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{
                                fontWeight: 'bold'
                            }} align='left' key={AddRole[0]}>{AddRole[0]}</TableCell>
                            <TableCell sx={{
                                fontWeight: 'bold'
                            }} align='center' key={AddRole[1]}>{AddRole[1]}</TableCell>
                            <TableCell sx={{
                                fontWeight: 'bold'
                            }} align='right' key={AddRole[2]}>{AddRole[2]}</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            (addRoleTitle.length > 0 || techRoleTitle.length > 0 ? roleMapFilter : DummyAddRole).map(value => {
                                return (
                                    <TableRow key={value.id}>
                                        <TableCell align='left'>{value.AddedRole}</TableCell>
                                        <TableCell align='center'>{value.TechCareRole}</TableCell>

                                        <TableCell align='right'>
                                            <ButtonGroup variant="text">
                                                <Button
                                                    onClick={() => Router.push(`user-management/role-mapping/${value.id}`)}

                                                ><EditIcon /></Button>
                                                <Button><DeleteIcon /></Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>


                </Table>
            }






        </Box>
    )
}