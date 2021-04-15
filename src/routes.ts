import Home from 'Components/Page/Home'
import Input from 'Components/Page/Input'
import Update from 'Components/Page/Update'
const link = [
    {
      name: "Home",
      path: "/",
    },
    
    {
      name: "search & Update",
      path: "/update",
    },
    
    {
      name:'Input',
      path:'/input'
    }
  ];
const path =[
    
    {
        path:'/input',
        Component:Input
    },
   
    {
      path:'/update',
      Component:Update
    } ,{
      path:'/',
      Component:Home
  }
]
const route={
  path,link
}
export default route