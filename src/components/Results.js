import React, { Component } from 'react';
import constants from '../../constants/demographic.js';
var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;


var agemap = {
  "0-4": "baby",
  "80+": "old",
  "30-34": "mature",
  "35-39": "mature",
  "25-29": "mature",
  "10-14": "child",
  "40-44": "mature",
  "5-9": "child",
  "50-54": "old",
  "55-59": "old",
  "70-74": "old",
  "75-79": "old",
  "65-69": "old",
  "15-19": "child",
  "60-64": "old",
  "20-24": "young",
  "45-49": "mature"
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default class Results extends Component {
    constructor(props) {
      super();

      this.state = {
        url: false
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateValue = this.updateValue.bind(this);
    }

    handleSubmit (event) {
      event.preventDefault();
      if (this.props.onSubmit && this.state.url) {
        this.props.onSubmit(this.state.url);
      }
    }

    validateValueOnChange(value) {
      return urlRegex.test(value);
    }

    style = {
      form: {
        display: 'flex',
        justifyContent: 'center',
      },
      resultsWrapper: {
        display: 'flex',
        justifyContent: 'center',
      }
    }

    updateValue(event) {
      if (this.validateValueOnChange(event.target.value)) {
        this.setState({
          url: event.target.value
        })
      } else {
        this.setState({
          url: false
        })
      }
    }

    styles = {
      resultsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1
      },
      rowWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1
      },
      emoji: {
        display: 'inline-block',
        fontSize: '2rem'
      }
    }

    renderEthnicity () {
      let quantity;
      let us;

      function getEmoji(data, i) {
        var ethnicityConstantData = constants.ethnicities.filter((item) => { return item.title === data })[0]
        return (
          <div key={data+i} style={this.styles.emoji}>
            {ethnicityConstantData.emojis[Math.floor(Math.random() * ethnicityConstantData.emojis.length  )] + ethnicityConstantData.tone[Math.floor(Math.random() * ethnicityConstantData.tone.length  )]}
          </div>
        )
      }


      const emojiData = shuffle([].concat.apply([], Object.keys(this.props.data.data).map((ethnicity) => {
        quantity = this.props.data.data[ethnicity];
        if (quantity) {
          us = new Array(quantity);
          for (var i = 0; i < us.length; i++) {
            us[i] = ethnicity;
          }
          return us;
        }
      }).filter(function(a) { return a; })));

      console.log(emojiData);

      return (
        <div style={{textAlign: 'center', padding: '1rem'}}>
          <h4>Ethnic Diversity</h4>
          {emojiData.map(getEmoji.bind(this))}
        </div>
      )
    }

    renderAge () {
      let quantity;
      let us;

      function getEmoji(data, i) {
        var ageConstantData = constants.ages.filter((item) => { return item.title === agemap[data] })[0]
        return (
          <div key={data+i} style={this.styles.emoji}>
            {ageConstantData.emojis[Math.floor(Math.random() * ageConstantData.emojis.length  )]}
          </div>
        )
      }

      console.log(123123123, this.props);

      const ageData = shuffle([].concat.apply([], Object.keys(this.props.data.age).map((age) => {
        quantity = this.props.data.age[age];
        if (quantity) {
          us = new Array(quantity);
          for (var i = 0; i < us.length; i++) {
            us[i] = age;
          }
          return us;
        }
      }).filter(function(a) { return a; })));

      console.log(ageData);

      return (
        <div style={{textAlign: 'center', padding: '1rem'}}>
          <h4>Age Diversity</h4>
        {ageData.map(getEmoji.bind(this))}
        </div>
      )
    }

    renderGender () {
      return (
        <div>
        </div>
      )
    }

    render() {
        return (
          <div style={this.styles.resultsWrapper}>
            <div style={Object.assign({}, this.styles.rowWrapper, this.styles.ethnicityWrapper)}>
              {this.renderEthnicity()}
            </div>
            <div style={Object.assign({}, this.styles.rowWrapper, this.styles.ageWrapper)}>
              {this.renderAge()}
            </div>
            <div style={Object.assign({}, this.styles.rowWrapper, this.styles.genderWrapper)}>
              {this.renderGender()}
            </div>
          </div>
        )
    }
}
