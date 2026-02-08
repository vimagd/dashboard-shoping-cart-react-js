import React from "react";
import "./ProductCaution.scss";
import sweatWickImg from "../../../assets/sweatWick.png";
import featherImg from "../../../assets/feather.png";
import breathableImg from "../../../assets/breathable.png";
import materialsImg from "../../../assets/materials.png";

const ProductCaution = () => {
    return (<>
        <div className="caution-main">
            <div className="caution-title">
                Details
            </div>
            <div className="caution-sweat-wick">
                <img src={sweatWickImg} className="caution-sweat-wick-icon" alt="caution-sweat-wick-icon" />
                <div className="caution-sweat-wick-text">Sweat-wicking</div>
            </div>
            <div className="caution-feather">
                <img src={featherImg} className="caution-feather-icon" alt="caution-feather-icon" />
                <div className="caution-feather-text">Lightweight fabric</div>
            </div>
            <div className="caution-breathable">
                <img src={breathableImg} className="caution-breathable-icon" alt="caution-breathable-icon" />
                <div className="caution-breathable-text">Breathable</div>
            </div>
            <div className="caution-material">
                <img src={materialsImg} className="caution-material-icon" alt="caution-material-icon" />
                <div className="caution-material-text">69% nylon, 31% lycra</div>
            </div>
        </div>
    </>)
}

export default ProductCaution