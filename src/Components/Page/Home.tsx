import React from 'react'

const Home:React.FC=({shop}:any)=>{

    return <React.Fragment>
        {shop.map((e:any,i:number)=><li key={i}>{e.name} {e.category}</li>)}
    </React.Fragment>
}
export default Home