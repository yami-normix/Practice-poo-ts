class Person {
    private id: number;
    protected name: string;
    protected age: number;
    protected gender: string;
  
    constructor(id: number, name: string, age: number, gender: string) {
      this.id = id
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    public sayHello(): void {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    protected getId() {
        return this.id;
    }
  }

  class Client extends Person {
    private email: string;
    private phone: string;

   constructor(id: number, name: string, age: number, gender: string, email: string, phone: string){
    super(id, name, age, gender);
    this.email = email;
    this.phone = phone;
   }
    
   public makePurchase(item: string): void {
    console.log(`${this.name} made a purchase of ${item}.`);
  }

  public getClientId(): number {
    return this.getId();
  }
  
  }

const mary = new Client(123, 'Mary', 25, 'female', 'mary@example.com', '555-555-1234');
mary.sayHello(); // Output: "Hello, my name is Mary and I'm 25 years old."
mary.makePurchase('book'); // Output: "Mary made a purchase of book."
//console.log(mary.getClientId()); // Output: 123

class Employee extends Person {
    private badge: string;
    private email: string;
    private phone: string;
    private salary: number;

    constructor(id: number, name: string, age: number, gender: string, badge: string, email: string, phone: string, salary: number){
        super(id, name, age, gender);
        this.badge = badge;
        this.email = email;
        this.phone = phone;
        this.salary = salary;
    }

    public getBadge(): string {
        return this.badge;

    }

    public getEmail(): string {
        return this.email;
    }

    public getPhone(): string {
        return this.phone;
    }

    public calculateSalaryAfterTaxes(): { isss: number, afp: number, renta: number, salaryAfterTaxes: number } {
        const isssPercentage = 0.03;
        const afpPercentage = 0.0725;
        const isss = this.salary * isssPercentage;
        const afp = this.salary * afpPercentage;
        const totalTaxes = isss + afp;
        const gravado = this.salary - totalTaxes;
        let renta = 0;
      
        if (gravado <= 472.00) {
            renta = 0; 
        } else if (gravado >= 472.01 && gravado <= 895.24) {
            const excedente = gravado - 472.00;
            const impuesto = excedente * 0.10;
            renta = impuesto + 17.67;
        } else if (gravado >= 895.25 && gravado <= 2038.10) {
            const excedente = gravado - 895.24;
            const impuesto = excedente * 0.20;
            renta = impuesto + 60;
        } else if (gravado >= 2038.11) {
            const excedente = gravado - 2038.10;
            const impuesto = excedente * 0.30;
            renta = impuesto + 288.57;
        }
      
        const taxesWithRenta = totalTaxes + renta;
        const salaryAfterTaxes = this.salary - taxesWithRenta;
      
        return { isss, afp, renta, salaryAfterTaxes };
      }
      

}

const john = new Employee(456, 'John', 30, 'male', '001', 'john@example.com', '555-555-5678', 1000);
const { isss, afp, renta, salaryAfterTaxes } = john.calculateSalaryAfterTaxes();
console.log(`isss: ${isss}`, `afp: ${afp}`, `renta: ${renta}`); // Output: isss: 30 afp: 72.5 renta: 60.4
console.log("Salary after taxes:", salaryAfterTaxes); // Output: 847.925

