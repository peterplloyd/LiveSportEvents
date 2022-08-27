import RoundNumber  from './RoundNumber';

describe('helpers/RoundNumber', () => {
	it('RoundNumber should return a number rounded up when the "up" value is true and the value is greater than .5', () => {
		expect(RoundNumber(true, 1.2655555)).toEqual(1.27);
	});
	it('RoundNumber should return a number rounded up when the "up" value is true and the value is less than .5', () => {
		expect(RoundNumber(true, 1.2644444)).toEqual(1.26);
	});

	it('RoundNumber should return a number rounded up to n decimal places when there is a "decimalPlaces" number submitted', () => {
		expect(RoundNumber(true, 1.2644444, 3)).toEqual(1.264);
	});

	it('RoundNumber should return a number rounded down when the "up" value is false and the value is greater than .5', () => {
		expect(RoundNumber(false, 1.2655555)).toEqual(1.26);
	});

	it('RoundNumber should return a number rounded down when the "up" value is false and the value is less than .5', () => {
		expect(RoundNumber(false, 1.2644444)).toEqual(1.26);
	});
});
