import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Home(){

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/onchange")
    }

    return(
        <div className='home-contend'>
            <div className='leclerc'></div>
            <div className='content'>
                <h1 className='redferrari'>Charles Leclerc 16</h1>
                <button onClick={handleClick}>Join us</button>
                <p>joining us allow you to access our exclusive contend. Podcasts and technical upgrades would be shared with you</p>
            </div>
        </div>
    )
}