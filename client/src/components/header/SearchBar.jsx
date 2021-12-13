import { makeStyles, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
const useStyle = makeStyles((theme) =>({
    search: {
        border: 2,
        borderRadius: 2,
        marginLeft: 10,
        width: '40%',
        backgroundColor: '#fff',
        display: 'flex'
      },
    searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'white',
        backgroundColor: 'black'
      },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
    inputInput: {
        paddingLeft: 20,
        width: '80%',
    }
}));


const SearchBar = () =>{
    const classes = useStyle();
    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Find Cars, Mobile Phones and more..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
        </div>
    );
}

export default SearchBar;