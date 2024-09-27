export interface UserInfo {
    arrivalDate: Date,
    departureDate: Date,
    countOfGuests: number,
    typeRoom: string,
    clients: ClientsInfo[]
}

export interface ClientsInfo {
    clientName: string,
    clientLastName: string,
    clientEmail: string,
    clientPhoneNumber: string
}
