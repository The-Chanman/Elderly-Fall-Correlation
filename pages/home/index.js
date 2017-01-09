import React, { Component } from 'react'
import R from 'ramda'

// import local css as s.
import s from './styles.css'
// import global css as gs
import gs from './../../styles/grid.css'
import Ship from '../../components/Ship/Ship'

function randomIntBtwNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class CarSpot extends Component {
  render() {
    const left = `${this.props.left}px`
    const top = `${this.props.top}px`
    const theClass = (this.props.isFree)? s.spotFree : s.spotTaken
    return (
        <div className={s.bernard}>
        </div>
        <div>
          <center><h4><strong>What we have sniffed out!</strong></h4></center>
         
          <p><span id="recentInteraction">Recent Interactions: {this.props.recentInteraction}</span>&nbsp&nbsp&nbsp&nbsp<span id="sound">Sound: {this.props.sound}</span>&nbsp&nbsp&nbsp&nbsp<span id="elderHeartRate">Heart Rate: {this.props.elderHeartRate}</span>&nbsp&nbsp&nbsp&nbsp<span id="elderLightSensor">Light Sensor: {this.props.elderLightSensor}</span></p>
          <p><span id="elderGPS">GPS: {this.props.elderGPS}</span>&nbsp&nbsp&nbsp&nbsp<span id="elderAccelerometer">Accelerometer: {this.props.elderAccelerometer}</span>&nbsp&nbsp&nbsp&nbsp<span id="conditions">Weather: {this.props.conditions}</span>&nbsp&nbsp&nbsp&nbsp<span id="windSpeed">Wind Speed: {this.props.windSpeed}</span></p>
          <p><span id="atmosphere">Atmosphere: {this.props.atmosphere}</span>&nbsp&nbsp&nbsp&nbsp<span id="astronomy">Astronomy: {this.props.astronomy}</span>&nbsp&nbsp&nbsp&nbsp<span id="gasSensor">Gas Sensor: {this.props.gasSensor}</span>&nbsp&nbsp&nbsp&nbsp<span id="water">Water: {this.props.water}</span></p>
          <p><span id="energySmappee">Energy: {this.props.energySmappee}</span></p>
        </div>
        // <div>
        //   <div className={theClass} style={{left: left, top: top}}>
        //     <div style={{left: '50px', top: '300px'}} className={s.label}>{this.props.price}</div>
        //     <div style={{left: '50px', top: '450px'}} className={s.timeLabel}>{this.props.chargeTime}</div>
        //   </div>
        // </div>
      )
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {state: 
      { windSpeed: '', atmosphere: '', astronomy: '', conditions: '', elderHeartRate: '', elderLightSensor: '', elderGPS: '', elderAccelerometer: '', gasSensor: {}, energySmappee: {}, water: {}}
    }
  }

  componentDidMount() {
    const _this = this
    setInterval(() => {
      _this.updateState()
    }, 5000)
  }

  updateState() {
    let _this = this
    fetch('http://localhost:9000')
    .then(res => res.json())
    .then(json => {
      // const state = [
      //   {available: true, price: 1},
      //   {available: false, price: 2},
      // ]
      console.log(json)
      const parsed = JSON.parse(json)
      debugger
      const state = {
        windSpeed: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['wind'],
        atmosphere: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['atmosphere'],
        astronomy: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['astronomy'],
        conditions: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['item']['condition'],
        elderHeartRate: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['heartRate'],
        elderLightSensor: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['lightSensor'],
        elderGPS: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['gps'],
        elderAccelerometer: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['accelerometer'],
        gasSensor: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['gasSensor'],
        energySmappee: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['smappee'],
        water: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['water']
      }

      _this.setState({state})

    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const sound = (randomIntBtwNumbers(0,1)) ? 'detected' : 'undetected'
    const recentInteraction = (randomIntBtwNumbers(0,1)) ? 'Yep' : 'Nope'
    // const price0 = (this.state.state.price)? `$${this.state.state.price}` : ''
    // const price1 = (this.state.state[1].price)? `$${this.state.state[1].price}` : ''
    // const chargeTime0 = (this.state.state.timeCharging)? `Been charging for ${this.state.state.timeCharging.substring(0,6)} minutes` : ''
    // const chargeTime1 = (this.state.state[1].timeCharging)? `Been charging for ${this.state.state[1].timeCharging.substring(0,6)} minutes` : ''
    // const doing = (this.state.state.changeinPercent.includes('-')) ? 'poorly' : 'well'
    // const stockchange = (this.state.state.changeinPercent.includes('+')) ? 'increased' : 'decreased'

    return (
      <div>
        <CarSpot sound={sound} recentInteraction={recentInteraction} windSpeed={this.state.state.windSpeed} left="100" top="100" atmosphere={this.state.state.atmosphere} astronomy={this.state.state.astronomy} conditions={this.state.state.conditions} elderHeartRate={this.state.state.elderHeartRate} elderLightSensor={this.state.state.elderLightSensor} elderGPS={this.state.state.elderGPS} elderAccelerometer={this.state.state.elderAccelerometer} gasSensor={this.state.state.gasSensor} energySmappee={this.state.state.energySmappee} water={this.state.state.water}/>
      </div>
    )
  }
}



export default HomePage
