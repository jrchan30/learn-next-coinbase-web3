import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const supportedChainIds: number[] = [4];
const connectors: {
  injected: object;
} = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
