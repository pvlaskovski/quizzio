import { AbstractControl } from '@angular/forms';

export function stringsMatchValidator(passwordsFormControl: AbstractControl) {

    return (rePasswordFormControl: AbstractControl) => {

        if (passwordsFormControl.value !== rePasswordFormControl.value) {
            return { stringsMismatch: true }
        }

        return null;

    }

}