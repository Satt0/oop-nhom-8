import Home from 'Components/Page/Home'
import Input from 'Components/Page/Input'
import Update from 'Components/Page/Update'
const link = [
    {
      name: "Trang chủ",
      path: "/",
    },
    
    {
      name: "Tìm kiếm & cập nhật",
      path: "/update",
    },
    
    {
      name:'Nhập liệu',
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