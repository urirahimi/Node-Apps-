const utils = require('./utils');
const expect = require('expect');

describe('utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33,11);
        // if (res !== 44) {
        //     throw new Error('Expected 44 but got ' + res);
        // }
        expect(res).toBe(44).toBeA('number');
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
        })
        done();
    })
    
    it('should square two numbers', () => {
        var res = utils.square(10);
        // if (res !== 100) {
        //     throw new Error('Expected 100 but got ' + res);
        // }
        expect(res).toBe(100).toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        })
    })
    
    // nodemon --exec 'npm test' - makes testing application easier
    
    // should verify that first and last names are set
    // assert it includes firstnames and lastname with proper values
    
    it('should be same values', () => {
        var user = {
            locations: 'Philly',
            Age: 25
        };
        var res = utils.setName(user, 'Uri Rahimi');
       // expect(user).toEqual(res);
       expect(res).toInclude({
           firstName: 'Uri',
           lastName: 'Rahimi'
       })
    })
})



// it('should expect some values', () => {
//   //  expect(12).toNotBe(11);
//   //expect({name: 'Andrew'}).toBe({name: 'Andrew'}); // checks if same object so not equal
// //   expect([2,3,4]).toInclude(2);
// //   expect([2,3,4]).toInclude(2);
// expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'philly'
//     }).toExclude({
//         age: 23
//     })
// })


