import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ()=> {
    return (
        <div style={{padding: '50px'}}>
            <Grid container direction="row"  justify="center"  alignItems="center">
                <Grid item xs={2}>
                    <Grid container  direction="row"  justify="space-between"  alignItems="center">
                        <FontAwesomeIcon icon={['fab', 'spotify']} size="lg"/>
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/>
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/>
                        <FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/>
                        <FontAwesomeIcon icon={['fab', 'snapchat']} size="lg"/>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/>
                    </Grid>   
                </Grid>
            </Grid>
            <Grid container direction="row"  justify="center"  alignItems="center">
                <p>&copy; 2021 VivekRevives</p>
            </Grid>
            
        </div>
    )
}

export default Footer;