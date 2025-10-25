// material-ui
import { useParams } from 'react-router-dom';
import Alumni from '../../Alumni.json';

import {
    Chip,
    Divider,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    Stack,
    Typography,
    useMediaQuery,
    Breadcrumbs
} from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';

// project import
import MainCard from './MainCard';
import Avatar from './Avatar';
import LinearWithLabel from './LinearWithLabel';

// assets
import { AimOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';


// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //

const TabProfile = () => {
    const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const { enrollmentNumber } = useParams();
    const alumni = Alumni.filter((alumni) => alumni.enrolmentNumber === enrollmentNumber);

    return (
        <Grid>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 5, fontSize: '22px' }} size='large'>
                <Link underline="hover" color="primary" href={`/`}>
                    HOME
                </Link>
                <Link
                    underline="hover"
                    color="primary"
                    href={`${enrollmentNumber}`}
                    aria-current="page"
                >
                    PROFILE
                </Link>
            </Breadcrumbs>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5} md={4} xl={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <MainCard>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Chip label="Pro" size="small" color="primary" />
                                        </Stack>
                                        <Stack spacing={2.5} alignItems="center">
                                            <Avatar alt="Avatar 1" size="xl" src={`${alumni[0].imageUrl}`} />
                                            <Stack spacing={0.5} alignItems="center">
                                                <Typography variant="h5">{alumni[0].name}</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" justifyContent="space-around" alignItems="center">
                                            <Stack spacing={0.5} alignItems="center">
                                                <Typography variant="h5">{alumni[0].posts}</Typography>
                                                <Typography color="secondary">Post</Typography>
                                            </Stack>
                                            <Divider orientation="vertical" flexItem />
                                            <Stack spacing={0.5} alignItems="center">
                                                <Typography variant="h5">{alumni[0].projects}</Typography>
                                                <Typography color="secondary">Project</Typography>
                                            </Stack>
                                            <Divider orientation="vertical" flexItem />
                                            <Stack spacing={0.5} alignItems="center">
                                                <Typography variant="h5">{alumni[0].members}K</Typography>
                                                <Typography color="secondary">Members</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <MailOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography align="right">{alumni[0].emailAddress}</Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <PhoneOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography align="right">(+91) {alumni[0].mobileNumber}</Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <AimOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography align="right">{alumni[0].city}</Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </MainCard>
                        </Grid>
                        <Grid item xs={12}>
                            <MainCard title="Skills">
                                <Grid container spacing={1.25}>
                                    {Alumni.map}
                                    <Grid item xs={6}>
                                        <Typography color="secondary">{alumni[0].skills[0]}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LinearWithLabel value={30} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography color="secondary">{alumni[0].skills[1]}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LinearWithLabel value={80} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography color="secondary">{alumni[0].skills[2]}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LinearWithLabel value={90} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography color="secondary">{alumni[0].skills[3]}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LinearWithLabel value={30} />
                                    </Grid>
                                </Grid>
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={7} md={8} xl={9}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <MainCard title="About me">
                                <Typography color="secondary">
                                    {alumni[0].aboutMe}
                                </Typography>
                            </MainCard>
                        </Grid>
                        <Grid item xs={12}>
                            <MainCard title="Personal Details">
                                <List sx={{ py: 0 }}>
                                    <ListItem divider={!matchDownMD}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Full Name</Typography>
                                                    <Typography>{alumni[0].personalDetails.fullName}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Father Name</Typography>
                                                    <Typography>{alumni[0].personalDetails.fatherName}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem divider={!matchDownMD}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Phone</Typography>
                                                    <Typography>
                                                        (+91) <PatternFormat value={alumni[0].personalDetails.phone} displayType="text" type="text" format="#### ### ###" />
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Country</Typography>
                                                    <Typography>{alumni[0].personalDetails.country}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem divider={!matchDownMD}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Email</Typography>
                                                    <Typography>{alumni[0].personalDetails.email}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Zip Code</Typography>
                                                    <Typography>{alumni[0].personalDetails.zipCode}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Stack spacing={0.5}>
                                            <Typography color="secondary">Address</Typography>
                                            <Typography>{alumni[0].personalDetails.address}</Typography>
                                        </Stack>
                                    </ListItem>
                                </List>
                            </MainCard>
                        </Grid>
                        <Grid item xs={12}>
                            <MainCard title="Education">
                                <List sx={{ py: 0 }}>
                                    <ListItem divider>
                                        <Grid container spacing={matchDownMD ? 0.5 : 3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Master Degree (Year)</Typography>
                                                    <Typography>2014-2017</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Institute</Typography>
                                                    <Typography>{alumni[0].education[0]}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem divider>
                                        <Grid container spacing={matchDownMD ? 0.5 : 3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Bachelor (Year)</Typography>
                                                    <Typography>2011-2013</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Institute</Typography>
                                                    <Typography>{alumni[0].education[1]}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </List>
                            </MainCard>
                        </Grid>
                        <Grid item xs={12}>
                            <MainCard title="Emplyment">
                                <List sx={{ py: 0 }}>
                                    <ListItem divider>
                                        <Grid container spacing={matchDownMD ? 0.5 : 3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">{alumni[0].pastEmployment.position}</Typography>
                                                    <Typography >{alumni[0].pastEmployment.company}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Job Responsibility</Typography>
                                                    <Typography>
                                                        {alumni[0].pastEmployment.responsibilities}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={matchDownMD ? 0.5 : 3}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">{alumni[0].currentEmployment.position}</Typography>
                                                    <Typography>{alumni[0].currentEmployment.company}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={0.5}>
                                                    <Typography color="secondary">Job Responsibility</Typography>
                                                    <Typography>{alumni[0].currentEmployment.responsibilities}.</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </List>
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </Grid>
    );
};

export default TabProfile;
