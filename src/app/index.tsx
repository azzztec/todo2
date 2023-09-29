import { Provider } from 'react-redux';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';
import store from './store';
import './styles/index.scss';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
