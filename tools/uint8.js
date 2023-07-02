const uint8 = (param) => {

    const hexString = param;
    const hexArray = hexString.match(/.{1,2}/g);
    const uint8Array = new Uint8Array(hexArray.map(byte => parseInt(byte, 16)));

    return uint8Array
}

export default uint8;