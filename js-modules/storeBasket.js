// Basket Store
var basketModule = (function() {
    var basket = [];

    return {
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
            var q = this.getItemCount(),
                p = 0;

            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    }
}());

basketModule.addItem({item: 'bread', price: 20});
basketModule.addItem({item: 'pretty', price: 50});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

//продвинутое использование метода reduce()
var selected = [
  { price: 60 },
  { price: 120 }
];

var dollar_const = 60.08;
var euro_const = 63.54;

var reducers = {
  rubles: function(state, item) {
    return state.rubles += item.price;
  },
  dollars: function(state, item) {
    return state.dollars += item.price / dollar_const;
  },
  euros: function(state, item) {
    return state.euros += item.price / euro_const;
  }
};

var combineReducers = function(reducers) {
  return function(state, item) {
    return Object.keys(reducers).reduce(function(nextState, key) {
      reducers[key](state, item);
      return state;
    }, {});
  }
};

var priceReducer = combineReducers(reducers);

var totalPrice = selected.reduce(priceReducer, {
  rubles: 0,
  dollars: 0,
  euros: 0
});

console.log(totalPrice);
