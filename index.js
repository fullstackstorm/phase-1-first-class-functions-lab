const returnFirstTwoDrivers = (scuberNames) => scuberNames.slice(0, 2);
const returnLastTwoDrivers = (scuberNames) => scuberNames.slice(scuberNames.length - 2, scuberNames.length);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return (fare) => integer * fare;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberDrivers, returnDrivers){
    return returnDrivers(scuberDrivers);
}