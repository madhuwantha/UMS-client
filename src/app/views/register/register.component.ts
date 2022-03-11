import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'register.component.html',
    styleUrls: ['register.css']
})
export class RegisterComponent implements OnInit{


    public documentType = "O";
    constructor(
        private router: Router,
        private fb: FormBuilder
    ) {
    }

    public today: any;
    ngOnInit(): void {

    }

}
