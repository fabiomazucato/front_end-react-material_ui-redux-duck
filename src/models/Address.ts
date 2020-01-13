export interface IAddress {
	street?: string
	suite?: string
	city?: string
	zipcode?: string
	geo?: IGeoLocation
}

export interface IGeoLocation {
	lat: number
	lng: number
}
