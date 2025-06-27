// 부드러운 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 헤더 스크롤 효과
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// 폼 제출 처리
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // 실제로는 서버로 데이터를 전송하는 코드가 들어갑니다
        alert('메시지가 성공적으로 전송되었습니다!');
        this.reset();
    } else {
        alert('모든 필드를 입력해주세요.');
    }
});

// 블로그 카드 클릭 효과
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', function() {
        // 실제로는 블로그 포스트 페이지로 이동하는 코드가 들어갑니다
        const title = this.querySelector('h3').textContent;
        alert(`"${title}" 포스트를 읽어보세요!`);
    });
});

// 스킬 태그 애니메이션
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.blog-card, .skill-tag');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});

// 스크롤 시 요소 페이드인 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 관찰할 요소들
document.querySelectorAll('.blog-card, .skill-tag, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 현재 연도 자동 업데이트
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    footer.innerHTML = `&copy; ${year} 해킹에 대처하자. 모든 권리 보유.`;
}); 