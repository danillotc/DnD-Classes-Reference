import React from 'react'
import './header.css'

export default () => {
    return (
        <div>
            <header className='title'>Dungeons and Dragons 5e Reference Website</header>
            <ul className='navbar'>
                <li>Classes</li>
                <li>Races</li>
                <li>Equipments</li>
                <li>Spells</li>
            </ul>
        </div>
    )
}