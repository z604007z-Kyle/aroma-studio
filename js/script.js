/**
 * 靈境芳療 - 全站互動邏輯
 * 包含：AOS 初始化、平滑滾動、EmailJS 處理、曼陀羅特效優化
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 初始化 AOS 動態捕捉 (確保全站動畫生效)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            offset: 100
        });
    }

    // 2. 基本導航平滑滾動 (優化原本功能)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. EmailJS 預約表單邏輯 (針對 contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm && typeof emailjs !== 'undefined') {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-button');
            const successMsg = document.getElementById('success-msg');
            
            // 防止重複點擊
            if (submitBtn) {
                submitBtn.innerText = "能量傳送中...";
                submitBtn.disabled = true;
            }

            // 執行傳送 (請確保在 contact.html 填入正確 ID)
            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            // 這裡先寫 console 模擬，正式上線請取消上方註釋
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    contactForm.style.opacity = '0';
                    setTimeout(() => {
                        contactForm.style.display = 'none';
                        if (successMsg) successMsg.style.display = 'block';
                    }, 500);
                }, (error) => {
                    alert('傳遞失敗，請透過 Line 直接與我聯繫。');
                    if (submitBtn) {
                        submitBtn.innerText = "重新傳送";
                        submitBtn.disabled = false;
                    }
                    console.error('EmailJS Error:', error);
                });
        });
    }

    // 4. 導航欄滾動效果 (當捲動超過 50px 時改變透明度)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(26, 60, 64, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        } else {
            header.style.background = 'rgba(26, 60, 64, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    console.log("◈ 靈境芳療：能量場域已準備就緒 ◈");
});
