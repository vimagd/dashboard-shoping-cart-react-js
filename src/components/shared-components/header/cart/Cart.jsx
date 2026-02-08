import React from "react";
import cartSVG from '../../../../assets/svg/shopping-bag.svg';
import { useNavigate } from "react-router-dom";

const Cart = () => {

    let navigate = useNavigate();

    return (<>
        <img src={cartSVG} className='icon-cart' alt="Icon cart" onClick={() => navigate("/cart")} />
    </>)

}

export default Cart