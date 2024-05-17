var indexLevel = 15;
// Level data
levels[indexLevel] = {
    width: 15,
    height: 15,
    starts: [{ x: 0, y: 3 }],
    end: { x: 7, y: 10 },
    data: [
        "222222000000000",
        "222222222022230",
        "332333222322230",
        "222222222022230",
        "333333222000100",
        "222222223000200",
        "333332223000200",
        "000000000002200",
        "000000333302200",
        "000000322333230",
        "000000322222230",
        "000000322333330",
        "000000333300000",
        "000000000000000",
        "000000000000000",
    ],
    objects: [
        [2, 2, 2],
        [5, 3, 2],
        [6, 3],
        [7, 3],
        [12, 6],
    ],
    triggers: [
        { x: 2, y: 5, type: 2, on: [[2, 2, 2, 1]] },
        { x: 0, y: 2, type: 2, on: [[9, 2, 3, 2]] },
    ],
}

// Tutorial
tuto[indexLevel] = [
]