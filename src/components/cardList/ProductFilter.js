import PropTypes from 'prop-types';
import { Box, Chip, Checkbox, FormControlLabel, Grid, Rating, Skeleton, Slider, Stack, TextField, Typography } from '@mui/material';

// ==============================|| PRODUCT GRID Engage FILTER ||============================== //

const Engage = ({ engage, handelFilter }) => {
    return (
        <Stack>
            <>
                <Typography variant="h5">Engage</Typography>
                <Box sx={{ pl: 0.5 }}>
                    <Stack>
                        <FormControlLabel
                            control={<Checkbox checked={engage.some((item) => item === 'topMentor')} />}
                            onChange={() => handelFilter('engage', 'topMentor')}
                            label="Top Mentors"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={engage.some((item) => item === 'activeContributors')}
                                    onChange={() => handelFilter('engage', 'activeContributors')}
                                    color="secondary"
                                />
                            }
                            label="Active Contributors"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={engage.some((item) => item === 'lowActivity')}
                                    onChange={() => handelFilter('engage', 'lowActivity')}
                                    color="error"
                                />
                            }
                            label="Low Activity"
                        />
                    </Stack>
                </Box>
            </>
        </Stack>
    );
};

Engage.propTypes = {
    engage: PropTypes.array,
    handelFilter: PropTypes.func
};

// // ==============================|| PRODUCT GRID Mentor FILTER ||============================== //

const Mentor = ({ mentor, handelFilter }) => {
    return (
        <Stack>
            <>
                <Typography variant="h5" sx={{ mb: 1 }}>Mentor</Typography>
                <Box sx={{ pl: 0.5 }}>
                    <Stack>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={(event) => {
                                        event.target.checked ? handelFilter('mentor', 'mentorReady') : handelFilter('mentor', '')
                                    }}
                                    disabled
                                />
                            }
                            label="Mentor-Ready"

                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={(event) => {
                                        event.target.checked ? handelFilter('mentor', 'projectContributors') : handelFilter('mentor', '')
                                    }}
                                    disabled
                                />
                            }
                            label="Project Contributors"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={(event) => {
                                        event.target.checked ? handelFilter('mentor', 'projectLeads') : handelFilter('mentor', '')
                                    }}
                                    disabled
                                />
                            }
                            label="Project Leads"
                        />
                    </Stack>
                </Box>
            </>
        </Stack>
    );
};

Mentor.propTypes = {
    Mentor: PropTypes.array,
    handelFilter: PropTypes.func
};

// // ==============================|| PRODUCT GRID - Skills FILTER ||============================== //

const Skills = ({ skills, handelFilter }) => {
    return (
        <Stack>
            <>
                <Typography variant="h5" sx={{ mb: 2 }}>Skills</Typography>
                <Box >
                    <Stack spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap' }}
                    >
                        <Chip
                            label="Python"
                            onClick={() => handelFilter('skills', 'python')}
                        />
                        <Chip
                            label="SQL"
                            onClick={() => handelFilter('skills', 'sql')}
                        />
                        <Chip
                            label="Excel"
                            onClick={() => handelFilter('skills', 'excel')}
                        />
                        <Chip
                            label="scripting"
                            onClick={() => handelFilter('skills', 'scripting')}
                        />
                        <Chip
                            label="Data Analysis"
                            onClick={() => handelFilter('skills', 'dataAnalysis')}
                        />
                    </Stack>
                </Box>
            </>
        </Stack >
    );
};

Skills.propTypes = {
    skills: PropTypes.array,
    handelFilter: PropTypes.func
};

// // ==============================|| PRODUCT GRID - FILTER ||============================== //

const ProductFilter = ({ filter, handelFilter }) => (
    <Grid container direction="column" rowSpacing={3}>
        <Grid item>
            <Engage engage={filter.engage} handelFilter={handelFilter} />
        </Grid>
        <Grid item>
            <Mentor mentor={filter.mentor} handelFilter={handelFilter} />
        </Grid>
        <Grid item>
            <Skills skills={filter.skills[0]} handelFilter={handelFilter} />
        </Grid>
    </Grid>
);

ProductFilter.propTypes = {
    filter: PropTypes.object,
    handelFilter: PropTypes.func
};

export default ProductFilter;
