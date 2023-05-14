import React from "react";
import styles from "./HeroSection.module.scss";
import img from "./../../assets/img/icon-web-design.png";
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroHeading}>Hồ sơ cá nhân: Trình bày Kỹ năng và Kinh nghiệm của Tôi</h1>
        <figure className={styles.heroInfo}>
          <p className={styles.heroName}>Họ Và Tên: Phạm Xuân Phúc</p>
          <p className={styles.heroPhoneNumber}>Số điện thoại: 0972462798</p>
          <p className={styles.heroEmail}>Email: phamphuc05071998@gmail.com</p>
          <address className={styles.heroAddress}>Địa chỉ: Quảng Ninh, Việt Nam</address>
          <p className={styles.heroParagraph}>
          Giới thiệu chung: Tôi là một lập trình viên front-end có  đam mê tạo ra giao diện web tốt nhất cho người dùng. Tôi có kiến thức vững về HTML, CSS, JavaScript và các framework như React js, Node js và React Native. Tôi cũng có khả năng làm việc độc lập và tư duy logic tốt. Tôi mong muốn được góp phần vào thành công của dự án mới.
          </p>
            <a href="#" className={styles.heroBtn}>Liên hệ với tôi</a>
        </figure>

        <img className={styles.heroImg} src={img} alt="Front end developer" />
      </div>
    </section>
  );
}

export default HeroSection;
