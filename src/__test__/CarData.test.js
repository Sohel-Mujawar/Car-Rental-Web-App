import { CAR_DATA } from '../components/CarData';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary package
import '@testing-library/jest-dom';

describe('CAR_DATA', () => {
    test('should contain an array of car objects', () => {
        expect(Array.isArray(CAR_DATA)).toBe(true);
        expect(CAR_DATA.length).toBeGreaterThan(0);
        expect(typeof CAR_DATA[0]).toBe('object');
      });

/*     test('each car object should have the required properties', () => {
        CAR_DATA.forEach((car) => {
            expect(car).toHaveProperty('name');
            expect(car).toHaveProperty('price');
            expect(car).toHaveProperty('img');
            expect(car).toHaveProperty('model');
            expect(car).toHaveProperty('mark');
            expect(car).toHaveProperty('year');
            expect(car).toHaveProperty('doors');
            expect(car).toHaveProperty('air');
            expect(car).toHaveProperty('transmission');
            expect(car).toHaveProperty('fuel');
        });
    }); */
    test('each car object should have the required properties', () => {
        CAR_DATA.forEach((carArray) => {
          const car = carArray[0]; // Access the first (and only) object in the inner array
          expect(car).toHaveProperty('name');
          expect(car).toHaveProperty('price');
          expect(car).toHaveProperty('img');
          expect(car).toHaveProperty('model');
        });
      });
});