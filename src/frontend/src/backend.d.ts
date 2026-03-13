import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    date: string;
    name: string;
    specialRequests: string;
    time: string;
    email: string;
    phone: string;
    guests: bigint;
}
export interface MenuItem {
    name: string;
    description: string;
    category: string;
    price: number;
    vegetarian: boolean;
}
export interface OrderRequest {
    customerName: string;
    phone: string;
    deliveryPickup: string;
    itemsOrdered: string;
}
export interface backendInterface {
    getAllMenuItems(): Promise<Array<MenuItem>>;
    getAllOrders(): Promise<Array<OrderRequest>>;
    getAllReservations(): Promise<Array<Reservation>>;
    getMenuByCategory(category: string): Promise<Array<MenuItem>>;
    makeReservation(id: string, reservation: Reservation): Promise<void>;
    placeOrder(id: string, order: OrderRequest): Promise<void>;
}
