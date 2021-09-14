import React from "react";

import { Container } from "./styles";

import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <nav className="menu">
        <ul>
          <li>
            <a href="/home">
              <span>home</span>
            </a>
          </li>
          <li>
            <a href="/characters">
              <span>characters</span>
            </a>
          </li>
          <li>
            <a href="/comics">
              <span>comics</span>
            </a>
          </li>
          <li>
            <a href="/events">
              <span>events</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <span>about</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="credits">
        <section className="section-names">
          <div className="names">
            <span>UX/UI Designer: Ariadna Cavalcante</span>
            <a href="https://www.linkedin.com/in/ariadna-cavalcante/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145V7.773ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://www.behance.net/ariadnacavalcante">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M24 12.4104C24 5.55633 18.6274 0 12 0C5.37258 0 0 5.55633 0 12.4104C0 19.2645 5.37258 24.8208 12 24.8208C18.6274 24.8208 24 19.2645 24 12.4104Z"
                  fill="white"
                />
                <path
                  d="M8.6537 7.94287C9.11555 7.94287 9.54185 7.98149 9.9326 8.09723C10.3234 8.17441 10.6431 8.32877 10.9273 8.52175C11.2115 8.71468 11.4247 8.98483 11.5668 9.33212C11.7089 9.6794 11.7799 10.1039 11.7799 10.567C11.7799 11.1073 11.6733 11.5704 11.4247 11.9176C11.2115 12.2649 10.8563 12.5736 10.43 12.8052C11.0339 12.9982 11.4957 13.3454 11.7799 13.8085C12.0641 14.2716 12.2417 14.8504 12.2417 15.5065C12.2417 16.0468 12.1352 16.5098 11.9575 16.8957C11.7799 17.2816 11.4957 17.6289 11.176 17.8605C10.8563 18.092 10.4655 18.2849 10.0392 18.4007C9.6129 18.5165 9.1866 18.5937 8.7603 18.5937H4V7.94287H8.6537ZM8.3695 12.2649C8.7603 12.2649 9.08 12.1492 9.3287 11.9562C9.57735 11.7633 9.68395 11.416 9.68395 10.9915C9.68395 10.7599 9.6484 10.5284 9.57735 10.374C9.5063 10.2197 9.39975 10.1039 9.25765 9.98813C9.11555 9.91095 8.97345 9.83376 8.7958 9.7952C8.6182 9.75658 8.44055 9.75659 8.22745 9.75659H6.167V12.2649H8.3695ZM8.4761 16.8185C8.68925 16.8185 8.9024 16.78 9.08 16.7413C9.25765 16.7028 9.43525 16.6256 9.57735 16.5098C9.71945 16.394 9.82605 16.2783 9.9326 16.0853C10.0037 15.8924 10.0747 15.6609 10.0747 15.3907C10.0747 14.8504 9.9326 14.4645 9.6484 14.1944C9.3642 13.9629 8.97345 13.8471 8.5116 13.8471H6.167V16.8185H8.4761ZM15.3324 16.78C15.6166 17.0887 16.0429 17.243 16.6113 17.243C17.002 17.243 17.3573 17.1272 17.6415 16.9343C17.9257 16.7028 18.1033 16.4712 18.1743 16.2397H19.915C19.6308 17.1659 19.2045 17.8219 18.6362 18.2464C18.0678 18.6323 17.3928 18.8638 16.5757 18.8638C16.0073 18.8638 15.51 18.748 15.0482 18.5551C14.5864 18.3621 14.2311 18.092 13.9114 17.7061C13.5917 17.3588 13.343 16.9343 13.2009 16.4327C13.0233 15.931 12.9522 15.3907 12.9522 14.7733C12.9522 14.1944 13.0233 13.6542 13.2009 13.1525C13.3785 12.6508 13.6272 12.2264 13.9469 11.8405C14.2666 11.4932 14.6574 11.1845 15.0837 10.9915C15.5455 10.7985 16.0073 10.6827 16.5757 10.6827C17.1796 10.6827 17.7125 10.7985 18.1743 11.0687C18.6362 11.3388 18.9914 11.6475 19.2756 12.1106C19.5598 12.5351 19.7729 13.0367 19.915 13.577C19.9861 14.1173 20.0216 14.6575 19.9861 15.275H14.835C14.835 15.8924 15.0482 16.4712 15.3324 16.78ZM17.5704 12.728C17.3217 12.4579 16.931 12.3035 16.4692 12.3035C16.1494 12.3035 15.9008 12.3807 15.6876 12.4965C15.4745 12.6123 15.3324 12.7666 15.1903 12.921C15.0482 13.0753 14.9771 13.2683 14.9416 13.4612C14.9061 13.6542 14.8705 13.8085 14.8705 13.9629H18.0678C17.9967 13.3841 17.8191 12.9982 17.5704 12.728ZM14.4443 8.67611H18.423V9.71802H14.4443V8.67611Z"
                  fill="#171616"
                />
              </svg>
            </a>
          </div>
          <div className="names">
            <span>Desenvolvedor Web: Bruno Vinícius </span>
            <a href="https://www.linkedin.com/in/bruno-vinicius-azevedo-lopes/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145V7.773ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://github.com/brunoapollon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2073 22.581 20.2775 21.05 21.744 19.0076C23.2106 16.9653 23.9996 14.5144 24 12C24 5.37 18.63 0 12 0Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </section>
        <div className="circle" />
        <span>
          Todos direitos reservados a{" "}
          <a href="https://www.marvel.com/">Marvel</a>
        </span>
      </div>
    </Container>
  );
}

export default Footer;
