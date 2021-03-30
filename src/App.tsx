import Layout from 'Components/Layout/Layout'
import {useState} from 'react'
import Products from 'Modals/Products'
const App:React.FC=()=> {
  const [state,setState]=useState(()=>{
    const data:Array<Products>=[]
    return data
  })
  
  return (
    <>
     <Layout>
      
      
     </Layout>
    </>
  );
}

export default App;
