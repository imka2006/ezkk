<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <img src="../assets/icons/footer/logo.svg" alt="logo">
        <div class="footer-wrapper">
          <h4 class="footer-title">Платформа</h4>
          <ul class="footer-list"> 
            <li class="footer-item"><a href="#view">Как мы это видим?</a></li>
            <li class="footer-item"><a href="#safety">Безопасность</a></li>
            <li class="footer-item"><a href="#smartphone">О приложение</a></li> 
          </ul>
        </div>
        <div class="footer-wrapper">
          <h4 class="footer-title">о нас</h4>
          <ul class="footer-list">
            <li class="footer-item"><a href="https://sino0on.pythonanywhere.com/" target="_blank">Подробнее о нас</a></li>
            <li class="footer-item"><a href="https://sino0on.pythonanywhere.com/send_application" target="_blank">Подать заявку</a></li> 
          </ul>
        </div>
        <div class="footer-wrapper">
          <h4 class="footer-title">Контакты</h4>
          <ul class="footer-list">
            <li class="footer-item"><a href="tel:+996556309075">(556) 309-075</a></li>
            <li class="footer-item">Г. Бишкек Московская 165</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-description">2022 - 2023. Электронная зачетная книжка</p>
        <ul class="footer-cocial-list">
          <li class="footer-cocial-item"><a href="mailto:centertehnologies@gmail.com" target="_blank"><img src="	https://arthursabr.pythonanywhere.com/static/img/email.svg" alt="gmail"></a></li>
          <li class="footer-cocial-item"><a href="https://go.2gis.com/l5ven" target="_blank"><img style="width: 25px; height: 25px;" src="https://arthursabr.pythonanywhere.com/static/img/location.png" alt="2gis"></a></li>
          <li class="footer-cocial-item"><a href="https://instagram.com/centertehnologies?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><img src="../assets/icons/footer/instagram.svg" alt="instagram"></a></li>
          <li class="footer-cocial-item"><a href="https://wa.me/996505840888" target="_blank"><img src="https://arthursabr.pythonanywhere.com/static/img/whatsapp.svg" alt="whatsapp"></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterIcon from '../assets/icons/footer/FooterIcon.vue';

</script>

<style lang="scss">
.footer {
  &-title {
    font-weight: 500;
    font-size: 16.2px;
    line-height: 140%;
    color: #000000;
    margin-bottom: 25px;
    
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &-item {
    font-weight: 400;
    font-size: 14.4px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: rgba(1, 8, 81, 0.8);  
  }

  &-content {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 50px 0 100px;
    border-bottom: 1px solid #010851;
  }

  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 66px 0 80px;
  }

  &-cocial-list {
    display: flex;
    align-items: center;
    gap: 50px;
    img {
      max-width: 39px;
    }
  }
}
@media screen and (max-width:930px) {
  .footer {
    &-content {
      flex-wrap: wrap;
      gap: 60px;
      justify-content: left;
    }
    &-bottom {
      padding: 20px 0;
    }
  }
}
@media screen and (max-width:610px) {
  .footer {
    &-content {
      border-bottom: unset;
          flex-direction: column; 
    align-items: center;
    text-align: center;
    }
     
    &-bottom {
      padding: 20px 0; 
      flex-direction: column-reverse;
      text-align: center;
    }
  }
} 
</style>