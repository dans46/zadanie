import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UploadImage from '../components/UploadImage'

import './Arch.scss'

import back from '../img/back.svg'
import addPhotos from '../img/add_photos.svg'

function show(){
         var element = document.getElementById("upload-alert");
        if (element !== null)
        element.classList.remove("hidden");
    }


class Architecture extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []   
        }
    }

    componentDidMount() {  
    fetch('https://crudpi.io/e2e0e0/images')
    .then(res => res.json())
    .then(json => {
      this.setState({
        items:json,
      })
    });  
    }

    render() {
        var { items } = this.state;

        return (
        <div>
            <div className="bg-img2"></div>
            <div className="container-xl">
                <div className="desc">
                    <h1>Fotogaléria</h1>
                    <Link to="/"> <img src={back}/> </Link>   
                    <p className="inline">Architektúra</p>
                </div>
            
                <div className="row text-center">
                    {items.map(item=>(
                        <div  key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" id="arch">
                                {item.image && (
                                    <img className="card-img" src={item.image} />
                                )}
                            </div>
                        </div>            
                    ))} 
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" onClick={show}> 
                            <div className="add">
                                <img src={addPhotos}/> 
                                <p>Pridať fotky</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">webdesign bart.sk</p> 
            </div>
            <div className="hidden" id="upload-alert">
                <UploadImage> </UploadImage>  
            </div>
        </div>    
        ); 
    }
}

export default Architecture