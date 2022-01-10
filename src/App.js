import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TranscationList from './components/TranscationList';
import AddTranscation from './components/AddTranscation';
import GlobalProvider from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpense />
          <TranscationList />
          <AddTranscation />
      </div>
    </GlobalProvider>
  );
}

export default App;
