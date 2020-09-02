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
    {{ itemCounts }}
    <template v-for="item of skillRegistry">
      <div class="col-4 q-pa-sm" :key="item.getRegistryName()">
        <q-card class="bg-yellow-3">
          <q-card-section class="row items-center">
            <div class="text-h6">{{ item.getName() }}</div>
            <span>&nbsp;{{ item.getQuantity() }}</span>
          </q-card-section>
          <template v-for="(textSection, index) of item.getText()">
            <q-card-section :key="index" class="text-center">
              {{ textSection }}
            </q-card-section>
          </template>
        </q-card>
      </div>
    </template>

    <template v-for="item of spellRegistry">
      <div class="col-4 q-pa-sm" :key="item.getRegistryName()">
        <q-card class="bg-purple-3">
          <q-card-section class="row items-center">
            <div class="text-h6">{{ item.getName() }}</div>
            <span>&nbsp;{{ item.getQuantity() }}</span>
          </q-card-section>
          <q-card-section class="text-center">
            <div>
              <strong>Casting Modifier: </strong>
              <span>{{ item.getBaseCastingModifierString() }}</span>
            </div>

            <div>
              <strong>Sanity Cost: </strong>
              <span>{{ item.getBaseSanityCost() }}</span>
            </div>
          </q-card-section>
          <q-card-section v-if="item.getIsMagicalSpell()" class="text-center">
            <div>
              <strong><em>Magical Spell</em></strong>
            </div>
          </q-card-section>
          <template v-for="(textSection, index) of item.getText()">
            <q-card-section :key="index" class="text-center">
              {{ textSection }}
            </q-card-section>
          </template>

          <q-card-section v-if="item.getHandsUsed() > 0">
            <div class="flex">
              <template v-for="n in item.getHandsUsed()">
                <q-icon :key="n" name="fas fa-hand-paper"></q-icon>
              </template>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </template>

    <template v-for="item of commonItemRegistry">
      <div class="col-4 q-pa-sm" :key="item.getRegistryName()">
        <q-card class="bg-lime-8">
          <q-card-section class="row items-center">
            <div class="text-h6">{{ item.getName() }}</div>
            <span>&nbsp;{{ item.getQuantity() }}</span>
          </q-card-section>
          <template v-if="item.isWeapon()">
            <q-card-section class="text-center">
              <div>
                <strong><em>{{ item.isPhysicalWeapon() ? 'Physical' : 'Magical' }} Weapon</em></strong>
              </div>
            </q-card-section>

            <q-card-section class="text-center">
              +{{ item.getBaseCombatModifier() }} to Combat checks
            </q-card-section>
          </template>

          <template v-for="(textSection, index) of item.getText()">
            <q-card-section :key="index" class="text-center">
              {{ textSection }}
            </q-card-section>
          </template>

          <q-card-section>
            <div class="flex justify-between">
              <div>
                <template v-for="n in item.getHandsUsed()">
                  <q-icon :key="n" name="fas fa-hand-paper"></q-icon>
                </template>

                <span v-if="item.getIsTome()">
                  <q-icon name="fas fa-book"></q-icon>
                </span>

                <span v-if="item.getCountsTowardDiscard() && !item.getDiscardable()">
                  <q-icon name="fas fa-lock"></q-icon>
                </span>
              </div>

              <div>
                ${{ item.getPrice() }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </template>

    <template v-for="item of uniqueItemRegistry">
      <div class="col-4 q-pa-sm" :key="item.getRegistryName()">
        <q-card class="bg-deep-orange-12">
          <q-card-section class="row items-center">
            <div class="text-h6">{{ item.getName() }}</div>
            <span>&nbsp;{{ item.getQuantity() }}</span>
          </q-card-section>
          <template v-if="item.isWeapon()">
            <q-card-section class="text-center">
              <div>
                <strong><em>{{ item.isPhysicalWeapon() ? 'Physical' : 'Magical' }} Weapon</em></strong>
              </div>
            </q-card-section>

            <q-card-section class="text-center">
              +{{ item.getBaseCombatModifier() }} to Combat checks
            </q-card-section>
          </template>

          <template v-for="(textSection, index) of item.getText()">
            <q-card-section :key="index" class="text-center">
              {{ textSection }}
            </q-card-section>
          </template>

          <q-card-section>
            <div class="flex justify-between">
              <div>
                <template v-for="n in item.getHandsUsed()">
                  <q-icon :key="n" name="fas fa-hand-paper"></q-icon>
                </template>

                <span v-if="item.getIsTome()">
                  <q-icon name="fas fa-book"></q-icon>
                </span>

                <span v-if="item.getCountsTowardDiscard() && !item.getDiscardable()">
                  <q-icon name="fas fa-lock"></q-icon>
                </span>
              </div>

              <div>
                ${{ item.getPrice() }}
              </div>
            </div>
          </q-card-section>
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
import ItemSkill from 'src/data/Items/ItemSkills/ItemSkill';
import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';
import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';
import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';


const itemRegistry = ItemRegistryFactory.getItemRegistryArray();
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
  itemRegistry: Item[] = itemRegistry.sort((a: Item, b: Item) => a.getName().localeCompare(b.getName()));

  private get skillRegistry(): ItemSkill[] {
    // return [];
    return this.itemRegistry.filter(x => x instanceof ItemSkill) as ItemSkill[];
  }

  private get spellRegistry(): ItemSpell[] {
    // return [];
    return this.itemRegistry.filter(x => x instanceof ItemSpell) as ItemSpell[];
  }

  private get commonItemRegistry(): ItemCommon[] {
    // return [];
    return this.itemRegistry.filter(x => x instanceof ItemCommon) as ItemCommon[];
  }

  private get uniqueItemRegistry(): ItemUnique[] {
    return this.itemRegistry.filter(x => x instanceof ItemUnique) as ItemUnique[];
  }

  private get itemCounts(): { [key: string]: number } {
    return {
      common: this.commonItemRegistry.reduce((accum, item) => accum + item.getQuantity(), 0),
      unique: this.uniqueItemRegistry.reduce((accum, item) => accum + item.getQuantity(), 0),
      skill: this.skillRegistry.reduce((accum, item) => accum + item.getQuantity(), 0),
      spell: this.spellRegistry.reduce((accum, item) => accum + item.getQuantity(), 0),
    };
  }
};
</script>
