import { createContext, useState } from "react";
import runMain from "../config/echomini";

export const Context= createContext();

const ContextProvider=(props)=>{

    const [input, setInput] = useState("");
    const [recentPrompt,setRecentPrompt]= useState("");
    const[prevprompts,setPrevPrompts]= useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const[resultData,setResultData]= useState("");

    const delayPara= (index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        },75*index)
    }

    const newchat=()=>{
        setShowResult(false);
        setLoading(false);
    }

    const onSent= async(prompt)=>{
        setResultData("")
        // setRecentPrompt(input)
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt!==undefined)
        {
            setRecentPrompt(prompt);
            response= await runMain(prompt);

        }
        else{
            setRecentPrompt(input);
            setPrevPrompts(prev=>[...prev, input]);
            response= await runMain(input);
        }

        
    //    const response= await runMain(input);
       let responseArray=response.split("**");
       let newResponse="";
       for(let i=0;i<responseArray.length;i++)
       {
         if(i%2===0)
          {
              newResponse+=responseArray[i];
          }
          else{
            newResponse+="<b>"+responseArray[i]+"</b>";
          }
       }
       let newResponse2=newResponse.split("*").join("<br>");
    //    setResultData(newResponse2);
    let newResArr=newResponse2.split(" ");
    for(let i=0; i<newResArr.length;i++)
    {
        const nextWord=newResArr[i];
        delayPara(i,nextWord+" ")
    }
       setLoading(false);
       setInput("");
   
    }

    // onSent("What is contextAPI in few words?");

    const contextValue={
        prevprompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newchat
    }

    return(
        <Context.Provider value={contextValue}> 
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;