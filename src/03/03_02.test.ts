import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {buildedAt: 2012, repaired: false, address:
                    {number: 100, street:
                            {title: 'White street'}}},
            {buildedAt: 2008, repaired: false, address:
                    {number: 100, street:
                            {title: 'Happy street'}}},
            {buildedAt: 2020, repaired: false, address:
                    {number: 101, street:
                            {title: 'repaired street'}}}
        ],
        governmentBuildings: [ {type: "HOSPITAL", budget: 20000, staffCount: 200, address: {street: {title: 'Central Str'} } },
         {type: "HOSPITAL", budget: 200000, staffCount: 20, address:{street: {title: 'Central Str'} } }
        ],
        citizensNumber: 1000000
    }
})

test('budget Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 10000);
    expect(city.governmentBuildings[0].budget).toBe(30000)
})

test('House repared', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})