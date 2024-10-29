export interface ReservasInterfaz {
    idReserva: number;            
    nombreCompleto: string;        
    correo: string;
    fechaEntrada: string;          
    fechaSalida: string;         
    tipoHabitacion: string;
    peticionesEspeciales?: string;  
    created_at?: string;             
    state?: boolean;                 
}
