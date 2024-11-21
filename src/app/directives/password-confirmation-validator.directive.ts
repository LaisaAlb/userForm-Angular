import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    }
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(!control.value.confirmacaoSenha) return null;

    const passwordConfirmationControl = control.get('confirmacaoSenha');
    
    if(control.value.senha !== control.value.confirmacaoSenha) {
      passwordConfirmationControl?.setErrors({ 'invalidPasswordConfirmation': true });

      return { 'invalidPasswordConfirmation': true };
    }

    return null;
  }
}
