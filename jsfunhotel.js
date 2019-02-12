var hotelName = "Javascript Hotel";

var roomTypes = ["Twin", "Single", "Double", "Queen", "King"];

var roomPrices = [75, 85, 100, 150, 200];

var availableRooms = [
    [101, 102, 103, 104],
    [105, 106, 107, 108],
    [201, 202, 203, 204],
    [301, 302, 303],
    [304, 305]
];

var bookedRooms = [
    [[]],
    [],
    [],
    [],
    []
]



function availableRoomsQty() {
    var totalAvailRoomQty = 0;

    for (var i = 0; i < availableRooms.length; i++) {


        var avail = availableRooms[i].length;
        totalAvailRoomQty += avail;


    }
    return availableRoomsQty();
}

function totalAvailabileRoomsReport () {
   console.log(availableRoomsQty()) 
}

function salesReport () {
for (var i = 0; i < bookedRooms.length; i++) {
    bookedRooms[i].length * roomPrices[i]
}
}