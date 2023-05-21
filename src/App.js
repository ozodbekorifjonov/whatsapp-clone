import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './UI/GlobalStyle';
import { router } from './router';

function App() {
  return (
    <>
      <GlobalStyle />
      {/*<ReceiveNotifications /> 
      Error: module not found: error: can't resolve 'fs' 
      Info: Because of react scripts version, I am facing this issue. I tried to fix the error. 
      However, since @green-api/whatsapp-api-client is a package, an update is expected. */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
