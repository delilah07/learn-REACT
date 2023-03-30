import './Info.css';
import styles from './Info.module.css';
console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello</h1>
      <h2>hhhh</h2>
      <button className="my-button">Click</button>
    </div>
  );
}

export default Info;
