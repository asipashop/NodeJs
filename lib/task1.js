const ascending_test = data => {
    return data.sort();
};

const descending_test = data => {
    let sorting = ascending_test(data);

    return sorting.reverse();
};

const manipulate = (data) => {
    let urut, length, first, second, last, all, kebalik

    urut = data.sort()
    length = data.length
    first = data[0]
    second = data[1]
    last = data[length - 1]
    all = data
    kebalik = data.reverse()

    let = result = {
        urut,
        length,
        first,
        second,
        last,
        all,
        kebalik
    }

    return result
}


module.exports = {
    ascending_test,
    descending_test,
    manipulate

};