import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTourItems } from '../../reducers/tourReducer';
import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';


const TourItems = () => {
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(getTourItems)
    }, [dispatch])
    return (

        <Section className='tour'>
            <div className="container">
                <SectionTitle text="Концерты" />
            </div>

        </Section>)
}


export default TourItems;