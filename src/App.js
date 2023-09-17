import './App.css';
import { QueryClientProvider,QueryClient } from 'react-query';
import { BrowserRouter as Router,Link, Route ,Routes } from 'react-router-dom';
import  { SuperHerosPage } from './components/SuperhHeros.page';
import Home from './components/Home.page';
import {RQSuperHeros} from './components/RQsuperHeros.page';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/super-heros'>
                Super Heros
              </Link>
            </li>
            <li>
              <Link to='/rq-super-heros'>
                Rq Super Heros
              </Link>
            </li>
          </ul>
        </nav>
       <Routes>
        <Route path='/super-heros' element={<SuperHerosPage/>}/>
        <Route path='/rq-super-heros' element={<RQSuperHeros/>}/>
        <Route path='/' element={<Home/>}/>
       </Routes>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
