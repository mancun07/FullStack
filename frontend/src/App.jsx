import './App.css';
import NewsList from './pages/NewsList';
import Layout from './components/Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import NewsDetails from './pages/NewsDetails';


function App() {
  return (
        <Layout>
          <div className="container">
            <Routes>
                  <Route path="/" element={<Navigate to="/news" />} />
                  <Route path="/news" element={<NewsList />} />
                  <Route path={"/news/:id"} element={<NewsDetails />} />
            </Routes>      
          </div>  
        </Layout>
  );
}

export default App;

