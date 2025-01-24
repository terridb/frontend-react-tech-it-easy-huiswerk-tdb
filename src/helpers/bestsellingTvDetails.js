import {inchToCm} from "./inchToCm.js";

export function generateTvName(bestSellingTv) {
    return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export function generateTvPrice(bestSellingTv) {
    return `€${bestSellingTv.price},-`;
}

export function generateTvScreenSize(bestSellingTv) {
    return bestSellingTv.availableSizes.map(size =>
        `${size} inch (${inchToCm(size)} cm)`).join(' | ');
}