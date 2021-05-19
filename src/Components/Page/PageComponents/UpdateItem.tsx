import {useState,useEffect,useMemo} from 'react'
import {useHistory} from 'react-router-dom'
// import Products from 'Modals/Modals'
import Input from 'Components/Page/Input'
interface props{
    id:string,
    shop:Array<any>,
    handleShop:Function
}
export default function UpdateItem({id,shop,handleShop}:props) {
   
   const history=useHistory()
   const [valid,setValid]=useState(false)
   const item=useMemo(()=>{
      
    const data=shop.find((e:any)=>e.SKU===id)
    if(data){
        return data
    }
    else{
        setValid(true)
        return {}
    }
   },[id,shop])
   useEffect(()=>{
       if(valid){
           history.push('/')
       }
   })
    
    if(item.name){
        return (
            <div>
                <Input key={'item-update'} shop={item} loadProps={true} handleShop={handleShop}/>
            </div>
        )
    }
    return <h1>Loading...</h1>
}
