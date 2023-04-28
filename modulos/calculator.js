module.exports = {
    mais : function (a,b) {
        return a+b;
    },
    menos : function (a,b) {
        return a-b;
    },
    vezes : function (a,b) {
        return a*b;
    },
    dividido : function (a,b) {
        if (b === 0) {
            throw new Error("Aí não né")
        }
        return a/b;
    }
};