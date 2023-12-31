import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "@mr_TannerTube",
    fullName: "The TanerTube",
    avatar:
      "https://pbs.twimg.com/profile_images/1587169050345578496/-2e8bQkG_x96.png",
  },

  accounts: [
    {
      id: 1,
      username: "@mr_TannerTube",
      fullName: "The TanerTube",
      avatar:
        "https://pbs.twimg.com/profile_images/1587169050345578496/-2e8bQkG_x96.png",
    },
    {
      id: 2,
      username: "@ugurakcaydev",
      fullName: "Uğur AKÇAY",
      avatar:
        "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    },
    {
      id: 3,
      username: "@kadir_demirbaş",
      fullName: "Kadir Demirkaya",
      avatar:
        "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //state manipulation methods
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (
        state.currentAccount.id &&
        action.payload === state.currentAccount.id
      ) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
