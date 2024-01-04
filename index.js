import  ReactDOM  from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { Provider } from "react-redux";
import storeValt from "./utils/cardStore";
import Notes from "./src/Notes";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
const AppLayout=()=>{
   return (
    <div> 
     <Provider store={storeValt}>
            <Header/>
            <Outlet/>
     </Provider>
            
    </div>

   )
}
const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
    //   errorElement:<Error/>,
      children:[ 
      {
          path:"/",
          element :<Body/>,
         
      },
      {
        path:"/Notes",
        element :<Notes/>,
       
      }  ]
    } 
  
  ])
 
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
