import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ProductFilterDrawer from '../ProductFilterDrawer'
import ProductsHeader from '../ProductsHeader';
import Alumni from '../../../Alumni.json';
import MultiActionAreaCard from '../../newCard/newCard'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'container' })(({ theme, open, container }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shorter
  }),
  marginLeft: -320,
  ...(container && {
    [theme.breakpoints.only('lg')]: {
      marginLeft: !open ? -240 : 0
    }
  }),
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0,
    marginLeft: 0
  },
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: 0
  })
}));

const ProductsPage = () => {
  const theme = useTheme();
  const [openFilterDrawer, setOpenFilterDrawer] = useState(true);
  const handleDrawerOpen = () => {
    setOpenFilterDrawer((prevState) => !prevState);
  };

  const initialState = {
    search: '',
    sort: 'none',
    engage: [],
    mentor: '',
    skills: [],
  };

  const [filter, setFilter] = useState(initialState);
  let [alumni, setAlumni] = useState(Alumni);

  useEffect(() => {
    let data = Alumni ? [...Alumni] : [];

    if (filter.search) {
      data = data.filter((alumni) => alumni.name.toLowerCase().includes(filter.search.toLowerCase()));
    }

    if (filter.engage.length > 0) {
      let engageSet = new Set();
      filter.engage.map((type) => {
        switch (type) {
          case 'topMentor':
            data.forEach((alumni) => { (alumni.projects > 4 && alumni.posts) > 5 && engageSet.add(alumni) });
            break;
          case 'activeContributors':
            data.forEach((alumni) => { (alumni.projects >= 3 || alumni.posts >= 5) && engageSet.add(alumni) });
            break;
          case 'lowActivity':
            data.forEach((alumni) => { (alumni.projects <= 1 && alumni.posts <= 2) && engageSet.add(alumni) });
            break;
        };
      })
      data = engageSet;
    }


    if (filter.skills.length > 0) {
      let skillsSet = new Set();
      filter.skills.map((type) => {
        switch (type) {
          case 'python':
            data.forEach((alumni) => { [...alumni.skills].includes('python') && skillsSet.add(alumni) });
            break;
          case 'sql':
            data.forEach((alumni) => { [...alumni.skills].includes('sql') && skillsSet.add(alumni) });
            break;
          case 'excel':
            data.forEach((alumni) => { [...alumni.skills].includes('excel') && skillsSet.add(alumni) });
            break;
          case 'scripting':
            data.forEach((alumni) => { [...alumni.skills].includes('scripting') && skillsSet.add(alumni) });
            break;
          case 'dataAnalysis':
            data.forEach((alumni) => { [...alumni.skills].includes('dataAnalysis') && skillsSet.add(alumni) });
            break;
        };
      })
      data = skillsSet
    }

    const sorted = [...data];
    switch (filter.sort) {
      case ('high'):
        sorted.sort((a, b) => b.projects - a.projects);
        break;
      case ('low'):
        sorted.sort((a, b) => a.projects - b.projects);
        break;
      case ('members'):
        sorted.sort((a, b) => b.members - a.members);
        break;
      default:
        sorted.sort((a, b) => b.posts - a.posts);
    }
    setAlumni(sorted);
  }, [filter]);

  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * 6;
  const endIndex = startIndex + 6;
  const currentPageItems = alumni.slice(startIndex, endIndex);

  return (
    <Box sx={{ display: 'flex' }}>
      <ProductFilterDrawer
        filter={filter}
        setFilter={setFilter}
        openFilterDrawer={openFilterDrawer}
        handleDrawerOpen={handleDrawerOpen}
        initialState={initialState}
      />
      <Main theme={theme} open={openFilterDrawer}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <ProductsHeader filter={filter} handleDrawerOpen={handleDrawerOpen} setFilter={setFilter} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {currentPageItems.map((alum) =>
                <Grid item xs={12} sm={6} md={4}>
                  <MultiActionAreaCard alumni={alum} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
          }}
        >
          <Pagination
            count={4}
            shape="rounded"
            size='large'
            onChange={(_, value) => { setPage(value) }}
          />
        </Grid>
      </Main>
    </Box>
  );
};

export default ProductsPage;
