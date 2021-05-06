import styles from './style.module.scss'
import Item from 'Components/Item/Item'
interface props{
    count:number,
    items:Array<Object>,
    handleDelete:Function
}
const ListItem=({items,count,handleDelete}:props)=>{


    return <div className={styles.container} >
    {[...items].reverse().slice(0,Math.min(count,10)).map((e:any,i:number)=><Item onDelete={handleDelete} data={e} key={"list-top-10 "+i}/>)}
    </div>
}

export default ListItem