import { sha256 } from 'crypto-hash';

export const hashName = (name) => {
    return sha256(name);
}
export const formatName = (file) => {
    return file && file.name.split(".")[0].substring(0, 4) + "..." + file.name.split(".")[0].slice(-3) + "." + file.name.split(".")[file.name.split(".").length - 1]
}