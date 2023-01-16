import React, { useState } from "react";

import Todo from "./components/Todo";
import AddTodoForm from "./components/AddTodoForm";
import emptyList from "./assets/emptyList.gif"

function App() {
  const [yapilacaklar, setYapilacaklar] = useState([])

  return (
    <div className="comtainer">
      <h1 className="my-5 text-center">ToDo App-1</h1>
      <AddTodoForm
        yapilacaklar={yapilacaklar}
        setYapilacaklar={setYapilacaklar}
      />
      {yapilacaklar.length === 0 ? (
        <div className="d-flex flex-column align-items-center">
          <img src={emptyList} />
          <p className="text-center"> You Have Nothing Todo</p>
        </div>
      ) : (
        <div className="container my-5">
          {yapilacaklar.map((item, index) => (
            <Todo 
            key={item.id} 
            item={item} 
            yapilacaklar={yapilacaklar} 
            setYapilacaklar={setYapilacaklar} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
