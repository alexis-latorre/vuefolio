<template>
  <div>
    <label
      >Language:
      <select v-model="locale" @change="listNames(this.offset, limit)">
        <option
          v-for="language of languages"
          :key="language.name"
          :value="title(language.name)"
        >
          {{ title(language.name) }}
        </option>
      </select>
    </label>
  </div>
  <div>
    Name (only english name): <input type="text" v-model="pokeName" /><button
      @click="searchName(pokeName)"
    >
      Search
    </button>
  </div>
  <div class="pokedex">
    <div class="list">
      <div class="names">
        <ul>
          <li v-for="name of names" :key="name">
            <template v-if="pokemon.loaded && pokemon.id === name.id">
              <a class="selected" @click="searchName(name.id)">{{
                name.name
              }}</a>
            </template>
            <template v-else>
              <a @click="searchName(name.id)">{{ name.name }}</a>
            </template>
          </li>
        </ul>
      </div>
      <div class="scroll">
        <a class="btn up" @click="decrementOffset"></a>
        <div class="scrollbar"></div>
        <a class="btn down" @click="incrementOffset"></a>
      </div>
    </div>
    <template v-if="pokemon.loaded">
      <div class="screenshot">
        <div class="name">
          <h1>
            {{ title(getLocale(pokemon.species.names, "name")[0]) }} #{{
              pokemon.id
            }}
          </h1>
          <a class="btn close" @click="pokemon = { loaded: false }"></a>
        </div>
        <div class="avatar">
          <div class="types">
            <ul>
              <li v-for="type of pokemon.types" :key="type.type">
                {{ type.type.name }}
                <img
                  :src="`/assets/img/pokepedia/types/${type.type.name}.png`"
                />
              </li>
            </ul>
          </div>
          <img
            :src="
              shiny
                ? pokemon.sprites.front_shiny
                : pokemon.sprites.front_default
            "
          />
          <div class="toggle">
            <label><input type="checkbox" v-model="shiny" /> Shiny</label>
          </div>
          <a class="btn left" @click="searchName(pokemon.id - 1)"></a>
          <a class="btn right" @click="searchName(pokemon.id + 1)"></a>
        </div>
      </div>
      <div class="details">
        <div>
          <div></div>
        </div>
        <div>
          <div>
            <p
              v-for="line of getLocale(
                pokemon.species.flavor_text_entries,
                'flavor_text'
              )"
              :key="line"
            >
              {{ line }}
            </p>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <th>Ability</th>
              <th>Type</th>
            </tr>
            <tr v-for="ability of pokemon.abilities" :key="ability.ability">
              <td>{{ title(ability.ability.name) }}</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://pokeapi.co/api/v2/",
      pokeName: "geodude",
      names: null,
      pokemon: {
        loaded: false,
      },
      shiny: false,
      languages: null,
      locale: "Fr",
      offset: 0,
      limit: 10,
    };
  },
  methods: {
    title(str) {
      return str
        .split("")
        .map((n, i) => (i === 0 ? n.toUpperCase() : n))
        .join("");
    },
    unique(arr) {
      const u = [];
      arr.forEach((e) => {
        if (!u.includes(e)) u.push(e);
      });
      return u;
    },
    random(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    listNames(offset, limit) {
      this.axios
        .get(`${this.url}pokemon?offset=${offset}&limit=${limit}`)
        .then((list) => {
          const newList = [];
          list.data.results.forEach((cursor, i) => {
            this.axios
              .get(
                `${this.url}pokemon-species/${String(
                  cursor.name
                ).toLowerCase()}`
              )
              .then((pokemon) => {
                newList.push({
                  id: pokemon.data.id,
                  name: pokemon.data.names.filter(
                    (e) => e.language.name === this.locale.toLowerCase()
                  )[0].name,
                });
                if (newList.length === list.data.results.length) {
                  newList.sort((a, b) => a.id - b.id);
                  this.names = newList;
                }
              })
              .catch(console.log);
          });
        });
    },
    searchName(pokeName) {
      this.axios
        .get(`${this.url}pokemon/${String(pokeName).toLowerCase()}`)
        .then((pokemon) => {
          this.pokemon = pokemon.data;
          this.pokeName = null;

          this.axios
            .get(`${this.url}pokemon-species/${this.pokemon.id}`)
            .then((species) => {
              this.pokemon.species = species.data;
              this.pokemon.loaded = true;
              this.offset = this.pokemon.id - 5 > -1 ? this.pokemon.id - 5 : 0;
              this.listNames(this.offset, this.limit);
            })
            .catch(console.log);
        })
        .catch(console.log);
    },
    getLocale(arr, obj) {
      const filtered = arr.filter((entry) => {
        return entry.language.name === this.locale.toLowerCase();
      });

      if (filtered.length > 0) {
        if (obj)
          return [
            this.random(filtered.map((e) => e[obj].replace(/[\n\f]/g, " "))),
          ];
        else return filtered;
      }
      return [];
    },
    decrementOffset() {
      if (this.offset > 0) {
        this.offset--;
        this.listNames(this.offset, this.limit);
      }
    },
    incrementOffset() {
      if (this.offset < 890) {
        this.offset++;
        this.listNames(this.offset, this.limit);
      }
    },
  },
  mounted() {
    this.axios.get(`${this.url}language`).then((languages) => {
      this.languages = languages.data.results;
    });
    this.listNames(this.offset, this.limit);
    this.searchName(130);
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  min-width: 32px;
  min-height: 32px;
  background: #F0F0F0;
  text-align: center;
  line-height: 32px;
  cursor: pointer;

  &:hover {
    background: #F5F5F5;
  }

  &:active {
    background: #EAEAEA;
  }
}
.left {
  &::before {
    content: "\23F4";
  }
}
.right {
  &::before {
    content: "\23F5";
  }
}
.up {
  &::before {
    content: "\23F6";
  }
}
.down {
  &::before {
    content: "\23F7";
  }
}
.close {
  &::before {
    content: "X";
  }
}

.pokedex {
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  grid-template-rows: 150px 1fr;
  column-gap: 0px;
  row-gap: 0px;
  min-height: 500px;
  height: 50vh;
  background: #fffff0;

  .screenshot {
    grid-area: 1 / 2 / 2 / 3;
    padding: 16px;

    .name {
      display: flex;
      line-height: 32px;

      h1 {
        font-size: 24px;
        flex-grow: 1;
      }
    }

    .avatar {
      position: relative;
      margin-top: 12px;
      text-align: center;

      .types {
        position: absolute;
        left: calc(50% - 120px);
        top: 6px;

        ul {
          list-style: none;
        }

        img {
          width: 16px;
          height: 16px;
          aspect-ratio: 1/1;
        }
      }

      img {
        position: absolute;
        width: 96px;
        height: 96px;
        left: calc(50% - 48px);
      }

      .toggle {
        position: absolute;
        left: calc(50% + 60px);
        top: 6px;

        & * {
          cursor: pointer;
        }
      }

      .left {
        position: absolute;
        left: calc(50% - 92px);
        top: 62px;
      }

      .right {
        position: absolute;
        left: calc(50% + 60px);
        top: 62px;
      }
    }
  }
  .list {
    display: flex;
    grid-area: 1 / 1 / 3 / 2;
    background: silver;

    .names {
      flex-grow: 1;

      ul {
        list-style: none;

        li {
          a {
            display: block;
            line-height: 30px;
            padding: 10px;
            cursor: pointer;

            &:hover {
              background: #ffe0e0;
            }
          }
        }
      }
      .selected {
        background: #ffe0e0;
      }
    }
    .scroll {
      .scrollbar {
        width: 32px;
        height: calc(100% - 64px);
      }
    }
  }
  .details {
    padding: 16px;
    grid-area: 2 / 2 / 3 / 3;
  }
}
</style>