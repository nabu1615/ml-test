module.exports = decimals = (price) => {
    const priceParts = price.toString().split('.');
    return priceParts.length > 1 ? parseInt(priceParts[1]) : 0;
}