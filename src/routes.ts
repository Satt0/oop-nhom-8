import Home from 'Components/Page/Home'
import Input from 'Components/Page/Input'
const link = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Search",
      path: "/search",
    },
    {
      name: "Update",
      path: "/update",
    },
    {
      name: "Delete",
      path: "/delete",
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
        path:'/',
        Component:Home
    }
]
export default {
  path,link
}