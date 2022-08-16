export function roundNumber(
	up: boolean,
	value: number,
	decimalPlaces: number = 2
): number {
	return up
		? Number(
				`${Math.round(`${value}e${decimalPlaces}` as any)}e-${decimalPlaces}`
		  )
		: Number(
				`${Math.floor(`${value}e${decimalPlaces}` as any)}e-${decimalPlaces}`
		  );
}
