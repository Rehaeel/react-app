import React from 'react'
import { PartnerList } from './partner-list';
import './partners.css';
import Image from 'next/image';
import { Link } from 'react-router-dom';


export default class partners extends React.Component {
    render() {
        return (
            <div className="partners">
                {PartnerList.map(partner =>
                    <a key={partner.id} href={partner.link} target="_blank" rel="noreferrer" > <img className="partner" src={partner.img} alt='Prokopiak Visuals partner' /></a>
                )
                }
            </div>
        )
    }
}
