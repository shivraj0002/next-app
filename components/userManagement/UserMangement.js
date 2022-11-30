import { Box, Button, ButtonGroup, Checkbox, Divider, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/router";


const TestUser = [{
    role_name: "Admin",
    allow_user_management: true,
    allow_service_request: true,
    allow_recent_alarms: true,
    allow_troubleshoot: false,
    allow_cycles: true,
    allow_insights: true,
    allow_device_data: true,
    allow_events: true,

}, {
    role_name: "Manager",
    allow_user_management: true,
    allow_service_request: false,
    allow_recent_alarms: true,
    allow_troubleshoot: true,
    allow_cycles: true,
    allow_insights: true,
    allow_device_data: true,
    allow_events: true,

}, {
    role_name: "Boss",
    allow_user_management: true,
    allow_service_request: true,
    allow_recent_alarms: true,
    allow_troubleshoot: true,
    allow_cycles: true,
    allow_insights: true,
    allow_device_data: true,
    allow_events: true,

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
    const [techCareRoles, setTechCareRoles] = useState([...TestUser])
    const [tabValue, setTabValue] = useState(1)
    const [roleTitle, setRoleTitle] = useState('');
    const [addRoleTitle, setAddRoleTitle] = useState('');
    const [techRoleTitle, setTechRoleTitle] = useState('');
    const [techCareRoleFilter, setTechCareRoleFilter] = useState("")
    const [roleMapFilter, setRoleMapFilter] = useState("")

    const fetchTechCareRoles = async () => {
        let url = "https:/fakeUrl/uers"
        try {
            const reqest = await fetch(url)
            const data = await reqest.json()
            setTechCareRoles([...data])
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {

        // fetchTechCareRoles();

    }
        , [])



    useEffect(() => {
        if (roleTitle.length <= 0) {
            setTechCareRoleFilter([...techCareRoles])
        } else {
            var fltrArr = techCareRoles.filter((value) => {
                if (value.role_name.includes(roleTitle, 0)) {
                    return value;
                }
            }

            )
            setTechCareRoleFilter([...fltrArr])
        }
    }, [techCareRoles, roleTitle])

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

    const deleteTechCareRollHandler = async (name) => {
        let url = `https://fakeUrl/${name}`
        try {
            await fetch(url, { method: 'DELETE' })
        } catch (error) {
            console.error(error);
        }

        console.log(name)
    }


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
                            (roleTitle.length > 0 ? techCareRoleFilter : techCareRoles).map(value => {
                                return (
                                    <TableRow key={value.role_name}>
                                        <TableCell>{value.role_name}</TableCell>
                                        <TableCell><Checkbox checked={value.allow_user_management} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_service_request} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_recent_alarms} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_troubleshoot} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_cycles} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_insights} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_device_data} /></TableCell>
                                        <TableCell><Checkbox checked={value.allow_events} /></TableCell>
                                        <TableCell>
                                            <ButtonGroup
                                                variant="text"
                                                sx={{
                                                    translate: '-12px 0'
                                                }}
                                            >
                                                <Button onClick={() => Router.push(`/user-management/techcare-role/${value.role_name}`)}><EditIcon /></Button>
                                                <Button onClick={() => { deleteTechCareRollHandler(value.role_name) }}><DeleteIcon /></Button>
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