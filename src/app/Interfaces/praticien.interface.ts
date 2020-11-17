export interface IConsultation {
  id: Number;
  consultationObjet: String;
  consultationStatus: String;
  consultationDate: Date;
  type: String;
  patient: String;
}

export interface IVaccination {
  id: Number;
  statusVaccin: String;
  firstName: String;
  lastName: String;
  patient: Number;
  praticien: Number;
  operation?: String;
  _status?: String;
  _action?: String;
}

export interface IUserPraticien {
  id: String;
  role: [String];
  firstName: String;
  userName: String;
  lastName: String;
  fonction: String;
  phoneProfessional: String;
  state: String;
  city: String;
}

export interface IUserPatient {
  id: Number;
  state: String;
  city: String;
  firstName: String;
  lastName: String;
  address: String
}

export interface IPraticienPropRdv {
  patient: {
    firstName: String;
    lastName: String;
  };
  dateProposition: Date;
  descriptionProposition: String;
}

export interface IIntervention {
  id: Number;
  date: Date;
  patient: String;
  status: String;
  type: String;
  vaccine: String;
}

export interface IRegisterPraticien {
  first_name: String;
  last_name: String;
  sexe: String;
  date_born: Date;
  city: Number;
  state: Number;
  fonction: String;
  phone: String;
  roles: String;
  username: String; // Generer automatiquement
  address: String;
  password: String;
  email: String;
}

