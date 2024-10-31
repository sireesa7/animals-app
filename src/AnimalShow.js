import {useState} from 'react';
import cat from './svg/cat.svg';
import bird from './svg/bird.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import './AnimalShow.css';

const svgMap = {cat, bird, cow, dog, gator, horse}
export default function AnimalShow({type})
{
    const[clicks, setClicks] = useState(0)
    function handleClick()
    {
        setClicks(clicks+1)
    }
    return(
        <div onClick={handleClick}>
            <img alt="animal" src={svgMap[type]} style= {{width: 120 + 'px'}}/>
            <img src={heart} alt="heart shape"
                style= {{width: 10 + 10 * clicks + 'px'}}/>
        </div>
    )
}  