import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ()=> {
    return(
        <>
           <AppBar position="static" color="secondary">
                <Toolbar variant="dense">
                    <Grid container spacing={4}>
                        <Grid item  sm={4}>
                            <Grid container  direction="row"  justify="space-evenly"  alignItems="center">
                                <Typography variant="h6" color="inherit">
                                    About
                                </Typography>
                                <Typography variant="h6" color="inherit">
                                    Albums
                                </Typography>
                                <Typography variant="h6" color="inherit">
                                    News 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} >
                            <Grid container direction="row" justify="center">
                            <Typography variant="h6" color="inherit">VivekRevives</Typography>
                            </Grid>
                            
                        </Grid>
                        <Grid item sm={4}>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item sm={5}>
                                    <Grid container direction="row"  justify="space-between"  alignItems="center">
                                        <FontAwesomeIcon icon={['fab', 'spotify']} size="lg"/>
                                        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/>
                                        <FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/>
                                        <FontAwesomeIcon icon={['fab', 'snapchat']} size="lg"/>
                                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/>
                                    </Grid>
                                </Grid>
                            </Grid>   
                        </Grid>
                    </Grid>
          
          
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;