import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const[extended,setExtended]=useState(false);
    const{onSent,prevprompts,setRecentPrompt,newchat}=useContext(Context);

    const loadPrompt= async(prompt)=>{
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

  return (
    <div className='sidebar'>
        <div className='top'>
                <img onClick={()=>{setExtended(!extended)}} className='menu' src={assets.menu_icon} />
           
            <div onClick={()=>newchat()} className='new-chat'>
                <img className='plus-icon' src={assets.plus_icon}/>
                {extended?<p>New Chat</p> :null} 
            </div>
            {extended? <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevprompts.map((item)=>{
                    return(
                    <div onClick={()=> loadPrompt(item)} className='recent-entry'>
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,18)}...</p>
                    </div>
                    )
                })}
            </div> :null} 
            
        </div>
        
        <div className='bottom'>
               <div className='bottom-item recent-entry'>
                   <img src={assets.question_icon}/>
                    {extended?<p>Help</p> :null}
               </div>
               <div className='bottom-item recent-entry'>
                   <img src={assets.history_icon}/>
                   {extended?<p>History</p> :null}
                </div>
               <div className='bottom-item recent-entry'>
                   <img src={assets.setting_icon}/>
                   {extended?<p>Setting</p> :null}
               </div>
        </div>
    </div>
  )
}

export default Sidebar