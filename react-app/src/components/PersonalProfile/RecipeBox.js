import React, { useState } from 'react'
import HitList from './Tabs/HitList'
import Attempted from './Tabs/Attempted'
import InProgress from './Tabs/InProgress'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './recipe.css'

// https://codepen.io/Lakston/pen/QKqpLz

function Box(props) {
    const [tabIndex, setTabIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <>
            <div className="daBox">

                {/* <div className="tabs" >
                    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                        <TabList>
                            <Tab className="FavoriteTab">Hit List (Favs)</Tab>
                            <Tab className="PastAttemptsTab">Attempted</Tab>
                            <Tab className="WantToTryTab">In Progress</Tab>
                        </TabList>
                        <TabPanel className="hit"><HitList /></TabPanel>
                        <TabPanel className="attempt"><Attempted /></TabPanel>
                        <TabPanel className="progress"><InProgress /></TabPanel>
                    </Tabs>
                </div > */}


                <div className="panel panel-default" id={props.id}>
                    <div className="panel-heading" role="tab">
                        <h4 className="panel-title text-left">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href={'#' + props.nospace(props.name)}>
                                {props.name}
                            </a>
                        </h4>
                    </div>
                    <div id={props.nospace(props.name)} className="panel-collapse collapse" role="tabpanel">
                        <div className="panel-body">
                            <ul className='list-group'>
                                {props.ingredients.map((ingredient, i) => <li className='list-group-item text-left' key={i}>{ingredient}</li>)}
                            </ul>
                        </div>
                        <div className='panel-footer buttons'>
                            <button data-toggle="modal" data-target={"#modal" + props.nospace(props.name)} type='button' className='btn btn-success'>Edit</button>
                            <button type='button' className='btn btn-danger' onClick={props.delete} >Delete</button>
                        </div>
                    </div>

                    <div id={'modal' + props.nospace(props.name)} className='modal fade' role='dialog'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>

                                </div>

                                <div className='modal-content'>
                                    <label htmlFor='editName'>Recipe</label>
                                    <input type='text' className={`form-control ${props.name}`} id={`name${props.id}`} defaultValue={props.name} ></input>
                                    <label htmlFor='editIngredients'>Ingredients</label>
                                    <textarea className='form-control' id={`ingr${props.id}`} defaultValue={props.ingredients}></textarea>
                                </div>

                                <div className='modal-footer buttons'>
                                    <button type='button' className='btn btn-primary' data-dismiss="modal" onClick={props.editRecipe}>Save</button>
                                    <button type='button' className='btn btn-default' data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Box