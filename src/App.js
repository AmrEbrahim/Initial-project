import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.scss';

function App() {
  return (
    <div data-theme="dark-theme" className={style.appContainer}>
      <Home />
    </div>
  );
}

export default App;
