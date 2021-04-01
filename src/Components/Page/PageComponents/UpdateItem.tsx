import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Products from 'Modals/Modals'
import Input from 'Components/Page/Input'
interface props{
    id:string,
    shop:Array<any>,
    handleShop:Function
}
export default function UpdateItem({id,shop,handleShop}:props) {
    const [item,setItem]=useState(()=>{
        
        return {}
    })
   const history=useHistory()
   useEffect(()=>{
       let result=false;
        if(shop?.length){
            const found=shop.find((e:any)=>e.SKU===id)
            if(found)
            {
                setItem(found)
                result=true;
                
            }
        }
        if(result===false){
                history.push('/')
        }   

   },[shop,id])
    
    return (
        <div>
            <Input shop={item} loadProps={true} handleShop={handleShop}/>
        </div>
    )
}
