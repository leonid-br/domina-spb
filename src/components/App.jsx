import Header from './Header';
import Navigation from './Navigation';
import s from './App.module.css';

function App() {
    return (
        <div className={s.app}>
            <Header />
            <Navigation />
            <h1 className={s.title}>hello</h1>
        </div>
    );
}

export default App;
