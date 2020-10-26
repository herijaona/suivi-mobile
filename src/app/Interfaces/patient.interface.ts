export interface IPatient {
  id: Number;
  firstName: String;
  lastName: String;
}

export interface IRdvPatient {
  description: String;
  praticien: String;
  dateRdv: Date;
  typeRdv: Date;
  heureRdv: Date;
  id: Number;
}

export interface IVaccinPatient {
  id: number;
  date: Date;
  dateRapel: Date;
  vaccin: string;
  status: string;
}



export class IProfilePatient {
  firstName: String;
  lastName: String;
  typePatient: Number;
  sexe: String;
  dateOnBorn: any;
  nameCity: Number;
  nameState: Number;
  namestate: Number;
  phone: String;
  roles: String;
  username: String;
  address: String;
  password: String;
  email: String;
  father_name: String;
  mother_name: String;
  cityBorn: Number;
  countryBorn: Number;
  createdAt: any;
  updatedAt: String;
}

export interface IRegisterPatient {
  first_name: String;
  last_name: String;
  type_patient: Number; // ADULT - ENFANT
  sexe: String;
  date_on_born: Date;
  city: Number;
  state: Number;
  phone: String;
  roles: String;
  username: String; // Generer automatiquement
  address: String;
  password: String;
  email: String;
  father_name: String;
  mother_name: String;
}
