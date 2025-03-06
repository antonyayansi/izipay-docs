# React

Ejemplo de integración en React

```jsx{6}
import { useEffect } from 'react';
import { setup, setInitialConfig, setPaymentConfig } from '@dankira/izipay';

const IzipayPayment = () => {
  const callBack = (e) => {
    console.log(e); /* Información del pago */
  };

  useEffect(() => {
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
  }, []);

  const handlePayment = () => {
    setup(callBack);
  };

  return (
    <div>
      <button onClick={handlePayment}>Iniciar Pago</button>
      <div id="izipay-form"></div>
    </div>
  );
};

export default IzipayPayment;
```