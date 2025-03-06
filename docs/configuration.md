# Configuración

La configuración inicial del servicio de pago requiere contar con las credenciales de Izipay. Si aún no dispone de ellas, puede solicitarlas de forma gratuita en el siguiente enlace: [Izipay Online](https://www.izipay.pe/izipay-online)

## Código de configuración

```js
import { setInitialConfig } from '@dankira/izipay'

setInitialConfig({
    merchant_code: '2352XXXX',
    production: false,
    test_password: 'testpassword_XXXX...',
    test_public_key: '2352XXXX:testpublickey_XXXX...',
    test_sha256: 'gwSUo27B8smXXX...',
})
```

**Parámetros**

| Parametro       |  Tipo   | Default                    |
| --------------- | :-----: | :------------------------- |
| merchant_code   | String  |                            |
| production      | Boolean | false                      |
| prod_password   | String  |                            |
| test_password   | String  |                            |
| prod_public_key | String  |                            |
| test_public_key | String  |                            |
| prod_sha256     | String  |                            |
| test_sha256     | String  |                            |
| proxy_url       |   URL   | Proxy Free ✅               |
| endpoint        |   URL   | https://api.micuentaweb.pe |
| language        | String  | es-PE                      |

**Modo Producción**
::: info IMPORTANTE
Para pasar a producción todos los campos con prefijo ```prod_``` deben estar completados y ademas el parametro ```production``` estar en ```true```
:::

```js{5-8}
import { setInitialConfig } from '@dankira/izipay'

setInitialConfig({
    merchant_code: '2352XXXX',
    production: true,
    prod_password: 'prodpassword_XXXX...',
    prod_public_key: '2352XXXX:prodpublickey_XXXX...',
    prod_sha256: 'gwSUo27B8smXXX...',
})
```

## Código de pago

```js
import { setPaymentConfig } from '@dankira/izipay'

setPaymentConfig({
    amount: 10,
    currency: 'PEN', // USD | EUR
    customer: {
      email: 'dankira@domain.com'
    }
})
```

**Parámetros**

| Parametro |  Tipo  | Default |
| --------- | :----: | :------ |
| amount  | Number |  0       |
| currency  | String |  PEN    |
| customer  | Object |      |

Para cambiar la moneda, es necesario afiliarse a Izipay con una cuenta en la moneda deseada, ya sea USD (Dólares Americanos) o EUR (Euros)


![Izipay Dolar](../img/dolar.png)
