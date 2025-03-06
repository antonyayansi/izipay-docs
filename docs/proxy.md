# Proxy (Opcional)

Por razones de seguridad, la API de Izipay no acepta solicitudes directas desde el frontend. Para solucionar este inconveniente, se utiliza un intermediario que permite realizar la consulta con normalidad.

## Proxy Free

El paquete de ```@dankira/izipay``` usa su propio proxy gratuita y segura (SSL) 🔒

- Con SSL
- Gratis
- Limitado a 1,000 (mil) peticiones clientes por día
- Latencia media

<!-- ## Proxy Premium 🦄

Muy pronto [Información](https://x.com/_dankira_) -->

## Proxy Custom

```js{4}
import { setInitialConfig } from '@dankira/izipay'

setInitialConfig({
    proxy_url: 'https://example.proxy/'
})
```

El proxy debe tener metodo ```POST``` y apuntar a ```https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment```

**Ejemplo de proxy en Laravel PHP**

```routes/api.php```

```php
use Illuminate\Support\Facades\Http;

Route::post('/proxy/payment', function (Request $request) {

    $response = Http::withHeaders([
        'Content-Type' => 'application/json',
        'Authorization' => 'Basic ' . $request->authBasic,
    ])->post('https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment', $request->all());
    
    return $response->json();

});
```
::: info RESULTADO
[POST] https://example.proxy/api/proxy/payment
:::