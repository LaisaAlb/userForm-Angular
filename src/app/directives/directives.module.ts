import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordConfirmationValidatorDirective } from './password-confirmation-validator.directive';

@NgModule({
    declarations: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective
  ],
    exports: [
      EmailPatternValidatorDirective,
      CredentialsValidatorDirective,
      PasswordStrengthValidatorDirective,
      PasswordConfirmationValidatorDirective
    ],
})

export class DirectivesModule {}