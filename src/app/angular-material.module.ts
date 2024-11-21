import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule,} from '@angular/material/dialog';

@NgModule({
    imports: [ 
        MatCardModule ,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule, 
        MatSelectModule,
        MatDividerModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [ 
        MatCardModule ,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatButtonModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule,
      
    ]
})
export class AngularMterialModule{}