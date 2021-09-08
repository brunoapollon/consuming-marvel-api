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
            <a href="/comics">
              <span>comics</span>
            </a>
          </li>
          <li>
            <a href="/characters">
              <span>characters</span>
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
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <path
                  d="M24 12.6228C24 5.72855 18.6274 0.139648 12 0.139648C5.37258 0.139648 0 5.72855 0 12.6228C0 19.5171 5.37258 25.106 12 25.106C18.6274 25.106 24 19.5171 24 12.6228Z"
                  fill="white"
                />
                <path
                  d="M8.6537 8.12891C9.11555 8.12891 9.54185 8.16775 9.9326 8.28418C10.3234 8.36181 10.6431 8.51709 10.9273 8.7112C11.2115 8.90527 11.4247 9.17702 11.5668 9.52635C11.7089 9.87569 11.7799 10.3027 11.7799 10.7685C11.7799 11.312 11.6733 11.7778 11.4247 12.1271C11.2115 12.4765 10.8563 12.787 10.43 13.0199C11.0339 13.214 11.4957 13.5634 11.7799 14.0292C12.0641 14.495 12.2417 15.0772 12.2417 15.7372C12.2417 16.2806 12.1352 16.7464 11.9575 17.1346C11.7799 17.5227 11.4957 17.8721 11.176 18.105C10.8563 18.338 10.4655 18.532 10.0392 18.6485C9.6129 18.7649 9.1866 18.8426 8.7603 18.8426H4V8.12891H8.6537ZM8.3695 12.4765C8.7603 12.4765 9.08 12.36 9.3287 12.1659C9.57735 11.9719 9.68395 11.6225 9.68395 11.1955C9.68395 10.9626 9.6484 10.7297 9.57735 10.5744C9.5063 10.4191 9.39975 10.3027 9.25765 10.1862C9.11555 10.1086 8.97345 10.031 8.7958 9.99217C8.6182 9.95332 8.44055 9.95332 8.22745 9.95332H6.167V12.4765H8.3695ZM8.4761 17.0569C8.68925 17.0569 8.9024 17.0181 9.08 16.9793C9.25765 16.9405 9.43525 16.8629 9.57735 16.7464C9.71945 16.63 9.82605 16.5135 9.9326 16.3194C10.0037 16.1254 10.0747 15.8924 10.0747 15.6207C10.0747 15.0772 9.9326 14.6891 9.6484 14.4174C9.3642 14.1845 8.97345 14.068 8.5116 14.068H6.167V17.0569H8.4761ZM15.3324 17.0181C15.6166 17.3287 16.0429 17.484 16.6113 17.484C17.002 17.484 17.3573 17.3675 17.6415 17.1734C17.9257 16.9405 18.1033 16.7076 18.1743 16.4747H19.915C19.6308 17.4063 19.2045 18.0662 18.6362 18.4932C18.0678 18.8814 17.3928 19.1143 16.5757 19.1143C16.0073 19.1143 15.51 18.9978 15.0482 18.8038C14.5864 18.6097 14.2311 18.338 13.9114 17.9498C13.5917 17.6004 13.343 17.1734 13.2009 16.6688C13.0233 16.1641 12.9522 15.6207 12.9522 14.9996C12.9522 14.4174 13.0233 13.8739 13.2009 13.3693C13.3785 12.8646 13.6272 12.4377 13.9469 12.0495C14.2666 11.7002 14.6574 11.3896 15.0837 11.1955C15.5455 11.0014 16.0073 10.885 16.5757 10.885C17.1796 10.885 17.7125 11.0014 18.1743 11.2731C18.6362 11.5449 18.9914 11.8554 19.2756 12.3212C19.5598 12.7482 19.7729 13.2528 19.915 13.7963C19.9861 14.3397 20.0216 14.8832 19.9861 15.5043H14.835C14.835 16.1254 15.0482 16.7076 15.3324 17.0181ZM17.5704 12.9423C17.3217 12.6706 16.931 12.5153 16.4692 12.5153C16.1494 12.5153 15.9008 12.5929 15.6876 12.7094C15.4745 12.8259 15.3324 12.9811 15.1903 13.1364C15.0482 13.2917 14.9771 13.4857 14.9416 13.6799C14.9061 13.8739 14.8705 14.0292 14.8705 14.1845H18.0678C17.9967 13.6022 17.8191 13.214 17.5704 12.9423ZM14.4443 8.86648H18.423V9.91453H14.4443V8.86648Z"
                  fill="#ED1D24"
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
