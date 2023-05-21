import { ProvideService } from './service-provider';
import { ProvideContact } from './contact-provider';
import { ProvideAuth } from './auth-provider';

function Providers({ children }) {
  return (
    <ProvideAuth>
      <ProvideService>
        <ProvideContact>{children}</ProvideContact>
      </ProvideService>
    </ProvideAuth>
  );
}

export default Providers;
