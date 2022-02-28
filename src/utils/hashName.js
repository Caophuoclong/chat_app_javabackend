import { sha256 } from 'crypto-hash';

export const hashName = (name) => {
    return sha256(name);
}