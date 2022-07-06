import { PayloadAction } from '@reduxjs/toolkit';

import { DummyState } from '@/src/store/states/dummy';

export const reducers = {
  updateDummyStateAction: (state: DummyState, action: PayloadAction<DummyState>) => ({
    ...state,
    name: action.payload.name,
  }),
  clearDummyStateAction: (state: DummyState): DummyState => ({
    ...state,
    name: '',
  }),
};
