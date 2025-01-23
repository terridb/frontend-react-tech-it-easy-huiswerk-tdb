function getTotalTvsPurchased(getInventory, getBestsellingTv) {
    let total = 0;
    for (let i = 0; i < getInventory.length; i++) {
        total += getInventory[i].originalStock;
    }
    total += getBestsellingTv.originalStock;
    return total;
}

export default getTotalTvsPurchased;