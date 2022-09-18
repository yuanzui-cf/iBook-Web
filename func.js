const func = {
    Random: {
        number: (max, min = 0) => {
            return Math.floor(Math.random() * max) + min;
        },
        char: (length = 4) => {
            const chr = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
            let tmp = "";
            if(length < 1){
                length = 1;
            }
            for(i = 0; i < length; i++){
                tmp += chr.charAt(func.Random.number(chr.length));
            }
            return tmp;
        }
    }
};
module.exports = func;