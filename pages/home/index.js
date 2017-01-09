import React, { Component } from 'react'
import R from 'ramda'

// import local css as s.
import s from './styles.css'
// import global css as gs
import gs from './../../styles/grid.css'

function randomIntBtwNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class CarSpot extends Component {
  render() {
    const left = `${this.props.left}px`
    const top = `${this.props.top}px`
    const theClass = (this.props.isFree)? s.spotFree : s.spotTaken
    return (
        <div>
          <center> 
            <object type="image/svg+xml" height="400" data="../../assets/images/Bernard.svg">
              Your browser does not support SVG
            </object>
          </center>
          <div>
            <center>
              <h1><strong>Here is what we have sniffed out!</strong></h1>
              <p>
                <span id="recentInteraction" className={(this.props.recentInteraction) ? s.positive : s.negative}>Recent Interactions: {this.props.recentInteraction ? 'Yep' : 'Nope'}</span>&emsp;&emsp;<span id="sound" className={(this.props.sound) ? s.positive : s.negative}>Sound: {this.props.sound ? 'detected' : 'undetected'}</span>&emsp;&emsp;<span id="elderHeartRate">Heart Rate: {this.props.elderHeartRate} bpm</span>&emsp;&emsp;<span id="elderLightSensor">Light Sensor: {this.props.elderLightSensor} lux</span>
              </p>
              <p>
                <span id="humidity">Humidity: {this.props.humidity} %</span>&emsp;&emsp;<span id="pressure">Air pressure: {this.props.pressure} torr</span>&emsp;&emsp;<span id="visibility">Weather Visibility: {(this.props.visibility / 100).toFixed(5)} miles</span>&emsp;&emsp;<span id="sunrise">Time of Sunrise: {this.props.sunrise}</span>
              </p>
              <p>
                <span id="weatherTemp">Temperature at GPS location: {this.props.weatherTemp} °F</span>&emsp;&emsp;<span id="weatherText">Weather Description: {this.props.weatherText}</span>&emsp;&emsp;<span id="windSpeed">Wind Speed: {this.props.windSpeed} mph</span>&emsp;&emsp;<span id="sunset">Time of Sunset: {this.props.sunset}</span>
              </p>
              <p>
                <span id="GPSlat">GPS Latitude: {this.props.GPSlat}</span>&emsp;&emsp;<span id="GPSlong">GPS Longitude: {this.props.GPSlong}</span>&emsp;&emsp;<span id="xAccel">X Acceleration: {this.props.xAccel}</span>&emsp;&emsp;<span id="yAccel">Y Acceleration: {this.props.yAccel}</span>&emsp;&emsp;<span id="zAccel">Z Acceleration: {this.props.zAccel}</span>
              </p>
              <p>
                House Gases Sensor: <span id="O3">O3: {this.props.O3} ppm</span>&emsp;&emsp;<span id="CO">CO : {this.props.CO} ppm</span>&emsp;&emsp;<span id="CO2">CO2: {this.props.CO2} ppm</span>&emsp;&emsp;<span id="NO">NO : {this.props.NO} ppm</span>&emsp;&emsp;<span id="NO2">NO2: {this.props.NO2} ppm</span>&emsp;&emsp;<span id="CH4">CH4: {this.props.CH4} ppm</span>&emsp;&emsp;<span id="H2">H2: {this.props.H2} ppm</span>
              </p>
              <p>
                <span id="elecMain">Live Total Energy Pull: {this.props.elecMain} Watts</span>&emsp;&emsp;<span id="elecUsage">Energy Used today: {this.props.elecUsage} Watt Hours</span>&emsp;&emsp;<span id="waterMain"> Water Used: {this.props.waterMain} gallons</span>
              </p>
              <h1><strong>AI Generated Correlations</strong></h1>
              <table width={'100%'}>
                <tr>
                  <th>Fall Detection</th>
                   <th>Getting good sleep</th>
                   <th>Prescription Compliance</th>
                   <th>Asthma Attack</th>
                </tr>
                <tbody>
                  <tr>
                    <td>Sound + Heartrate + Accelerometer + Camera + Body Temperature + GPS + IR + Weather + Gas Sensor</td>
                    <td>Sound + Heartrate + Accelerometer + Camera + Body Temperature + GPS + Digital Usage + Time + Weight</td>
                    <td>Water Usage + Weight + Camera + Geiger counter</td>
                    <td>Sound + Heartrate + Camera + Weather + Air Particulants</td>
                  </tr>
                 </tbody> 
              </table>
            </center>            
          </div>
          <div className={s.falldetection}>
            <strong>Fall Detection Node Chain</strong>
            <h2>Basic Fall Detection</h2>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Accelerometer</h3>
              </div>
              <div className={s.information}>
                <p>
                  <span id="xAccel">X Acceleration: {this.props.xAccel}</span>&emsp;&emsp;<span id="yAccel">Y Acceleration: {this.props.yAccel}</span>&emsp;&emsp;<span id="zAccel">Z Acceleration: {this.props.zAccel}</span>
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Heart Rate</h3>
              </div>
              <div className={s.information}>
                <p>
                  <span id="xAccel">Heart Rate: {this.props.elderHeartRate}</span>
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Sound</h3>
              </div>
              <div className={s.information}>
                <p>
                  {this.props.sound ? 'Distrubance' : 'Nothing unusual'}
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Body Temperature</h3>
              </div>
              <div className={s.information}>
                <p>
                  {randomIntBtwNumbers(96,99)}
                </p>
              </div>
            </div>
            <h2>Advanced Fall Confirmation</h2>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>GPS</h3>
              </div>
              <div className={s.information}>
                <p>
                  Latitude: {this.props.GPSlat}&emsp;&emsp; Longitude: {this.props.GPSlong}
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Camera</h3>
              </div>
              <div className={s.information}>
                <p>
                  {this.props.sound ? 'refer to image 1' : 'refer to image 2'}
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Infrared</h3>
              </div>
              <div className={s.information}>
                <p>
                  {(randomIntBtwNumbers(0,1)) ? 'Found' : 'Unfound'}
                </p>
              </div>
            </div>
            <h2>Context Setting Confirmation</h2>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Water Usage</h3>
              </div>
              <div className={s.information}>
                <p>
                  {this.props.waterMain + " gallons"}
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Energy Usage</h3>
              </div>
              <div className={s.information}>
                <p>
                  {this.props.elecMain + " watts"}
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Weather</h3>
              </div>
              <div className={s.information}>
                <p>
                Humidity: {this.props.humidity + "%"} &emsp;&emsp;Air pressure: {this.props.pressure} torr&emsp;&emsp;Weather Visibility: {(this.props.visibility / 100).toFixed(5)} miles&emsp;&emsp;Temperature at GPS location: {this.props.weatherTemp} °F&emsp;&emsp;Weather Description: {this.props.weatherText}&emsp;&emsp;Wind Speed: {this.props.windSpeed} mph&emsp;&emsp;Time of Sunset: {this.props.sunset}&emsp;&emsp; Time of Sunrise: {this.props.sunrise}
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>House Gas Sensor</h3>
              </div>
              <div className={s.information}>
                <p>
                  <span id="O3">O3: {this.props.O3 + " ppm"}</span>&emsp;&emsp;<span id="CO">CO : {this.props.CO + " ppm"}</span>&emsp;&emsp;<span id="CO2">CO2: {this.props.CO2 + " ppm"}</span>&emsp;&emsp;<span id="NO">NO : {this.props.NO + " ppm"}</span>&emsp;&emsp;<span id="NO2">NO2: {this.props.NO2 + " ppm"}</span>&emsp;&emsp;<span id="CH4">CH4: {this.props.CH4 + " ppm"}</span>&emsp;&emsp;<span id="H2">H2: {this.props.H2 + " ppm"}</span>
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.subTitle}>
                <h3>Home Device Light Sensor</h3>
              </div>
              <div className={s.information}>
                <p>
                  {this.props.elderLightSensor + " lux"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
  }
}


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {state: 
      { windSpeed: '', atmosphere: '', astronomy: '', conditions: '', elderHeartRate: '', elderLightSensor: '', elderGPS: '', elderAccelerometer: '', gasSensor: '', energyMain: '', electricityUsage: '', electricityAppliances: '', electricityEvents: '', water: ''}
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
        windSpeed: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['wind']['speed'],
        atmosphere: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['atmosphere'],
        astronomy: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['astronomy'],
        conditions: parsed['QmWYaxscTPj79NHLnFEuUbKpZx3d4zHBK2ZRNgqrnF9s5n']['data']['channel']['item']['condition'],
        elderHeartRate: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['heartRate'],
        elderLightSensor: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['lightSensor'],
        elderGPS: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['gps'],
        elderAccelerometer: parsed['QmXUHQ2KBmSxaiEbB5eFVGGmSsPnd5KpnRqGWvtFUjWo5a']['data']['accelerometer'],
        gasSensor: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['gasSensor'],
        energyMain: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['smappee']['main'],
        electricityUsage: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['smappee']['usage']['electricity'],
        electricityAppliances: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['smappee']['usage']['appliances'],
        electricityEvents: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['smappee']['events'],        
        water: parsed['QmdhnZLVkkPyEoyxGf238pPPMsKNjPS3cC3sFzSW3cbnQA']['water']
      }

      _this.setState({state})

    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const sound = (randomIntBtwNumbers(0,1)) 
    const recentInteraction = (randomIntBtwNumbers(0,1)) 
    const humidity = (this.state.state.atmosphere.humidity)
    const pressure = (this.state.state.atmosphere.pressure)
    const visibility = (this.state.state.atmosphere.visibility)
    const sunrise = (this.state.state.astronomy.sunrise)
    const sunset = (this.state.state.astronomy.sunset)
    const weatherTemp = (this.state.state.conditions.temp)
    const weatherText = (this.state.state.conditions.text)
    const GPSlat = (this.state.state.elderGPS.lat)
    const GPSlong = (this.state.state.elderGPS.long)
    const xAccel = (this.state.state.elderAccelerometer.xAccel)
    const yAccel = (this.state.state.elderAccelerometer.yAccel)
    const zAccel = (this.state.state.elderAccelerometer.zAccel)
    const O3 = (this.state.state.gasSensor.O3)
    const CO = (this.state.state.gasSensor.CO)
    const CO2 = (this.state.state.gasSensor.CO2)
    const NO = (this.state.state.gasSensor.NO)
    const NO2 = (this.state.state.gasSensor.NO2)
    const CH4 = (this.state.state.gasSensor.CH4)
    const H2 = (this.state.state.gasSensor.H2)
    const elecMain = (this.state.state.energyMain['totalEnergy'])
    const elecUsage = (this.state.state.electricityUsage['wattHours'])
    const elecAppliances = (this.state.state.electricityAppliances)
    const elecEvents = (this.state.state.electricityEvents)
    const waterMain = (this.state.state.water['main'])
    const waterAppliances = (this.state.state.water['appliances'])
    const waterEvents = (this.state.state.water['events'])
    // const price0 = (this.state.state.price)? `$${this.state.state.price}` : ''
    // const price1 = (this.state.state[1].price)? `$${this.state.state[1].price}` : ''
    // const chargeTime0 = (this.state.state.timeCharging)? `Been charging for ${this.state.state.timeCharging.substring(0,6)} minutes` : ''
    // const chargeTime1 = (this.state.state[1].timeCharging)? `Been charging for ${this.state.state[1].timeCharging.substring(0,6)} minutes` : ''
    // const doing = (this.state.state.changeinPercent.includes('-')) ? 'poorly' : 'well'
    // const stockchange = (this.state.state.changeinPercent.includes('+')) ? 'increased' : 'decreased'
    // <CarSpot sound={sound} recentInteraction={recentInteraction} windSpeed={this.state.state.windSpeed} left="100" top="100" atmosphere={this.state.state.atmosphere} astronomy={this.state.state.astronomy} conditions={this.state.state.conditions} elderHeartRate={this.state.state.elderHeartRate} elderLightSensor={this.state.state.elderLightSensor} elderGPS={this.state.state.elderGPS} elderAccelerometer={this.state.state.elderAccelerometer} gasSensor={this.state.state.gasSensor} energySmappee={this.state.state.energySmappee} water={this.state.state.water}/>

    return (
      <div>
        
        <CarSpot sound={sound} humidity={humidity} pressure={pressure} visibility={visibility} sunrise={sunrise} sunset={sunset} weatherTemp={weatherTemp} weatherText={weatherText} GPSlat={GPSlat} GPSlong={GPSlong} xAccel={xAccel} yAccel={yAccel} zAccel={zAccel} O3={O3} CO={CO} CO2={CO2} NO={NO} NO2={NO2} CH4={CH4} H2={H2} elecMain={elecMain} elecUsage={elecUsage} elecAppliances={elecAppliances} elecEvents={elecEvents} waterMain={waterMain} waterAppliances={waterAppliances} waterEvents={waterEvents} recentInteraction={recentInteraction} windSpeed={this.state.state.windSpeed} left="100" top="100" elderHeartRate={this.state.state.elderHeartRate} elderLightSensor={this.state.state.elderLightSensor} elecAppliances={elecAppliances}/>
      </div>
    )
  }
}



export default HomePage
