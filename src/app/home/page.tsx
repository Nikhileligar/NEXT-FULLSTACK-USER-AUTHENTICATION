import axios from 'axios';
import '../css/signup.css'
const HomePage = (props: any) => {
    const name = props;
    console.log(props)
    return(
        <div className="flex">
            <div className="ux-home-container">
                <div className="center-container">
                    <h1>welcome {name}</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;