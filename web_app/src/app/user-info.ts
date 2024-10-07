export interface UserInfo {
    arrivalDate: Date,
    departureDate: Date,
    countOfGuests: number,
    typeRoom: string,
    users: ClientsInfo[]
}

export interface ClientsInfo {
    firstName: string,
    lastName: string,
    phoneNumber: string
}

export interface Reservation { 
arrivalDate: string,
departureDate: string,
guestCount: number,
roomType: string,
guests: Guests[]
}

export interface Guests {
firstName: string,
lastName: string,
phoneNumber: string
}
