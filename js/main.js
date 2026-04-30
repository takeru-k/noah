/**
 * hamburger
 */
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".js-btn");
  const targetElements = document.querySelectorAll(
    ".l-header, .l-header__nav, .c-hamburger__line",
  );

  if (button) {
    button.addEventListener("click", () => {
      targetElements.forEach((el) => el.classList.toggle("open"));
    });
  }

  const navLinks = document.querySelectorAll(
    ".p-global-nav__link, .p-mega-menu__item",
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href === "#") {
        return;
      }

      targetElements.forEach((el) => el.classList.remove("open"));
    });
  });
});

/**
 * global navigation mega menu
 */
$(function () {
  // アコーディオンのトリガー（プラスボタン）
  $(".p-global-nav__item-head").on("click", function () {
    // クリックされたボタンの親要素(li)を取得
    var $parent = $(this).closest(".p-global-nav__item");

    // 親要素にクラスを付け外し（プラス・マイナスアイコンの回転用）
    $parent.toggleClass("is-active");

    // コンテンツ部分をスライド開閉
    $parent.find(".js-accordion-content").slideToggle(300); // 300msで開閉
  });

  var $hasSubMenu = $(".p-global-nav__item.has-sub-menu");
  var $header = $(".l-header");

  $hasSubMenu.on({
    mouseenter: function () {
      // PC幅(1024px以上)のときだけ実行
      if (window.matchMedia("(min-width: 1024px)").matches) {
        $header.addClass("is-overlay-active");
      }
    },
    mouseleave: function () {
      // マウスが離れたらクラスを外す
      if (window.matchMedia("(min-width: 1024px)").matches) {
        $header.removeClass("is-overlay-active");
      }
    },
  });
});

/**
 * スクロールでheaderにスタイルを追加
 */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".l-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });
});
