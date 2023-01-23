import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from "./components/Mainheader/MainHeader";


function App() {
  return (
    <div>
      <MainHeader/>
      {/* Switch 는 위에서 아래로 path를 훑을 때 첫번째로 match되는 path를 반환한다. 
      Switch를 넣지 않으면 해당하는 모든 Route가 반환된다. */}
      <Switch>
        <Route path='/' exact>
          {/* 말그대로 redirect. */}
          <Redirect to='/welcome'/>
        </Route>
        <Route path='/welcome'>
          <Welcome/>
        </Route>
        {/* exact를 넣으면 정확히 해당 path와 일치할 때 rendering 한다. 
        만약 exact가 없다면 사용자의 url이 https://localhost:3000/product 라면 ~/products, ~/products/1, ~/products/2 .... 다 렌더링 된다. */}
        <Route path='/products' exact>
          <Products/>
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
