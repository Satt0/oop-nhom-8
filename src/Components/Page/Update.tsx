// Hoàng Minh Tân 20194367
import {Switch,Route} from 'react-router-dom'


import UpdateBrowse from './PageComponents/UpdateBrowse'
import UpdateItem from './PageComponents/UpdateItem'
export default function Update({shop,handleShop}:any) {
   
    return (
        <div>
            <Switch>

                <Route exact path='/update/:id' component={(props:any)=>(<UpdateItem id={props.match.params.id} shop={shop} handleShop={handleShop}/>)}> 

                </Route>
                <Route exact path="/update">
                    <UpdateBrowse handleShop={handleShop} shop={shop}/>
                </Route>
            </Switch>
        </div>
    )
}
