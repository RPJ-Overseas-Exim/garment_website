import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">RPJ Garments</h2>

        <span className="footer__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          dicta sequi laboriosam magnam excepturi iste autem est suscipit nemo,
          molestias, ut quaerat rerum ipsum et minima blanditiis aliquam
          quibusdam accusantium.
        </span>

        <hr className="footer__line" />

        <span className="footer__bottom">
          Copyright &copy; RPJ Garments. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
