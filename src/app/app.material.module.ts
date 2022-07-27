import { NgModule } from '@angular/core';

import {TextFieldModule} from '@angular/cdk/text-field';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const materialModule = [
    MatCardModule, MatSidenavModule, MatExpansionModule, MatIconModule, MatListModule,
    MatMenuModule, MatToolbarModule, TextFieldModule, MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatButtonModule, MatDividerModule, MatProgressBarModule
];

@NgModule({
    exports: materialModule
})

export class AppMaterialModule { }
