/**
 * 靈境芳療 - 全站互動邏輯
 * 包含：AOS 初始化、平滑滾動、預約表單模擬、導航欄優化
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

    // 2. 基本導覽平滑滾動 (優化原本功能)
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

    // 3. 預約表單處理邏輯 (暫時註釋 EmailJS 並使用模擬效果)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-button');
            const successMsg = document.getElementById('success-msg');
            
            // 防止重複點擊
            if (submitBtn) {
                submitBtn.innerText = "能量傳送中...";
                submitBtn.disabled = true;
            }

            // --- EmailJS 正式串接區 (目前已註釋) ---
            /*
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    contactForm.style.opacity = '0';
                    setTimeout(() => {
                        contactForm.style.display = 'none';
                        if (successMsg) successMsg.style.display = 'block';
                    }, 500);
                }, (error) => {
                    alert('傳遞失敗，請透過 Line 直接與我聯繫。');
                    submitBtn.innerText = "重新傳送";
                    submitBtn.disabled = false;
                });
            */
            // ------------------------------------

            // --- 測試用：模擬傳送成功效果 (當你申請好 EmailJS 後，請刪除這段並取消上方註釋) ---
            setTimeout(() => {
                contactForm.style.opacity = '0';
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    if (successMsg) successMsg.style.display = 'block';
                    console.log("模擬傳送成功：當你串接 EmailJS 後，這封信會寄到你的信箱。");
                }, 500);
            }, 1500); 
            // ----------------------------------------------------------------------
        });
    }

    // 4. 導航欄滾動效果 (提升捲動時的質感)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(26, 60, 64, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
                header.style.padding = '10px 0'; // 捲動時縮小高度，更精緻
            } else {
                header.style.background = 'rgba(26, 60, 64, 0.95)';
                header.style.boxShadow = 'none';
                header.style.padding = '20px 0';
            }
        });
    }

    console.log("◈ 靈境芳療：能量場域已準備就緒 ◈");
});
