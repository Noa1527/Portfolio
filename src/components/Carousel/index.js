import React from 'react';
import './index.scss';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Carousel = (props) => {
    return (
        <div className='carousel'>
            <div
                className='carousel-inner'
                style={{ backgroundImage: `url(${props.images})` }}
            >
                <div className="left" onClick={() => {
                    props.currImg > 0 && props.setCurrImg(props.currImg - 1)
                }}
                >
                    <BiLeftArrow />
                </div>
                <div className="center"></div>
                <div className="right" onClick={() => {

                    props.currImg < props.imagesSize.length - 1 && props.setCurrImg(props.currImg + 1)
                }}
                >
                    <BiRightArrow />
                </div>
            </div>
        </div>
    );
};

export default Carousel;