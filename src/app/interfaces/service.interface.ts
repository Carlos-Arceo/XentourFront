export interface Service {
  serviceType: string;
  serviceName: string;
  description: string;
  basePrice: number;
  imageUrl: string; // URL de la imagen procesada
}

export interface ServiceDetailResponse {
  serviceType: string;
  serviceName: string;
  description: string;
  basePrice: number;
  durationHours: number;
  minCapacity: number;
  maxCapacity: number;
  notes: string;
  imageUrl: string;
  transport: TransportResponse;
  destinations: DestinationResponse[];
  items: ItemResponse[];
}

export interface TransportResponse {
  transportType: string;
  vehicle: string;
  travelInsurance: boolean;
  hasAirConditioning: boolean;
  notes: string;
  imageUrl: string; // URL de la imagen procesada
}

export interface DestinationResponse {
  destinationName: string;
  entryCost: number;
  notes: string;
  includesEntry?: boolean; // Nullable in C#
  visitOrder?: number;     // Nullable in C#
  imageUrl: string;
}

export interface ItemResponse {
  name: string;
}
