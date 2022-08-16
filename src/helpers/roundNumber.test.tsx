import { roundNumber } from './roundNumber';

describe('helpers/roundNumber', () => {
	it('roundNumber should return a number rounded up when the "up" value is true and the value is greater than .5', () => {
		expect(roundNumber(true, 1.2655555)).toEqual(1.27);
	});
	it('roundNumber should return a number rounded up when the "up" value is true and the value is less than .5', () => {
		expect(roundNumber(true, 1.2644444)).toEqual(1.26);
	});

	it('roundNumber should return a number rounded up to n decimal places when there is a "decimalPlaces" number submitted', () => {
		expect(roundNumber(true, 1.2644444, 3)).toEqual(1.264);
	});

	it('roundNumber should return a number rounded down when the "up" value is false and the value is greater than .5', () => {
		expect(roundNumber(false, 1.2655555)).toEqual(1.26);
	});

	it('roundNumber should return a number rounded down when the "up" value is false and the value is less than .5', () => {
		expect(roundNumber(false, 1.2644444)).toEqual(1.26);
	});
});
