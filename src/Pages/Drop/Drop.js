import React from 'react'
import { Component, Fragment } from 'react';

import banniere from '../../Illustration/Banniere_uniswap.png'
import pack from '../../Illustration/pack.png'



import './Drop.css'
import '../../hooks/Timer.css'


import { useHistory } from 'react-router-dom'
class Timer extends Component {
    state = {
      remaining: {
        jours: 0,
        heures: 0,
        minutes: 0,
        secondes: 0
      },
      isExpired: false
    };
    // used to set and clear interval
    timer;
    // used to calculate the distance between "current date and time" and the "target date and time"
    distance;
  
    componentDidMount() {
      this.setDate();
      this.counter();
    }
  
    setDate = () => {
      const { targetDate, targetTime } = this.props,
        // Get todays date and time
        now = new Date().getTime(),
        // Set the date we're counting down to
        countDownDate = new Date(targetDate + " " + targetTime).getTime();
      
      // Find the distance between now and the count down date
      this.distance = countDownDate - now;
      
      // target date and time is less than current date and time
      if (this.distance < 0) {
        clearInterval(this.timer);
        this.setState({ isExpired: true });
      } else {
        this.setState({
          remaining: {
            jours: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
            heures: Math.floor(
              (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
            secondes: Math.floor((this.distance % (1000 * 60)) / 1000)
          },
          isExpired: false
        });
      }
    };
  
    counter = () => {
      this.timer = setInterval(() => {
        this.setDate();
      }, 1000);
    };
  
    render() {
      const { remaining, isExpired } = this.state,
      {targetDate, targetTime} = this.props;
      
      return (

        <Fragment>
          {!isExpired && targetDate && targetTime ? (
            <div className="counter">
              {Object.entries(remaining).map((el, i) => (
                <div key={i} className="entry">
                  <div key={el[1]} className="entry-value">
                    <span className="count top curr flipTop">{el[1] + 1}</span>
                    <span className="count top next">{el[1]}</span>
                    <span className="count bottom next flipBottom">{el[1]}</span>
                    <span className="count bottom curr">{el[1] + 1}</span>
                  </div>
                  <div className="entry-title">{el[0].toUpperCase()}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="Expired">Expired</p>
          )}
        </Fragment> 

      );
    }
  }

class Drop extends React.Component{

    constructor(props) {
        super(props);
        this.state = {eth_adress: '',mail: ''};
        this.handleChangeETH = this.handleChangeETH.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeETH(event) {    this.setState({eth_adress: event.target.value});  }
      handleChangeMail(event) {    this.setState({mail: event.target.value});  }
      handleSubmit(event) {
        alert(this.state.eth_adress , this.state.mail);
        event.preventDefault();
      }

    render() {
        console.log(this.props.isExpired)
        return(
        <div className="drop">
            <img src={banniere} alt="Logo" className="banniere"/>
            <p className="explication">Pour participer à un drop, vous devez partager votre adresse ETH public. 
                    Sur cette adresse, vous devez posséder au moins 10 $TRK et les conserver jusqu’au jour du drop. 
                    Vous aurez alors une chance de gagner le drop ci-dessus.</p>
            <div className="drop-buy">
                
                <img src={pack} alt="Logo"/>
                <div className="drop-form">
                <form>
                    <div className="form-ETH_Mainnet">
                    <label>
                        <span>ETH Mainnet</span>
                        <input type="text" name="ETH_Mainnet" placeholder="0xf7bdD3E931A5431868975E295cA689c9f8e76e01" value={this.state.eth_adress} onChange={this.handleChangeETH}/>
                    </label></div>
                    <div className="form-mail">
                    <label>
                        Mon adresse mail
                        <input type="text" name="mail" value={this.state.mail} onChange={this.handleChangeMail}/>
                    </label>
                    </div>
                    <div><Timer targetDate="Oct 25, 2021" targetTime="18:00:00" /></div>
                    <input type="submit" value="PARTICIPER" name="submit" onClick={this.handleSubmit}/>
                </form>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Drop;