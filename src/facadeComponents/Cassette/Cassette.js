import React from 'react';
import Colors from '../../constants/Colors';
import C2400A from '../../assets/cassettes/2400A';
import C2700A from '../../assets/cassettes/2700A';
import C2700B from '../../assets/cassettes/2700B';
import C3000A from '../../assets/cassettes/3000A';
import C3000B from '../../assets/cassettes/3000B';
import C3300A from '../../assets/cassettes/3300A';
import C3300B from '../../assets/cassettes/3300B';
import C3300C from '../../assets/cassettes/3300C';
import C3300D from '../../assets/cassettes/3300D';
import C3600A from '../../assets/cassettes/3600A';
import C3900A from '../../assets/cassettes/3900A';
import C3900B from '../../assets/cassettes/3900B';
import C4200A from '../../assets/cassettes/4200A';
import C4200B from '../../assets/cassettes/4200B';
import C4200C from '../../assets/cassettes/4200C';
import C4500A from '../../assets/cassettes/4500A';
import C4500B from '../../assets/cassettes/4500B';
import C4500C from '../../assets/cassettes/4500C';
import C4800A from '../../assets/cassettes/4800A';
import C4800B from '../../assets/cassettes/4800B';
import C4800C from '../../assets/cassettes/4800C';
import C5100A from '../../assets/cassettes/5100A';
import C5100B from '../../assets/cassettes/5100B';
import C5100C from '../../assets/cassettes/5100C';
import C5400A from '../../assets/cassettes/5400A';
import C5400B from '../../assets/cassettes/5400B';

const Cassette = props => {
  const { cassette } = props;

  let transparent = '#fff';
  let stroke = Colors.main;
  let fill = Colors.fill;

  if (props.transparent) {
    transparent = props.transparent;
  }

  if (props.stroke) {
    stroke = props.stroke;
  }

  if (props.fill) {
    fill = props.fill;
  }

  const cassetteType = param => {
    switch (param) {
      case '2400A':
        return <C2400A fill={fill} transparent={transparent} stroke={stroke} />;
      case '2700A':
        return <C2700A fill={fill} transparent={transparent} stroke={stroke} />;
      case '2700B':
        return <C2700B fill={fill} transparent={transparent} stroke={stroke} />;
      case '3000A':
        return <C3000A fill={fill} transparent={transparent} stroke={stroke} />;
      case '3000B':
        return <C3000B fill={fill} transparent={transparent} stroke={stroke} />;
      case '3300A':
        return <C3300A fill={fill} transparent={transparent} stroke={stroke} />;
      case '3300B':
        return <C3300B fill={fill} transparent={transparent} stroke={stroke} />;
      case '3300C':
        return <C3300C fill={fill} transparent={transparent} stroke={stroke} />;
      case '3300D':
        return <C3300D fill={fill} transparent={transparent} stroke={stroke} />;
      case '3600A':
        return <C3600A fill={fill} transparent={transparent} stroke={stroke} />;
      case '3900A':
        return <C3900A fill={fill} transparent={transparent} stroke={stroke} />;
      case '3900B':
        return <C3900B fill={fill} transparent={transparent} stroke={stroke} />;
      case '4200A':
        return <C4200A fill={fill} transparent={transparent} stroke={stroke} />;
      case '4200B':
        return <C4200B fill={fill} transparent={transparent} stroke={stroke} />;
      case '4200C':
        return <C4200C fill={fill} transparent={transparent} stroke={stroke} />;
      case '4500A':
        return <C4500A fill={fill} transparent={transparent} stroke={stroke} />;
      case '4500B':
        return <C4500B fill={fill} transparent={transparent} stroke={stroke} />;
      case '4500C':
        return <C4500C fill={fill} transparent={transparent} stroke={stroke} />;
      case '4800A':
        return <C4800A fill={fill} transparent={transparent} stroke={stroke} />;
      case '4800B':
        return <C4800B fill={fill} transparent={transparent} stroke={stroke} />;
      case '4800C':
        return <C4800C fill={fill} transparent={transparent} stroke={stroke} />;
      case '5100A':
        return <C5100A fill={fill} transparent={transparent} stroke={stroke} />;
      case '5100B':
        return <C5100B fill={fill} transparent={transparent} stroke={stroke} />;
      case '5100C':
        return <C5100C fill={fill} transparent={transparent} stroke={stroke} />;
      case '5400A':
        return <C5400A fill={fill} transparent={transparent} stroke={stroke} />;
      case '5400B':
        return <C5400B fill={fill} transparent={transparent} stroke={stroke} />;

      default:
        return;
    }
  };

  return (
    <div {...props} style={props.style}>
      {cassetteType(cassette)}
    </div>
  );
};

export default Cassette;

// style={{ height: '100%', width: 'auto' }}
