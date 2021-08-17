import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slideState$ } from 'redux/selectors';
import * as actions from '../../redux/actions'

function DataSlide(props) {
    return (
        <div className={`carousel-item ${props.active}`}>
            <img className="d-block w-100" style={{ height: '240px' }} src={props.img} alt="img slide" />
        </div>
    )
}

function Slide() {
    const slide = useSelector(slideState$)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getDataSlide.getSlideRequest())
    }, [dispatch])

    return (
        <div className="slide row">
            {/*Carousel Wrapper*/}
            <div id="carousel-example-1z" className="carousel slide carousel-fade col-md-8 pr-0" data-ride="carousel">
                {/*Indicators*/}
                <ol className="carousel-indicators control">
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={1} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={2} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={3} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={4} />
                    <li style={{ width: '10px', height: '10px', borderRadius: '50%' }} data-target="#carousel-example-1z" data-slide-to={5} />
                </ol>

                {/*Slides*/}
                <div className="list_slide carousel-inner" role="listbox">
                    {
                        slide.map(data => (
                            <DataSlide key={data.id} img={data.img} active={data.active} />
                        ))
                    }
                </div>
                {/*Controls*/}
                <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev" style={{ left: '15px', width: '4%', top: '100px', opacity: '0.2', height: '40px' }}>
                    <img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" alt="" style={{ transform: 'rotate(180deg)' }} />
                </a>
                <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next" style={{ right: '0px', width: '4%', top: '100px', opacity: '0.2', height: '40px' }}>
                    <img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" alt="" />
                </a>

            </div>

            <div className="col-md-4 pl-2 baner">
                <a href="http://">
                    <img src="https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png" alt="" style={{ height: '240px' }} />
                </a>
            </div>
        </div>
    );
}

export default Slide;
