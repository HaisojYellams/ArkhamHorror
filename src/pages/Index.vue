<template>
  <!--  <q-page class="col items-center justify-evenly">-->
  <!--    &lt;!&ndash;    <example-component&ndash;&gt;-->
  <!--    &lt;!&ndash;      title="Example component"&ndash;&gt;-->
  <!--    &lt;!&ndash;      active&ndash;&gt;-->
  <!--    &lt;!&ndash;      :todos="todos"&ndash;&gt;-->
  <!--    &lt;!&ndash;      :meta="meta"&ndash;&gt;-->
  <!--    &lt;!&ndash;    ></example-component>&ndash;&gt;-->
  <!--  </q-page>-->
  <q-page class="row wrap">
    <template v-for="item of itemRegistry">
      <div class="col-4 q-pa-sm" :key="item.getRegistryName()">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ item.getName() }}</div>
          </q-card-section>
          <template v-for="(textSection, index) of item.getText()">
            <q-card-section :key="index">
              {{ textSection }}
            </q-card-section>
          </template>
        </q-card>
      </div>
    </template>
  </q-page>
</template>

<script lang="ts">
import { Meta, Todo } from 'components/models';
import ExampleComponent from 'components/ClassComponent.vue';
import { Component, Vue } from 'vue-property-decorator';
import ItemRegistryFactory from 'src/data/Registries/BaseRegistryFactories/ItemRegistryFactory';
import Item from 'src/data/Items/Item';


const itemRegistry = ItemRegistryFactory.getRegistryArray();
console.log('Item registry', itemRegistry);

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
  todos: Todo[] = [
    {
      id: 1,
      content: 'ct1'
    },
    {
      id: 2,
      content: 'ct2'
    },
    {
      id: 3,
      content: 'ct3'
    },
    {
      id: 4,
      content: 'ct4'
    },
    {
      id: 5,
      content: 'ct5'
    }
  ];
  meta: Meta = {
    totalCount: 1200
  };
  itemRegistry: Item[] = itemRegistry.sort((a, b) => a.getName().localeCompare(b.getName()));
};
</script>
