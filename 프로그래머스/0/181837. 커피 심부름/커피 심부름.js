function solution(order) {
    let americano = 0;
    let cafelette = 0;
    
    order.forEach(e => {
        if(e.includes('americano') || e.includes('anything')) americano++;
        else cafelette++;
    });
    
    return (americano * 4500) + (cafelette * 5000);
}