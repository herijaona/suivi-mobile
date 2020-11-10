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
  status: String;
  date: Date;
  patient: String;
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

