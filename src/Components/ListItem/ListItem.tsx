import React from "react"
import Item from 'Components/Item/Item'
interface props{
    count:number,
    items:Array<Object>,
    handleDelete:Function
}
const ListItem=({items,count,handleDelete}:props)=>{


    return <div style={{maxHeight:'100vh',overflow:'auto'}}>
    {[...items].reverse().slice(0,Math.min(count,10)).map((e:any,i:number)=><Item onDelete={handleDelete} data={e} key={"list-top-10 "+i}/>)}
    </div>
}

export default ListItem