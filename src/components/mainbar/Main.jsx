import React, {useContext} from 'react'
import './Main.css'
import {assets} from '../../../assets/assets'
import { Context } from '../../context/Context';

function Main() {
 
    const {onSent,recentPrompt,showResult,loading,resultData,input,setInput}= useContext(Context);



  return (
    <div className='main'>
        <div className='nav'>
            <p>EchoMini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        {!showResult? <>
            <div className='main-container'>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help today?</p>
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Generate a code to create tic-tac-toe game</p>
                <img src={assets.code_icon} alt="" />
            </div>

            <div className="card">
                <p>Generate an invitation message of my B'day party for my loved ones </p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>Suggest an Idea for my upcoming Summer project</p>
                <img src={assets.bulb_icon} alt="" />
            </div>

        </div>
        </> : <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>

             <div className='result-data'>
                <img src={assets.gemini_icon} alt="" />
                {loading? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                
             </div>
            </div>}

        

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here.' />

              <div className='bottom-icons'>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input?<img onClick={()=>onSent()}  src={assets.send_icon} alt="" />:null}
              </div>
            </div>
            <p className='bottom-info'>EchoMini may display inaccurate info, including about people, so double-check its responses,gemini is its parent model. Your privacy and Gemini Apps</p>
        </div>
    </div>
  )
}

export default Main