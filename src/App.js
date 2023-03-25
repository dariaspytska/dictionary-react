
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div classNAme="container">
        <header className="App-header text-center">DICTIONARY</header>
        <main className="text-center">
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>Coded by Daria Spytska</small>
        </footer>
      </div>
    </div>
  );
}

