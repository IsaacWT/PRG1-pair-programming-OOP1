class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
}
  
  
  class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
  }
  
    class AdaStudent extends Person {
  
      _company;
      _pathway;
      _yearstarted;
    
      constructor(name, dateOfBirth, placeOfBirth, company, pathway, yearstarted){
    
        super(name, dateOfBirth, placeOfBirth);
        this._company = company;
        this._pathway = pathway;
        this._yearstarted = yearstarted;
      }
    
      get company(){
        return this._company;
      }
      
      set company(company){
        this._company = company;
      }
    
      get pathway(){
        return this._pathway;
      }
      
      set pathway(pathway){
        this._pathway = pathway;
      }
    
      talk(){
        return `Hi my name is ${this._name}. I work for ${this._company} and my pathway is ${this._pathway}.`;
      }

      sleep(){
        return `${this._name} sleeps for 12 hours. zzzzz`
      }
}

class Cohort {

  _cohortCode;
    
    constructor(cohortCode){
  
      this._cohortCode = cohortCode;
      this.cohort = [];
  
    }

  add(adaStudent) {
    this.cohort.push(adaStudent)
    return this.cohort.length;
  }

  remove(name){
    for (let i = 0; i < this.cohort.length; i++){
      if (this.cohort[i].name === name){
        this.cohort.splice(i, 1);
        return "Student deleted";
      } else {
        return "Student not found";
      }
    }
  }
  list(){
    for (let i = 0; i < this.cohort.length; i++){
      console.log(this.cohort[i].name);
    }
  }
  search(name){
    for (let i = 0; i < this.cohort.length; i++){
     return this.cohort[i].name === name ? `Student in Cohort` : `Student not in Cohort`;
    }
  }
}
  
  const april24 = new Cohort("24-04-LDN-MCR"); 
  // const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  // const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  const isaac = new AdaStudent("Isaac Talley", "10/01/2002", "Bury St Edmunds", "Bank of America", "Data Analyst", "2024");
  april24.add(new AdaStudent("Loren Wahedi", "01/01/2000", "Liverpool", "Bank of America", "Data Analyst", "Manchester"));
  april24.add(isaac);
  april24.list();
  console.log(april24.remove("Loren Wahedi"));
  console.log(april24.search("Loren Wahedi"));
  april24.list();

  
  
  // console.log(steve);
  // console.log(aqil);
  // console.log(steve.talk());
  // console.log(aqil.talk());
  // console.log(steve.name);
  // isaac.pathway = "Software";
  // console.log(isaac.pathway);
  // console.log(isaac.name);
  // console.log(isaac.talk());
  // console.log(isaac.sleep());