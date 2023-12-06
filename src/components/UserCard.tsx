import React, { FC } from "react";

import {PendingId} from '../App'
interface PropsData {
  pendingId : PendingId
}
const UserCard  = ({pendingId } :  PropsData) => {
  const {  id ,fields ,idFront ,idBack } = pendingId
  function executeAction(userId : number, actionId: number) {
    console.log(userId, actionId);
   
  }


  return (
  
    <div className="card__container">
       <div className="card__images"> <div className="image__frame">
        <img src={idFront} alt=" front Id" className="image" /></div>
        <div className="image__frame">
          <img src={idBack} alt="back Id" className="image"  />
          </div> </div>
      <div className="card__info"> <div className="content" >
        {fields.map((field, index)=>{
        return <div className="content__data" key={`${field.title}/${field.value}/${index}`}>
          <span className="card__info__label"> {field.title} :  </span>
          <span> {field.value}</span>
        </div>
      })}</div>   <div className="card__footer">
        <button onClick={()=>executeAction(id, 1)} className="action-btn"> Approve</button>
        <button onClick={()=> executeAction(id, 0)} className="action-btn reject-btn"> Reject</button>
      
      
      </div></div>
     
         
     
    </div>
    
   
  );
};

export default UserCard;
