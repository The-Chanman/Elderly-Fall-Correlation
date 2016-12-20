const Nomad = require('nomad-stream')
const moment = require('moment')

const nomad = new Nomad()

// subscription node ids
const subscriptions = ['QmcWzGjo1Zu4yE9NtzBKXNJgEFcVWvgz1ipxtAhwWrvxX5', 'QmergwJPmTCEnUyR4gLrjzfKgeBixUbemqoFC78k6sbEZq']

let instance, lastPub, notificationBody

const frequency = 5 * 60 * 1000 // 5 minutes 
const timeThreshold = 4 * 60 * 60 * 1000 // 4 hours

const defaultPublishData = { 
  [subscriptions[0]]: {
    time: '',
    description: 'Quote for Apple stock' ,
    apple: {}
  },
  [subscriptions[1]]: {
    description: 'Top news related to Apple from Google News',    
    apple: {},
    patents: {}
  }
}

// How we manager the data
class DataMaintainer {
  constructor(){
    this.data = defaultPublishData
  }
  setValue(id, value){
    switch(id){
      case subscriptions[0]:{
        this.data[id]["time"] = value.time
        this.data[id]["apple"] = value.results[0]
      }
      case subscriptions[1]:{
        let news = value.apple.items
        let patents = []
        let i = news.length
        while (i--){
          if(news[i].title.toLowerCase().includes("patent")){
            patents.push(news.splice(i, 1))
          }
        }
        this.data[id]["apple"] = news
        this.data[id]["patents"] = patents
      }
      default:{
        throw new DataSettingException("unrecognized id")
      }
    }
  }
  cleanKey(key){
    let cleanedKey = key.replace(/\s+/, '\x01').split('\x01')[0]
    cleanedKey = cleanedKey.toLowerCase()
    return cleanedKey
  }
  getAll(){
    return this.data
  }
  isAllFilled(){
    return this.data[subscriptions[0]]['apple'] && this.data[subscriptions[0]]['time'] && this.data[subscriptions[1]]['apple']
  }
  clear(){
    this.data = defaultPublishData
  }
  toString(){
    return JSON.stringify(this.data)
  }
}

function getTime() {
  return new moment()
}

//init data manager
let dataManager = new DataMaintainer()

nomad.prepareToPublish()
  .then((n) => {
    instance = n
    return instance.publishRoot('Starting up supply chain demo composite')
  })
  .then(() => {
    lastPub = getTime()
    nomad.subscribe(subscriptions, function(message) {
      console.log("==========================> Receieved a message for node " + message.id)
      console.log("==========================> Message was " + message.message)
      let messageData = JSON.parse(message.message)

      try{
        dataManager.setValue(message.id, messageData)
      }
      catch(err){
        console.log("DataMaintainer failed with error of " + err)
      }

      let currentTime = getTime()
      let timeSince = currentTime - lastPub
      if (timeSince >= frequency){
        console.log('===================================> timeSince >= timeBetween')
        if (sensorOneData == 'Active' && sensorTwoData == 'Fish'){
          console.log("***************************************************************************************")
          console.log(`we are now going to notify relevant parties since there is an Active Fish`)
          console.log("***************************************************************************************")

          instance.publish("There is an active fish! Look! (°ロ°)-☞  " + dataManager.toString())
            .catch(err => console.log(`Error in publishing timeSince>=timeBetween positive state: ${JSON.stringify(err)}`))
          dataManager.clear()
          lastPub = currentTime
        } else if (dataManager.isAllFilled()) {
          instance.publish(dataManager.toString())
            .catch(err => console.log(`Error in publishing timeSince>=timeBetween negative state: ${JSON.stringify(err)}`))
        }
      }
      if (timeSince >= timeThreshold){
        // let them know the node is still online
        console.log("===================================>   timeSince >= timeThreshold")
        console.log("***************************************************************************************")
        console.log('Heartbeat, I am alive but have not got data in a long time')
        console.log("***************************************************************************************")
        messageBody = 'Heartbeat, I am alive but have not got data in a long time'
        client.messages.create({
          to: toNumber,
          from: fromNumber,
          body: messageBody,
        }, function (err, message) {
          console.log(err)
          console.log(message)
        })
        instance.publish('Heartbeat, I am alive but have not got data in a long time')
          .catch(err => console.log(`Error in publishing timeSince>=timeBetween: ${JSON.stringify(err)}`))
        dataManager.clear()
        lastPub = currentTime
      }
    })
  })
  .catch(err => console.log(`Error in main loop: ${JSON.stringify(err)}`))