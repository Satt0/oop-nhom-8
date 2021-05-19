import Layout from 'Components/Layout/Layout'
import {useState} from 'react'
import Products from 'Modals/Modals'
import routes from 'routes'
import {Switch,Route} from 'react-router-dom'
import preload from 'Modals/preload'


const App:React.FC=()=> {

  // load preloaded products
  const [state,setState]=useState(()=>{
    const data:Array<Products>=[]
    console.log('====================================');
    console.log(preload);
    console.log('====================================');
    preload.forEach((e:any)=>{
      data.push(e)
    })

   
    return data
  })
  
  return (
    <>
     <Layout>
       <Switch>

      {
        routes.path.map(({path,Component}:any,i:number)=><Route  key={'routes'+i} path={path}><Component shop={state} handleShop={setState}/></Route>)
      }
       </Switch>
      
     </Layout>
    </>
  );
}

export default App;
