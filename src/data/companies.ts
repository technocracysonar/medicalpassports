import { getCountry2 } from '../data/countries';
import type { country } from '../data/countries';

export type Company = {
	name: string;
	industry: industry;
	requiresPassport?: boolean;
	optionalBenefits?: boolean;
	hqLocation: country;
	optionalBenefitsSources?: [string, string];
};

export enum industry {
	Airline
}

export const companies: Company[] = [
	{
		name: 'BritishAirways',
		industry: industry.Airline,
		optionalBenefits: true,
		hqLocation: getCountry2('GB'),
		optionalBenefitsSources: [
			'https://www.cityam.com/british-airways-to-launch-own-vaccine-passport/',
			'https://www.bbc.com/news/business-56392570'
		]
	}
];
debugger;
