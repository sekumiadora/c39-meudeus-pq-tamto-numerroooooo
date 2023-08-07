class Player {
  constructor (){
    this.index = this.index
    this.name = this.name
  }


getCount(){
  // leia os dados e armazene o valor de playerCount
var playerCountRef = database.ref('playerCount')
 playerCountRef.on('value', (data)=>{
  playerCountRef = data.val();
 })
  
}

updateCount (count){
  // atualize o playerCount
  database.ref("/").update({
    playerCount : count
  })
}
}
