import useLocalStorage from '../../hooks/useLocalStorage'
import './styles.css';

function LightDarkMode(){
    //     value, setValue
    const [theme, setTheme] = useLocalStorage("theme", "light");

    console.log("Came after visiting useLocalStorage");

    function handleTheme(){
        console.log("handleTheme called");
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return(
        <div className='light-dark-mode' data-theme={theme}>
            <div className="container">
                <p>Hello World</p>
                <button onClick={handleTheme}>Change Theme</button>
                {console.log("Last line of JSX")}
            </div>
        </div>
    )
}

export default LightDarkMode;