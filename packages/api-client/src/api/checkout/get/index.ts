import {
    Endpoints
} from '../../../types';
import endpointPaths from '../../../helpers/endpointPaths';

export const getCheckout: Endpoints['getCheckout'] = async (context, params) => {
    // console.log('heheheh', context)
    // const a = await context.client.v3.post(endpointPaths.products, [{}]);

    return {
        checkout: {
            test: 'here'
        }
    }
}