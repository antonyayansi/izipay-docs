# Angular

Ejemplo de integración en Angular

**1. Crea un nuevo componente en Angular**

```sh
ng generate component IzipayPayment
```

**2. Actualiza el componente ```IzipayPayment``` con el siguiente código**

```izipay-payment.component.ts```

```ts{32}
import { Component, OnInit } from '@angular/core';
import { setup, setInitialConfig, setPaymentConfig } from '@dankira/izipay';

@Component({
  selector: 'app-izipay-payment',
  templateUrl: './izipay-payment.component.html',
  styleUrls: ['./izipay-payment.component.css']
})
export class IzipayPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInitialConfig({
      merchant_code: '2352XXX',
      production: false,
      test_password: 'testpassword_XXXX...',
      test_public_key: '2352XXX:testpublickey_XXXX...',
      test_sha256: 'gwSUo2XXXX...',
    });

    setPaymentConfig({
      amount: 10,
      currency: 'PEN',
      customer: {
        email: 'dankira@domain.com',
      },
    });
  }

  callBack(event: any): void {
    console.log(event); /* Información del pago */
  }

  handlePayment(): void {
    setup(this.callBack);
  }
}
```

```izipay-payment.component.html```

```html
<div>
  <button (click)="handlePayment()">Iniciar Pago</button>
  <div id="izipay-form"></div>
</div>
```

::: info IMPORTANTE
Añadir el componente a tu módulo
No olvides agregar el componente al módulo de tu aplicación, si no lo has hecho automáticamente con el CLI de Angular:

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IzipayPaymentComponent } from './izipay-payment/izipay-payment.component';

@NgModule({
  declarations: [IzipayPaymentComponent],
  imports: [CommonModule],
  exports: [IzipayPaymentComponent]
})
export class AppModule {}
```

:::