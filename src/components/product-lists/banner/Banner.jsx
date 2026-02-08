import React from "react";
import "./Banner.scss";
import { useParams } from "react-router-dom";
import electronicsImg from "../../../assets/electronics.jpg";
import jeweleryImg from "../../../assets/jewelery.jpg";
import menImg from "../../../assets/men.jpg";
import womenImg from "../../../assets/women.jpg";
import AllImg from "../../../assets/all.jpg";

const Banner = () => {

    let { ele } = useParams(); //fetch current ele from path
    const caseCond = (catEle) => {

        //switch case for change of banner image and title on base of catagory select
        switch (catEle) {
            case 'All':
                return <div className="rear-image">
                    <img src={AllImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Shopping<br /> Online</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Women':
                return <div className="rear-image">
                    <img src={womenImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Women’s <br /> Outerwear</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Men':
                return <div className="rear-image">
                    <img src={menImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Men’s <br /> Outerwear</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Jewelery':
                return <div className="rear-image">
                    <img src={jeweleryImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Jewelery<br /> Ornaments</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Electronics':
                return <div className="rear-image">
                    <img src={electronicsImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Electronic<br /> Gadgets</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            default:
                return null;

        }
    }

    return (<>
        <section className="banner-section">
            {caseCond(ele)}
        </section>
    </>)

}

export default Banner