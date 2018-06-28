import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../store';
import Modal from 'react-modal';

class Day extends Component {
  render() {
    console.log(this.props)
    const { close, date, events, showDayModal } = this.props;

    let modalStyle = {
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        backgroundColor: 'rgba(255,255,255, 0.363)'
      }
    };

    if (!showDayModal) return null;
    else {
      return (
        <div>
          <Modal
            open={showDayModal}
            style={modalStyle}
            onClose={close}
            closeButton={true}>
            <h2>{date}</h2>
            <ul>
              {
                !events.length ? <li>No events scheduled for this day.</li> : events.map(event => <li>{event.description}</li>)
              }
            </ul>
          </Modal>
        </div>
      )
    }
  }
}

const mapState = state => ({
  showDayModal: state.dayModal.isOpen,
  date: state.dayModal.date
});

const mapDispatch = dispatch => ({
  close: () => dispatch(closeModal())
});

export default connect(mapState, mapDispatch)(Day);