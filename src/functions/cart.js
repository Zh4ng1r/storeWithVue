import { ref } from 'vue';

export function useCart() {
    const cart = ref([]);

    function addToCart(item) {
        const findItem = cart.value.find((cartItem) => cartItem.id === item.id);
        if (findItem) {
            findItem.count += 1;
        } else {
            cart.value.push(item);
        }

        saveCartToLocalStorage();
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart.value));
    }

    return {
        cart,
        addToCart,
    };
}
