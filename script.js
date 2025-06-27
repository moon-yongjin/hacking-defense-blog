// 관리자 비밀번호 (실제 사용 시 더 안전한 방법으로 변경하세요)
const ADMIN_PASSWORD = "dudtlrdl80*";

// 블로그 포스트 데이터 (로컬 스토리지에서 관리)
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [
    {
        id: 1,
        title: "강력한 비밀번호 만드는 법",
        summary: "해킹으로부터 계정을 보호하는 강력한 비밀번호 생성 방법과 관리 팁을 알아봅니다.",
        content: "비밀번호는 디지털 보안의 첫 번째 방어선입니다. 강력한 비밀번호를 만드는 방법과 안전하게 관리하는 팁을 소개합니다.",
        category: "보안 팁",
        date: "2024.01.15",
        icon: "🔐"
    },
    {
        id: 2,
        title: "피싱 이메일 구별하는 방법",
        summary: "악의적인 피싱 이메일을 구별하고 안전하게 처리하는 방법을 배워봅니다.",
        content: "피싱 이메일은 개인정보를 탈취하려는 악의적인 시도입니다. 피싱 이메일의 특징과 대응 방법을 알아봅니다.",
        category: "사이버 범죄",
        date: "2024.01.10",
        icon: "📧"
    },
    {
        id: 3,
        title: "2단계 인증의 중요성",
        summary: "2단계 인증(2FA)을 설정하는 방법과 왜 중요한지에 대해 알아봅니다.",
        content: "2단계 인증은 계정 보안을 크게 향상시키는 방법입니다. 설정 방법과 보안 효과에 대해 설명합니다.",
        category: "계정 보안",
        date: "2024.01.05",
        icon: "🔒"
    },
    {
        id: 4,
        title: "공용 Wi-Fi 사용 시 주의사항",
        summary: "카페나 공공장소의 무료 Wi-Fi를 안전하게 사용하는 방법을 알아봅니다.",
        content: "공용 Wi-Fi는 편리하지만 보안 위험이 따릅니다. 안전하게 사용하는 방법과 주의사항을 알아봅니다.",
        category: "네트워크 보안",
        date: "2024.01.01",
        icon: "💻"
    }
];

// 페이지 로드 시 블로그 포스트 렌더링
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    updateFooterYear();
});

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
function updateFooterYear() {
    const year = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    footer.innerHTML = `&copy; ${year} 해킹에 대처하자. 모든 권리 보유.`;
}

// 블로그 포스트 렌더링 함수
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogGrid.appendChild(postElement);
    });
}

// 블로그 포스트 요소 생성
function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.onclick = () => showPostDetail(post);
    
    article.innerHTML = `
        <div class="blog-card-image">
            <div class="image-placeholder">${post.icon}</div>
        </div>
        <div class="blog-card-content">
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <div class="blog-meta">
                <span class="date">${post.date}</span>
                <span class="category">${post.category}</span>
            </div>
        </div>
    `;
    
    return article;
}

// 글쓰기 폼 제출 처리
document.getElementById('writeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const summary = document.getElementById('summary').value;
    const content = document.getElementById('content').value;
    const adminPassword = document.getElementById('adminPassword').value;
    
    // 관리자 비밀번호 확인
    if (adminPassword !== ADMIN_PASSWORD) {
        showModal('errorModal');
        return;
    }
    
    // 새 포스트 생성
    const newPost = {
        id: Date.now(),
        title: title,
        summary: summary,
        content: content,
        category: category,
        date: new Date().toLocaleDateString('ko-KR'),
        icon: getCategoryIcon(category)
    };
    
    // 포스트 추가
    blogPosts.unshift(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    // 블로그 목록 업데이트
    renderBlogPosts();
    
    // 폼 초기화
    this.reset();
    
    // 성공 모달 표시
    showModal('successModal');
});

// 카테고리별 아이콘 반환
function getCategoryIcon(category) {
    const icons = {
        '보안 팁': '🔐',
        '사이버 범죄': '📧',
        '계정 보안': '🔒',
        '네트워크 보안': '💻',
        '암호화': '🔑'
    };
    return icons[category] || '📝';
}

// 모달 표시 함수
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    // 모달 외부 클릭 시 닫기
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    };
    
    // X 버튼 클릭 시 닫기
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = closeModal;
}

// 모달 닫기 함수
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// 포스트 상세 보기 (간단한 alert로 구현)
function showPostDetail(post) {
    const detailText = `
제목: ${post.title}
카테고리: ${post.category}
작성일: ${post.date}

내용:
${post.content}
    `;
    alert(detailText);
}

// 전역 함수로 모달 닫기 함수 노출
window.closeModal = closeModal; 