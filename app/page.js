"use client"
import React, { useState } from 'react'
import bg from './Components/bg';
bg


const page = () => {
  <bg />
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask , {task , description }]);
    setTask("");
    setDescription("");
    console.log(mainTask);

    
    }
    const deleteHandler = (i) =>{
      let copytask = [...mainTask]
      copytask.splice(i,1)
      setMainTask(copytask)
    

  };
  let renderTask = <h2>no task here</h2>;

 if(mainTask.length > 0){
  renderTask = mainTask.map((t, i) =>{
    return (
     <li key={i} className='flex items-center justify-between m-8'>
       <div className='flex justify-between  items-center gap-20 mb-5'>
      <h5 className='text-2xl font-semibold'>{t.task}</h5>
      <h6 className='text-xl font-semibold'>{t.description}</h6>

    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    
    className='bg-red-400 text-white px-4 py-2 rounded '>delete</button>
     </li>

    );
  });
 }


  return (
    <>
    <h1 className='bg-zinc-800 text-white text-[5vw] text-center'>my todo list</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className=" type-text m-5  px-3 py-3 border-zinc-800 border-2 " placeholder='Enter Your Task Here'
       value={task}
       onChange={(e)=>{
        setTask(e.target.value)
       }
      }
       />
      <input type='text' className=" type-text m-5  px-3 py-3 border-zinc-800 border-2 " placeholder='Enter Description' 
      value={description}
      onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
      <button className='bg-zinc-500 text-white px-4 py-2 rounded'>submit</button>


    </form>
    <hr />
    <div className='p-8 bg-slate-200' > 
    <ul>{renderTask}</ul>
    </div>
    
    </>
  );
};

export default page