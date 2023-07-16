import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
		MatInputModule,
		MatButtonModule,
		MatListModule,
		MatSelectModule,
		MatFormFieldModule,
		HttpClientModule,
		MatTabsModule
	],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
		MatInputModule,
		MatButtonModule,
		MatListModule,
		MatSelectModule,
		MatFormFieldModule,
		MatTabsModule
	]
})
export class SharedModule {}
