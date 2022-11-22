export const sortDates = (listToBeSorted) => {
    listToBeSorted.sort((a, b) => {
        const firstDotidx1 = a.date.indexOf(".");
        const firstDotidx2 = b.date.indexOf(".");

        const year1 = parseInt(
            a.date.substr(a.date.indexOf(".", firstDotidx1 + 1) + 1, 4)
        );
        const year2 = parseInt(
            b.date.substr(b.date.indexOf(".", firstDotidx2 + 1) + 1, 4)
        );
        const month1 = parseInt(a.date.substr(firstDotidx1 + 1, 2));
        const month2 = parseInt(b.date.substr(firstDotidx2 + 1, 2));

        const day1 = parseInt(a.date.substr(0, firstDotidx1));
        const day2 = parseInt(b.date.substr(0, firstDotidx2));

        const time1 = a.date.substr(a.date.indexOf(" ") + 1);
        const time2 = b.date.substr(b.date.indexOf(" ") + 1);

        console.log({ year1, year2, month1, month2, day1, day2, time1, time2 });
        if (
            year1 < year2 ||
            (year1 === year2 && month1 < month2) ||
            (year1 === year2 && month1 === month2 && day1 < day2) ||
            (year1 === year2 &&
                month1 === month2 &&
                day1 === day2 &&
                time1 < time2)
        )
            return -1;
        else return 1;
    });
    return listToBeSorted;
};
