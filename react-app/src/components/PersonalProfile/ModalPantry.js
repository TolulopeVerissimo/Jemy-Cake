import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './style/ModalRecipe.css'
import './style/addplus.scss'
import './style/ModalPantry.css'
import { deletePantry } from '../../Store/pantry'
import EditPantry from './EditPantry'

export default function ModalPantry({ pantry, pantryName, ingredient, pantryId }) {

    const dispatch = useDispatch();
    const removePantry = async (e) => {
        await dispatch(deletePantry(pantryId));
    };
    return (
        <>
            <div className="hoverPantryItem">
                <div className="modPantryContainer">

                    <EditPantry pantryId={pantryId} pantryName={pantryName} pantry={pantry} />
                    <div className="exit" onClick={removePantry}>
                        <span class="left">
                            <span class="circle-left"></span>
                            <span class="circle-right"></span>
                        </span>
                        <span class="right">
                            <span class="circle-left"></span>
                            <span class="circle-right"></span>
                        </span>
                        <h4 style={{ position: 'absolute', margin: "10.3rem 0 0 0" }}>REMOVE</h4>
                    </div>
                </div>
            </div>
        </>
    );

}
