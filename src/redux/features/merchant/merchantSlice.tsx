import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type merchant = {
    merchant:string,
    client:string,
    descriptor:string,
    rdrtier:string,
    mcc:string,
    email:string,
    caid:string,
    midlive:string,
    acquirer:string,
    rdrstatus:string,
    bin:string,
    mid:string,
    etocastatus:string,
    ethocalimit:string
};

const initialState: merchant ={
    merchant:"",
    client:'',
    descriptor:'',
    rdrtier:'',
    mcc:'',
    email:'',
    caid:'',
    midlive:'',
    acquirer:'',
    rdrstatus:'',
    bin:'',
    mid:'',
    etocastatus:'',
    ethocalimit:''
}
export const merchantSlice = createSlice({
    name: "merchant",
    initialState,
    reducers: {
      setmerchantData: (state, action: any) => {
        // state[action.payload.key] = action.payload.key;
        return {
            ...state,
            [action.payload.key]: action.payload.key
        }
      }
    }
  });
  
  export const {
    setmerchantData
  } = merchantSlice.actions;
  
  export default merchantSlice.reducer;