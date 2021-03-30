import React from "react"
import Nav from 'Components/Nav/Nav'
import {makeStyles,Theme} from '@material-ui/core'
const useStyles=makeStyles((theme:Theme)=>({
    main:{

    }
}))
const Layout:React.FC=({children})=>{
    const styles=useStyles()
return (
    <div className={styles.main}>
    <Nav/>
    {children}
   
    </div>
)
}

export default Layout