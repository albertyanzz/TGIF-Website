import styles from "../styles/SpotlightCard.module.css";

export const SpotlightCard: React.FC = () => {
  const pic = {
    backgroundImage: "url(/images/testimonial_1.jpg)",
  };

  return (
    <div className={styles.container}>
      <div className={styles.picture} style={pic} />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.position}>Member</div>
          <div className={styles.name}>Jenny Chang</div>
        </div>
        <div className={styles.summary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          commodo sem quis diam feugiat, quis vehicula purus dapibus. Morbi
          malesuada ipsum nec augue mollis, at imperdiet ipsum maximus. Fusce
          condimentum, tortor nec vulputate laoreet, elit magna posuere enim, ut
          lobortis lectus elit at dolor. Morbi lorem urna, dapibus sit amet
          ornare a, pellentesque eget nunc. Mauris rutrum varius porta. Fusce eu
          aliquet nisi. Vivamus id mollis urna. Duis ex mauris, malesuada eu
          imperdiet sed, venenatis eget velit. Morbi semper, mi non dapibus
          gravida, ex mi dictum nisl, eget auctor enim augue vitae libero.
          Quisque non tellus ac odio luctus volutpat in in leo. Maecenas id mi
          ut libero sollicitudin scelerisque quis ut mauris.
        </div>
        <div className={styles.achievements}>
          2017 Table Topics District Contest 3rd Place
          <br />
          2020 Chinese Evaluation District Contest 1st Place 2021
          <br />
          International Speech Contest Divison F 2nd Place
        </div>
      </div>
    </div>
  );
};
