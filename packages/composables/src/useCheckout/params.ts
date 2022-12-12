// import { UseCartFactoryParams } from '@vue-storefront/core';
// import { Cart, CartItem, Product } from '@vue-storefront/bigcommerce-api';
// import { Context } from '../types';
// import {
//     addItem,
//     clear,
//     isInCart,
//     load,
//     removeItem,
//     updateItemQty
//   } from './actions';
// // : UseCartFactoryParams<
// //   Cart,
// //   CartItem,
// //   Product
// // >['updateItemQty']
// export const params: UseCartFactoryParams<Cart, CartItem, Product>['getCheckout'] = {
//     load,
//     addItem,
//     removeItem,
//     updateItemQty,
//     clear,
//     search: () => {

//     },
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
//         console.log('Mocked: useCart.applyCoupon');
//         return {
//         updatedCart: {},
//         updatedCoupon: {}
//         };
//     },

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     removeCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
//         console.log('Mocked: useCart.removeCoupon');
//         return {
//         updatedCart: {}
//         };
//     },
//     isInCart
//     // search: async (
//     //     context: Context,
//     //     param: any
//     // ) => {
//     //     if (context) {
//     //         console.log(context, 'context?');
//     //         // const { data } = await context.$bigcommerce.api.getCheckout('dpas');
//     //         // console.log('hehe in search', data)
//     //     }
//     //     return {
//     //         test: 'test',
//     //         test1: 'test',
//     //         test2: 'test'
//     //     }
//     // }
// };
  