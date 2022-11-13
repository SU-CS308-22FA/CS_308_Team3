export const sortList = (unsortedList) => {
    unsortedList.sort((a, b) => {
        if (
            a.date.substr(3, 7) < b.date.substr(3, 7) ||
            (a.date.substr(3, 7) === b.date.substr(3, 7) &&
                a.date.substr(0, 2) < b.date.substr(0, 2)) ||
            (a.date.substr(3, 7) === b.date.substr(3, 7) &&
                a.date.substr(0, 2) === b.date.substr(0, 2) &&
                a.date.substr(11, 5) < b.date.substr(11, 5))
        )
            return -1;
        else return 1;
    });
    return unsortedList;
};
