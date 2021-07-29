import React, { Component } from 'react';
// import axios from 'axios';
class Slide extends Component {
    render() {
        return (
            <div className="slide row">
                {/*Carousel Wrapper*/}
                <div id="carousel-example-1z" className="carousel slide carousel-fade col-md-8 pr-0" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators control">
                        <li style={{width: '10px', height: '10px', borderRadius: '50%'}} data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                        <li style={{width: '10px', height: '10px', borderRadius: '50%'}} data-target="#carousel-example-1z" data-slide-to={1} />
                        <li style={{width: '10px', height: '10px', borderRadius: '50%'}} data-target="#carousel-example-1z" data-slide-to={2} />
                    </ol>

                    {/*Slides*/}
                    <div className="list_slide carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block w-100" style={{height: '240px'}} src="https://salt.tikicdn.com/cache/w824/ts/banner/53/f6/0a/51962a6a40702cd6b73af5b1c5931c00.png.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{height: '240px'}} src="https://salt.tikicdn.com/cache/w824/ts/banner/90/80/ae/55fe5c9ec7125f0a3ec91e7c405c4854.png.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{height: '240px'}} src="https://salt.tikicdn.com/cache/w824/ts/banner/1d/a7/c4/d803875892c793f6c879bd1d0486e419.png.jpg" alt="Third slide" />
                        </div>             
                    </div>

                    {/*Controls*/}
                    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev" style={{left: '15px', background: '#c7c7c7', borderBottomRightRadius: '5px', borderTopRightRadius: '5px', width: '4%', top: '100px', height: '40px'}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next" style={{right: '0px', background: '#c7c7c7', borderBottomLeftRadius: '5px', borderTopLeftRadius: '5px', width: '4%', top: '100px', height: '40px'}}>
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>

                </div>

                <div className="col-md-4 pl-2 banner">
                    <a href="http://">
                        <img src="https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png" alt="" style={{height: '240px'}} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Slide;