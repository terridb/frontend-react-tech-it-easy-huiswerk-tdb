function getTotalTvsSold(getInventory, getBestsellingTv) {
    let total = 0;
    for (let i = 0; i < getInventory.length; i++) {
        total += getInventory[i].sold;
    }
    total += getBestsellingTv.sold;
    return total;
}

export default getTotalTvsSold;