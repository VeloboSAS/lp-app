
import React from 'react';
import { SOCIALS } from '../../utils/constans';
import Icon from '../Icon/Icon';


const Socials = () => (
    <ul className="socials">
        {SOCIALS.map(({icon, link}) =>
        <li title="icon" className="socials-item" key={icon}>
            <a href={link} target='_blanc'>
                <Icon name={icon}/>
            </a>
        </li>
        )}
    </ul>
)
 
export default Socials;