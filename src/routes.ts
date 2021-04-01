import Home from 'Components/Page/Home'
import Input from 'Components/Page/Input'
import Update from 'Components/Page/Update'
const link = [
    {
      name: "Home",
      path: "/",
    },
    // {
    //   name: "Search",
    //   path: "/search",
    // },
    {
      name: "search & Update",
      path: "/update",
    },
    // {
    //   name: "Delete",
    //   path: "/delete",
    // },
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
export default {
  path,link
}