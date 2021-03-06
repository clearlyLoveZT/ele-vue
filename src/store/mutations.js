import Vue from 'vue'
import {
  RECEIVE_SELLER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutationsType'
export default {
  [RECEIVE_SELLER] (state, {seller}) {
    console.log('seller', seller)
    state.seller = seller
  },
  [RECEIVE_GOODS] (state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count++
    } else {
      Vue.set(food, 'count', 1) // 新添加的属性就有了数据绑定，界面就会更新
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
     if (food.count > 0) {
       food.count--
     }
  },
  [CLEAR_CART] (state, {foodList}) {
    foodList.forEach(food => food.count = 0)
  }
}
