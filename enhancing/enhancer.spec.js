const enhancer = require('./enhancer.js');

// test away!

describe('enhancer functions', () => {

  describe('repair()', () => {
    it("should return a repaired item with the durability restored to 100", () => {
      // Arrange
      const item = {
        name: '',
        durability: 0,
        enhancement: 0
      };

      const expectedResult = { ...item, durability: 100 }

      // Act
      const actualResult = enhancer.repair(item);

      // Assess
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('succeed()', () => {
    it('should return a new item object with 1 point increase of enhancement', () => {
      const item = {
        name: '',
        durability: 0,
        enhancement: 0
      };

      const newValue = item.enhancement + 1

      const expectedResult = { ...item, enhancement: newValue};

      const actualResult = enhancer.succeed(item);

      expect(actualResult).toEqual(expectedResult);

    });

    it('should not increase enhancement if it is 20 points or above', () => {
      const item = {
        name: '',
        durability: 0,
        enhancement: 20
      };

      const expectedResult = { ...item, enhancement: 20};

      const actualResult = enhancer.succeed(item);

      expect(actualResult).toEqual(expectedResult);
    });

    it("should throw an error if enhancement is higher than 20", () => {
      const item = {
        name: "",
        durability: 0,
        enhancement: 21
      }

      expect(() => {enhancer.succeed(item)}).toThrow();
    });

    // it.todo('should throw an error if enhancement is over 20')
    
  });

  describe('fail()', () => {
    it("should decrease item's durability by 5 if enhancement is less than 15", () => {
      const item = {
        name: "",
        durability: 100,
        enhancement: 13
      }

      const newDurability = item.durability - 5

      const expectedResult = { ...item, durability: newDurability }

      // Act
      const actualResult = enhancer.fail(item);

      // Assess
      expect(actualResult).toEqual(expectedResult);
    });

    it("should decrease item's durability by 10 if enhancement is 15 or more", () => {
      const item = {
        name: "",
        durability: 100,
        enhancement: 15
      }

      const newDurability = item.durability - 10;

      const expectedResult = { ...item, durability: newDurability };

      // Act
      const actualResult = enhancer.fail(item);

      // Assess
      expect(actualResult).toEqual(expectedResult);
    });

    it('should decrease enhancement level if enhancement is 17 or more', () => {
      const item = {
        name: "",
        durability: 100,
        enhancement: 17
      }

      const newDurability = item.durability - 10;

      const newEnhancement = item.enhancement - 1;

      const expectedResult = { ...item, 
        enhancement: newEnhancement,
        durability: newDurability 
      };

      const actualResult = enhancer.fail(item);

      expect(actualResult).toEqual(expectedResult);
    });



  });

});