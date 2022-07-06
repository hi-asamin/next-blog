import { createSlice } from '@reduxjs/toolkit';

import { reducers } from '@/src/store/reducers/dummy';
import { initialState } from '@/src/store/states/dummy';

export const DummySlice = createSlice({
  name: 'ui/dummy',
  initialState,
  reducers,
});
