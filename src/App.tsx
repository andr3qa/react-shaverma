import { Header } from '@/components';
import { Home } from './pages/Home';
import './styles/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
