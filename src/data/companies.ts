export type Company = {
	name: string;
	industry: industry;
	requiresPassport?: boolean;
	offersBenefits?: boolean;
};

export enum industry {
	Airline
}

export const companies: Company[] = [
	{ name: 'BritishAirways', industry: industry.Airline, offersBenefits: true }
];
