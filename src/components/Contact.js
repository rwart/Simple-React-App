var Contact = React.createClass({
  displayName: 'Contact',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'contactItem' },
      React.createElement('img', { className: 'contactImage', src: 'http://icons.veryicon.com' + '/ico/System/100%20Flat%20Vol.%202/contacts.ico' }),
      React.createElement(
        'p',
        { className: 'contactLabel' },
        'Imi\u0119: ',
        this.props.item.firstName
      ),
      React.createElement(
        'p',
        { className: 'contactLabel' },
        'Nazwisko: ',
        this.props.item.lastName
      ),
      React.createElement(
        'a',
        { href: 'mailto:' + this.props.item.email },
        this.props.item.email
      )
    );
  }
});
