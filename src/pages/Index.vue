<template>
  <q-page class="col items-center justify-evenly">
    <!--    <example-component-->
    <!--      title="Example component"-->
    <!--      active-->
    <!--      :todos="todos"-->
    <!--      :meta="meta"-->
    <!--    ></example-component>-->
    <q-btn label="Add one to all" @click="tempFunction" />
    <q-list>
      <template v-for="loc in arkhamLocations">
        <q-item :key="loc.getArea()">
          <strong>{{ loc.getAreaName() }}</strong> #Clues: {{ loc.getClueTokenCount() }}
          <q-btn color="primary" @click="loc.addClueToken()" label="Add token" />
        </q-item>
      </template>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { Meta, Todo } from 'components/models';
import ExampleComponent from 'components/ClassComponent.vue';
import { Component, Vue } from 'vue-property-decorator';
import Game from 'src/data/Game';
import { ArkhamLocations } from 'src/data/Areas/ArkhamLocation';

const theGame: Game = new Game();
theGame.newGame();

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
  game: Game = theGame;
  arkhamLocations = ArkhamLocations;

  tempFunction(): void {
    Object.values(ArkhamLocations).forEach(x => x.addClueToken());
  }
};
</script>
