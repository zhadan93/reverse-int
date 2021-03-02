module.exports = function reverse (n) {
    return +(('' + (n >= 0 ? n : -n)).split('').reverse().join(''));
}
