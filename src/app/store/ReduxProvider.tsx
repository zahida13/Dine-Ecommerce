'use client'
import React from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "@/app/store/store";
import {PersistGate} from "redux-persist/integration/react";

function ReduxProvider({
                         children,
                       }: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
