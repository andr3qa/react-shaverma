import { Header } from '@/components';
import { Cart, Home, NotFound } from './pages';
import './styles/app.scss';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
