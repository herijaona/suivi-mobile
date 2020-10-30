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
  vaccin: String;
  date_prise: any;
  etat: boolean; // 0 : Waiting ; 1 : Planifié 
  /*{
    0 : Waiting (Affichage)=> Intervention (Bouton) 
    1 : Planifier (Affichage)
  }*/
  vaccinName: String;
  identification: String; // Rappel, Prise Unique, Prise initial
  identifiant_vaccin: String;
  Lot: String;
  vaccinateur_nom: String;
  vaccinateur_prenom: String;
  NumeroProfessionnel: String;
  status: Number; // null: Rien ; 0: Rien; 1: Réalisé
  /*{
    null: Rien ne se passe
    0: Rien ne se passe
    1: Rien ne se passe 'Réalisé' => état : Réalisé (Affichage)
  }*/
}

export class IProfilePatient {
  id: Number;
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
  fatherName: String;
  motherName: String;
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
