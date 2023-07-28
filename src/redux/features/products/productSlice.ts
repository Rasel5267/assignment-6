import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

interface IBuilder {
	products: IProduct[];
}

const initialState: IBuilder = {
	products: [],
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addToBuilder: (state, action: PayloadAction<IProduct>) => {
			const existingProductIndex = state.products.findIndex(
				(product) => product.category === action.payload.category
			);

			if (existingProductIndex !== -1) {
				// If the product already exists, replace it with the new one
				state.products[existingProductIndex] = { ...action.payload };
			} else {
				// If the product does not exist, add it to the array
				state.products.push({ ...action.payload });
			}
		},
		removeFromBuilder: (state, action: PayloadAction<IProduct>) => {
			state.products = state.products.filter(
				(product) => product._id !== action.payload._id
			);
		},
	},
});

export const { addToBuilder, removeFromBuilder } = productSlice.actions;

export default productSlice.reducer;
