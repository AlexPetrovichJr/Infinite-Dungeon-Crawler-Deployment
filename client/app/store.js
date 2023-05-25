import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import roleSelectReducer from "../features/role/roleSlice";
import authReducer from "../features/auth/authSlice";
import settingSelectReducer from "../features/settings/settingSelectSlice";
import messageHistoryReducer from "../features/chat/ChatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    roleSelect: roleSelectReducer,
    settingSelect: settingSelectReducer,
    messageHistory: messageHistoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
