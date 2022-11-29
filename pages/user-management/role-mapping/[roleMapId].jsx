import { Box, Button, ButtonGroup, Checkbox, Divider, FormControlLabel, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, TextField, Typography } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useRouter } from 'next/router';

export default function UpdateRoleMapping() {

    const Router = useRouter()

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

                    <TextField onChange={(e) => { }


                    } id="standard-basic" label="Add Role" required name='AddedRoll' variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} />
                    <TextField onChange={(e) => { }


                    } id="standard-basic" label="TechCare Roll" required name='TechRoll' variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} />

                </Box>
            </Box>

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
                    // disabled={true}
                    variant="contained" onClick={() => { }}>Update</Button>
            </Box>
        </Box>
    )
}