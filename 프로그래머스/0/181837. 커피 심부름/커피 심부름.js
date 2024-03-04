function solution(order) {
    
    return order.reduce((total, item) => {
        const price = item.includes("latte") ? 5000 : item.includes("americano") ? 4500 : 4500;
        return total + price;
    }, 0)
}