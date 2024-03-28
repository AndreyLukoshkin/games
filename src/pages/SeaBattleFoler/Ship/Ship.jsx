import './styles.css';

const Ship = ({ id, type, size }) => {
    return <div className={`seabattle__container_ship_${type}`}></div>;
};

export default Ship;
