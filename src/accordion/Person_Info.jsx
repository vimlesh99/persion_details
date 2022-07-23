
import React, { useState, useEffect } from "react";
import "./person_Info.css";
import Person_comp from "./Person_comp";

const Person_Info = () => {
  const [myChunk, setMyChunk] = useState([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const res = await fetch("https://swapi.dev/api/people");
    const useData = await res.json();

    if (useData.results.length) {
      const chunkSize = 3;
      let chunk= [];
      for (let i = 0; i < useData.results.length; i += chunkSize) {
        chunk = [...chunk, useData.results.slice(i, i + chunkSize)];
      }
      console.log(chunk);
      setMyChunk(() => chunk);
    }
  };

  useEffect(() => {
    if(!Boolean(myChunk.length)) {
      console.log("run")
      getData();
    }
  }, []);



  const handlePage = (ind) => {
    setIndex(() => ind);
  };

  const decriment=(ind)=>{
           setIndex(()=>{
            if(ind===0){
              alert("there is no previous data")
              return ind 
              
            } else{
             return ind-1
            }
           }
           )
  }

  const increment=(ind)=>{
    setIndex(()=>{
     if(ind===myChunk.length-1){
       alert("there is no more data")
       return ind
       
       
     } else{
      return ind+1
     }
    }
    )
}
console.log(myChunk.length-1)

  return ( 
    myChunk.length ? <>
      {myChunk[index]?.map((elm, ind) => {
        return <Person_comp key={"a" + ind} myData={elm} />;
      })}
      <div className="footer">
      <button className='in-num'  onClick={decriment.bind(null,index)}>{"<"}</button>
        {myChunk?.map((data, index) => (
          <button
            key={"key" + index}
            className="in-num"
            onClick={handlePage.bind(null, index)}
            activeClass
          >
            {index + 1}
          </button>
        ))}
        <button className='in-num' onClick={increment.bind(null,index)}>{">"}</button>
        
      </div>
    </> : <div><h1>No data found</h1></div>
  );
};
export default Person_Info;
