
import { BUY_CAKE } from './cake.types'

export const buyCake = ()=>{
    return{
        type: BUY_CAKE,
        payload: 'Buy cake action'
    }
}