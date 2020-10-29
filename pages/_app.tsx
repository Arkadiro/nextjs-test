import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/store';
import { AppProps } from 'next/app';


const MyApp: FC<AppProps> = ({ Component, pageProps}) => {
  return (<>
      <head>
        <title>My app</title>
      </head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>)
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
