import {inchToCm} from "./inchToCm.js";

export function generateTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

export function generateTvPrice(tv) {
    return `€${tv.price},-`;
}

export function generateTvScreenSize(tv) {
    return tv.availableSizes.map(size =>
        `${size} inch (${inchToCm(size)} cm)`).join(' | ');
}