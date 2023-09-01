import classes from './Search.module.css';
import cn from 'classnames';

function Search(props) {
    const {
        value,
        onChange,
        children = 'Search',
        placeholder = 'search...'
    } = props;

    const inputClassName = cn({
        [classes.input]: true,
        [classes.filled]: value.length
    })

    return (  
        <label className={classes.label} style={{display: "flex"}}>
            {children}
            <input 
                className={inputClassName}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    );
}

export default Search;
