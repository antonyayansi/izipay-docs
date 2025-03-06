# Vue

Ejemplo de integración en Vue

```vue{6}
<script setup>
import { onMounted } from 'vue'
import { setup, setInitialConfig, setPaymentConfig } from '@dankira/izipay'

const callBack = (e) => {
  console.log(e) /* Información del pago */
}

onMounted(() => {
  setInitialConfig({
    merchant_code: '2352XXX',
    production: false,
    test_password: 'testpassword_XXXX...',
    test_public_key: '2352XXX:testpublickey_XXXX...',
    test_sha256: 'gwSUo2XXXX...',
  })

  setPaymentConfig({
    amount: 10,
    currency: 'PEN',
    customer: {
      email: 'dankira@domain.com'
    }
  })
})

</script>

<template>
    <button @click="setup(callBack)">Iniciar Pago</button>
    <div id="izipay-form"></div>
</template>
```