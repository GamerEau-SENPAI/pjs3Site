import React, { useState } from "react";
import './BG.css';


export default class BackGround extends React.Component{
    render(){

        return <div className = "body">
            <div className = "bg">
                <div className = "Groupe_btn">
                    <div className="gp_left">
                                <a class="btn btn-primary btn-lg btn-block" href="#Letruc1" role="button">Link</a>
                                <div className = "Groupe_btn_vert">
                                    <a class="btn btn-success btn-lg btn-block" href="#Letruc1" role="button">Link</a>
                                </div>
                                    <a class="btn btn-primary btn-lg btn-block" href="#Letruc1" role="button">Link</a>
                    </div>
                    <div className="gp_right">
                                <div className = "Groupe_btn_vert">
                                    <a class="btn btn-success btn-lg btn-block" href="#Letruc1" role="button">Link</a>
                                </div>
                                <a class="btn btn-primary btn-lg btn-block" href="#Letruc1" role="button">Link</a>
                                <div className = "Groupe_btn_vert">
                                    <a class="btn btn-success btn-lg btn-block" href="#Letruc1" role="button">Link</a>
                                </div>
                    </div>
                        
                </div>

            </div>
            
        </div>
    };
}