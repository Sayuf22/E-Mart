import { makeStyles, fade, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
const useStyle = makeStyles((theme) =>({
    search: {
        border: 2,
        borderRadius: 2,
        marginLeft: 10,
        width: '15%',
        backgroundColor: '#fff',
        display: 'flex'
      },
    searchIcon: {
        marginLeft: 'auto',
        padding: 2,
        display: 'flex',
        color: 'black',
      },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
    inputInput: {
        paddingLeft: 5,
        width: '80%',
    },
    active:{
        borderColor: 'blue'
    }
}));


const LocationBar = () =>{
    const classes = useStyle();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Location"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}

export default LocationBar;