<template>
  <div class="content">
    <div>© 2022 by the Rosenstraße Foundation | All rights reserved</div>
    <a
      href="https://www.paypal.com/donate/?business=PKN77PRKQMVDE&no_recurring=0&item_name=This+money+is+being+donated+to+the+Rosenstrasse+Foundation&currency_code=USD"
      target="_blank"
    >
      <img class="donate-button"
        src="@/../public/assets/donate-button.png"
        alt="Donate"
      />
    </a>
  </div>
</template>

<style>
.content {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-bottom: 8px;
}

.donate-button {
  height: 38px;
}

@media only screen and (max-width: 900px) {
  .content {
    gap: 16px; 
  }
  
  .donate-button {
    height: 28px
  }
}
</style>
