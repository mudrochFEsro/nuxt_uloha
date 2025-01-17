<script setup lang="ts">
import Box from "~/components/UI/Box.vue";
</script>

<template>
  <div class="ContentA">
    <Box direction="Reverse">
      <div class="b1">
        Rýchle výsledky pomocou UX auditu.
      </div>
      <div class="b2">
        google parntner
      </div>
    </Box>
    <Box direction="Normal">
      <div class="b3">
        UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú váš produkt, zvýšite ich spokojnosť
        a hlavne vaše zisky.
      </div>
      <div class="b4">
        Odhalíme nedostatky na vašej stránke

        Zvýšime konverzný pomer vašich stránok

        Zvýšime výkon marketingových kampaní

        Znížime vaše náklady na vývoj

        Zvýšime návštevnosť vašich stránok
      </div>
    </Box>
    <Box direction="Normal">
      <div class="b5">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu pomocou UX auditu.
      </div>
      <div class="b6">Mám záujem o UX audit</div>
    </Box>
  </div>
</template>

<style scoped lang="scss">
//.ContentA {
//  .box {
//    justify-content: center;
//    display: flex;
//    flex-direction: row;
//    width: 100%;
//    @media screen and (max-width: 576px) {
//      flex-direction: column;
//    }

    .b1 {
      background-color: #00a286;
      height: 100px;
    }

    .b2 {
      background-color: #695e2b;
      height: 70px;

    }

    .b3 {
      background-color: red;
      height: 80px;

    }

    .b4 {
      background-color: blue;
      height: 170px;


    }

    .b5 {
      background-color: lightblue;
      height: 100px;

    }

    .b6 {
      background-color: yellow;
      height: 100px;

    }
//  }
//
//}
</style>