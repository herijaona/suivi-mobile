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

export interface IProfilePatient {
  first_name: String;
  last_name: String;
  type_patient: 1;
  sexe: String;
  date_on_born: Date;
  city: 196;
  state: 1;
  phone: String;
  roles: String;
  username: String;
  address: String;
  password: String;
  email: String;
  father_name: String;
  mother_name: String;
  city_on_born: 125;
  country_onborn: 1;
  created_at: String;
  updated_at: String;
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
