const ascending_test = data => {
    return data.sort();
};

const descending_test = data => {
    let sorting = ascending_test(data);

    return sorting.reverse();
};

const manipulate = data => {
    let urut, length, first, second, last, all

    urut = ascending_test(data)
    length = data.length
    first = data[0]
    second = data[1]
    last = data[length - 1]
    all = data


    let = result = {
        urut,
        length,
        first,
        second,
        last,
        all
    }

    return result
}


const manipulated = data => {
    let length, first, second, last, all, kebalik

    kebalik = descending_test(data)
    length = data.length
    first = data[0]
    second = data[1]
    last = data[length - 1]
    all = data


    let = result = {
        kebalik,
        length,
        first,
        second,
        last,
        all

    }

    return result
}



module.exports = {
    ascending_test,
    descending_test,
    manipulate,
    manipulated

};