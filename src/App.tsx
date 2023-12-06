import React from 'react';

import UserCard from './components/UserCard';
export interface PendingId{
   id : number
  fields :{title : string ,value : string | number}[]
  idFront : string
  idBack : string
}

function App() {

  const pendingIds : PendingId[] =[{
    id : 1,
    fields :  [{
    title :'Name',
    value :'Samia'
  },
{
    title :'Job',
    value :'Career'
  },
{
    title :'Name',
    value :'Samia'
  },
{
    title :'Job',
    value :'Career'
  }],
  idFront :"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg",
  idBack:"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg"
  },
{
    id : 2,
    fields :  [{
    title :'Name',
    value :'Samia'
  },
{
    title :'Job',
    value :'Career'
  }],
  idFront :"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg",
  idBack:"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg"
  },
{
    id : 3,
    fields :  [{
    title :'Name',
    value :'Samia'
  },
{
    title :'Job',
    value :'Career'
  },
{
    title :'Name',
    value :'Samia'
  },
{
    title :'Job',
    value :'Career'
  }],
  idFront :"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg",
  idBack:"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg"
  },
{
    id : 4,
    fields :  [{
    title :'Name',
    value :'Samia'
  },
{
    title :'Job',
    value :'Career'
  }],
  idFront :"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg",
  idBack:"https://imgv3.fotor.com/images/blog-richtext-image/a-woman-in-black-suit.jpg"
  }]
  return (
  <>  <div className='header'><img src="images/logo.jpg" alt="" className='header__image' /></div>
  <div className='users__content'>
    {pendingIds.map((pendingId)=> <UserCard key={pendingId.id}  pendingId={pendingId}></UserCard>)}
  
  
  </div></>
  );
}

export default App;
