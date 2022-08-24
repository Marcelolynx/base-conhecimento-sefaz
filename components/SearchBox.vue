<template lang='pug'>
  #search_div
    input.search_input(v-model='searchField' placeholder='Busque por uma unidade, equipe ou sistema')
    #search_results(v-if="searchField.length")
      ul
        li(v-if="searchresults.length" v-for="result in searchresults" v-on:click="findDept(result)")
          .name {{result.name}}
          .parent(v-if="result.context") {{result.context}}
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data: function() {
    return { searchField: '' }
  },
  asyncComputed: {
    searchresults: {
      get() {
        return new Promise((resolve, reject) => {
          var res
          if (this.searchField.length < 2) {
            res = [{ name: 'Type at least 2 characters' }]
          } else {
            //res = this.searchDept(this.chart, this.searchField, [])
            res = this.searchDept(this.searchField)
            if (!res.length) {
              res = [{ name: 'No matches' }]
            }
          }

          resolve(res)
        })
      },
      default: [{ name: 'Searching....' }]
    }
  },
  computed: {
    ...mapState(['chart', 'editMode', 'orgArray', 'config', 'people'])
  },
  watch: {
    searchField: function(val) {
      if (val === this.config.editCommand) {
        this.$store.commit('setEditMode', !this.editMode)
        this.searchField = ''
      }
    }
  },
  methods: {
    ...mapActions(['setShowDepartment']),
    ...mapMutations(['setShowPerson']),
    findDept: function(result) {
      this.searchField = ''
      console.log('selected: ', result)
      if (result.employee) {
        this.setShowPerson(result.employee)
      } else {
        this.setShowDepartment(result.dept)
      }
    },
    searchDept: function(search) {
      var result = []
      this.orgArray.forEach(e => {
        if (e.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          result.push({
            dept: e,
            name: e.name,
            context: e.parent ? e.parent.name : ''
          })
        }
      })
      this.people.forEach(e => {
        if (e.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          result.push({
            employee: e,
            name: e.name,
            context: 'Employee'
          })
        }
      })
      return result
    }
  }
}
</script>
<style scoped>
#search_div {
  display: flex;
  align-self: center;
  align-content: center;
  justify-content: center;
  position: relative;
  height: 40px;
  width: 550px;
  margin-left: 70%;
  margin-top: 125px;
}
.search_input {
  width: 100%;
  border-radius: 3px;
  border: none;
  padding: 5px 10px 3px 10px;
  font-size: 14px;
}
.search_input:focus {
  outline: none;
}
#search_results {
  width: 600px;
  max-height: 700px;
  border: 1px solid lightgrey;
  position: absolute;
  z-index: 1;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 0px;
  color: grey;
  font-size: 14px;
  box-shadow: 3px 3px 3px grey;
  border-radius: 3px;
}
ul {
  list-style: none;
  background-color: white;
  padding: 5px;
  text-align: left;
}
li {
  border-bottom: 1px solid lightgrey;
}

li:hover {
  background: lightblue;
  cursor: pointer;
}
.name {
  color: black;
}
.parent {
  color: chocolate;
  font-size: 10px;
}
</style>
