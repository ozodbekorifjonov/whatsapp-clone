import { useRouteError } from 'react-router-dom';
import CenterBox from '../UI/CenterBox';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <CenterBox>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </CenterBox>
  );
}
