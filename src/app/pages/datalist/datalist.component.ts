import { Component } from '@angular/core';
import { Person } from '../../data/person';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { PersonService } from '../../service/person-service/person.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.scss',
})
export class DatalistComponent {
  constructor(private personService: PersonService) {
    this.reloadData();
  }

  number = 0;
  date = new Date();
  text = 'Hello';
  data: Person[] = [];
  displayedColumns: string[] = ['id', 'name', 'age'];

  public personForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    age: new UntypedFormControl(0),
  });

  save(formData: any) {
    const person: Person = Object.assign(formData);
    this.personService.save(person).subscribe(() => {
      this.reloadData();
    });
  }

  reloadData() {
    this.personService.getList().subscribe((persons: Person[]) => {
      this.data = persons;
    });
  }

  sayHello() {
    this.number++;
    this.text = `You pushed this button ${this.number} times!`;
    alert('Hello');
  }
}
