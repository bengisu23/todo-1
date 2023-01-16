import React, { useState } from "react";

const AddTodoForm = ({yapilacaklar,setYapilacaklar}) => {

    const [yapilacakText, setYapilacakText] = useState("")

    const formuDenetle=(event)=>{
        event.preventDefault()
        if(yapilacakText ==="") {
            alert("Empty space")
            return
        }
        var textMevcutMu=false
        yapilacaklar.map(item=>{
          if(item.text.toLowerCase() === yapilacakText.toLowerCase()){
            textMevcutMu=true
          }
        })
        if(textMevcutMu === true){
          if(window.confirm("This already exist. Do you want to add?") === false){
            return
          }
        }
        const newTodo ={
            id:String(new Date().getTime()),
            text:yapilacakText,
            date:new Date(),
            yapildimi:false 
        }
        setYapilacaklar([...yapilacaklar,newTodo])
        setYapilacakText("")
    }
    

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={formuDenetle} className=" w-75">
                <div className="input-group mb-3">
                    <input 
                    type="text" 
                    class="form-control"
                    placeholder="Write What You Want To Add..."
                    value={yapilacakText}
                    onChange={(event)=>setYapilacakText(event.target.value)}
                    />
                    <button className="btn btn-danger" type="submit">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodoForm;