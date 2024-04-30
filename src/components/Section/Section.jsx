import PropTypes from 'prop-types';
import { Header } from './Section.styled'


export const Section = ({ title, children }) => {
   
  return (
    <section>
      <Header>{title}</Header>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};